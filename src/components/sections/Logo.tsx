import logoAsset from "@/assets/logo-meu-clube-tea.asset.json";

/**
 * LOGO — Meu Clube TEA
 * Usa o arquivo oficial enviado pelo cliente.
 * Prop `light` é mantida para compatibilidade (drawer mobile),
 * mas o logo oficial já tem fundo claro/transparente.
 */
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
