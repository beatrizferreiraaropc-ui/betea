import { Zap, CalendarCheck, Headset } from "lucide-react";

/**
 * SEÇÃO: ACOMPANHAMENTO DE VERDADE
 * Reaproveita o estilo de card branco com ícone redondo da seção Benefícios.
 * Inserida entre Embaixadores e Footer.
 */
export function Acompanhamento() {
  const cards = [
    {
      i: Zap,
      hex: "#7FC8D4",
      t: "Acesso sem fricção",
      s: "Consultas, receitas e descontos no mesmo lugar, direto pelo site, sem precisar ligar para central.",
    },
    {
      i: CalendarCheck,
      hex: "#B8A4E8",
      t: "Agenda que se adapta a você",
      s: "Reagende em poucos toques e receba aviso quando o profissional ideal estiver disponível.",
    },
    {
      i: Headset,
      hex: "#F3A35C",
      t: "Suporte que entende o contexto",
      s: "Time treinado para acolher famílias com TEA, PCD e neurodivergentes, sem precisar reexplicar tudo a cada contato.",
    },
  ];

  return (
    <section id="acompanhamento" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-violet font-semibold">
            Pensado para o seu dia a dia
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
            Mais do que acesso, é acompanhamento de verdade
          </h2>
          <p className="mt-3 text-muted-foreground">
            Sabemos que cuidar de uma família exige previsibilidade e atenção constante. Por isso, organizamos cada etapa do clube para reduzir esforço — não apenas oferecer mais um benefício na lista.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {cards.map(({ i: Icon, hex, t, s }) => (
            <div
              key={t}
              className="text-center bg-card rounded-2xl p-6 md:p-7 border border-border shadow-none hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <div
                className="mx-auto h-14 w-14 md:h-16 md:w-16 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: hex }}
              >
                <Icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
              </div>
              <div className="mt-4 font-bold text-base md:text-lg">{t}</div>
              <div className="text-sm text-muted-foreground mt-2 leading-relaxed">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
