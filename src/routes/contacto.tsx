import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Instagram, Facebook, MapPin } from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";
import { clinic, phones, whatsappNumber } from "@/data/clinic";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto, citas y ubicación | Urológico Hospital Clínico" },
      {
        name: "description",
        content:
          "Teléfonos de citas, laboratorio, farmacia y Urosalud. Estamos en Calle 11 entre carreras 19 y 20, Barrio Obrero, San Cristóbal, Táchira.",
      },
      { property: "og:title", content: "Contacto, citas y ubicación | Urológico Hospital Clínico" },
      {
        property: "og:description",
        content:
          "Solicite su cita médica y ubique nuestra sede a cuadra y media de la Plaza Los Mangos, Barrio Obrero.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const [form, setForm] = useState({ nombre: "", telefono: "", especialidad: "", mensaje: "" });

  const enviar = () => {
    const texto = `Hola, deseo solicitar una cita en el Urológico Hospital Clínico.%0A%0ANombre: ${form.nombre}%0ATeléfono: ${form.telefono}%0AEspecialidad: ${form.especialidad}%0AMotivo: ${form.mensaje}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${texto}`, "_blank");
  };

  return (
    <>
      <PageIntro eyebrow="Contacto" title="Citas médicas, teléfonos y ubicación">
        Atendemos por cita previa en consulta especializada y de forma inmediata en emergencias.
        Escríbanos por WhatsApp o llame a la unidad que necesite.
      </PageIntro>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div>
          <h2 className="font-display text-xl font-bold text-primary md:text-2xl">
            Directorio por unidad
          </h2>
          <div className="mt-6 space-y-4">
            {phones.map((g) => (
              <article key={g.unit} className="rounded-lg border border-border bg-card p-5">
                <h3 className="font-display text-base font-bold text-primary">{g.unit}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{g.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.numbers.map((n) => (
                    <a
                      key={n.label}
                      href={`tel:${n.tel}`}
                      className="rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      {n.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={clinic.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-semibold text-primary hover:bg-secondary"
            >
              <Instagram className="size-4" /> @urologicohospitalclinico
            </a>
            <a
              href={clinic.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-semibold text-primary hover:bg-secondary"
            >
              <Facebook className="size-4" /> Facebook
            </a>
          </div>
        </div>

        <div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold text-primary">Solicitar cita</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Complete los datos y se abrirá WhatsApp con su solicitud lista para enviar.
            </p>
            <div className="mt-5 space-y-4">
              <div>
                <Label htmlFor="nombre">Nombre y apellido</Label>
                <Input
                  id="nombre"
                  className="mt-1.5"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="telefono">Teléfono</Label>
                <Input
                  id="telefono"
                  inputMode="tel"
                  className="mt-1.5"
                  value={form.telefono}
                  onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="especialidad">Especialidad deseada</Label>
                <Input
                  id="especialidad"
                  className="mt-1.5"
                  placeholder="Urología, pediatría, ginecología..."
                  value={form.especialidad}
                  onChange={(e) => setForm({ ...form, especialidad: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="mensaje">Motivo de la consulta</Label>
                <Textarea
                  id="mensaje"
                  rows={4}
                  className="mt-1.5"
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                />
              </div>
              <button
                type="button"
                onClick={enviar}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-wellness px-5 py-3 text-sm font-semibold text-wellness-foreground hover:opacity-90"
              >
                <MessageCircle className="size-4" /> Enviar por WhatsApp
              </button>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-border bg-card p-6">
            <MapPin className="size-6 text-accent" aria-hidden="true" />
            <h3 className="mt-3 font-display text-lg font-bold text-primary">Sede clínica</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {clinic.address}, {clinic.city}.
              <br />
              {clinic.reference}.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Sede administrativa Urosalud: {clinic.adminAddress}.
            </p>
            <iframe
              title="Ubicación del Urológico Hospital Clínico en San Cristóbal"
              loading="lazy"
              className="mt-5 h-64 w-full rounded-md border border-border"
              src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.mapsQuery)}&output=embed`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
