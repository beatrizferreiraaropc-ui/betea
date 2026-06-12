# 04 · Planos (WooCommerce)

**Componente React:** `src/components/sections/Plans.tsx`
**Editar conteúdo:** `src/config/site.ts → planos[]`

## Objetivo
Três cards de planos com **fundo da seção `#F5F7FA`** e bordas oficiais:

| Plano                  | Preço    | Borda      | CTA         | productUrl (WooCommerce) |
|------------------------|----------|------------|-------------|--------------------------|
| Essencial              | R$ 29,90 | `#00B8D9`  | bg `#00B8D9`| `/produto/plano-essencial/` |
| Família ⭐ DESTAQUE    | R$ 69,90 | `#7B2FF7`  | bg `#FF8A00`| `/produto/plano-familia/`   |
| Proteção Total + PET   | R$ 99,90 | `#0B2E8A`  | bg `#0B2E8A`| `/produto/plano-protecao-total/` |

Plano Família tem **selo laranja `#FF8A00`** "Recomendado por Especialistas" no topo
e fica **8–16px acima** dos outros cards no desktop.

## Estrutura Elementor
1. Section: bg `#F5F7FA`, padding `96px / 64px`.
2. Heading centralizado.
3. Inner section com 3 colunas iguais — cada coluna é um card.

> Dica: no Elementor Pro use o widget **WooCommerce Products** filtrando por categoria
> "planos", ou monte cada coluna como container HTML/widget para ter controle total.

## HTML por card (modelo)

```html
<article class="mct-plan" style="--mct-c:#00B8D9">
  <!-- <span class="mct-plan__tag">Recomendado por Especialistas</span> -->   <!-- só no destaque -->
  <!-- <span class="mct-plan__ribbon">MAIS COMPLETO</span> -->                <!-- só no proteção -->
  <span class="mct-plan__kicker">PLANO</span>
  <h3>ESSENCIAL</h3>
  <p>A porta de entrada para mais saúde, economia e tranquilidade.</p>
  <div class="mct-plan__price"><small>R$</small><strong>29,90</strong><small>/mês</small></div>
  <ul>
    <li>✔ Telemedicina Individual</li>
    <li>✔ Clube de Benefícios e Descontos</li>
    <li>✔ Descontos em Farmácias Parceiras</li>
    <li>✔ Descontos em Clínicas e Laboratórios</li>
    <li>✔ Suporte Humanizado</li>
  </ul>
  <a class="mct-plan__cta" href="https://meuclubetea.com.br/produto/plano-essencial/">QUERO ESSE PLANO</a>
</article>
```

Para o Plano Família, troque `--mct-c:#7B2FF7`, adicione `data-featured="1"` e ative o
`<span class="mct-plan__tag">`. Para Proteção Total, `--mct-c:#0B2E8A` e ative
`<span class="mct-plan__ribbon">`.

## CSS avançado

```css
.mct-plans{ background:#F5F7FA; padding:96px 24px; }
.mct-plans header{ max-width:680px; margin:0 auto 48px; text-align:center; }

.mct-plans__grid{
  max-width:1200px; margin:0 auto;
  display:grid; grid-template-columns:repeat(3,1fr); gap:24px; align-items:stretch;
}

.mct-plan{
  position:relative; background:#fff; border-radius:24px;
  border:2px solid var(--mct-c); padding:32px;
  display:flex; flex-direction:column; transition:.25s;
}
.mct-plan:hover{ box-shadow:0 25px 50px -12px rgba(11,46,138,.2); }
.mct-plan[data-featured="1"]{ margin-top:-16px; }

.mct-plan__tag{
  position:absolute; top:-12px; left:50%; transform:translateX(-50%);
  background:#FF8A00; color:#fff; font-size:11px; font-weight:700;
  padding:4px 16px; border-radius:9999px; white-space:nowrap;
  box-shadow:0 6px 14px rgba(255,138,0,.35);
}
.mct-plan__ribbon{
  position:absolute; top:16px; right:16px;
  background:var(--mct-c); color:#fff; font-size:10px; font-weight:700;
  padding:4px 8px; border-radius:6px;
}
.mct-plan__kicker{ font-size:11px; font-weight:700; letter-spacing:.2em; color:var(--mct-c); }
.mct-plan h3{ font-size:24px; margin:4px 0 12px; color:#1B2540; }
.mct-plan p{ font-size:14px; color:#5B6478; min-height:44px; }
.mct-plan__price{ margin:24px 0; display:flex; align-items:baseline; gap:4px; }
.mct-plan__price small{ font-size:14px; color:#5B6478; }
.mct-plan__price strong{ font-size:48px; font-weight:800; color:var(--mct-c); line-height:1; }
.mct-plan ul{ list-style:none; padding:0; margin:0 0 24px; flex:1; }
.mct-plan ul li{ font-size:14px; padding:6px 0; color:#1B2540; }

.mct-plan__cta{
  display:flex; justify-content:center; align-items:center;
  padding:12px 20px; border-radius:9999px;
  background:var(--mct-c); color:#fff !important;
  font-weight:700; font-size:14px; text-decoration:none;
  box-shadow:0 8px 20px rgba(0,0,0,.08); transition:.2s;
}
.mct-plan[data-featured="1"] .mct-plan__cta{ background:#FF8A00; }
.mct-plan__cta:hover{ filter:brightness(1.1); }

@media (max-width:1023px){
  .mct-plans__grid{ grid-template-columns:1fr; max-width:480px; }
  .mct-plan[data-featured="1"]{ margin-top:0; order:-1; }
}
@media (max-width:767px){
  .mct-plans{ padding:64px 16px; }
  .mct-plan{ padding:24px; }
  .mct-plan__price strong{ font-size:40px; }
}
```

## Links a configurar (WooCommerce)
```
https://meuclubetea.com.br/produto/plano-essencial/
https://meuclubetea.com.br/produto/plano-familia/
https://meuclubetea.com.br/produto/plano-protecao-total/
```

## Responsividade
- ≥1024px: 3 colunas, plano Família elevado.
- <1024px: 1 coluna, **plano Família vai pro topo** (order:-1) para destacar.
