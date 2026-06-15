import { Users, HeartHandshake, TrendingUp, MapPin, Handshake, CircleDollarSign, Rocket, ArrowUpRight, Lock } from "lucide-react";
import { site } from "@/config/site";

/**
 * SEÇÃO: EMBAIXADORES (PROGRAMA DE EMBAIXADORES)
 * Referência: arte enviada pelo cliente (infográfico em fundo navy).
 *
 * Estrutura (fiel à referência):
 *   1. Badge superior "PROGRAMA DE EMBAIXADORES"
 *   2. Headline em 2 linhas — "Embaixador" em teal
 *   3. Subtítulo com ícone de coração + destaque "renda extra recorrente"
 *   4. Card escuro com 3 pilares (Impacto real / Renda recorrente / Liberdade)
 *   5. Parágrafo com destaques coloridos
 *   6. Divisor com coração
 *   7. Barras de comissão: 20% (teal) e 3% (violeta) por até 12 meses
 *   8. Bloco com foguete + frase de fechamento
 *   9. CTA laranja "QUERO SER UM EMBAIXADOR"
 *  10. Linha "Processo simples, seguro e 100% online"
 *
 * Editar valores em: src/config/site.ts → embaixador.
 */
export function Ambassador() {
  const { embaixador } = site;

  const pilares = [
    {
      Icon: HeartHandshake,
      hex: "#00B8D9",
      titulo: "Impacto real",
      desc: "Leve saúde e benefícios para famílias que precisam.",
    },
    {
      Icon: TrendingUp,
      hex: "#A06BFF",
      titulo: "Renda recorrente",
      desc: "Ganhe todos os meses com sua rede de associados.",
    },
    {
      Icon: MapPin,
      hex: "#FF8A00",
      titulo: "Liberdade",
      desc: "Trabalhe de onde estiver, no seu ritmo.",
    },
  ];

  return (
    <section id="embaixadores" className="pt-16 md:pt-20 pb-28 md:pb-36 px-5 md:px-6 bg-secondary">
      <div className="max-w-5xl mx-auto rounded-3xl bg-navy-gradient text-white overflow-hidden shadow-2xl">
        <div className="px-6 md:px-12 pt-10 md:pt-14 pb-10 md:pb-14">
          {/* 1. Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-5 py-2.5 text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase">
              <Users className="h-4 w-4 text-teal" />
              Programa de Embaixadores
            </span>
          </div>

          {/* 2. Headline */}
          <h2 className="mt-6 text-center font-bold text-3xl md:text-5xl leading-[1.1]">
            Seja um <span className="text-teal">Embaixador</span>
            <br />
            do Meu Clube TEA
          </h2>

          {/* 3. Subtítulo */}
          <p className="mt-5 text-center text-white/85 text-base md:text-lg max-w-xl mx-auto flex items-start justify-center gap-2">
            <HeartHandshake className="h-5 w-5 text-teal shrink-0 mt-0.5" />
            <span>
              Transforme vidas e construa uma{" "}
              <span className="text-teal font-semibold">renda extra recorrente</span> com propósito.
            </span>
          </p>

          {/* 4. Card 3 pilares */}
          <div className="mt-8 rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur p-5 md:p-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {pilares.map(({ Icon, hex, titulo, desc }) => (
                <div key={titulo} className="px-2 sm:px-4 text-center flex flex-col items-center gap-3 pt-5 sm:pt-0 first:pt-0">
                  <div
                    className="h-14 w-14 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: `${hex}22`, color: hex, border: `1.5px solid ${hex}66` }}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="font-bold text-base" style={{ color: hex }}>{titulo}</div>
                  <p className="text-sm text-white/80 leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Parágrafo com destaques */}
          <p className="mt-8 text-center text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Ao apresentar o Meu Clube TEA, você ajuda famílias a terem acesso à{" "}
            <span className="text-teal font-semibold">saúde</span>,{" "}
            <span className="text-violet-light font-semibold">inclusão</span> e{" "}
            <span className="text-orange font-semibold">benefícios</span>, e ainda cria uma fonte de{" "}
            <span className="text-violet-light font-semibold">renda recorrente</span>.
          </p>

          {/* 6. Divisor com coração */}
          <div className="mt-8 flex items-center gap-3 max-w-md mx-auto">
            <div className="h-px flex-1 bg-white/20" />
            <HeartHandshake className="h-5 w-5 text-violet-light" />
            <div className="h-px flex-1 bg-white/20" />
          </div>

          <h3 className="mt-6 text-center text-teal text-base md:text-lg font-semibold">
            Seu reconhecimento por transformar vidas:
          </h3>

          {/* 7. Barras de comissão */}
          <div className="mt-6 space-y-4 max-w-2xl mx-auto">
            <CommissionRow
              Icon={Handshake}
              iconBg="#00B8D9"
              title="Bônus de indicação"
              subtitle="(primeira mensalidade)"
              value={embaixador.comissaoPrimeira}
              valueBg="linear-gradient(90deg,#00B8D9,#26D4F0)"
              progress={92}
            />
            <CommissionRow
              Icon={CircleDollarSign}
              iconBg="#7B2FF7"
              title="Bônus recorrente mensal"
              subtitle={`por até ${embaixador.mesesRecorrencia} meses`}
              value={embaixador.comissaoRecorrente}
              valueBg="linear-gradient(90deg,#7B2FF7,#A06BFF)"
              progress={28}
            />
          </div>

          {/* 8. Foguete + frase de fechamento */}
          <div className="mt-8 rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur p-5 md:p-6 flex items-start gap-4 max-w-2xl mx-auto">
            <div className="h-12 w-12 shrink-0 rounded-full flex items-center justify-center bg-teal/15 border border-teal/40">
              <Rocket className="h-6 w-6 text-teal" />
            </div>
            <p className="text-sm md:text-base leading-relaxed">
              <span className="text-teal font-semibold">Muito mais do que uma renda extra:</span>{" "}
              Faça parte de um movimento que une{" "}
              <span className="text-teal font-semibold">cuidado</span>,{" "}
              <span className="text-violet-light font-semibold">inclusão</span> e{" "}
              <span className="text-orange font-semibold">oportunidade</span>.
            </p>
          </div>

          {/* 9. CTA */}
          <div className="mt-9 flex flex-col items-center gap-3">
            <a
              href={embaixador.ctaUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cta-gradient text-white font-semibold text-sm md:text-base shadow-lg hover:brightness-110 transition tracking-wide"
            >
              QUERO SER UM EMBAIXADOR <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="text-xs md:text-sm text-white/70 inline-flex items-center gap-2">
              <Lock className="h-3.5 w-3.5" />
              Processo simples, seguro e{" "}
              <span className="text-teal font-semibold">100% online</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

type RowProps = {
  Icon: typeof Handshake;
  iconBg: string;
  title: string;
  subtitle: string;
  value: string;
  valueBg: string;
  progress: number;
};

function CommissionRow({ Icon, iconBg, title, subtitle, value, valueBg, progress }: RowProps) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="h-12 w-12 md:h-14 md:w-14 shrink-0 rounded-full flex items-center justify-center shadow-lg"
        style={{ backgroundColor: `${iconBg}22`, border: `1.5px solid ${iconBg}` }}
      >
        <Icon className="h-6 w-6 md:h-7 md:w-7" style={{ color: iconBg }} />
      </div>

      <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-[1fr_auto] items-center gap-3">
        <div className="min-w-0">
          <div className="font-bold text-sm md:text-base leading-tight">{title}</div>
          <div className="text-xs md:text-sm text-white/70">{subtitle}</div>
        </div>

        <div className="relative w-full sm:w-56 h-10 rounded-full bg-white overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ width: `${progress}%`, background: valueBg }}
          />
          <span className="relative z-10 h-full flex items-center pl-4 font-extrabold text-white text-lg md:text-xl">
            {value}
          </span>
        </div>
      </div>
    </div>
  );
}
