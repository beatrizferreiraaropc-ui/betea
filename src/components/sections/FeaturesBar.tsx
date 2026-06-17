import { Globe, MapPin, Monitor, HeartHandshake, Network, Star } from "lucide-react";

// SEÇÃO: FAIXA DE DIFERENCIAIS — cada ícone com cor da paleta oficial
export function FeaturesBar() {
  const items = [
    { i: Globe, t: "Atendimento 100% online", hex: "#7FC8D4" },
    { i: MapPin, t: "Acesso nacional", hex: "#F3A35C" },
    { i: Monitor, t: "Plataforma digital", hex: "#B8A4E8" },
    { i: HeartHandshake, t: "Atendimento humanizado", hex: "#F3A35C" },
    { i: Network, t: "Rede de benefícios e descontos", hex: "#7FC8D4" },
    { i: Star, t: "Foco em TEA, PCD, neurodivergentes e famílias", hex: "#D6CAF2" },
  ];
  return (
    <section className="py-6 px-6">
      <div className="max-w-7xl mx-auto bg-navy-gradient text-white rounded-2xl p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {items.map(({ i: Icon, t, hex }) => (
          <div key={t} className="flex flex-col items-center text-center gap-2">
            <div
              className="h-12 w-12 rounded-full flex items-center justify-center shadow-lg"
              style={{ backgroundColor: hex }}
            >
              <Icon className="h-5 w-5 text-white" />
            </div>
            <div className="text-xs leading-tight">{t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
