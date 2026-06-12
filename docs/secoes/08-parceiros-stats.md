# 08 · Atendimento — estatísticas + grid de logos parceiros

**Componente React:** `src/components/sections/PartnersStats.tsx`

> Esta é a seção do **mock mobile** enviado pelo cliente (a com "26 Estados + DF",
> "1.736 Municípios", etc.). O mock veio com fundo laranja, mas o briefing
> **proíbe laranja como cor de fundo**, por isso aqui usamos a paleta oficial:
> **fundo navy `#0B2E8A`** com detalhes em `#00B8D9` e cards em `#12389E`.

## Cores
- Fundo da seção: `#0B2E8A`
- Cards de estatísticas: `#12389E` + borda `rgba(0,184,217,.25)`
- Badge "ATENDIMENTO": bg `#12389E`, texto `#00B8D9`
- Ícones: `#00B8D9`
- Cards de logo: bg `#FFFFFF`, texto `#0B2E8A`

## Conteúdo
- **26** Estados + DF
- **1.736** Municípios atendidos
- **4.612** Procedimentos
- **16.661** Parceiros de Saúde

Logos (substituir por `<img>` no WordPress):
Sabin · Farmácia Preço Popular · Centro de Medicina · Frei Galvão ·
Richet · Padrão · Exame · Hospital Vitória ·
Clementino Fraga · Lab Pasteur · Extrafarma · Drogasmil

## HTML

```html
<section class="mct-attend" id="atendimento">
  <header>
    <span class="mct-attend__badge">ATENDIMENTO</span>
    <h2>Confira alguns dos nossos parceiros</h2>
    <p>Cobertura nacional com os melhores hospitais, clínicas, laboratórios e farmácias.</p>
  </header>

  <div class="mct-attend__stats">
    <div><div class="ic">📍</div><b>26</b><span>Estados + DF</span></div>
    <div><div class="ic">🏥</div><b>1.736</b><span>Municípios atendidos</span></div>
    <div><div class="ic">📋</div><b>4.612</b><span>Procedimentos</span></div>
    <div><div class="ic">👥</div><b>16.661</b><span>Parceiros de Saúde</span></div>
  </div>

  <div class="mct-attend__logos">
    <a href="#"><img src="/wp-content/uploads/parceiros/sabin.png" alt="Sabin"></a>
    <a href="#"><img src="/wp-content/uploads/parceiros/preco-popular.png" alt="Preço Popular"></a>
    <!-- repetir todos os 12 -->
  </div>
</section>
```

## CSS

```css
.mct-attend{ background:#0B2E8A; color:#fff; padding:96px 24px; }
.mct-attend header{ max-width:680px; margin:0 auto 40px; text-align:center; }
.mct-attend__badge{
  display:inline-block; padding:6px 16px; border-radius:9999px;
  background:#12389E; color:#00B8D9;
  font-size:11px; font-weight:700; letter-spacing:.3em; text-transform:uppercase;
}
.mct-attend h2{ font-size:36px; margin:16px 0 12px; }
.mct-attend p{ font-size:15px; color:rgba(255,255,255,.7); }

.mct-attend__stats{
  max-width:1200px; margin:0 auto 48px;
  display:grid; grid-template-columns:repeat(4,1fr); gap:16px;
}
.mct-attend__stats > div{
  background:#12389E; border:1px solid rgba(0,184,217,.25);
  border-radius:16px; padding:20px;
  display:flex; align-items:center; gap:16px;
}
.mct-attend__stats .ic{
  width:48px; height:48px; border-radius:9999px;
  background:rgba(0,184,217,.15); color:#00B8D9;
  display:flex; align-items:center; justify-content:center; font-size:22px; flex:0 0 auto;
}
.mct-attend__stats b{ font-size:28px; font-weight:800; display:block; line-height:1; }
.mct-attend__stats span{ font-size:13px; color:rgba(255,255,255,.7); }

.mct-attend__logos{
  max-width:1200px; margin:0 auto;
  display:grid; grid-template-columns:repeat(4,1fr); gap:16px;
}
.mct-attend__logos a{
  background:#fff; border-radius:12px; height:80px;
  display:flex; align-items:center; justify-content:center;
}
.mct-attend__logos img{ max-width:80%; max-height:60%; object-fit:contain; }

@media (max-width:1023px){
  .mct-attend__stats{ grid-template-columns:repeat(2,1fr); }
  .mct-attend__logos{ grid-template-columns:repeat(3,1fr); }
}
@media (max-width:767px){
  .mct-attend{ padding:64px 16px; }
  .mct-attend h2{ font-size:26px; }
  .mct-attend__stats{ grid-template-columns:1fr; }
  .mct-attend__logos{ grid-template-columns:repeat(2,1fr); gap:12px; }
  .mct-attend__logos a{ height:64px; }
}
```
