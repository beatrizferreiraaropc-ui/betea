# 03 · Benefícios (4 ícones com cores oficiais)

**Componente React:** `src/components/sections/Benefits.tsx`

## Objetivo
Quatro cards horizontais (2×2 no mobile, 1×4 no desktop) com os benefícios principais.
Cada ícone usa **a cor oficial do briefing**:

| Item                 | HEX        |
|----------------------|------------|
| Telemedicina         | `#00B8D9`  |
| Telepsicologia       | `#7B2FF7`  |
| Assistência Funeral  | `#0B2E8A`  |
| Descontos e Vantagens| `#FF8A00`  |

## Estrutura Elementor
1. Section: padding vertical `96px desktop / 64px mobile`, fundo branco.
2. Container interno: max-width 1200px.
3. Heading widget (eyebrow + h2).
4. Inner section com 4 cards (use widget **Icon Box** com cores customizadas, ou cole o HTML abaixo).

## HTML

```html
<section class="mct-benefits" id="beneficios">
  <header>
    <span class="mct-eyebrow">Nossos benefícios</span>
    <h2>Tudo o que sua família precisa em um só lugar.</h2>
  </header>
  <div class="mct-benefits__grid">
    <article><div class="ic" style="background:#00B8D9">⚕</div><h3>Telemedicina</h3><p>Tranquilidade imediata, 24/7</p></article>
    <article><div class="ic" style="background:#7B2FF7">🧠</div><h3>Telepsicologia</h3><p>Equilíbrio emocional para a família</p></article>
    <article><div class="ic" style="background:#0B2E8A">🛡</div><h3>Assistência Funeral</h3><p>Apoio total em momentos difíceis</p></article>
    <article><div class="ic" style="background:#FF8A00">🏷</div><h3>Descontos e Vantagens</h3><p>Economia inteligente no dia a dia</p></article>
  </div>
</section>
```

## CSS avançado

```css
.mct-benefits{ padding:96px 24px; background:#fff; }
.mct-benefits header{ max-width:680px; margin:0 auto 48px; text-align:center; }
.mct-eyebrow{
  display:inline-block; font-size:12px; letter-spacing:.3em;
  text-transform:uppercase; color:#7B2FF7; font-weight:700;
}
.mct-benefits h2{ font-size:36px; margin-top:12px; color:#1B2540; }
.mct-benefits__grid{
  max-width:1200px; margin:0 auto;
  display:grid; grid-template-columns:repeat(4,1fr); gap:32px;
}
.mct-benefits__grid article{
  background:#fff; border:1px solid #E5E9F0; border-radius:20px;
  padding:28px 20px; text-align:center; transition:.25s;
}
.mct-benefits__grid article:hover{
  transform:translateY(-4px); box-shadow:0 12px 30px rgba(11,46,138,.12);
}
.mct-benefits .ic{
  width:64px; height:64px; border-radius:9999px; color:#fff;
  display:flex; align-items:center; justify-content:center; font-size:26px;
  margin:0 auto 16px; box-shadow:0 10px 24px rgba(0,0,0,.12);
}
.mct-benefits h3{ font-size:16px; font-weight:700; margin-bottom:4px; }
.mct-benefits p{ font-size:14px; color:#5B6478; line-height:1.5; }

@media (max-width:1023px){ .mct-benefits__grid{ grid-template-columns:repeat(2,1fr); gap:20px; } }
@media (max-width:767px){
  .mct-benefits{ padding:64px 16px; }
  .mct-benefits h2{ font-size:28px; }
  .mct-benefits__grid article{ padding:20px 16px; }
  .mct-benefits .ic{ width:56px; height:56px; font-size:22px; }
}
```

## Responsividade
- Desktop ≥1024px: 4 colunas.
- Tablet 768-1023px: 2 colunas.
- Mobile ≤767px: 2 colunas (cards menores).
