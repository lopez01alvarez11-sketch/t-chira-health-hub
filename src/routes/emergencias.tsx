import { createFileRoute } from "@tanstack/react-router";
import { Phone, AlertTriangle, Clock3, FileText } from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";
import { clinic, emergencyTel, triage } from "@/data/clinic";

export const Route = createFileRoute("/emergencias")({
  head: () => ({
    meta: [
      { title: "Emergencias 24/7 y triaje | Urológico Hospital Clínico" },
      {
        name: "description",
        content:
          "Guardia médica permanente los 365 días del año en San Cristóbal. Conozca la diferencia entre emergencia y urgencia según nuestro sistema de triaje clínico.",
      },
      { property: "og:title", content: "Emergencias 24/7 y triaje | Urológico Hospital Clínico" },
      {
        property: "og:description",
        content:
          "Servicio de emergencia ininterrumpido, triaje clínico y teléfonos directos en Barrio Obrero, San Cristóbal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Emergencias,
});

function Emergencias() {
  return (
    <>
      <PageIntro eyebrow="Servicio ininterrumpido" title="Emergencias 24 horas, 365 días al año">
        Contamos con guardia médica permanente, quirófanos disponibles, laboratorio y rayos X activos
        a cualquier hora. Si hay riesgo de vida, no espere: llame o acuda de inmediato.
      </PageIntro>

      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <a
          href={`tel:${emergencyTel}`}
          className="flex flex-wrap items-center justify-between gap-4 rounded-lg bg-emergency p-6 text-emergency-foreground"
        >
          <span className="inline-flex items-center gap-3 font-display text-lg font-bold">
            <Phone className="size-5" aria-hidden="true" />
            Emergencias: (0276) 355.88.86
          </span>
          <span className="text-sm opacity-90">Toque para llamar · atención inmediata</span>
        </a>

        <h2 className="mt-14 font-display text-2xl font-bold text-primary md:text-3xl">
          Sistema de triaje clínico
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          El triaje ordena la atención por gravedad, no por orden de llegada. Así se clasifican los
          casos al ingresar:
        </p>

        <div className="mt-8 overflow-hidden rounded-lg border border-border">
          <div className="grid md:grid-cols-2">
            <div className="border-b border-border bg-card p-6 md:border-b-0 md:border-r">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-md bg-emergency text-emergency-foreground">
                  <AlertTriangle className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-emergency">
                    {triage.emergency.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {triage.emergency.subtitle}
                  </p>
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                {triage.emergency.items.map((i) => (
                  <li key={i} className="border-l-2 border-emergency pl-3 text-sm text-foreground/85">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                  <Clock3 className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-primary">
                    {triage.urgency.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {triage.urgency.subtitle}
                  </p>
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                {triage.urgency.items.map((i) => (
                  <li key={i} className="border-l-2 border-accent pl-3 text-sm text-foreground/85">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <FileText className="size-6 text-accent" aria-hidden="true" />
            <h3 className="mt-3 font-display text-lg font-bold text-primary">Qué traer</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Cédula de identidad del paciente y del representante, si es menor de edad.</li>
              <li>Carnet de Urosalud o póliza de seguro y carta aval, si aplica.</li>
              <li>Récipes, informes y exámenes previos relacionados con el cuadro.</li>
              <li>Lista de medicamentos y alergias conocidas.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-display text-lg font-bold text-primary">Cómo llegar</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              {clinic.address}, {clinic.city}. {clinic.reference}. Acceso vehicular por la Calle 11 y
              entrada de emergencia señalizada.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Dentro del complejo funcionan la farmacia Urofarma y el laboratorio Fertilab 2000 las
              24 horas, por lo que no es necesario desplazarse para exámenes o medicamentos.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
