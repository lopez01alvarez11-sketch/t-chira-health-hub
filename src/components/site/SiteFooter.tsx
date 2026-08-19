import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";
import { clinic, phones, units } from "@/data/clinic";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-primary-deep text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold">{clinic.legal}</p>
          <p className="mt-3 text-sm text-primary-foreground/75">
            {clinic.address}
            <br />
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
              className="inline-flex size-9 items-center justify-center rounded-md border border-primary-foreground/25 hover:bg-primary-foreground/10"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={clinic.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook del Urológico Hospital Clínico"
              className="inline-flex size-9 items-center justify-center rounded-md border border-primary-foreground/25 hover:bg-primary-foreground/10"
            >
              <Facebook className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-widest text-accent">
            Unidades del complejo
          </p>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {units.map((u) => (
              <li key={u.name}>{u.name}</li>
            ))}
          </ul>
          <p className="mt-6 font-display text-sm font-bold uppercase tracking-widest text-accent">
            Secciones
          </p>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <Link to="/especialidades">Especialidades</Link>
            </li>
            <li>
              <Link to="/emergencias">Emergencias y triaje</Link>
            </li>
            <li>
              <Link to="/diagnostico">Diagnóstico y laboratorio</Link>
            </li>
            <li>
              <Link to="/urosalud">Planes Urosalud</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto y citas</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-widest text-accent">
            Teléfonos
          </p>
          <ul className="mt-4 space-y-4 text-sm">
            {phones.map((g) => (
              <li key={g.unit}>
                <span className="block text-primary-foreground/60">{g.unit}</span>
                {g.numbers.map((n) => (
                  <a key={n.tel + n.label} href={`tel:${n.tel}`} className="block hover:text-accent">
                    {n.label}
                  </a>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} {clinic.legal}. La información de este sitio es de carácter
          orientativo y no sustituye la consulta médica presencial.
        </div>
      </div>
    </footer>
  );
}
