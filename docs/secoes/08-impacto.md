# Seção 08 · Impacto

Texto à esquerda + card branco com 4 mini-stats à direita. CTA laranja levando
de volta à seção de planos (âncora `#planos`).

---

## Estrutura

```
Section [.mct-impact]   id=impacto
└── Container 2 colunas (1fr / 2fr)
    ├── Coluna esquerda
    │   ├── Heading (H3)        .mct-impact__title
    │   ├── Text Editor         .mct-impact__lead
    │   └── Button (CTA)        .mct-impact__cta
    └── Container card branco   .mct-impact__card
        └── Inner Section 4 col .mct-impact__grid
            ├── Container × 4   .mct-impact__cell
                ├── Heading (número)  .mct-impact__num
                └── Heading (label)   .mct-impact__lbl
```

---

## Widgets nativos
- **Heading**, **Text Editor**, **Button**.

---

## Conteúdo

- Título: `Impacto que transforma vidas`
- Lead: `Mais que benefícios, um propósito. Cada plano ajuda a construir um mundo mais inclusivo.`
- Botão CTA: `↑ CONHEÇA NOSSOS PLANOS` → `#planos`

| Número  | Label                          |
|---------|--------------------------------|
| +15 mil | famílias atendidas             |
| +50 mil | consultas realizadas           |
| +200    | especialistas parceiros        |
| Até 10% | do lucro a causas sociais      |

---

## CSS Classes

| Widget                | CSS Class            |
|-----------------------|----------------------|
| Section               | `mct-impact`         |
| Título                | `mct-impact__title`  |
| Lead                  | `mct-impact__lead`   |
| Botão                 | `mct-impact__cta`    |
| Container card        | `mct-impact__card`   |
| Inner Section 4 col   | `mct-impact__grid`   |
| Cada container célula | `mct-impact__cell`   |
| Número                | `mct-impact__num`    |
| Label                 | `mct-impact__lbl`    |

---

## CSS personalizado (cole na Section)

```css
selector{ padding:80px 24px; background:#fff; }
selector > .e-con-inner{
  max-width:1280px; margin:0 auto;
  display:grid !important; grid-template-columns:1fr 2fr; gap:32px; align-items:center;
}

selector .mct-impact__title{ font-size:32px; color:var(--mct-text); }
selector .mct-impact__lead { color:#5B6478; margin:16px 0 24px; }

selector .mct-impact__cta .elementor-button{
  background:var(--mct-orange); color:#fff;
  padding:14px 22px; border-radius:9999px; font-weight:700;
  box-shadow:0 14px 30px -10px rgba(255,138,0,.5);
}

selector .mct-impact__card{
  background:#fff; border:1px solid #E5E9F0;
  border-radius:20px; padding:32px;
}
selector .mct-impact__grid > .e-con-inner{
  display:grid !important; grid-template-columns:repeat(4,1fr); gap:24px; text-align:center;
}
selector .mct-impact__num{ font-size:28px; color:var(--mct-violet); font-weight:800; }
selector .mct-impact__lbl{ font-size:12px; color:#5B6478; }

/* Tablet */
@media (max-width:1023px){
  selector > .e-con-inner{ grid-template-columns:1fr; }
  selector .mct-impact__grid > .e-con-inner{ grid-template-columns:repeat(2,1fr); }
}
/* Mobile */
@media (max-width:767px){
  selector{ padding:56px 16px; }
  selector .mct-impact__title{ font-size:24px; }
}
```
