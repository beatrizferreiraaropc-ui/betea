import { ArrowRight, MessageCircle, ShieldCheck, HeartHandshake, Users, Stethoscope, UserCog } from "lucide-react";
import fundoBanner from "@/assets/fundo-banner.asset.json";
import fundoBannerMobi from "@/assets/fundo-banner-mobi.asset.json";
import { site } from "@/config/site";

/**
 * SEÇÃO: HERO
 *
 * Mobile/Tablet: imagem da família ao fundo (lado direito inferior), textos à esquerda
 *                CTAs delicados lado a lado (pill laranja + pill outline branca)
 * Desktop:       coluna esquerda com headline + CTAs; coluna direita com card
 *                branco "Impacto que transforma vidas" (3 mini-stats coloridas)
 *
 * Padding inferior reforçado para acomodar a sobreposição da seção
 * Benefícios (margem negativa).
 */
export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-hero-gradient text-white">
      {/* Imagem desktop (à direita) */}
      <img
        src={fundoBanner.url}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute inset-y-0 right-0 h-full w-[48%] lg:w-[52%] object-cover object-right pointer-events-none select-none opacity-90"
      />
      {/* Imagem mobile (canto inferior direito) */}
      <img
        src={fundoBannerMobi.url}
        alt=""
        aria-hidden="true"
        className="md:hidden absolute right-0 bottom-0 h-[55%] w-[60%] object-cover object-right-bottom pointer-events-none select-none opacity-95"
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-14 md:pt-20 lg:pt-28 pb-40 md:pb-44 lg:pb-56 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">

        {/* COLUNA ESQUERDA — texto + CTAs */}
        <div className="max-w-[88%] md:max-w-xl lg:max-w-none">
          <div className="inline-flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.22em] font-semibold bg-white/10 backdrop-blur border border-white/25 rounded-full px-4 py-2 whitespace-nowrap">
            <ShieldCheck className="h-3.5 w-3.5 text-teal shrink-0" />
            Saúde, Acolhimento e Benefícios
          </div>

          <h1 className="mt-6 text-[1.7rem] sm:text-4xl md:text-5xl lg:text-[3rem] font-bold leading-[1.08]">
            Cuidado e benefícios para pessoas com <span className="text-teal">TEA, PCD</span>,{" "}
            <span className="text-violet-light">neurodivergentes</span> e suas famílias.
          </h1>

          <span className="mt-5 block h-1 w-20 rounded-full bg-teal" aria-hidden />

          <p className="mt-5 text-white/90 text-[15px] md:text-lg max-w-md md:max-w-lg leading-relaxed">
            Telemedicina, telepsicologia, assistência familiar e descontos exclusivos. Mais do que um plano — uma rede de apoio para você e quem mais importa.
          </p>

          {/* CTAs delicados, sempre lado a lado (inclusive mobile) */}
          <div className="mt-7 flex flex-row flex-nowrap items-center gap-3">
            <a
              href="#planos"
              className="inline-flex items-center gap-2 px-5 md:px-6 py-3 rounded-full bg-orange text-white font-semibold text-sm hover:brightness-110 transition shadow-md whitespace-nowrap"
            >
              Nossos Planos
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={site.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 md:px-6 py-3 rounded-full border border-white/70 text-white font-semibold text-sm hover:bg-white/10 transition whitespace-nowrap"
            >
              <MessageCircle className="h-4 w-4" />
              Falar com um Especialista
            </a>
          </div>

          {/* Mini-ícones delicados sob os CTAs — somente desktop (lg+) */}
          <ul className="mt-6 hidden lg:flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] md:text-xs text-white/85">
            {[
              { Icon: ShieldCheck, label: "Atendimento seguro" },
              { Icon: Stethoscope, label: "Especialistas" },
              { Icon: HeartHandshake, label: "Acolhimento" },
              { Icon: Users, label: "Toda a família" },
            ].map(({ Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-1.5">
                <Icon className="h-3.5 w-3.5 text-teal" />
                <span className="font-medium tracking-wide">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUNA DIREITA — Caixinha "Impacto que transforma vidas" (DESKTOP somente) */}
        <aside className="hidden lg:flex lg:justify-end">
          <div className="relative rounded-2xl bg-white/95 backdrop-blur text-foreground p-5 shadow-xl border border-white/60 w-[290px] mr-2 xl:mr-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-violet flex items-center justify-center shadow-md shrink-0">
                <HeartHandshake className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-[15px] font-bold text-navy leading-tight">Impacto que<br/>transforma vidas</h3>
            </div>
            <p className="mt-3 text-[12px] text-foreground/70 leading-snug">
              Até <strong className="text-violet">10% do lucro</strong> destinado a causas de apoio a famílias atípicas.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              {[
                { Icon: Users, hex: "#3F74C2", label: "Famílias" },
                { Icon: Stethoscope, hex: "#B8A4E8", label: "Consultas" },
                { Icon: UserCog, hex: "#7FC8D4", label: "Especialistas" },
              ].map(({ Icon, hex, label }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <div className="h-8 w-8 rounded-full flex items-center justify-center shadow-sm" style={{ backgroundColor: hex }}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-[10px] font-semibold text-foreground/75 leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
