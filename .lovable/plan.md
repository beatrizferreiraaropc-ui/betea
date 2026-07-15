## Objetivo
Deixar o projeto enxuto e "pronto para portar" ao WordPress/Elementor Pro. Nada de comentário explicativo, código antigo, tokens de paleta não usados, plano interno ou docs fora de sincronia. Só o código final + documentação Elementor 1:1 com o site.

---

## 1. Remover arquivos de trabalho interno
- `.lovable/plan.md` — briefing do refino glass, já executado.
- `docs/README.md` — será reescrito enxuto (ver §4).
- `docs/00-paleta-tokens.md` — será reescrito com a paleta pastel final (ver §4).

## 2. Limpar `src/styles.css`
- Remover o bloco de comentário `===== PALETA OFICIAL — MEU CLUBE TEA (PASTEL) =====` (só documentação).
- Remover comentário `/* GRADIENTES — somente azul pastel, sem roxo no fim */` e `/* ===== GLASSMORPHISM — estilo "Apple/futurista" ===== */`.
- Manter todos os tokens e `@utility` que estão em uso (todos os atuais são usados). Nada a remover de código — só os comentários.

## 3. Limpar componentes em `src/components/sections/*.tsx`
Para cada um dos 18 arquivos:
- Remover o bloco JSDoc no topo (`/** SEÇÃO: ... */`) — o nome do arquivo já identifica.
- Remover comentários de linha do tipo `// -- bloco X`, `// TODO`, `// NOTE`, e comentários que só reexplicam o JSX.
- **Manter** apenas comentários funcionais raros que expliquem um hack não óbvio (não deve haver nenhum após a passagem).
- Não mexer em JSX, classes, imports ou lógica.

Também revisar `src/routes/index.tsx` e remover o comentário `/** LANDING PAGE — MEU CLUBE TEA ... */` e o `// Ordem final...`.

## 4. Reescrever documentação Elementor (`docs/`)
Objetivo: 1 pasta, arquivos numerados, cada um autocontido com HTML/estrutura de widgets + CSS pronto para colar. Sem histórico, sem "antes/depois", sem menções a refino ou versões antigas.

Estrutura final de `docs/`:
```
docs/
├── README.md              (guia curto: ordem, paleta, convenção mct-*, checklist)
├── 00-paleta-tokens.md    (paleta pastel final + utilitários glass/gradientes)
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
    ├── 12-cta-sobre.md
    ├── 13-faq-video.md
    ├── 14-embaixadores.md
    ├── 15-acompanhamento.md
    ├── 16-central-atendimento.md
    └── 17-footer.md
```

Cada `secoes/NN-*.md` segue o mesmo template enxuto:
1. Título e objetivo (2 linhas).
2. Estrutura de containers/widgets nativos do Elementor.
3. Conteúdo (textos/links em tabela).
4. Tabela de classes CSS `mct-*`.
5. Bloco único de **CSS personalizado** pronto para colar em *Avançado → CSS personalizado*.
6. Regras de responsividade (mobile/tablet/desktop).

`00-paleta-tokens.md` traz:
- Tokens `--mct-*` finais (navy, navy-deep, violet, violet-light, teal, orange, peach, blue-soft, text, muted, shadow-sm/md/lg).
- Gradientes usados (`hero`, `navy-soft`, `ambassador`, `violet`, `cta`, `mist`, `mist-down`).
- Classes utilitárias `glass-pill`, `glass-card`, `glass-dark`, `gradient-border-1`, `shadow-orange-halo` com o CSS equivalente.

`README.md` traz só: ordem das 17 seções, paleta resumida, convenção `mct-nomeSecao__elemento`, e checklist de import no Elementor (Kit de cores → colar tokens → Theme Builder Header/Footer → páginas).

## 5. Verificação final
- `bun run build` (ou o build automático do harness) — garantir zero erro após remoção de comentários.
- Grep de sanidade: `rg "TODO|FIXME|SEÇÃO:|LANDING PAGE"` deve retornar vazio em `src/`.
- Grep de paleta antiga: `rg "#6B4E9E|#8B5CF6|#1E3A8A"` (roxos/azuis fortes antigos) deve retornar vazio em `src/` e `docs/`.

## O que NÃO muda
- Nenhum componente, rota, asset ou lógica é alterado.
- Nenhuma seção some ou é adicionada.
- Paleta, textos, layout, responsividade — tudo permanece exatamente como está hoje no preview.

Aprovando, executo tudo numa rodada (edições em paralelo por arquivo) e rodo a verificação.
