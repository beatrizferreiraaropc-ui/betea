import { createFileRoute } from "@tanstack/react-router";
import {
  Stethoscope, Brain, Shield, Tag, Check, Globe, MapPin,
  Monitor, HeartHandshake, Network, MessageCircle, Phone,
  Mail, Instagram, Facebook, Youtube, Music2, ChevronRight,
  Star, BadgeCheck, ArrowRight, Infinity as InfinityIcon,
} from "lucide-react";
import heroFamily from "@/assets/hero-family.jpg";
import ambassadors from "@/assets/ambassadors.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meu Clube TEA — Cuidado e benefícios para famílias com TEA, PCD e neurodivergentes" },
      { name: "description", content: "Telemedicina, telepsicologia, assistência funeral e descontos exclusivos para famílias com TEA, PCD e neurodivergentes." },
      { property: "og:title", content: "Meu Clube TEA" },
      { property: "og:description", content: "Cuidado especializado e benefícios transformadores para sua família." },
    ],
  }),
  component: Index,
});

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <InfinityIcon className="h-7 w-7 text-violet-light" strokeWidth={2.5} />
        <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-orange" />
      </div>
      <div className="leading-none">
        <div className="font-bold text-base">Meu Clube</div>
        <div className="text-[10px] tracking-[0.3em] text-muted-foreground">TEA</div>
      </div>
    </div>
  );
}

