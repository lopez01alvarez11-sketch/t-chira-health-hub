import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader2, Lock, Mail, ShieldCheck, UserPlus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/auth")({
  ssr: false,
  validateSearch: (search: Record<string, unknown>) => ({
    redirect: typeof search.redirect === "string" && search.redirect.startsWith("/")
      ? search.redirect
      : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Acceso de pacientes | Urológico Hospital Clínico" },
      {
        name: "description",
        content:
          "Ingresa o crea tu cuenta para gestionar citas, consultas, rayos X y tu historial en el Urológico Hospital Clínico.",
      },
      { property: "og:title", content: "Acceso de pacientes | Urológico Hospital Clínico" },
      {
        property: "og:description",
        content: "Portal del paciente: citas, historial médico y resultados en un solo lugar.",
      },
    ],
  }),
  component: AuthPage,
});

type Mode = "login" | "register";

function AuthPage() {
  const { redirect } = Route.useSearch();
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [documentId, setDocumentId] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && user) {
      navigate({ to: redirect ?? "/dashboard", replace: true });
    }
  }, [loading, user, navigate, redirect]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    setNotice(null);

    if (mode === "login") {
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
      if (signInError) setError(traducir(signInError.message));
    } else {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin + "/auth",
          data: {
            full_name: fullName,
            document_id: documentId,
            phone,
            birth_date: birthDate || null,
          },
        },
      });
      if (signUpError) setError(traducir(signUpError.message));
      else if (!data.session)
        setNotice("Cuenta creada. Revisa tu correo y confirma el registro para ingresar.");
    }

    setBusy(false);
  }

  async function handleGoogle() {
    setBusy(true);
    setError(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      setError("No pudimos iniciar sesión con Google. Intenta de nuevo.");
      setBusy(false);
      return;
    }
    if (result.redirected) return;
    navigate({ to: redirect ?? "/dashboard", replace: true });
  }

  return (
    <div className="px-4 py-8 md:py-12">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_1fr]">
        <section className="relative overflow-hidden rounded-4xl bg-primary text-primary-foreground">
          <div className="hex-field absolute inset-0 opacity-70" aria-hidden="true" />
          <div className="relative flex h-full flex-col justify-between gap-10 px-6 py-12 sm:px-10">
            <div>
              <p className="inline-flex items-center rounded-full bg-primary-foreground/12 px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.2em]">
                Portal del paciente
              </p>
              <h1 className="mt-5 font-display text-3xl font-bold leading-[1.05] md:text-4xl">
                Tu historia clínica y tus citas, siempre a mano
              </h1>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/85">
                Solicita citas con nuestros especialistas, revisa consultas anteriores, resultados de
                laboratorio, rayos X e informes de hospitalización.
              </p>
            </div>
            <ul className="grid gap-3 text-sm">
              {[
                "Citas médicas con seguimiento de estado",
                "Historial de consultas y hospitalizaciones",
                "Resultados de imágenes y laboratorio",
                "Datos de tu plan Urosalud",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-primary-foreground/90">
                  <ShieldCheck className="size-4 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="card-soft p-6 sm:p-8">
          <div className="inline-flex rounded-full bg-secondary p-1">
            {(["login", "register"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => {
                  setMode(value);
                  setError(null);
                  setNotice(null);
                }}
                className={
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors " +
                  (mode === value ? "bg-card text-primary shadow-sm" : "text-foreground/70")
                }
              >
                {value === "login" ? "Iniciar sesión" : "Crear cuenta"}
              </button>
            ))}
          </div>

          <h2 className="mt-6 font-display text-2xl font-bold text-primary-deep">
            {mode === "login" ? "Bienvenido de nuevo" : "Registra tus datos"}
          </h2>

          <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
            {mode === "register" && (
              <>
                <Field label="Nombre y apellido">
                  <input
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={inputClass}
                    placeholder="María Rodríguez"
                  />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Cédula">
                    <input
                      value={documentId}
                      onChange={(e) => setDocumentId(e.target.value)}
                      className={inputClass}
                      placeholder="V-12.345.678"
                    />
                  </Field>
                  <Field label="Teléfono">
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={inputClass}
                      placeholder="0412 174 7898"
                    />
                  </Field>
                </div>
                <Field label="Fecha de nacimiento">
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className={inputClass}
                  />
                </Field>
              </>
            )}

            <Field label="Correo electrónico">
              <div className="relative">
                <Mail
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  required
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass + " pl-9"}
                  placeholder="paciente@correo.com"
                />
              </div>
            </Field>

            <Field label="Contraseña">
              <div className="relative">
                <Lock
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  required
                  type="password"
                  minLength={6}
                  autoComplete={mode === "login" ? "current-password" : "new-password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={inputClass + " pl-9"}
                  placeholder="Mínimo 6 caracteres"
                />
              </div>
            </Field>

            {error && (
              <p className="rounded-2xl bg-emergency/10 px-4 py-3 text-sm text-emergency">{error}</p>
            )}
            {notice && (
              <p className="rounded-2xl bg-primary-soft px-4 py-3 text-sm text-primary-deep">
                {notice}
              </p>
            )}

            <button
              type="submit"
              disabled={busy}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep disabled:opacity-60"
            >
              {busy ? (
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              ) : (
                <UserPlus className="size-4" aria-hidden="true" />
              )}
              {mode === "login" ? "Ingresar" : "Crear mi cuenta"}
            </button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px flex-1 bg-border" />o<span className="h-px flex-1 bg-border" />
          </div>

          <button
            type="button"
            onClick={handleGoogle}
            disabled={busy}
            className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary disabled:opacity-60"
          >
            <GoogleMark />
            Continuar con Google
          </button>

          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Al continuar aceptas el resguardo confidencial de tus datos clínicos. Para emergencias
            llama al <a className="font-semibold text-primary" href="tel:+582763558886">(0276) 355.88.86</a> o
            visita nuestra <Link to="/emergencias" className="font-semibold text-primary">área 24/7</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function GoogleMark() {
  return (
    <svg className="size-4" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.5l6.7-6.7C35.6 2.4 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.8 6.1C12.3 13.2 17.7 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-2.8-.4-4.1H24v8.4h12.7c-.6 3-2.5 5.5-5.3 7.2l7.6 5.9c4.4-4.1 7.5-10.2 7.5-17.4z" />
      <path fill="#FBBC05" d="M10.4 28.7A14.6 14.6 0 0 1 9.6 24c0-1.6.3-3.2.8-4.7l-7.8-6.1A24 24 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.8-6.1z" />
      <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.9l-7.6-5.9c-2.1 1.4-4.8 2.3-8.3 2.3-6.3 0-11.7-3.7-13.6-9.8l-7.8 6.1C6.5 42.6 14.6 48 24 48z" />
    </svg>
  );
}

function traducir(message: string) {
  const m = message.toLowerCase();
  if (m.includes("invalid login")) return "Correo o contraseña incorrectos.";
  if (m.includes("already registered")) return "Ese correo ya tiene una cuenta. Inicia sesión.";
  if (m.includes("email not confirmed")) return "Confirma tu correo antes de ingresar.";
  if (m.includes("password")) return "La contraseña debe tener al menos 6 caracteres.";
  return "No pudimos completar la operación. Intenta nuevamente.";
}
