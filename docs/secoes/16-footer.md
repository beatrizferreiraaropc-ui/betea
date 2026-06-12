# 16 · Footer

**Componente React:** `src/components/sections/Footer.tsx`

## Cores
- Fundo: `#061C5C` (navy-deep)
- Texto: `rgba(255,255,255,.8)` · headings `#FFFFFF`
- Hover de links: `#00B8D9`

## Estrutura
5 colunas em desktop:
1. Logo + descrição + redes sociais (Instagram, Facebook, YouTube, TikTok)
2. Navegação (Início, Benefícios, Planos, …)
3. Benefícios (Telemedicina, Telepsicologia, Funeral, Descontos, PET)
4. Ajuda (FAQ, Política, Termos, Contato)
5. Atendimento (telefone, e-mail, horário)

Linha inferior: endereço completo (GRUPO GIRO1 · SAÚDE) + copyright.

## Links a configurar
- Instagram: `https://www.instagram.com/MeuClubeTea`
- Facebook: `https://www.facebook.com/MeuClubeTea`
- YouTube: `https://www.youtube.com/@MeuClubeTea`
- TikTok: `https://www.tiktok.com/@MeuClubeTea`
- WhatsApp: `https://wa.me/5511XXXXXXXXX`

## CSS (esqueleto)

```css
.mct-footer{ background:#061C5C; color:rgba(255,255,255,.8); padding:56px 24px 24px; }
.mct-footer__inner{
  max-width:1200px; margin:0 auto;
  display:grid; grid-template-columns:1fr repeat(3,1fr) 1.2fr; gap:40px;
}
.mct-footer h5{ font-size:11px; font-weight:700; letter-spacing:.2em;
  text-transform:uppercase; color:#fff; margin-bottom:16px; }
.mct-footer a{ color:rgba(255,255,255,.8); text-decoration:none; transition:.2s; }
.mct-footer a:hover{ color:#00B8D9; }
.mct-footer ul{ list-style:none; padding:0; }
.mct-footer ul li{ padding:4px 0; font-size:14px; }
.mct-footer__bottom{
  max-width:1200px; margin:40px auto 0; padding-top:24px;
  border-top:1px solid rgba(255,255,255,.1);
  display:flex; justify-content:space-between; gap:12px;
  font-size:12px; color:rgba(255,255,255,.5);
}

@media (max-width:1023px){ .mct-footer__inner{ grid-template-columns:1fr 1fr; } }
@media (max-width:767px){
  .mct-footer__inner{ grid-template-columns:1fr; }
  .mct-footer__bottom{ flex-direction:column; }
}
```

## Endereço completo (rodapé)
`GRUPO GIRO1 · SAÚDE — Rua Cel. José Eurálito, 95 · Casa 19 · Higienópolis · São Paulo/SP · CEP 01215-080`
