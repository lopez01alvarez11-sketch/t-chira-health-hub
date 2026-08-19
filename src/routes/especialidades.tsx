import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";
import { specialties } from "@/data/clinic";

export const Route = createFileRoute("/especialidades")({
  head: () => ({
    meta: [
      { title: "Especialidades médicas | Urológico Hospital Clínico" },
      {
        name: "description",
        content:
          "Urología integral y oncológica, cirugía laparoscópica, ginecología y obstetricia, pediatría, cardiología, nefrología y más en San Cristóbal, Táchira.",
      },
      { property: "og:title", content: "Especialidades médicas | Urológico Hospital Clínico" },
      {
        property: "og:description",
        content:
          "Cartera completa de especialidades del Urológico Hospital Clínico en San Cristóbal, Estado Táchira.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Especialidades,
});

function Especialidades() {
  return (
    <>
      <PageIntro eyebrow="Cartera médica" title="Especialidades y unidades de consulta">
        La urología es nuestro eje, pero el paciente encuentra aquí un equipo multidisciplinario que
        cubre desde el control prenatal hasta el seguimiento oncológico.
      </PageIntro>

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-14 md:py-20">
        {specialties.map((s, i) => (
          <section key={s.group} className="rule-top rounded-3xl border border-border bg-card p-6 md:p-8">
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="font-display text-sm font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-xl font-bold text-primary-deep md:text-2xl">{s.group}</h2>
            </div>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{s.lead}</p>
            <ul className="mt-6 grid gap-x-8 gap-y-3 md:grid-cols-2">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-accent/50 pl-3 text-sm leading-relaxed text-foreground/85"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <div className="rounded-3xl bg-primary p-6 text-primary-foreground md:p-8">
          <h2 className="font-display text-xl font-bold md:text-2xl">
            ¿No sabe con qué especialista debe empezar?
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-primary-foreground/80">
            Nuestra central telefónica orienta el caso y asigna la consulta que corresponde según los
            síntomas y los estudios previos.
          </p>
          <Link
            to="/contacto"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
          >
            Solicitar orientación <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
