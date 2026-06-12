# 09 · Impacto (estatísticas resumidas)

**Componente React:** `src/components/sections/Impact.tsx`
**Editar conteúdo:** `src/config/site.ts → impacto`

## Conteúdo
- +15 mil famílias
- +50 mil consultas
- +200 especialistas
- Até 10% do lucro para causas sociais

## HTML

```html
<section class="mct-impact" id="impacto">
  <div class="mct-impact__inner">
    <div>
      <h3>Impacto que transforma vidas</h3>
      <p>Mais que benefícios, um propósito. Cada plano ajuda a construir um mundo mais inclusivo.</p>
      <a class="mct-btn-outline" href="https://meuclubetea.com.br/impacto-social/">CONHEÇA NOSSO IMPACTO</a>
    </div>
    <div class="mct-impact__card">
      <div><b>+15 mil</b><span>famílias atendidas</span></div>
      <div><b>+50 mil</b><span>consultas realizadas</span></div>
      <div><b>+200</b><span>especialistas parceiros</span></div>
      <div><b>Até 10%</b><span>do lucro a causas sociais</span></div>
    </div>
  </div>
</section>
```

## CSS

```css
.mct-impact{ padding:80px 24px; background:#fff; }
.mct-impact__inner{
  max-width:1200px; margin:0 auto;
  display:grid; grid-template-columns:1fr 2fr; gap:32px; align-items:center;
}
.mct-impact h3{ font-size:32px; color:#1B2540; }
.mct-impact p{ color:#5B6478; margin:16px 0 24px; }
.mct-impact__card{
  background:#fff; border:1px solid #E5E9F0; border-radius:20px; padding:32px;
  display:grid; grid-template-columns:repeat(4,1fr); gap:24px; text-align:center;
}
.mct-impact__card b{ font-size:28px; color:#7B2FF7; display:block; }
.mct-impact__card span{ font-size:12px; color:#5B6478; }

@media (max-width:1023px){
  .mct-impact__inner{ grid-template-columns:1fr; }
  .mct-impact__card{ grid-template-columns:repeat(2,1fr); }
}
@media (max-width:767px){ .mct-impact{ padding:56px 16px; } .mct-impact h3{ font-size:24px; } }
```
