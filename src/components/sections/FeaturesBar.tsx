import { Globe, MapPin, Monitor, HeartHandshake, Network, Star } from "lucide-react";

// SEÇÃO: FAIXA DE DIFERENCIAIS
export function FeaturesBar() {
  const items = [
    { i: Globe, t: "Atendimento 100% online" },
    { i: MapPin, t: "Acesso nacional" },
    { i: Monitor, t: "Plataforma digital" },
    { i: HeartHandshake, t: "Atendimento humanizado" },
    { i: Network, t: "Rede de benefícios e descontos" },
    { i: Star, t: "Foco em TEA, PCD, neurodivergentes e famílias" },
  ];
  return (
    <section className="py-6 px-6">
      <div className="max-w-7xl mx-auto bg-navy-gradient text-white rounded-2xl p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {items.map(({ i: Icon, t }) => (
          <div key={t} className="flex flex-col items-center text-center gap-2">
            <Icon className="h-6 w-6 text-teal" />
            <div className="text-xs leading-tight">{t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
