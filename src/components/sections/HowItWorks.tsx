import { ArrowRight } from "lucide-react";
import { site } from "@/config/site";

// SEÇÃO: COMO FUNCIONA
export function HowItWorks() {
  const steps = [
    { n: 1, t: "Escolha seu plano", d: "Escolha o plano que melhor atende você e sua família." },
    { n: 2, t: "Faça sua adesão", d: "Adesão rápida e segura em poucos minutos, tudo online." },
    { n: 3, t: "Acesse seus benefícios", d: "Use seus benefícios quando e onde quiser, com praticidade." },
    { n: 4, t: "Conte com a gente", d: "Nossa equipe está sempre pronta para cuidar de você e da sua família." },
  ];
  return (
    <section id="como-funciona" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-violet font-semibold">Como Funciona</div>
          <h3 className="mt-3 text-3xl font-bold">Simples, rápido e 100% online</h3>
        </div>
        <div className="mt-12 grid md:grid-cols-4 gap-8 relative">
          {steps.map((s) => (
            <div key={s.n}>
              <div className="h-10 w-10 rounded-full bg-violet text-white flex items-center justify-center font-bold">{s.n}</div>
              <div className="mt-4 font-bold">{s.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.d}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href={site.links.queroFazerParte} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-orange text-white font-semibold hover:brightness-110 transition shadow-lg">
            QUERO FAZER PARTE AGORA <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
