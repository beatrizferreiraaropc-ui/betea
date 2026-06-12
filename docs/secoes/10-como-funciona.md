# 10 · Como Funciona (4 passos)

**Componente React:** `src/components/sections/HowItWorks.tsx`

## Conteúdo
1. Escolha seu plano
2. Faça sua adesão
3. Acesse seus benefícios
4. Conte com a gente

## HTML

```html
<section class="mct-how" id="como-funciona">
  <header>
    <span class="mct-eyebrow">Como Funciona</span>
    <h3>Simples, rápido e 100% online</h3>
  </header>
  <div class="mct-how__grid">
    <div><span class="num">1</span><b>Escolha seu plano</b><p>Escolha o plano que melhor atende você e sua família.</p></div>
    <div><span class="num">2</span><b>Faça sua adesão</b><p>Adesão rápida e segura em poucos minutos, tudo online.</p></div>
    <div><span class="num">3</span><b>Acesse seus benefícios</b><p>Use seus benefícios quando e onde quiser, com praticidade.</p></div>
    <div><span class="num">4</span><b>Conte com a gente</b><p>Nossa equipe está sempre pronta para cuidar da sua família.</p></div>
  </div>
  <div class="mct-how__cta">
    <a class="mct-btn-cta" href="https://meuclubetea.com.br/planos/">QUERO FAZER PARTE AGORA →</a>
  </div>
</section>
```

## CSS

```css
.mct-how{ padding:80px 24px; background:#fff; }
.mct-how header{ max-width:680px; margin:0 auto 48px; text-align:center; }
.mct-how h3{ font-size:32px; color:#1B2540; }
.mct-how__grid{
  max-width:1200px; margin:0 auto;
  display:grid; grid-template-columns:repeat(4,1fr); gap:32px;
}
.mct-how__grid .num{
  width:40px; height:40px; border-radius:9999px; background:#7B2FF7; color:#fff;
  display:flex; align-items:center; justify-content:center; font-weight:700;
}
.mct-how__grid b{ display:block; margin-top:16px; font-size:16px; color:#1B2540; }
.mct-how__grid p{ font-size:14px; color:#5B6478; margin-top:4px; }
.mct-how__cta{ text-align:center; margin-top:40px; }

@media (max-width:1023px){ .mct-how__grid{ grid-template-columns:repeat(2,1fr); } }
@media (max-width:767px){ .mct-how__grid{ grid-template-columns:1fr; } }
```
