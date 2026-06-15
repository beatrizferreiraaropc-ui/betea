import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import fundoBanner from "@/assets/fundo-banner.asset.json";
import fundoBannerMobi from "@/assets/fundo-banner-mobi.asset.json";
import { site } from "@/config/site";

/**
 * SEÇÃO: HERO
 * Referência: mockup mobile do cliente.
 *
 * Fundo: gradiente oficial 90deg (#0B2E8A → #4A3AFF → #7B2FF7).
 * Imagem da família (PNG com fade) posicionada à DIREITA, ocupando ~55% no
 * desktop e ~70% no mobile, sobreposta ao gradiente.
 *
 * Assets:
 *   - src/assets/fundo-banner.png       (desktop · ~1456x500)
 *   - src/assets/fundo-banner-mobi.png  (mobile  · ~870x1000)
 */
export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-hero-gradient text-white">
      {/* Imagem da família — desktop */}
      <img
        src={fundoBanner.url}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute inset-y-0 right-0 h-full w-[62%] lg:w-[58%] object-cover object-right pointer-events-none select-none"
      />
      {/* Imagem da família — mobile (vertical) */}
      <img
        src={fundoBannerMobi.url}
        alt=""
        aria-hidden="true"
        className="md:hidden absolute right-0 top-0 h-full w-[72%] object-cover object-right pointer-events-none select-none opacity-95"
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-20 md:pb-24">
        <div className="max-w-xl md:max-w-2xl">
          {/* Eyebrow / badge */}
          <div className="inline-flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.22em] font-semibold bg-white/10 backdrop-blur border border-white/25 rounded-full px-4 py-2">
            <ShieldCheck className="h-3.5 w-3.5 text-teal" />
            Saúde, Acolhimento e Benefícios
          </div>

          <h1 className="mt-6 text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.05]">
            Cuidado e benefícios para pessoas com TEA, PCD, neurodivergentes e suas famílias.
          </h1>

          <span className="mt-5 block h-1 w-20 rounded-full bg-teal" aria-hidden />

          <p className="mt-5 text-white/90 text-base md:text-lg max-w-md md:max-w-lg leading-relaxed">
            Telemedicina, telepsicologia, assistência funeral, descontos e muito mais em um só lugar.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 max-w-md">
            <a
              href="#planos"
              className="inline-flex items-center justify-between gap-2 px-6 py-3.5 rounded-full bg-orange text-white font-semibold text-sm md:text-base hover:brightness-110 transition shadow-xl"
            >
              CONHEÇA NOSSOS PLANOS <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={site.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-navy font-semibold text-sm md:text-base hover:bg-white/95 transition shadow-xl"
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