function Nav() {
  const items = ["Início", "Benefícios", "Planos", "Como Funciona", "Embaixadores", "Sobre Nós", "Contato"];
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="bg-violet/90 text-white text-xs text-center py-2 px-4">
        Seja acolhido pela maior comunidade de apoio. Especialistas dedicados à jornada de sua família. Atendimento 100% humanizado e transparente.
      </div>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <ul className="hidden lg:flex items-center gap-7 text-sm font-medium text-foreground/80">
          {items.map(i => <li key={i}><a href="#" className="hover:text-violet transition">{i}</a></li>)}
        </ul>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full border border-violet text-violet hover:bg-violet hover:text-white transition">Área do Cliente</a>
          <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full bg-orange text-white hover:brightness-110 transition">Quero Fazer Parte</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-28 pb-16 bg-hero-gradient text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{backgroundImage:"radial-gradient(circle at 20% 30%, oklch(0.6 0.3 320 / 0.5), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.5 0.25 260 / 0.5), transparent 40%)"}} />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-violet-light mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            Saúde, acolhimento e benefícios
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Cuidado especializado e benefícios transformadores para quem mais importa:{" "}
            <span className="text-violet-light">Sua Família</span>{" "}
            <span className="text-white">com TEA, PCD,</span>{" "}
            <span className="text-white">e neurodivergentes.</span>
          </h1>
          <p className="mt-6 text-white/80 text-lg max-w-xl">
            Transformamos desafios em vitórias diárias com telemedicina, telepsicologia, e suporte total.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#planos" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-orange text-white font-semibold hover:brightness-110 transition shadow-lg">
              Conheça Nossos Planos <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition">
              <MessageCircle className="h-4 w-4" /> Dúvidas? Chat WhatsApp
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { i: Monitor, t: "Atendimento", s: "100% online" },
              { i: HeartHandshake, t: "Apoio", s: "humanizado" },
              { i: Shield, t: "Proteção", s: "de dados" },
            ].map(({i:Icon, t, s}) => (
              <div key={t} className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon className="h-4 w-4 text-teal" />
                </div>
                <div className="text-[11px] leading-tight">
                  <div className="font-semibold">{t}</div>
                  <div className="text-white/60">{s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img src={heroFamily} alt="Família feliz" width={1024} height={1024} className="w-full h-auto object-cover" />
          </div>
          <div className="absolute -right-2 lg:right-6 bottom-8 bg-white text-foreground rounded-2xl p-5 shadow-xl max-w-[220px]">
            <div className="font-bold text-sm">Impacto que Liberta Vidas</div>
            <p className="text-xs mt-2 text-muted-foreground leading-relaxed">10% do lucro direto para causas do apoio. Mais do que benefícios, é um propósito compartilhado.</p>
            <div className="mt-3 h-12 w-12 rounded-full bg-teal flex items-center justify-center">
              <HeartHandshake className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { i: Stethoscope, c: "bg-teal", t: "Telemedicina", s: "Tranquilidade imediata" },
    { i: Brain, c: "bg-violet", t: "Telepsicologia", s: "Equilíbrio Emocional" },
    { i: Shield, c: "bg-[oklch(0.45_0.18_260)]", t: "Assistência Funeral", s: "Apoio Total em Momentos Difíceis" },
    { i: Tag, c: "bg-orange", t: "Descontos e Vantagens", s: "Economia Inteligente para o Dia-a-Dia" },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map(({i:Icon,c,t,s}) => (
          <div key={t} className="text-center">
            <div className={`mx-auto h-16 w-16 rounded-full ${c} flex items-center justify-center shadow-lg`}>
              <Icon className="h-7 w-7 text-white" />
            </div>
            <div className="mt-4 font-bold">{t}</div>
            <div className="text-sm text-muted-foreground mt-1">{s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Plans() {
  const plans = [
    {
      name: "ESSENCIAL", price: "29,90", featured: false,
      tag: null, ribbon: null,
      desc: "A porta de entrada para mais saúde, economia e tranquilidade.",
      features: ["Telemedicina Individual", "Clube de Benefícios e Descontos", "Descontos em Farmácias Parceiras", "Descontos em Clínicas e Laboratórios Parceiros", "Suporte Humanizado"],
    },
    {
      name: "FAMÍLIA PLUS", price: "69,90", featured: true,
      tag: "Recomendado por Especialistas", ribbon: null,
      desc: "Mais proteção, mais benefícios e mais tranquilidade para toda a família.",
      features: ["Tudo do Essencial Mais", "Telepsicologia Avançada...", "Assistência Funeral Familiar", "Descontos Exclusivos", "Suporte Prioritário"],
    },
    {
      name: "PROTEÇÃO TOTAL + PET", price: "99,90", featured: false,
      tag: null, ribbon: "MAIS COMPLETO",
      desc: "Proteção completa para toda a família. Inclusive seu pet.",
      features: ["Tudo do Plano Família Plus", "Assistência PET", "Descontos PET", "Coberturas Ampliadas", "Benefícios Exclusivos para toda a família"],
    },
  ];
  return (
    <section id="planos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-violet font-semibold">Planos que cabem na sua vida</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Escolha o plano ideal para você & sua família.</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map(p => (
            <div key={p.name} className={`relative rounded-2xl p-8 border ${p.featured ? "bg-violet-gradient text-white border-transparent shadow-2xl md:-mt-4 md:mb-0" : "bg-card border-border"}`}>
              {p.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet text-white text-[11px] font-semibold px-4 py-1 rounded-full whitespace-nowrap">{p.tag}</div>
              )}
              {p.ribbon && (
                <div className="absolute top-4 right-4 bg-orange text-white text-[10px] font-bold px-2 py-1 rounded">{p.ribbon}</div>
              )}
              <div className={`text-xs font-semibold tracking-widest ${p.featured ? "text-white/80" : "text-muted-foreground"}`}>PLANO</div>
              <div className="mt-1 text-2xl font-bold">{p.name}</div>
              <p className={`mt-3 text-sm ${p.featured ? "text-white/85" : "text-muted-foreground"}`}>{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-sm">R$</span>
                <span className="text-5xl font-bold">{p.price}</span>
                <span className={`text-sm ${p.featured ? "text-white/80" : "text-muted-foreground"}`}>/mês</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map(f => (
                  <li key={f} className="flex gap-2 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.featured ? "text-white" : "text-violet"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full py-3 rounded-full font-semibold text-sm transition ${p.featured ? "bg-white text-violet hover:brightness-95" : "border border-violet text-violet hover:bg-violet hover:text-white"}`}>
                QUERO ESSE PLANO
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesBar() {
  const items = [
    { i: Globe, t: "Atendimento 100% online" },
    { i: MapPin, t: "Acesso nacional" },
    { i: Monitor, t: "Plataforma digital" },
    { i: HeartHandshake, t: "Atendimento humanizado" },
    { i: Network, t: "Rede de benefícios e descontos" },
    { i: Star, t: "Foco em TEA, PCD, neurodivergentes e suas famílias" },
  ];
  return (
    <section className="py-6 px-6">
      <div className="max-w-7xl mx-auto bg-navy-gradient text-white rounded-2xl p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {items.map(({i:Icon,t}) => (
          <div key={t} className="flex flex-col items-center text-center gap-2">
            <Icon className="h-6 w-6 text-violet-light" />
            <div className="text-xs leading-tight">{t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Impact() {
  const stats = [
    { n: "+15 mil", l: "famílias atendidas" },
    { n: "+50 mil", l: "consultas realizadas" },
    { n: "+200", l: "especialistas parceiros" },
    { n: "Até 10%", l: "do lucro destinado a causas sociais" },
  ];
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_2fr] gap-8 items-center">
        <div>
          <h3 className="text-3xl font-bold">Impacto que transforma vidas</h3>
          <p className="mt-4 text-muted-foreground">Mais que benefícios, um propósito. Cada plano ajuda a construir um mundo mais inclusivo e com mais oportunidades.</p>
          <a href="#" className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full border border-violet text-violet font-semibold text-sm hover:bg-violet hover:text-white transition">CONHEÇA NOSSO IMPACTO</a>
        </div>
        <div className="bg-card rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-sm border border-border">
          {stats.map(s => (
            <div key={s.l} className="text-center">
              <div className="text-2xl font-bold text-violet">{s.n}</div>
              <div className="mt-2 text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: 1, t: "Escolha seu plano", d: "Escolha o plano que melhor atende você e sua família." },
    { n: 2, t: "Faça sua adesão", d: "Adesão rápida e segura em poucos minutos, tudo online." },
    { n: 3, t: "Acesse seus benefícios", d: "Use seus benefícios quando e onde quiser, com praticidade." },
    { n: 4, t: "Conte com a gente", d: "Nosso equipe está sempre pronto para cuidar de você e da sua família." },
  ];
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-violet font-semibold">Como Funciona</div>
          <h3 className="mt-3 text-3xl font-bold">Simples, rápido e 100% online</h3>
        </div>
        <div className="mt-12 grid md:grid-cols-4 gap-8 relative">
          {steps.map(s => (
            <div key={s.n}>
              <div className="h-10 w-10 rounded-full bg-violet text-white flex items-center justify-center font-bold">{s.n}</div>
              <div className="mt-4 font-bold">{s.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.d}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-orange text-white font-semibold hover:brightness-110 transition shadow-lg">
            QUERO FAZER PARTE AGORA <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { q: "O Meu Clube TEA mudou nossa rotina. Conseguimos atendimento rápido e humanizado quando mais precisamos.", n: "Juliana A.", r: "Mãe de menina com TEA" },
    { q: "A telepsicologia foi essencial para nosso filho. Profissionais incríveis e muito acolhedores.", n: "Carlos M.", r: "Pai de menino com TEA" },
    { q: "Os descontos e benefícios fazem toda a diferença no nosso orçamento. Super indico!", n: "Fernanda L.", r: "Mãe em nossa família TEA" },
  ];
  return (
    <section className="py-20 bg-navy-gradient text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_2fr] gap-10 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-violet-light font-semibold">Quem já faz parte, recomenda</div>
          <h3 className="mt-3 text-4xl font-bold leading-tight">Histórias reais,<br/>pessoas reais.</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {items.map(t => (
            <div key={t.n} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
              <p className="text-sm leading-relaxed">"{t.q}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-violet-light/50" />
                <div>
                  <div className="text-sm font-semibold flex items-center gap-1">{t.n} <BadgeCheck className="h-3.5 w-3.5 text-teal" /></div>
                  <div className="text-[11px] text-white/60">{t.r}</div>
                </div>
              </div>
              <div className="mt-2 flex gap-0.5">
                {[...Array(5)].map((_,i)=><Star key={i} className="h-3 w-3 fill-orange text-orange"/>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const names = ["ExpoTEA", "GIRO1", "UNIESUD", "TEMSaúde", "Clube Certo", "XV de Piracicaba"];
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-violet font-semibold">Quem caminha com a gente</div>
        <h3 className="mt-3 text-3xl font-bold">Parceiros que fortalecem nosso propósito.</h3>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {names.map(n => (
            <div key={n} className="h-16 rounded-xl border border-border flex items-center justify-center font-bold text-foreground/70 hover:text-violet hover:border-violet transition">
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ambassador() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto rounded-3xl bg-hero-gradient text-white p-10 lg:p-14 grid lg:grid-cols-2 gap-10 items-center overflow-hidden relative">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-violet-light font-semibold">Seja um embaixador de mudança</div>
          <h3 className="mt-3 text-4xl font-bold leading-tight">Seja um Agente de Mudança.<br/>Seja o exemplo e prospere.</h3>
          <p className="mt-4 text-white/80">Indique o Meu Clube TEA e ganhe comissões em famílias.</p>
          <ul className="mt-5 space-y-2 text-sm">
            <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5 text-teal"/>20% de comissão na primeira mensalidade</li>
            <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5 text-teal"/>3% de comissão recorrente por 3 meses</li>
            <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5 text-teal"/>Histórico e sacando com clareza</li>
            <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5 text-teal"/>Liberdade para trabalhar onde estiver</li>
          </ul>
          <a href="#" className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-orange text-white font-semibold hover:brightness-110 transition shadow-lg">
            QUERO SER EMBAIXADOR <ArrowRight className="h-4 w-4"/>
          </a>
        </div>
        <div className="relative">
          <img src={ambassadors} alt="Embaixadores" loading="lazy" width={1024} height={768} className="rounded-2xl shadow-2xl w-full" />
          <div className="absolute top-6 right-6 flex flex-col gap-3">
            <div className="bg-violet/90 backdrop-blur rounded-xl px-4 py-3 text-center">
              <div className="text-3xl font-bold">20%</div>
              <div className="text-[10px] text-white/80">1ª mensalidade</div>
            </div>
            <div className="bg-white/95 text-foreground rounded-xl px-4 py-3 text-center">
              <div className="text-3xl font-bold text-violet">3%</div>
              <div className="text-[10px] text-muted-foreground">recorrente por 3 meses</div>
            </div>
          </div>
          <div className="mt-5 hidden lg:flex flex-col gap-1 text-sm">
            <div className="flex gap-2 text-white/90"><ChevronRight className="h-4 w-4 text-teal"/>Renda com propósito</div>
            <div className="flex gap-2 text-white/90"><ChevronRight className="h-4 w-4 text-teal"/>Impacto real</div>
            <div className="flex gap-2 text-white/90"><ChevronRight className="h-4 w-4 text-teal"/>Liberdade financeira</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto rounded-2xl bg-violet text-white p-8 grid md:grid-cols-[1fr_auto] gap-4 items-center">
        <p className="text-sm md:text-base">Receba novidades, dicas e conteúdos exclusivos sobre inclusão, saúde e benefícios.</p>
        <form className="flex gap-2 w-full md:w-auto">
          <input type="email" placeholder="Seu melhor e-mail" className="flex-1 md:w-72 px-4 py-3 rounded-full text-foreground text-sm outline-none bg-white" />
          <button className="px-5 py-3 rounded-full bg-orange font-semibold text-sm whitespace-nowrap hover:brightness-110 transition">QUERO RECEBER →</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { t: "Navegação", l: ["Início","Benefícios","Planos","Como Funciona","Embaixadores","Sobre Nós"] },
    { t: "Benefícios", l: ["Telemedicina","Telepsicologia","Assistência Funeral","Descontos e Vantagens","Assistência PET"] },
    { t: "Ajuda", l: ["Perguntas Frequentes","Política de Privacidade","Termos de Uso","Fale Conosco"] },
  ];
  return (
    <footer className="bg-navy-deep text-white/80 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-4 text-xs leading-relaxed text-white/60">Cuidado, acolhimento e benefícios para pessoas com TEA, PCD, neurodivergentes e suas famílias.</p>
          <div className="mt-4 flex gap-3 text-white/70">
            <Instagram className="h-4 w-4"/><Facebook className="h-4 w-4"/><Youtube className="h-4 w-4"/><Music2 className="h-4 w-4"/>
          </div>
        </div>
        {cols.map(c => (
          <div key={c.t}>
            <div className="font-bold text-white text-xs tracking-widest uppercase">{c.t}</div>
            <ul className="mt-4 space-y-2 text-sm">
              {c.l.map(i => <li key={i}><a href="#" className="hover:text-violet-light transition">{i}</a></li>)}
            </ul>
          </div>
        ))}
        <div>
          <div className="font-bold text-white text-xs tracking-widest uppercase">Atendimento</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5"/>(11) 00000-0000</li>
            <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5"/>contato@meuclubetea.com.br</li>
            <li className="flex items-start gap-2"><MapPin className="h-3.5 w-3.5 mt-1"/>Segunda à Sexta 9h-18h<br/>Sábado 9h às 13h</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/50">
        <div>GRUPO GIRO1 · SAÚDE — Rua Cel. José Eurálito, 95 · Casa 19 · Higienópolis · São Paulo/SP · CEP 01215-080</div>
        <div>© 2026 Meu Clube TEA. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <Benefits />
      <Plans />
      <FeaturesBar />
      <Impact />
      <HowItWorks />
      <Testimonials />
      <Partners />
      <Ambassador />
      <Newsletter />
      <Footer />
    </main>
  );
}
