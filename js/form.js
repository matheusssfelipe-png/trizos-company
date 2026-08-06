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

    const formspreeEndpoint = 'https://formspree.io/f/xkjwgzvo';

    fetch(formspreeEndpoint, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        // Redirecionar para a página de obrigado após o sucesso
        window.location.href = '/obrigado/';
      } else {
        alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    })
    .catch(error => {
      alert('Erro de conexão. Verifique sua internet e tente novamente.');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    });
  });
});

// Add spin animation via JS (since it's only used here)
const style = document.createElement('style');
style.textContent = '@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }';
document.head.appendChild(style);
