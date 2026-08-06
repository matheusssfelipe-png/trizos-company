/* ========================================
   TESTIMONIALS — Slider with auto-play
======================================== */

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.tst-card');
  const dots = document.querySelectorAll('.tst-dot');

  if (cards.length === 0) return;

  let current = 0;
  let autoPlayTimer;

  function showSlide(index) {
    cards.forEach(c => c.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    current = index;
    if (current >= cards.length) current = 0;
    if (current < 0) current = cards.length - 1;

    cards[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(() => {
      showSlide(current + 1);
    }, 5000);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) clearInterval(autoPlayTimer);
  }

  // Click on dots
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      startAutoPlay(); // Reset timer on manual interaction
    });
  });

  // Initialize
  showSlide(0);
  startAutoPlay();

  // Pause on hover
  const slider = document.querySelector('.tst-slider');
  if (slider) {
    slider.addEventListener('mouseenter', stopAutoPlay);
    slider.addEventListener('mouseleave', startAutoPlay);
  }
});
