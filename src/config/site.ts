/**
 * ============================================================
 *  MEU CLUBE TEA — CONFIGURAÇÃO CENTRAL
 *  Edite TODOS os links, textos e URLs neste arquivo.
 *  Cada chave abaixo é usada por uma seção do site.
 * ============================================================
 */

export const site = {
  brand: {
    name: "Meu Clube TEA",
    domain: "www.meuclubetea.com.br",
    tagline: "Cuidado • Inclusão • Benefícios",
  },

  // ---------- LINKS GLOBAIS ----------
  links: {
    home: "/",
    clienteArea: "https://meuclubetea.com.br/minha-conta/",
    queroFazerParte: "https://meuclubetea.com.br/planos/",
    whatsapp: "https://wa.me/5511999999999?text=Ol%C3%A1%21+Quero+saber+mais+sobre+o+Meu+Clube+TEA",
    instagram: "https://www.instagram.com/MeuClubeTea",
    facebook: "https://www.facebook.com/MeuClubeTea",
    youtube: "https://www.youtube.com/@MeuClubeTea",
    tiktok: "https://www.tiktok.com/@MeuClubeTea",
    embaixador: "https://meuclubetea.com.br/seja-embaixador/",
    agendarConsulta: "https://meuclubetea.com.br/agendar/",
    impacto: "https://meuclubetea.com.br/impacto-social/",
    newsletter: "https://meuclubetea.com.br/newsletter/",
    politicaPrivacidade: "https://meuclubetea.com.br/politica-de-privacidade/",
    termosUso: "https://meuclubetea.com.br/termos-de-uso/",
    faq: "https://meuclubetea.com.br/faq/",
    contato: "https://meuclubetea.com.br/contato/",
    sobre: "https://meuclubetea.com.br/sobre/",
  },

  // ---------- MENU ----------
  nav: [
    { label: "Início", href: "#hero" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Planos", href: "#planos" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Embaixadores", href: "#embaixadores" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ],

  // ---------- CONTATO ----------
  contato: {
    telefone: "(11) 00000-0000",
    telefoneHref: "tel:+551100000000",
    email: "contato@meuclubetea.com.br",
    horario: ["Segunda à Sexta — 9h às 18h", "Sábado — 9h às 13h"],
    endereco:
      "GRUPO GIRO1 · SAÚDE — Rua Cel. José Eurálito, 95 · Casa 19 · Higienópolis · São Paulo/SP · CEP 01215-080",
  },

  // ---------- PLANOS (WooCommerce) ----------
  // Substitua productUrl pelo link do produto no WooCommerce
  planos: [
    {
      id: "essencial",
      nome: "PLANO ESSENCIAL",
      cor: "#7FC8D4",
      destaque: false,
      ribbon: null,
      tag: null,
      preco: "29,90",
      descricao: "A porta de entrada para mais saúde, economia e tranquilidade.",
      beneficios: [
        "Telemedicina Individual",
        "Clube de Benefícios e Descontos",
        "Descontos em Farmácias Parceiras",
        "Descontos em Clínicas e Laboratórios Parceiros",
        "Suporte Humanizado",
      ],
      productUrl: "https://meuclubetea.com.br/produto/plano-essencial/",
      ctaLabel: "QUERO ESSE PLANO",
    },
    {
      id: "familia",
      nome: "PLANO FAMÍLIA",
      cor: "#B8A4E8",
      destaque: true,
      ribbon: null,
      tag: "Recomendado por Especialistas",
      preco: "69,90",
      descricao: "Mais proteção, mais benefícios e mais tranquilidade para toda a família.",
      beneficios: [
        "Tudo do Essencial",
        "Telepsicologia Avançada",
        "Assistência Funeral Familiar",
        "Descontos Exclusivos",
        "Suporte Prioritário",
      ],
      productUrl: "https://meuclubetea.com.br/produto/plano-familia/",
      ctaLabel: "QUERO ESSE PLANO",
    },
    {
      id: "protecao-total",
      nome: "PLANO PROTEÇÃO TOTAL",
      cor: "#3F74C2",
      destaque: false,
      ribbon: "MAIS COMPLETO",
      tag: null,
      preco: "99,90",
      descricao: "Proteção completa para toda a família. Inclusive o seu PET.",
      beneficios: [
        "Tudo do Plano Família",
        "Assistência PET",
        "Descontos PET",
        "Coberturas Ampliadas",
        "Benefícios Exclusivos para toda a família",
      ],
      productUrl: "https://meuclubetea.com.br/produto/plano-protecao-total/",
      ctaLabel: "QUERO ESSE PLANO",
    },
  ],

  // ---------- VÍDEOS ----------
  // Cole aqui o URL de embed do YouTube/Vimeo ou um arquivo .mp4.
  // Formatos do cliente: horizontal 1920x1080, vertical 1080x1920.
  videos: {
    apresentacao: {
      titulo: "Conheça o Meu Clube TEA",
      subtitulo: "Assista em 1 minuto como transformamos a rotina de famílias atípicas.",
      // Ex.: "https://www.youtube.com/embed/SEU_VIDEO_ID"
      embedUrl: "",
      poster: "", // imagem de capa enquanto o vídeo não toca
    },
    depoimentos: {
      titulo: "Histórias que inspiram",
      // Lista de vídeos verticais (Reels/Shorts) — 1080x1920
      items: [
        { nome: "Juliana A.", embedUrl: "", poster: "" },
        { nome: "Carlos M.", embedUrl: "", poster: "" },
        { nome: "Fernanda L.", embedUrl: "", poster: "" },
      ],
    },
  },

  parceiros: [
    { nome: "ExpoTEA", url: "#" },
    { nome: "GIRO1", url: "#" },
    { nome: "UNIESUD", url: "#" },
    { nome: "TEMSaúde", url: "#" },
    { nome: "Clube Certo", url: "#" },
    { nome: "XV de Piracicaba", url: "#" },
  ],

  // ---------- EMBAIXADOR ----------
  embaixador: {
    comissaoPrimeira: "20%",
    comissaoRecorrente: "3%",
    mesesRecorrencia: 12,
    ctaUrl: "https://meuclubetea.com.br/seja-embaixador/",
  },

  // ---------- IMPACTO ----------
  impacto: {
    familias: "+15 mil",
    consultas: "+50 mil",
    especialistas: "+200",
    lucroDoacao: "Até 10%",
  },

  // ---------- SOBRE ----------
  sobre: {
    titulo: "Sobre o Meu Clube TEA",
    subtitulo: "Cuidado, inclusão e benefícios para quem mais precisa.",
    paragrafos: [
      "O Meu Clube TEA nasceu com um propósito simples e poderoso: tornar o cuidado mais acessível para pessoas com Transtorno do Espectro Autista (TEA), pessoas com deficiência (PCD), neurodivergentes e suas famílias.",
      "Sabemos que a jornada de quem convive com o autismo e outras condições neurodivergentes é repleta de desafios. Consultas, terapias, medicamentos, deslocamentos e despesas do dia a dia fazem parte da realidade de milhares de famílias brasileiras.",
      "Foi pensando nisso que criamos uma plataforma que une saúde, acolhimento, benefícios e economia em um único lugar. Mais do que um clube de benefícios, somos uma rede de apoio construída para oferecer praticidade, segurança e qualidade de vida.",
    ],
    missao:
      "Promover inclusão, acolhimento e acesso a serviços essenciais, contribuindo para uma vida mais digna, saudável e tranquila para milhares de famílias.",
    visao:
      "Ser a maior comunidade de benefícios, cuidado e apoio para pessoas com TEA, PCD, neurodivergentes e seus familiares no Brasil.",
    valores: [
      "Inclusão",
      "Respeito",
      "Empatia",
      "Acessibilidade",
      "Transparência",
      "Compromisso Social",
      "Humanização",
    ],
  },
} as const;

export type Plano = (typeof site.planos)[number];
