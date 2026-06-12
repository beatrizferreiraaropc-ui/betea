# 15 · Newsletter

**Componente React:** `src/components/sections/Newsletter.tsx`

## Cores
- Fundo: `#7B2FF7` (violet)
- Botão CTA: `#FF8A00`

## HTML

```html
<section class="mct-news">
  <div class="mct-news__inner">
    <p>Receba novidades, dicas e conteúdos exclusivos sobre inclusão, saúde e benefícios.</p>
    <form action="https://meuclubetea.com.br/newsletter/" method="POST">
      <input type="email" name="email" placeholder="Seu melhor e-mail" required>
      <button type="submit" class="mct-btn-cta">QUERO RECEBER →</button>
    </form>
  </div>
</section>
```

## CSS

```css
.mct-news{ padding:24px; }
.mct-news__inner{
  max-width:1200px; margin:0 auto; background:#7B2FF7; color:#fff;
  border-radius:20px; padding:32px;
  display:grid; grid-template-columns:1fr auto; gap:16px; align-items:center;
}
.mct-news form{ display:flex; gap:8px; }
.mct-news input{
  flex:1; min-width:280px; padding:12px 20px; border-radius:9999px;
  border:0; background:#fff; color:#1B2540; font-size:14px;
}
@media (max-width:767px){
  .mct-news__inner{ grid-template-columns:1fr; }
  .mct-news form{ flex-direction:column; }
  .mct-news input{ min-width:0; }
}
```
