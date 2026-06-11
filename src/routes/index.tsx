import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { Plans } from "@/components/sections/Plans";
import { FeaturesBar } from "@/components/sections/FeaturesBar";
import { Impact } from "@/components/sections/Impact";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { VideoSection } from "@/components/sections/VideoSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { About } from "@/components/sections/About";
import { Partners } from "@/components/sections/Partners";
import { Ambassador } from "@/components/sections/Ambassador";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meu Clube TEA — Cuidado e benefícios para famílias com TEA, PCD e neurodivergentes" },
      {
        name: "description",
        content:
          "Telemedicina, telepsicologia, assistência funeral, assistência PET e descontos exclusivos para famílias com TEA, PCD e neurodivergentes.",
      },
      { property: "og:title", content: "Meu Clube TEA" },
      { property: "og:description", content: "Cuidado especializado e benefícios transformadores para sua família." },
    ],
  }),
  component: Index,
});

/**
 * LANDING PAGE — MEU CLUBE TEA
 * Cada <Section /> abaixo é um arquivo independente em src/components/sections/.
 * Todos os links/textos/URLs vivem em src/config/site.ts.
 * Ordem de seções (mesma ordem que será replicada no WordPress):
 *  1. Header
 *  2. Hero
 *  3. Benefits        (4 ícones de benefícios)
 *  4. Plans           (cards de planos com link para WooCommerce)
 *  5. FeaturesBar     (faixa de diferenciais)
 *  6. VideoSection    (vídeo apresentação + reels verticais)
 *  7. Impact          (estatísticas)
 *  8. HowItWorks      (4 passos)
 *  9. Testimonials    (depoimentos)
 * 10. About           (sobre, missão, visão, valores)
 * 11. Partners        (logos parceiros)
 * 12. Ambassador      (programa de embaixadores)
 * 13. Newsletter
 * 14. Footer
 */
function Index() {
  return (
    <main>
      <Header />
      <Hero />
      <Benefits />
      <Plans />
      <FeaturesBar />
      <VideoSection />
      <Impact />
      <HowItWorks />
      <Testimonials />
      <About />
      <Partners />
      <Ambassador />
      <Newsletter />
      <Footer />
    </main>
  );
}
