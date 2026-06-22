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
import { Acompanhamento } from "@/components/sections/Acompanhamento";
import { CentralAtendimento } from "@/components/sections/CentralAtendimento";

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
 *
 * Cada <Section /> abaixo é um arquivo independente em src/components/sections/.
 * Todos os textos / URLs / contatos vivem em src/config/site.ts.
 * Para migração WordPress + Elementor Pro, veja docs/secoes/ — 1 arquivo por
 * seção com HTML + CSS prontos para colar.
 *
 * Ordem das seções (e arquivo correspondente):
 *  1. Header         Header.tsx        (top bar navy + barra branca com logo)
 *  2. Hero           Hero.tsx          (banner com família + CTAs delicados)
 *  3. Benefits       Benefits.tsx      (cards sobrepostos + faixas mobile)
 *  4. Plans          Plans.tsx         (3 planos lado a lado)
 *  5. FeaturesBar    FeaturesBar.tsx
 *  6. VideoSection   VideoSection.tsx
 *  7. PartnersStats  PartnersStats.tsx (estatísticas + logos)
 *  8. Impact         Impact.tsx
 *  9. HowItWorks     HowItWorks.tsx
 * 10. Testimonials   Testimonials.tsx
 * 11. About          About.tsx
 * 12. Partners       Partners.tsx
 * 13. Ambassador     Ambassador.tsx    (Embaixadores do Impacto)
 * 14. Footer         Footer.tsx        (central de atendimento sobreposta + rodapé navy)
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
      <PartnersStats />
      <Impact />
      <HowItWorks />
      <Testimonials />
      <About />
      <Partners />
      <Ambassador />
      <CentralAtendimento />
      <Acompanhamento />
      <Footer />
    </main>
  );
}
