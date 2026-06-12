import { ArrowRight } from "lucide-react";
import { site } from "@/config/site";

/**
 * SEÇÃO: COMO FUNCIONA
 * 4 passos coloridos conectados por linha pontilhada.
 * Desktop: linha horizontal entre os círculos.
 * Mobile: linha vertical ligando os passos.
 */
export function HowItWorks() {
  const steps = [
    { n: 1, hex: "#00B8D9", t: "Escolha seu plano", d: "Escolha o plano que melhor atende você e sua família." },
    { n: 2, hex: "#7B2FF7", t: "Faça sua adesão", d: "Adesão rápida e segura em poucos minutos, tudo online." },
    { n: 3, hex: "#FF8A00", t: "Acesse seus benefícios", d: "Use seus benefícios quando e onde quiser, com praticidade." },
    { n: 4, hex: "#0B2E8A", t: "Conte com a gente", d: "Nossa equipe está sempre pronta para cuidar de você e da sua família." },
  ];

  return (
    <section id="como-funciona" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-violet font-semibold">Como Funciona</div>
          <h3 className="mt-3 text-3xl font-bold">Simples, rápido e 100% online</h3>
        </div>

        <div className="mt-14 relative">
          {/* LINHA PONTILHADA — desktop (horizontal) */}
          <div
            className="hidden md:block absolute left-0 right-0 top-7 mx-[12.5%] border-t-2 border-dashed border-border"
            aria-hidden
          />
          {/* LINHA PONTILHADA — mobile (vertical) */}
          <div
            className="md:hidden absolute left-7 top-7 bottom-7 border-l-2 border-dashed border-border"
            aria-hidden
          />

          <div className="grid md:grid-cols-4 gap-10 md:gap-8 relative">
            {steps.map((s) => (
              <div key={s.n} className="flex md:block items-start gap-4 md:text-center">
                <div
                  className="h-14 w-14 shrink-0 rounded-full text-white flex items-center justify-center font-bold text-lg shadow-lg md:mx-auto relative z-10 ring-8 ring-background"
                  style={{ backgroundColor: s.hex }}
                >
                  {s.n}
                </div>
                <div className="md:mt-4">
                  <div className="font-bold">{s.t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href={site.links.queroFazerParte}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-orange text-white font-semibold hover:brightness-110 transition shadow-lg"
          >
            QUERO FAZER PARTE AGORA <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
