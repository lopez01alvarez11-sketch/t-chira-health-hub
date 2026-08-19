import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  Clock,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Baby,
  Scissors,
  Activity,
  FlaskConical,
  MessageCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/site/PageIntro";
import { clinic, emergencyTel, plans, units, whatsappNumber } from "@/data/clinic";
import recepcion from "@/assets/recepcion.jpg";
import quirofano from "@/assets/quirofano.jpg";
import imagenologia from "@/assets/imagenologia.jpg";
import laboratorio from "@/assets/laboratorio.jpg";

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

const services = [
  {
    icon: Stethoscope,
    title: "Urología integral",
    text: "Cálculos renales, próstata, vejiga, riñón, urología pediátrica y salud sexual masculina.",
    to: "/especialidades" as const,
  },
  {
    icon: Scissors,
    title: "Cirugía laparoscópica",
    text: "Hernias, vesícula y procedimientos electivos por mínima invasión con recuperación corta.",
    to: "/especialidades" as const,
  },
  {
    icon: Baby,
    title: "Maternidad y pediatría",
    text: "Control prenatal, partos y cesáreas, más control del niño sano y urgencias pediátricas.",
    to: "/especialidades" as const,
  },
  {
    icon: Activity,
    title: "Imagenología 24 h",
    text: "Rayos X digital, ecografía especializada y eco-Doppler vascular dentro del complejo.",
    to: "/diagnostico" as const,
  },
  {
    icon: FlaskConical,
    title: "Laboratorio Fertilab 2000",
    text: "Hematología, química, hormonas, marcadores tumorales y pruebas de fertilidad, 24 horas.",
    to: "/diagnostico" as const,
  },
];

const stats = [
  { value: "24/7", label: "Guardia médica", note: "Emergencias, laboratorio, rayos X y farmacia." },
  { value: "5", label: "Unidades en sede", note: "Clínica, Urosalud, Fertilab, Urofarma y UroCafé." },
  { value: "365", label: "Días al año", note: "Atención continua sin interrupciones." },
  { value: "20+", label: "Especialidades", note: "Desde urología hasta nutrición y psicología." },
];

