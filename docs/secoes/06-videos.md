# 06 · Vídeos (apresentação + reels verticais)

**Componente React:** `src/components/sections/VideoSection.tsx`
**Editar conteúdo:** `src/config/site.ts → videos`

## Objetivo
Seção com **1 vídeo horizontal** (apresentação 1920×1080) + **3 vídeos verticais**
(reels/depoimentos 1080×1920).

## Cores
- Fundo: `#F5F7FA`
- Player vazio: gradiente navy

## Estrutura Elementor
1. Section bg `#F5F7FA`, padding `96px / 64px`.
2. Heading centralizado.
3. Container com **Video widget** (YouTube/Vimeo/MP4 hospedado), aspect-ratio 16:9, max-width 900px.
4. Sub-heading "Histórias que inspiram".
5. Inner section 3 colunas com **Video widget** em cada, aspect-ratio 9:16.

## HTML alternativo (se preferir colar embed)

```html
<section class="mct-videos" id="videos">
  <header>
    <span class="mct-eyebrow">Em movimento</span>
    <h3>Conheça o Meu Clube TEA</h3>
    <p>Assista em 1 minuto como transformamos a rotina de famílias atípicas.</p>
  </header>

  <div class="mct-videos__main">
    <iframe src="https://www.youtube.com/embed/SEU_VIDEO_ID"
            allowfullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
  </div>

  <h4>Histórias que inspiram</h4>
  <div class="mct-videos__reels">
    <div class="reel"><iframe src="https://www.youtube.com/embed/REEL_1" allowfullscreen></iframe></div>
    <div class="reel"><iframe src="https://www.youtube.com/embed/REEL_2" allowfullscreen></iframe></div>
    <div class="reel"><iframe src="https://www.youtube.com/embed/REEL_3" allowfullscreen></iframe></div>
  </div>
</section>
```

## CSS

```css
.mct-videos{ background:#F5F7FA; padding:96px 24px; }
.mct-videos header{ max-width:680px; margin:0 auto 40px; text-align:center; }
.mct-videos h3{ font-size:36px; color:#1B2540; }
.mct-videos p{ color:#5B6478; margin-top:12px; }

.mct-videos__main{
  max-width:900px; margin:0 auto;
  aspect-ratio:16/9; border-radius:20px; overflow:hidden;
  background:linear-gradient(180deg,#061C5C,#0B2E8A);
  box-shadow:0 25px 50px -12px rgba(11,46,138,.25);
}
.mct-videos__main iframe{ width:100%; height:100%; border:0; display:block; }

.mct-videos h4{ text-align:center; font-size:24px; margin:64px 0 24px; color:#1B2540; }

.mct-videos__reels{
  max-width:900px; margin:0 auto;
  display:grid; grid-template-columns:repeat(3,1fr); gap:20px;
}
.mct-videos__reels .reel{
  aspect-ratio:9/16; border-radius:20px; overflow:hidden;
  background:linear-gradient(180deg,#061C5C,#0B2E8A);
  box-shadow:0 12px 30px rgba(11,46,138,.15);
}
.mct-videos__reels iframe{ width:100%; height:100%; border:0; display:block; }

@media (max-width:767px){
  .mct-videos{ padding:64px 16px; }
  .mct-videos h3{ font-size:28px; }
  .mct-videos__reels{ grid-template-columns:1fr; max-width:300px; }
}
@media (min-width:768px) and (max-width:1023px){
  .mct-videos__reels{ grid-template-columns:repeat(2,1fr); }
}
```

## Formatos esperados
- Horizontal (apresentação): **1920 × 1080** (16:9)
- Vertical (reels/depoimentos): **1080 × 1920** (9:16)
