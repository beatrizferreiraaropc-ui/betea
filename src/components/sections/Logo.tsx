import logoAsset from "@/assets/logo-meu-clube-tea.asset.json";

export function Logo({ className = "h-10 md:h-11" }: { className?: string; light?: boolean }) {
  return (
    <img
      src={logoAsset.url}
      alt="Meu Clube TEA — Cuidado, Inclusão e Benefícios"
      className={`${className} w-auto select-none`}
      draggable={false}
    />
  );
}
