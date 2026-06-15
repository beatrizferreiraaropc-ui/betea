# Seção 11 · Sobre

Bloco institucional: foto à esquerda, missão/valores à direita (ou
empilhado no mobile).

---

## Estrutura

```
Section [.mct-about]   id=sobre
└── Container 2 col (1fr / 1fr)   (max-width 1200px)
    ├── Image                .mct-about__img
    └── Container conteúdo
        ├── Heading (eyebrow)        .mct-about__eyebrow
        ├── Heading (H2)             .mct-about__title
        ├── Text Editor (parágrafo)  .mct-about__lead
        └── Icon List (valores)      .mct-about__values
```

---

## Widgets nativos
- **Image**, **Heading**, **Text Editor**, **Icon List**.

---

## Conteúdo

- Eyebrow: `SOBRE NÓS`
- Título: `Um Clube nascido do cuidado.`
- Lead: `O Meu Clube TEA conecta famílias com TEA, PCD e neurodivergentes a uma rede de saúde, acolhimento e benefícios. Acreditamos que inclusão é cuidado em ato — não promessa.`

Valores (Icon List):
- ❤️ Acolhimento humano
- 🤝 Rede de apoio
- 🛡 Confiança e segurança
- 🌱 Propósito social

---

## CSS Classes

| Widget         | CSS Class             |
|----------------|-----------------------|
| Section        | `mct-about`           |
| Imagem         | `mct-about__img`      |
| Eyebrow        | `mct-about__eyebrow`  |
| Título         | `mct-about__title`    |
| Lead           | `mct-about__lead`     |
| Icon List      | `mct-about__values`   |

---

## CSS personalizado (cole na Section)

```css
selector{ padding:96px 24px; background:#fff; }
selector > .e-con-inner{
  max-width:1280px; margin:0 auto;
  display:grid !important; grid-template-columns:1fr 1fr; gap:48px; align-items:center;
}

selector .mct-about__img img{
  width:100%; border-radius:24px; box-shadow:var(--mct-shadow-lg);
}

selector .mct-about__eyebrow{
  font-size:12px; letter-spacing:.3em; text-transform:uppercase;
  color:var(--mct-violet); font-weight:700;
}
selector .mct-about__title{ font-size:36px; color:var(--mct-text); margin:8px 0 16px; }
selector .mct-about__lead { color:#5B6478; font-size:16px; line-height:1.6; margin-bottom:24px; }

selector .mct-about__values .elementor-icon-list-text{ font-size:14px; color:var(--mct-text); font-weight:600; }
selector .mct-about__values .elementor-icon-list-icon i,
selector .mct-about__values .elementor-icon-list-icon svg{ color:var(--mct-violet) !important; }

/* Tablet */
@media (max-width:1023px){
  selector > .e-con-inner{ grid-template-columns:1fr; gap:32px; }
}
/* Mobile */
@media (max-width:767px){
  selector{ padding:64px 16px; }
  selector .mct-about__title{ font-size:26px; }
}
```
