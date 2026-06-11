import { Check } from "lucide-react";
import { site } from "@/config/site";

// SEÇÃO: PLANOS
// Edite preços, benefícios e links em src/config/site.ts → site.planos
export function Plans() {
  return (
    <section id="planos" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-violet font-semibold">Planos que cabem na sua vida</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Escolha o plano ideal para você &amp; sua família.</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6 items-stretch">
          {site.planos.map((p) => (
            <div
              key={p.id}
              className={`relative rounded-2xl p-8 border ${
                p.destaque
                  ? "bg-violet-gradient text-white border-transparent shadow-2xl md:-mt-4"
                  : "bg-card border-border"
              }`}
            >
              {p.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet text-white text-[11px] font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                  {p.tag}
                </div>
              )}
              {p.ribbon && (
                <div className="absolute top-4 right-4 bg-orange text-white text-[10px] font-bold px-2 py-1 rounded">
                  {p.ribbon}
                </div>
              )}
              <div className={`text-xs font-semibold tracking-widest ${p.destaque ? "text-white/80" : "text-muted-foreground"}`}>
                PLANO
              </div>
              <div className="mt-1 text-2xl font-bold">{p.nome.replace("PLANO ", "")}</div>
              <p className={`mt-3 text-sm ${p.destaque ? "text-white/85" : "text-muted-foreground"}`}>{p.descricao}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-sm">R$</span>
                <span className="text-5xl font-bold">{p.preco}</span>
                <span className={`text-sm ${p.destaque ? "text-white/80" : "text-muted-foreground"}`}>/mês</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.beneficios.map((f) => (
                  <li key={f} className="flex gap-2 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.destaque ? "text-white" : "text-violet"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={p.productUrl}
                className={`mt-8 inline-flex items-center justify-center w-full py-3 rounded-full font-semibold text-sm transition ${
                  p.destaque
                    ? "bg-white text-violet hover:brightness-95"
                    : "border border-violet text-violet hover:bg-violet hover:text-white"
                }`}
              >
                {p.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
