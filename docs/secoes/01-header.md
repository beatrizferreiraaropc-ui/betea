# Seção 01 · Header (unificado)

Cabeçalho com **o mesmo estilo em mobile, tablet e desktop**:

1. Barra fina superior (apenas desktop ≥1024px): contato + Área do Cliente
2. Bloco principal:
   - Logo grande à esquerda
   - Botão hambúrguer violeta à direita (abre o drawer com o menu completo)
3. Linha de pills coloridos: **Cuidado · Inclusão · Benefícios**
4. Tagline curta colorida
5. Botão flutuante **"AGENDE SUA CONSULTA"** sobreposto ao Hero

> No Elementor Pro o header é montado em **Theme Builder → Header**.
> Não use duas versões: uma só funciona em todas as telas.

---

## Estrutura

```
Section [.mct-topbar]                       (só desktop)
└── Container 2 col
    ├── Icon List (telefone, e-mail, horário)
    └── Icon List (Área do Cliente, Seja Embaixador)

Section [.mct-header]                       (todas as telas)
└── Container 1 col [.mct-header__inner]
    ├── Container 2 col [.mct-header__row]
    │   ├── Image (logo grande)             .mct-header__logo
    │   └── Button (hambúrguer violeta)     .mct-header__menu
    ├── Icon List (3 pills)                 .mct-header__pills
    └── Heading / Text (tagline)            .mct-header__tag

Botão flutuante AGENDE
└── Button [.mct-header__cta]               (posicionado absolutamente)

Drawer/Off-canvas
└── Popup do Elementor Pro                  .mct-drawer
```

---

## Widgets nativos
- **Icon List**: topbar e pills coloridos.
- **Image**: logo (`logo-meu-clube-tea.png`).
- **Button**: hambúrguer (ícone Menu) e CTA "AGENDE SUA CONSULTA".
- **Heading**: tagline.
- **Popup (Elementor Pro)**: drawer/off-canvas com o menu principal.

---

## Conteúdo

| Local            | Texto / Link                                |
|------------------|---------------------------------------------|
| Topbar tel.      | `(11) 9XXXX-XXXX`                           |
| Topbar e-mail    | `contato@meuclubetea.com.br`                |
| Topbar horário   | `Seg–Sex · 8h às 18h`                       |
| Topbar links     | Área do Cliente · Seja Embaixador            |
| Pills            | Cuidado (teal) · Inclusão (violeta) · Benefícios (laranja) |
| Tagline          | `Conexão que acolhe. Benefícios que transformam.` |
| CTA flutuante    | `AGENDE SUA CONSULTA` (ícone calendário)     |

---

## CSS Classes

| Widget                   | CSS Class                |
|--------------------------|--------------------------|
| Section topbar           | `mct-topbar`             |
| Section header principal | `mct-header`             |
| Container interno        | `mct-header__inner`      |
| Linha logo + hambúrguer  | `mct-header__row`        |
| Logo                     | `mct-header__logo`       |
| Botão hambúrguer         | `mct-header__menu`       |
| Icon List dos pills      | `mct-header__pills`      |
| Tagline                  | `mct-header__tag`        |
| Botão CTA flutuante      | `mct-header__cta`        |

---

## CSS personalizado

```css
/* === Topbar (desktop) === */
.mct-topbar{ background:var(--mct-navy-deep); color:#fff; padding:8px 24px; font-size:12px; }
.mct-topbar > .e-con-inner{
  max-width:1280px; margin:0 auto;
  display:flex !important; justify-content:space-between; align-items:center; gap:24px;
}
.mct-topbar .elementor-icon-list-text{ color:rgba(255,255,255,.85); }
.mct-topbar a:hover .elementor-icon-list-text{ color:var(--mct-teal); }
@media (max-width:1023px){ .mct-topbar{ display:none; } }

/* === Header principal === */
.mct-header{ background:#fff; padding:20px 24px 28px; position:relative; z-index:40; }
.mct-header__inner{ max-width:1280px; margin:0 auto; }

.mct-header__row{
  display:flex !important; align-items:center; justify-content:space-between; gap:16px;
}
.mct-header__logo img{ max-height:80px; width:auto; }

/* Botão hambúrguer */
.mct-header__menu .elementor-button{
  background:var(--mct-violet); color:#fff;
  width:48px; height:48px; padding:0; border-radius:12px;
  box-shadow:var(--mct-shadow-sm);
}
.mct-header__menu .elementor-button:hover{ filter:brightness(1.1); }

/* Pills coloridos */
.mct-header__pills{ margin-top:20px; }
.mct-header__pills .elementor-icon-list-items{
  display:flex !important; flex-wrap:wrap; gap:8px 24px;
}
.mct-header__pills .elementor-icon-list-text{
  font-weight:600; font-size:14px; color:var(--mct-text);
}

/* Tagline */
.mct-header__tag{ margin-top:12px; font-size:15px; color:var(--mct-text); }
.mct-header__tag strong.teal  { color:var(--mct-teal);   font-weight:600; }
.mct-header__tag strong.orange{ color:var(--mct-orange); font-weight:600; }

/* Botão flutuante AGENDE */
.mct-header__cta{
  position:absolute; right:24px; bottom:-24px; z-index:30;
  background:#fff; color:var(--mct-navy) !important;
  padding:14px 22px; border-radius:9999px; font-weight:700; font-size:14px;
  border:1px solid rgba(184,164,232,.25);
  box-shadow:var(--mct-shadow-lg); transition:transform .2s, box-shadow .2s;
}
.mct-header__cta:hover{ transform:translateY(-2px); box-shadow:0 30px 60px -16px rgba(63,116,194,.35); }

/* Mobile */
@media (max-width:767px){
  .mct-header{ padding:20px 16px 28px; }
  .mct-header__logo img{ max-height:64px; }
  .mct-header__cta{ right:16px; font-size:13px; padding:12px 18px; }
}
```

---

## Responsivo
- **Mobile/Tablet/Desktop**: mesmo layout (logo grande + hambúrguer + pills + tagline + CTA flutuante).
- **Topbar**: visível apenas em desktop (≥1024px).
- Menu completo abre em **Drawer/Popup do Elementor Pro** ao clicar no hambúrguer.
