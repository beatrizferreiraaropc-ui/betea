# Seção 05 · Faixa de Diferenciais

Faixa navy (gradiente vertical) com 6 itens em linha (ícone teal + texto curto).

---

## Estrutura

```
Section [.mct-featbar]
└── Container 1 coluna  (max-width 1200px, padding lateral)
    └── Inner Section 6 colunas  .mct-featbar__row
        ├── Icon Box × 6  .mct-featbar__item
```

---

## Widgets nativos
- **Icon Box** × 6 (ícone em cima, texto embaixo, alinhamento central).

---

## Conteúdo

| Ícone (Lucide)       | Texto                                          |
|----------------------|------------------------------------------------|
| globe                | Atendimento 100% online                        |
| map-pin              | Acesso nacional                                |
| monitor              | Plataforma digital                             |
| handshake            | Atendimento humanizado                         |
| link                 | Rede de benefícios e descontos                 |
| star                 | Foco em TEA, PCD, neurodivergentes e famílias  |

Cor de todos os ícones: **`#00B8D9`** (teal). Texto branco.

---

## CSS Classes

| Widget                  | CSS Class             |
|-------------------------|-----------------------|
| Section                 | `mct-featbar`         |
| Inner Section (grid 6)  | `mct-featbar__row`    |
| Cada Icon Box           | `mct-featbar__item`   |

---

## CSS personalizado (cole na Section)

```css
selector{ padding:24px; background:transparent; }
selector > .e-con-inner{
  max-width:1280px; margin:0 auto;
  background:var(--mct-grad-navy);
  border-radius:20px; padding:24px;
}

selector .mct-featbar__row > .e-con-inner{
  display:grid !important;
  grid-template-columns:repeat(6,1fr); gap:24px;
}

selector .mct-featbar__item{ text-align:center; color:#fff; }
selector .mct-featbar__item .elementor-icon{ color:var(--mct-teal) !important; font-size:22px; margin-bottom:8px; }
selector .mct-featbar__item .elementor-icon svg{ width:24px; height:24px; }
selector .mct-featbar__item .elementor-icon-box-description{
  font-size:12px; color:#fff; line-height:1.3;
}

/* Tablet */
@media (max-width:1023px){
  selector .mct-featbar__row > .e-con-inner{ grid-template-columns:repeat(3,1fr); }
}
/* Mobile */
@media (max-width:767px){
  selector > .e-con-inner{ padding:20px; }
  selector .mct-featbar__row > .e-con-inner{ grid-template-columns:repeat(2,1fr); }
}
```
