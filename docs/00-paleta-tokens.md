# 🎨 00 · Paleta, tokens e variáveis globais

> Cole este bloco em **Elementor → Site Settings → Custom CSS** (ou no `style.css` do
> filho do tema). Ele expõe as variáveis CSS oficiais do briefing para todo o site.

## CSS global

```css
:root{
  /* Paleta oficial — PASTEL (base azul do banner: #3F74C2) */
  --mct-navy:        #3F74C2;   /* azul principal (banner) */
  --mct-navy-card:   #5589D1;   /* cards internos sobre fundo navy */
  --mct-navy-deep:   #2E5A9E;   /* gradientes / fundos escuros suaves */
  --mct-blue-soft:   #EAF1FB;   /* superfície azul clara */

  --mct-teal:        #7FC8D4;   /* acolhimento (pastel) */
  --mct-violet:      #B8A4E8;   /* inclusão (lilás suave) */
  --mct-violet-light:#D6CAF2;
  --mct-orange:      #F3A35C;   /* CTA coral pastel */
  --mct-orange-hov:  #F6B981;
  --mct-peach:       #F6C9A8;

  --mct-bg-soft:     #F5F7FB;
  --mct-text:        #1F2A44;
  --mct-white:       #FFFFFF;
  --mct-border:      #E2E8F1;

  /* Gradientes */
  --mct-grad-hero:   linear-gradient(160deg,#2E5A9E 0%,#3F74C2 100%);
  --mct-grad-navy:   linear-gradient(160deg,#2E5A9E 0%,#3F74C2 100%);
  --mct-grad-violet: linear-gradient(135deg,#B8A4E8,#D6CAF2);
  --mct-grad-cta:    linear-gradient(135deg,#F3A35C,#F6B981);

  /* Sombras suaves */
  --mct-shadow-sm:  0 4px 12px rgba(63,116,194,.10);
  --mct-shadow-md:  0 12px 28px -10px rgba(63,116,194,.22);
  --mct-shadow-lg:  0 25px 50px -14px rgba(63,116,194,.28);

  /* Raios */
  --mct-radius:    14px;
  --mct-radius-lg: 20px;
  --mct-radius-xl: 28px;
}

/* Tipografia */
html, body{
  font-family:'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  color: var(--mct-text);
  -webkit-font-smoothing: antialiased;
}
h1,h2,h3,h4{ letter-spacing:-0.02em; font-weight:700; }

/* Botão CTA padrão */
.mct-btn-cta{
  display:inline-flex; align-items:center; gap:.5rem;
  padding:.875rem 1.5rem; border-radius:9999px;
  background:var(--mct-orange); color:#fff !important;
  font-weight:700; font-size:.95rem; letter-spacing:.01em;
  box-shadow:var(--mct-shadow-md); transition:background .2s, transform .2s;
  text-decoration:none;
}
.mct-btn-cta:hover{ background:var(--mct-orange-hov); transform:translateY(-1px); }

.mct-btn-outline{
  display:inline-flex; align-items:center; gap:.5rem;
  padding:.75rem 1.25rem; border-radius:9999px;
  background:#fff; color:var(--mct-navy) !important;
  font-weight:600; font-size:.9rem;
  border:2px solid var(--mct-navy);
  transition:background .2s, color .2s; text-decoration:none;
}
.mct-btn-outline:hover{ background:var(--mct-navy); color:#fff !important; }
```

## Google Fonts

No `<head>` (Elementor → Site Settings → Custom Code → `<head>`):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

## Breakpoints (Elementor → Site Settings → Layout → Breakpoints)

| Breakpoint | Valor |
|------------|-------|
| Mobile     | 767   |
| Tablet     | 1024  |
| Laptop     | 1366  |
| Desktop    | 1920  |
