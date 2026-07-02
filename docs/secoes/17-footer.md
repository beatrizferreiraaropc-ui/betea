# Seção 16 · Footer (rodapé navy)

Rodapé navy com 5 colunas: marca + descrição + redes, Navegação,
Benefícios, Ajuda, Atendimento.

> O bloco branco "Central de Atendimento" foi **movido** para sua
> própria seção (ver `14-central-atendimento.md`). O footer agora é
> apenas o bloco navy.

---

## Estrutura

```
Section [.mct-footer]                       (navy deep)
└── Container 5 col (1.5fr / 1fr / 1fr / 1fr / 1fr)
    ├── Coluna 1   .mct-footer__brand
    │   ├── Image (logo branca)
    │   ├── Text Editor (descrição curta)
    │   └── Social Icons (IG · FB · YT · TikTok)
    ├── Coluna 2   .mct-footer__col           (Navegação)
    ├── Coluna 3   .mct-footer__col           (Benefícios)
    ├── Coluna 4   .mct-footer__col           (Ajuda)
    └── Coluna 5   .mct-footer__col           (Atendimento)

Section [.mct-footer__bottom]
└── Container 2 col
    ├── Text Editor   Endereço
    └── Text Editor   © 2025 Meu Clube TEA
```

---

## Widgets nativos
- **Image, Heading, Text Editor, Icon List, Social Icons**.

---

## Conteúdo

### Coluna 1 — Marca
- Logo branca (versão clara para fundo navy).
- Descrição: `Cuidado, acolhimento e benefícios para pessoas com TEA, PCD, neurodivergentes e suas famílias.`
- Redes: Instagram · Facebook · YouTube · TikTok.

### Coluna 2 — Navegação
Lista dos links do menu principal (`site.nav`):
Home · Sobre · Planos · Como Funciona · Benefícios · Embaixadores · Contato.

### Coluna 3 — Benefícios
- Telemedicina
- Telepsicologia
- **Assistência Pet**  *(antes era "Assistência Funeral")*
- Descontos e Vantagens

### Coluna 4 — Ajuda
- Perguntas Frequentes
- Política de Privacidade
- Termos de Uso
- Fale Conosco

### Coluna 5 — Atendimento
- Telefone (link `tel:`)
- E-mail
- Horário (`Seg–Sex · 8h às 18h`)

### Rodapé inferior
- Endereço (`site.contato.endereco`)
- `© {ano} Meu Clube TEA. Todos os direitos reservados.`

---

## CSS Classes

| Widget                    | CSS Class               |
|---------------------------|-------------------------|
| Section principal         | `mct-footer`            |
| Coluna 1 (marca)          | `mct-footer__brand`     |
| Colunas 2–5               | `mct-footer__col`       |
| Section rodapé inferior   | `mct-footer__bottom`    |

---

## CSS personalizado

```css
/* === Footer principal === */
.mct-footer{
  background:#0F1E3A;       /* navy deep (mais escuro que o azul do site) */
  color:rgba(255,255,255,.78);
  padding:64px 24px 32px;
}
.mct-footer > .e-con-inner{
  max-width:1280px; margin:0 auto;
  display:grid !important; grid-template-columns:1.5fr 1fr 1fr 1fr 1fr; gap:40px;
}

.mct-footer__brand img{ max-height:44px; width:auto; margin-bottom:16px; }
.mct-footer__brand .elementor-widget-text-editor{
  font-size:13px; color:rgba(255,255,255,.6); line-height:1.55; margin-bottom:16px;
}
.mct-footer__brand .elementor-social-icon{
  background:transparent; color:rgba(255,255,255,.7);
  width:32px; height:32px; transition:.2s;
}
.mct-footer__brand .elementor-social-icon:hover{ color:var(--mct-teal); }

.mct-footer__col h4,
.mct-footer__col .elementor-heading-title{
  font-size:12px; letter-spacing:.18em; text-transform:uppercase;
  color:#fff; font-weight:700; margin-bottom:16px;
}
.mct-footer__col .elementor-icon-list-text{
  color:rgba(255,255,255,.7); font-size:14px;
}
.mct-footer__col a:hover .elementor-icon-list-text{ color:var(--mct-teal); }

/* === Rodapé inferior === */
.mct-footer__bottom{
  background:#0F1E3A;
  border-top:1px solid rgba(255,255,255,.1);
  padding:20px 24px;
}
.mct-footer__bottom > .e-con-inner{
  max-width:1280px; margin:0 auto;
  display:flex; justify-content:space-between; align-items:center; gap:16px;
  font-size:12px; color:rgba(255,255,255,.5);
}

/* Tablet */
@media (max-width:1023px){
  .mct-footer > .e-con-inner{ grid-template-columns:1fr 1fr; gap:32px; }
}
/* Mobile */
@media (max-width:767px){
  .mct-footer{ padding:48px 16px 24px; }
  .mct-footer > .e-con-inner{ grid-template-columns:1fr; gap:24px; }
  .mct-footer__bottom > .e-con-inner{ flex-direction:column; text-align:center; }
}
```
