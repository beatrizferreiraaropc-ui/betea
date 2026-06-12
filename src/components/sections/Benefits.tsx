import { Stethoscope, Brain, Shield, Tag } from "lucide-react";

// SEÇÃO: BENEFÍCIOS — sem título/subtítulo (apenas os cards coloridos, como na referência)
// Telemedicina #00B8D9 · Telepsicologia #7B2FF7 · Assistência Funeral #0B2E8A · Descontos #FF8A00
export function Benefits() {
  const items = [
    { i: Stethoscope, hex: "#00B8D9", t: "Telemedicina", s: "Consultas online com especialistas, 24/7" },
    { i: Brain,       hex: "#7B2FF7", t: "Telepsicologia", s: "Equilíbrio emocional para toda a família" },
    { i: Shield,      hex: "#0B2E8A", t: "Assistência Funeral", s: "Apoio total em momentos difíceis" },
    { i: Tag,         hex: "#FF8A00", t: "Descontos e Vantagens", s: "Economia inteligente no dia a dia" },
  ];
  return (
    <section id="beneficios" className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {items.map(({ i: Icon, hex, t, s }) => (
            <div key={t} className="text-center bg-card rounded-2xl p-5 md:p-7 border border-border hover:shadow-lg hover:-translate-y-1 transition">
              <div
                className="mx-auto h-14 w-14 md:h-16 md:w-16 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: hex }}
              >
                <Icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
              </div>
              <div className="mt-4 font-bold text-sm md:text-base">{t}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
