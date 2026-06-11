import { Stethoscope, Brain, Shield, Tag } from "lucide-react";

// SEÇÃO: BENEFÍCIOS (4 ícones)
export function Benefits() {
  const items = [
    { i: Stethoscope, c: "bg-teal", t: "Telemedicina", s: "Tranquilidade imediata" },
    { i: Brain, c: "bg-violet", t: "Telepsicologia", s: "Equilíbrio Emocional" },
    { i: Shield, c: "bg-navy", t: "Assistência Funeral", s: "Apoio Total em Momentos Difíceis" },
    { i: Tag, c: "bg-orange", t: "Descontos e Vantagens", s: "Economia Inteligente no Dia-a-Dia" },
  ];
  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map(({ i: Icon, c, t, s }) => (
          <div key={t} className="text-center">
            <div className={`mx-auto h-16 w-16 rounded-full ${c} flex items-center justify-center shadow-lg`}>
              <Icon className="h-7 w-7 text-white" />
            </div>
            <div className="mt-4 font-bold">{t}</div>
            <div className="text-sm text-muted-foreground mt-1">{s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
