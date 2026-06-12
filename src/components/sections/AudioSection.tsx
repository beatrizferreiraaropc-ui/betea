import { Headphones } from "lucide-react";
import { site } from "@/config/site";

// SEÇÃO: ÁUDIOS / PODCAST
// Cliente vai colocar áudios (depoimentos, dicas, podcast). Edite em site.audios.
export function AudioSection() {
  const { audios } = site;
  return (
    <section id="audios" className="py-16 md:py-20 bg-background">
      <div className="max-w-5xl mx-auto px-5 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-violet font-semibold">Ouça quem já faz parte</div>
          <h3 className="mt-3 text-3xl md:text-4xl font-bold">{audios.titulo}</h3>
          <p className="mt-3 text-muted-foreground">{audios.subtitulo}</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {audios.items.map((a, idx) => (
            <div key={idx} className="rounded-2xl border border-border bg-card p-5 flex flex-col gap-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 shrink-0 rounded-full bg-violet/10 flex items-center justify-center">
                  <Headphones className="h-5 w-5 text-violet" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm md:text-base truncate">{a.titulo}</div>
                  <div className="text-xs text-muted-foreground">{a.autor}</div>
                </div>
              </div>
              {a.src ? (
                <audio controls preload="none" className="w-full">
                  <source src={a.src} />
                  Seu navegador não suporta áudio HTML5.
                </audio>
              ) : (
                <div className="text-xs text-muted-foreground rounded-lg bg-secondary py-3 px-4">
                  Cole o URL do áudio em <code className="text-violet">site.audios.items[{idx}].src</code>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
