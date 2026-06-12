# 01 · Header (cabeçalho + faixa superior)

**Componente React:** `src/components/sections/Header.tsx`
**Editar conteúdo:** `src/config/site.ts → nav, links`

## Objetivo
Faixa superior com gradiente oficial (90deg), barra branca de navegação com logo,
menu, botão "Área do Cliente" (outline navy) e botão "Quero Fazer Parte" (CTA laranja).
Em mobile: hambúrguer abre drawer azul-navy com texto branco.

## Cores
- Faixa topo: gradiente oficial `linear-gradient(90deg,#0B2E8A,#4A3AFF,#7B2FF7)` · texto `#FFFFFF`
- Nav: fundo `rgba(255,255,255,.95)` + `backdrop-filter: blur(8px)` · texto `#1B2540`
- Link hover: `#7B2FF7`
- Botão Área do Cliente: borda `#0B2E8A` · texto `#0B2E8A` · hover bg `#0B2E8A` / texto `#FFFFFF`
- Botão CTA: bg `#FF8A00` · texto `#FFFFFF` · hover `#FF9F2E`
- Drawer mobile: bg `#0B2E8A` · texto `#FFFFFF` · separadores `rgba(255,255,255,.1)`

## Tipografia
- Faixa topo: `12px` (mobile `11px`)
- Links menu: `14px` peso `500`
- Botões: `14px` peso `600`

## Estrutura no Elementor

Use o **Theme Builder → Header**.

1. Section (full width, sem padding) → **Container vertical**
2. Inner container 1: HTML widget com a faixa superior (cole HTML abaixo).
3. Inner container 2: layout horizontal com 3 colunas
   - Coluna 1 (auto): Logo (Site Logo widget)
   - Coluna 2 (1fr): Nav Menu (Elementor Pro Nav Menu)
   - Coluna 3 (auto): 2 botões (Área do Cliente + CTA) + ícone menu mobile

## HTML — faixa superior (widget HTML)

```html
<div class="mct-topbar">
  Cuidado · Inclusão · Benefícios · Atendimento 100% humanizado para famílias com TEA, PCD e neurodivergentes.
</div>
```

## CSS avançado (Avançado → CSS personalizado da seção)

```css
.mct-topbar{
  background: linear-gradient(90deg,#0B2E8A 0%,#4A3AFF 50%,#7B2FF7 100%);
  color:#fff; text-align:center;
  font-size:12px; padding:8px 16px;
}
@media (max-width:767px){ .mct-topbar{ font-size:11px; } }

/* Nav menu */
selector .elementor-nav-menu a{
  color:#1B2540; font-weight:500; font-size:14px;
  transition:color .2s;
}
selector .elementor-nav-menu a:hover{ color:#7B2FF7; }

/* Botão Área do Cliente (outline) */
.mct-btn-outline{
  border:2px solid #0B2E8A; color:#0B2E8A; background:#fff;
  padding:8px 18px; border-radius:9999px; font-weight:600; font-size:14px;
  display:inline-flex; align-items:center; transition:.2s;
}
.mct-btn-outline:hover{ background:#0B2E8A; color:#fff; }
```

## Links a configurar
- Logo → `/`
- "Início" → `#hero`
- "Benefícios" → `#beneficios`
- "Planos" → `#planos`
- "Como Funciona" → `#como-funciona`
- "Embaixadores" → `#embaixadores`
- "Sobre Nós" → `#sobre`
- "Contato" → `#contato`
- "Área do Cliente" → `https://meuclubetea.com.br/minha-conta/`
- "Quero Fazer Parte" → `https://meuclubetea.com.br/planos/` (página com produtos WooCommerce)

## Responsividade
- ≥1024px: menu horizontal completo, ambos botões visíveis.
- 768–1023px: menu vira hambúrguer; botão CTA visível, "Área do Cliente" some.
- ≤767px: somente logo + hambúrguer (drawer com todos os links e ambos CTAs).
