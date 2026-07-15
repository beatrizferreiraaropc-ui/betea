import { ArrowUp } from "lucide-react";
import { site } from "@/config/site";
export function Impact() {
  const stats = [
    { n: site.impacto.familias, l: "famílias atendidas" },
    { n: site.impacto.consultas, l: "consultas realizadas" },
    { n: site.impacto.especialistas, l: "especialistas parceiros" },
    { n: site.impacto.lucroDoacao, l: "do lucro destinado a causas sociais" },
  ];
  return (
    <section id="impacto" className="py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_2fr] gap-8 items-center">
        <div>
          <h3 className="text-3xl font-bold">Impacto que transforma vidas</h3>
          <p className="mt-4 text-muted-foreground">
            Mais que benefícios, um propósito. Cada plano ajuda a construir um mundo mais inclusivo e com mais oportunidades.
          </p>
          <a
            href="#planos"
            className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-orange text-white font-semibold text-sm hover:brightness-110 transition shadow-lg"
          >
            <ArrowUp className="h-4 w-4" /> CONHEÇA NOSSOS PLANOS
          </a>
        </div>
        <div className="bg-card rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-sm border border-border">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-2xl font-bold text-violet">{s.n}</div>
              <div className="mt-2 text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
