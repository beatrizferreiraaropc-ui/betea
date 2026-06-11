import { site } from "@/config/site";
import { Logo } from "./Logo";

// SEÇÃO: HEADER / NAVBAR
// Edite menu e links em src/config/site.ts (site.nav, site.links)
export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="bg-violet text-white text-xs text-center py-2 px-4">
        Seja acolhido pela maior comunidade de apoio. Especialistas dedicados à jornada da sua família. Atendimento 100% humanizado e transparente.
      </div>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href={site.links.home}><Logo /></a>
        <ul className="hidden lg:flex items-center gap-7 text-sm font-medium text-foreground/80">
          {site.nav.map((i) => (
            <li key={i.label}>
              <a href={i.href} className="hover:text-violet transition">{i.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href={site.links.clienteArea} className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full border border-violet text-violet hover:bg-violet hover:text-white transition">
            Área do Cliente
          </a>
          <a href={site.links.queroFazerParte} className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full bg-orange text-white hover:brightness-110 transition">
            Quero Fazer Parte
          </a>
        </div>
      </nav>
    </header>
  );
}
