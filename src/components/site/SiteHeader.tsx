import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X, MapPin } from "lucide-react";
import { clinic, emergencyTel } from "@/data/clinic";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/especialidades", label: "Especialidades" },
  { to: "/emergencias", label: "Emergencias 24/7" },
  { to: "/diagnostico", label: "Diagnóstico" },
  { to: "/urosalud", label: "Urosalud" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary-deep text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2 text-xs sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center gap-2 opacity-90">
            <MapPin className="size-3.5" aria-hidden="true" />
            {clinic.address} · {clinic.city}
          </span>
          <a
            href={`tel:${emergencyTel}`}
            className="inline-flex items-center gap-2 self-start rounded-full bg-emergency px-3 py-1 font-semibold text-emergency-foreground sm:self-auto"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            Emergencias 24/7 · (0276) 355.88.86
          </a>
        </div>
      </div>

      <div className="border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="flex size-10 items-center justify-center rounded-md bg-primary font-display text-lg font-bold text-primary-foreground">
              U
            </span>
            <span className="leading-tight">
              <span className="block font-display text-sm font-bold text-primary sm:text-base">
                Urológico Hospital Clínico
              </span>
              <span className="block text-[11px] text-muted-foreground">
                San Cristóbal · Estado Táchira
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary border-b-2 border-accent" }}
                className="pb-0.5 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border text-primary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-border bg-card px-4 pb-4 lg:hidden">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="block border-b border-border/70 py-3 text-sm font-medium text-foreground/85"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
