# Seção 07 · Parceiros de Saúde + Estatísticas

Faixa branca com 4 estatísticas (números grandes) + grade de logos institucionais
de parceiros de saúde (TEMSaúde, UNIESUD, etc.). No mobile vira 2 colunas.

---

## Estrutura

```
Section [.mct-pstats]
└── Container 1 coluna  (max-width 1200px)
    ├── Heading (eyebrow)        .mct-pstats__eyebrow
    ├── Heading (H2)             .mct-pstats__title
    ├── Inner Section 4 col      .mct-pstats__stats
    │   ├── Container × 4        .mct-pstats__stat
    │   │   ├── Heading (número grande)   .mct-pstats__num
    │   │   └── Heading (label)            .mct-pstats__lbl
    └── Inner Section 5 col      .mct-pstats__logos
        ├── Image × 5            .mct-pstats__logo
```

---

## Widgets nativos
- **Heading** para números e labels.
- **Image** para cada logo de parceiro.

---

## Conteúdo

### Estatísticas
| Número  | Label                           |
|---------|---------------------------------|
| +15 mil | famílias atendidas              |
| +50 mil | consultas realizadas            |
| +200    | especialistas parceiros         |
| Até 10% | do lucro para causas sociais    |

Cor dos números: **`#7B2FF7`** (violet). Labels: cinza médio.

### Logos parceiros
Suba 5 logos em **Mídia** (PNG transparente, máx. 400×200). Sem links externos.

---

## CSS Classes

| Widget                  | CSS Class             |
|-------------------------|-----------------------|
| Section                 | `mct-pstats`          |
| Eyebrow                 | `mct-pstats__eyebrow` |
| Título                  | `mct-pstats__title`   |
| Grid de estatísticas    | `mct-pstats__stats`   |
| Cada container stat     | `mct-pstats__stat`    |
| Número                  | `mct-pstats__num`     |
| Label                   | `mct-pstats__lbl`     |
| Grid de logos           | `mct-pstats__logos`   |
| Cada Image (logo)       | `mct-pstats__logo`    |

---

## CSS personalizado (cole na Section)

```css
selector{ padding:80px 24px; background:#fff; }
selector > .e-con-inner{ max-width:1280px; margin:0 auto; }

selector .mct-pstats__eyebrow{
  text-align:center; font-size:12px; letter-spacing:.3em;
  text-transform:uppercase; color:var(--mct-violet);
  font-weight:700; margin-bottom:12px;
}
selector .mct-pstats__title{
  text-align:center; font-size:30px; color:var(--mct-text);
  max-width:680px; margin:0 auto 48px;
}

/* Stats */
selector .mct-pstats__stats > .e-con-inner{
  display:grid !important; grid-template-columns:repeat(4,1fr); gap:24px;
  margin-bottom:56px;
}
selector .mct-pstats__stat{ text-align:center; }
selector .mct-pstats__num{ font-size:36px; font-weight:800; color:var(--mct-violet); }
selector .mct-pstats__lbl{ font-size:13px; color:#5B6478; line-height:1.4; }

/* Logos */
selector .mct-pstats__logos > .e-con-inner{
  display:grid !important; grid-template-columns:repeat(5,1fr); gap:24px; align-items:center;
}
selector .mct-pstats__logo img{
  max-height:60px; width:auto; margin:0 auto; display:block;
  filter:grayscale(1); opacity:.65; transition:.2s;
}
selector .mct-pstats__logo:hover img{ filter:none; opacity:1; }

/* Tablet */
@media (max-width:1023px){
  selector .mct-pstats__stats > .e-con-inner{ grid-template-columns:repeat(2,1fr); gap:20px; }
  selector .mct-pstats__logos > .e-con-inner{ grid-template-columns:repeat(3,1fr); }
}
/* Mobile */
@media (max-width:767px){
  selector{ padding:56px 16px; }
  selector .mct-pstats__title{ font-size:24px; }
  selector .mct-pstats__num{ font-size:28px; }
  selector .mct-pstats__logos > .e-con-inner{ grid-template-columns:repeat(2,1fr); gap:16px; }
}
```
