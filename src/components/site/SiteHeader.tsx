import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X, MapPin, CalendarPlus } from "lucide-react";
import { clinic, emergencyTel } from "@/data/clinic";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/especialidades", label: "Especialidades" },
  { to: "/emergencias", label: "Emergencias" },
  { to: "/diagnostico", label: "Diagnóstico" },
  { to: "/urosalud", label: "Urosalud" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur">
      <div className="border-b border-primary/10 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-2 text-[11px] sm:text-xs">
          <span className="inline-flex min-w-0 items-center gap-2">
            <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">
              {clinic.address} · {clinic.city}
            </span>
          </span>
          <a
            href={`tel:${emergencyTel}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emergency px-3 py-1 font-semibold text-emergency-foreground"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">Emergencias 24/7 · </span>(0276) 355.88.86
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between gap-4 rounded-3xl border border-border bg-card px-3 py-2.5 shadow-[0_14px_36px_-28px_oklch(0.4_0.12_264/0.6)] sm:px-4">
          <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
            <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary font-display text-lg font-bold text-primary-foreground">
              U
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-sm font-bold text-primary-deep sm:text-base">
                Urológico Hospital Clínico
              </span>
              <span className="block truncate text-[11px] text-muted-foreground">
                San Cristóbal · Estado Táchira
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full bg-secondary p-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{
                  className: "bg-card text-primary shadow-sm",
                }}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              to="/contacto"
              className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep sm:inline-flex"
            >
              <CalendarPlus className="size-4" aria-hidden="true" />
              Solicitar cita
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="inline-flex size-10 items-center justify-center rounded-2xl border border-border text-primary lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="mt-2 rounded-3xl border border-border bg-card p-2 lg:hidden">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "bg-secondary text-primary" }}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-foreground/85"
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
