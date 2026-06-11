import { Infinity as InfinityIcon } from "lucide-react";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <InfinityIcon className={`h-7 w-7 ${light ? "text-white" : "text-violet"}`} strokeWidth={2.5} />
        <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-orange" />
      </div>
      <div className="leading-none">
        <div className={`font-bold text-base ${light ? "text-white" : "text-foreground"}`}>Meu Clube</div>
        <div className={`text-[10px] tracking-[0.3em] ${light ? "text-white/70" : "text-muted-foreground"}`}>TEA</div>
      </div>
    </div>
  );
}
