import { Users, HeartHandshake, TrendingUp, MapPin, Handshake, CircleDollarSign, Rocket, ArrowUpRight, Lock, Heart } from "lucide-react";
import { site } from "@/config/site";

/**
 * SEÇÃO: EMBAIXADORES — fiel à referência aprovada pelo cliente.
 * Layout em coluna única (max-w ~720px), fundo azul pastel #3F74C2.
 *
 * 1. Badge pill "PROGRAMA DE EMBAIXADORES"
 * 2. Headline "Seja um Embaixador do Meu Clube TEA"
 * 3. Subtítulo com ícone de coração + destaque
 * 4. Card com 3 pilares (Impacto / Renda / Liberdade) — divisores verticais
 * 5. Parágrafo com palavras destacadas
 * 6. Divisor com coração
 * 7. Título "Seu reconhecimento por transformar vidas:"
 * 8. Barras horizontais com pill 20% (teal) e 3% (lilás)
 * 9. Card foguete com frase de fechamento
 * 10. CTA pill "QUERO SER UM EMBAIXADOR"
 * 11. Linha final com cadeado
 */
export function Ambassador() {
  const { embaixador } = site;

  const pilares = [
    { Icon: Users,        hex: "#7FC8D4", titulo: "Impacto real",      desc: "Leve saúde e benefícios para famílias que precisam." },
    { Icon: TrendingUp,   hex: "#B8A4E8", titulo: "Renda recorrente",  desc: "Ganhe todos os meses com sua rede de associados." },
    { Icon: MapPin,       hex: "#F3A35C", titulo: "Liberdade",         desc: "Trabalhe de onde estiver, no seu ritmo." },
  ];

  return (
    <section id="embaixadores" className="py-20 md:py-28 px-5 md:px-6 bg-secondary">
      <div className="relative max-w-2xl mx-auto rounded-3xl bg-ambassador-gradient text-white overflow-hidden shadow-xl">
        {/* Ornamentos decorativos à direita — orbs pastel + linhas diagonais */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(127,200,212,0.35), transparent)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -right-24 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(184,164,232,0.30), transparent)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-10 -left-16 h-48 w-48 rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(246,201,168,0.22), transparent)" }}
        />
        <svg
          aria-hidden
          className="hidden md:block pointer-events-none absolute -right-4 top-4 opacity-[0.10]"
          width="220" height="220" viewBox="0 0 220 220" fill="none"
        >
          {[30, 55, 82, 110].map((r) => (
            <circle key={r} cx="150" cy="80" r={r} stroke="white" strokeWidth="1" />
          ))}
        </svg>
        <div className="relative px-6 md:px-10 py-12 md:py-14">

          {/* 1. Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/25 rounded-full px-5 py-2.5 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase whitespace-nowrap">
              <Users className="h-4 w-4 text-teal shrink-0" />
              Programa de Embaixadores
            </span>
          </div>

          {/* 2. Headline */}
          <h2 className="mt-7 text-center font-bold text-3xl md:text-4xl leading-[1.1]">
            Seja um <span className="text-teal">Embaixador</span>
            <br />
            do Meu Clube TEA
          </h2>

          {/* 3. Subtítulo */}
          <p className="mt-5 text-center text-white/85 text-base md:text-lg max-w-lg mx-auto flex items-start justify-center gap-2">
            <Heart className="h-5 w-5 text-teal shrink-0 mt-1" />
            <span>
              Transforme vidas e construa uma{" "}
              <span className="text-teal font-semibold">renda extra recorrente</span> com propósito.
            </span>
          </p>

          {/* 4. Card 3 pilares com divisores verticais */}
          <div className="mt-8 rounded-2xl border border-white/15 bg-white/[0.05] p-5 md:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
              {pilares.map(({ Icon, hex, titulo, desc }) => (
                <div key={titulo} className="px-2 sm:px-4 text-center flex flex-col items-center gap-2.5 pt-5 sm:pt-0 first:pt-0">
                  <Icon className="h-9 w-9" style={{ color: hex }} strokeWidth={1.8} />
                  <div className="font-bold text-base" style={{ color: hex }}>{titulo}</div>
                  <p className="text-sm text-white/80 leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Parágrafo */}
          <p className="mt-7 text-center text-white/85 text-base max-w-xl mx-auto leading-relaxed">
            Ao apresentar o Meu Clube TEA, você ajuda famílias a terem acesso à{" "}
            <span className="text-teal font-semibold">saúde</span>,{" "}
            <span className="text-violet-light font-semibold">inclusão</span> e{" "}
            <span className="text-orange font-semibold">benefícios</span>, e ainda cria uma fonte de{" "}
            <span className="text-violet-light font-semibold">renda recorrente</span>.
          </p>

          {/* 6. Divisor com coração */}
          <div className="mt-7 flex items-center gap-3 max-w-sm mx-auto">
            <div className="h-px flex-1 bg-white/25" />
            <Heart className="h-5 w-5 text-violet-light" />
            <div className="h-px flex-1 bg-white/25" />
          </div>

          {/* 7. Título */}
          <h3 className="mt-5 text-center text-teal text-base md:text-lg font-semibold">
            Seu reconhecimento por transformar vidas:
          </h3>

          {/* 8. Barras horizontais empilhadas */}
          <div className="mt-6 space-y-4 max-w-xl mx-auto">
            <CommissionBar
              Icon={Handshake}
              iconColor="#7FC8D4"
              title="Bônus de indicação"
              subtitle="(primeira mensalidade)"
              value={embaixador.comissaoPrimeira}
              fillPct={20}
              fillColor="#7FC8D4"
            />
            <CommissionBar
              Icon={CircleDollarSign}
              iconColor="#B8A4E8"
              title="Bônus recorrente mensal"
              subtitle="por até 12 meses"
              value={embaixador.comissaoRecorrente}
              fillPct={12}
              fillColor="#B8A4E8"
            />
          </div>

          {/* 9. Card foguete */}
          <div className="mt-8 rounded-2xl border border-white/15 bg-white/[0.05] p-5 md:p-6 flex items-start gap-4 max-w-xl mx-auto">
            <div className="h-11 w-11 shrink-0 rounded-full flex items-center justify-center bg-teal/15 border border-teal/40">
              <Rocket className="h-5 w-5 text-teal" />
            </div>
            <p className="text-sm md:text-base leading-relaxed">
              <span className="text-teal font-semibold">Muito mais do que uma renda extra:</span>{" "}
              Faça parte de um movimento que une{" "}
              <span className="text-teal font-semibold">cuidado</span>,{" "}
              <span className="text-violet-light font-semibold">inclusão</span> e{" "}
              <span className="text-orange font-semibold">oportunidade</span>.
            </p>
          </div>

          {/* 10. CTA */}
          <div className="mt-9 flex flex-col items-center gap-3">
            <a
              href={embaixador.ctaUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cta-gradient text-white font-semibold text-sm md:text-base shadow-lg hover:brightness-105 transition tracking-wide whitespace-nowrap"
            >
              QUERO SER UM EMBAIXADOR <ArrowUpRight className="h-4 w-4 shrink-0" />
            </a>
            <p className="text-xs md:text-sm text-white/75 inline-flex items-center gap-2">
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

type BarProps = {
  Icon: typeof Handshake;
  iconColor: string;
  title: string;
  subtitle: string;
  value: string;
  fillPct: number;
  fillColor: string;
};

function CommissionBar({ Icon, iconColor, title, subtitle, value, fillPct, fillColor }: BarProps) {
  return (
    <div className="flex items-center gap-3 md:gap-4">
      {/* Ícone circular */}
      <div
        className="h-12 w-12 md:h-14 md:w-14 shrink-0 rounded-full flex items-center justify-center"
        style={{ backgroundColor: `${iconColor}22`, border: `1.5px solid ${iconColor}` }}
      >
        <Icon className="h-5 w-5 md:h-6 md:w-6" style={{ color: iconColor }} />
      </div>

      {/* Texto */}
      <div className="min-w-0 w-[42%] sm:w-[38%]">
        <div className="font-bold text-[13px] md:text-sm leading-tight">{title}</div>
        <div className="text-[11px] md:text-xs text-white/70 mt-0.5">{subtitle}</div>
      </div>

      {/* Trilho com pill preenchendo */}
      <div className="flex-1 h-10 md:h-11 rounded-full bg-white/95 relative overflow-hidden shadow-inner">
        <div
          className="absolute left-0 top-0 h-full rounded-full flex items-center justify-end px-4 text-white font-extrabold text-base md:text-lg"
          style={{
            width: `${Math.max(fillPct, 22)}%`,
            background: `linear-gradient(90deg, ${fillColor}, ${fillColor})`,
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}
