# 12 · Sobre o Meu Clube TEA (versão dinâmica)

**Componente React:** `src/components/sections/About.tsx`
**Editar conteúdo:** `src/config/site.ts → sobre`

## Estrutura
1. Cabeçalho centralizado (eyebrow + título + subtítulo).
2. **3 cards-resumo** com ícone colorido (teal, violet, orange).
3. **Missão (navy) + Visão (violet gradient)** em 2 colunas.
4. Texto completo do cliente em parágrafos centralizados (SEO).
5. **Valores em pills** com ícones individuais.

## Cores
- Card 1 (Propósito): `#00B8D9`
- Card 2 (Rede de apoio): `#7B2FF7`
- Card 3 (Saúde/Economia): `#FF8A00`
- Missão: `#0B2E8A` (texto branco / eyebrow `#00B8D9`)
- Visão: `linear-gradient(135deg,#7B2FF7,#A06BFF)`
- Pills: fundo `#F5F7FA`, borda `#E5E9F0`, ícone `#7B2FF7`

## HTML

```html
<section class="mct-about" id="sobre">
  <header class="mct-about__head">
    <span class="mct-eyebrow">Quem somos</span>
    <h3>Sobre o Meu Clube TEA</h3>
    <p>Cuidado, inclusão e benefícios para quem mais precisa.</p>
  </header>

  <div class="mct-about__cards">
    <article>
      <span class="ico" style="background:#00B8D9"><!-- ícone heart --></span>
      <b>Propósito simples e poderoso</b>
      <p>Tornar o cuidado mais acessível para pessoas com TEA, PCD, neurodivergentes e suas famílias.</p>
    </article>
    <article>
      <span class="ico" style="background:#7B2FF7"><!-- ícone users --></span>
      <b>Rede de apoio real</b>
      <p>Consultas, terapias, medicamentos e despesas do dia a dia centralizadas em um único lugar.</p>
    </article>
    <article>
      <span class="ico" style="background:#FF8A00"><!-- ícone sparkles --></span>
      <b>Saúde, acolhimento e economia</b>
      <p>Mais do que um clube de benefícios: praticidade, segurança e qualidade de vida.</p>
    </article>
  </div>

  <div class="mct-about__mv">
    <div class="mission">
      <span>NOSSA MISSÃO</span>
      <p>Promover inclusão, acolhimento e acesso a serviços essenciais...</p>
    </div>
    <div class="vision">
      <span>NOSSA VISÃO</span>
      <p>Ser a maior comunidade de benefícios, cuidado e apoio...</p>
    </div>
  </div>

  <div class="mct-about__text">
    <p>O Meu Clube TEA nasceu com um propósito simples e poderoso...</p>
    <p>Sabemos que a jornada de quem convive com o autismo...</p>
    <p>Foi pensando nisso que criamos uma plataforma...</p>
  </div>

  <div class="mct-about__values">
    <span class="mct-eyebrow">Nossos Valores</span>
    <div class="pills">
      <em>Inclusão</em><em>Respeito</em><em>Empatia</em>
      <em>Acessibilidade</em><em>Transparência</em>
      <em>Compromisso Social</em><em>Humanização</em>
    </div>
  </div>
</section>
```

> No Elementor use o widget **Icon Box** para os 3 cards (mais limpo) e o widget
> **Icon List** para os valores. Os SVGs ficam por conta da biblioteca do Elementor.

## CSS

```css
.mct-about{ padding:96px 24px; background:#fff; }
.mct-about__head{ max-width:680px; margin:0 auto 48px; text-align:center; }
.mct-about__head h3{ font-size:36px; color:#1B2540; }

.mct-about__cards{
  max-width:1080px; margin:0 auto;
  display:grid; grid-template-columns:repeat(3,1fr); gap:20px;
}
.mct-about__cards article{
  background:#fff; border:1px solid #E5E9F0; border-radius:20px; padding:24px;
  box-shadow:0 4px 12px rgba(11,46,138,.04);
}
.mct-about__cards .ico{
  width:48px; height:48px; border-radius:14px; display:flex;
  align-items:center; justify-content:center; color:#fff;
  box-shadow:0 8px 18px rgba(11,46,138,.12);
}
.mct-about__cards b{ display:block; margin-top:16px; font-size:16px; color:#1B2540; }
.mct-about__cards p{ font-size:14px; color:#5B6478; margin-top:8px; line-height:1.6; }

.mct-about__mv{ max-width:1080px; margin:40px auto 0;
  display:grid; grid-template-columns:1fr 1fr; gap:20px; }
.mct-about__mv > div{ border-radius:20px; padding:32px; color:#fff; }
.mct-about__mv .mission{ background:#0B2E8A; }
.mct-about__mv .mission span{ color:#00B8D9; font-size:11px; letter-spacing:.2em; font-weight:700; display:block; margin-bottom:12px; }
.mct-about__mv .vision{ background:linear-gradient(135deg,#7B2FF7,#A06BFF); }
.mct-about__mv .vision span{ color:rgba(255,255,255,.85); font-size:11px; letter-spacing:.2em; font-weight:700; display:block; margin-bottom:12px; }
.mct-about__mv p{ font-size:14px; line-height:1.6; }

.mct-about__text{ max-width:760px; margin:48px auto 0;
  display:flex; flex-direction:column; gap:16px;
  color:#1B2540; opacity:.85; line-height:1.7; }

.mct-about__values{ margin-top:48px; text-align:center; }
.mct-about__values .pills{ margin-top:20px; display:flex; flex-wrap:wrap; justify-content:center; gap:10px; }
.mct-about__values em{
  font-style:normal; background:#F5F7FA; border:1px solid #E5E9F0;
  padding:8px 16px; border-radius:9999px; font-size:14px; font-weight:500;
  display:inline-flex; align-items:center; gap:8px;
}

@media (max-width:1023px){ .mct-about__cards{ grid-template-columns:1fr; max-width:520px; } }
@media (max-width:767px){
  .mct-about{ padding:64px 16px; }
  .mct-about__head h3{ font-size:28px; }
  .mct-about__mv{ grid-template-columns:1fr; }
}
```
