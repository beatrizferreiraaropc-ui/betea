# Seção 04 · Planos (WooCommerce)

Três cards de planos. O plano "Família" fica em destaque (selo laranja, leve
elevação no desktop). Fundo da seção `#F5F7FA`.

---

## Estrutura

```
Section [.mct-plans]   id=planos
└── Container 1 coluna
    ├── Heading (eyebrow)  .mct-plans__eyebrow
    ├── Heading (H2)       .mct-plans__title
    └── Inner Section 3 colunas iguais  .mct-plans__grid
        ├── Container plano 1   .mct-plan  .mct-plan--essencial
        ├── Container plano 2   .mct-plan  .mct-plan--destaque
        └── Container plano 3   .mct-plan  .mct-plan--protecao
```

Dentro de cada **container de plano**:

```
Heading (selo: só no destaque)          .mct-plan__tag
Heading (kicker "PLANO")                .mct-plan__kicker
Heading (nome do plano)                 .mct-plan__name
Text Editor (descrição curta)           .mct-plan__desc
Heading (preço grande "R$ 29,90 /mês")  .mct-plan__price
Icon List (5 benefícios com ✔)          .mct-plan__list
Button (CTA WooCommerce)                .mct-plan__cta
```

---

## Widgets nativos
- **Heading**, **Text Editor**, **Icon List**, **Button**.
- (Opcional) widget WooCommerce **Add to Cart** no lugar do Button.

---

## Conteúdo

| Plano                   | Preço     | Cor       | Texto CTA          | URL WooCommerce                       |
|-------------------------|-----------|-----------|--------------------|---------------------------------------|
| ESSENCIAL               | R$ 29,90  | `#00B8D9` | QUERO ESSE PLANO   | `/produto/plano-essencial/`           |
| FAMÍLIA (destaque)      | R$ 69,90  | `#7B2FF7` | QUERO ESSE PLANO   | `/produto/plano-familia/`             |
| PROTEÇÃO TOTAL + PET    | R$ 99,90  | `#0B2E8A` | QUERO ESSE PLANO   | `/produto/plano-protecao-total/`      |

Selo do destaque (laranja): **Recomendado por Especialistas**.

### Benefícios (Icon List com check `#00B8D9`)

**Essencial**
- Telemedicina Individual
- Clube de Benefícios e Descontos
- Descontos em Farmácias Parceiras
- Descontos em Clínicas e Laboratórios
- Suporte Humanizado

**Família**
- Telemedicina para 4 pessoas
- Telepsicologia
- Clube de Benefícios completo
- Assistência Familiar
- Suporte prioritário

**Proteção Total + PET**
- Tudo do plano Família
- Assistência Funeral
- Assistência PET
- Sorteios mensais
- Atendimento VIP 24h

---

## CSS Classes

| Widget                          | CSS Class                              |
|---------------------------------|----------------------------------------|
| Section                         | `mct-plans`                            |
| Container de cada plano         | `mct-plan` + variante (`--essencial`, `--destaque`, `--protecao`) |
| Selo destaque                   | `mct-plan__tag`                        |
| Kicker "PLANO"                  | `mct-plan__kicker`                     |
| Nome do plano                   | `mct-plan__name`                       |
| Descrição                       | `mct-plan__desc`                       |
| Preço                           | `mct-plan__price`                      |
| Icon List dos benefícios        | `mct-plan__list`                       |
| Botão CTA                       | `mct-plan__cta`                        |

---

## CSS personalizado (cole na Section)

```css
selector{ padding:96px 24px; background:#F5F7FA; }
selector > .e-con-inner{ max-width:1280px; margin:0 auto; }

selector .mct-plans__eyebrow{
  display:block; text-align:center;
  font-size:12px; letter-spacing:.3em; text-transform:uppercase;
  color:var(--mct-violet); font-weight:700; margin-bottom:12px;
}
selector .mct-plans__title{
  text-align:center; font-size:36px; max-width:760px; margin:0 auto 48px;
  color:var(--mct-text);
}

/* Grid */
selector .mct-plans__grid > .e-con-inner{
  display:grid !important; grid-template-columns:repeat(3,1fr); gap:24px;
  align-items:stretch;
}

/* Card */
selector .mct-plan{
  background:#fff; border-radius:24px; padding:32px 28px;
  border:2px solid transparent; position:relative;
  display:flex; flex-direction:column; gap:14px;
  box-shadow:0 12px 30px rgba(11,46,138,.06);
  transition:transform .25s, box-shadow .25s;
}
selector .mct-plan:hover{ transform:translateY(-4px); box-shadow:var(--mct-shadow-lg); }

selector .mct-plan--essencial{ border-color:#00B8D9; }
selector .mct-plan--destaque { border-color:#7B2FF7; transform:translateY(-12px); }
selector .mct-plan--destaque:hover{ transform:translateY(-16px); }
selector .mct-plan--protecao { border-color:#0B2E8A; }

/* Selo destaque */
selector .mct-plan__tag{
  position:absolute; top:-14px; left:50%; transform:translateX(-50%);
  background:var(--mct-orange); color:#fff;
  font-size:11px; font-weight:700; letter-spacing:.12em; text-transform:uppercase;
  padding:6px 14px; border-radius:9999px; white-space:nowrap;
  box-shadow:0 10px 20px -8px rgba(255,138,0,.55);
}

/* Tipografia */
selector .mct-plan__kicker{ font-size:11px; letter-spacing:.3em; text-transform:uppercase; color:#5B6478; font-weight:700; }
selector .mct-plan__name  { font-size:24px; color:var(--mct-text); font-weight:800; margin-top:-4px; }
selector .mct-plan__desc  { font-size:14px; color:#5B6478; line-height:1.5; }
selector .mct-plan__price { font-size:36px; color:var(--mct-text); font-weight:800; }
selector .mct-plan__price small{ font-size:14px; color:#5B6478; font-weight:500; margin:0 4px; }

/* Lista */
selector .mct-plan__list .elementor-icon-list-item{ padding:4px 0; }
selector .mct-plan__list .elementor-icon-list-icon i,
selector .mct-plan__list .elementor-icon-list-icon svg{ color:#00B8D9 !important; }
selector .mct-plan__list .elementor-icon-list-text{ font-size:14px; color:var(--mct-text); }

/* CTA */
selector .mct-plan__cta{ margin-top:auto; }
selector .mct-plan__cta .elementor-button{
  width:100%; justify-content:center;
  padding:14px 22px; border-radius:9999px;
  font-weight:700; font-size:14px; color:#fff;
}
selector .mct-plan--essencial .mct-plan__cta .elementor-button{ background:#00B8D9; }
selector .mct-plan--destaque  .mct-plan__cta .elementor-button{ background:#FF8A00; }
selector .mct-plan--protecao  .mct-plan__cta .elementor-button{ background:#0B2E8A; }
selector .mct-plan__cta .elementor-button:hover{ filter:brightness(1.08); }

/* Tablet */
@media (max-width:1023px){
  selector .mct-plans__grid > .e-con-inner{ grid-template-columns:1fr; gap:20px; }
  selector .mct-plan--destaque{ transform:none; }
}
/* Mobile */
@media (max-width:767px){
  selector{ padding:64px 16px; }
  selector .mct-plans__title{ font-size:26px; }
  selector .mct-plan{ padding:28px 22px; }
}
```
