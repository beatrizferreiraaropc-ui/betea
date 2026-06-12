# 12 · Sobre o Meu Clube TEA

**Componente React:** `src/components/sections/About.tsx`
**Editar conteúdo:** `src/config/site.ts → sobre`

## Estrutura
- Eyebrow + título + subtítulo (texto integral do briefing)
- 3 parágrafos sobre missão/origem
- 2 cards lado a lado: **Missão** (navy) + **Visão** (violet gradient)
- Lista de valores em pills/badges

## Cores
- Fundo: `#FFFFFF`
- Card Missão: bg `#0B2E8A` texto `#FFFFFF`, eyebrow `#00B8D9`
- Card Visão: bg `linear-gradient(135deg,#7B2FF7,#A06BFF)` texto `#FFFFFF`
- Pills valores: bg `#F5F7FA` borda `#E5E9F0`

## HTML

```html
<section class="mct-about" id="sobre">
  <header>
    <span class="mct-eyebrow">Quem somos</span>
    <h3>Sobre o Meu Clube TEA</h3>
    <p>Cuidado, inclusão e benefícios para quem mais precisa.</p>
  </header>

  <div class="mct-about__text">
    <p>O Meu Clube TEA nasceu com um propósito simples e poderoso: tornar o cuidado mais acessível para pessoas com Transtorno do Espectro Autista (TEA), pessoas com deficiência (PCD), neurodivergentes e suas famílias.</p>
    <p>Sabemos que a jornada de quem convive com o autismo e outras condições neurodivergentes é repleta de desafios. Consultas, terapias, medicamentos, deslocamentos e despesas do dia a dia fazem parte da realidade de milhares de famílias brasileiras.</p>
    <p>Foi pensando nisso que criamos uma plataforma que une saúde, acolhimento, benefícios e economia em um único lugar. Mais do que um clube de benefícios, somos uma rede de apoio.</p>
  </div>

  <div class="mct-about__cards">
    <div class="card-mission">
      <span>NOSSA MISSÃO</span>
      <p>Promover inclusão, acolhimento e acesso a serviços essenciais, contribuindo para uma vida mais digna, saudável e tranquila para milhares de famílias.</p>
    </div>
    <div class="card-vision">
      <span>NOSSA VISÃO</span>
      <p>Ser a maior comunidade de benefícios, cuidado e apoio para pessoas com TEA, PCD, neurodivergentes e seus familiares no Brasil.</p>
    </div>
  </div>

  <div class="mct-about__values">
    <span class="mct-eyebrow">Nossos Valores</span>
    <div>
      <em>💙 Inclusão</em><em>💙 Respeito</em><em>💙 Empatia</em>
      <em>💙 Acessibilidade</em><em>💙 Transparência</em>
      <em>💙 Compromisso Social</em><em>💙 Humanização</em>
    </div>
  </div>
</section>
```

## CSS

```css
.mct-about{ padding:96px 24px; background:#fff; }
.mct-about header{ max-width:680px; margin:0 auto 40px; text-align:center; }
.mct-about h3{ font-size:36px; color:#1B2540; }
.mct-about__text{ max-width:760px; margin:0 auto;
  display:flex; flex-direction:column; gap:18px;
  color:#1B2540; opacity:.85; line-height:1.7; }

.mct-about__cards{ max-width:960px; margin:48px auto 0;
  display:grid; grid-template-columns:1fr 1fr; gap:24px; }
.mct-about__cards > div{ border-radius:20px; padding:32px; color:#fff; }
.card-mission{ background:#0B2E8A; }
.card-mission span{ font-size:11px; font-weight:700; letter-spacing:.2em; color:#00B8D9; display:block; margin-bottom:12px; }
.card-vision{ background:linear-gradient(135deg,#7B2FF7,#A06BFF); }
.card-vision span{ font-size:11px; font-weight:700; letter-spacing:.2em; color:rgba(255,255,255,.85); display:block; margin-bottom:12px; }
.mct-about__cards p{ font-size:14px; line-height:1.6; }

.mct-about__values{ margin-top:40px; text-align:center; }
.mct-about__values > div{ margin-top:20px; display:flex; flex-wrap:wrap; justify-content:center; gap:10px; }
.mct-about__values em{
  font-style:normal; background:#F5F7FA; border:1px solid #E5E9F0;
  padding:8px 16px; border-radius:9999px; font-size:14px; font-weight:500;
}

@media (max-width:767px){
  .mct-about{ padding:64px 16px; }
  .mct-about h3{ font-size:28px; }
  .mct-about__cards{ grid-template-columns:1fr; }
}
```
