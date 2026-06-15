# Seção 02 · Hero

Banner principal com gradiente oficial (navy → indigo → violet), imagem da
família ao fundo (à direita no desktop, canto inferior direito no mobile),
título, subtítulo e dois CTAs.

---

## Estrutura

```
Section [.mct-hero]
├── Image                (.mct-hero__img-desktop)    fundo-banner.png   (esconder no mobile)
├── Image                (.mct-hero__img-mobile)     fundo-banner-mobi.png (esconder no desktop)
└── Container 2 colunas (61% / 39%)  [.mct-hero__inner]
    ├── Coluna texto
    │   ├── Heading (eyebrow)    .mct-hero__badge
    │   ├── Heading (H1)         .mct-hero__title
    │   ├── Divider              .mct-hero__rule
    │   ├── Text Editor          .mct-hero__lead
    │   └── Inner Section 2 col  .mct-hero__ctas
    │       ├── Button           .mct-hero__cta-primary
    │       └── Button           .mct-hero__cta-secondary
    └── Coluna card (só desktop) .mct-hero__card
        └── (3 Icon Box em linha)
```

---

## Widgets nativos

- **Image** × 2 (imagem desktop e imagem mobile, com Hide on Mobile / Hide on Desktop).
- **Heading** para badge, título e card.
- **Divider** estilizado como linha curta teal.
- **Text Editor** para o subtítulo.
- **Inner Section** + **Button** × 2 para os CTAs.
- **Icon Box** × 3 para os mini-stats do card desktop.

---

## Conteúdo

| Elemento     | Texto / Detalhe |
|--------------|-----------------|
| Badge        | `SAÚDE, ACOLHIMENTO E BENEFÍCIOS` (uppercase, ícone escudo) |
| H1           | `Cuidado e benefícios para pessoas com `**TEA, PCD**`, `**neurodivergentes**` e suas famílias.` |
| Linha        | Teal `#00B8D9`, 80×4px, radius pill |
| Subtítulo    | `Telemedicina, telepsicologia, assistência familiar e descontos exclusivos. Mais do que um plano — uma rede de apoio para você e quem mais importa.` |
| CTA 1        | `Nossos Planos` → âncora `#planos` (laranja) |
| CTA 2        | `Saiba Mais` → WhatsApp (outline branco) |

### Card desktop (3 Icon Box em linha)
| Ícone           | Cor       | Label         |
|-----------------|-----------|---------------|
| Users           | `#0B2E8A` | Famílias      |
| Stethoscope     | `#7B2FF7` | Consultas     |
| User-cog        | `#00B8D9` | Especialistas |

Acima dos ícones: heading **"Impacto que transforma vidas"** + texto
*"Até **10% do lucro** destinado a causas de apoio a famílias atípicas."*

---

## CSS Classes a atribuir

| Widget                              | CSS Class                |
|-------------------------------------|--------------------------|
| Section principal                   | `mct-hero`               |
| Image desktop                       | `mct-hero__img-desktop`  |
| Image mobile                        | `mct-hero__img-mobile`   |
| Container interno (2 col)           | `mct-hero__inner`        |
| Heading do badge                    | `mct-hero__badge`        |
| Heading do H1                       | `mct-hero__title`        |
| Divider                             | `mct-hero__rule`         |
| Text Editor do subtítulo            | `mct-hero__lead`         |
| Inner Section dos botões            | `mct-hero__ctas`         |
| Botão laranja                       | `mct-hero__cta-primary`  |
| Botão outline                       | `mct-hero__cta-secondary`|
| Container do card desktop           | `mct-hero__card`         |

---

## CSS personalizado

Cole na própria **Section → Avançado → CSS personalizado** (escopo `selector`).

