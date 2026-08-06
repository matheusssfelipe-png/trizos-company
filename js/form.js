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

    // Formatar mensagem para o WhatsApp
    const whatsappNumber = '5513992007912';
    // Codificar a mensagem para URL usando encodeURIComponent
    const rawText = `*Novo Lead do Site!*\n\n*Nome:* ${data.nome}\n*E-mail:* ${data.email}\n*WhatsApp:* ${data.whatsapp || 'Não informado'}\n*Serviço:* ${data.servico}\n*Mensagem:* ${data.mensagem || 'Sem mensagem'}`;
    const text = encodeURIComponent(rawText);
    
    setTimeout(() => {
      // Abrir o WhatsApp em uma nova aba
      window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');

      // Redirecionar a aba atual para a página de obrigado
      window.location.href = '/obrigado/';
    }, 800);
  });
});

// Add spin animation via JS (since it's only used here)
const style = document.createElement('style');
style.textContent = '@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }';
document.head.appendChild(style);
