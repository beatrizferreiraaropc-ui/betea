# Seção 09 · Como Funciona

Quatro passos numerados (cards verticais ou linha horizontal no desktop).

---

## Estrutura

```
Section [.mct-how]
└── Container 1 coluna  (max-width 1200px)
    ├── Heading (eyebrow)   .mct-how__eyebrow
    ├── Heading (H2)        .mct-how__title
    └── Inner Section 4 col .mct-how__grid
        ├── Container × 4   .mct-how__step
            ├── Heading (número grande)  .mct-how__num
            ├── Heading (título)         .mct-how__name
            └── Text Editor              .mct-how__desc
```

---

## Widgets nativos
- **Heading** × 3 por passo, **Text Editor** para a descrição.

---

## Conteúdo

| # | Título                  | Descrição |
|---|-------------------------|-----------|
| 1 | Escolha seu plano       | Selecione o que melhor atende sua família. |
| 2 | Faça seu cadastro       | Em poucos minutos, online e seguro. |
| 3 | Ative seus benefícios   | Acesse a plataforma e comece a usar. |
| 4 | Conte com nosso apoio   | Suporte humanizado, sempre que precisar. |

- Eyebrow: `COMO FUNCIONA`
- Título: `Em 4 passos simples, você entra para o Meu Clube TEA.`

---

## CSS Classes

| Widget                  | CSS Class           |
|-------------------------|---------------------|
| Section                 | `mct-how`           |
| Eyebrow                 | `mct-how__eyebrow`  |
| Título                  | `mct-how__title`    |
| Grid 4 colunas          | `mct-how__grid`     |
| Cada passo (container)  | `mct-how__step`     |
| Número                  | `mct-how__num`      |
| Nome                    | `mct-how__name`     |
| Descrição               | `mct-how__desc`     |

---

## CSS personalizado (cole na Section)

```css
selector{ padding:80px 24px; background:#F5F7FA; }
selector > .e-con-inner{ max-width:1280px; margin:0 auto; }

selector .mct-how__eyebrow{
  text-align:center; font-size:12px; letter-spacing:.3em;
  text-transform:uppercase; color:var(--mct-violet);
  font-weight:700; margin-bottom:8px;
}
selector .mct-how__title{
  text-align:center; font-size:30px; color:var(--mct-text);
  max-width:760px; margin:0 auto 48px;
}

selector .mct-how__grid > .e-con-inner{
  display:grid !important; grid-template-columns:repeat(4,1fr); gap:24px;
}
selector .mct-how__step{
  background:#fff; border-radius:20px; padding:28px 24px;
  border:1px solid #E5E9F0; transition:.2s;
}
selector .mct-how__step:hover{ box-shadow:var(--mct-shadow-md); transform:translateY(-3px); }

selector .mct-how__num{
  font-size:42px; font-weight:800; line-height:1;
  background:linear-gradient(135deg,#7B2FF7,#4A3AFF);
  -webkit-background-clip:text; background-clip:text; color:transparent;
  margin-bottom:12px;
}
selector .mct-how__name{ font-size:16px; font-weight:700; color:var(--mct-text); margin-bottom:6px; }
selector .mct-how__desc{ font-size:14px; color:#5B6478; line-height:1.5; }

/* Tablet */
@media (max-width:1023px){
  selector .mct-how__grid > .e-con-inner{ grid-template-columns:repeat(2,1fr); }
}
/* Mobile */
@media (max-width:767px){
  selector{ padding:56px 16px; }
  selector .mct-how__grid > .e-con-inner{ grid-template-columns:1fr; }
}
```
