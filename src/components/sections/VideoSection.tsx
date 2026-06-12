import { useState } from "react";
import { Play } from "lucide-react";
import { site } from "@/config/site";

/**
 * SEÇÃO: DEPOIMENTOS EM VÍDEO
 * Layout limpo, sem cores quentes — para preservar a hierarquia visual.
 * No Elementor cada card vira uma coluna onde você substitui o bloco superior
 * por um widget "Vídeo" (YouTube/Vimeo/MP4) mantendo nome + descrição abaixo.
 */
export function VideoSection() {
  const { depoimentos } = site.videos;
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="videos" className="py-16 md:py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-violet font-semibold">
            Quem já faz parte recomenda
          </div>
          <h3 className="mt-3 text-3xl md:text-4xl font-bold">Histórias reais, pessoas reais</h3>
          <p className="mt-3 text-muted-foreground">{depoimentos.titulo}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {depoimentos.items.map((v, idx) => {
            const isOpen = openIdx === idx && v.embedUrl;
            return (
              <article
                key={idx}
                className="rounded-2xl border border-border bg-card p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition"
              >
                {/* SLOT DE VÍDEO — no Elementor troque por um widget Video */}
                <div className="aspect-video rounded-xl overflow-hidden bg-navy-gradient relative">
                  {isOpen ? (
                    <iframe
                      src={v.embedUrl}
                      title={v.nome}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setOpenIdx(idx)}
                      className="absolute inset-0 flex items-center justify-center group"
                      aria-label={`Assistir vídeo de ${v.nome}`}
                    >
                      <span className="h-14 w-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg transition group-hover:scale-105">
                        <Play className="h-6 w-6 text-navy fill-navy ml-0.5" />
                      </span>
                    </button>
                  )}
                </div>

                {/* Identificação — equivalente ao card de áudio */}
                <div className="flex items-center gap-3 px-1">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-violet/10 flex items-center justify-center">
                    <Play className="h-4 w-4 text-violet fill-violet ml-0.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm md:text-base truncate">{v.nome}</div>
                    <div className="text-xs text-muted-foreground">Cliente Meu Clube TEA</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
