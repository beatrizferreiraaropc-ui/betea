## Objetivo
Aplicar as 7 alterações solicitadas mantendo paleta pastel, responsividade e organização por seção (facilita a migração pro Elementor). Nada além do que foi pedido será tocado.

## Ativos recebidos (do zip)
- `imagem da seçao parceiros.svg` + `segunda imagem seçao parceiro.svg` → 2 faixas com logos reais dos parceiros
- `video seçao perguntas.mp4` → vídeo da nova seção FAQ
- `video da ultima seção.mp4` → vídeo antes do botão da Central de Atendimento
- `print com as marcaçoes de onde sera as alteraçoes.svg` → referência visual das marcações

Todos serão subidos via `lovable-assets` (CDN) e referenciados por `.asset.json` — nada de binário no repo.

---

## Alterações

### 1. Header desktop (`src/components/sections/Header.tsx`)
- **Desktop (≥lg)**: reorganizar em 2 colunas dentro do bloco branco:
  - Coluna esquerda: logo grande (como está).
  - Coluna direita (alinhada à direita, verticalmente centrada): os 3 pills `Cuidados · Inclusão · Benefícios` **em linha** + a tagline `Conexão que acolhe. Benefícios que transformam.` logo abaixo + o hambúrguer violeta no canto.
  - Isso elimina o espaço vazio à direita do logo no desktop.
- **Mobile/tablet (<lg)**: mantém exatamente como está hoje (logo em cima, hambúrguer à direita, pills e tagline empilhados abaixo).
- Botão flutuante "AGENDE SUA CONSULTA" continua igual.

### 2. Hero (`src/components/sections/Hero.tsx`)
- Descer o card de copy para não cobrir a família na imagem:
  - Desktop: aumentar `padding-top` do card (ou empurrar via `mt`) para o card iniciar mais abaixo, deixando o topo da imagem livre.
  - Mobile: manter posicionamento atual (a imagem mobile já é separada).
- Nenhuma outra alteração no conteúdo.

### 3. Parceiros de Saúde — `PartnersStats.tsx` (seção 07)
- Substituir a grade textual "TEMSaúde / UNIESUD / etc." por **os 2 SVGs enviados**:
  - Uma faixa branca com `parceiros1.svg` (logos alinhados horizontalmente).
  - Abaixo, outra faixa com `parceiros2.svg`.
- Estatísticas (+15 mil famílias etc.) permanecem inalteradas.
- Docs: atualizar `docs/secoes/07-parceiros-stats.md` para refletir "usar SVG único" (mais simples de reproduzir no Elementor com widget Image).

### 4. Substituir "Parceiros Institucionais" por CTA (`Partners.tsx` → CTA)
- Renomear `Partners.tsx` para `CtaSobre.tsx` (ou reescrever conteúdo):
  - Faixa navy com gradient sutil, título grande + subtítulo curto + botão laranja arredondado.
  - Copy proposta:
    - Eyebrow: `PRÓXIMO PASSO`
    - Título: `Faça parte de uma comunidade que acolhe.`
    - Subtítulo: `Escolha seu plano e comece hoje mesmo a cuidar de quem você ama com mais tranquilidade.`
    - Botão: `QUERO FAZER PARTE` → `site.links.queroFazerParte`
  - *(Copy pode ser trocada — me diga se prefere outra)*
- Deletar `docs/secoes/12-parceiros-logos.md` e criar `docs/secoes/12-cta-sobre.md`.

### 5. Nova seção: **Vídeo + Perguntas Frequentes** (`FaqVideo.tsx`)
- Inserir logo depois do CTA (item 4).
- Layout 2 colunas no desktop, empilhado no mobile:
  - Esquerda: player do `video seçao perguntas.mp4` (rounded, sombra suave, autoplay muted loop).
  - Direita: título "Perguntas Frequentes" + Accordion com 5 perguntas usando `src/components/ui/accordion.tsx` (já existe no projeto). Perguntas iniciais (revisáveis por você):
    1. Como funcionam as consultas por telemedicina?
    2. O Meu Clube TEA atende em todo o Brasil?
    3. Posso cancelar a assinatura quando quiser?
    4. Preciso ter diagnóstico de TEA/PCD para assinar?
    5. Como funciona a Assistência PET?
