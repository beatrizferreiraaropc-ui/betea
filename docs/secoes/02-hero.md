# 02 · Hero (banner principal)

**Componente React:** `src/components/sections/Hero.tsx`
**Referência visual:** mockup mobile enviado pelo cliente (família ao fundo).

## Estrutura
- Fundo: **gradiente oficial 90deg** `#0B2E8A → #4A3AFF → #7B2FF7`.
- Imagem PNG da família com fade transparente posicionada à direita,
  sobreposta ao gradiente.
- Conteúdo (esquerda):
  1. Badge "🛡 SAÚDE, ACOLHIMENTO E BENEFÍCIOS"
  2. H1 — "Cuidado e benefícios para pessoas com TEA, PCD, neurodivergentes e suas famílias."
  3. Linha decorativa teal (`#00B8D9`)
  4. Subtítulo — "Telemedicina, telepsicologia, assistência funeral, descontos e muito mais em um só lugar."
  5. 2 CTAs:
     - 🟧 **CONHEÇA NOSSOS PLANOS** → `#planos`
     - ⚪ **FALAR NO WHATSAPP** (ícone verde `#25D366`) → `site.links.whatsapp`

## Assets
| Uso     | Arquivo                              | Recomendado     |
|---------|--------------------------------------|-----------------|
| Desktop | `fundo-banner.png`                   | 1920×640 PNG    |
| Mobile  | `fundo-banner-mobi.png`              | 900×1100 PNG    |

> As duas imagens já possuem o fade transparente — basta posicioná-las à direita.

## HTML (Elementor — widget HTML)

```html
<section class="mct-hero" id="hero">
  <picture class="mct-hero__img">
    <source media="(max-width:767px)" srcset="/wp-content/uploads/fundo-banner-mobi.png">
    <img src="/wp-content/uploads/fundo-banner.png" alt="" aria-hidden="true">
  </picture>

  <div class="mct-hero__inner">
    <span class="mct-hero__badge">🛡 SAÚDE, ACOLHIMENTO E BENEFÍCIOS</span>
    <h1>Cuidado e benefícios para pessoas com TEA, PCD, neurodivergentes e suas famílias.</h1>
    <span class="mct-hero__rule"></span>
    <p>Telemedicina, telepsicologia, assistência funeral, descontos e muito mais em um só lugar.</p>
    <div class="mct-hero__ctas">
      <a class="mct-btn-cta" href="#planos">CONHEÇA NOSSOS PLANOS →</a>
      <a class="mct-btn-wpp" href="https://wa.me/55119XXXXXXXX" target="_blank">
        <span class="ico">💬</span> FALAR NO WHATSAPP
      </a>
    </div>
  </div>
</section>
```

## CSS avançado

```css
.mct-hero{
  position:relative; isolation:isolate; overflow:hidden;
  background:linear-gradient(90deg,#0B2E8A 0%,#4A3AFF 50%,#7B2FF7 100%);
  color:#fff;
}
.mct-hero__img{ position:absolute; inset:0; pointer-events:none; }
.mct-hero__img img{
  position:absolute; right:0; top:0; height:100%;
  width:62%; object-fit:cover; object-position:right center;
}
.mct-hero__inner{
  position:relative; max-width:1200px; margin:0 auto;
  padding:80px 24px 96px;
}
.mct-hero__badge{
  display:inline-flex; align-items:center; gap:8px;
  padding:8px 16px; border-radius:9999px;
  background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.25);
  backdrop-filter:blur(6px);
  font-size:11px; letter-spacing:.22em; text-transform:uppercase; font-weight:600;
}
.mct-hero h1{ font-size:56px; line-height:1.05; max-width:680px; margin:24px 0 0; font-weight:700; }
.mct-hero__rule{ display:block; width:80px; height:4px; border-radius:9999px; background:#00B8D9; margin:20px 0; }
.mct-hero p{ font-size:18px; line-height:1.55; color:rgba(255,255,255,.9); max-width:520px; }
.mct-hero__ctas{ margin-top:28px; display:flex; flex-wrap:wrap; gap:12px; max-width:520px; }
.mct-btn-cta{
  display:inline-flex; align-items:center; gap:8px; padding:14px 22px;
  border-radius:9999px; background:#FF8A00; color:#fff; font-weight:700;
  text-decoration:none; box-shadow:0 18px 35px -12px rgba(255,138,0,.55);
}
.mct-btn-wpp{
  display:inline-flex; align-items:center; gap:10px; padding:14px 22px;
  border-radius:9999px; background:#fff; color:#0B2E8A; font-weight:700;
  text-decoration:none; box-shadow:0 18px 35px -12px rgba(0,0,0,.25);
}
.mct-btn-wpp .ico{
  width:28px; height:28px; border-radius:9999px; background:#25D366;
  display:inline-flex; align-items:center; justify-content:center; color:#fff;
}

@media (max-width:1023px){ .mct-hero h1{ font-size:44px; } .mct-hero__img img{ width:55%; } }
@media (max-width:767px){
  .mct-hero__img img{ width:72%; }
  .mct-hero__inner{ padding:56px 20px 80px; }
  .mct-hero h1{ font-size:30px; max-width:62%; }
  .mct-hero p{ font-size:15px; max-width:62%; }
  .mct-hero__ctas{ flex-direction:column; }
  .mct-btn-cta,.mct-btn-wpp{ width:100%; justify-content:space-between; }
}
```

## Notas WordPress
- Faça upload dos PNGs em **Mídia** e troque os caminhos `/wp-content/uploads/...`.
- O botão "FALAR NO WHATSAPP" deve abrir em nova aba (`target="_blank"`).
- O link "CONHEÇA NOSSOS PLANOS" usa âncora `#planos` para a seção de planos.
