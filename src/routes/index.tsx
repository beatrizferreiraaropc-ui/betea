import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { Plans } from "@/components/sections/Plans";
import { FeaturesBar } from "@/components/sections/FeaturesBar";
import { VideoSection } from "@/components/sections/VideoSection";
import { PartnersStats } from "@/components/sections/PartnersStats";
import { Impact } from "@/components/sections/Impact";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { About } from "@/components/sections/About";
import { Partners } from "@/components/sections/Partners";
import { Ambassador } from "@/components/sections/Ambassador";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meu Clube TEA — Health Tech para famílias com TEA, PCD e neurodivergentes" },
      {
        name: "description",
        content:
          "Telemedicina, telepsicologia, assistência familiar, assistência PET e descontos exclusivos para famílias com TEA, PCD e neurodivergentes. Cobertura nacional.",
      },
      { property: "og:title", content: "Meu Clube TEA" },
      { property: "og:description", content: "Cuidado · Inclusão · Benefícios — Health Tech Premium Humanizada." },
    ],
  }),
  component: Index,
});

/**
 * LANDING PAGE — MEU CLUBE TEA
 * Cada <Section /> abaixo é um arquivo independente em src/components/sections/.
 * Todos os links/textos/URLs vivem em src/config/site.ts.
 * Para WordPress + Elementor Pro, veja docs/secoes/ — 1 arquivo por seção
 * com HTML + CSS prontos para colar.
 *
 * Ordem:
 *  1. Header           src/components/sections/Header.tsx
 *  2. Hero             Hero.tsx                (imagem de fundo + overlay 90deg)
 *  3. Benefits         Benefits.tsx            (cores oficiais por benefício)
 *  4. Plans            Plans.tsx               (fundo #F5F7FA, bordas por plano)
 *  5. FeaturesBar      FeaturesBar.tsx
 *  6. VideoSection     VideoSection.tsx        (1920x1080 e 1080x1920)
 *  7. AudioSection     AudioSection.tsx        (depoimentos em áudio)
 *  8. PartnersStats    PartnersStats.tsx       (estatísticas + grid de logos)
 *  9. Impact           Impact.tsx
 * 10. HowItWorks       HowItWorks.tsx
 * 11. Testimonials     Testimonials.tsx
 * 12. About            About.tsx
 * 13. Partners         Partners.tsx
 * 14. Ambassador       Ambassador.tsx          (Embaixadores do Impacto · fundo #0B2E8A)
 * 15. Newsletter       Newsletter.tsx
 * 16. Footer           Footer.tsx
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
      <AudioSection />
      <PartnersStats />
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
