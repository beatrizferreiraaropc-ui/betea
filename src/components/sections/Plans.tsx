import { Check } from "lucide-react";
import { site } from "@/config/site";

// SEÇÃO: PLANOS — fundo #F5F7FA, bordas por plano
// Essencial #00B8D9 · Família #7B2FF7 (selo #FF8A00) · Proteção Total #0B2E8A
export function Plans() {
  return (
    <section id="planos" className="py-16 md:py-24" style={{ backgroundColor: "#F5F7FA" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-violet font-semibold">Planos que cabem na sua vida</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Escolha o plano ideal para você &amp; sua família.</h2>
          <p className="mt-3 text-muted-foreground">Cobertura nacional, atendimento humanizado e benefícios reais.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 md:gap-6 items-stretch">
          {site.planos.map((p) => {
            const featured = p.destaque;
            return (
              <div
                key={p.id}
                className={`relative rounded-3xl p-7 md:p-8 bg-white shadow-sm hover:shadow-xl transition flex flex-col ${featured ? "md:-mt-4" : ""}`}
                style={{
                  border: `2px solid ${p.cor}`,
                }}
              >
                {p.tag && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[11px] font-bold px-4 py-1 rounded-full whitespace-nowrap shadow"
                    style={{ backgroundColor: "#FF8A00" }}
                  >
                    {p.tag}
                  </div>
                )}
                {p.ribbon && (
                  <div
                    className="absolute top-4 right-4 text-white text-[10px] font-bold px-2 py-1 rounded"
                    style={{ backgroundColor: p.cor }}
                  >
                    {p.ribbon}
                  </div>
                )}
                <div className="text-[11px] font-bold tracking-widest" style={{ color: p.cor }}>
                  PLANO
                </div>
                <div className="mt-1 text-2xl font-bold">{p.nome.replace("PLANO ", "")}</div>
                <p className="mt-3 text-sm text-muted-foreground min-h-[44px]">{p.descricao}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-sm">R$</span>
                  <span className="text-5xl font-bold" style={{ color: p.cor }}>{p.preco}</span>
                  <span className="text-sm text-muted-foreground">/mês</span>
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {p.beneficios.map((f) => (
                    <li key={f} className="flex gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: p.cor }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={p.productUrl}
                  className="mt-8 inline-flex items-center justify-center w-full py-3 rounded-full font-semibold text-sm transition text-white shadow hover:brightness-110"
                  style={{ backgroundColor: featured ? "#FF8A00" : p.cor }}
                >
                  {p.ctaLabel}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
