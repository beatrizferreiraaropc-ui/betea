import { useState } from "react";
import { Menu, X, Heart, Accessibility, Star, CalendarDays, Phone, Mail } from "lucide-react";
import { site } from "@/config/site";
import { Logo } from "./Logo";

/**
 * SEÇÃO: HEADER (responsivo)
 *
 * MOBILE / TABLET (< lg):
 *   1. Logo grande (esq) + hambúrguer violeta (dir)
 *   2. 3 pills: Cuidados (teal) · Inclusão (violeta) · Benefícios (laranja)
 *   3. Tagline colorida
 *   4. Botão flutuante "AGENDE SUA CONSULTA" sobreposto ao hero
 *
 * DESKTOP (lg+):
 *   - Barra superior fininha (navy) com contato + Área do Cliente
 *   - Barra principal branca com logo + menu horizontal + CTA laranja
 */
export function Header() {
  const [open, setOpen] = useState(false);

  const pills = [
    { Icon: Heart, label: "Cuidados", hex: "#7FC8D4" },
    { Icon: Accessibility, label: "Inclusão", hex: "#B8A4E8" },
    { Icon: Star, label: "Benefícios", hex: "#F3A35C" },
  ];

  return (
    <header id="topo" className="relative z-40 bg-white">
      {/* ====== DESKTOP / TABLET-LG (lg+) ====== */}
      {/* Barra superior fininha */}
      <div className="hidden lg:block bg-navy text-white text-xs">
        <div className="max-w-7xl mx-auto px-8 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6 text-white/85">
            <a href={site.contato.telefoneHref} className="inline-flex items-center gap-2 hover:text-teal transition">
              <Phone className="h-3.5 w-3.5" /> {site.contato.telefone}
            </a>
            <a href={`mailto:${site.contato.email}`} className="inline-flex items-center gap-2 hover:text-teal transition">
              <Mail className="h-3.5 w-3.5" /> {site.contato.email}
            </a>
            <span className="text-white/55">{site.contato.horario[0]}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={site.links.clienteArea} className="hover:text-teal transition">Área do Cliente</a>
            <span className="text-white/30">·</span>
            <a href={site.links.embaixador} className="hover:text-teal transition">Seja Embaixador</a>
          </div>
        </div>
      </div>

      {/* ====== MENU UNIFICADO ====== */}
      <div className="max-w-7xl mx-auto px-5 md:px-7 lg:px-8 pt-5 pb-7">
        {/* MOBILE / TABLET — logo + hambúrguer, pills e tagline abaixo */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between gap-4">
            <a href={site.links.home} aria-label="Meu Clube TEA — Início" className="shrink-0">
              <Logo className="h-16 sm:h-20 w-auto" />
            </a>
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
              className="h-12 w-12 inline-flex items-center justify-center rounded-xl bg-violet text-white shadow-md hover:brightness-110 transition"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          <ul className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-foreground/85">
            {pills.map(({ Icon, label, hex }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 shrink-0" style={{ color: hex }} strokeWidth={2.2} />
                <span>{label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm sm:text-base text-foreground/80">
            Conexão que <span style={{ color: "#7FC8D4" }} className="font-semibold">acolhe</span>.{" "}
            Benefícios que <span style={{ color: "#F3A35C" }} className="font-semibold">transformam</span>.
          </p>
        </div>

        {/* DESKTOP — logo esquerda, pills + tagline à direita, hambúrguer no canto */}
        <div className="hidden lg:flex items-center justify-between gap-8">
          <a href={site.links.home} aria-label="Meu Clube TEA — Início" className="shrink-0">
            <Logo className="h-20 xl:h-24 w-auto" />
          </a>
          <div className="flex items-center gap-6 flex-1 justify-end">
            <div className="flex flex-col items-end gap-2">
              <ul className="flex items-center gap-x-7 text-sm font-semibold text-foreground/85">
                {pills.map(({ Icon, label, hex }) => (
                  <li key={label} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 shrink-0" style={{ color: hex }} strokeWidth={2.2} />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-foreground/80">
                Conexão que <span style={{ color: "#7FC8D4" }} className="font-semibold">acolhe</span>.{" "}
                Benefícios que <span style={{ color: "#F3A35C" }} className="font-semibold">transformam</span>.
              </p>
            </div>
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
              className="h-12 w-12 inline-flex items-center justify-center rounded-xl bg-violet text-white shadow-md hover:brightness-110 transition shrink-0"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>


      {/* Botão flutuante AGENDE — todas as telas */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-7 lg:px-8">
        <a
          href={site.links.agendarConsulta}
          className="absolute right-5 md:right-7 -bottom-6 z-30 inline-flex items-center gap-3 bg-white text-navy font-semibold text-sm md:text-base px-5 py-3.5 rounded-full shadow-xl border border-violet/15 hover:shadow-2xl hover:-translate-y-0.5 transition"
        >
          AGENDE SUA CONSULTA
          <CalendarDays className="h-5 w-5 text-violet" />
        </a>
      </div>

      {/* Drawer */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <aside className="absolute top-0 right-0 h-full w-[82%] max-w-sm bg-navy text-white p-6 flex flex-col gap-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="bg-white rounded-lg p-2"><Logo className="h-10" /></div>
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
