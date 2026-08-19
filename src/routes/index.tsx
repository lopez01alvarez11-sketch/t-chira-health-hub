import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Clock, MapPin, ArrowRight, ShieldCheck, Stethoscope } from "lucide-react";
import { SectionHeading } from "@/components/site/PageIntro";
import { clinic, emergencyTel, plans, units } from "@/data/clinic";
import recepcion from "@/assets/recepcion.jpg";
import quirofano from "@/assets/quirofano.jpg";
import imagenologia from "@/assets/imagenologia.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Urológico Hospital Clínico | San Cristóbal, Táchira" },
      {
        name: "description",
        content:
          "Hospital clínico privado en Barrio Obrero, San Cristóbal: urología integral, cirugía laparoscópica, maternidad, emergencias 24/7, laboratorio e imagenología.",
      },
      { property: "og:title", content: "Urológico Hospital Clínico | San Cristóbal, Táchira" },
      {
        property: "og:description",
        content:
          "Urología, cirugía de mínima invasión, maternidad, pediatría y emergencias 24/7 en San Cristóbal, Estado Táchira.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: clinic.legal,
          medicalSpecialty: "Urologic",
          address: {
            "@type": "PostalAddress",
            streetAddress: clinic.address,
            addressLocality: "San Cristóbal",
            addressRegion: "Táchira",
            addressCountry: "VE",
          },
          telephone: "+58 276 355 8886",
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Barrio Obrero · San Cristóbal · Táchira
            </p>
            <h1 className="mt-4 font-display text-3xl font-bold leading-[1.05] md:text-5xl">
              Atención urológica y quirúrgica que el Táchira conoce de cerca
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/80 md:text-base">
              Somos un hospital clínico privado con urología integral, cirugía por mínima invasión,
              maternidad, pediatría, laboratorio e imagenología funcionando dentro del mismo
              complejo, con guardia médica los 365 días del año.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Solicitar cita médica
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={`tel:${emergencyTel}`}
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-5 py-3 text-sm font-semibold hover:bg-primary-foreground/10"
              >
                <Phone className="size-4" />
                Emergencias 24/7
              </a>
            </div>
          </div>
          <img
            src={recepcion}
            width={1600}
            height={1008}
            alt="Recepción del Urológico Hospital Clínico en San Cristóbal"
            className="h-64 w-full rounded-lg object-cover shadow-lg md:h-96"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <SectionHeading
          index="01 — El complejo"
          title="Cinco unidades trabajando en una sola sede"
          lead="El Grupo Urológico integra clínica, cobertura de salud, laboratorio, farmacia y servicios de apoyo, para que el paciente resuelva todo en el mismo lugar."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-6">
          {units.map((u, i) => (
            <article
              key={u.name}
              className={`rounded-lg border border-border bg-card p-6 ${
                i === 0 ? "md:col-span-4" : i === 1 ? "md:col-span-2" : "md:col-span-2"
              }`}
            >
              <span className="font-display text-xs font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-primary">{u.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{u.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <SectionHeading
              index="02 — Servicios destacados"
              title="Lo que resolvemos todos los días"
            />
            <ol className="mt-8 space-y-5">
              {[
                {
                  t: "Urología integral y oncológica",
                  d: "Cálculos renales, próstata, vejiga, riñón y salud sexual masculina.",
                },
                {
                  t: "Cirugía laparoscópica",
                  d: "Hernias, vesícula y procedimientos electivos con recuperación más corta.",
                },
                {
                  t: "Maternidad",
                  d: "Control prenatal, partos y cesáreas con quirófano en el mismo piso.",
                },
                {
                  t: "Pediatría",
                  d: "Control de niño sano, urgencias pediátricas y neumonología infantil.",
                },
                {
                  t: "Imagenología y laboratorio 24 horas",
                  d: "Rayos X digital, ecografía, eco-Doppler y Fertilab 2000 sin salir del hospital.",
                },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-4 border-b border-border pb-5 last:border-0">
                  <span className="font-display text-sm font-bold text-accent">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-base font-bold text-primary">{s.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              to="/especialidades"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
            >
              Ver todas las especialidades <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-4">
            <img
              src={quirofano}
              loading="lazy"
              width={1200}
              height={912}
              alt="Quirófano preparado para cirugía laparoscópica"
              className="h-56 w-full rounded-lg object-cover md:h-64"
            />
            <img
              src={imagenologia}
              loading="lazy"
              width={1200}
              height={912}
              alt="Sala de rayos X digital y ecografía"
              className="h-56 w-full rounded-lg object-cover md:h-64"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6">
            <Clock className="size-6 text-accent" aria-hidden="true" />
            <h3 className="mt-3 font-display text-base font-bold text-primary">Horario</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Emergencias, laboratorio, rayos X y farmacia: 24 horas, 365 días.
              <br />
              Consulta especializada por cita previa.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <MapPin className="size-6 text-accent" aria-hidden="true" />
            <h3 className="mt-3 font-display text-base font-bold text-primary">Cómo llegar</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {clinic.address}. {clinic.reference}.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <Stethoscope className="size-6 text-accent" aria-hidden="true" />
            <h3 className="mt-3 font-display text-base font-bold text-primary">Seguros</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Aceptamos cartas avales y convenios con aseguradoras nacionales para hospitalización y
              cirugía.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-wellness/12">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-wellness-foreground/70">
                Urosalud Medicina Prepagada
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-primary md:text-3xl">
                Cobertura propia, atendida en nuestro propio hospital
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Planes desde los 0 hasta los 80 años, con emergencias 24/7, hospitalización,
                cirugías y odontología preventiva.
              </p>
              <Link
                to="/urosalud"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Conocer los planes <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {plans.young.items.map((p) => (
                <div key={p.name} className="rounded-lg border border-border bg-card p-5">
                  <ShieldCheck className="size-5 text-wellness" aria-hidden="true" />
                  <p className="mt-3 font-display text-base font-bold text-primary">{p.name}</p>
                  <p className="font-display text-2xl font-bold text-wellness">{p.coverage}</p>
                  <p className="mt-1 text-xs text-muted-foreground">0 a 59 años</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
