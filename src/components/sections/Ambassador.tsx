import { ArrowRight, Check, ChevronRight } from "lucide-react";
import ambassadors from "@/assets/ambassadors.jpg";
import { site } from "@/config/site";

// SEÇÃO: EMBAIXADORES
export function Ambassador() {
  const { embaixador } = site;
  return (
    <section id="embaixadores" className="py-16 px-6">
      <div className="max-w-7xl mx-auto rounded-3xl bg-hero-gradient text-white p-10 lg:p-14 grid lg:grid-cols-2 gap-10 items-center overflow-hidden relative">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-teal font-semibold">Seja um embaixador de mudança</div>
          <h3 className="mt-3 text-4xl font-bold leading-tight">Seja um Agente de Mudança.<br />Seja o exemplo e prospere.</h3>
          <p className="mt-4 text-white/85">Indique o Meu Clube TEA e ganhe comissões em famílias.</p>
          <ul className="mt-5 space-y-2 text-sm">
            <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5 text-teal" />{embaixador.comissaoPrimeira} de comissão na primeira mensalidade</li>
            <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5 text-teal" />{embaixador.comissaoRecorrente} de comissão recorrente por {embaixador.mesesRecorrencia} meses</li>
            <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5 text-teal" />Histórico e saque com clareza</li>
            <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5 text-teal" />Liberdade para trabalhar de onde estiver</li>
          </ul>
          <a href={embaixador.ctaUrl} className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-orange text-white font-semibold hover:brightness-110 transition shadow-lg">
            QUERO SER EMBAIXADOR <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="relative">
          <img src={ambassadors} alt="Embaixadores Meu Clube TEA" loading="lazy" width={1024} height={768} className="rounded-2xl shadow-2xl w-full" />
          <div className="absolute top-6 right-6 flex flex-col gap-3">
            <div className="bg-violet/90 backdrop-blur rounded-xl px-4 py-3 text-center">
              <div className="text-3xl font-bold">{embaixador.comissaoPrimeira}</div>
              <div className="text-[10px] text-white/80">1ª mensalidade</div>
            </div>
            <div className="bg-white/95 text-foreground rounded-xl px-4 py-3 text-center">
              <div className="text-3xl font-bold text-violet">{embaixador.comissaoRecorrente}</div>
              <div className="text-[10px] text-muted-foreground">recorrente por {embaixador.mesesRecorrencia} meses</div>
            </div>
          </div>
          <div className="mt-5 hidden lg:flex flex-col gap-1 text-sm">
            <div className="flex gap-2 text-white/90"><ChevronRight className="h-4 w-4 text-teal" />Renda com propósito</div>
            <div className="flex gap-2 text-white/90"><ChevronRight className="h-4 w-4 text-teal" />Impacto real</div>
            <div className="flex gap-2 text-white/90"><ChevronRight className="h-4 w-4 text-teal" />Liberdade financeira</div>
          </div>
        </div>
      </div>
    </section>
  );
}
