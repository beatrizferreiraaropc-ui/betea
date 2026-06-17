import { MapPin, Building2, Activity, Users } from "lucide-react";

// SEÇÃO: ATENDIMENTO / PARCEIROS DE SAÚDE
// Reproduz o mock mobile enviado pelo cliente (estatísticas + grid de logos),
// porém com a paleta oficial (fundo navy #3F74C2, NÃO laranja).
export function PartnersStats() {
  const stats = [
    { icon: MapPin, n: "26", l: "Estados + DF" },
    { icon: Building2, n: "1.736", l: "Municípios atendidos" },
    { icon: Activity, n: "4.612", l: "Procedimentos" },
    { icon: Users, n: "16.661", l: "Parceiros de Saúde" },
  ];

  // Logos dos parceiros de saúde (texto-only por enquanto, troque por <img> no WordPress)
  const logos = [
    "Sabin", "Farmácia Preço Popular", "Centro de Medicina", "Frei Galvão",
    "Richet", "Padrão", "Exame", "Hospital Vitória",
    "Clementino Fraga", "Lab Pasteur", "Extrafarma", "Drogasmil",
  ];

  return (
    <section id="atendimento" className="py-16 md:py-24" style={{ backgroundColor: "#3F74C2" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-6 text-white">
        <div className="text-center max-w-2xl mx-auto">
          <span
            className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full"
            style={{ backgroundColor: "#5589D1", color: "#7FC8D4" }}
          >
            Atendimento
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Confira alguns dos nossos parceiros</h2>
          <p className="mt-3 text-white/70 text-sm md:text-base">
            Cobertura nacional com os melhores hospitais, clínicas, laboratórios e farmácias.
          </p>
        </div>

        {/* Estatísticas */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {stats.map(({ icon: Icon, n, l }) => (
            <div
              key={l}
              className="rounded-2xl p-4 md:p-5 flex items-center gap-3 md:gap-4 border"
              style={{ backgroundColor: "#5589D1", borderColor: "rgba(0,184,217,0.25)" }}
            >
              <div className="h-10 w-10 md:h-12 md:w-12 shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(0,184,217,0.15)" }}>
                <Icon className="h-4 w-4 md:h-5 md:w-5" style={{ color: "#7FC8D4" }} />
              </div>
              <div className="min-w-0">
                <div className="text-xl md:text-3xl font-bold leading-none">{n}</div>
                <div className="text-[11px] md:text-sm text-white/70 mt-1 leading-tight">{l}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Grid de logos */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {logos.map((nome) => (
            <div
              key={nome}
              className="h-16 md:h-20 rounded-xl flex items-center justify-center text-center text-xs md:text-sm font-semibold px-3"
              style={{ backgroundColor: "#FFFFFF", color: "#3F74C2" }}
            >
              {nome}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
