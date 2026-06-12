# 05 · Faixa de Diferenciais (FeaturesBar)

**Componente React:** `src/components/sections/FeaturesBar.tsx`

## Objetivo
Faixa horizontal escura (gradiente navy) com 6 ícones de diferenciais.

## Cores
- Fundo: `linear-gradient(180deg,#061C5C,#0B2E8A)`
- Ícones: `#00B8D9` (teal)
- Texto: `#FFFFFF`

## HTML

```html
<section class="mct-featbar">
  <div class="mct-featbar__inner">
    <div><span>🌐</span>Atendimento 100% online</div>
    <div><span>📍</span>Acesso nacional</div>
    <div><span>💻</span>Plataforma digital</div>
    <div><span>🤝</span>Atendimento humanizado</div>
    <div><span>🔗</span>Rede de benefícios e descontos</div>
    <div><span>⭐</span>Foco em TEA, PCD, neurodivergentes e famílias</div>
  </div>
</section>
```

## CSS

```css
.mct-featbar{ padding:24px; }
.mct-featbar__inner{
  max-width:1200px; margin:0 auto;
  background:linear-gradient(180deg,#061C5C,#0B2E8A);
  border-radius:20px; padding:24px;
  display:grid; grid-template-columns:repeat(6,1fr); gap:24px;
  color:#fff;
}
.mct-featbar__inner > div{
  display:flex; flex-direction:column; align-items:center; gap:8px;
  text-align:center; font-size:12px; line-height:1.3;
}
.mct-featbar__inner span{ color:#00B8D9; font-size:22px; }

@media (max-width:1023px){ .mct-featbar__inner{ grid-template-columns:repeat(3,1fr); } }
@media (max-width:767px){ .mct-featbar__inner{ grid-template-columns:repeat(2,1fr); padding:20px; } }
```
