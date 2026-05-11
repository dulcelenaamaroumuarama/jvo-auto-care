import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-jvo.png";
import { TEL_URL, PHONE_DISPLAY } from "@/lib/contact";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/diferenciais", label: "Diferenciais" },
  { to: "/galeria", label: "Galeria" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="JVO Auto-Serviços" className="h-10 w-auto" />
          <span className="sr-only">JVO Auto-Serviços</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => {
            const active = path === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-brand-blue text-brand-blue-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={TEL_URL}
            className="inline-flex items-center gap-2 rounded-md bg-brand-red px-4 py-2 text-sm font-semibold text-brand-red-foreground transition hover:brightness-110"
          >
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
        </div>

        <button
          aria-label="Menu"
          className="rounded-md p-2 text-foreground hover:bg-secondary lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={TEL_URL}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-brand-red px-4 py-3 text-sm font-semibold text-brand-red-foreground"
            >
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
