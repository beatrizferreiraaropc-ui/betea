# MEU CLUBE TEA — Guia de migração WordPress + Elementor Pro

Este guia foi escrito para você montar o site **usando apenas widgets nativos do
Elementor / Elementor Pro** (sem widget de HTML). Cada seção do site tem um
arquivo próprio em `docs/secoes/` com:

1. **Widgets nativos** que você vai usar (Heading, Image, Icon Box, Button, etc.)
2. **Estrutura de Section / Container** (colunas, alinhamento, padding)
3. **CSS Classes** que você atribui em cada widget na aba `Avançado → CSS Classes`
4. **CSS personalizado** (1 bloco por seção) — colar em
   `Editar Section → Avançado → CSS personalizado`
5. **Conteúdo** (textos, links, cores, ícones) já pronto pra copiar
6. **Responsividade** — comportamento mobile / tablet / desktop

> Você não precisa colar HTML em lugar nenhum. As classes e o CSS dão o visual,
> o Elementor cuida da estrutura.

---

## Estrutura de arquivos

```
docs/
├── README.md                ← este arquivo
├── 00-paleta-tokens.md      ← variáveis CSS globais (cole 1 vez no Site Settings)
└── secoes/
    ├── 01-header.md
    ├── 02-hero.md
    ├── 03-beneficios.md
    ├── 04-planos.md
    ├── 05-features-bar.md
    ├── 06-videos.md
    ├── 07-parceiros-stats.md
    ├── 08-impacto.md
    ├── 09-como-funciona.md
    ├── 10-depoimentos.md
    ├── 11-sobre.md
    ├── 12-parceiros-logos.md
    ├── 13-embaixadores.md
    └── 14-footer.md
```

A ordem das seções no site é exatamente essa.

---

## Ordem de execução (faça uma vez antes de começar)

1. **Site Settings → Layout → Breakpoints**
   - Mobile: `767`
   - Tablet: `1024`
   - Laptop: `1366`
2. **Site Settings → Custom CSS** — cole o bloco do arquivo
   `00-paleta-tokens.md` (variáveis, fonte, botões padrão).
3. **Site Settings → Custom Code → `<head>`** — cole o `<link>` do Google Fonts
   (Plus Jakarta Sans) que está em `00-paleta-tokens.md`.
4. **Site Settings → Typography** — Default Heading / Default Body →
   `Plus Jakarta Sans`.
5. Comece pelo Header (`01-header.md`) e siga a ordem dos arquivos.

---

## Convenção das classes

Todas as classes começam com `mct-` (Meu Clube TEA), seguidas pelo nome da
seção. Exemplo:

| Classe              | Onde atribuir                              |
|---------------------|--------------------------------------------|
| `mct-hero`          | Section do Hero                            |
| `mct-hero__badge`   | Heading widget do badge                    |
| `mct-hero__cta`     | Button widget do CTA principal             |
| `mct-plan--destaque`| Coluna do plano em destaque                |

Você **não precisa decorar nada** — cada arquivo de seção lista exatamente quais
classes ir colando em quais widgets.

---

## Paleta oficial

| Token              | HEX        | Uso                                |
|--------------------|------------|------------------------------------|
| Navy               | `#0B2E8A`  | Cor principal                      |
| Navy Card          | `#12389E`  | Cards Embaixadores                 |
| Navy Deep          | `#061C5C`  | Footer / topo de gradientes navy   |
| Teal               | `#00B8D9`  | Tecnologia / Telemedicina          |
| Violet             | `#7B2FF7`  | Inclusão / Telepsicologia          |
| Indigo             | `#4A3AFF`  | Meio do gradiente do Hero          |
| Orange             | `#FF8A00`  | CTAs e conversão                   |
| Orange Hover       | `#FF9F2E`  | Hover do CTA                       |
| Cinza Claro        | `#F5F7FA`  | Fundo da seção Planos              |
| Texto              | `#1B2540`  | Texto padrão                       |
| Borda Suave        | `#E5E9F0`  | Bordas de cards                    |

Gradientes oficiais estão em `00-paleta-tokens.md`.

---

## Onde editar o conteúdo no protótipo React

Tudo (textos, links, telefone, e-mail, preços, vídeos) está em
`src/config/site.ts`. Quando for migrar pro WordPress, copie os textos
de lá. Para mudar o protótipo, edite só esse arquivo.

---

## Checklist final antes de publicar no WP

- [ ] Logo enviada em **Mídia** (`logo-meu-clube-tea.png`).
- [ ] Imagens do hero (`fundo-banner.png` e `fundo-banner-mobi.png`) em Mídia.
- [ ] Foto da seção Embaixadores em Mídia.
- [ ] URLs dos produtos WooCommerce no botão de cada plano (seção 04).
- [ ] URLs dos vídeos verticais e do vídeo de apresentação (seção 06).
- [ ] Logos de parceiros (seções 07 e 12) em Mídia.
- [ ] Telefone, e-mail e horário do rodapé conferidos.
- [ ] Link de WhatsApp e link da Área do Cliente conferidos.
