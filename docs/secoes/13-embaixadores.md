# Seção 13 · Programa de Embaixadores

Bloco de conversão para captação de embaixadores em **coluna única
centralizada**, com fundo gradiente navy pastel.

Layout 100% fiel à referência aprovada (`image-21.png`): card único arredondado,
com badge no topo, headline, pilares com divisores verticais, barras de
comissão (20% teal · 3% lilás) e CTA laranja.

> Esta seção termina com o CTA laranja "QUERO SER UM EMBAIXADOR".
> A próxima seção (`14-central-atendimento.md`) é um bloco branco com
> margem negativa que **sobrepõe** este botão — não altere o `padding-bottom`
> desta seção sem ajustar lá também.

---

## Estrutura

```
Section [.mct-amb]                          id=embaixadores
└── Container 1 col, max-width 720px, fundo gradiente navy
    ├── Icon List   (badge único)            .mct-amb__badge
    ├── Heading H2                            .mct-amb__title
    ├── Text Editor (subtítulo + ícone ❤)    .mct-amb__lead
    │
    ├── Inner Section [.mct-amb__pillars]   (3 col 1fr/1fr/1fr)
    │   ├── Icon Box (Impacto real — teal)
    │   ├── Icon Box (Renda recorrente — violeta)
    │   └── Icon Box (Liberdade — laranja)
    │
    ├── Text Editor (parágrafo com palavras coloridas)
    ├── Divider com ❤                         .mct-amb__divider
    ├── Heading H3                            .mct-amb__sub
    │
    ├── Inner Section [.mct-amb__bars]      (barras de comissão)
    │   ├── Container .mct-amb__bar (20% teal)
    │   └── Container .mct-amb__bar (3% lilás)
    │
    ├── Inner Section [.mct-amb__rocket]    (card foguete fechamento)
    │   ├── Icon (rocket teal)
    │   └── Text Editor
    │
    └── Button [.mct-amb__cta]               QUERO SER UM EMBAIXADOR
```

---

## Widgets nativos
- **Icon List, Heading, Text Editor, Icon Box, Button, Divider**.
- Para as barras de comissão, use **Container + Heading com `%`** e
  controle a largura preenchida pelo CSS (`width:20%` e `width:12%`).

---

## Conteúdo

- **Badge:** `PROGRAMA DE EMBAIXADORES` (ícone grupo · teal)
- **Headline:** `Seja um Embaixador do Meu Clube TEA`
- **Subtítulo:** `Transforme vidas e construa uma renda extra recorrente com propósito.`

### Pilares (3 colunas com divisores verticais)
| Ícone               | Cor       | Título            | Texto                                         |
|---------------------|-----------|-------------------|-----------------------------------------------|
| Users (grupo)       | `#7FC8D4` | Impacto real      | Leve saúde e benefícios para famílias que precisam. |
| Trending Up         | `#B8A4E8` | Renda recorrente  | Ganhe todos os meses com sua rede de associados. |
| Map Pin             | `#F3A35C` | Liberdade         | Trabalhe de onde estiver, no seu ritmo.       |

### Parágrafo
> Ao apresentar o Meu Clube TEA, você ajuda famílias a terem acesso à
> **saúde** (teal), **inclusão** (violeta) e **benefícios** (laranja), e
> ainda cria uma fonte de **renda recorrente** (violeta).

### Subtítulo dourado/teal
`Seu reconhecimento por transformar vidas:`

### Barras de comissão
| Ícone       | Cor      | Título                 | Subtítulo               | % | Preench. |
|-------------|----------|------------------------|-------------------------|---|----------|
| Handshake   | `#7FC8D4`| Bônus de indicação     | (primeira mensalidade)  | 20% | 22% |
| Dollar Cycle| `#B8A4E8`| Bônus recorrente mensal| por até 12 meses        | 3%  | 22% |

### Card foguete (fechamento)
> 🚀 **Muito mais do que uma renda extra:**
> Faça parte de um movimento que une **cuidado** (teal), **inclusão**
> (violeta) e **oportunidade** (laranja).

### CTA
- Texto: `QUERO SER UM EMBAIXADOR ↗`
- Link: `site.links.embaixador`
- Microcopy abaixo: `🔒 Processo simples, seguro e 100% online.`

---

## CSS Classes

| Widget                       | CSS Class               |
|------------------------------|-------------------------|
| Section principal            | `mct-amb`               |
| Badge                        | `mct-amb__badge`        |
| Título                       | `mct-amb__title`        |
| Subtítulo                    | `mct-amb__lead`         |
| Inner section pilares        | `mct-amb__pillars`      |
| Cada Icon Box do pilar       | `mct-amb__pillar`       |
| Divider com coração          | `mct-amb__divider`      |
| Subtítulo seção barras       | `mct-amb__sub`          |
| Inner section barras         | `mct-amb__bars`         |
| Cada barra                   | `mct-amb__bar`          |
| Trilho da barra              | `mct-amb__track`        |
| Preenchimento                | `mct-amb__fill`         |
| Card foguete                 | `mct-amb__rocket`       |
| Botão CTA                    | `mct-amb__cta`          |

---

## CSS personalizado (cole na Section principal)

