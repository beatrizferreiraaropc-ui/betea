import { ArrowRight } from "lucide-react";
import { site } from "@/config/site";

/**
 * SEÇÃO: CTA — CHAMADA PARA AÇÃO
 * Substitui a antiga faixa "Parceiros Institucionais", logo abaixo do Sobre.
 * Faixa navy delicada + botão laranja arredondado (mesmos tokens do site).
 */
export function CtaSobre() {
  return (
    <section id="cta-sobre" className="py-16 md:py-24 bg-hero-gradient text-white">
      <div className="max-w-4xl mx-auto px-5 md:px-6 text-center">
        <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-teal">
          Próximo passo
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
          Faça parte de uma comunidade que <span className="text-teal">acolhe</span>.
        </h2>
        <p className="mt-4 text-white/85 text-base md:text-lg max-w-2xl mx-auto">
          Escolha seu plano e comece hoje mesmo a cuidar de quem você ama com mais tranquilidade,
          acolhimento e benefícios reais.
        </p>
        <a
          href={site.links.queroFazerParte}
          className="mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-orange text-white font-semibold text-sm md:text-base hover:brightness-110 transition shadow-lg"
        >
          QUERO FAZER PARTE
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
