import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo-jvo.png";
import { ADDRESS, HOURS, PHONE_DISPLAY, TEL_URL, MAP_EMBED } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-brand-blue text-brand-blue-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <img src={logo} alt="JVO" className="mb-3 h-14 w-auto rounded bg-white/95 p-2" />
          <p className="text-sm text-brand-blue-foreground/80">
            25+ anos de mecânica multimarcas em Umuarama-PR. Diagnóstico preciso e atendimento familiar.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Instagram" className="rounded-md bg-white/10 p-2 hover:bg-white/20">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Facebook" className="rounded-md bg-white/10 p-2 hover:bg-white/20">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-lg">Navegação</h4>
          <ul className="space-y-2 text-sm text-brand-blue-foreground/85">
            {[
              ["/", "Início"],
              ["/sobre", "Sobre Nós"],
              ["/servicos", "Serviços"],
              ["/diferenciais", "Diferenciais"],
              ["/galeria", "Galeria"],
              ["/contato", "Contato"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-white hover:underline">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-lg">Contato</h4>
          <ul className="space-y-3 text-sm text-brand-blue-foreground/85">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" />{ADDRESS}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5" /><a href={TEL_URL} className="hover:text-white">{PHONE_DISPLAY}</a></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0 mt-0.5" />{HOURS}</li>
          </ul>
          <p className="mt-4 text-xs text-brand-blue-foreground/60">CNPJ: 00.000.000/0001-00</p>
        </div>

        <div>
          <h4 className="mb-3 text-lg">Localização</h4>
          <div className="overflow-hidden rounded-lg border border-white/10">
            <iframe
              src={MAP_EMBED}
              title="Mapa JVO Auto-Serviços"
              loading="lazy"
              className="h-40 w-full"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-brand-blue-foreground/60">
        © {new Date().getFullYear()} JVO Auto-Serviços. Todos os direitos reservados.
      </div>
    </footer>
  );
}
