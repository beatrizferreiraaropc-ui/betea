# 📚 MEU CLUBE TEA — Guia de migração para WordPress + Elementor Pro

Este projeto foi construído **modularmente**, com **1 componente React por seção**
do site. Para você migrar tudo para o seu WordPress já existente (que roda
**WooCommerce** + **Elementor Pro** + sistema de afiliados), criamos esta
documentação dividida em **1 arquivo por seção**.

---

## 📁 Estrutura

```
docs/
├── README.md                  ← este arquivo
├── 00-paleta-tokens.md        ← cores, tipografia, breakpoints, gradientes
├── secoes/
│   ├── 01-header.md
│   ├── 02-hero.md
│   ├── 03-beneficios.md
│   ├── 04-planos.md
│   ├── 05-features-bar.md
│   ├── 06-videos.md
│   ├── 07-audios.md
│   ├── 08-parceiros-stats.md
│   ├── 09-impacto.md
│   ├── 10-como-funciona.md
│   ├── 11-depoimentos.md
│   ├── 12-sobre.md
│   ├── 13-parceiros-logos.md
│   ├── 14-embaixadores.md
│   ├── 15-newsletter.md
│   └── 16-footer.md
```

Cada arquivo de seção contém:

1. **Print + objetivo** da seção
2. **Cores e tokens** usados (hex)
3. **Tipografia** (família, tamanho desktop / tablet / mobile)
4. **Estrutura Elementor** (Section → Container → Widgets recomendados)
5. **HTML pronto** para colar no widget **HTML** ou **Container > HTML personalizado**
6. **CSS avançado** pronto para colar em **Avançado → CSS personalizado**
7. **Links / URLs** a configurar (botões, produtos WooCommerce, redes sociais)
8. **Responsividade** — comportamento mobile (≤767px) e tablet (768–1023px)

---

## 🎨 Paleta oficial (briefing)

| Token            | HEX       | Uso |
|------------------|-----------|-----|
| Navy             | `#0B2E8A` | Cor principal (saúde, confiança) |
| Navy Card        | `#12389E` | Cards da seção Embaixadores |
| Navy Deep        | `#061C5C` | Footer e gradientes navy |
| Teal             | `#00B8D9` | Tecnologia / Telemedicina |
| Violet           | `#7B2FF7` | Inclusão / Telepsicologia |
| Indigo gradient  | `#4A3AFF` | Meio do gradiente principal |
| Orange CTA       | `#FF8A00` | Botões e conversão |
| Orange Hover     | `#FF9F2E` | Hover do botão CTA |
| White            | `#FFFFFF` | — |
| Cinza Claro      | `#F5F7FA` | Fundo seção Planos |
| Texto Escuro     | `#1B2540` | Cor de texto padrão |

**Gradiente oficial:**
```css
background: linear-gradient(90deg, #0B2E8A 0%, #4A3AFF 50%, #7B2FF7 100%);
```

---

## 🔤 Tipografia

- **Família:** `Plus Jakarta Sans` (Google Fonts) — já carregada no `<head>`.
- **Pesos:** 400 (texto), 600 (CTA), 700 (títulos), 800 (hero).
- **Letter-spacing** em títulos: `-0.02em`.

No Elementor: **Site Settings → Typography → Default Heading/Body Font** → `Plus Jakarta Sans`.

---

## 📱 Breakpoints

| Dispositivo | Largura       | Tailwind |
|-------------|---------------|----------|
| Mobile      | ≤ 767px       | (base)   |
| Tablet      | 768 – 1023px  | `md:`    |
| Desktop     | ≥ 1024px      | `lg:`    |

No Elementor use **Site Settings → Layout → Breakpoints**:
- Mobile: 767
- Tablet: 1024
- Laptop/Desktop: 1280+

---

## ✏️ Onde editar conteúdo do protótipo React

Tudo está centralizado em **`src/config/site.ts`** — URLs, telefones, e-mails,
preços, benefícios dos planos, vídeos, áudios, embaixador, etc.

Você edita **um arquivo só** e o site todo se atualiza.

---

## 🛒 WooCommerce — Links de produto dos planos

Edite `src/config/site.ts → planos[].productUrl` ou siga a tabela em
`secoes/04-planos.md`.

---

## ✅ Checklist antes de migrar para WP

- [ ] Substituir as imagens (`src/assets/hero-family.jpg`, `ambassadors.jpg`) pelas finais do cliente.
- [ ] Trocar URLs em `src/config/site.ts` pelos slugs reais do WooCommerce.
- [ ] Adicionar embeds dos vídeos (apresentação + 3 verticais).
- [ ] Adicionar URLs dos áudios (MP3 ou embed Spotify/SoundCloud).
- [ ] Verificar logos de parceiros (texto → trocar por `<img>` no WP).
- [ ] Conferir contato (telefone, e-mail, endereço) em `site.contato`.
