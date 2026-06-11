import { site } from "@/config/site";

// SEÇÃO: NEWSLETTER
export function Newsletter() {
  return (
    <section id="newsletter" className="py-10 px-6">
      <div className="max-w-7xl mx-auto rounded-2xl bg-violet text-white p-8 grid md:grid-cols-[1fr_auto] gap-4 items-center">
        <p className="text-sm md:text-base">Receba novidades, dicas e conteúdos exclusivos sobre inclusão, saúde e benefícios.</p>
        <form action={site.links.newsletter} method="POST" className="flex gap-2 w-full md:w-auto">
          <input
            type="email"
            name="email"
            required
            placeholder="Seu melhor e-mail"
            className="flex-1 md:w-72 px-4 py-3 rounded-full text-foreground text-sm outline-none bg-white"
          />
          <button type="submit" className="px-5 py-3 rounded-full bg-orange font-semibold text-sm whitespace-nowrap hover:brightness-110 transition">
            QUERO RECEBER →
          </button>
        </form>
      </div>
    </section>
  );
}
