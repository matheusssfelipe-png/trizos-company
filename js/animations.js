/* ========================================
   ANIMATIONS — Reveal on Scroll
   Uses IntersectionObserver for performance
======================================== */

document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.rv');

  if (revealElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('v');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
});
