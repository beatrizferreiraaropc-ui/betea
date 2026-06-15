# Seção 13 · Programa de Embaixadores

Bloco de conversão para captação de embaixadores. Fundo gradiente navy.
Esquerda: copy + CTA. Direita: cards de comissões.

---

## Estrutura

```
Section [.mct-amb]   id=embaixadores
└── Container 2 col (1.1fr / 1fr)  (max-width 1200px)
    ├── Coluna esquerda
    │   ├── Heading (badge)         .mct-amb__badge
    │   ├── Heading (H2)            .mct-amb__title
    │   ├── Text Editor (lead)      .mct-amb__lead
    │   ├── Icon List (benefícios)  .mct-amb__perks
    │   └── Button (CTA)            .mct-amb__cta
    └── Coluna cards
        └── Inner Section 2 col     .mct-amb__grid
            ├── Container × 4       .mct-amb__card
                ├── Heading (%)     .mct-amb__pct
                └── Heading (label) .mct-amb__lbl
```

---

## Widgets nativos
- **Heading**, **Text Editor**, **Icon List**, **Button**.

---

## Conteúdo

- Badge: `PROGRAMA DE EMBAIXADORES` (pill outline)
- Título: `Seja embaixador. Multiplique impacto e renda.`
- Lead: `Indique o Meu Clube TEA para quem precisa de cuidado e ganhe comissões recorrentes.`

### Comissões (4 cards 2×2)
| %     | Label                            |
|-------|----------------------------------|
| 20%   | sobre cada plano Essencial       |
| 25%   | sobre cada plano Família         |
| 30%   | sobre cada plano Proteção Total  |
| +5%   | bônus por meta mensal            |

### Benefícios (Icon List)
- ✔ Painel exclusivo do embaixador
- ✔ Pagamento recorrente todo mês
- ✔ Materiais prontos para divulgar
- ✔ Apoio direto da equipe

CTA: `QUERO SER EMBAIXADOR` → `site.links.embaixador`.

---

## CSS Classes

| Widget                | CSS Class            |
|-----------------------|----------------------|
| Section               | `mct-amb`            |
| Badge                 | `mct-amb__badge`     |
| Título                | `mct-amb__title`     |
| Lead                  | `mct-amb__lead`      |
| Icon List benefícios  | `mct-amb__perks`     |
| Botão CTA             | `mct-amb__cta`       |
| Grid 2×2 cards        | `mct-amb__grid`      |
| Cada card             | `mct-amb__card`      |
| Percentual            | `mct-amb__pct`       |
| Label do card         | `mct-amb__lbl`       |

---

## CSS personalizado (cole na Section)

```css
selector{
  padding:96px 24px;
  background:linear-gradient(135deg,#0B2E8A 0%,#4A3AFF 60%,#7B2FF7 100%);
  color:#fff;
}
selector > .e-con-inner{
  max-width:1280px; margin:0 auto;
  display:grid !important; grid-template-columns:1.1fr 1fr; gap:48px; align-items:center;
}

selector .mct-amb__badge{
  display:inline-block; padding:6px 14px; border-radius:9999px;
  background:rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.3);
  font-size:11px; letter-spacing:.22em; text-transform:uppercase; font-weight:700;
  color:#fff; white-space:nowrap;
}
selector .mct-amb__title{ font-size:36px; color:#fff; margin:20px 0 12px; }
selector .mct-amb__lead { color:rgba(255,255,255,.85); font-size:16px; line-height:1.55; max-width:520px; }

selector .mct-amb__perks{ margin:20px 0 28px; }
selector .mct-amb__perks .elementor-icon-list-text{ color:#fff; font-size:14px; }
selector .mct-amb__perks .elementor-icon-list-icon i,
selector .mct-amb__perks .elementor-icon-list-icon svg{ color:var(--mct-teal) !important; }

selector .mct-amb__cta .elementor-button{
  background:var(--mct-orange); color:#fff;
  padding:14px 24px; border-radius:9999px; font-weight:700; font-size:14px;
  box-shadow:0 18px 35px -12px rgba(255,138,0,.55); white-space:nowrap;
}

/* Cards comissão */
selector .mct-amb__grid > .e-con-inner{
  display:grid !important; grid-template-columns:repeat(2,1fr); gap:16px;
}
selector .mct-amb__card{
  background:#12389E; border:1px solid rgba(255,255,255,.1);
  border-radius:20px; padding:24px 20px; text-align:center;
}
selector .mct-amb__pct{ font-size:32px; font-weight:800; color:#fff; }
selector .mct-amb__lbl{ font-size:12px; color:rgba(255,255,255,.75); margin-top:4px; }

/* Tablet */
@media (max-width:1023px){
  selector > .e-con-inner{ grid-template-columns:1fr; gap:32px; }
}
/* Mobile */
@media (max-width:767px){
  selector{ padding:64px 16px; }
  selector .mct-amb__title{ font-size:26px; }
}
```
