import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import {
  CalendarPlus,
  ClipboardList,
  FlaskConical,
  Loader2,
  LogOut,
  Scan,
  Stethoscope,
  BedDouble,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { specialties } from "@/data/clinic";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Mi panel | Urológico Hospital Clínico" },
      {
        name: "description",
        content:
          "Panel del paciente: citas, consultas, rayos X, laboratorio e hospitalización del Urológico Hospital Clínico.",
      },
      { property: "og:title", content: "Mi panel | Urológico Hospital Clínico" },
      {
        property: "og:description",
        content: "Gestiona tus citas y revisa tu historial clínico en línea.",
      },
    ],
  }),
  component: DashboardPage,
});

const specialtyOptions = specialties.flatMap((group) => group.items);

const recordTabs = [
  { key: "consulta", label: "Consultas", icon: Stethoscope },
  { key: "rayos_x", label: "Rayos X", icon: Scan },
  { key: "laboratorio", label: "Laboratorio", icon: FlaskConical },
  { key: "hospitalizacion", label: "Hospitalización", icon: BedDouble },
] as const;

type RecordKind = (typeof recordTabs)[number]["key"];

const statusLabel: Record<string, string> = {
  solicitada: "Solicitada",
  confirmada: "Confirmada",
  atendida: "Atendida",
  cancelada: "Cancelada",
};

