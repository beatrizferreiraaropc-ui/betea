import { PlayCircle } from "lucide-react";
import { site } from "@/config/site";

// SEÇÃO: VÍDEOS
// Cole os embeds em src/config/site.ts → site.videos
// Horizontal: 1920x1080 · Vertical (depoimentos): 1080x1920
export function VideoSection() {
  const { apresentacao, depoimentos } = site.videos;

  return (
    <section id="videos" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-violet font-semibold">Em movimento</div>
          <h3 className="mt-3 text-3xl md:text-4xl font-bold">{apresentacao.titulo}</h3>
          <p className="mt-3 text-muted-foreground">{apresentacao.subtitulo}</p>
        </div>

        {/* Vídeo principal — horizontal 16:9 */}
        <div className="mt-10 mx-auto max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-navy-gradient relative">
          {apresentacao.embedUrl ? (
            <iframe
              src={apresentacao.embedUrl}
              title={apresentacao.titulo}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80 gap-3">
              <PlayCircle className="h-16 w-16 text-teal" />
              <div className="text-sm">Cole o URL do vídeo em <code className="text-teal">site.videos.apresentacao.embedUrl</code></div>
              <div className="text-xs text-white/50">Formato esperado: 1920x1080</div>
            </div>
          )}
        </div>

        {/* Vídeos verticais — depoimentos 9:16 */}
        <div className="mt-16">
          <h4 className="text-center text-2xl font-bold">{depoimentos.titulo}</h4>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {depoimentos.items.map((v, idx) => (
              <div key={idx} className="aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-navy-gradient relative">
                {v.embedUrl ? (
                  <iframe
                    src={v.embedUrl}
                    title={v.nome}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80 gap-2 p-4 text-center">
                    <PlayCircle className="h-10 w-10 text-teal" />
                    <div className="text-xs">{v.nome}</div>
                    <div className="text-[10px] text-white/50">Vertical 1080x1920</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
