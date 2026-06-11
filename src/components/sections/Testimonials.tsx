import { BadgeCheck, Star } from "lucide-react";

// SEÇÃO: DEPOIMENTOS
export function Testimonials() {
  const items = [
    { q: "O Meu Clube TEA mudou nossa rotina. Conseguimos atendimento rápido e humanizado quando mais precisamos.", n: "Juliana A.", r: "Mãe de menina com TEA" },
    { q: "A telepsicologia foi essencial para nosso filho. Profissionais incríveis e muito acolhedores.", n: "Carlos M.", r: "Pai de menino com TEA" },
    { q: "Os descontos e benefícios fazem toda a diferença no nosso orçamento. Super indico!", n: "Fernanda L.", r: "Mãe na nossa família TEA" },
  ];
  return (
    <section id="depoimentos" className="py-20 bg-navy-gradient text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_2fr] gap-10 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-teal font-semibold">Quem já faz parte, recomenda</div>
          <h3 className="mt-3 text-4xl font-bold leading-tight">Histórias reais,<br />pessoas reais.</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((t) => (
            <div key={t.n} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
              <p className="text-sm leading-relaxed">&ldquo;{t.q}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-violet-light/50" />
                <div>
                  <div className="text-sm font-semibold flex items-center gap-1">
                    {t.n} <BadgeCheck className="h-3.5 w-3.5 text-teal" />
                  </div>
                  <div className="text-[11px] text-white/60">{t.r}</div>
                </div>
              </div>
              <div className="mt-2 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-orange text-orange" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
