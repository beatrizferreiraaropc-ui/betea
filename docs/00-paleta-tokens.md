# 00 · Paleta, tokens e variáveis globais

> Cole este bloco em **Elementor → Site Settings → Custom CSS**.
> Ele expõe as variáveis CSS oficiais do site para todas as seções.

Paleta oficial **PASTEL**, ancorada no azul do banner principal: `#3F74C2`.

---

## CSS global

```css
:root{
  /* Azuis (base do site) */
  --mct-navy:        #3F74C2;   /* azul principal — fundo dos blocos navy */
  --mct-navy-card:   #5589D1;   /* cards internos sobre fundo navy */
  --mct-navy-deep:   #2E5A9E;   /* gradientes / fundos escuros suaves */
  --mct-blue-soft:   #EAF1FB;   /* superfície azul muito clara */

  /* Cores de marca (pastel) */
  --mct-teal:        #7FC8D4;   /* Cuidado / acolhimento */
  --mct-violet:      #B8A4E8;   /* Inclusão (lilás suave) */
  --mct-violet-light:#D6CAF2;
  --mct-orange:      #F3A35C;   /* CTAs (coral pastel) */
  --mct-orange-hov:  #F6B981;
  --mct-peach:       #F6C9A8;

  /* Neutros */
  --mct-bg-soft:     #F5F7FB;
  --mct-text:        #1F2A44;
  --mct-muted:       #5C6A82;
  --mct-white:       #FFFFFF;
  --mct-border:      #E2E8F1;

  /* Gradientes */
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

/* Botão CTA padrão (laranja pastel) */
.mct-btn-cta{
  display:inline-flex; align-items:center; gap:.5rem;
  padding:.875rem 1.5rem; border-radius:9999px;
  background:var(--mct-grad-cta); color:#fff !important;
  font-weight:700; font-size:.95rem; letter-spacing:.01em;
  box-shadow:var(--mct-shadow-md); transition:filter .2s, transform .2s;
  text-decoration:none;
}
.mct-btn-cta:hover{ filter:brightness(1.05); transform:translateY(-1px); }

/* Botão outline (navy) */
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

---

## Google Fonts

Cole no **Site Settings → Custom Code → `<head>`**:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

---

## Breakpoints (Site Settings → Layout → Breakpoints)

| Breakpoint | Valor |
|------------|-------|
| Mobile     | 767   |
| Tablet     | 1024  |
| Laptop     | 1366  |
| Desktop    | 1920  |

---

## Tabela de cores (referência rápida)

| Token              | HEX        | Uso                                    |
|--------------------|------------|----------------------------------------|
| Navy               | `#3F74C2`  | Azul principal (banner / embaixadores) |
| Navy Card          | `#5589D1`  | Cards internos sobre fundo navy        |
| Navy Deep          | `#2E5A9E`  | Topo dos gradientes navy               |
| Blue Soft          | `#EAF1FB`  | Superfícies azul claríssimo            |
| Teal               | `#7FC8D4`  | Cuidado / acolhimento                  |
| Violet             | `#B8A4E8`  | Inclusão (lilás pastel)                |
| Orange             | `#F3A35C`  | CTAs (laranja pastel)                  |
| Bg Soft            | `#F5F7FB`  | Fundos suaves                          |
| Texto              | `#1F2A44`  | Texto padrão                           |
| Texto Mudo         | `#5C6A82`  | Textos secundários                     |
| Borda              | `#E2E8F1`  | Bordas de cards                        |
