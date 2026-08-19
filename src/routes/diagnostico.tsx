import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { diagnostics, phones } from "@/data/clinic";
import laboratorio from "@/assets/laboratorio.jpg";
import imagenologia from "@/assets/imagenologia.jpg";

export const Route = createFileRoute("/diagnostico")({
  head: () => ({
    meta: [
      { title: "Diagnóstico, laboratorio e imagenología 24h | Urológico Hospital Clínico" },
      {
        name: "description",
        content:
          "Rayos X digital 24 horas, ecografía general y musculoesquelética, eco-Doppler vascular, ECG y laboratorio Fertilab 2000 en San Cristóbal, Táchira.",
      },
      {
        property: "og:title",
        content: "Diagnóstico, laboratorio e imagenología 24h | Urológico Hospital Clínico",
      },
      {
        property: "og:description",
        content:
          "Imagenología, laboratorio clínico y cardiología diagnóstica operativos las 24 horas dentro del complejo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Diagnostico,
});

function Diagnostico() {
  const lab = phones.find((p) => p.unit.includes("Fertilab"));

  return (
    <>
      <PageIntro eyebrow="Apoyo diagnóstico" title="Estudios e imagenología dentro del hospital">
        El paciente se hospitaliza, se opera y se estudia en la misma sede: sin traslados, sin
        esperas entre laboratorios externos y sin perder tiempo en un cuadro urgente.
      </PageIntro>

      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid gap-4 md:grid-cols-2">
          <img
            src={imagenologia}
            loading="lazy"
            width={1200}
            height={912}
            alt="Sala de rayos X digital y ecografía del hospital"
            className="h-56 w-full rounded-3xl object-cover md:h-72"
          />
          <img
            src={laboratorio}
            loading="lazy"
            width={1200}
            height={912}
            alt="Laboratorio clínico Fertilab 2000 procesando muestras"
            className="h-56 w-full rounded-3xl object-cover md:h-72"
          />
        </div>

        <div className="mt-12 space-y-4">
          {diagnostics.map((d, i) => (
            <section
              key={d.title}
              className="grid gap-6 rounded-3xl border border-border bg-card p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8"
            >
              <div>
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Servicio {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 font-display text-xl font-bold text-primary-deep">{d.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{d.detail}</p>
              </div>
              <ul className="grid gap-2 self-center">
                {d.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-secondary px-3 py-2 text-sm text-secondary-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {lab && (
          <div className="mt-12 rounded-3xl bg-primary p-6 text-primary-foreground md:p-8">
            <h2 className="font-display text-xl font-bold">Laboratorio Fertilab 2000</h2>
            <p className="mt-2 max-w-2xl text-sm text-primary-foreground/80">{lab.detail}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {lab.numbers.map((n) => (
                <a
                  key={n.label}
                  href={`tel:${n.tel}`}
                  className="rounded-md border border-primary-foreground/30 px-4 py-2 text-sm font-semibold hover:bg-primary-foreground/10"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
