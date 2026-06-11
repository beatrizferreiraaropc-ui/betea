import { site } from "@/config/site";

// SEÇÃO: PARCEIROS
export function Partners() {
  return (
    <section id="parceiros" className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-violet font-semibold">Quem caminha com a gente</div>
        <h3 className="mt-3 text-3xl font-bold">Parceiros que fortalecem nosso propósito.</h3>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {site.parceiros.map((p) => (
            <a
              key={p.nome}
              href={p.url}
              className="h-16 rounded-xl border border-border flex items-center justify-center font-bold text-foreground/70 hover:text-violet hover:border-violet transition"
            >
              {p.nome}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
