import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, MapPin, Clock } from "lucide-react";
import { clinic, phones, units } from "@/data/clinic";

export function SiteFooter() {
  return (
    <footer className="mt-16 px-4 pb-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl bg-ink text-ink-foreground">
        <div className="grid gap-6 border-b border-ink-foreground/10 px-6 py-8 sm:px-10 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-widest text-ink-foreground/50">Central</p>
              <p className="font-display text-base font-semibold">(0276) 355.88.86</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-widest text-ink-foreground/50">Dirección</p>
              <p className="text-sm leading-relaxed text-ink-foreground/85">{clinic.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-widest text-ink-foreground/50">Guardia</p>
              <p className="text-sm leading-relaxed text-ink-foreground/85">
                24 horas · 365 días del año
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-10 px-6 py-12 sm:px-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold">{clinic.legal}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-foreground/65">
              {clinic.city}
              <br />
              {clinic.reference}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={clinic.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram del Urológico Hospital Clínico"
                className="inline-flex size-10 items-center justify-center rounded-2xl border border-ink-foreground/15 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={clinic.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook del Urológico Hospital Clínico"
                className="inline-flex size-10 items-center justify-center rounded-2xl border border-ink-foreground/15 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-ink-foreground/50">
              Unidades del complejo
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-foreground/80">
              {units.map((u) => (
                <li key={u.name}>{u.name}</li>
              ))}
            </ul>
            <p className="mt-8 font-display text-xs font-bold uppercase tracking-[0.2em] text-ink-foreground/50">
              Secciones
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ink-foreground/80">
              <li>
                <Link to="/especialidades" className="hover:text-primary">
                  Especialidades
                </Link>
              </li>
              <li>
                <Link to="/emergencias" className="hover:text-primary">
                  Emergencias y triaje
                </Link>
              </li>
              <li>
                <Link to="/diagnostico" className="hover:text-primary">
                  Diagnóstico y laboratorio
                </Link>
              </li>
              <li>
                <Link to="/urosalud" className="hover:text-primary">
                  Planes Urosalud
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-primary">
                  Contacto y citas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-ink-foreground/50">
              Teléfonos
            </p>
            <ul className="mt-4 space-y-4 text-sm">
              {phones.map((g) => (
                <li key={g.unit}>
                  <span className="block text-ink-foreground/50">{g.unit}</span>
                  {g.numbers.map((n) => (
                    <a
                      key={n.tel + n.label}
                      href={`tel:${n.tel}`}
                      className="block hover:text-primary"
                    >
                      {n.label}
                    </a>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-foreground/10 px-6 py-5 text-xs text-ink-foreground/50 sm:px-10">
          © {new Date().getFullYear()} {clinic.legal}. La información de este sitio es de carácter
          orientativo y no sustituye la consulta médica presencial.
        </div>
      </div>
    </footer>
  );
}
