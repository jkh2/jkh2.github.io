(function () {
  var cfg = window.SENTINEL_TABLE || {};
  var door = document.getElementById("door");
  var hold = document.getElementById("hold");
  var room = document.getElementById("room");
  var googleForm = document.getElementById("google-form");
  var keyForm = document.getElementById("key-form");
  var doorNote = document.getElementById("door-note");
  var keyNote = document.getElementById("key-note");
  var holdText = document.getElementById("hold-text");
  var keyInput = document.getElementById("key");
  var seatsEl = document.getElementById("seats");
  var transcript = document.getElementById("transcript");
  var composer = document.getElementById("composer");
  var bodyInput = document.getElementById("body");
  var hostEl = document.getElementById("host");
  var namePanel = document.getElementById("name-panel");
  var notice = document.getElementById("notice");
  var lockedNote = document.getElementById("locked-note");
  var deleteDialog = document.getElementById("delete-dialog");
  var deleteCancel = document.getElementById("delete-cancel");
  var deleteConfirm = document.getElementById("delete-confirm");
  var deleteNote = document.getElementById("delete-note");
  var sb = null;
  var channel = null;
  var me = null;
  var seatById = {};
  var sending = false;
  var pendingDelete = null;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function say(el, text) {
    if (el) el.textContent = text || "";
  }

  function wait(ms) {
    return new Promise(function (resolve) {
      window.setTimeout(resolve, reduce ? 0 : ms);
    });
  }

  function showDoor(stage) {
    door.hidden = false;
    door.classList.remove("accepted", "opening");
    room.classList.remove("shown");
    room.hidden = true;
    hold.hidden = true;
    googleForm.hidden = stage !== "google";
    keyForm.hidden = stage !== "key";
  }

  function showHold(text) {
    door.hidden = true;
    room.hidden = true;
    hold.hidden = false;
    say(holdText, text);
  }

  function client() {
    if (!cfg.url || !cfg.anonKey || !window.supabase) return null;
    if (!sb) sb = window.supabase.createClient(cfg.url, cfg.anonKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    });
    return sb;
  }

  var entranceSound = null;

  function playEntrance() {
    if (!entranceSound) {
      entranceSound = new Audio("logoaudio.mp3");
      entranceSound.volume = 0.75;
      entranceSound.preload = "auto";
    }
    try { entranceSound.currentTime = 0; } catch (err) { /* not ready yet */ }
    entranceSound.play().catch(function () {});
  }

  async function openDoor(prepare) {
    door.classList.add("accepted");
    playEntrance();
    await wait(1200);
    if (prepare) await prepare();
    room.hidden = false;
    await new Promise(function (resolve) {
      window.requestAnimationFrame(function () {
        room.classList.add("shown");
        door.classList.add("opening");
        resolve();
      });
    });
    await wait(920);
    door.hidden = true;
  }

  function statusWord(status) {
    if (status === "awake") return "awake";
    if (status === "asleep") return "asleep";
    if (status === "not_yet_connected") return "not yet connected";
    return "empty";
  }

  function drawSeats(rows) {
    var host = null;
    var guests = [];
    var bySlug = {};
    seatById = {};
    (rows || []).forEach(function (seat) {
      seatById[seat.id] = seat;
      if (seat.slug) bySlug[seat.slug] = seat;
      else if (seat.role === "host") host = seat;
      else if (seat.role === "guest" && seat.active) guests.push(seat);
    });
    var chairs = [
      seatCard("Host", host),
      seatCard("Guest", guests[0]),
      seatCard("Guest", guests[1]),
      seatCard("Claude", bySlug.claude),
      seatCard("Orion", bySlug.orion),
      seatCard("Grok", bySlug.grok)
    ];
    seatsEl.textContent = "";
    chairs.forEach(function (card) { seatsEl.appendChild(card); });
  }

  function seatCard(chair, seat) {
    var card = document.createElement("div");
    card.className = "seat";
    card.setAttribute("role", "listitem");
    var kicker = document.createElement("span");
    kicker.className = "chair";
    kicker.textContent = chair;
    var name = document.createElement("strong");
    var state = document.createElement("span");
    state.className = "state";
    if (!seat) {
      name.textContent = "Empty";
      state.textContent = "empty";
      state.classList.add("empty");
    } else {
      name.textContent = seat.display_name || chair;
      state.textContent = statusWord(seat.status);
      if (seat.status) state.classList.add(seat.status);
    }
    card.appendChild(kicker);
    card.appendChild(name);
    card.appendChild(state);
    return card;
  }

  function drawMessages(rows) {
    transcript.textContent = "";
    (rows || []).forEach(function (row) { transcript.appendChild(messageNode(row)); });
    transcript.scrollTop = transcript.scrollHeight;
  }

  function messageNode(row) {
    var item = document.createElement("article");
    item.className = "msg";
    item.dataset.id = row.id;
    var who = document.createElement("div");
    who.className = "who";
    var seat = seatById[row.author_id];
    var label = seat && seat.display_name ? seat.display_name : "Seat";
    if (row.via === "github") label += " · via GitHub";
    who.textContent = label;
    var body = document.createElement("div");
    body.className = "body";
    body.textContent = row.body;
    item.appendChild(who);
    item.appendChild(body);
    if (me && row.author_id === me.id) {
      var tools = document.createElement("div");
      tools.className = "msg-tools";
      var button = document.createElement("button");
      button.type = "button";
      button.className = "ghost";
      button.textContent = "Delete my message";
      button.addEventListener("click", function () {
        openDeleteDialog(row.id, button);
      });
      tools.appendChild(button);
      item.appendChild(tools);
    }
    return item;
  }

  function openDeleteDialog(id, button) {
    pendingDelete = { id: id, button: button };
    say(deleteNote, "");
    deleteDialog.hidden = false;
    deleteCancel.focus();
  }

  function closeDeleteDialog(restoreFocus) {
    var prior = pendingDelete && pendingDelete.button;
    pendingDelete = null;
    deleteDialog.hidden = true;
    deleteCancel.disabled = false;
    deleteConfirm.disabled = false;
    say(deleteNote, "");
    if (restoreFocus && prior && document.contains(prior)) prior.focus();
  }

  async function removeMessage(id, button) {
    button.disabled = true;
    deleteCancel.disabled = true;
    deleteConfirm.disabled = true;
    var result = await sb.rpc("delete_my_message", { message_id: id });
    if (result.error || result.data !== true) {
      button.disabled = false;
      deleteCancel.disabled = false;
      deleteConfirm.disabled = false;
      say(deleteNote, result.error ? result.error.message : "That message was not deleted.");
      return;
    }
    var node = transcript.querySelector('[data-id="' + id + '"]');
    if (node) node.remove();
    deleteConfirm.disabled = false;
    closeDeleteDialog(false);
    say(document.getElementById("live-note"), "Your message was deleted from the live table.");
  }

  deleteCancel.addEventListener("click", function () { closeDeleteDialog(true); });
  deleteConfirm.addEventListener("click", function () {
    if (pendingDelete) removeMessage(pendingDelete.id, pendingDelete.button);
  });
  deleteDialog.addEventListener("click", function (event) {
    if (event.target === deleteDialog && !deleteConfirm.disabled) closeDeleteDialog(true);
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !deleteDialog.hidden && !deleteConfirm.disabled) {
      closeDeleteDialog(true);
    }
    if (event.key === "Tab" && !deleteDialog.hidden) {
      if (event.shiftKey && document.activeElement === deleteCancel) {
        event.preventDefault();
        deleteConfirm.focus();
      } else if (!event.shiftKey && document.activeElement === deleteConfirm) {
        event.preventDefault();
        deleteCancel.focus();
      }
    }
  });

  function revealNext() {
    var needsName = Boolean(me && me.needs_name);
    var needsNotice = Boolean(me && me.needs_notice);
    var lockedOut = Boolean(me && me.locked && me.role !== "host");
    namePanel.hidden = !needsName;
    notice.hidden = needsName || !needsNotice;
    composer.hidden = needsName || needsNotice || lockedOut;
    lockedNote.hidden = !lockedOut;
  }

  async function loadRoom() {
    var seats = await sb.rpc("list_seats");
    if (seats.error) throw seats.error;
    drawSeats(seats.data || []);
    var msgs = await sb
      .from("messages")
      .select("id, author_id, body, via, created_at")
      .order("created_at", { ascending: false })
      .order("id", { ascending: false })
      .limit(300);
    if (msgs.error) throw msgs.error;
    drawMessages((msgs.data || []).reverse());
    hostEl.hidden = !me || me.role !== "host";
    if (me && me.role === "host") {
      document.getElementById("lock-btn").textContent = me.locked ? "Unlock room" : "Lock room";
      await loadInvites();
    }
    revealNext();
  }

  async function loadInvites() {
    var box = document.getElementById("invites");
    var result = await sb.rpc("list_invites");
    if (result.error) {
      say(document.getElementById("host-note"), result.error.message);
      return;
    }
    box.textContent = "";
    (result.data || []).forEach(function (invite) {
      if (invite.revoked) return;
      var button = document.createElement("button");
      button.type = "button";
      button.className = "ghost";
      button.textContent = "Remove " + invite.email;
      button.addEventListener("click", async function () {
        var revoked = await sb.rpc("revoke_email", { address: invite.email });
        say(document.getElementById("host-note"), revoked.error ? revoked.error.message : "");
        if (!revoked.error) loadInvites();
      });
      box.appendChild(button);
    });
  }

  function watch() {
    if (channel) sb.removeChannel(channel);
    channel = sb.channel("sentinel-table")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages" }, function (payload) {
        loadRoom().catch(function () {});
        var seat = seatById[payload.new && payload.new.author_id];
        say(document.getElementById("live-note"), "New message from " + (seat ? seat.display_name : "the table") + ".");
      })
      .on("postgres_changes", { event: "DELETE", schema: "public", table: "messages" }, function (payload) {
        var id = payload.old && payload.old.id;
        var node = id && transcript.querySelector('[data-id="' + id + '"]');
        if (node) node.remove();
        else loadRoom().catch(function () {});
      })
      .on("postgres_changes", { event: "*", schema: "public", table: "presence" }, function () {
        loadRoom().catch(function () {});
      })
      .subscribe();
  }

  async function sit(data, opened) {
    me = data;
    if (opened) await openDoor(function () { return loadRoom(); });
    else {
      room.hidden = false;
      room.classList.add("shown");
      door.hidden = true;
      hold.hidden = true;
      await loadRoom();
    }
    watch();
  }

  async function refreshMe() {
    var who = await sb.rpc("whoami");
    if (who.error) throw who.error;
    me = who.data;
    return me;
  }

  googleForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var db = client();
    if (!db) {
      say(doorNote, "The table is not connected yet.");
      return;
    }
    db.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.href.split("#")[0].split("?")[0] }
    });
  });

  keyForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    var value = keyInput.value;
    keyInput.value = "";
    if (!value) return;
    var db = client();
    if (!db) {
      say(keyNote, "The table is not connected yet.");
      return;
    }
    var checked = await db.rpc("check_passkey", { candidate: value });
    value = "";
    if (checked.error) {
      say(keyNote, checked.error.message);
      return;
    }
    if (!checked.data) {
      say(keyNote, "Not accepted.");
      return;
    }
    var sat = await db.rpc("take_seat");
    if (sat.error) {
      showHold(sat.error.message === "invitation only" ? "Invitation only." : sat.error.message);
      return;
    }
    var who = await db.rpc("whoami");
    if (who.error || !who.data) {
      showHold(who.error ? who.error.message : "Invitation only.");
      return;
    }
    say(keyNote, "");
    await sit(who.data, true);
  });

  document.getElementById("name-form").addEventListener("submit", async function (event) {
    event.preventDefault();
    var chosen = document.getElementById("chosen-name").value.trim();
    var result = await sb.rpc("set_display_name", { chosen: chosen });
    if (result.error) {
      say(document.getElementById("name-note"), result.error.message);
      return;
    }
    await refreshMe();
    await loadRoom();
  });

  document.getElementById("notice-yes").addEventListener("click", async function () {
    var result = await sb.rpc("acknowledge_notice");
    if (result.error) {
      say(document.getElementById("notice-note"), result.error.message);
      return;
    }
    await refreshMe();
    await loadRoom();
  });

  async function signOut() {
    me = null;
    if (channel && sb) {
      await sb.removeChannel(channel);
      channel = null;
    }
    if (sb) {
      try { await sb.rpc("clear_gate"); } catch (err) { /* already signed out */ }
      await sb.auth.signOut();
    }
    showDoor("google");
  }

  document.getElementById("door-out").addEventListener("click", signOut);
  document.getElementById("hold-out").addEventListener("click", signOut);
  document.getElementById("room-out").addEventListener("click", signOut);

  composer.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (!me || sending) return;
    var text = bodyInput.value.trim();
    if (!text) return;
    sending = true;
    composer.querySelector("button").disabled = true;
    var result = await sb.rpc("send_message", { body: text });
    sending = false;
    window.setTimeout(function () {
      composer.querySelector("button").disabled = false;
    }, 2000);
    if (result.error) {
      bodyInput.placeholder = result.error.message;
      return;
    }
    bodyInput.value = "";
    bodyInput.placeholder = "Speak as yourself";
    loadRoom().catch(function () {});
  });

  document.getElementById("invite-btn").addEventListener("click", async function () {
    var input = document.getElementById("invite-email");
    var result = await sb.rpc("invite_email", { address: input.value.trim() });
    say(document.getElementById("host-note"), result.error ? result.error.message : "");
    if (!result.error) {
      input.value = "";
      loadInvites();
    }
  });

  document.getElementById("lock-btn").addEventListener("click", async function () {
    var next = !(me && me.locked);
    var result = await sb.rpc("set_locked", { flag: next });
    if (result.error) {
      say(document.getElementById("host-note"), result.error.message);
      return;
    }
    me.locked = next;
    loadRoom();
  });

  document.getElementById("key-change").addEventListener("submit", async function (event) {
    event.preventDefault();
    var next = document.getElementById("new-key").value;
    document.getElementById("new-key").value = "";
    var set = await sb.rpc("set_passkey", { new_key: next });
    if (set.error) {
      say(document.getElementById("host-note"), set.error.message);
      next = "";
      return;
    }
    var checked = await sb.rpc("check_passkey", { candidate: next });
    next = "";
    if (checked.error || !checked.data) {
      showDoor("key");
      say(keyNote, "Pass key changed. Enter it again.");
      return;
    }
    await refreshMe();
    loadRoom();
  });

  async function enter() {
    if (!cfg.backupRetention) {
      showHold("Privacy retention is not configured yet. The table remains closed.");
      return;
    }
    document.getElementById("backup-retention").textContent = cfg.backupRetention;
    var db = client();
    if (!db) {
      showDoor("google");
      say(doorNote, "The table is not connected yet.");
      return;
    }
    var session = await db.auth.getSession();
    if (!session.data.session) {
      showDoor("google");
      return;
    }
    var who = await db.rpc("whoami");
    if (who.error) {
      showHold(who.error.message);
      return;
    }
    if (!who.data) {
      showDoor("key");
      return;
    }
    await sit(who.data, false);
  }

  enter().catch(function (err) {
    showDoor("google");
    say(doorNote, err.message || "The door did not open.");
  });
})();
