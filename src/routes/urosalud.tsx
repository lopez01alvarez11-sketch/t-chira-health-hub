import { createFileRoute } from "@tanstack/react-router";
import { Check, Phone, Building2 } from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";
import { clinic, phones, plans } from "@/data/clinic";

export const Route = createFileRoute("/urosalud")({
  head: () => ({
    meta: [
      { title: "Urosalud Medicina Prepagada | Planes de cobertura en San Cristóbal" },
      {
        name: "description",
        content:
          "Planes Plus, Medium, Elite y Platinium de Urosalud: emergencias 24/7, hospitalización, cirugías y odontología preventiva atendidos en el Urológico Hospital Clínico.",
      },
      {
        property: "og:title",
        content: "Urosalud Medicina Prepagada | Planes de cobertura en San Cristóbal",
      },
      {
        property: "og:description",
        content:
          "Sistema propio de medicina prepagada del Grupo Urológico, con planes de 0 a 80 años y cobertura directa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Urosalud,
});

function Urosalud() {
  const contact = phones.find((p) => p.unit.includes("Urosalud"));

  return (
    <>
      <PageIntro eyebrow="Urosalud Medicina Prepagada" title="Cobertura de salud con atención directa">
        Urosalud es la empresa de cobertura del Grupo Urológico: el afiliado se atiende en nuestro
        propio hospital, con los mismos especialistas, quirófanos y laboratorio.
      </PageIntro>

      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        {[plans.young, plans.senior].map((segment) => (
          <section key={segment.range} className="mb-12">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-3">
              <h2 className="font-display text-xl font-bold text-primary md:text-2xl">
                Planes {segment.range}
              </h2>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Segmentación por edad
              </span>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {segment.items.map((p) => (
                <article key={p.name} className="rounded-lg border border-border bg-card p-6">
                  <p className="font-display text-lg font-bold text-primary">{p.name}</p>
                  <p className="mt-2 font-display text-3xl font-bold text-wellness">{p.coverage}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                    Cobertura
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">{p.note}</p>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="grid gap-8 rounded-lg bg-wellness/12 p-6 md:grid-cols-2 md:p-8">
          <div>
            <h2 className="font-display text-xl font-bold text-primary md:text-2xl">
              Beneficios incluidos
            </h2>
            <ul className="mt-5 space-y-3">
              {plans.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-foreground/85">
                  <Check className="mt-0.5 size-4 shrink-0 text-wellness" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-display text-lg font-bold text-primary">Aseguradoras nacionales</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Además de Urosalud, trabajamos con cartas avales y convenios de compañías de seguros
              nacionales para hospitalización y cirugía. Consulte su caso antes de un procedimiento
              programado.
            </p>
            <h3 className="mt-6 font-display text-lg font-bold text-primary">
              Odontología preventiva
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Una consulta de diagnóstico y una limpieza o profilaxis dental anual a través del plan.
            </p>
          </div>
        </section>

        {contact && (
          <section className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <Phone className="size-6 text-accent" aria-hidden="true" />
              <h3 className="mt-3 font-display text-lg font-bold text-primary">
                Afiliación y atención al afiliado
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {contact.numbers.map((n) => (
                  <a
                    key={n.label}
                    href={`tel:${n.tel}`}
                    className="rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    {n.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <Building2 className="size-6 text-accent" aria-hidden="true" />
              <h3 className="mt-3 font-display text-lg font-bold text-primary">
                Sede administrativa
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{clinic.adminAddress}</p>
              <p className="mt-3 text-sm text-muted-foreground">
                También atendemos modalidades de cobertura para familiares de venezolanos en el
                exterior.
              </p>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
