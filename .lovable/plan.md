## Objetivo
Refinamento visual "futurístico Apple/glassmorphism" em 6 seções, com **glass pills**, bordas 1px translúcidas, blur/backdrop, gradientes suaves e ornamentos delicados. Mantém 100% a paleta pastel atual (navy #3F74C2, teal #7FC8D4, violet #B8A4E8, orange #F3A35C, peach #F6C9A8) e a estrutura de 1 arquivo por seção (Elementor-ready).

Referência de estilo: pills com contorno fininho + fundo translúcido + blur (como no banner do site enviado e no visual de apps Apple).

---

## Padrão global "Glass" (adicionar em `src/styles.css`)
Novos utilitários reutilizáveis, sem cor nova:

```css
@utility glass-pill {
  background: rgba(255,255,255,0.55);
  backdrop-filter: blur(14px) saturate(140%);
  border: 1px solid rgba(255,255,255,0.7);
  box-shadow: 0 4px 24px -8px rgba(63,116,194,0.15), inset 0 1px 0 rgba(255,255,255,0.8);
  border-radius: 9999px;
}
@utility glass-card {
  background: rgba(255,255,255,0.65);
  backdrop-filter: blur(20px) saturate(150%);
  border: 1px solid rgba(255,255,255,0.6);
  box-shadow: 0 20px 40px -20px rgba(63,116,194,0.18), inset 0 1px 0 rgba(255,255,255,0.7);
}
@utility glass-dark {  /* para usar sobre backgrounds azuis */
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(18px) saturate(140%);
  border: 1px solid rgba(255,255,255,0.22);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.25);
}
@utility bg-navy-gradient-soft {
  background: linear-gradient(160deg, #2E5A9E 0%, #3F74C2 55%, #5A8ED0 100%);
}
@utility bg-mist {
  background: linear-gradient(180deg, #FFFFFF 0%, #F5F9FD 60%, #EAF1FB 100%);
}
```
*Só a propriedade padrão `backdrop-filter` — sem prefixos manuais (Lightning CSS adiciona).*

---

## 1. Header desktop (`Header.tsx`)
- Logo maior no `lg` (h-20 → h-24).
- Bloco direito em **linha única**: pills `Cuidado · Inclusão · Benefícios` + separador `·` fino + tagline `Conexão que acolhe. Benefícios que transformam.` **lado a lado** (não empilhados).
- Pills recebem `glass-pill` (fundo translúcido, borda 1px, blur) — o efeito "vidro Apple" que o usuário citou.
- Mobile/tablet inalterado.

## 2. Testimonials (`Testimonials.tsx`)
- Fundo → `bg-navy-gradient-soft` + blob radial teal `rgba(127,200,212,0.18)` no canto (profundidade sem sair da paleta).
- Cards dos depoimentos: `glass-dark` (vidro translúcido sobre o azul) + borda 1px branca 22%. Fica moderno, tipo dashboard Apple.

## 3. CtaSobre (`CtaSobre.tsx`)
- Fundo navy mantido; adicionar **ornamentos SVG** absolutos e sutis:
  - Círculos concêntricos (stroke 1px, opacidade 0.10) laterais.
  - 2 linhas onduladas finas atravessando ao fundo.
  - Cluster de pontos (dot-grid) no canto oposto.
  - 2 blobs difusos (teal/violet, blur 80px, opacidade 0.25).
- Botão laranja ganha halo suave `box-shadow: 0 20px 40px -12px rgba(243,163,92,0.5)`.
- `pointer-events-none` + `aria-hidden` em todos os ornamentos.

## 4. FaqVideo (`FaqVideo.tsx`)
- Fundo → `bg-mist` + dot-grid SVG (pontos 1px violet 12% opacidade) no topo.
- **Vídeo**: glow pastel atrás (blobs teal+violet blur 60px opacidade 0.35), moldura com gradient-border 1px (navy→teal), badge "Play" glass pill flutuante no canto.
- **Accordion**: cada item vira um `glass-card` compacto com:
  - Ícone circular à esquerda alternando teal/violet/orange conforme o índice.
  - Chevron colorido (herda a cor do ícone).
  - Item aberto: destaque `background: rgba(cor,0.06)` + borda esquerda 3px na cor.
  - Hover: pequeno translate-x + mudança de cor do título.

## 5. Ambassador (`Ambassador.tsx`)
- Fundo → gradiente azul clareando: `linear-gradient(160deg, #3F74C2 0%, #5A8ED0 60%, #7FA6D9 100%)` (respeita a regra: nunca mais escuro que #3F74C2).
- **20% / 15%**: separar em dois cartões `glass-dark`, `gap-6 md:gap-10`, símbolo `%` menor como sobrescrito, `leading-none` no número, label caps com respiro.
- **Lateral direita** (área vazia): composição decorativa SVG — círculos concêntricos pastel + pattern de linhas diagonais finas (opacidade 0.08) + 2–3 orbs difusos (teal/violet/peach com blur). Traz movimento sem poluir.

## 6. Acompanhamento + CentralAtendimento
Aplicar continuidade "clean-futurista":
- **Acompanhamento.tsx**: fundo → `bg-mist`. Cada card vira `glass-card`:
  - Borda 1px branca 60%, blur 20px.
  - Ícone dentro de círculo pastel translúcido (token da cor do card).
  - Sombra `0 20px 40px -20px rgba(63,116,194,0.15)` — flutuante.
- **CentralAtendimento.tsx**: fundo `linear-gradient(180deg, #EAF1FB 0%, #FFFFFF 100%)` (encadeia com o final da seção acima). 2 blobs pastel (teal + violet, blur 80px, opacidade 0.25) absolutos ao redor do bloco central. Vídeo recebe o mesmo tratamento de glow pastel + gradient-border 1px do FaqVideo.

---

## Documentação Elementor
Atualizar cada `docs/secoes/*.md` afetado com o CSS de glass, gradientes e SVGs (código pronto para colar em widget HTML do Elementor):
- `01-header.md`, `10-depoimentos.md`, `12-cta-sobre.md`, `13-faq-video.md`, `14-embaixadores.md`, `15-acompanhamento.md`, `16-central-atendimento.md`.

## O que NÃO muda
- Paleta, fontes, textos, estrutura, ordem, quantidade de seções.
- Nenhum arquivo criado ou removido — só edições.

## Notas técnicas
- Todos os `backdrop-filter` escritos só com a propriedade padrão (Lightning CSS cuida do prefixo).
- Ornamentos e blobs: `position: absolute` + `pointer-events-none` + `aria-hidden`.
- Responsividade: ornamentos pesados usam `hidden md:block`; glass funciona em mobile sem ajuste.

Aprovando, entro em build mode e faço tudo numa rodada.