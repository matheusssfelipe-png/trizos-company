# 🚀 Guia do Projeto: Trizos Company

Este documento contém o resumo de tudo o que foi feito e como o projeto está estruturado. Entregue este arquivo como contexto para o Claude Code sempre que for pedir novas alterações ou criações de páginas.

## 🛠 Tech Stack e Infraestrutura
- **Base:** HTML5, Vanilla JavaScript, CSS Puro (sem frameworks pesados).
- **Build Tool:** Vite (para dev server rápido e minificação de assets).
- **Hospedagem:** Vercel (conectada via GitHub, deploy automático).
- **Repositório:** `matheusssfelipe-png/trizos-company`

## 📁 Estrutura do Projeto
```text
/
├── index.html              -> Landing Page principal (Home)
├── obrigado.html           -> Página de sucesso após formulário
├── vite.config.js          -> Configuração do Vite (onde registramos novas rotas)
├── package.json            -> Scripts e dependências (npm run dev, npm run build)
├── INSTRUCOES_CLAUDE.md    -> Este arquivo
│
├── public/                 -> Arquivos estáticos (coloque a `logo.png` aqui!)
│
├── css/                    -> CSS Modularizado
│   ├── variables.css       -> Cores e fontes globais
│   ├── base.css            -> Reset
│   ├── components.css      -> Estilos reutilizáveis (botões, containers)
│   ├── header.css, hero.css, footer.css, form.css, sections.css -> Estilos específicos
│   └── responsive.css      -> Media queries (Mobile, Tablet)
│
├── js/                     -> JavaScript Modularizado
│   ├── main.js             -> Entry point (Importa os CSS e os outros JS)
│   └── animations.js, faq.js, form.js, header.js, marquee.js, testimonials.js -> Lógicas isoladas
```

---

## 📝 Como editar o que já existe (Home)
1. **Textos e estrutura HTML:** Edite o `index.html`.
2. **Cores ou fontes globais:** Altere o `css/variables.css`.
3. **Formulário de contato:** A lógica de envio simulada está em `js/form.js`. É lá que você conectará com uma API (como Formspree) ou integrará envio para o WhatsApp.
4. **Logo ausente:** Adicione a imagem real na pasta `public/logo.png`.
5. **Link do WhatsApp:** No final do `index.html`, procure a tag do botão flutuante e altere o `href="#"` para `https://wa.me/55...`.

---

## 📄 Como criar novas páginas (ex: /linkedin ou /resume)
Sempre que pedir ao Claude Code para criar uma nova página, peça para ele seguir este roteiro:

1. **Criar o arquivo HTML** na raiz do projeto (ex: `linkedin.html`).
2. **Reaproveitar o cabeçalho (`<head>`)** importando o `main.js` para puxar todos os estilos de uma vez: `<script type="module" src="/js/main.js"></script>`.
3. **Registrar a página no Vite:** Abra o `vite.config.js` e adicione a nova página em `build.rollupOptions.input`:
   ```javascript
   // Exemplo no vite.config.js
   input: {
     main: resolve(__dirname, 'index.html'),
     obrigado: resolve(__dirname, 'obrigado.html'),
     linkedin: resolve(__dirname, 'linkedin.html') // <-- nova página
   }
   ```
4. **Rodar localmente:** `npm run dev` para testar.
5. **Fazer o deploy:** `git add .`, `git commit -m "Nova pagina"`, e `git push origin main`. A Vercel atualizará o site em produção nos links:
   - `trizoscompany.com/linkedin`

---

## ⚙️ Comandos Úteis (Terminal)
- Para rodar o servidor de testes no seu computador:
  ```bash
  npm run dev
  ```
- Para colocar alterações no ar (Deploy via GitHub):
  ```bash
  git add .
  git commit -m "descreva a alteracao"
  git push origin main
  ```
