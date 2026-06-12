# 13 · Parceiros (logos institucionais)

**Componente React:** `src/components/sections/Partners.tsx`
**Editar conteúdo:** `src/config/site.ts → parceiros[]`

> Esta é a faixa **institucional** (parceiros do projeto), separada da seção 08
> (parceiros de saúde com estatísticas). Mantenha ambas no site.

## HTML

```html
<section class="mct-partners" id="parceiros">
  <header>
    <span class="mct-eyebrow">Quem caminha com a gente</span>
    <h3>Parceiros que fortalecem nosso propósito.</h3>
  </header>
  <div class="mct-partners__grid">
    <a href="#"><img src="/wp-content/uploads/parceiros/expotea.png" alt="ExpoTEA"></a>
    <a href="#"><img src="/wp-content/uploads/parceiros/giro1.png" alt="GIRO1"></a>
    <a href="#"><img src="/wp-content/uploads/parceiros/uniesud.png" alt="UNIESUD"></a>
    <a href="#"><img src="/wp-content/uploads/parceiros/temsaude.png" alt="TEMSaúde"></a>
    <a href="#"><img src="/wp-content/uploads/parceiros/clubecerto.png" alt="Clube Certo"></a>
    <a href="#"><img src="/wp-content/uploads/parceiros/xv-piracicaba.png" alt="XV de Piracicaba"></a>
  </div>
</section>
```

## CSS

```css
.mct-partners{ padding:64px 24px; background:#fff; }
.mct-partners header{ max-width:680px; margin:0 auto 40px; text-align:center; }
.mct-partners h3{ font-size:28px; color:#1B2540; }
.mct-partners__grid{
  max-width:1200px; margin:0 auto;
  display:grid; grid-template-columns:repeat(6,1fr); gap:24px;
}
.mct-partners__grid a{
  height:72px; border:1px solid #E5E9F0; border-radius:12px;
  display:flex; align-items:center; justify-content:center; transition:.2s;
}
.mct-partners__grid a:hover{ border-color:#7B2FF7; }
.mct-partners__grid img{ max-width:70%; max-height:50%; filter:grayscale(1); opacity:.7; transition:.2s; }
.mct-partners__grid a:hover img{ filter:none; opacity:1; }

@media (max-width:1023px){ .mct-partners__grid{ grid-template-columns:repeat(3,1fr); } }
@media (max-width:767px){ .mct-partners__grid{ grid-template-columns:repeat(2,1fr); } }
```
