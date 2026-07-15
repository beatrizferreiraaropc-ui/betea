# MEU CLUBE TEA — Guia de migração para WordPress + Elementor Pro

Site montado **somente com widgets nativos** do Elementor / Elementor Pro
(sem widget de HTML). Cada seção da landing tem um arquivo próprio em
`docs/secoes/` com:

1. **Widgets nativos** usados (Heading, Image, Icon Box, Button, etc.)
2. **Estrutura** de Section / Container (colunas, alinhamento, padding)
3. **CSS Classes** para colar na aba `Avançado → CSS Classes` de cada widget
4. **CSS personalizado** (1 bloco por seção) para colar em
   `Editar Section → Avançado → CSS personalizado`
5. **Conteúdo** (textos, links, ícones) pronto para copiar
6. **Responsividade** (mobile / tablet / desktop)

> Você nunca precisa colar HTML em widget. As classes + o CSS dão o visual,
> o Elementor cuida da estrutura.

---

## Ordem das seções no site

| # | Arquivo                          | Componente React              |
|---|----------------------------------|-------------------------------|
| 01 | `01-header.md`                  | `Header.tsx`                  |
| 02 | `02-hero.md`                    | `Hero.tsx`                    |
| 03 | `03-beneficios.md`              | `Benefits.tsx`                |
| 04 | `04-planos.md`                  | `Plans.tsx`                   |
| 05 | `05-features-bar.md`            | `FeaturesBar.tsx`             |
| 06 | `06-videos.md`                  | `VideoSection.tsx`            |
| 07 | `07-parceiros-stats.md`         | `PartnersStats.tsx`           |
| 08 | `08-impacto.md`                 | `Impact.tsx`                  |
| 09 | `09-como-funciona.md`           | `HowItWorks.tsx`              |
| 10 | `10-depoimentos.md`             | `Testimonials.tsx`            |
| 11 | `11-sobre.md`                   | `About.tsx`                   |
| 12 | `12-cta-sobre.md`               | `CtaSobre.tsx`                |
| 13 | `13-faq-video.md`               | `FaqVideo.tsx`                |
| 14 | `14-embaixadores.md`            | `Ambassador.tsx`              |
| 15 | `15-acompanhamento.md`          | `Acompanhamento.tsx`          |
| 16 | `16-central-atendimento.md`     | `CentralAtendimento.tsx`      |
| 17 | `17-footer.md`                  | `Footer.tsx`                  |

A ordem acima é exatamente a ordem em que as seções devem aparecer na página.

> **Importante:** a seção 16 (`Central de Atendimento`) é um bloco branco
> que **sobrepõe** o final do bloco 14 (Embaixadores) usando margem
> negativa. Veja o CSS desse arquivo.


---

## Ordem de execução (faça uma vez antes de começar)

1. **Site Settings → Layout → Breakpoints**
   - Mobile: `767`   · Tablet: `1024`   · Laptop: `1366`
2. **Site Settings → Custom CSS** — cole o bloco do arquivo
   `00-paleta-tokens.md` (variáveis, fonte, botões padrão).
3. **Site Settings → Custom Code → `<head>`** — cole o `<link>` do Google
   Fonts (Plus Jakarta Sans) que está em `00-paleta-tokens.md`.
4. **Site Settings → Typography** — Default Heading / Default Body →
   `Plus Jakarta Sans`.
5. Comece pelo Header (`01-header.md`) e siga a ordem dos arquivos.

---

## Convenção das classes

Todas começam com `mct-` (Meu Clube TEA). Padrão BEM simplificado:

| Classe                | Onde atribuir                            |
|-----------------------|------------------------------------------|
| `mct-hero`            | Section do Hero                          |
| `mct-hero__badge`     | Heading do badge                         |
| `mct-hero__cta`       | Button do CTA principal                  |
| `mct-plan--destaque`  | Coluna do plano em destaque              |
| `mct-amb__card`       | Card interno da seção Embaixadores       |

Cada arquivo de seção lista exatamente quais classes ir colando em quais
widgets — não precisa decorar nada.

---

## Paleta oficial (pastel · base `#3F74C2`)

| Token       | HEX        | Uso                                  |
|-------------|------------|--------------------------------------|
| Navy        | `#3F74C2`  | Azul principal (banner, embaixadores) |
| Navy Deep   | `#2E5A9E`  | Topo dos gradientes navy             |
| Teal        | `#7FC8D4`  | Cuidado                              |
| Violet      | `#B8A4E8`  | Inclusão                             |
| Orange      | `#F3A35C`  | CTAs                                 |
| Bg Soft     | `#F5F7FB`  | Fundos suaves                        |
| Texto       | `#1F2A44`  | Texto padrão                         |

Variáveis CSS, gradientes e botões prontos estão em `00-paleta-tokens.md`.

---

## Onde editar o conteúdo no protótipo React

Tudo (textos, links, telefone, e-mail, preços, vídeos) está em
`src/config/site.ts`. Para migrar pro WordPress, copie os textos de lá.
Para mudar o protótipo, edite só esse arquivo.

---

## Imagens / assets

| Asset                  | Onde aparece                              |
|------------------------|-------------------------------------------|
| `logo-meu-clube-tea.png` | Header, Footer, Central de Atendimento |
| `fundo-banner.png`     | Hero (desktop)                           |
| `fundo-banner-mobi.png`| Hero (mobile)                            |
| `familia-cachorro.png` | Seção 11 · Sobre                         |

Faça upload dessas imagens em **Mídia** antes de começar a montagem.

---

## Checklist final antes de publicar

- [ ] Logo + imagens (hero, sobre) enviadas em Mídia
- [ ] Variáveis CSS coladas em Site Settings → Custom CSS
- [ ] Google Fonts no `<head>`
- [ ] Breakpoints configurados (767 / 1024 / 1366 / 1920)
- [ ] URLs dos produtos WooCommerce no botão de cada plano (seção 04)
- [ ] URLs dos vídeos verticais e do vídeo de apresentação (seção 06)
- [ ] Telefone, e-mail e horário do rodapé conferidos
- [ ] Link WhatsApp + link Área do Cliente conferidos
- [ ] Sobreposição visual entre seções 13 → 14 conferida no preview
