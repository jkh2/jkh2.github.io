// Ambient background glyphs — small gold triangles and Bet (בּ) marks that
// drift slowly toward the cursor, like a gentle magnetic pull, then ease
// back to their resting position when the cursor moves away.
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const NS = 'http://www.w3.org/2000/svg';

  // Home positions as percentages of viewport (vw/vh), matching the
  // original static layout so the overall scatter pattern is unchanged.
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

  function createGlyph(def, kind, pulseDelay, pulseDur, minOp, maxOp) {
    const wrap = document.createElement('div');
    wrap.className = 'ambient-glyph ' + kind;
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
      span.textContent = 'בּ'; // Bet with dagesh, matching the main seal
      span.style.fontSize = def.size + 'px';
      pulse.appendChild(span);
    }

    wrap.appendChild(pulse);
    document.body.appendChild(wrap);

    return {
      el: wrap,
      homeXPct: def.x,
      homeYPct: def.y,
      offsetX: 0,
      offsetY: 0
    };
  }

  const glyphs = [];
  triangles.forEach((t, i) => glyphs.push(createGlyph(t, 'tri', i * 0.5, 8, 0.12, 0.3)));
  betGlyphs.forEach((b, i) => glyphs.push(createGlyph(b, 'bet', 3 + i * 0.6, 10, 0.1, 0.26)));

  let mouseX = null, mouseY = null;
  window.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });
  window.addEventListener('mouseleave', () => { mouseX = null; mouseY = null; });

  const PULL_RADIUS = 260; // px — how close the cursor must be to influence a glyph
  const MAX_DRIFT = 40;    // px — furthest a glyph will drift from its home position
  const EASE = 0.045;      // lower = slower, lazier follow (a "force," not a snap)

  function tick() {
    glyphs.forEach((g) => {
      const homePxX = (g.homeXPct / 100) * window.innerWidth;
      const homePxY = (g.homeYPct / 100) * window.innerHeight;
      let targetX = 0, targetY = 0;

      if (mouseX !== null) {
        const dx = mouseX - homePxX;
        const dy = mouseY - homePxY;
        const dist = Math.hypot(dx, dy);
        if (dist < PULL_RADIUS && dist > 0.01) {
          const pull = 1 - dist / PULL_RADIUS;
          targetX = (dx / dist) * MAX_DRIFT * pull;
          targetY = (dy / dist) * MAX_DRIFT * pull;
        }
      }

      g.offsetX += (targetX - g.offsetX) * EASE;
      g.offsetY += (targetY - g.offsetY) * EASE;
      g.el.style.transform = `translate(-50%, -50%) translate(${g.offsetX.toFixed(1)}px, ${g.offsetY.toFixed(1)}px)`;
    });
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