```css
.mct-amb{
  padding:80px 20px 120px;            /* bottom maior p/ sobreposição da Central */
  background:var(--mct-bg-soft);
}
.mct-amb > .e-con-inner{
  max-width:720px; margin:0 auto;
  background:var(--mct-grad-navy); color:#fff;
  border-radius:var(--mct-radius-xl);
  padding:48px 32px;
  box-shadow:var(--mct-shadow-lg);
}

/* Badge */
.mct-amb__badge{
  display:inline-flex !important; align-items:center; gap:8px;
  background:rgba(255,255,255,.10); border:1px solid rgba(255,255,255,.25);
  padding:10px 20px; border-radius:9999px; margin:0 auto;
  font-size:11px; letter-spacing:.22em; text-transform:uppercase; font-weight:700;
}
.mct-amb__badge .elementor-icon-list-icon i{ color:var(--mct-teal) !important; }

/* Título / subtítulo */
.mct-amb__title{ font-size:36px; color:#fff; text-align:center; margin:24px 0 12px; line-height:1.1; }
.mct-amb__title strong{ color:var(--mct-teal); font-weight:700; }
.mct-amb__lead{ text-align:center; color:rgba(255,255,255,.85); font-size:16px; max-width:520px; margin:0 auto; }
.mct-amb__lead em{ color:var(--mct-teal); font-style:normal; font-weight:600; }

/* Pilares */
.mct-amb__pillars{
  margin:28px 0 8px;
  background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.15);
  border-radius:var(--mct-radius-lg); padding:20px;
}
.mct-amb__pillars > .e-con-inner{
  display:grid !important; grid-template-columns:repeat(3,1fr); gap:0;
}
.mct-amb__pillar{
  text-align:center; padding:0 16px;
  border-right:1px solid rgba(255,255,255,.15);
}
.mct-amb__pillar:last-child{ border-right:none; }
.mct-amb__pillar .elementor-icon-box-title{ font-size:15px; font-weight:700; }
.mct-amb__pillar .elementor-icon-box-description{
  color:rgba(255,255,255,.8); font-size:13px; line-height:1.45;
}

/* Divider com coração */
.mct-amb__divider{ margin:28px auto; max-width:360px; }
.mct-amb__divider .elementor-divider-separator{ border-top-color:rgba(255,255,255,.25); }

.mct-amb__sub{ text-align:center; color:var(--mct-teal); font-size:17px; font-weight:600; margin-bottom:20px; }

/* Barras de comissão */
.mct-amb__bars{ display:flex; flex-direction:column; gap:14px; max-width:560px; margin:0 auto; }
.mct-amb__bar{
  display:flex !important; align-items:center; gap:12px;
}
.mct-amb__bar .icon{
  flex:0 0 56px; height:56px; border-radius:9999px;
  display:flex; align-items:center; justify-content:center;
  background:rgba(127,200,212,.13); border:1.5px solid var(--mct-teal);
}
.mct-amb__bar.violet .icon{ background:rgba(184,164,232,.13); border-color:var(--mct-violet); }

.mct-amb__bar .label{ width:38%; }
.mct-amb__bar .label .title{ font-weight:700; font-size:14px; }
.mct-amb__bar .label .sub  { font-size:12px; color:rgba(255,255,255,.7); }

.mct-amb__track{
  flex:1; height:44px; border-radius:9999px;
  background:rgba(255,255,255,.95); position:relative; overflow:hidden;
}
.mct-amb__fill{
  position:absolute; left:0; top:0; height:100%;
  border-radius:9999px;
  display:flex; align-items:center; justify-content:flex-end;
  padding-right:18px;
  color:#fff; font-weight:800; font-size:18px;
  background:var(--mct-teal);
}
.mct-amb__fill.teal  { background:var(--mct-teal);   width:22%; }
.mct-amb__fill.violet{ background:var(--mct-violet); width:22%; }

/* Card foguete */
.mct-amb__rocket{
  margin:32px auto 0; max-width:560px;
  background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.15);
  border-radius:var(--mct-radius-lg); padding:20px;
  display:flex !important; align-items:flex-start; gap:14px;
}
.mct-amb__rocket .icon{
  flex:0 0 44px; height:44px; border-radius:9999px;
  background:rgba(127,200,212,.15); border:1px solid rgba(127,200,212,.4);
  display:flex; align-items:center; justify-content:center; color:var(--mct-teal);
}
.mct-amb__rocket p{ font-size:14px; line-height:1.55; }
.mct-amb__rocket strong{ color:var(--mct-teal); font-weight:600; }

/* CTA */
.mct-amb__cta{ display:flex !important; justify-content:center; margin-top:36px; }
.mct-amb__cta .elementor-button{
  background:var(--mct-grad-cta); color:#fff;
  padding:16px 28px; border-radius:9999px; font-weight:700; font-size:14px;
  letter-spacing:.05em; box-shadow:var(--mct-shadow-md);
}

/* Mobile */
@media (max-width:767px){
  .mct-amb{ padding:60px 16px 110px; }
  .mct-amb > .e-con-inner{ padding:36px 20px; }
  .mct-amb__title{ font-size:26px; }
  .mct-amb__pillars > .e-con-inner{ grid-template-columns:1fr; gap:20px; }
  .mct-amb__pillar{ border-right:none; border-bottom:1px solid rgba(255,255,255,.15); padding-bottom:20px; }
  .mct-amb__pillar:last-child{ border-bottom:none; padding-bottom:0; }
  .mct-amb__bar .label{ width:auto; flex:1; }
  .mct-amb__bar .icon{ flex-basis:48px; height:48px; }
  .mct-amb__track{ height:38px; }
}
```
