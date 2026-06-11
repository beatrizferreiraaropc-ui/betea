import { site } from "@/config/site";

// SEÇÃO: SOBRE NÓS
export function About() {
  const { sobre } = site;
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-violet font-semibold">Quem somos</div>
          <h3 className="mt-3 text-3xl md:text-4xl font-bold">{sobre.titulo}</h3>
          <p className="mt-3 text-muted-foreground">{sobre.subtitulo}</p>
        </div>
        <div className="mt-10 space-y-5 text-foreground/80 leading-relaxed">
          {sobre.paragrafos.map((p, i) => (<p key={i}>{p}</p>))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-navy text-white p-8">
            <div className="text-xs uppercase tracking-widest text-teal font-bold">Nossa Missão</div>
            <p className="mt-3 text-sm leading-relaxed">{sobre.missao}</p>
          </div>
          <div className="rounded-2xl bg-violet-gradient text-white p-8">
            <div className="text-xs uppercase tracking-widest text-white/80 font-bold">Nossa Visão</div>
            <p className="mt-3 text-sm leading-relaxed">{sobre.visao}</p>
          </div>
        </div>

        <div className="mt-10">
          <div className="text-center text-xs uppercase tracking-[0.3em] text-violet font-semibold">Nossos Valores</div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {sobre.valores.map((v) => (
              <span key={v} className="px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium">
                💙 {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
