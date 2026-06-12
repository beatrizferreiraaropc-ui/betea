import { useState } from "react";
import { Play } from "lucide-react";
import { site } from "@/config/site";

// SEÇÃO: VÍDEOS — cards compactos no mesmo formato dos depoimentos.
// Cada card mostra um ícone de play colorido, nome da pessoa e abre o vídeo ao clicar.
export function VideoSection() {
  const { depoimentos } = site.videos;
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const colors = ["#00B8D9", "#7B2FF7", "#FF8A00"];

  return (
    <section id="videos" className="py-16 md:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-violet font-semibold">Quem já faz parte e recomenda</div>
          <h3 className="mt-3 text-3xl md:text-4xl font-bold">Histórias reais, pessoas reais</h3>
          <p className="mt-3 text-muted-foreground">{depoimentos.titulo}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {depoimentos.items.map((v, idx) => {
            const hex = colors[idx % colors.length];
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="bg-card rounded-2xl border border-border p-6 text-center shadow-sm hover:shadow-lg transition">
                {isOpen && v.embedUrl ? (
                  <div className="aspect-video rounded-xl overflow-hidden bg-black">
                    <iframe
                      src={v.embedUrl}
                      title={v.nome}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <button
                    onClick={() => setOpenIdx(idx)}
                    className="group mx-auto h-20 w-20 rounded-full flex items-center justify-center shadow-lg transition hover:scale-105"
                    style={{ backgroundColor: hex }}
                    aria-label={`Assistir vídeo de ${v.nome}`}
                  >
                    <Play className="h-8 w-8 text-white fill-white ml-1" />
                  </button>
                )}
                <div className="mt-5 font-bold text-base">{v.nome}</div>
                <div className="text-xs text-muted-foreground mt-1">Cliente Meu Clube TEA</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
