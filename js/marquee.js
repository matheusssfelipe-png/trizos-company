/* ========================================
   MARQUEE — Ensure smooth infinite scroll
======================================== */

document.addEventListener('DOMContentLoaded', () => {
  const marquee = document.querySelector('.marquee');

  if (!marquee) return;

  // Pause marquee on hover for accessibility
  marquee.addEventListener('mouseenter', () => {
    marquee.style.animationPlayState = 'paused';
  });

  marquee.addEventListener('mouseleave', () => {
    marquee.style.animationPlayState = 'running';
  });
});
