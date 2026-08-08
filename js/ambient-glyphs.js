// Ambient background glyphs: small gold triangles and Bet marks that form a
// loose, speed-sensitive swarm around the pointer, then drift home when it gets
// away. Slow movement gathers the field; fast movement breaks the attraction.
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const NS = 'http://www.w3.org/2000/svg';

  // Home positions as percentages of the viewport. These preserve the original
  // scatter while giving every glyph a stable place to return to.
  const triangles = [
    { x: 8,  y: 12, size: 16 },
    { x: 92, y: 8,  size: 12 },
    { x: 18, y: 78, size: 20 },
    { x: 88, y: 62, size: 14 },
    { x: 48, y: 92, size: 12 },
    { x: 6,  y: 45, size: 18 },
    { x: 95, y: 40, size: 15 },
    { x: 42, y: 8,  size: 13 },
    { x: 63, y: 18, size: 17 },
    { x: 37, y: 68, size: 14 },
    { x: 78, y: 56, size: 19 },
    { x: 25, y: 38, size: 12 },
    { x: 60, y: 76, size: 16 },
    { x: 97, y: 88, size: 13 },
    { x: 3,  y: 26, size: 13 },
    { x: 17, y: 29, size: 16 },
    { x: 35, y: 3,  size: 12 },
    { x: 52, y: 32, size: 15 },
    { x: 72, y: 27, size: 13 },
    { x: 98, y: 20, size: 17 },
    { x: 3,  y: 70, size: 15 },
    { x: 21, y: 66, size: 12 },
    { x: 40, y: 84, size: 18 },
    { x: 64, y: 58, size: 14 },
    { x: 82, y: 74, size: 16 },
    { x: 91, y: 48, size: 12 },
    { x: 40, y: 48, size: 15 },
    { x: 73, y: 96, size: 13 }
  ];
  const betGlyphs = [
    { x: 30, y: 15, size: 19 },
    { x: 70, y: 85, size: 15 },
    { x: 12, y: 55, size: 17 },
    { x: 85, y: 25, size: 14 },
    { x: 55, y: 45, size: 18 },
    { x: 44, y: 24, size: 15 },
    { x: 76, y: 10, size: 18 },
    { x: 24, y: 90, size: 14 },
    { x: 96, y: 68, size: 17 },
    { x: 68, y: 36, size: 16 },
    { x: 20, y: 8,  size: 16 },
    { x: 35, y: 34, size: 14 },
    { x: 57, y: 6,  size: 18 },
    { x: 82, y: 42, size: 15 },
    { x: 8,  y: 88, size: 17 },
    { x: 31, y: 57, size: 13 },
    { x: 50, y: 67, size: 16 },
    { x: 73, y: 68, size: 14 },
    { x: 89, y: 91, size: 18 },
    { x: 99, y: 55, size: 15 }
  ];

  function makeTriangleSVG(size) {
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    const poly = document.createElementNS(NS, 'polygon');
    poly.setAttribute('points', '12,3 21,20 3,20');
    poly.setAttribute('fill', 'none');
    poly.setAttribute('stroke', 'var(--accent-gold, #c9a84c)');
    poly.setAttribute('stroke-width', '1.3');
    svg.appendChild(poly);
    return svg;
  }

  function createGlyph(def, kind, index, pulseDelay, pulseDur, minOp, maxOp) {
    const wrap = document.createElement('div');
    wrap.className = 'ambient-glyph ' + kind;
    wrap.setAttribute('aria-hidden', 'true');
    wrap.style.left = def.x + 'vw';
    wrap.style.top = def.y + 'vh';

    const pulse = document.createElement('div');
    pulse.className = 'pulse';
    pulse.style.setProperty('--pulse-delay', pulseDelay + 's');
    pulse.style.setProperty('--pulse-dur', pulseDur + 's');
    pulse.style.setProperty('--min-op', minOp);
    pulse.style.setProperty('--max-op', maxOp);

    if (kind === 'tri') {
      pulse.appendChild(makeTriangleSVG(def.size));
    } else {
      const span = document.createElement('span');
      span.textContent = '\u05D1\u05BC'; // Bet with dagesh, matching the main seal
      span.style.fontSize = def.size + 'px';
      pulse.appendChild(span);
    }

    wrap.appendChild(pulse);
    document.body.appendChild(wrap);

    // The golden-angle spacing keeps the gathered symbols in a small organic
    // knot instead of placing every glyph on exactly the same pixel.
    const phase = index * 2.399963;
    return {
      el: wrap,
      homeXPct: def.x,
      homeYPct: def.y,
      offsetX: 0,
      offsetY: 0,
      velocityX: 0,
      velocityY: 0,
      phase,
      captured: false,
      pull: 0,
      clusterX: Math.cos(phase) * (6 + (index % 4) * 4),
      clusterY: Math.sin(phase) * (6 + (index % 4) * 4),
      spring: 8 + (index % 3) * 0.8,
      wanderX: 0,
      wanderY: 0,
      wanderTargetX: Math.cos(phase * 1.3) * (18 + (index % 5) * 4),
      wanderTargetY: Math.sin(phase * 1.3) * (18 + (index % 5) * 4),
      nextWanderAt: performance.now() + 1800 + (index % 7) * 310,
      randomState: Math.imul(index + 1, 0x9e3779b1) >>> 0
    };
  }

  const glyphs = [];
  triangles.forEach((t, i) => glyphs.push(
    createGlyph(t, 'tri', i, i * 0.5, 8, 0.12, 0.21)
  ));
  betGlyphs.forEach((b, i) => glyphs.push(
    createGlyph(b, 'bet', triangles.length + i, 3 + i * 0.6, 10, 0.1, 0.19)
  ));

  const pointer = {
    active: false,
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    lastMoveAt: 0,
    speed: 0,
    escapedUntil: 0
  };

  // A fast sweep trips a short escape latch. The pause prevents the swarm from
  // immediately reacquiring a pointer that has just outrun it.
  const ESCAPE_TRIGGER_SPEED = 880;
  const ESCAPE_COOLDOWN_MS = 2200;
  const MAGNET_RADIUS = 170;
  const MAGNET_STRENGTH = 1.1;
  const CAPTURE_DISTANCE = 54;
  const GATHER_RATE = 3.4;
  const RELEASE_RATE = 7;
  const MAX_GLYPH_SPEED = 430;
  const FLASH_RADIUS = 90;
  const AFTERGLOW_DURATION_MS = 1200;
  let afterglowTimer = null;
  let glowingGlyphs = [];
  let lastFrameAt = performance.now();

  // Site-wide easter egg: a real glyph capture-and-click gets a quiet sound,
  // every time it happens (not once-per-load — James's call, since each
  // light-up is its own discovery, unlike the one-shot hero-seal greeting).
  // Root-relative path so it resolves the same from any folder depth.
  const swarmSound = new Audio('/assets/audio/sound1b.mp3');
  swarmSound.volume = 0.4;
  swarmSound.preload = 'auto';
  function playSwarmSound() {
    // Skip only while the previous play is still actually going, so a click
    // mid-clip doesn't restack overlapping copies. This is NOT a permanent
    // once-only lock — a bug in the prior version set a "played" flag before
    // ever confirming play() succeeded, so one silently-failed first attempt
    // (autoplay policy, a slow first load, anything) would look identical to
    // "never works" for the rest of the page's life. Resetting currentTime
    // instead means every real click gets a real, fresh attempt.
    if (!swarmSound.paused) return;
    swarmSound.currentTime = 0;
    swarmSound.play().catch((err) => {
      if (window.__glyphSoundDebug) console.warn('[ambient-glyphs] swarmSound.play() failed:', err);
    });
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function smoothstep(value) {
    const t = clamp(value, 0, 1);
    return t * t * (3 - 2 * t);
  }

  function nextRandom(glyph) {
    glyph.randomState = (Math.imul(glyph.randomState, 1664525) + 1013904223) >>> 0;
    return glyph.randomState / 4294967296;
  }

  function handlePointerMove(event) {
    // Touch scrolling should remain native; mouse and pen pointers drive the
    // decorative field without capturing or blocking any input.
    if (event.pointerType === 'touch') return;

    const now = performance.now();
    if (pointer.active) {
      // Cap idle time so the first quick sweep after hovering is measured as a
      // sweep, not averaged across the entire preceding pause.
      const elapsed = clamp(now - pointer.lastMoveAt, 8, 50);
      const travelled = Math.hypot(event.clientX - pointer.lastX, event.clientY - pointer.lastY);
      const instantSpeed = (travelled / elapsed) * 1000;
      pointer.speed = pointer.speed * 0.58 + instantSpeed * 0.42;
      if (pointer.speed >= ESCAPE_TRIGGER_SPEED) {
        pointer.escapedUntil = now + ESCAPE_COOLDOWN_MS;
        releaseCapturedSwarm(true);
      }
    } else {
      pointer.speed = 0;
      pointer.active = true;
    }

    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.lastX = event.clientX;
    pointer.lastY = event.clientY;
    pointer.lastMoveAt = now;
  }

  function releasePointer() {
    pointer.active = false;
    pointer.speed = 0;
    releaseFlash();
    releaseCapturedSwarm(true);
  }

  function releaseCapturedSwarm(immediate) {
    glyphs.forEach((glyph) => {
      glyph.captured = false;
      glyph.el.classList.remove('swarm-captured');
      if (immediate) glyph.pull = Math.min(glyph.pull, 0.12);
    });
  }

  function releaseFlash() {
    if (glowingGlyphs.length === 0) return;
    if (afterglowTimer !== null) {
      clearTimeout(afterglowTimer);
      afterglowTimer = null;
    }

    const fadingGlyphs = glowingGlyphs.slice();
    glowingGlyphs = [];
    fadingGlyphs.forEach((glyph) => {
      glyph.el.classList.remove('swarm-flash');
      glyph.el.classList.add('swarm-afterglow');
    });

    afterglowTimer = window.setTimeout(() => {
      fadingGlyphs.forEach((glyph) => glyph.el.classList.remove('swarm-afterglow'));
      afterglowTimer = null;
    }, AFTERGLOW_DURATION_MS);
  }

  function flashSwarm(event) {
    if (event.pointerType === 'touch' || event.button !== 0) return;

    const capturedGlyphs = glyphs.filter((glyph) => glyph.captured);
    const nearbyCount = capturedGlyphs.reduce((count, glyph) => {
      const glyphX = (glyph.homeXPct / 100) * window.innerWidth + glyph.offsetX;
      const glyphY = (glyph.homeYPct / 100) * window.innerHeight + glyph.offsetY;
      const distance = Math.hypot(event.clientX - glyphX, event.clientY - glyphY);
      return count + (distance <= FLASH_RADIUS ? 1 : 0);
    }, 0);

    if (nearbyCount === 0) return;

    playSwarmSound();

    if (afterglowTimer !== null) {
      clearTimeout(afterglowTimer);
      afterglowTimer = null;
    }
    glyphs.forEach((glyph) => glyph.el.classList.remove('swarm-flash', 'swarm-afterglow'));
    // Force a style flush so rapid repeat clicks restart the ignition animation.
    void document.body.offsetWidth;
    glowingGlyphs = capturedGlyphs;
    capturedGlyphs.forEach((glyph) => glyph.el.classList.add('swarm-flash'));
  }

  window.addEventListener('pointermove', handlePointerMove, { passive: true });
  window.addEventListener('pointerdown', flashSwarm, { passive: true });
  window.addEventListener('pointerup', releaseFlash, { passive: true });
  document.documentElement.addEventListener('pointerleave', releasePointer);
  window.addEventListener('blur', releasePointer);
  window.addEventListener('pointercancel', releasePointer);

  function tick(now) {
    const deltaSeconds = Math.min((now - lastFrameAt) / 1000, 0.034);
    lastFrameAt = now;

    // When the pointer pauses, its measured speed should settle quickly to zero
    // so a deliberate hover gathers the whole field.
    if (pointer.active && now - pointer.lastMoveAt > 35) {
      pointer.speed *= Math.exp(-deltaSeconds * 8);
    }

    const escaped = now < pointer.escapedUntil;

    const seconds = now / 1000;
    glyphs.forEach((glyph) => {
      const homeX = (glyph.homeXPct / 100) * window.innerWidth;
      const homeY = (glyph.homeYPct / 100) * window.innerHeight;

      // Each released glyph chooses a new bounded waypoint on its own schedule.
      // Easing between those points produces organic wandering without jitter.
      if (now >= glyph.nextWanderAt) {
        const angle = nextRandom(glyph) * Math.PI * 2;
        const radius = 18 + nextRandom(glyph) * 22;
        glyph.wanderTargetX = Math.cos(angle) * radius;
        glyph.wanderTargetY = Math.sin(angle) * radius;
        glyph.nextWanderAt = now + 2400 + nextRandom(glyph) * 2800;
      }
      const wanderEase = 1 - Math.exp(-deltaSeconds * 0.8);
      glyph.wanderX += (glyph.wanderTargetX - glyph.wanderX) * wanderEase;
      glyph.wanderY += (glyph.wanderTargetY - glyph.wanderY) * wanderEase;

      // A faint independent bob prevents the waypoint paths from reading as
      // straight lines, while the randomized wander supplies the larger motion.
      const idleX = glyph.wanderX + Math.sin(seconds * 0.31 + glyph.phase) * 3;
      const idleY = glyph.wanderY + Math.cos(seconds * 0.27 + glyph.phase * 0.8) * 3;

      const gatheredX = pointer.x - homeX + glyph.clusterX;
      const gatheredY = pointer.y - homeY + glyph.clusterY;
      const screenX = homeX + glyph.offsetX;
      const screenY = homeY + glyph.offsetY;
      const pointerDistance = Math.hypot(pointer.x - screenX, pointer.y - screenY);

      let desiredPull = 0;
      if (pointer.active && !escaped) {
        if (!glyph.captured) {
          const proximity = 1 - clamp(pointerDistance / MAGNET_RADIUS, 0, 1);
          desiredPull = Math.min(1, smoothstep(proximity) * MAGNET_STRENGTH);
          if (pointerDistance <= CAPTURE_DISTANCE) {
            glyph.captured = true;
            glyph.el.classList.add('swarm-captured');
          }
        }
        if (glyph.captured) desiredPull = 1;
      }

      const pullRate = desiredPull > glyph.pull ? GATHER_RATE : RELEASE_RATE;
      glyph.pull += (desiredPull - glyph.pull) * (1 - Math.exp(-deltaSeconds * pullRate));
      const targetX = idleX + (gatheredX - idleX) * glyph.pull;
      const targetY = idleY + (gatheredY - idleY) * glyph.pull;

      // A damped spring gives the swarm weight. The velocity cap is the physical
      // reason a fast pointer can escape while a slow one is eventually caught.
      glyph.velocityX += (targetX - glyph.offsetX) * glyph.spring * deltaSeconds;
      glyph.velocityY += (targetY - glyph.offsetY) * glyph.spring * deltaSeconds;
      const damping = Math.exp(-5.1 * deltaSeconds);
      glyph.velocityX *= damping;
      glyph.velocityY *= damping;

      const velocity = Math.hypot(glyph.velocityX, glyph.velocityY);
      if (velocity > MAX_GLYPH_SPEED) {
        const velocityScale = MAX_GLYPH_SPEED / velocity;
        glyph.velocityX *= velocityScale;
        glyph.velocityY *= velocityScale;
      }

      glyph.offsetX += glyph.velocityX * deltaSeconds;
      glyph.offsetY += glyph.velocityY * deltaSeconds;
      glyph.el.style.transform = `translate(-50%, -50%) translate(${glyph.offsetX.toFixed(1)}px, ${glyph.offsetY.toFixed(1)}px)`;
    });

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();
