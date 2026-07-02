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
import { CtaSobre } from "@/components/sections/CtaSobre";
import { FaqVideo } from "@/components/sections/FaqVideo";
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
 * Ordem final das seções (1 arquivo por seção, veja docs/secoes/).
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
      <CtaSobre />
      <FaqVideo />
      <Ambassador />
      <Acompanhamento />
      <CentralAtendimento />
      <Footer />
    </main>
  );
}
