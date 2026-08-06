/* ========================================
   FORM — Validation + Redirect
======================================== */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('.form-submit');
    const originalText = submitBtn.innerHTML;

    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Basic validation
    if (!data.nome || !data.email || !data.servico) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert('Por favor, insira um email válido.');
      return;
    }

    // Loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
      </svg>
      Enviando...
    `;

    // Simulate form submission (replace with actual endpoint)
    // TODO: Integrar com Formspree, API, ou WhatsApp
    setTimeout(() => {
      // Log form data (for debugging)
      console.log('📋 Dados do formulário:', data);

      // Redirect to thank you page
      window.location.href = '/obrigado.html';
    }, 1500);
  });
});

// Add spin animation via JS (since it's only used here)
const style = document.createElement('style');
style.textContent = '@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }';
document.head.appendChild(style);
