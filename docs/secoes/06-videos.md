# 06 · Depoimentos em Vídeo

**Componente React:** `src/components/sections/VideoSection.tsx`
**Editar conteúdo:** `src/config/site.ts → videos.depoimentos`

## Conceito
3 cards no mesmo formato dos depoimentos em texto (e do antigo card de áudio):
área de vídeo no topo + nome + descrição abaixo. Sem cores quentes — a hierarquia
visual é reservada para os preços, ícones de benefícios e o CTA.

## Estrutura Elementor (recomendada)
1. Section com `bg #F5F7FA`, padding `80px / 64px`.
2. Heading central + subtítulo.
3. **Inner Section com 3 colunas** (vira 1 coluna no mobile).
4. Dentro de cada coluna, monte assim:
   - **Widget Vídeo** (YouTube / Vimeo / hospedado) → aspect-ratio 16:9, border-radius 16px
   - **Widget HTML** com o bloco identificador (ícone + nome + descrição)

> Mantenha o widget de vídeo do Elementor — ele cuida de lazy-load, capa,
> aspect-ratio e responsividade. Não use iframe cru.

## HTML do bloco identificador (abaixo de cada vídeo)

```html
<div class="mct-vcard__id">
  <span class="mct-vcard__icon" aria-hidden>
    <!-- ícone de play (SVG) -->
    <svg viewBox="0 0 24 24" width="16" height="16" fill="#7B2FF7"><path d="M8 5v14l11-7z"/></svg>
  </span>
  <div class="mct-vcard__meta">
    <b>Juliana A.</b>
    <span>Cliente Meu Clube TEA</span>
  </div>
</div>
```

## CSS (cola em "CSS Avançado" da coluna ou no CSS global)

```css
.mct-videos{ background:#F5F7FA; padding:80px 24px; }
.mct-videos__head{ max-width:680px; margin:0 auto 40px; text-align:center; }
.mct-videos__head h3{ font-size:32px; color:#1B2540; }

.mct-vcard{
  background:#fff; border:1px solid #E5E9F0; border-radius:20px;
  padding:20px; box-shadow:0 4px 12px rgba(11,46,138,.04);
  display:flex; flex-direction:column; gap:12px;
}
.mct-vcard__video{
  aspect-ratio:16/9; border-radius:14px; overflow:hidden;
  background:linear-gradient(180deg,#061C5C,#0B2E8A);
}
.mct-vcard__id{ display:flex; align-items:center; gap:12px; padding:0 4px; }
.mct-vcard__icon{
  width:40px; height:40px; border-radius:9999px;
  background:rgba(123,47,247,.10); color:#7B2FF7;
  display:flex; align-items:center; justify-content:center; flex-shrink:0;
}
.mct-vcard__meta b{ display:block; font-size:14px; color:#1B2540; }
.mct-vcard__meta span{ font-size:12px; color:#5B6478; }

@media (max-width:767px){ .mct-videos{ padding:56px 16px; } }
```

## Formatos esperados
- Horizontal (capa do card): **1920×1080** (16:9)
- Vertical (Reels/Shorts): use o widget de vídeo do Elementor com aspect-ratio 9:16 se preferir esse formato em alguma coluna.
