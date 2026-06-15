# 01 · Header (cabeçalho)

**Componente React:** `src/components/sections/Header.tsx`
**Editar conteúdo:** `src/config/site.ts → nav, links`
**Referência visual:** mockup mobile enviado pelo cliente (10:11).

## Estrutura
1. **Linha 1** — Logo (esq) + botão hambúrguer violeta (dir).
2. **Linha 2** — 3 ícones temáticos:
   - ❤ Cuidados — `#00B8D9`
   - ♿ Inclusão — `#7B2FF7`
   - ★ Benefícios — `#FF8A00`
3. **Linha 3** — Tagline: *Conexão que **acolhe** (teal). Benefícios que **transformam** (laranja).*
4. **Botão flutuante** "AGENDE SUA CONSULTA 📅" — sobreposto entre header e hero (margem negativa).

## Cores
- Fundo header: `#FFFFFF`
- Texto: `#1B2540`
- Botão hambúrguer: bg `#7B2FF7`, ícone `#FFFFFF`, radius `12px`
- Botão "Agende sua consulta": fundo `#FFFFFF`, texto `#0B2E8A`, sombra forte, ícone calendário `#7B2FF7`

## HTML (Elementor — widget HTML)

```html
<header class="mct-header">
  <div class="mct-header__inner">
    <div class="mct-header__row">
      <a href="/" class="mct-header__logo">
        <img src="/wp-content/uploads/logo-meu-clube-tea.jpeg" alt="Meu Clube TEA">
      </a>
      <button class="mct-header__burger" aria-label="Abrir menu">☰</button>
    </div>

    <ul class="mct-header__pills">
      <li><span class="dot" style="color:#00B8D9">❤</span> Cuidados</li>
      <li><span class="dot" style="color:#7B2FF7">♿</span> Inclusão</li>
      <li><span class="dot" style="color:#FF8A00">★</span> Benefícios</li>
    </ul>

    <p class="mct-header__tagline">
      Conexão que <b style="color:#00B8D9">acolhe</b>.
      Benefícios que <b style="color:#FF8A00">transformam</b>.
    </p>

    <a class="mct-header__cta" href="https://meuclubetea.com.br/agendar/">
      AGENDE SUA CONSULTA 📅
    </a>
  </div>
</header>
```

## CSS avançado

```css
.mct-header{ background:#fff; position:relative; z-index:40; }
.mct-header__inner{ max-width:1200px; margin:0 auto; padding:20px 20px 28px; position:relative; }
.mct-header__row{ display:flex; justify-content:space-between; align-items:center; gap:16px; }
.mct-header__logo img{ height:44px; width:auto; display:block; }
.mct-header__burger{
  width:44px; height:44px; border:0; border-radius:12px;
  background:#7B2FF7; color:#fff; font-size:20px; cursor:pointer;
  box-shadow:0 6px 18px -6px rgba(123,47,247,.5);
}
.mct-header__pills{
  list-style:none; padding:0; margin:18px 0 0;
  display:flex; flex-wrap:wrap; gap:6px 24px; font-size:14px; font-weight:600; color:#1B2540;
}
.mct-header__pills li{ display:flex; align-items:center; gap:8px; }
.mct-header__tagline{ margin:10px 0 0; font-size:15px; color:#1B2540; }

.mct-header__cta{
  position:absolute; right:20px; bottom:-24px;
  display:inline-flex; align-items:center; gap:10px;
  padding:14px 22px; border-radius:9999px;
  background:#fff; color:#0B2E8A; font-weight:700; font-size:14px;
  border:1px solid rgba(123,47,247,.15);
  box-shadow:0 20px 40px -12px rgba(11,46,138,.25);
  text-decoration:none; transition:.2s;
}
.mct-header__cta:hover{ transform:translateY(-2px); }

@media (min-width:1024px){
  .mct-header__inner{ padding:28px 32px 36px; }
  .mct-header__logo img{ height:48px; }
}
```

## WordPress
- Coloque o logo em **Aparência → Personalizar → Identidade do site**.
- Crie um Header no **Theme Builder** com um único container vertical contendo
  o HTML acima (widget HTML) + CSS na aba "Avançado → CSS personalizado".
- O link de "AGENDE SUA CONSULTA" deve apontar para a página de agendamento
  (definida em `site.links.agendarConsulta`).
