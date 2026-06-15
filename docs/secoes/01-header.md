# Seção 01 · Header

Cabeçalho com versão desktop (barra fina superior + logo + menu + CTA) e
versão mobile (logo grande + hambúrguer + pills + tagline + CTA flutuante).

> No Elementor Pro o header é montado em **Theme Builder → Header**.
> Use duas versões: uma para Desktop e outra para Mobile/Tablet
> (na hora de publicar o Header, você escolhe a condição de exibição
> "Display on devices").

---

## Versão DESKTOP (≥ 1024px)

### Estrutura
```
Section [.mct-header-top]                    (barra fina navy)
└── Container 1 coluna [.mct-header-top__inner]
    ├── Icon List       (telefone, e-mail, horário)
    └── Icon List       (Área do Cliente, Seja Embaixador)

Section [.mct-header-main]                   (barra branca)
└── Container 3 colunas
    ├── Image           (logo)                .mct-header-main__logo
    ├── Nav Menu        (menu principal)      .mct-header-main__nav
    └── Button          (AGENDE SUA CONSULTA) .mct-header-main__cta
```

### Widgets nativos
- **Icon List** (Elementor Pro): para os links da topbar com ícones de telefone, e-mail, calendário.
- **Image**: logo (use `logo-meu-clube-tea.png`).
- **Nav Menu** (Elementor Pro): menu WordPress já cadastrado.
- **Button**: CTA laranja.

### Conteúdo

| Widget         | Texto / Link                                                                 |
|----------------|------------------------------------------------------------------------------|
| Topbar e-mail  | `contato@meuclubetea.com.br`                                                 |
| Topbar tel.    | `(11) 9XXXX-XXXX`                                                            |
| Topbar horário | `Seg a Sex 09h–18h`                                                          |
| Topbar links   | `Área do Cliente`, `Seja Embaixador`                                         |
| Menu           | Home · Planos · Benefícios · Como Funciona · Depoimentos · Sobre · Contato   |
| Botão CTA      | `AGENDE SUA CONSULTA` (ícone calendário) → página de agendamento             |

---

## Versão MOBILE / TABLET (< 1024px)

### Estrutura
```
Section [.mct-header-mb]
└── Container 1 coluna [.mct-header-mb__inner]
    ├── Inner Section 2 col   .mct-header-mb__row
    │   ├── Image (logo)
    │   └── Menu Anchor / WP Mobile Menu  (hambúrguer)
    ├── Icon List horizontal  .mct-header-mb__pills
    ├── Heading (tagline)     .mct-header-mb__tagline
    └── Button (CTA flutuante).mct-header-mb__cta
```

### Pills (Icon List horizontal)
| Item        | Ícone (Lucide / FontAwesome)  | Cor       |
|-------------|-------------------------------|-----------|
| Cuidados    | Heart                         | `#00B8D9` |
| Inclusão    | Acessibilidade / Wheelchair   | `#7B2FF7` |
| Benefícios  | Star                          | `#FF8A00` |

### Tagline
> Conexão que **acolhe**. Benefícios que **transformam**.
(`acolhe` em teal · `transformam` em laranja)

---

## CSS Classes a atribuir

| Widget                            | CSS Class                  |
|-----------------------------------|----------------------------|
| Section topbar desktop            | `mct-header-top`           |
| Container interno da topbar       | `mct-header-top__inner`    |
| Section barra principal desktop   | `mct-header-main`          |
| Logo desktop                      | `mct-header-main__logo`    |
| Nav Menu desktop                  | `mct-header-main__nav`     |
| Botão CTA desktop                 | `mct-header-main__cta`     |
| Section header mobile             | `mct-header-mb`            |
| Container interno mobile          | `mct-header-mb__inner`     |
| Inner Section (logo + hambúrguer) | `mct-header-mb__row`       |
| Icon List das pills               | `mct-header-mb__pills`     |
| Tagline (Heading)                 | `mct-header-mb__tagline`   |
| Botão CTA flutuante mobile        | `mct-header-mb__cta`       |

---

## CSS personalizado

Cole em **Site Settings → Custom CSS** (vale para qualquer header reaproveitável).

```css
/* ===== Topbar Desktop ===== */
.mct-header-top{ background:var(--mct-navy); color:#fff; font-size:12px; }
.mct-header-top__inner{ max-width:1280px; margin:0 auto; padding:8px 32px;
  display:flex; justify-content:space-between; align-items:center; gap:24px; }
.mct-header-top a{ color:rgba(255,255,255,.85); text-decoration:none; }
.mct-header-top a:hover{ color:var(--mct-teal); }

/* ===== Barra Principal Desktop ===== */
.mct-header-main{ background:#fff; }
.mct-header-main > .e-con-inner{ max-width:1280px; padding:20px 32px;
  display:grid !important; grid-template-columns:auto 1fr auto; align-items:center; gap:32px; }
.mct-header-main__logo img{ height:56px; width:auto; }
.mct-header-main__nav a{ font-size:14px; font-weight:600; color:#1B2540; }
.mct-header-main__nav a:hover{ color:var(--mct-violet); }
.mct-header-main__cta .elementor-button{
  background:var(--mct-orange); color:#fff;
  padding:14px 22px; border-radius:9999px; font-weight:700; font-size:14px;
  box-shadow:0 14px 30px -10px rgba(255,138,0,.5); white-space:nowrap;
}
.mct-header-main__cta .elementor-button:hover{ background:var(--mct-orange-hov); }

/* ===== Header Mobile ===== */
.mct-header-mb{ background:#fff; position:relative; z-index:40; }
.mct-header-mb__inner{ max-width:1280px; margin:0 auto; padding:20px 20px 28px; position:relative; }
.mct-header-mb__row{ display:flex; justify-content:space-between; align-items:center; }
.mct-header-mb__row img{ height:64px; width:auto; }
.mct-header-mb__row .menu-toggle,
.mct-header-mb__row [role="button"]{
  width:48px; height:48px; border-radius:12px;
  background:var(--mct-violet); color:#fff; font-size:22px;
  box-shadow:0 8px 20px -8px rgba(123,47,247,.5);
}
.mct-header-mb__pills{ margin-top:18px; }
.mct-header-mb__pills ul{ display:flex; flex-wrap:wrap; gap:8px 24px !important; }
.mct-header-mb__pills .elementor-icon-list-text{ font-size:14px; font-weight:600; color:#1B2540; }
.mct-header-mb__tagline{ font-size:15px; color:#1B2540; margin-top:10px; }
.mct-header-mb__tagline strong:nth-of-type(1){ color:var(--mct-teal); }
.mct-header-mb__tagline strong:nth-of-type(2){ color:var(--mct-orange); }
.mct-header-mb__cta{ position:absolute; right:20px; bottom:-24px; z-index:30; }
.mct-header-mb__cta .elementor-button{
  background:#fff; color:var(--mct-navy);
  padding:14px 22px; border-radius:9999px; font-weight:700; font-size:14px;
  border:1px solid rgba(123,47,247,.15);
  box-shadow:0 20px 40px -12px rgba(11,46,138,.25);
}

/* ===== Visibilidade entre Desktop e Mobile ===== */
.mct-header-top, .mct-header-main{ display:block; }
.mct-header-mb{ display:none; }
@media (max-width:1023px){
  .mct-header-top, .mct-header-main{ display:none !important; }
  .mct-header-mb{ display:block; }
}
```

> Se preferir, em vez do CSS de visibilidade, use a aba
> **Avançado → Responsive → Hide on…** de cada Section.
