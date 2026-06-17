import { Stethoscope, Brain, Shield, Tag, HeartHandshake, Users, ShieldCheck, Lock, UserCog } from "lucide-react";

/**
 * SEÇÃO: BENEFÍCIOS
 *
 * Composição (referência cliente — image-7):
 *  1. Cards brancos (Telemedicina · Telepsicologia · Assistência Funeral · Descontos)
 *     — sobrepostos ao final do Hero via margem negativa (-mt-20)
 *  2. Faixa azul-claro com selo "Impacto que transforma vidas"
 *  3. Faixa navy com 3 selos de confiança (Atendimento seguro / Profissionais / Dados protegidos)
 */
export function Benefits() {
  const items = [
    { i: Stethoscope, hex: "#7FC8D4", t: "Telemedicina", s: "Consultas online com especialistas, 24/7" },
    { i: Brain,       hex: "#B8A4E8", t: "Telepsicologia", s: "Equilíbrio emocional para toda a família" },
    { i: Shield,      hex: "#3F74C2", t: "Assistência Funeral", s: "Apoio total em momentos difíceis" },
    { i: Tag,         hex: "#F3A35C", t: "Descontos e Vantagens", s: "Economia inteligente no dia a dia" },
  ];

  const selos = [
    { i: ShieldCheck, t: "Atendimento seguro e humanizado" },
    { i: UserCog,     t: "Profissionais especializados" },
    { i: Lock,        t: "Seus dados protegidos" },
  ];

  return (
    <section id="beneficios" className="relative bg-background pb-14 md:pb-20">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        {/* 1. Cards sobrepostos ao hero (margem negativa reforçada) */}
        <div className="-mt-24 md:-mt-28 lg:-mt-32 relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map(({ i: Icon, hex, t, s }) => (
            <div key={t} className="text-center bg-card rounded-2xl p-5 md:p-7 border border-border shadow-none hover:shadow-2xl hover:-translate-y-1 transition">
              <div
                className="mx-auto h-14 w-14 md:h-16 md:w-16 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: hex }}
              >
                <Icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
              </div>
              <div className="mt-4 font-bold text-sm md:text-base">{t}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s}</div>
            </div>
          ))}
        </div>

        {/* 2. Faixa azul-claro — Impacto que transforma vidas (mobile/tablet apenas) */}
        <div className="lg:hidden mt-8 md:mt-10 rounded-2xl border border-teal/20 bg-[#EAF1FB] px-5 md:px-8 py-5 md:py-6 flex items-center gap-4 md:gap-6">
          <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-white shadow flex items-center justify-center shrink-0">
            <HeartHandshake className="h-6 w-6 md:h-7 md:w-7 text-teal" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-bold text-navy text-base md:text-lg">Impacto que transforma vidas</div>
            <p className="text-xs md:text-sm text-foreground/70 leading-snug mt-1">
              Até 10% do nosso lucro é destinado a associações e instituições que apoiam famílias e pessoas com TEA.
            </p>
          </div>
          <Users className="hidden sm:block h-8 w-8 md:h-10 md:w-10 text-teal/60 shrink-0" />
        </div>

        {/* 3. Faixa navy — selos de confiança (mobile/tablet apenas) */}
        <div className="lg:hidden mt-4 md:mt-5 rounded-2xl bg-navy-gradient text-white px-5 md:px-8 py-5 md:py-6 grid grid-cols-3 gap-3 md:gap-6">
          {selos.map(({ i: Icon, t }) => (
            <div key={t} className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
              <Icon className="h-6 w-6 md:h-7 md:w-7 text-teal shrink-0" />
              <span className="text-[11px] md:text-sm font-semibold leading-tight">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

