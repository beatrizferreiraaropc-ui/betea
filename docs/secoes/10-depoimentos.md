# Seção 10 · Depoimentos

Faixa navy (gradiente vertical) com título à esquerda e 3 cards de depoimento
à direita (mobile: 1 coluna).

---

## Estrutura

```
Section [.mct-test]   id=depoimentos
└── Container 2 col (1fr / 2fr)  (max-width 1200px)
    ├── Coluna esquerda
    │   ├── Heading (eyebrow)  .mct-test__eyebrow
    │   └── Heading (H3)       .mct-test__title
    └── Inner Section 3 col    .mct-test__grid
        ├── Container × 3      .mct-test__card
            ├── Text Editor (depoimento)  .mct-test__quote
            ├── Heading (nome)            .mct-test__name
            ├── Heading (descrição)       .mct-test__who
            └── Star Rating               .mct-test__stars
```

---

## Widgets nativos
- **Heading**, **Text Editor**, **Star Rating** (Elementor Pro).

---

## Conteúdo

- Eyebrow: `Quem já faz parte, recomenda` (teal)
- Título: `Histórias reais, pessoas reais.`

**Depoimento 1**
> "O Meu Clube TEA mudou nossa rotina. Conseguimos atendimento rápido e humanizado."
> — **Juliana A.** · Mãe de menina com TEA · 5★

**Depoimento 2**
> "Atendimento incrível e descontos que fazem diferença no dia a dia."
> — **Marcos R.** · PCD · 5★

**Depoimento 3**
> "Encontrei acolhimento de verdade para a minha família."
> — **Beatriz S.** · Mãe atípica · 5★

---

## CSS Classes

| Widget          | CSS Class              |
|-----------------|------------------------|
| Section         | `mct-test`             |
| Eyebrow         | `mct-test__eyebrow`    |
| Título          | `mct-test__title`      |
| Grid 3 col      | `mct-test__grid`       |
| Card            | `mct-test__card`       |
| Quote           | `mct-test__quote`      |
| Nome            | `mct-test__name`       |
| Descrição       | `mct-test__who`        |
| Estrelas        | `mct-test__stars`      |

---

## CSS personalizado (cole na Section)

```css
selector{ padding:96px 24px; background:var(--mct-grad-navy); color:#fff; }
selector > .e-con-inner{
  max-width:1280px; margin:0 auto;
  display:grid !important; grid-template-columns:1fr 2fr; gap:40px; align-items:center;
}

selector .mct-test__eyebrow{ color:var(--mct-teal); font-size:12px; letter-spacing:.3em; text-transform:uppercase; font-weight:700; }
selector .mct-test__title  { color:#fff; font-size:36px; line-height:1.1; }

selector .mct-test__grid > .e-con-inner{
  display:grid !important; grid-template-columns:repeat(3,1fr); gap:16px;
}
selector .mct-test__card{
  background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.12);
  backdrop-filter:blur(6px);
  border-radius:20px; padding:24px;
}
selector .mct-test__quote{ font-size:14px; line-height:1.6; color:#fff; }
selector .mct-test__name { font-size:14px; color:#fff; margin-top:16px; font-weight:700; }
selector .mct-test__who  { font-size:11px; color:rgba(255,255,255,.6); }
selector .mct-test__stars i,
selector .mct-test__stars svg{ color:var(--mct-orange) !important; }

/* Tablet */
@media (max-width:1023px){
  selector > .e-con-inner{ grid-template-columns:1fr; }
  selector .mct-test__grid > .e-con-inner{ grid-template-columns:1fr; }
}
```
