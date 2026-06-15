import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import fundoBanner from "@/assets/fundo-banner.asset.json";
import fundoBannerMobi from "@/assets/fundo-banner-mobi.asset.json";
import { site } from "@/config/site";

/**
 * SEÇÃO: HERO
 *
 * Fundo: gradiente oficial 90deg (#0B2E8A → #4A3AFF → #7B2FF7).
 * Imagem da família (PNG com fade) à DIREITA — sem cobrir o texto:
 *   - Desktop: imagem ~50% direita, texto fica em coluna esquerda
 *   - Tablet/Mobile: imagem ocupa metade inferior-direita, texto respira na esquerda/topo
 *
 * CTAs sempre LADO A LADO (mesmo no mobile), pílulas mais delicadas.
 */
export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-hero-gradient text-white">
      {/* Desktop: imagem à direita, ~50% da largura, deixa coluna esquerda livre para o texto */}
      <img
        src={fundoBanner.url}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute inset-y-0 right-0 h-full w-1/2 lg:w-[48%] object-cover object-right pointer-events-none select-none"
      />
      {/* Mobile: imagem na METADE INFERIOR direita, fora do caminho do texto */}
      <img
        src={fundoBannerMobi.url}
        alt=""
        aria-hidden="true"
        className="md:hidden absolute right-0 bottom-0 h-[55%] w-[60%] object-cover object-right-bottom pointer-events-none select-none opacity-95"
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-32 md:pb-28">
        <div className="max-w-[88%] md:max-w-xl lg:max-w-2xl">
          <div className="inline-flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.22em] font-semibold bg-white/10 backdrop-blur border border-white/25 rounded-full px-4 py-2">
            <ShieldCheck className="h-3.5 w-3.5 text-teal" />
            Saúde, Acolhimento e Benefícios
          </div>

          <h1 className="mt-6 text-[1.7rem] sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold leading-[1.08]">
            Cuidado e benefícios para pessoas com <span className="text-teal">TEA, PCD</span>,{" "}
            <span style={{ color: "#B794FF" }}>neurodivergentes</span> e suas famílias.
          </h1>

          <span className="mt-5 block h-1 w-20 rounded-full bg-teal" aria-hidden />

          <p className="mt-5 text-white/90 text-[15px] md:text-lg max-w-md md:max-w-lg leading-relaxed">
            Telemedicina, telepsicologia, assistência funeral, descontos e muito mais em um só lugar.
          </p>

          {/* CTAs SEMPRE lado a lado, pílulas compactas e harmoniosas */}
          <div className="mt-7 flex flex-row flex-wrap items-center gap-3">
            <a
              href="#planos"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-orange text-white font-semibold text-[13px] md:text-sm hover:brightness-110 transition shadow-lg whitespace-nowrap"
            >
              CONHEÇA NOSSOS PLANOS
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={site.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 pl-2 pr-5 py-2 rounded-full bg-white text-navy font-semibold text-[13px] md:text-sm hover:bg-white/95 transition shadow-lg whitespace-nowrap"
            >
              <span className="h-7 w-7 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle className="h-4 w-4 text-white" />
              </span>
              FALAR NO WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
