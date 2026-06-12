# 14 · Embaixadores do Impacto

**Componente React:** `src/components/sections/Ambassador.tsx`
**Editar conteúdo:** `src/config/site.ts → embaixador`

## Cores (briefing)
- Fundo: `#0B2E8A`
- Cards internos: `#12389E`
- Detalhes: `#00B8D9`, `#7B2FF7`
- Botão CTA: `#FF8A00`

## Comissão
- **20%** na primeira mensalidade
- **3%** recorrente por 3 meses

## HTML

```html
<section class="mct-amb" id="embaixadores">
  <div class="mct-amb__inner">
    <div class="mct-amb__text">
      <span class="mct-eyebrow" style="color:#00B8D9">Seja um embaixador de mudança</span>
      <h3>Seja um Agente de Mudança.<br>Seja o exemplo e prospere.</h3>
      <p>Indique o Meu Clube TEA e ganhe comissões em famílias.</p>
      <ul>
        <li>✔ 20% de comissão na primeira mensalidade</li>
        <li>✔ 3% de comissão recorrente por 3 meses</li>
        <li>✔ Histórico e saque com clareza</li>
        <li>✔ Liberdade para trabalhar de onde estiver</li>
      </ul>
      <a class="mct-btn-cta" href="https://meuclubetea.com.br/seja-embaixador/">QUERO SER EMBAIXADOR →</a>
    </div>
    <div class="mct-amb__media">
      <img src="/wp-content/uploads/embaixadores.jpg" alt="Embaixadores Meu Clube TEA">
      <div class="badge badge-1"><b>20%</b><span>1ª mensalidade</span></div>
      <div class="badge badge-2"><b>3%</b><span>recorrente · 3 meses</span></div>
    </div>
  </div>
</section>
```

## CSS

```css
.mct-amb{ padding:64px 24px; background:#fff; }
.mct-amb__inner{
  max-width:1200px; margin:0 auto;
  background:#0B2E8A;
  background-image:linear-gradient(90deg,#0B2E8A 0%,#4A3AFF 50%,#7B2FF7 100%);
  border-radius:28px; padding:56px;
  display:grid; grid-template-columns:1fr 1fr; gap:40px;
  color:#fff;
}
.mct-amb h3{ font-size:36px; line-height:1.15; margin:12px 0; }
.mct-amb ul{ list-style:none; padding:0; margin:20px 0 28px; }
.mct-amb ul li{ font-size:14px; padding:4px 0; }
.mct-amb__media{ position:relative; }
.mct-amb__media img{ width:100%; border-radius:20px; box-shadow:0 25px 50px -12px rgba(0,0,0,.4); }
.mct-amb .badge{
  position:absolute; right:16px; padding:12px 16px; border-radius:12px;
  text-align:center; font-weight:700;
}
.mct-amb .badge b{ font-size:28px; display:block; line-height:1; }
.mct-amb .badge span{ font-size:10px; font-weight:500; }
.mct-amb .badge-1{ top:24px; background:rgba(123,47,247,.9); color:#fff; backdrop-filter:blur(6px); }
.mct-amb .badge-2{ top:120px; background:rgba(255,255,255,.95); color:#1B2540; }
.mct-amb .badge-2 b{ color:#7B2FF7; }

@media (max-width:1023px){
  .mct-amb__inner{ grid-template-columns:1fr; padding:40px 24px; }
  .mct-amb h3{ font-size:28px; }
}
```
