# 07 · Áudios (podcast / depoimentos)

**Componente React:** `src/components/sections/AudioSection.tsx`
**Editar conteúdo:** `src/config/site.ts → audios.items[]`

## Objetivo
Grid 2 colunas com players de áudio (MP3/OGG) ou embeds Spotify/SoundCloud.
Cada card mostra ícone fone, título e autor.

## Cores
- Fundo: `#FFFFFF`
- Card: borda `#E5E9F0`, ícone fone `#7B2FF7` sobre `rgba(123,47,247,.1)`

## HTML

```html
<section class="mct-audios" id="audios">
  <header>
    <span class="mct-eyebrow">Ouça quem já faz parte</span>
    <h3>Histórias em áudio</h3>
    <p>Depoimentos, dicas e conversas reais com famílias da nossa comunidade.</p>
  </header>

  <div class="mct-audios__grid">
    <article>
      <div class="mct-audio__head">
        <div class="mct-audio__icon">🎧</div>
        <div><b>Depoimento — Família A</b><span>Juliana A.</span></div>
      </div>
      <audio controls preload="none">
        <source src="/wp-content/uploads/audios/familia-a.mp3" type="audio/mpeg">
      </audio>
    </article>
    <!-- repetir para os demais áudios -->
  </div>
</section>
```

## CSS

```css
.mct-audios{ background:#fff; padding:80px 24px; }
.mct-audios header{ max-width:680px; margin:0 auto 40px; text-align:center; }
.mct-audios h3{ font-size:32px; color:#1B2540; }

.mct-audios__grid{
  max-width:960px; margin:0 auto;
  display:grid; grid-template-columns:repeat(2,1fr); gap:20px;
}
.mct-audios article{
  border:1px solid #E5E9F0; background:#fff; border-radius:20px;
  padding:20px; display:flex; flex-direction:column; gap:12px;
  box-shadow:0 4px 12px rgba(11,46,138,.05);
}
.mct-audio__head{ display:flex; gap:12px; align-items:center; }
.mct-audio__icon{
  width:44px; height:44px; border-radius:9999px;
  background:rgba(123,47,247,.1); color:#7B2FF7;
  display:flex; align-items:center; justify-content:center; font-size:20px;
}
.mct-audios article b{ font-size:15px; color:#1B2540; }
.mct-audios article span{ display:block; font-size:12px; color:#5B6478; }
.mct-audios audio{ width:100%; }

@media (max-width:767px){
  .mct-audios{ padding:56px 16px; }
  .mct-audios__grid{ grid-template-columns:1fr; }
}
```

## Embeds alternativos
- **Spotify:** trocar `<audio>` por `<iframe src="https://open.spotify.com/embed/episode/ID" width="100%" height="152" frameborder="0"></iframe>`
- **SoundCloud:** `<iframe src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/USER/TRACK" width="100%" height="166" frameborder="0"></iframe>`
