# Seção 06 · Vídeos

Vídeo de apresentação (16:9 grande) + 3 vídeos verticais (formato 9:16) ao
lado / abaixo. Fundo branco.

---

## Estrutura

```
Section [.mct-video]
└── Container 1 coluna  (max-width 1200px)
    ├── Heading (eyebrow)        .mct-video__eyebrow
    ├── Heading (H2)             .mct-video__title
    ├── Text Editor (resumo)     .mct-video__lead
    └── Inner Section 2 col (1fr / 1fr)
        ├── Video widget (16:9)  .mct-video__hero
        └── Inner Section 1 col
            └── Inner Section 3 col (verticais)
                ├── Video widget × 3   .mct-video__vert
```

---

## Widgets nativos
- **Video** (Elementor) × 4 — YouTube / Vimeo / hospedado.
- Definir **Aspect Ratio**: 16:9 para o principal, 9:16 nos verticais.

---

## Conteúdo

- Eyebrow: `VÍDEOS`
- Título: `Veja o Meu Clube TEA na prática.`
- Lead: `Conheça nossa proposta e ouça quem já faz parte.`

URLs ficam em `src/config/site.ts → videos[]` (1 principal + 3 verticais).

---

## CSS Classes

| Widget               | CSS Class            |
|----------------------|----------------------|
| Section              | `mct-video`          |
| Eyebrow              | `mct-video__eyebrow` |
| Título               | `mct-video__title`   |
| Lead                 | `mct-video__lead`    |
| Video principal      | `mct-video__hero`    |
| Cada vídeo vertical  | `mct-video__vert`    |

---

## CSS personalizado (cole na Section)

```css
selector{ padding:80px 24px; background:#fff; }
selector > .e-con-inner{ max-width:1280px; margin:0 auto; }

selector .mct-video__eyebrow{
  text-align:center; font-size:12px; letter-spacing:.3em;
  text-transform:uppercase; color:var(--mct-violet);
  font-weight:700; margin-bottom:8px;
}
selector .mct-video__title{
  text-align:center; font-size:32px; color:var(--mct-text); margin-bottom:8px;
}
selector .mct-video__lead{
  text-align:center; color:#5B6478; max-width:560px; margin:0 auto 40px;
}

/* Vídeo principal */
selector .mct-video__hero{ border-radius:20px; overflow:hidden; box-shadow:var(--mct-shadow-md); }

/* Verticais */
selector .mct-video__vert{ border-radius:18px; overflow:hidden; box-shadow:var(--mct-shadow-sm); }
selector .mct-video__vert .elementor-wrapper{ aspect-ratio:9/16; }

/* Tablet */
@media (max-width:1023px){
  selector > .e-con-inner .e-con > .e-con-inner{ grid-template-columns:1fr !important; }
}
/* Mobile */
@media (max-width:767px){
  selector{ padding:56px 16px; }
  selector .mct-video__title{ font-size:24px; }
}
```
