# Seção 12 · Parceiros Institucionais

Faixa branca com título e grade de 6 logos institucionais (ExpoTEA, GIRO1,
UNIESUD, TEMSaúde, Clube Certo, XV de Piracicaba).

> Esta é diferente da seção 07 (parceiros de saúde com estatísticas).

---

## Estrutura

```
Section [.mct-partners]   id=parceiros
└── Container 1 coluna  (max-width 1200px)
    ├── Heading (eyebrow)  .mct-partners__eyebrow
    ├── Heading (H3)       .mct-partners__title
    └── Inner Section 6 col .mct-partners__grid
        ├── Image × 6      .mct-partners__logo
```

---

## Widgets nativos
- **Heading** × 2, **Image** × 6 (com link opcional).

---

## Conteúdo

- Eyebrow: `Quem caminha com a gente`
- Título: `Parceiros que fortalecem nosso propósito.`
- Logos: ExpoTEA, GIRO1, UNIESUD, TEMSaúde, Clube Certo, XV de Piracicaba.

---

## CSS Classes

| Widget        | CSS Class                |
|---------------|--------------------------|
| Section       | `mct-partners`           |
| Eyebrow       | `mct-partners__eyebrow`  |
| Título        | `mct-partners__title`    |
| Grid 6 col    | `mct-partners__grid`     |
| Cada Image    | `mct-partners__logo`     |

---

## CSS personalizado (cole na Section)

```css
selector{ padding:64px 24px; background:#fff; }
selector > .e-con-inner{ max-width:1280px; margin:0 auto; }

selector .mct-partners__eyebrow{
  text-align:center; font-size:12px; letter-spacing:.3em;
  text-transform:uppercase; color:var(--mct-violet); font-weight:700;
}
selector .mct-partners__title{ text-align:center; font-size:28px; color:var(--mct-text); margin:8px 0 40px; }

selector .mct-partners__grid > .e-con-inner{
  display:grid !important; grid-template-columns:repeat(6,1fr); gap:24px;
}
selector .mct-partners__logo{
  height:72px; border:1px solid #E5E9F0; border-radius:12px;
  display:flex; align-items:center; justify-content:center; transition:.2s;
}
selector .mct-partners__logo:hover{ border-color:var(--mct-violet); }
selector .mct-partners__logo img{
  max-width:70%; max-height:50%;
  filter:grayscale(1); opacity:.7; transition:.2s;
}
selector .mct-partners__logo:hover img{ filter:none; opacity:1; }

/* Tablet */
@media (max-width:1023px){
  selector .mct-partners__grid > .e-con-inner{ grid-template-columns:repeat(3,1fr); }
}
/* Mobile */
@media (max-width:767px){
  selector .mct-partners__grid > .e-con-inner{ grid-template-columns:repeat(2,1fr); }
}
```
