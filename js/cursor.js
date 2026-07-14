/**
 * cursor.js
 * Custom cursor – dot, lagging ring, and ambient glow.
 */

const dot  = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
const glow = document.getElementById('cursorGlow');

let ringX = 0, ringY = 0, dotX = 0, dotY = 0;

document.addEventListener('mousemove', e => {
  dotX = e.clientX;
  dotY = e.clientY;
  dot.style.left  = dotX + 'px';
  dot.style.top   = dotY + 'px';
  glow.style.left = dotX + 'px';
  glow.style.top  = dotY + 'px';
});

/* Ring follows with inertial lag */
(function animRing() {
  ringX += (dotX - ringX) * 0.12;
  ringY += (dotY - ringY) * 0.12;
  ring.style.left = ringX + 'px';
  ring.style.top  = ringY + 'px';
  requestAnimationFrame(animRing);
})();

/* Hover expansion on interactive elements */
const HOVER_SELECTORS =
  'a, button, .skill-chip, .project-card, .cert-card, ' +
  '.achieve-card, .edu-item, .exp-item, .social-btn, ' +
  'input, textarea, #terminal';

document.querySelectorAll(HOVER_SELECTORS).forEach(el => {
  el.addEventListener('mouseenter', () => {
    dot.classList.add('hovering');
    ring.classList.add('hovering');
  });
  el.addEventListener('mouseleave', () => {
    dot.classList.remove('hovering');
    ring.classList.remove('hovering');
  });
});

/* Click pulse */
document.addEventListener('mousedown', () => {
  dot.classList.add('clicking');
  ring.classList.add('clicking');
});
document.addEventListener('mouseup', () => {
  dot.classList.remove('clicking');
  ring.classList.remove('clicking');
});
