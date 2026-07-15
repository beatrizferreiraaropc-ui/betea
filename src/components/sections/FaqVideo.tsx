import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Play } from "lucide-react";
import videoFaq from "@/assets/video-faq.mp4.asset.json";

export function FaqVideo() {
  const faqs = [
    {
      q: "Como funcionam as consultas por telemedicina?",
      a: "Você agenda pelo site ou WhatsApp e é atendido por videochamada, direto do computador ou celular, sem sair de casa e sem filas.",
    },
    {
      q: "O Meu Clube TEA atende em todo o Brasil?",
      a: "Sim. Nossa rede cobre 26 estados + DF, com mais de 1.700 municípios atendidos por telemedicina, telepsicologia e parceiros presenciais.",
    },
    {
      q: "Posso cancelar a assinatura quando quiser?",
      a: "Sim. A assinatura é mensal, sem fidelidade e sem burocracia. O cancelamento pode ser feito com um toque, direto pela sua área do cliente.",
    },
    {
      q: "Preciso ter diagnóstico de TEA ou PCD para assinar?",
      a: "Não. Os planos são abertos a pessoas com TEA, PCD, neurodivergentes e a toda família que busca mais saúde, economia e tranquilidade no dia a dia.",
    },
    {
      q: "Como funciona a Assistência PET?",
      a: "Você conta com veterinário online e descontos exclusivos em produtos e serviços para o seu pet, incluído nos planos que oferecem esse benefício.",
    },
  ];
  const palette = ["#7FC8D4", "#B8A4E8", "#F3A35C"];

  return (
    <section id="faq" className="relative py-16 md:py-24 bg-mist overflow-hidden">
      {/* Dot-grid sutil no topo */}
      <svg
        aria-hidden
        className="pointer-events-none absolute top-6 right-6 opacity-40 hidden md:block"
        width="180" height="120" viewBox="0 0 180 120"
      >
        {Array.from({ length: 9 }).map((_, y) =>
          Array.from({ length: 14 }).map((__, x) => (
            <circle key={`${x}-${y}`} cx={4 + x * 13} cy={4 + y * 13} r="1" fill="#B8A4E8" />
          ))
        )}
      </svg>

      <div className="relative max-w-7xl mx-auto px-5 md:px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Vídeo com glow + gradient-border */}
        <div className="relative">
          {/* Glows pastel */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] blur-3xl opacity-70"
            style={{ background: "radial-gradient(60% 60% at 20% 30%, rgba(127,200,212,0.55), transparent), radial-gradient(50% 50% at 80% 80%, rgba(184,164,232,0.45), transparent)" }}
          />
          <div
            className="relative rounded-3xl overflow-hidden bg-black p-[1px]"
            style={{ background: "linear-gradient(135deg, #3F74C2, #7FC8D4, #B8A4E8)" }}
          >
            <div className="rounded-[calc(1.5rem-1px)] overflow-hidden bg-black">
              <video
                src={videoFaq.url}
                className="w-full h-auto block"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            </div>
          </div>
          {/* Badge Play flutuante */}
          <span
            aria-hidden
            className="glass-pill absolute -bottom-3 left-4 md:left-6 inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-semibold text-navy"
          >
            <Play className="h-3 w-3 fill-navy" />
            Veja em 30s
          </span>
        </div>

        {/* FAQ */}
        <div>
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-violet">
            Tire suas dúvidas
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Perguntas <span className="text-navy">Frequentes</span>
          </h2>
          <p className="mt-3 text-foreground/70 text-sm md:text-base">
            As respostas mais pedidas por quem está começando a jornada com a gente.
          </p>

          <Accordion type="single" collapsible className="mt-6 space-y-3">
            {faqs.map((item, i) => {
              const c = palette[i % palette.length];
              return (
                <AccordionItem
                  key={item.q}
                  value={`item-${i}`}
                  className="glass-card rounded-2xl border-0 px-4 md:px-5 overflow-hidden"
                  style={{ borderLeft: `3px solid ${c}` }}
                >
                  <AccordionTrigger
                    className="text-left text-[15px] md:text-base font-semibold text-foreground hover:no-underline py-4 [&>svg]:transition-colors"
                    style={{ color: undefined }}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="h-8 w-8 rounded-full inline-flex items-center justify-center shrink-0 text-[13px] font-bold"
                        style={{ backgroundColor: `${c}22`, color: c, border: `1px solid ${c}55` }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/75 text-sm md:text-[15px] leading-relaxed pb-4 pl-11">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
