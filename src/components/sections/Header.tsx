import { useState } from "react";
import { Menu, X, Heart, Accessibility, Star, CalendarDays } from "lucide-react";
import { site } from "@/config/site";
import { Logo } from "./Logo";

/**
 * SEÇÃO: HEADER
 * Referência: mockup mobile enviado pelo cliente.
 *
 * Estrutura:
 *  1. Linha 1 — Logo (esq) + Hambúrguer (dir, fundo violeta)
 *  2. Linha 2 — 3 ícones: Cuidados (teal) · Inclusão (violeta) · Benefícios (laranja)
 *  3. Linha 3 — Tagline: "Conexão que acolhe. Benefícios que transformam."
 *  4. Botão flutuante "AGENDE SUA CONSULTA" sobreposto entre header e hero.
 *
 * Desktop: a mesma estrutura ganha um menu horizontal opcional + CTAs.
 * Edite menu/links em src/config/site.ts.
 */
export function Header() {
  const [open, setOpen] = useState(false);

  const pills = [
    { Icon: Heart, label: "Cuidados", hex: "#00B8D9" },
    { Icon: Accessibility, label: "Inclusão", hex: "#7B2FF7" },
    { Icon: Star, label: "Benefícios", hex: "#FF8A00" },
  ];

  return (
    <header id="topo" className="relative z-40 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-5 pb-6 md:pt-7 md:pb-8">
        {/* Linha 1 — Logo + Hambúrguer + (desktop) menu/CTAs */}
        <div className="flex items-center justify-between gap-4">
          <a href={site.links.home} aria-label="Meu Clube TEA — Início" className="shrink-0">
            <Logo />
          </a>

          <nav aria-label="Menu principal" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-sm font-medium text-foreground/80">
              {site.nav.map((i) => (
                <li key={i.label}>
                  <a href={i.href} className="hover:text-violet transition">
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.links.clienteArea}
              className="hidden lg:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full border border-navy text-navy hover:bg-navy hover:text-white transition"
            >
              Área do Cliente
            </a>
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
              className="h-11 w-11 inline-flex items-center justify-center rounded-xl bg-violet text-white shadow-md hover:brightness-110 transition"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Linha 2 — 3 ícones temáticos */}
        <ul className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-foreground/80">
          {pills.map(({ Icon, label, hex }) => (
            <li key={label} className="flex items-center gap-2">
              <Icon className="h-4 w-4 shrink-0" style={{ color: hex }} strokeWidth={2.2} />
              <span>{label}</span>
            </li>
          ))}
        </ul>

        {/* Linha 3 — Tagline */}
        <p className="mt-3 text-sm md:text-base text-foreground/80">
          Conexão que <span style={{ color: "#00B8D9" }} className="font-semibold">acolhe</span>.{" "}
          Benefícios que <span style={{ color: "#FF8A00" }} className="font-semibold">transformam</span>.
        </p>
      </div>

      {/* Botão flutuante AGENDE SUA CONSULTA — sobrepõe hero */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <a
          href={site.links.agendarConsulta}
          className="absolute right-5 md:right-8 -bottom-6 z-30 inline-flex items-center gap-3 bg-white text-navy font-semibold text-sm md:text-base px-5 md:px-7 py-3.5 rounded-full shadow-xl border border-violet/15 hover:shadow-2xl hover:-translate-y-0.5 transition"
        >
          AGENDE SUA CONSULTA
          <CalendarDays className="h-5 w-5 text-violet" />
        </a>
      </div>

      {/* Drawer mobile / off-canvas */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <aside className="absolute top-0 right-0 h-full w-[82%] max-w-sm bg-navy text-white p-6 flex flex-col gap-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="bg-white rounded-lg p-2"><Logo className="h-9" /></div>
              <button
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white/10"
              >
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
