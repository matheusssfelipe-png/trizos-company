# Landing Pages

Esta pasta é reservada para futuras landing pages da Trizos Company.

## Como criar uma nova landing page

1. Crie uma nova pasta com o nome da campanha (ex: `campanha-verao/`)
2. Dentro, crie um `index.html` baseado no template padrão
3. Adicione a entrada no `vite.config.js`:

```js
// Em vite.config.js → build.rollupOptions.input, adicione:
nomeDaCampanha: resolve(__dirname, 'landing-pages/campanha-verao/index.html'),
```

4. Referencie os CSS/JS compartilhados:
```html
<script type="module" src="/js/main.js"></script>
```

5. Rode `npm run dev` para testar localmente.

## Estrutura sugerida

```
landing-pages/
├── campanha-verao/
│   └── index.html
├── promo-black-friday/
│   └── index.html
└── README.md (este arquivo)
```
