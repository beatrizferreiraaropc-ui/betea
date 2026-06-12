import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { Logo } from "./Logo";

// SEÇÃO: HEADER / NAVBAR
// Edite menu e links em src/config/site.ts (site.nav, site.links).
// Mobile: hambúrguer abre drawer com fundo navy (#0B2E8A) e texto branco.
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      {/* Faixa superior — gradiente oficial */}
      <div className="bg-hero-gradient text-white text-[11px] md:text-xs text-center py-2 px-4">
        Cuidado · Inclusão · Benefícios · Atendimento 100% humanizado para famílias com TEA, PCD e neurodivergentes.
      </div>

      <nav className="bg-white/95 backdrop-blur shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-4">
          <a href={site.links.home} className="shrink-0"><Logo /></a>

          <ul className="hidden lg:flex items-center gap-7 text-sm font-medium text-foreground/80">
            {site.nav.map((i) => (
              <li key={i.label}>
                <a href={i.href} className="hover:text-violet transition">{i.label}</a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 md:gap-3">
            <a href={site.links.clienteArea} className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full border border-navy text-navy hover:bg-navy hover:text-white transition">
              Área do Cliente
            </a>
            <a href={site.links.queroFazerParte} className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full bg-orange text-white hover:brightness-110 transition shadow">
              Quero Fazer Parte
            </a>
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
              className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full bg-navy text-white shadow"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Drawer mobile */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <aside className="absolute top-0 right-0 h-full w-[82%] max-w-sm bg-navy text-white p-6 flex flex-col gap-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <Logo light />
              <button aria-label="Fechar" onClick={() => setOpen(false)} className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white/10">
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="flex flex-col gap-1 text-base font-semibold">
              {site.nav.map((i) => (
                <li key={i.label}>
                  <a
                    href={i.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 border-b border-white/10 hover:text-teal transition"
                  >
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-3">
              <a href={site.links.clienteArea} className="text-center px-4 py-3 rounded-full border border-white/40 font-semibold text-sm">
                Área do Cliente
              </a>
              <a href={site.links.queroFazerParte} className="text-center px-4 py-3 rounded-full bg-orange font-semibold text-sm shadow-lg">
                Quero Fazer Parte
              </a>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
