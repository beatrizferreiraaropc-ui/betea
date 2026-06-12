# 🎨 00 · Paleta, tokens e variáveis globais

> Cole este bloco em **Elementor → Site Settings → Custom CSS** (ou no `style.css` do
> filho do tema). Ele expõe as variáveis CSS oficiais do briefing para todo o site.

## CSS global

```css
:root{
  /* Paleta oficial */
  --mct-navy:        #0B2E8A;
  --mct-navy-card:   #12389E;
  --mct-navy-deep:   #061C5C;
  --mct-teal:        #00B8D9;
  --mct-violet:      #7B2FF7;
  --mct-indigo:      #4A3AFF;
  --mct-orange:      #FF8A00;
  --mct-orange-hov:  #FF9F2E;
  --mct-bg-soft:     #F5F7FA;
  --mct-text:        #1B2540;
  --mct-white:       #FFFFFF;

  /* Gradientes oficiais */
  --mct-grad-hero:   linear-gradient(90deg,#0B2E8A 0%,#4A3AFF 50%,#7B2FF7 100%);
  --mct-grad-navy:   linear-gradient(180deg,#061C5C,#0B2E8A);
  --mct-grad-violet: linear-gradient(135deg,#7B2FF7,#A06BFF);
  --mct-grad-cta:    linear-gradient(135deg,#FF8A00,#FF9F2E);

  /* Sombras */
  --mct-shadow-sm:  0 4px 12px rgba(11,46,138,.08);
  --mct-shadow-md:  0 12px 30px rgba(11,46,138,.12);
  --mct-shadow-lg:  0 25px 50px -12px rgba(11,46,138,.25);

  /* Raios */
  --mct-radius:    12px;
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
