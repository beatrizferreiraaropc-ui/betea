# Seção 03 · Benefícios

Quatro cards com ícones coloridos: Telemedicina, Telepsicologia, Assistência
Funeral, Descontos e Vantagens. Sombra **apenas no hover** (estado neutro com
borda fina).

---

## Estrutura

```
Section [.mct-benefits]
└── Container 1 coluna  (max-width 1200px)
    ├── Heading (eyebrow)  .mct-benefits__eyebrow
    ├── Heading (H2)       .mct-benefits__title
    └── Inner Section 4 colunas iguais  .mct-benefits__grid
        ├── Icon Box  .mct-benefits__card  (--c:#00B8D9)
        ├── Icon Box  .mct-benefits__card  (--c:#7B2FF7)
        ├── Icon Box  .mct-benefits__card  (--c:#0B2E8A)
        └── Icon Box  .mct-benefits__card  (--c:#FF8A00)
```

---

## Widgets nativos
- **Heading** × 2 (eyebrow + título).
- **Icon Box** × 4 (ícone redondo + título + descrição).

---

## Conteúdo

| Item                  | Ícone (Lucide)       | Cor       | Descrição                              |
|-----------------------|----------------------|-----------|----------------------------------------|
| Telemedicina          | stethoscope          | `#00B8D9` | Tranquilidade imediata, 24/7           |
| Telepsicologia        | brain                | `#7B2FF7` | Equilíbrio emocional para a família    |
| Assistência Funeral   | shield               | `#0B2E8A` | Apoio total em momentos difíceis       |
| Descontos e Vantagens | tag                  | `#FF8A00` | Economia inteligente no dia a dia      |

- Eyebrow: `NOSSOS BENEFÍCIOS` (violet, uppercase, tracking largo)
- Título: `Tudo o que sua família precisa em um só lugar.`

> No Icon Box, vá em **Style → Icon → Primary Color** e use a cor da tabela acima.

---

## CSS Classes

| Widget                    | CSS Class               |
|---------------------------|-------------------------|
| Section                   | `mct-benefits`          |
| Eyebrow                   | `mct-benefits__eyebrow` |
| Título                    | `mct-benefits__title`   |
| Inner Section (grid 4)    | `mct-benefits__grid`    |
| Cada Icon Box             | `mct-benefits__card`    |

---

## CSS personalizado (cole na Section)

```css
selector{ padding:96px 24px; background:#fff; }
selector > .e-con-inner{ max-width:1280px; margin:0 auto; }

selector .mct-benefits__eyebrow{
  display:block; text-align:center;
  font-size:12px; letter-spacing:.3em; text-transform:uppercase;
  color:var(--mct-violet); font-weight:700; margin-bottom:12px;
}
selector .mct-benefits__title{
  text-align:center; font-size:36px; color:var(--mct-text);
  max-width:680px; margin:0 auto 48px;
}

/* Grid */
selector .mct-benefits__grid{ gap:32px; }
selector .mct-benefits__grid > .e-con-inner{
  display:grid !important;
  grid-template-columns:repeat(4,1fr); gap:32px;
}

/* Card */
selector .mct-benefits__card{
  background:#fff; border:1px solid var(--mct-border, #E5E9F0);
  border-radius:20px; padding:28px 20px; text-align:center;
  box-shadow:none; transition:transform .25s, box-shadow .25s;
}
selector .mct-benefits__card:hover{
  transform:translateY(-4px);
  box-shadow:0 25px 50px -12px rgba(11,46,138,.2);
}

/* Ícone redondo colorido */
selector .mct-benefits__card .elementor-icon{
  width:64px; height:64px; border-radius:9999px;
  display:inline-flex; align-items:center; justify-content:center;
  color:#fff !important; margin-bottom:16px;
  box-shadow:0 10px 24px rgba(0,0,0,.12);
}
selector .mct-benefits__card .elementor-icon svg{ width:28px; height:28px; }

/* Tipografia interna */
selector .mct-benefits__card .elementor-icon-box-title{
  font-size:16px; font-weight:700; margin-bottom:4px; color:var(--mct-text);
}
selector .mct-benefits__card .elementor-icon-box-description{
  font-size:14px; color:#5B6478; line-height:1.5;
}

/* Tablet */
@media (max-width:1023px){
  selector .mct-benefits__grid > .e-con-inner{ grid-template-columns:repeat(2,1fr); gap:20px; }
  selector .mct-benefits__title{ font-size:30px; }
}
/* Mobile */
@media (max-width:767px){
  selector{ padding:64px 16px; }
  selector .mct-benefits__title{ font-size:26px; }
  selector .mct-benefits__card{ padding:20px 16px; }
}
```

> Para mudar a cor do fundo do ícone de cada card, em vez de CSS use o próprio
> Icon Box: **Style → Icon → View: Stacked → Primary Color** (a cor).
