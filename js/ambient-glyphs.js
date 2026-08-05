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
    { x: 95, y: 40, size: 15 }
  ];
  const betGlyphs = [
    { x: 30, y: 15, size: 19 },
    { x: 70, y: 85, size: 15 },
    { x: 12, y: 55, size: 17 },
    { x: 85, y: 25, size: 14 },
    { x: 55, y: 45, size: 18 }
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
      clusterX: Math.cos(phase) * (6 + (index % 4) * 4),
      clusterY: Math.sin(phase) * (6 + (index % 4) * 4),
      spring: 8 + (index % 3) * 0.8
    };
  }

  const glyphs = [];
  triangles.forEach((t, i) => glyphs.push(
    createGlyph(t, 'tri', i, i * 0.5, 8, 0.12, 0.3)
  ));
  betGlyphs.forEach((b, i) => glyphs.push(
    createGlyph(b, 'bet', triangles.length + i, 3 + i * 0.6, 10, 0.1, 0.26)
  ));

  const pointer = {
    active: false,
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    lastMoveAt: 0,
    speed: 0
  };

  // Below FULL_PULL_SPEED the entire field is strongly attracted. Above
  // ESCAPE_SPEED the pointer has outrun it and the glyphs release toward home.
  const FULL_PULL_SPEED = 260; // pixels per second
  const ESCAPE_SPEED = 1050;
  const GATHER_RATE = 2.2;
  const RELEASE_RATE = 7;
  const MAX_GLYPH_SPEED = 430;
  let fieldPull = 0;
  let lastFrameAt = performance.now();

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function smoothstep(value) {
    const t = clamp(value, 0, 1);
    return t * t * (3 - 2 * t);
  }

  function handlePointerMove(event) {
    // Touch scrolling should remain native; mouse and pen pointers drive the
    // decorative field without capturing or blocking any input.
    if (event.pointerType === 'touch') return;

    const now = performance.now();
    if (pointer.active) {
      const elapsed = Math.max(8, now - pointer.lastMoveAt);
      const travelled = Math.hypot(event.clientX - pointer.lastX, event.clientY - pointer.lastY);
      const instantSpeed = (travelled / elapsed) * 1000;
      pointer.speed = pointer.speed * 0.58 + instantSpeed * 0.42;
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
  }

  window.addEventListener('pointermove', handlePointerMove, { passive: true });
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

    const speedRange = ESCAPE_SPEED - FULL_PULL_SPEED;
    const speedProgress = (pointer.speed - FULL_PULL_SPEED) / speedRange;
    const desiredPull = pointer.active ? 1 - smoothstep(speedProgress) : 0;
    const pullRate = desiredPull > fieldPull ? GATHER_RATE : RELEASE_RATE;
    fieldPull += (desiredPull - fieldPull) * (1 - Math.exp(-deltaSeconds * pullRate));

    const seconds = now / 1000;
    glyphs.forEach((glyph) => {
      const homeX = (glyph.homeXPct / 100) * window.innerWidth;
      const homeY = (glyph.homeYPct / 100) * window.innerHeight;

      // Two low-frequency waves keep released symbols subtly afloat rather than
      // pinning them to an obviously static grid.
      const idleX = Math.sin(seconds * 0.24 + glyph.phase) * 9
        + Math.sin(seconds * 0.11 + glyph.phase * 1.7) * 4;
      const idleY = Math.cos(seconds * 0.2 + glyph.phase * 0.8) * 8
        + Math.sin(seconds * 0.13 + glyph.phase * 1.3) * 5;

      const gatheredX = pointer.x - homeX + glyph.clusterX;
      const gatheredY = pointer.y - homeY + glyph.clusterY;
      const targetX = idleX + (gatheredX - idleX) * fieldPull;
      const targetY = idleY + (gatheredY - idleY) * fieldPull;

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