- Criar `docs/secoes/13-faq-video.md` com HTML/CSS pronto para Elementor (widget Video + widget Accordion).

### 6. Inversão + vídeo na última seção (`src/routes/index.tsx` + `CentralAtendimento.tsx`)
- **Nova ordem final da página**:
  1. Header
  2. Hero
  3. Benefits
  4. Plans
  5. FeaturesBar
  6. VideoSection (a atual, mantida)
  7. PartnersStats (com SVGs novos)
  8. Impact
  9. HowItWorks
  10. Testimonials
  11. About
  12. **CtaSobre** (novo — substitui Partners)
  13. **FaqVideo** (nova seção)
  14. Ambassador
  15. **Acompanhamento** ← subiu (antes do CentralAtendimento)
  16. **CentralAtendimento** ← agora com vídeo antes do botão
  17. Footer
- Em `CentralAtendimento.tsx`: adicionar o `video da ultima seção.mp4` acima do botão "CENTRAL DE ATENDIMENTO", mesmo estilo arredondado/sombra do FAQ.
- Ajustar `docs/README.md` (mapa das 18 seções) e renumerar `docs/secoes/*` conforme necessário (14 acompanhamento, 15 central, 16 footer viram 15/16/17).

### 7. Responsividade & organização (aplicado em todos os itens acima)
- Todo layout novo usa grid/flex com breakpoints `md:`/`lg:` conforme padrão do projeto.
- Cada seção continua isolada em 1 arquivo (`.tsx` + doc `.md` correspondente) para facilitar recriação no Elementor.
- Nenhuma cor/fonte nova — só reuso dos tokens `--mct-navy / teal / violet / orange`.

---

## Detalhes técnicos

**Upload de assets (executado no início do build mode):**
```bash
lovable-assets create --file /tmp/zip/parceiros1.svg   --filename parceiros-saude-1.svg  > src/assets/parceiros-saude-1.svg.asset.json
lovable-assets create --file /tmp/zip/parceiros2.svg   --filename parceiros-saude-2.svg  > src/assets/parceiros-saude-2.svg.asset.json
lovable-assets create --file /tmp/zip/video-faq.mp4    --filename video-faq.mp4          > src/assets/video-faq.mp4.asset.json
lovable-assets create --file /tmp/zip/video-ultima.mp4 --filename video-central.mp4      > src/assets/video-central.mp4.asset.json
```

**Arquivos criados/renomeados/apagados:**
- ✏️ `src/components/sections/Header.tsx` — reorganização desktop
- ✏️ `src/components/sections/Hero.tsx` — reposicionar card
- ✏️ `src/components/sections/PartnersStats.tsx` — trocar grade por 2 `<img>`
- 🗑 `src/components/sections/Partners.tsx` → substituído por `CtaSobre.tsx`
- ➕ `src/components/sections/FaqVideo.tsx`
- ✏️ `src/components/sections/CentralAtendimento.tsx` — inserir vídeo
- ✏️ `src/routes/index.tsx` — nova ordem
- ✏️ `docs/README.md`, `docs/secoes/07-parceiros-stats.md`
- 🗑 `docs/secoes/12-parceiros-logos.md` → ➕ `docs/secoes/12-cta-sobre.md`
- ➕ `docs/secoes/13-faq-video.md`
- 🔁 Renumerar `docs/secoes/14…16` para acomodar a nova seção

## O que **não** vai mudar
- Paleta, fontes, tokens de cor, textos das seções que não foram citadas (Benefits, Plans, HowItWorks, Testimonials, Ambassador, Footer etc.).
- Estrutura de config em `src/config/site.ts` (apenas leitura).
- Nenhum backend / rota / integração.

## Pontos que quero confirmar (mas não travam o plano)
- Copy do novo CTA (item 4) — se você preferir outro texto, me passa.
- 5 perguntas do FAQ (item 5) — as que sugeri são um ponto de partida; se tiver as oficiais, envia que troco durante a implementação.

Aprovando o plano, entro em build mode e faço tudo numa só rodada.