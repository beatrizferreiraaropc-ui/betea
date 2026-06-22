# Seção 15 · Acompanhamento de verdade

Trio de cards brancos reaproveitando o estilo da seção 03 · Benefícios.
Reforça que o Clube é mais do que "ter acesso" — é acompanhamento real.

---

## Estrutura

```
Section [.mct-acomp]                        id=acompanhamento
└── Container 1 col, max-width 1280px
    ├── Heading eyebrow                     .mct-acomp__eyebrow
    ├── Heading H2                          .mct-acomp__title
    ├── Text Editor (lead)                  .mct-acomp__lead
    │
    └── Inner Section [.mct-acomp__grid]   (3 col 1fr)
        ├── Container .mct-acomp__card
        │   ├── Icon (Zap — teal)
        │   ├── Heading (título)
        │   └── Text Editor (descrição)
        ├── Container .mct-acomp__card  (violeta)
        └── Container .mct-acomp__card  (laranja)
```

---

## Widgets nativos
- **Heading, Text Editor, Icon, Container**.

---

## Conteúdo

- **Eyebrow:** `PENSADO PARA O SEU DIA A DIA`
- **Título:** `Mais do que acesso, é acompanhamento de verdade`
- **Lead:**
  > Sabemos que cuidar de uma família exige previsibilidade e atenção
  > constante. Por isso, organizamos cada etapa do clube para reduzir
  > esforço — não apenas oferecer mais um benefício na lista.

### Cards

| Ícone | Cor       | Título                              | Descrição                                                                                          |
|-------|-----------|-------------------------------------|----------------------------------------------------------------------------------------------------|
| Zap   | `#7FC8D4` | Acesso sem fricção                  | Consultas, receitas e descontos no mesmo lugar, direto pelo site, sem precisar ligar para central. |
| Cal.Check | `#B8A4E8` | Agenda que se adapta a você     | Reagende em poucos toques e receba aviso quando o profissional ideal estiver disponível.           |
| Headset | `#F3A35C` | Suporte que entende o contexto    | Time treinado para acolher famílias com TEA, PCD e neurodivergentes, sem reexplicar tudo a cada contato. |

---

## CSS Classes

| Widget                | CSS Class               |
|-----------------------|-------------------------|
| Section               | `mct-acomp`             |
| Eyebrow               | `mct-acomp__eyebrow`    |
| Título                | `mct-acomp__title`      |
| Lead                  | `mct-acomp__lead`       |
| Inner Section grid    | `mct-acomp__grid`       |
| Cada card             | `mct-acomp__card`       |

---

## CSS personalizado

```css
.mct-acomp{ background:#fff; padding:64px 24px 96px; }
.mct-acomp > .e-con-inner{ max-width:1280px; margin:0 auto; }

.mct-acomp__eyebrow{
  text-align:center; font-size:12px; letter-spacing:.3em; text-transform:uppercase;
  color:var(--mct-violet); font-weight:700;
}
.mct-acomp__title{
  text-align:center; font-size:32px; line-height:1.15; margin:12px auto 12px;
  max-width:680px;
}
.mct-acomp__lead{
  text-align:center; color:var(--mct-muted); max-width:680px; margin:0 auto;
}

.mct-acomp__grid{ margin-top:48px; }
.mct-acomp__grid > .e-con-inner{
  display:grid !important; grid-template-columns:repeat(3,1fr); gap:24px;
}

.mct-acomp__card{
  text-align:center; background:#fff; border:1px solid var(--mct-border);
  border-radius:var(--mct-radius-lg); padding:28px 24px;
  transition:transform .2s, box-shadow .2s;
}
.mct-acomp__card:hover{ transform:translateY(-4px); box-shadow:var(--mct-shadow-lg); }

.mct-acomp__card .elementor-icon{
  width:64px; height:64px; border-radius:9999px; margin:0 auto 16px;
  display:flex; align-items:center; justify-content:center;
  color:#fff; box-shadow:var(--mct-shadow-md);
}
.mct-acomp__card.teal   .elementor-icon{ background:var(--mct-teal); }
.mct-acomp__card.violet .elementor-icon{ background:var(--mct-violet); }
.mct-acomp__card.orange .elementor-icon{ background:var(--mct-orange); }

.mct-acomp__card h3{ font-size:18px; font-weight:700; margin-bottom:8px; }
.mct-acomp__card p { font-size:14px; color:var(--mct-muted); line-height:1.55; }

/* Tablet */
@media (max-width:1023px){
  .mct-acomp__grid > .e-con-inner{ grid-template-columns:1fr 1fr; }
}
/* Mobile */
@media (max-width:767px){
  .mct-acomp{ padding:56px 16px 72px; }
  .mct-acomp__title{ font-size:24px; }
  .mct-acomp__grid > .e-con-inner{ grid-template-columns:1fr; gap:16px; }
}
```
