# 02 · Hero (banner principal)

**Componente React:** `src/components/sections/Hero.tsx`

## Objetivo
Seção principal com **imagem de fundo** (família atípica) + **overlay com o gradiente
oficial (90deg)**. Headline grande, sub-headline, 2 CTAs (laranja + WhatsApp outline)
e 3 micro-features. Em desktop, à direita aparece um card flutuante de impacto.

## Imagem de fundo
- Arquivo: `src/assets/hero-family.jpg` (substituir pela definitiva do cliente)
- Recomendado: **1920×1080**, JPG comprimido (≤300KB), ponto focal à direita.

## Cores
- Background: imagem + overlay gradiente
  ```css
  background-image: url('/wp-content/uploads/hero-family.jpg');
  background-size: cover;
  background-position: center right;
  ```
- Overlay oficial:
  ```css
  background: linear-gradient(90deg,
    rgba(11,46,138,.92) 0%,
    rgba(74,58,255,.78) 50%,
    rgba(123,47,247,.85) 100%);
  ```
- Texto: `#FFFFFF`
- Destaque "famílias com TEA, PCD": `#00B8D9`
- CTA primário: `#FF8A00` (hover `#FF9F2E`)
- CTA secundário (WhatsApp): borda `rgba(255,255,255,.4)` · bg `rgba(255,255,255,.05)`

## Tipografia
| Elemento     | Desktop | Tablet | Mobile |
|--------------|---------|--------|--------|
| Eyebrow      | 12px    | 12px   | 11px   |
| H1           | 60px    | 48px   | 32px   |
| Parágrafo    | 18px    | 16px   | 15px   |
| Botão        | 16px    | 15px   | 14px   |

## HTML pronto

```html
<section class="mct-hero" id="hero">
  <div class="mct-hero__overlay"></div>
  <div class="mct-hero__inner">
    <div class="mct-hero__text">
      <span class="mct-hero__eyebrow">● Health Tech · Acolhimento · Inclusão</span>
      <h1>Cuidado especializado e benefícios transformadores para <span>famílias com TEA, PCD</span> e neurodivergentes.</h1>
      <p>Telemedicina, telepsicologia, assistência familiar e descontos exclusivos. Mais do que um plano — uma rede de apoio para você e quem mais importa.</p>
      <div class="mct-hero__ctas">
        <a class="mct-btn-cta" href="#planos">Conheça Nossos Planos →</a>
        <a class="mct-btn-ghost" href="https://wa.me/55119XXXXXXXX" target="_blank">💬 Dúvidas? Chat WhatsApp</a>
      </div>
      <div class="mct-hero__mini">
        <div><b>Atendimento</b><span>100% online</span></div>
        <div><b>Apoio</b><span>humanizado</span></div>
        <div><b>Proteção</b><span>de dados</span></div>
      </div>
    </div>
    <aside class="mct-hero__card">
      <div class="mct-hero__card-icon">♥</div>
      <h3>Impacto que liberta vidas</h3>
      <p>Até <b>10% do lucro</b> destinado a causas de apoio a famílias atípicas.</p>
      <ul>
        <li><b>+15k</b><span>famílias</span></li>
        <li><b>+50k</b><span>consultas</span></li>
        <li><b>+200</b><span>especialistas</span></li>
      </ul>
    </aside>
  </div>
</section>
```

## CSS avançado

```css
.mct-hero{
  position:relative; isolation:isolate;
  padding:160px 0 110px;
  background:url('/wp-content/uploads/hero-family.jpg') center right/cover no-repeat;
  color:#fff; overflow:hidden;
}
.mct-hero__overlay{
  position:absolute; inset:0; z-index:-1;
  background:linear-gradient(90deg,
    rgba(11,46,138,.92) 0%,
    rgba(74,58,255,.78) 50%,
    rgba(123,47,247,.85) 100%);
}
.mct-hero__inner{
  max-width:1200px; margin:0 auto; padding:0 24px;
  display:grid; grid-template-columns:1.1fr .9fr; gap:56px; align-items:center;
}
.mct-hero__eyebrow{ color:#00B8D9; font-size:12px; letter-spacing:.25em; text-transform:uppercase; }
.mct-hero h1{ font-size:60px; line-height:1.08; margin:.75rem 0 1.25rem; }
.mct-hero h1 span{ color:#00B8D9; }
.mct-hero p{ font-size:18px; line-height:1.55; color:rgba(255,255,255,.85); max-width:560px; }
.mct-hero__ctas{ margin-top:1.75rem; display:flex; gap:12px; flex-wrap:wrap; }
.mct-btn-ghost{
  display:inline-flex; align-items:center; gap:.5rem;
  padding:.75rem 1.25rem; border-radius:9999px;
  color:#fff !important; background:rgba(255,255,255,.05);
  border:1px solid rgba(255,255,255,.4); backdrop-filter:blur(4px);
  font-weight:600; text-decoration:none; transition:.2s;
}
.mct-btn-ghost:hover{ background:rgba(255,255,255,.15); }
.mct-hero__mini{ margin-top:2.5rem; display:grid; grid-template-columns:repeat(3,1fr); gap:18px; max-width:420px; }
.mct-hero__mini > div{ font-size:11px; line-height:1.2; }
.mct-hero__mini b{ display:block; font-weight:700; }
.mct-hero__mini span{ color:rgba(255,255,255,.7); }

.mct-hero__card{
  background:rgba(255,255,255,.95); backdrop-filter:blur(8px);
  color:#1B2540; border-radius:20px; padding:24px; max-width:320px;
  box-shadow:0 25px 50px -12px rgba(0,0,0,.25);
}
.mct-hero__card-icon{
  width:48px; height:48px; border-radius:9999px; background:#7B2FF7;
  display:flex; align-items:center; justify-content:center; color:#fff; font-size:22px;
  margin-bottom:12px;
}
.mct-hero__card ul{ list-style:none; padding:0; margin:14px 0 0;
  display:grid; grid-template-columns:repeat(3,1fr); gap:8px; text-align:center; }
.mct-hero__card li b{ display:block; font-weight:700; }
.mct-hero__card li:nth-child(1) b{ color:#0B2E8A; }
.mct-hero__card li:nth-child(2) b{ color:#7B2FF7; }
.mct-hero__card li:nth-child(3) b{ color:#00B8D9; }
.mct-hero__card li span{ display:block; font-size:10px; color:#5B6478; }

/* TABLET */
@media (max-width:1023px){
  .mct-hero{ padding:140px 0 90px; }
  .mct-hero__inner{ grid-template-columns:1fr; gap:32px; }
  .mct-hero__card{ display:none; }
  .mct-hero h1{ font-size:48px; }
}
/* MOBILE */
@media (max-width:767px){
  .mct-hero{ padding:120px 0 70px; background-position:center; }
  .mct-hero h1{ font-size:32px; }
  .mct-hero p{ font-size:15px; }
  .mct-hero__ctas .mct-btn-cta,
  .mct-hero__ctas .mct-btn-ghost{ width:100%; justify-content:center; }
}
```

## Responsividade
- ≥1024px: grid 2 colunas (texto + card de impacto).
- 768–1023px: 1 coluna, card de impacto oculto, h1 reduz para 48px.
- ≤767px: imagem reposicionada para `center`, h1 32px, CTAs full-width empilhados.
