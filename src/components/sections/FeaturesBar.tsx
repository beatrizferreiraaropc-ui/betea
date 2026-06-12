import { Globe, MapPin, Monitor, HeartHandshake, Network, Star } from "lucide-react";

// SEÇÃO: FAIXA DE DIFERENCIAIS — cada ícone com cor da paleta oficial
export function FeaturesBar() {
  const items = [
    { i: Globe, t: "Atendimento 100% online", hex: "#00B8D9" },
    { i: MapPin, t: "Acesso nacional", hex: "#FF8A00" },
    { i: Monitor, t: "Plataforma digital", hex: "#7B2FF7" },
    { i: HeartHandshake, t: "Atendimento humanizado", hex: "#FF8A00" },
    { i: Network, t: "Rede de benefícios e descontos", hex: "#00B8D9" },
    { i: Star, t: "Foco em TEA, PCD, neurodivergentes e famílias", hex: "#B794FF" },
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
