# Seção 13 · Vídeo + Perguntas Frequentes

Duas colunas no desktop: vídeo à esquerda, accordion de FAQ à direita.
No mobile, empilha (vídeo em cima).

## Estrutura (Elementor)

```
Section [.mct-faq] — Fundo: branco
└── Container 2 col (50/50 no desktop, 1 col no mobile)
    ├── Video widget          .mct-faq__video    (autoplay muted loop, controls)
    └── Inner Container       .mct-faq__col
        ├── Heading eyebrow   "TIRE SUAS DÚVIDAS"
        ├── Heading H2        "Perguntas Frequentes"
        ├── Text lead
        └── Accordion         .mct-faq__acc  (5 itens)
```

## Widgets nativos
- Video (self-hosted, arquivo `video-faq.mp4` na Mídia)
- Heading × 2, Text-editor × 1
- Accordion nativo do Elementor Pro (5 itens)

## Conteúdo do FAQ

1. **Como funcionam as consultas por telemedicina?**
   Você agenda pelo site ou WhatsApp e é atendido por videochamada, direto do computador ou celular, sem sair de casa e sem filas.
2. **O Meu Clube TEA atende em todo o Brasil?**
   Sim. Nossa rede cobre 26 estados + DF, com mais de 1.700 municípios atendidos por telemedicina, telepsicologia e parceiros presenciais.
3. **Posso cancelar a assinatura quando quiser?**
   Sim. A assinatura é mensal, sem fidelidade e sem burocracia. O cancelamento pode ser feito com um toque, direto pela sua área do cliente.
4. **Preciso ter diagnóstico de TEA ou PCD para assinar?**
   Não. Os planos são abertos a pessoas com TEA, PCD, neurodivergentes e a toda família que busca mais saúde, economia e tranquilidade no dia a dia.
5. **Como funciona a Assistência PET?**
   Você conta com veterinário online e descontos exclusivos em produtos e serviços para o seu pet, incluído nos planos que oferecem esse benefício.

## CSS

```css
.mct-faq{ padding:80px 24px; background:#fff; }
.mct-faq > .e-con-inner{
  max-width:1280px; margin:0 auto;
  display:grid !important; grid-template-columns:1fr 1fr; gap:56px; align-items:center;
}
.mct-faq__video{ border-radius:24px; overflow:hidden; box-shadow:var(--mct-shadow-lg); }
.mct-faq__col h2{ font-size:32px; font-weight:800; color:var(--mct-text); margin-top:12px; }
.mct-faq__col h2 .navy{ color:var(--mct-navy); }
.mct-faq__acc .elementor-accordion-title{ font-weight:600; color:var(--mct-text); }

@media (max-width:1023px){
  .mct-faq > .e-con-inner{ grid-template-columns:1fr; gap:32px; }
}
```
