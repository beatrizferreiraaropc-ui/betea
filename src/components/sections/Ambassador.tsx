import { ArrowRight, Check, Wallet, Heart, Sparkles } from "lucide-react";
import { site } from "@/config/site";

// SEÇÃO: EMBAIXADORES — sem foto corporativa, usando ícones coloridos da paleta
export function Ambassador() {
  const { embaixador } = site;
  const pilares = [
    { i: Wallet, hex: "#FF8A00", t: "Renda com propósito", d: "Ganhe comissões enquanto ajuda famílias atípicas." },
    { i: Heart, hex: "#00B8D9", t: "Impacto real", d: "Cada indicação transforma a rotina de uma família." },
    { i: Sparkles, hex: "#B794FF", t: "Liberdade financeira", d: "Trabalhe de onde estiver, no seu tempo." },
  ];

  return (
    <section id="embaixadores" className="py-16 px-6">
      <div className="max-w-7xl mx-auto rounded-3xl bg-hero-gradient text-white p-10 lg:p-14 grid lg:grid-cols-2 gap-10 items-center overflow-hidden relative">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-teal font-semibold">Seja um Embaixador do Impacto</div>
          <h3 className="mt-3 text-4xl font-bold leading-tight">
            Indique, transforme vidas <span style={{ color: "#FF8A00" }}>e prospere com a gente.</span>
          </h3>
          <p className="mt-4 text-white/85">
            Você não está sozinho nessa jornada. Junte-se a quem acredita no cuidado, na inclusão e
            na construção de uma rede de apoio que faz a diferença de verdade.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5 text-teal shrink-0" /><span><strong>{embaixador.comissaoPrimeira}</strong> de comissão na primeira mensalidade</span></li>
            <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5 text-teal shrink-0" /><span><strong>{embaixador.comissaoRecorrente}</strong> de comissão recorrente por {embaixador.mesesRecorrencia} meses</span></li>
            <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5 text-teal shrink-0" />Histórico e saque com clareza</li>
            <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5 text-teal shrink-0" />Liberdade para trabalhar de onde estiver</li>
          </ul>
          <a href={embaixador.ctaUrl} className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-orange text-white font-semibold hover:brightness-110 transition shadow-lg">
            QUERO SER EMBAIXADOR <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5">
          {pilares.map(({ i: Icon, hex, t, d }) => (
            <div key={t} className="bg-white/10 backdrop-blur rounded-2xl p-5 flex items-start gap-4 border border-white/15">
              <div
                className="h-12 w-12 rounded-full flex items-center justify-center shrink-0 shadow-lg"
                style={{ backgroundColor: hex }}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">{t}</div>
                <div className="text-sm text-white/85 mt-1">{d}</div>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-2 gap-3 mt-1">
            <div className="bg-violet rounded-xl px-4 py-3 text-center">
              <div className="text-3xl font-bold">{embaixador.comissaoPrimeira}</div>
              <div className="text-[11px] text-white/85">1ª mensalidade</div>
            </div>
            <div className="bg-white text-foreground rounded-xl px-4 py-3 text-center">
              <div className="text-3xl font-bold text-violet">{embaixador.comissaoRecorrente}</div>
              <div className="text-[11px] text-muted-foreground">recorrente por {embaixador.mesesRecorrencia} meses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
