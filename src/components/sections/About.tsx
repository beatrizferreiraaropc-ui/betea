import { Heart, Users, Sparkles, Shield, Handshake, Accessibility, Eye, Smile } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { site } from "@/config/site";

/**
 * SEÇÃO: SOBRE NÓS
 * Versão dinâmica — substitui o bloco de texto corrido por 3 cards-resumo
 * com ícones coloridos, mantendo os parágrafos completos como bloco final
 * (texto que o cliente nos enviou). Missão / Visão em dois cards e valores
 * em pills com ícones específicos.
 */
export function About() {
  const { sobre } = site;

  const cards: { icon: LucideIcon; hex: string; t: string; d: string }[] = [
    {
      icon: Heart,
      hex: "#7FC8D4",
      t: "Propósito simples e poderoso",
      d: "Tornar o cuidado mais acessível para pessoas com TEA, PCD, neurodivergentes e suas famílias.",
    },
    {
      icon: Users,
      hex: "#B8A4E8",
      t: "Rede de apoio real",
      d: "Consultas, terapias, medicamentos e despesas do dia a dia centralizadas em um único lugar.",
    },
    {
      icon: Sparkles,
      hex: "#F3A35C",
      t: "Saúde, acolhimento e economia",
      d: "Mais do que um clube de benefícios: praticidade, segurança e qualidade de vida.",
    },
  ];

  const valoresIcons: Record<string, LucideIcon> = {
    Inclusão: Accessibility,
    Respeito: Handshake,
    Empatia: Heart,
    Acessibilidade: Accessibility,
    Transparência: Eye,
    "Compromisso Social": Shield,
    Humanização: Smile,
  };

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-violet font-semibold">Quem somos</div>
          <h3 className="mt-3 text-3xl md:text-4xl font-bold">{sobre.titulo}</h3>
          <p className="mt-3 text-muted-foreground">{sobre.subtitulo}</p>
        </div>

        {/* 3 cards-resumo com ícones coloridos */}
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {cards.map(({ icon: Icon, hex, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition">
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center shadow-md"
                style={{ backgroundColor: hex }}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div className="mt-4 font-bold">{t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        {/* Missão / Visão */}
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl bg-navy text-white p-8">
            <div className="text-xs uppercase tracking-widest text-teal font-bold">Nossa Missão</div>
            <p className="mt-3 text-sm leading-relaxed">{sobre.missao}</p>
          </div>
          <div className="rounded-2xl bg-violet-gradient text-white p-8">
            <div className="text-xs uppercase tracking-widest text-white/85 font-bold">Nossa Visão</div>
            <p className="mt-3 text-sm leading-relaxed">{sobre.visao}</p>
          </div>
        </div>

        {/* Texto completo do cliente (mantido para SEO/contexto) */}
        <div className="mt-12 max-w-3xl mx-auto space-y-4 text-foreground/80 leading-relaxed">
          {sobre.paragrafos.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Valores com ícones específicos */}
        <div className="mt-12">
          <div className="text-center text-xs uppercase tracking-[0.3em] text-violet font-semibold">Nossos Valores</div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {sobre.valores.map((v) => {
              const Icon = valoresIcons[v] ?? Heart;
              return (
                <span
                  key={v}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium"
                >
                  <Icon className="h-4 w-4 text-violet" />
                  {v}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
