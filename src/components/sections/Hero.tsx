import { ArrowRight, MessageCircle, Monitor, HeartHandshake, Shield } from "lucide-react";
import heroFamily from "@/assets/hero-family.jpg";
import { site } from "@/config/site";

// SEÇÃO: HERO
// Conteúdo principal, headline e CTAs.
export function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-16 bg-hero-gradient text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(123,47,247,0.45), transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,184,217,0.35), transparent 40%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-teal mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            Saúde, acolhimento e benefícios
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Cuidado especializado e benefícios transformadores para quem mais importa:{" "}
            <span className="text-violet-light">Sua Família</span>{" "}
            <span className="text-white">com TEA, PCD</span>{" "}
            <span className="text-white">e neurodivergentes.</span>
          </h1>
          <p className="mt-6 text-white/85 text-lg max-w-xl">
            Transformamos desafios em vitórias diárias com telemedicina, telepsicologia e suporte total.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#planos" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-orange text-white font-semibold hover:brightness-110 transition shadow-lg">
              Conheça Nossos Planos <ArrowRight className="h-4 w-4" />
            </a>
            <a href={site.links.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition">
              <MessageCircle className="h-4 w-4" /> Dúvidas? Chat WhatsApp
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { i: Monitor, t: "Atendimento", s: "100% online" },
              { i: HeartHandshake, t: "Apoio", s: "humanizado" },
              { i: Shield, t: "Proteção", s: "de dados" },
            ].map(({ i: Icon, t, s }) => (
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
            <img src={heroFamily} alt="Família feliz acolhida pelo Meu Clube TEA" width={1024} height={1024} className="w-full h-auto object-cover" />
          </div>
          <div className="absolute -right-2 lg:right-6 bottom-8 bg-white text-foreground rounded-2xl p-5 shadow-xl max-w-[220px]">
            <div className="font-bold text-sm">Impacto que Liberta Vidas</div>
            <p className="text-xs mt-2 text-muted-foreground leading-relaxed">
              10% do lucro direto para causas de apoio. Mais do que benefícios, um propósito compartilhado.
            </p>
            <div className="mt-3 h-12 w-12 rounded-full bg-teal flex items-center justify-center">
              <HeartHandshake className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
