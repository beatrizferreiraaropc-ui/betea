# 10 · Como Funciona (4 passos conectados)

**Componente React:** `src/components/sections/HowItWorks.tsx`

## Conceito
4 passos, cada um com sua cor da paleta oficial, **ligados por uma linha pontilhada**:
- Desktop: linha horizontal cruzando os 4 círculos.
- Mobile: linha vertical do passo 1 até o passo 4.

Cores dos círculos (na ordem): `#00B8D9`, `#7B2FF7`, `#FF8A00`, `#0B2E8A`.

## HTML

```html
<section class="mct-how" id="como-funciona">
  <header class="mct-how__head">
    <span class="mct-eyebrow">Como Funciona</span>
    <h3>Simples, rápido e 100% online</h3>
  </header>

  <div class="mct-how__track">
    <div class="mct-how__line" aria-hidden></div>
    <ol class="mct-how__grid">
      <li><span class="num" style="background:#00B8D9">1</span><b>Escolha seu plano</b><p>Escolha o plano que melhor atende você e sua família.</p></li>
      <li><span class="num" style="background:#7B2FF7">2</span><b>Faça sua adesão</b><p>Adesão rápida e segura em poucos minutos, tudo online.</p></li>
      <li><span class="num" style="background:#FF8A00">3</span><b>Acesse seus benefícios</b><p>Use seus benefícios quando e onde quiser, com praticidade.</p></li>
      <li><span class="num" style="background:#0B2E8A">4</span><b>Conte com a gente</b><p>Nossa equipe está sempre pronta para cuidar da sua família.</p></li>
    </ol>
  </div>

  <div class="mct-how__cta">
    <a class="mct-btn-cta" href="https://meuclubetea.com.br/planos/">QUERO FAZER PARTE AGORA →</a>
  </div>
</section>
```

## CSS

```css
.mct-how{ padding:80px 24px; background:#fff; }
.mct-how__head{ max-width:680px; margin:0 auto 56px; text-align:center; }
.mct-how__head h3{ font-size:32px; color:#1B2540; }

.mct-how__track{ position:relative; max-width:1200px; margin:0 auto; }

/* Linha pontilhada — desktop horizontal */
.mct-how__line{
  position:absolute; left:12.5%; right:12.5%; top:28px;
  border-top:2px dashed #E5E9F0;
}

.mct-how__grid{
  list-style:none; padding:0; margin:0;
  display:grid; grid-template-columns:repeat(4,1fr); gap:32px;
  position:relative;
}
.mct-how__grid li{ text-align:center; }
.mct-how__grid .num{
  width:56px; height:56px; border-radius:9999px; color:#fff;
  display:flex; align-items:center; justify-content:center; font-weight:700; font-size:18px;
  margin:0 auto; box-shadow:0 8px 20px rgba(11,46,138,.18);
  position:relative; z-index:1;
  box-shadow:0 0 0 8px #fff, 0 8px 20px rgba(11,46,138,.18); /* "fura" a linha pontilhada */
}
.mct-how__grid b{ display:block; margin-top:16px; font-size:16px; color:#1B2540; }
.mct-how__grid p{ font-size:14px; color:#5B6478; margin-top:6px; }

.mct-how__cta{ text-align:center; margin-top:48px; }

/* Tablet */
@media (max-width:1023px){
  .mct-how__line{ display:none; }
  .mct-how__grid{ grid-template-columns:repeat(2,1fr); gap:40px; }
}

/* Mobile — linha pontilhada vertical */
@media (max-width:767px){
  .mct-how__line{
    display:block; top:28px; bottom:28px;
    left:28px; right:auto; border-top:none; border-left:2px dashed #E5E9F0;
  }
  .mct-how__grid{ grid-template-columns:1fr; gap:24px; }
  .mct-how__grid li{ display:grid; grid-template-columns:auto 1fr; gap:16px; text-align:left; align-items:start; }
  .mct-how__grid .num{ margin:0; }
  .mct-how__grid b{ margin-top:14px; }
}
```
