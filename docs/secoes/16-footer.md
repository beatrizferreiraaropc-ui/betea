# Seção 14 · Footer

Rodapé navy com 4 colunas: logo + texto institucional, links rápidos, contato,
redes sociais. Card flutuante "Central de Atendimento" sobreposto ao topo do
footer (opcional).

---

## Estrutura

```
Section [.mct-footer]
└── Container 4 col   (max-width 1280px)
    ├── Coluna 1   .mct-footer__brand
    │   ├── Image (logo branca)
    │   └── Text Editor (descrição curta)
    ├── Coluna 2   .mct-footer__col
    │   ├── Heading (título "Navegação")
    │   └── Icon List (links do menu)
    ├── Coluna 3   .mct-footer__col
    │   ├── Heading ("Contato")
    │   └── Icon List (tel, e-mail, horário)
    └── Coluna 4   .mct-footer__col
        ├── Heading ("Redes sociais")
        └── Social Icons

Section [.mct-footer__bottom]
└── Container 2 col
    ├── Text Editor   © 2025 Meu Clube TEA
    └── Icon List      (Termos · Privacidade)
```

---

## Widgets nativos
- **Image**, **Heading**, **Text Editor**, **Icon List**, **Social Icons**.

---

## Conteúdo

- Logo branca (versão escura → fundo navy).
- Descrição: `Health Tech humanizada para pessoas com TEA, PCD, neurodivergentes e suas famílias.`
- Links rápidos: Home · Planos · Como Funciona · Sobre · Contato · Embaixador.
- Contato: telefone, e-mail e horário (mesmo da topbar do header).
- Redes: Instagram · Facebook · YouTube · WhatsApp.
- Rodapé inferior: `© 2025 Meu Clube TEA — Todos os direitos reservados.` + Termos / Privacidade.

---

## CSS Classes

| Widget                    | CSS Class               |
|---------------------------|-------------------------|
| Section principal         | `mct-footer`            |
| Coluna 1 (logo + texto)   | `mct-footer__brand`     |
| Colunas 2, 3, 4           | `mct-footer__col`       |
| Section rodapé inferior   | `mct-footer__bottom`    |

---

## CSS personalizado (cole nas duas Sections)

```css
/* === Footer principal === */
.mct-footer{ background:var(--mct-grad-navy); color:#fff; padding:80px 24px 40px; }
.mct-footer > .e-con-inner{
  max-width:1280px; margin:0 auto;
  display:grid !important; grid-template-columns:1.5fr 1fr 1fr 1fr; gap:48px;
}

.mct-footer__brand img{ max-height:48px; width:auto; margin-bottom:16px; }
.mct-footer__brand p,
.mct-footer__brand .elementor-widget-text-editor{
  font-size:14px; color:rgba(255,255,255,.75); line-height:1.55;
}

.mct-footer__col h4,
.mct-footer__col .elementor-heading-title{
  font-size:13px; letter-spacing:.18em; text-transform:uppercase;
  color:#fff; font-weight:700; margin-bottom:16px;
}
.mct-footer__col .elementor-icon-list-text{ color:rgba(255,255,255,.78); font-size:14px; }
.mct-footer__col a:hover .elementor-icon-list-text{ color:var(--mct-teal); }
.mct-footer__col .elementor-icon-list-icon i,
.mct-footer__col .elementor-icon-list-icon svg{ color:var(--mct-teal) !important; }

.mct-footer .elementor-social-icon{
  background:rgba(255,255,255,.08); color:#fff; border-radius:9999px;
  width:36px; height:36px; transition:.2s;
}
.mct-footer .elementor-social-icon:hover{ background:var(--mct-teal); }

/* === Rodapé inferior === */
.mct-footer__bottom{ background:#061C5C; color:rgba(255,255,255,.6); padding:20px 24px; }
.mct-footer__bottom > .e-con-inner{
  max-width:1280px; margin:0 auto;
  display:flex; justify-content:space-between; align-items:center; gap:16px;
  font-size:12px;
}
.mct-footer__bottom a{ color:rgba(255,255,255,.6); }
.mct-footer__bottom a:hover{ color:var(--mct-teal); }

/* Tablet */
@media (max-width:1023px){
  .mct-footer > .e-con-inner{ grid-template-columns:1fr 1fr; gap:32px; }
}
/* Mobile */
@media (max-width:767px){
  .mct-footer{ padding:56px 16px 32px; }
  .mct-footer > .e-con-inner{ grid-template-columns:1fr; gap:28px; }
  .mct-footer__bottom > .e-con-inner{ flex-direction:column; text-align:center; }
}
```
