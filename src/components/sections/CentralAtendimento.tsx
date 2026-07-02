import { Heart, Accessibility, Star, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/config/site";
import videoCentral from "@/assets/video-central.mp4.asset.json";

/**
 * SEÇÃO: CENTRAL DE ATENDIMENTO (bloco branco sobreposto ao Acompanhamento).
 * Agora inclui um vídeo curto acima do botão "CENTRAL DE ATENDIMENTO".
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
      className="relative bg-white"
    >
      <div className="max-w-3xl mx-auto px-5 md:px-6 py-14 md:py-20 text-center flex flex-col items-center gap-6">
        <Logo className="h-16 md:h-20 w-auto" />
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-foreground/85">
          {pills.map(({ Icon, label, hex }) => (
            <li key={label} className="flex items-center gap-2">
              <Icon className="h-4 w-4" style={{ color: hex }} strokeWidth={2.2} />
              {label}
            </li>
          ))}
        </ul>

        {/* Vídeo curto antes do botão */}
        <div className="mt-2 w-full max-w-2xl rounded-3xl overflow-hidden shadow-xl border border-border/60 bg-black">
          <video
            src={videoCentral.url}
            className="w-full h-auto block"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>

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
