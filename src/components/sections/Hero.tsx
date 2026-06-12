import { ArrowRight, MessageCircle, Monitor, HeartHandshake, Shield } from "lucide-react";
import heroFamily from "@/assets/hero-family.jpg";
import { site } from "@/config/site";

// SEÇÃO: HERO
// Imagem de família como BACKGROUND com gradient overlay oficial (90deg).
// Responsivo: imagem mantida como background-cover em todos os breakpoints.
export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate pt-36 md:pt-40 pb-20 md:pb-28 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroFamily})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
      }}
    >
      {/* Overlay gradiente oficial */}
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] md:text-xs uppercase tracking-[0.25em] text-teal mb-5 md:mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            Health Tech · Acolhimento · Inclusão
          </div>
          <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08]">
            Cuidado especializado e benefícios transformadores para{" "}
            <span className="text-teal">famílias com TEA, PCD</span> e neurodivergentes.
          </h1>
          <p className="mt-5 md:mt-6 text-white/85 text-base md:text-lg max-w-xl">
            Telemedicina, telepsicologia, assistência familiar e descontos exclusivos.
            Mais do que um plano — uma rede de apoio para você e quem mais importa.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#planos" className="inline-flex items-center gap-2 px-5 md:px-6 py-3 md:py-3.5 rounded-full bg-orange text-white font-semibold text-sm md:text-base hover:brightness-110 transition shadow-xl">
              Conheça Nossos Planos <ArrowRight className="h-4 w-4" />
            </a>
            <a href={site.links.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 md:px-6 py-3 md:py-3.5 rounded-full border border-white/40 bg-white/5 backdrop-blur text-white font-semibold text-sm md:text-base hover:bg-white/15 transition">
              <MessageCircle className="h-4 w-4" /> Dúvidas? Chat WhatsApp
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 md:gap-6 max-w-md">
            {[
              { i: Monitor, t: "Atendimento", s: "100% online" },
              { i: HeartHandshake, t: "Apoio", s: "humanizado" },
              { i: Shield, t: "Proteção", s: "de dados" },
            ].map(({ i: Icon, t, s }) => (
              <div key={t} className="flex items-center gap-2">
                <div className="h-9 w-9 shrink-0 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
                  <Icon className="h-4 w-4 text-teal" />
                </div>
                <div className="text-[11px] leading-tight">
                  <div className="font-semibold">{t}</div>
                  <div className="text-white/70">{s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card flutuante de impacto */}
        <div className="relative hidden lg:flex justify-end">
          <div className="bg-white/95 backdrop-blur text-foreground rounded-2xl p-6 shadow-2xl max-w-xs">
            <div className="h-12 w-12 rounded-full bg-violet flex items-center justify-center mb-3">
              <HeartHandshake className="h-6 w-6 text-white" />
            </div>
            <div className="font-bold text-base">Impacto que liberta vidas</div>
            <p className="text-sm mt-2 text-muted-foreground leading-relaxed">
              Até <strong className="text-violet">10% do lucro</strong> destinado a causas de apoio a famílias atípicas.
            </p>
            <div className="mt-4 grid grid-cols-3 text-center gap-2">
              <div><div className="font-bold text-navy">+15k</div><div className="text-[10px] text-muted-foreground">famílias</div></div>
              <div><div className="font-bold text-violet">+50k</div><div className="text-[10px] text-muted-foreground">consultas</div></div>
              <div><div className="font-bold text-teal">+200</div><div className="text-[10px] text-muted-foreground">especialistas</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
