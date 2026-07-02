import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import videoFaq from "@/assets/video-faq.mp4.asset.json";

/**
 * SEÇÃO: VÍDEO + PERGUNTAS FREQUENTES
 * Vídeo (esquerda) + Accordion de FAQ (direita) no desktop.
 * No mobile empilha: vídeo em cima, FAQ abaixo.
 */
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

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Vídeo */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-border/60 bg-black">
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

          <Accordion type="single" collapsible className="mt-6">
            {faqs.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="border-b border-border/60"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-navy">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/75 text-sm md:text-base leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