```css
selector{
  position:relative; isolation:isolate; overflow:hidden;
  background:var(--mct-grad-hero); color:#fff;
}
selector .mct-hero__img-desktop img,
selector .mct-hero__img-mobile img{
  position:absolute; inset:0; height:100%; width:100%;
  object-fit:cover; object-position:right center; opacity:.92;
  pointer-events:none;
}
selector .mct-hero__img-desktop{ position:absolute; inset:0 0 0 auto; width:52%; }
selector .mct-hero__img-mobile{ position:absolute; right:0; bottom:0; width:60%; height:55%; }

selector .mct-hero__inner{
  position:relative; max-width:1280px; margin:0 auto;
  padding:80px 32px 160px;
}

/* Badge */
selector .mct-hero__badge{
  display:inline-flex; align-items:center; gap:8px;
  padding:8px 16px; border-radius:9999px;
  background:rgba(255,255,255,.10); border:1px solid rgba(255,255,255,.25);
  backdrop-filter:blur(6px);
  font-size:11px; letter-spacing:.22em; text-transform:uppercase;
  font-weight:600; color:#fff; white-space:nowrap;
}

/* Título */
selector .mct-hero__title{
  font-size:48px; line-height:1.08; font-weight:700;
  margin:24px 0 0; max-width:680px; color:#fff;
}
selector .mct-hero__title strong:nth-of-type(1){ color:var(--mct-teal); }
selector .mct-hero__title strong:nth-of-type(2){ color:#B794FF; }

/* Linha */
selector .mct-hero__rule .elementor-divider-separator{
  width:80px; height:4px; border-radius:9999px;
  background:var(--mct-teal); border:0;
}

/* Subtítulo */
selector .mct-hero__lead{
  margin-top:20px; max-width:520px;
  font-size:18px; line-height:1.55; color:rgba(255,255,255,.92);
}

/* CTAs */
selector .mct-hero__ctas{ margin-top:28px; }
selector .mct-hero__ctas .e-con-inner{ display:flex; flex-wrap:nowrap; gap:12px; }
selector .mct-hero__cta-primary .elementor-button{
  background:var(--mct-orange); color:#fff;
  padding:14px 24px; border-radius:9999px; font-weight:700; font-size:14px;
  box-shadow:0 18px 35px -12px rgba(255,138,0,.55); white-space:nowrap;
}
selector .mct-hero__cta-primary .elementor-button:hover{ background:var(--mct-orange-hov); }
selector .mct-hero__cta-secondary .elementor-button{
  background:transparent; color:#fff;
  border:1px solid rgba(255,255,255,.75);
  padding:14px 24px; border-radius:9999px; font-weight:600; font-size:14px;
  white-space:nowrap;
}
selector .mct-hero__cta-secondary .elementor-button:hover{ background:rgba(255,255,255,.1); }

/* Card desktop */
selector .mct-hero__card{
  background:rgba(255,255,255,.95); color:var(--mct-text);
  border:1px solid rgba(255,255,255,.6); border-radius:18px;
  padding:20px; box-shadow:var(--mct-shadow-lg);
  max-width:300px;
}

/* ===== Tablet ===== */
@media (max-width:1023px){
  selector .mct-hero__title{ font-size:36px; }
  selector .mct-hero__card{ display:none; }
}
/* ===== Mobile ===== */
@media (max-width:767px){
  selector .mct-hero__inner{ padding:56px 20px 140px; }
  selector .mct-hero__title{ font-size:28px; max-width:88%; }
  selector .mct-hero__lead{ font-size:15px; max-width:62%; }
  selector .mct-hero__img-desktop{ display:none; }
}
@media (min-width:768px){
  selector .mct-hero__img-mobile{ display:none; }
}
```

> O `selector` no CSS personalizado do Elementor já refere à própria Section,
> portanto não precisa repetir `.mct-hero` aqui dentro.

---

## Responsividade

- **Desktop** (≥1024px): texto à esquerda, imagem família à direita, card flutuante no canto.
- **Tablet** (768–1023px): mesma diagramação, card escondido.
- **Mobile** (<768px): imagem no canto inferior direito, textos por cima do gradiente,
  CTAs sempre lado a lado.
