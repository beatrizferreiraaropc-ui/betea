import { Heart, Users, Sparkles, Target, Eye, Gem } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { site } from "@/config/site";
import familia from "@/assets/familia-cachorro.asset.json";

export function About() {
  const { sobre } = site;

  const cards: { Icon: LucideIcon; hex: string; titulo: string; texto: string }[] = [
    { Icon: Target, hex: "#7FC8D4", titulo: "Missão", texto: sobre.missao },
    { Icon: Eye,    hex: "#B8A4E8", titulo: "Visão",  texto: sobre.visao  },
    { Icon: Gem,    hex: "#F3A35C", titulo: "Valores", texto: sobre.valores.join(" · ") },
  ];

  return (
    <section id="sobre" className="py-20 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* Imagem + Texto */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="order-1 md:order-1">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-border">
              <img
                src={familia.url}
                alt="Família com criança usando camiseta do Meu Clube TEA e cachorro golden no sofá"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-2 md:order-2">
            <div className="text-xs uppercase tracking-[0.3em] text-navy font-semibold">Quem somos</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">{sobre.titulo}</h2>
            <p className="mt-3 text-base text-muted-foreground">{sobre.subtitulo}</p>
            <div className="mt-5 space-y-3 text-foreground/80 leading-relaxed text-[15px]">
              {sobre.paragrafos.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Cards Missão / Visão / Valores */}
        <div className="mt-14 md:mt-16 grid md:grid-cols-3 gap-5">
          {cards.map(({ Icon, hex, titulo, texto }) => (
            <article
              key={titulo}
              className="rounded-2xl border border-border bg-card p-6 md:p-7 shadow-none hover:shadow-lg hover:-translate-y-0.5 transition"
            >
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${hex}26`, border: `1.5px solid ${hex}` }}
              >
                <Icon className="h-6 w-6" style={{ color: hex }} />
              </div>
              <h3 className="mt-4 font-bold text-lg">{titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
