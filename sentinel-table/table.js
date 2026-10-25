(function () {
  var cfg = window.SENTINEL_TABLE || {};
  var door = document.getElementById("door");
  var hold = document.getElementById("hold");
  var room = document.getElementById("room");
  var doorNote = document.getElementById("door-note");
  var holdText = document.getElementById("hold-text");
  var keyForm = document.getElementById("key-form");
  var keyInput = document.getElementById("key");
  var seatsEl = document.getElementById("seats");
  var transcript = document.getElementById("transcript");
  var composer = document.getElementById("composer");
  var bodyInput = document.getElementById("body");
  var hostEl = document.getElementById("host");
  var pendingKey = "";
  var sb = null;
  var me = null;
  var seatById = {};
  var sending = false;

  function show(which) {
    door.hidden = which !== "door";
    hold.hidden = which !== "hold";
    room.hidden = which !== "room";
  }

  function say(el, text) {
    el.textContent = text || "";
  }

  function rememberKey(value) {
    pendingKey = value;
    try {
      sessionStorage.setItem("sentinel-table-key", value);
    } catch (err) {
      /* private mode */
    }
  }

  function takeKey() {
    var value = pendingKey;
    if (!value) {
      try {
        value = sessionStorage.getItem("sentinel-table-key") || "";
      } catch (err) {
        value = "";
      }
    }
    pendingKey = "";
    try {
      sessionStorage.removeItem("sentinel-table-key");
    } catch (err) {
      /* ignore */
    }
    return value;
  }

  function client() {
    if (!cfg.url || !cfg.anonKey || !window.supabase) return null;
    if (!sb) sb = window.supabase.createClient(cfg.url, cfg.anonKey);
    return sb;
  }

  keyForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var value = keyInput.value;
    keyInput.value = "";
    if (!value) return;
    var db = client();
    if (!db) {
      say(doorNote, "The table is not connected yet.");
      return;
    }
    rememberKey(value);
    db.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.href.split("#")[0] }
    });
  });

  document.getElementById("hold-out").addEventListener("click", signOut);
  document.getElementById("sign-out").addEventListener("click", signOut);

  async function signOut() {
    takeKey();
    me = null;
    if (sb) await sb.auth.signOut();
    show("door");
  }

  function statusLabel(status) {
    if (status === "awake") return "awake";
    if (status === "not_yet_connected") return "not yet connected";
    return "asleep";
  }

  function drawSeats(rows) {
    seatsEl.textContent = "";
    seatById = {};
    (rows || []).forEach(function (seat) {
      seatById[seat.id] = seat;
      var card = document.createElement("div");
      card.className = "seat";
      var name = document.createElement("strong");
      name.textContent = seat.display_name;
      var state = document.createElement("span");
      state.textContent = seat.kind === "sentinel" ? statusLabel(seat.status) : seat.role;
      card.appendChild(name);
      card.appendChild(state);
      seatsEl.appendChild(card);
    });
  }

  function drawMessages(rows) {
    transcript.textContent = "";
    (rows || []).forEach(function (row) {
      var item = document.createElement("article");
      item.className = "msg";
      var who = document.createElement("div");
      who.className = "who";
      var seat = seatById[row.author_id];
      var label = seat ? seat.display_name : "Seat";
      if (row.via === "github") label += " · via GitHub";
      who.textContent = label;
      var body = document.createElement("div");
      body.className = "body";
      body.textContent = row.body;
      item.appendChild(who);
      item.appendChild(body);
      transcript.appendChild(item);
    });
    transcript.scrollTop = transcript.scrollHeight;
  }

  async function loadRoom() {
    var { data: seatData, error: seatError } = await sb.rpc("list_seats");
    if (seatError) throw seatError;
    drawSeats(seatData || []);
    var { data: msgs, error: msgError } = await sb
      .from("messages")
      .select("id, author_id, body, via, created_at")
      .order("created_at", { ascending: true })
      .limit(300);
    if (msgError) throw msgError;
    drawMessages(msgs || []);
    hostEl.hidden = !me || me.role !== "host";
    if (me && me.role === "host") {
      document.getElementById("lock-btn").textContent = me.locked ? "Unlock room" : "Lock room";
      await loadInvites();
    }
    var lockedNote = document.getElementById("locked-note");
    composer.hidden = Boolean(me && me.locked && me.role !== "host");
    if (!lockedNote && me && me.locked && me.role !== "host") {
      lockedNote = document.createElement("p");
      lockedNote.id = "locked-note";
      lockedNote.className = "meta";
      lockedNote.textContent = "The room is locked.";
      composer.parentNode.insertBefore(lockedNote, composer);
    }
    if (lockedNote && !(me && me.locked && me.role !== "host")) lockedNote.remove();
  }

  async function loadInvites() {
    var box = document.getElementById("invites");
    var { data, error } = await sb.rpc("list_invites");
    if (error) {
      say(box, error.message);
      return;
    }
    box.textContent = "";
    (data || []).forEach(function (invite) {
      if (invite.revoked) return;
      var button = document.createElement("button");
      button.type = "button";
      button.className = "ghost";
      button.textContent = "Remove " + invite.email;
      button.addEventListener("click", async function () {
        var result = await sb.rpc("revoke_email", { address: invite.email });
        if (result.error) say(doorNote, result.error.message);
        else loadInvites();
      });
      box.appendChild(button);
    });
  }

  function watch() {
    sb.channel("sentinel-table")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages" }, function () {
        loadRoom().catch(function () {});
      })
      .on("postgres_changes", { event: "*", schema: "public", table: "presence" }, function () {
        loadRoom().catch(function () {});
      })
      .subscribe();
  }

  composer.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (!me || sending) return;
    var text = bodyInput.value.trim();
    if (!text) return;
    sending = true;
    composer.querySelector("button").disabled = true;
    var { error } = await sb.from("messages").insert({ author_id: me.id, body: text });
    sending = false;
    setTimeout(function () {
      composer.querySelector("button").disabled = false;
    }, 2000);
    if (error) {
      bodyInput.placeholder = error.message;
      return;
    }
    bodyInput.value = "";
    bodyInput.placeholder = "Speak as yourself";
  });

  document.getElementById("invite-btn").addEventListener("click", async function () {
    var address = document.getElementById("invite-email").value.trim();
    var { error } = await sb.rpc("invite_email", { address: address });
    if (error) {
      document.getElementById("invite-email").placeholder = error.message;
      return;
    }
    document.getElementById("invite-email").value = "";
    loadInvites();
  });

  document.getElementById("lock-btn").addEventListener("click", async function () {
    var next = !(me && me.locked);
    var { error } = await sb.rpc("set_locked", { flag: next });
    if (error) return;
    me.locked = next;
    loadRoom();
  });

  document.getElementById("key-change").addEventListener("submit", async function (event) {
    event.preventDefault();
    var next = document.getElementById("new-key").value;
    document.getElementById("new-key").value = "";
    var { error } = await sb.rpc("set_passkey", { new_key: next });
    if (error) {
      say(holdText, error.message);
      return;
    }
    rememberKey(next);
    var checked = await sb.rpc("check_passkey", { candidate: next });
    takeKey();
    if (checked.error || !checked.data) {
      show("door");
      say(doorNote, "Pass key changed. Enter it again.");
      return;
    }
    me.locked = me.locked;
    loadRoom();
  });

  async function enter() {
    var db = client();
    if (!db) {
      show("door");
      return;
    }
    var session = await db.auth.getSession();
    if (!session.data.session) {
      show("door");
      return;
    }
    var key = takeKey();
    if (key) {
      var checked = await db.rpc("check_passkey", { candidate: key });
      if (checked.error) {
        show("door");
        say(doorNote, checked.error.message);
        return;
      }
      if (!checked.data) {
        show("door");
        say(doorNote, "Not accepted.");
        return;
      }
    }
    var who = await db.rpc("whoami");
    if (who.error) {
      show("hold");
      say(holdText, who.error.message);
      return;
    }
    if (!who.data) {
      var sat = await db.rpc("take_seat");
      if (sat.error) {
        show("hold");
        say(holdText, sat.error.message === "invitation only" ? "Invitation only." : sat.error.message);
        return;
      }
      who = await db.rpc("whoami");
    }
    if (!who.data) {
      show("hold");
      say(holdText, "Invitation only.");
      return;
    }
    me = who.data;
    show("room");
    await loadRoom();
    watch();
  }

  enter().catch(function (err) {
    show("door");
    say(doorNote, err.message || "The door did not open.");
  });
})();
