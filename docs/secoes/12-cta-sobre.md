# Seção 12 · CTA (após Sobre)

Faixa navy com gradiente sutil + botão laranja arredondado. Substitui a antiga
faixa de "Parceiros Institucionais".

## Estrutura (Elementor)

```
Section [.mct-cta] — Fundo: gradiente navy (var(--mct-grad-navy))
└── Container 1 col (max-width 900px, centralizado)
    ├── Heading eyebrow (uppercase, tracking, cor teal) — "PRÓXIMO PASSO"
    ├── Heading H2 — "Faça parte de uma comunidade que acolhe."
    ├── Text — subtítulo
    └── Button — "QUERO FAZER PARTE" (bg #F3A35C, texto branco, rounded-full)
```

## Widgets nativos
- Heading × 2 · Text-editor × 1 · Button × 1

## CSS Classes

| Widget       | Class          |
|--------------|----------------|
| Section      | mct-cta        |
| Eyebrow      | mct-cta__eb    |
| Título       | mct-cta__title |
| Subtítulo    | mct-cta__sub   |
| Botão        | mct-cta__btn   |

## CSS

```css
.mct-cta{ background:var(--mct-grad-navy); color:#fff; padding:80px 24px; text-align:center; }
.mct-cta__eb{ color:var(--mct-teal); font-size:11px; letter-spacing:.3em; font-weight:700; text-transform:uppercase; }
.mct-cta__title{ font-size:32px; font-weight:800; margin:16px 0 12px; }
.mct-cta__title .teal{ color:var(--mct-teal); }
.mct-cta__sub{ max-width:640px; margin:0 auto; font-size:16px; color:rgba(255,255,255,.85); }
.mct-cta__btn{ margin-top:24px; background:var(--mct-orange); color:#fff; padding:14px 32px; border-radius:9999px; font-weight:700; box-shadow:var(--mct-shadow-lg); }
```

## Conteúdo
- Título: "Faça parte de uma comunidade que acolhe."
- Subtítulo: "Escolha seu plano e comece hoje mesmo a cuidar de quem você ama com mais tranquilidade, acolhimento e benefícios reais."
- Botão → `https://meuclubetea.com.br/planos/`
