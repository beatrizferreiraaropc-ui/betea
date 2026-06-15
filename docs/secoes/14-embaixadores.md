# 14 · Programa de Embaixadores

**Componente React:** `src/components/sections/Ambassador.tsx`
**Editar valores:** `src/config/site.ts → embaixador`
**Referência visual:** infográfico enviado pelo cliente (fundo navy).

## Comissionamento (atualizado pelo cliente)
| Bônus                  | Valor | Duração       |
|------------------------|-------|---------------|
| Indicação (1ª mensalidade) | **20%** | única vez   |
| Recorrente mensal      | **3%**  | até **12 meses** |

## Paleta
- Fundo do card: `linear-gradient(180deg,#061C5C,#0B2E8A)`
- Teal (Cuidados / Impacto): `#00B8D9`
- Violeta (Inclusão / Renda recorrente): `#7B2FF7` / `#A06BFF`
- Laranja (Liberdade / CTA): `#FF8A00`
- Texto principal: `#FFFFFF` (corpo `rgba(255,255,255,.85)`)

## Estrutura
1. Badge "👥 PROGRAMA DE EMBAIXADORES"
2. H2 — "Seja um **Embaixador** do Meu Clube TEA" (Embaixador em teal)
3. Subtítulo com ícone de coração + destaque "renda extra recorrente"
4. Card com 3 pilares (Impacto real · Renda recorrente · Liberdade)
5. Parágrafo de contexto com destaques coloridos
6. Divisor com coração
7. Barras de comissão (20% teal + 3% violeta)
8. Caixa com foguete + frase de fechamento
9. CTA laranja "QUERO SER UM EMBAIXADOR ↗"
10. Selo "🔒 Processo simples, seguro e 100% online"

## HTML (Elementor — widget HTML)

```html
<section class="mct-amb" id="embaixadores">
  <div class="mct-amb__card">
    <span class="mct-amb__badge">👥 PROGRAMA DE EMBAIXADORES</span>

    <h2>Seja um <span class="t">Embaixador</span><br>do Meu Clube TEA</h2>
    <p class="mct-amb__sub">
      ♡ Transforme vidas e construa uma
      <span class="t">renda extra recorrente</span> com propósito.
    </p>

    <div class="mct-amb__pillars">
      <div><i style="color:#00B8D9">♥</i><b style="color:#00B8D9">Impacto real</b>
        <p>Leve saúde e benefícios para famílias que precisam.</p></div>
      <div><i style="color:#A06BFF">📈</i><b style="color:#A06BFF">Renda recorrente</b>
        <p>Ganhe todos os meses com sua rede de associados.</p></div>
      <div><i style="color:#FF8A00">📍</i><b style="color:#FF8A00">Liberdade</b>
        <p>Trabalhe de onde estiver, no seu ritmo.</p></div>
    </div>

    <p class="mct-amb__intro">
      Ao apresentar o Meu Clube TEA, você ajuda famílias a terem acesso à
      <b class="t">saúde</b>, <b class="v">inclusão</b> e <b class="o">benefícios</b>,
      e ainda cria uma fonte de <b class="v">renda recorrente</b>.
    </p>

    <div class="mct-amb__divider"><span></span>♡<span></span></div>
    <h3 class="mct-amb__h3">Seu reconhecimento por transformar vidas:</h3>

    <div class="mct-amb__row">
      <div class="ico ico-teal">🤝</div>
      <div class="lab"><b>Bônus de indicação</b><span>(primeira mensalidade)</span></div>
      <div class="bar"><div class="fill teal" style="width:92%"></div><span>20%</span></div>
    </div>
    <div class="mct-amb__row">
      <div class="ico ico-violet">$</div>
      <div class="lab"><b>Bônus recorrente mensal</b><span>por até 12 meses</span></div>
      <div class="bar"><div class="fill violet" style="width:28%"></div><span>3%</span></div>
    </div>

    <div class="mct-amb__rocket">
      <div class="ico ico-teal">🚀</div>
      <p><b class="t">Muito mais do que uma renda extra:</b> Faça parte de um movimento que une
      <b class="t">cuidado</b>, <b class="v">inclusão</b> e <b class="o">oportunidade</b>.</p>
    </div>

    <a class="mct-amb__cta" href="https://meuclubetea.com.br/seja-embaixador/">
      QUERO SER UM EMBAIXADOR ↗
    </a>
    <p class="mct-amb__lock">🔒 Processo simples, seguro e <b class="t">100% online</b>.</p>
  </div>
</section>
```

## CSS avançado

