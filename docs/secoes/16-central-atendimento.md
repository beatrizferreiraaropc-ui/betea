# Seção 14 · Central de Atendimento (bloco branco sobreposto)

Bloco branco arredondado que **sobrepõe** o final da seção 13 (Embaixadores)
e fica logo acima da seção 15 (Acompanhamento).

Contém: logo grande · pills (Cuidado / Inclusão / Benefícios) · botão
"Central de Atendimento" com ícone do WhatsApp.

> Visualmente esse bloco "puxa" o eixo do site de volta para o claro
> depois do navy do Embaixadores, e sobrepõe o CTA "QUERO SER UM EMBAIXADOR"
> conforme referência aprovada (`image-21.png`).

---

## Estrutura

```
Section [.mct-central]
└── Container 1 col, max-width 720px, fundo branco
    ├── Image (logo)              .mct-central__logo
    ├── Icon List (3 pills)       .mct-central__pills
    └── Button (CTA WhatsApp)     .mct-central__cta
```

---

## Widgets nativos
- **Image** (logo), **Icon List** (pills), **Button** (CTA).

---

## Conteúdo

- Logo: `logo-meu-clube-tea.png` (versão colorida, fundo claro).
- Pills (mesmas do header):
  - ❤ Cuidado · `#7FC8D4`
  - ♿ Inclusão · `#B8A4E8`
  - ★ Benefícios · `#F3A35C`
- Botão: `CENTRAL DE ATENDIMENTO` + ícone WhatsApp verde (`#25D366`).
- Link: `site.links.whatsapp` (target="_blank").

---

## CSS Classes

| Widget         | CSS Class              |
|----------------|------------------------|
| Section        | `mct-central`          |
| Logo           | `mct-central__logo`    |
| Pills          | `mct-central__pills`   |
| Botão          | `mct-central__cta`     |

---

## CSS personalizado

```css
.mct-central{
  position:relative; z-index:10;
  margin-top:-80px;                     /* sobreposição sobre Embaixadores */
  background:#fff;
  border-radius:24px 24px 0 0;
  box-shadow:0 -20px 40px -30px rgba(11,46,138,.25);
  padding:40px 24px 56px;
}
.mct-central > .e-con-inner{
  max-width:720px; margin:0 auto;
  display:flex !important; flex-direction:column; align-items:center; gap:20px;
  text-align:center;
}

.mct-central__logo img{ max-height:80px; width:auto; }

.mct-central__pills .elementor-icon-list-items{
  display:flex !important; flex-wrap:wrap; justify-content:center; gap:8px 24px;
}
.mct-central__pills .elementor-icon-list-text{
  font-weight:600; font-size:14px; color:var(--mct-text);
}

/* Botão outline navy com bolinha verde do WhatsApp */
.mct-central__cta .elementor-button{
  display:inline-flex !important; align-items:center; gap:12px;
  background:#fff; color:var(--mct-navy);
  border:1px solid rgba(63,116,194,.7);
  padding:14px 24px; border-radius:9999px; font-weight:700; font-size:14px;
  transition:background .2s, color .2s;
}
.mct-central__cta .elementor-button:hover{
  background:var(--mct-navy); color:#fff;
}
.mct-central__cta .elementor-button-icon{
  width:24px; height:24px; border-radius:9999px;
  background:#25D366; color:#fff;
  display:inline-flex; align-items:center; justify-content:center;
}

/* Mobile */
@media (max-width:767px){
  .mct-central{ margin-top:-72px; padding:32px 16px 48px; }
  .mct-central__logo img{ max-height:64px; }
}
```

---

## Notas
- O `margin-top` negativo **deve coincidir** com a sobreposição visual
  do CTA da seção 13. Se mexer no `padding-bottom` de Embaixadores,
  ajuste esse valor proporcionalmente.
- Esta seção **não tem** padding-bottom grande — a seção 15
  (`Acompanhamento`) começa logo abaixo com fundo claro próprio.
