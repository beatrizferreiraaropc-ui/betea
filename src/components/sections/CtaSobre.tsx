import { ArrowRight } from "lucide-react";
import { site } from "@/config/site";

/**
 * SEÇÃO: CTA — CHAMADA PARA AÇÃO
 * Faixa navy com ornamentos SVG delicados (círculos concêntricos, ondas, dot-grid)
 * e halo pastel atrás do botão. Estilo "vidro/glow" sutil, sem sair da paleta.
 */
export function CtaSobre() {
  return (
    <section id="cta-sobre" className="relative py-16 md:py-24 bg-hero-gradient text-white overflow-hidden">
      {/* ==== Ornamentos decorativos (aria-hidden) ==== */}
      {/* Blob teal */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(127,200,212,0.35), transparent)" }}
      />
      {/* Blob violet */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(184,164,232,0.30), transparent)" }}
      />
      {/* Círculos concêntricos esquerda */}
      <svg
        aria-hidden
        className="hidden md:block pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 opacity-[0.14]"
        width="220" height="220" viewBox="0 0 220 220" fill="none"
      >
        {[30, 55, 82, 110].map((r) => (
          <circle key={r} cx="110" cy="110" r={r} stroke="white" strokeWidth="1" />
        ))}
      </svg>
      {/* Dot-grid direita */}
      <svg
        aria-hidden
        className="hidden md:block pointer-events-none absolute right-8 top-10 opacity-25"
        width="140" height="90" viewBox="0 0 140 90"
      >
        {Array.from({ length: 7 }).map((_, y) =>
          Array.from({ length: 11 }).map((__, x) => (
            <circle key={`${x}-${y}`} cx={4 + x * 13} cy={4 + y * 13} r="1" fill="white" />
          ))
        )}
      </svg>
      {/* Linhas onduladas ao fundo */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 w-full opacity-[0.10]"
        viewBox="0 0 1440 120" preserveAspectRatio="none" height="120"
      >
        <path d="M0,60 C240,110 480,10 720,60 C960,110 1200,10 1440,60 L1440,120 L0,120 Z" fill="none" stroke="white" strokeWidth="1" />
        <path d="M0,80 C240,130 480,30 720,80 C960,130 1200,30 1440,80" fill="none" stroke="white" strokeWidth="1" />
      </svg>

      <div className="relative max-w-4xl mx-auto px-5 md:px-6 text-center">
        <span className="glass-dark inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-teal px-4 py-1.5 rounded-full">
          Próximo passo
        </span>
        <h2 className="mt-5 text-3xl md:text-4xl font-bold leading-tight">
          Faça parte de uma comunidade que <span className="text-teal">acolhe</span>.
        </h2>
        <p className="mt-4 text-white/85 text-base md:text-lg max-w-2xl mx-auto">
          Escolha seu plano e comece hoje mesmo a cuidar de quem você ama com mais tranquilidade,
          acolhimento e benefícios reais.
        </p>
        <a
          href={site.links.queroFazerParte}
          className="mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-orange text-white font-semibold text-sm md:text-base hover:brightness-110 hover:-translate-y-0.5 transition shadow-orange-halo"
        >
          QUERO FAZER PARTE
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
