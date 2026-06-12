# 11 · Depoimentos

**Componente React:** `src/components/sections/Testimonials.tsx`

## Cores
- Fundo: gradiente navy `linear-gradient(180deg,#061C5C,#0B2E8A)`
- Texto: `#FFFFFF`
- Cards: `rgba(255,255,255,.08)` + borda `rgba(255,255,255,.12)`
- Estrelas: `#FF8A00`
- Check verificado: `#00B8D9`

## HTML

```html
<section class="mct-test" id="depoimentos">
  <div class="mct-test__inner">
    <div class="mct-test__head">
      <span class="mct-eyebrow" style="color:#00B8D9">Quem já faz parte, recomenda</span>
      <h3>Histórias reais,<br>pessoas reais.</h3>
    </div>
    <div class="mct-test__grid">
      <article>
        <p>"O Meu Clube TEA mudou nossa rotina. Conseguimos atendimento rápido e humanizado."</p>
        <footer><b>Juliana A.</b><span>Mãe de menina com TEA</span></footer>
        <div class="stars">★★★★★</div>
      </article>
      <!-- repetir mais 2 -->
    </div>
  </div>
</section>
```

## CSS

```css
.mct-test{ padding:96px 24px; background:linear-gradient(180deg,#061C5C,#0B2E8A); color:#fff; }
.mct-test__inner{ max-width:1200px; margin:0 auto;
  display:grid; grid-template-columns:1fr 2fr; gap:40px; align-items:center; }
.mct-test h3{ font-size:36px; line-height:1.1; }

.mct-test__grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
.mct-test__grid article{
  background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.12);
  border-radius:20px; padding:24px; backdrop-filter:blur(6px);
}
.mct-test__grid p{ font-size:14px; line-height:1.6; }
.mct-test__grid footer{ margin-top:20px; }
.mct-test__grid b{ font-size:14px; }
.mct-test__grid span{ display:block; font-size:11px; color:rgba(255,255,255,.6); }
.mct-test__grid .stars{ color:#FF8A00; font-size:14px; margin-top:6px; }

@media (max-width:1023px){
  .mct-test__inner{ grid-template-columns:1fr; }
  .mct-test__grid{ grid-template-columns:1fr; }
}
```