function DashboardPage() {
  const { user } = useAuth();
  const userId = user?.id ?? "";
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [tab, setTab] = useState<RecordKind>("consulta");
  const [form, setForm] = useState({
    specialty: specialtyOptions[0] ?? "Urología general",
    preferred_date: "",
    preferred_time: "",
    reason: "",
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [formOk, setFormOk] = useState(false);

  const profileQuery = useQuery({
    queryKey: ["profile", userId],
    enabled: Boolean(userId),
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  const appointmentsQuery = useQuery({
    queryKey: ["appointments", userId],
    enabled: Boolean(userId),
    queryFn: async () => {
      const { data, error } = await supabase
        .from("appointments")
        .select("*")
        .order("preferred_date", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const recordsQuery = useQuery({
    queryKey: ["medical_records", userId],
    enabled: Boolean(userId),
    queryFn: async () => {
      const { data, error } = await supabase
        .from("medical_records")
        .select("*")
        .order("occurred_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const createAppointment = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.from("appointments").insert({
        user_id: userId,
        specialty: form.specialty,
        preferred_date: form.preferred_date,
        preferred_time: form.preferred_time || null,
        reason: form.reason || null,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      setFormOk(true);
      setFormError(null);
      setForm((f) => ({ ...f, preferred_date: "", preferred_time: "", reason: "" }));
      queryClient.invalidateQueries({ queryKey: ["appointments", userId] });
    },
    onError: () => {
      setFormOk(false);
      setFormError("No pudimos registrar la cita. Verifica los datos e intenta de nuevo.");
    },
  });

  async function handleSignOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  const profile = profileQuery.data;
  const records = (recordsQuery.data ?? []).filter((r) => r.kind === tab);
  const upcoming = (appointmentsQuery.data ?? []).filter(
    (a) => a.status === "solicitada" || a.status === "confirmada",
  );

  return (
    <div className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-4xl bg-primary text-primary-foreground">
          <div className="hex-field absolute inset-0 opacity-70" aria-hidden="true" />
          <div className="relative flex flex-wrap items-end justify-between gap-6 px-6 py-10 sm:px-10">
            <div>
              <p className="inline-flex items-center rounded-full bg-primary-foreground/12 px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.2em]">
                Portal del paciente
              </p>
              <h1 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
                Hola, {profile?.full_name?.trim() || user?.email}
              </h1>
              <p className="mt-3 text-sm text-primary-foreground/85">
                Plan Urosalud:{" "}
                <strong className="font-semibold">{profile?.urosalud_plan || "Sin plan registrado"}</strong>
                {profile?.document_id ? ` · Cédula ${profile.document_id}` : ""}
              </p>
            </div>
            <button
              type="button"
              onClick={handleSignOut}
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/12 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/20"
            >
              <LogOut className="size-4" aria-hidden="true" />
              Cerrar sesión
            </button>
          </div>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <section className="card-soft p-6 sm:p-8">
            <h2 className="flex items-center gap-2 font-display text-xl font-bold text-primary-deep">
              <CalendarPlus className="size-5 text-primary" aria-hidden="true" />
              Solicitar una cita
            </h2>
            <form
              className="mt-5 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                createAppointment.mutate();
              }}
            >
              <label className="grid gap-2">
                <span className={labelClass}>Especialidad</span>
                <select
                  value={form.specialty}
                  onChange={(e) => setForm((f) => ({ ...f, specialty: e.target.value }))}
                  className={inputClass}
                >
                  {specialtyOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className={labelClass}>Fecha preferida</span>
                  <input
                    required
                    type="date"
                    value={form.preferred_date}
                    onChange={(e) => setForm((f) => ({ ...f, preferred_date: e.target.value }))}
                    className={inputClass}
                  />
                </label>
                <label className="grid gap-2">
                  <span className={labelClass}>Hora preferida</span>
                  <input
                    type="time"
                    value={form.preferred_time}
                    onChange={(e) => setForm((f) => ({ ...f, preferred_time: e.target.value }))}
                    className={inputClass}
                  />
                </label>
              </div>
              <label className="grid gap-2">
                <span className={labelClass}>Motivo</span>
                <textarea
                  rows={3}
                  value={form.reason}
                  onChange={(e) => setForm((f) => ({ ...f, reason: e.target.value }))}
                  className={inputClass}
                  placeholder="Describe brevemente tu motivo de consulta"
                />
              </label>
              {formError && (
                <p className="rounded-2xl bg-emergency/10 px-4 py-3 text-sm text-emergency">{formError}</p>
              )}
              {formOk && (
                <p className="rounded-2xl bg-wellness/10 px-4 py-3 text-sm text-wellness-deep">
                  Solicitud enviada. Nuestro equipo confirmará la cita por teléfono.
                </p>
              )}
              <button
                type="submit"
                disabled={createAppointment.isPending}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep disabled:opacity-60"
              >
                {createAppointment.isPending && (
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                )}
                Enviar solicitud
              </button>
            </form>
          </section>

          <section className="card-soft p-6 sm:p-8">
            <h2 className="flex items-center gap-2 font-display text-xl font-bold text-primary-deep">
              <ClipboardList className="size-5 text-primary" aria-hidden="true" />
              Mis citas
            </h2>
            {appointmentsQuery.isPending ? (
              <Spinner />
            ) : upcoming.length === 0 ? (
              <Empty text="Aún no tienes citas activas. Solicita una desde el formulario." />
            ) : (
              <ul className="mt-5 grid gap-3">
                {upcoming.map((a) => (
                  <li
                    key={a.id}
                    className="rounded-3xl border border-border bg-background px-4 py-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-display text-sm font-bold text-primary-deep">{a.specialty}</p>
                      <span className="rounded-full bg-primary-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-deep">
                        {statusLabel[a.status] ?? a.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {formatDate(a.preferred_date)}
                      {a.preferred_time ? ` · ${a.preferred_time.slice(0, 5)}` : ""}
                    </p>
                    {a.reason && <p className="mt-1 text-sm text-foreground/80">{a.reason}</p>}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>

        <section className="card-soft mt-6 p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-primary-deep">Historial médico</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {recordTabs.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setTab(t.key)}
                  className={
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors " +
                    (tab === t.key
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground/70 hover:text-primary")
                  }
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {t.label}
                </button>
              );
            })}
          </div>

          {recordsQuery.isPending ? (
            <Spinner />
          ) : records.length === 0 ? (
            <Empty text="No hay registros en esta sección todavía. Se cargarán tras tu atención en el hospital." />
          ) : (
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {records.map((r) => (
                <li key={r.id} className="rounded-3xl border border-border bg-background px-5 py-4">
                  <p className="font-display text-sm font-bold text-primary-deep">{r.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {formatDate(r.occurred_at)}
                    {r.doctor ? ` · ${r.doctor}` : ""}
                  </p>
                  {r.description && (
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80">{r.description}</p>
                  )}
                  {r.file_url && (
                    <a
                      href={r.file_url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex text-sm font-semibold text-primary"
                    >
                      Ver documento
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";
const labelClass =
  "font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground";

function Spinner() {
  return (
    <div className="mt-6 flex justify-center">
      <Loader2 className="size-5 animate-spin text-primary" aria-hidden="true" />
    </div>
  );
}

function Empty({ text }: { text: string }) {
  return (
    <p className="mt-5 rounded-3xl border border-dashed border-border px-5 py-6 text-sm text-muted-foreground">
      {text}
    </p>
  );
}

function formatDate(value: string) {
  const date = new Date(value.length <= 10 ? value + "T12:00:00" : value);
  return date.toLocaleDateString("es-VE", { day: "2-digit", month: "long", year: "numeric" });
}
