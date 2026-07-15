import { Heart, Accessibility, Star, MessageCircle, Play } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/config/site";
import videoCentral from "@/assets/video-central.mp4.asset.json";

export function CentralAtendimento() {
  const pills = [
    { Icon: Heart, label: "Cuidado", hex: "#7FC8D4" },
    { Icon: Accessibility, label: "Inclusão", hex: "#B8A4E8" },
    { Icon: Star, label: "Benefícios", hex: "#F3A35C" },
  ];

  return (
    <section
      aria-label="Central de atendimento"
      className="relative bg-mist-down overflow-hidden"
    >
      {/* Blobs pastel */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 -left-24 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(127,200,212,0.30), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -right-24 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(184,164,232,0.28), transparent)" }}
      />

      <div className="relative max-w-3xl mx-auto px-5 md:px-6 py-14 md:py-20 text-center flex flex-col items-center gap-6">
        <Logo className="h-16 md:h-20 w-auto" />
        <ul className="flex flex-wrap items-center justify-center gap-2">
          {pills.map(({ Icon, label, hex }) => (
            <li
              key={label}
              className="glass-pill inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-foreground/85"
            >
              <Icon className="h-4 w-4" style={{ color: hex }} strokeWidth={2.2} />
              {label}
            </li>
          ))}
        </ul>

        {/* Vídeo com glow + gradient-border */}
        <div className="relative w-full max-w-2xl mt-2">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] blur-3xl opacity-70"
            style={{ background: "radial-gradient(60% 60% at 20% 30%, rgba(127,200,212,0.55), transparent), radial-gradient(50% 50% at 80% 80%, rgba(184,164,232,0.45), transparent)" }}
          />
          <div
            className="relative rounded-3xl overflow-hidden p-[1px]"
            style={{ background: "linear-gradient(135deg, #3F74C2, #7FC8D4, #B8A4E8)" }}
          >
            <div className="rounded-[calc(1.5rem-1px)] overflow-hidden bg-black">
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
          </div>
          <span
            aria-hidden
            className="glass-pill absolute -bottom-3 left-4 md:left-6 inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-semibold text-navy"
          >
            <Play className="h-3 w-3 fill-navy" />
            Assista agora
          </span>
        </div>

        <a
          href={site.links.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-navy/70 text-navy font-semibold text-sm bg-white/60 backdrop-blur hover:bg-navy hover:text-white transition"
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