```css
.mct-amb{ padding:64px 20px; background:#F5F7FA; }
.mct-amb__card{
  max-width:880px; margin:0 auto; padding:48px 28px;
  background:linear-gradient(180deg,#061C5C,#0B2E8A); color:#fff;
  border-radius:28px; box-shadow:0 30px 60px -20px rgba(11,46,138,.45);
  text-align:center;
}
.mct-amb__badge{
  display:inline-block; padding:10px 20px; border-radius:9999px;
  background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.15);
  font-size:12px; letter-spacing:.2em; text-transform:uppercase; font-weight:600;
}
.mct-amb h2{ font-size:44px; line-height:1.1; margin:24px 0 0; font-weight:700; }
.mct-amb h2 .t,.mct-amb .t{ color:#00B8D9; }
.mct-amb .v{ color:#A06BFF; } .mct-amb .o{ color:#FF8A00; }
.mct-amb__sub{ margin:18px auto 0; max-width:520px; font-size:17px; color:rgba(255,255,255,.85); }

.mct-amb__pillars{
  margin:32px 0 0; padding:24px;
  border:1px solid rgba(255,255,255,.15); border-radius:18px;
  background:rgba(255,255,255,.04);
  display:grid; grid-template-columns:repeat(3,1fr); gap:20px;
}
.mct-amb__pillars > div{ padding:0 12px; text-align:center; }
.mct-amb__pillars i{ display:inline-flex; width:52px; height:52px; border-radius:9999px;
  align-items:center; justify-content:center; font-style:normal; font-size:24px;
  background:rgba(255,255,255,.06); border:1.5px solid currentColor; }
.mct-amb__pillars b{ display:block; margin:10px 0 6px; font-size:16px; }
.mct-amb__pillars p{ font-size:14px; color:rgba(255,255,255,.8); margin:0; line-height:1.45; }

.mct-amb__intro{ margin:32px auto 0; max-width:640px; font-size:16px; color:rgba(255,255,255,.85); line-height:1.55; }

.mct-amb__divider{ display:flex; align-items:center; gap:12px; max-width:420px; margin:28px auto 0; color:#A06BFF; }
.mct-amb__divider span{ flex:1; height:1px; background:rgba(255,255,255,.2); }

.mct-amb__h3{ margin:22px 0 16px; color:#00B8D9; font-size:18px; font-weight:600; }

.mct-amb__row{ max-width:640px; margin:14px auto 0; display:grid;
  grid-template-columns:auto 1fr 220px; align-items:center; gap:14px; text-align:left; }
.mct-amb__row .ico{ width:54px; height:54px; border-radius:9999px; display:flex; align-items:center; justify-content:center;
  font-weight:700; font-size:22px; }
.mct-amb__row .ico-teal{ background:rgba(0,184,217,.13); border:1.5px solid #00B8D9; color:#00B8D9; }
.mct-amb__row .ico-violet{ background:rgba(123,47,247,.13); border:1.5px solid #7B2FF7; color:#A06BFF; }
.mct-amb__row .lab b{ display:block; font-size:15px; }
.mct-amb__row .lab span{ font-size:13px; color:rgba(255,255,255,.7); }
.mct-amb__row .bar{ position:relative; height:40px; border-radius:9999px; background:#fff; overflow:hidden; }
.mct-amb__row .bar .fill{ position:absolute; inset:0 auto 0 0; border-radius:9999px; }
.mct-amb__row .bar .fill.teal{ background:linear-gradient(90deg,#00B8D9,#26D4F0); }
.mct-amb__row .bar .fill.violet{ background:linear-gradient(90deg,#7B2FF7,#A06BFF); }
.mct-amb__row .bar span{ position:relative; z-index:2; padding-left:18px; color:#fff; font-weight:800; font-size:20px;
  line-height:40px; display:block; }

.mct-amb__rocket{ max-width:640px; margin:32px auto 0; padding:18px;
  border:1px solid rgba(255,255,255,.15); border-radius:18px; background:rgba(255,255,255,.04);
  display:flex; align-items:flex-start; gap:14px; text-align:left; }
.mct-amb__rocket p{ margin:0; font-size:15px; line-height:1.5; color:rgba(255,255,255,.9); }

.mct-amb__cta{
  display:inline-flex; align-items:center; gap:10px; margin-top:32px;
  padding:16px 28px; border-radius:9999px;
  background:linear-gradient(135deg,#FF8A00,#FF9F2E); color:#fff;
  font-weight:800; letter-spacing:.04em; font-size:15px;
  text-decoration:none; box-shadow:0 25px 50px -15px rgba(255,138,0,.55);
}
.mct-amb__lock{ margin:14px 0 0; font-size:13px; color:rgba(255,255,255,.7); }

@media (max-width:767px){
  .mct-amb__card{ padding:36px 18px; }
  .mct-amb h2{ font-size:30px; }
  .mct-amb__pillars{ grid-template-columns:1fr; }
  .mct-amb__row{ grid-template-columns:auto 1fr; }
  .mct-amb__row .bar{ grid-column:1/-1; }
}
```

## Notas WordPress
- O link CTA aponta para a página do programa de afiliados (já existente no WP).
- As barras de progresso são puramente visuais — porcentagens estão no texto.
- Para alterar 12 meses ou as porcentagens, edite o HTML diretamente.