function Home() {
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hola, deseo solicitar una cita médica en el Urológico Hospital Clínico."
  )}`;

  return (
    <>
      {/* HERO */}
      <section className="px-4 pt-2">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-primary text-primary-foreground">
          <div className="hex-field absolute inset-0 opacity-70" aria-hidden="true" />
          <div className="relative grid gap-10 px-6 py-12 sm:px-10 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/12 px-3 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.2em]">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-2 animate-ping rounded-full bg-primary-foreground/70" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary-foreground" />
                </span>
                Guardia activa · Barrio Obrero, San Cristóbal
              </p>

              <h1 className="mt-6 font-display text-[2.1rem] font-bold leading-[1.02] sm:text-5xl lg:text-6xl">
                Atención urológica y quirúrgica
                <span className="block text-primary-foreground/60">que el Táchira conoce</span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-primary-foreground/85 md:text-base">
                Hospital clínico privado con urología integral, cirugía por mínima invasión,
                maternidad, pediatría, laboratorio e imagenología en un solo complejo, con guardia
                médica los 365 días del año.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 rounded-full bg-card px-6 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
                >
                  Solicitar cita médica
                  <span className="grid size-7 place-items-center rounded-full bg-primary text-primary-foreground">
                    <ArrowRight className="size-3.5" />
                  </span>
                </Link>
                <a
                  href={`tel:${emergencyTel}`}
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/35 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
                >
                  <Phone className="size-4" />
                  Emergencias 24/7
                </a>
              </div>

              <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-primary-foreground/20 pt-6">
                {stats.slice(0, 3).map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-2xl font-bold sm:text-3xl">{s.value}</dt>
                    <dd className="mt-1 text-[11px] leading-snug text-primary-foreground/70 sm:text-xs">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <img
                src={recepcion}
                width={1600}
                height={1008}
                alt="Recepción del Urológico Hospital Clínico en San Cristóbal"
                className="h-72 w-full rounded-3xl object-cover shadow-2xl sm:h-96 lg:h-[30rem]"
              />
              <div className="absolute -bottom-4 left-4 right-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-3xl bg-card p-4 text-foreground shadow-xl sm:left-6 sm:right-auto sm:max-w-sm">
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    Complejo clínico
                  </p>
                  <p className="truncate font-display text-sm font-bold text-primary-deep">
                    Clínica · Laboratorio · Farmacia 24 h
                  </p>
                </div>
                <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary-deep">
                  <ShieldCheck className="size-5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANDA TIPOGRÁFICA */}
      <section className="mt-16 overflow-hidden px-4" aria-hidden="true">
        <div className="mx-auto max-w-7xl">
          <p className="ghost-type text-[11vw] leading-none text-primary/10 md:text-[6.5rem]">
            Urología / Cirugía / Maternidad / Diagnóstico /
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="mx-auto -mt-4 max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <SectionHeading
            index="01 — Servicios"
            title="Nuestros servicios médicos"
            lead="Desde la consulta y el diagnóstico hasta el tratamiento quirúrgico, resuelto en la misma sede."
          />
          <Link
            to="/especialidades"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary-deep"
          >
            Ver todas las especialidades <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.title}
              to={s.to}
              className="card-soft group relative overflow-hidden p-7 transition-transform hover:-translate-y-1"
            >
              <span className="ghost-type absolute right-6 top-4 text-6xl text-primary/8 transition-colors group-hover:text-primary/15">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="relative grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary-deep">
                <s.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="relative mt-6 font-display text-lg font-bold text-primary-deep">
                {s.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <span className="relative mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Ver detalle
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}

          <article className="relative overflow-hidden rounded-3xl bg-primary p-7 text-primary-foreground">
            <div className="hex-field absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="relative">
              <span className="grid size-12 place-items-center rounded-2xl bg-primary-foreground/15">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-lg font-bold">Emergencias 24/7</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/85">
                Guardia médica permanente, triaje de emergencia y urgencia, quirófano y laboratorio
                disponibles a cualquier hora.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href={`tel:${emergencyTel}`}
                  className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2.5 text-xs font-semibold text-primary"
                >
                  Llamar ahora
                </a>
                <Link
                  to="/emergencias"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/35 px-4 py-2.5 text-xs font-semibold"
                >
                  Cuándo acudir
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="card-soft grid gap-0 overflow-hidden lg:grid-cols-2">
          <div className="relative min-h-72">
            <img
              src={quirofano}
              loading="lazy"
              width={1200}
              height={912}
              alt="Quirófano preparado para cirugía laparoscópica"
              className="size-full object-cover"
            />
            <div className="absolute inset-x-6 bottom-6 flex flex-wrap gap-2">
              {["Quirófanos propios", "Guardia permanente", "Equipos propios"].map((p) => (
                <span
                  key={p}
                  className="rounded-full bg-card/95 px-3 py-1.5 text-[11px] font-semibold text-primary-deep shadow"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="hex-field-light p-7 sm:p-10">
            <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-deep">
              02 — Por qué elegirnos
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold text-primary-deep md:text-3xl">
              Todo el proceso clínico, sin salir del hospital
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {stats.map((s) => (
                <div key={s.label} className="border-t border-border pt-4">
                  <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
                  <p className="mt-1 font-display text-sm font-bold text-primary-deep">{s.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIAGNÓSTICO */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <SectionHeading
          index="03 — Diagnóstico"
          title="Laboratorio e imagenología dentro del complejo"
          lead="Resultados y estudios en el mismo lugar donde se atiende la consulta, la emergencia y la cirugía."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <img
            src={laboratorio}
            loading="lazy"
            width={1200}
            height={912}
            alt="Laboratorio clínico Fertilab 2000"
            className="h-64 w-full rounded-3xl object-cover md:h-full"
          />
          <img
            src={imagenologia}
            loading="lazy"
            width={1200}
            height={912}
            alt="Sala de rayos X digital y ecografía"
            className="h-64 w-full rounded-3xl object-cover md:h-full"
          />
          <div className="card-soft flex flex-col justify-between p-7">
            <div>
              <h3 className="font-display text-lg font-bold text-primary-deep">
                Estudios disponibles
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {[
                  "Rayos X digital 24 horas",
                  "Ecografía abdominal, renal, tiroidea y transvaginal",
                  "Eco-Doppler vascular periférico",
                  "Electrocardiograma y valoración preoperatoria",
                  "PSA total y libre, hormonas y fertilidad",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/diagnostico"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-deep"
            >
              Ver diagnóstico y laboratorio <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* UNIDADES */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <SectionHeading
          index="04 — El complejo"
          title="Cinco unidades trabajando en una sola sede"
          lead="El Grupo Urológico integra clínica, cobertura de salud, laboratorio, farmacia y servicios de apoyo."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {units.map((u, i) => (
            <article key={u.name} className="card-soft relative overflow-hidden p-7">
              <span className="ghost-type absolute right-5 top-3 text-5xl text-primary/8">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="relative font-display text-base font-bold text-primary-deep">
                {u.name}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{u.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* UROSALUD */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-wellness/15 px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-wellness-foreground">
              Urosalud Medicina Prepagada
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold text-primary-deep md:text-4xl">
              Cobertura propia, atendida en nuestro propio hospital
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Planes desde los 0 hasta los 80 años, con emergencias 24/7, hospitalización, cirugías
              y odontología preventiva.
            </p>
            <Link
              to="/urosalud"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep"
            >
              Conocer los planes <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {plans.young.items.map((p) => (
              <div key={p.name} className="card-soft p-6">
                <span className="grid size-10 place-items-center rounded-2xl bg-wellness/15 text-wellness-foreground">
                  <ShieldCheck className="size-5" aria-hidden="true" />
                </span>
                <p className="mt-4 font-display text-sm font-bold text-primary-deep">{p.name}</p>
                <p className="font-display text-2xl font-bold text-wellness">{p.coverage}</p>
                <p className="mt-1 text-xs text-muted-foreground">0 a 59 años</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="relative overflow-hidden rounded-4xl bg-primary px-6 py-12 text-primary-foreground sm:px-10">
          <div className="hex-field absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold md:text-4xl">
                ¿Listo para agendar su consulta?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85 md:text-base">
                Escríbanos por WhatsApp o llame a la central telefónica. Le confirmamos día, hora y
                especialista disponible.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-card px-6 py-3.5 text-sm font-semibold text-primary"
                >
                  <MessageCircle className="size-4" />
                  Escribir por WhatsApp
                </a>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/35 px-6 py-3.5 text-sm font-semibold"
                >
                  Formulario de cita <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
            <div className="grid gap-3">
              <div className="flex items-start gap-3 rounded-3xl bg-primary-foreground/10 p-5">
                <Clock className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                <p className="text-sm leading-relaxed">
                  Emergencias, laboratorio, rayos X y farmacia: 24 horas, 365 días. Consulta
                  especializada por cita previa.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-3xl bg-primary-foreground/10 p-5">
                <MapPin className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                <p className="text-sm leading-relaxed">
                  {clinic.address}. {clinic.reference}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
