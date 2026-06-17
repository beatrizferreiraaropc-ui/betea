import { Instagram, Facebook, Youtube, Music2, Phone, Mail, MapPin, Heart, Accessibility, Star, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/config/site";

/**
 * SEÇÃO: FOOTER
 *
 * Composição (referência cliente — image-6):
 *  1. Bloco branco SOBREPOSTO à seção Ambassador (margem negativa)
 *     — Logo grande + pills (Cuidado, Inclusão, Benefícios) + CTA Central de Atendimento
 *  2. Footer navy com colunas (Navegação, Benefícios, Ajuda, Atendimento)
 */
export function Footer() {
  const pills = [
    { Icon: Heart, label: "Cuidado", hex: "#7FC8D4" },
    { Icon: Accessibility, label: "Inclusão", hex: "#B8A4E8" },
    { Icon: Star, label: "Benefícios", hex: "#F3A35C" },
  ];

  const cols = [
    { t: "Navegação", links: site.nav.map((n) => ({ label: n.label, href: n.href })) },
    {
      t: "Benefícios",
      links: [
        { label: "Telemedicina", href: "#beneficios" },
        { label: "Telepsicologia", href: "#beneficios" },
        { label: "Assistência Funeral", href: "#beneficios" },
        { label: "Descontos e Vantagens", href: "#beneficios" },
        { label: "Assistência PET", href: "#planos" },
      ],
    },
    {
      t: "Ajuda",
      links: [
        { label: "Perguntas Frequentes", href: site.links.faq },
        { label: "Política de Privacidade", href: site.links.politicaPrivacidade },
        { label: "Termos de Uso", href: site.links.termosUso },
        { label: "Fale Conosco", href: site.links.contato },
      ],
    },
  ];

  return (
    <>
      {/* 1. BLOCO BRANCO SOBREPOSTO AO AMBASSADOR */}
      <section
        aria-label="Central de atendimento"
        className="relative -mt-20 md:-mt-28 z-10 bg-white rounded-t-3xl shadow-[0_-20px_40px_-30px_rgba(11,46,138,0.25)]"
      >
        <div className="max-w-3xl mx-auto px-5 md:px-6 py-10 md:py-14 text-center flex flex-col items-center gap-5">
          <Logo className="h-16 md:h-20 w-auto" />
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-foreground/85">
            {pills.map(({ Icon, label, hex }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="h-4 w-4" style={{ color: hex }} strokeWidth={2.2} />
                {label}
              </li>
            ))}
          </ul>
          <a
            href={site.links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-navy/70 text-navy font-semibold text-sm hover:bg-navy hover:text-white transition"
          >
            CENTRAL DE ATENDIMENTO
            <span className="h-6 w-6 rounded-full bg-[#25D366] flex items-center justify-center">
              <MessageCircle className="h-3.5 w-3.5 text-white" />
            </span>
          </a>
        </div>
      </section>


      {/* 2. FOOTER NAVY */}
      <footer id="contato" className="bg-navy-deep text-white/80 pt-14 pb-6">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-3 inline-block"><Logo className="h-10" /></div>
            <p className="mt-4 text-xs leading-relaxed text-white/60">
              Cuidado, acolhimento e benefícios para pessoas com TEA, PCD, neurodivergentes e suas famílias.
            </p>
            <div className="mt-4 flex gap-3 text-white/70">
              <a href={site.links.instagram} aria-label="Instagram"><Instagram className="h-4 w-4 hover:text-teal" /></a>
              <a href={site.links.facebook} aria-label="Facebook"><Facebook className="h-4 w-4 hover:text-teal" /></a>
              <a href={site.links.youtube} aria-label="YouTube"><Youtube className="h-4 w-4 hover:text-teal" /></a>
              <a href={site.links.tiktok} aria-label="TikTok"><Music2 className="h-4 w-4 hover:text-teal" /></a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.t}>
              <div className="font-bold text-white text-xs tracking-widest uppercase">{c.t}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {c.links.map((i) => (
                  <li key={i.label}><a href={i.href} className="hover:text-teal transition">{i.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <div className="font-bold text-white text-xs tracking-widest uppercase">Atendimento</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /><a href={site.contato.telefoneHref} className="hover:text-teal">{site.contato.telefone}</a></li>
              <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /><a href={`mailto:${site.contato.email}`} className="hover:text-teal">{site.contato.email}</a></li>
              <li className="flex items-start gap-2"><MapPin className="h-3.5 w-3.5 mt-1" /><span>{site.contato.horario.join(" · ")}</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/50">
          <div>{site.contato.endereco}</div>
          <div>© {new Date().getFullYear()} {site.brand.name}. Todos os direitos reservados.</div>
        </div>
      </footer>
    </>
  );
}
