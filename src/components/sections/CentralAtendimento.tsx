import { Heart, Accessibility, Star, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/config/site";

/**
 * SEÇÃO: CENTRAL DE ATENDIMENTO (bloco branco sobreposto ao CTA do Embaixador)
 *
 * Vem LOGO após a seção Ambassador para sobrepor o botão "QUERO SER UM EMBAIXADOR",
 * conforme referência aprovada. Mesmo bloco em todas as breakpoints (mobile/tablet/desktop).
 */
export function CentralAtendimento() {
  const pills = [
    { Icon: Heart, label: "Cuidado", hex: "#7FC8D4" },
    { Icon: Accessibility, label: "Inclusão", hex: "#B8A4E8" },
    { Icon: Star, label: "Benefícios", hex: "#F3A35C" },
  ];

  return (
    <section
      aria-label="Central de atendimento"
      className="relative -mt-20 md:-mt-24 z-10 bg-white rounded-t-3xl shadow-[0_-20px_40px_-30px_rgba(11,46,138,0.25)]"
    >
      <div className="max-w-3xl mx-auto px-5 md:px-6 py-10 md:py-14 text-center flex flex-col items-center gap-5">
        <Logo className="h-16 md:h-20 w-auto" />
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-foreground/85">
          {pills.map(({ Icon, label, hex }) => (
            <li key={label} className="flex items-center gap-2">
              <Icon className="h-4 w-4" style={{ color: hex }} strokeWidth={2.2} />
              {label}
            </li>
          ))}
        </ul>
        <a
          href={site.links.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-navy/70 text-navy font-semibold text-sm hover:bg-navy hover:text-white transition"
        >
          CENTRAL DE ATENDIMENTO
          <span className="h-6 w-6 rounded-full bg-[#25D366] flex items-center justify-center">
            <MessageCircle className="h-3.5 w-3.5 text-white" />
          </span>
        </a>
      </div>
    </section>
  );
}
