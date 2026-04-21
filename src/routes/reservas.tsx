import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CalendarCheck,
  Clock,
  Users,
  MessageCircle,
  ArrowLeft,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { StickyMobileBar } from "@/components/site/StickyMobileBar";
import reservationsImage from "@/assets/reservations-group.jpg";

const TITLE = "Reservas para grupos · Sit&Joy Alicante";
const DESC =
  "Solicita tu reserva para grupos de 10 o más personas en Sit&Joy. Brunch, café de especialidad y eventos especiales en el corazón de Alicante.";
const URL = "https://sitjoycoffee.es/reservas";

// IMPORTANTE: Sustituye este endpoint por el tuyo de Formspree (https://formspree.io/f/XXXXXXXX)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

export const Route = createFileRoute("/reservas")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_ES" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:site_name", content: "Sit&Joy" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: ReservasPage,
});

function ReservasPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Validación mínima de personas
    const guests = Number(formData.get("guests"));
    if (!guests || guests < 10) {
      setErrorMsg("Las reservas son para grupos de 10 personas o más.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(
          data?.errors?.[0]?.message ??
            "No se ha podido enviar la solicitud. Inténtalo de nuevo en unos minutos.",
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg("Error de conexión. Comprueba tu red e inténtalo de nuevo.");
      setStatus("error");
    }
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="bg-background">
      <Navbar />

      <main className="pt-24 pb-24 md:pt-32">
        {/* Hero / intro */}
        <section className="mx-auto max-w-6xl px-5 md:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>

          <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-secondary-foreground">
                Grupos · 10+ personas
              </span>
              <h1 className="mt-5 font-serif text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
                Reservas para <span className="text-primary">ocasiones especiales</span>
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Cumpleaños, reuniones de empresa, despedidas o cualquier celebración que merezca un
                buen brunch y café de especialidad. Cuéntanos los detalles y nos encargamos del
                resto.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-foreground/85">
                <li className="flex items-start gap-3">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    Solo aceptamos solicitudes para grupos de <strong>10 personas o más</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    Las reservas <strong>no son automáticas</strong>: revisamos disponibilidad
                    manualmente.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CalendarCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    Te contactaremos por WhatsApp o teléfono en un plazo de{" "}
                    <strong>24–48 horas</strong> para confirmar.
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-3xl shadow-card">
              <img
                src={reservationsImage}
                alt="Mesa de brunch para grupos en Sit&Joy Alicante"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Formulario */}
        <section className="mx-auto mt-16 max-w-3xl px-5 md:mt-24 md:px-8">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-10">
            {status === "success" ? (
              <SuccessMessage onReset={() => setStatus("idle")} />
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="font-serif text-2xl text-foreground md:text-3xl">
                    Solicita tu reserva
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Completa el formulario y te contactaremos para confirmar disponibilidad.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot anti-spam */}
                  <input
                    type="text"
                    name="_gotcha"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <input
                    type="hidden"
                    name="_subject"
                    value="Nueva solicitud de reserva — Sit&Joy"
                  />

                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Nombre completo" name="name" required autoComplete="name" />
                    <Field
                      label="Teléfono (preferiblemente WhatsApp)"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+34 ..."
                    />
                  </div>

                  <Field label="Email" name="email" type="email" required autoComplete="email" />

                  <div className="grid gap-5 md:grid-cols-3">
                    <Field
                      label="Nº de personas"
                      name="guests"
                      type="number"
                      min={10}
                      required
                      placeholder="Mín. 10"
                    />
                    <Field label="Fecha deseada" name="date" type="date" required min={today} />
                    <Field label="Hora aproximada" name="time" type="time" required />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <SelectField
                      label="Tipo de evento (opcional)"
                      name="event_type"
                      options={[
                        "Cumpleaños",
                        "Reunión de empresa",
                        "Despedida",
                        "Celebración familiar",
                        "Otro",
                      ]}
                    />
                    <SelectField
                      label="Preferencias de consumo (opcional)"
                      name="preferences"
                      options={[
                        "Brunch completo",
                        "Café y pastelería",
                        "Desayunos",
                        "Mixto",
                        "A definir",
                      ]}
                    />
                  </div>

                  <Field
                    label="Restricciones alimentarias o alergias (opcional)"
                    name="allergies"
                    placeholder="Vegano, sin gluten, alergia a frutos secos..."
                  />

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Comentarios adicionales (opcional)
                    </label>
                    <textarea
                      name="comments"
                      rows={4}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Cuéntanos cualquier detalle relevante..."
                    />
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-muted/50 p-4 transition-colors hover:bg-muted">
                    <input
                      type="checkbox"
                      name="flexible_schedule"
                      value="Sí"
                      className="mt-0.5 h-4 w-4 accent-primary"
                    />
                    <span className="text-sm text-foreground/85">
                      <strong>Tengo flexibilidad de horario.</strong> Estoy abierto/a a otras
                      franjas si la solicitada no está disponible.
                    </span>
                  </label>

                  {status === "error" && (
                    <div className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:opacity-90 disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Enviando solicitud...
                      </>
                    ) : (
                      "Solicitar reserva"
                    )}
                  </button>

                  <p className="text-center text-xs text-muted-foreground">
                    Al enviar este formulario aceptas que te contactemos para gestionar tu reserva.
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Contacto alternativo */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">¿Prefieres escribirnos directamente?</p>
            <a
              href="https://wa.me/34651851946"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 font-serif text-2xl text-primary transition-colors hover:opacity-80"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp · 651 85 19 46
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  min?: number | string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        min={min}
        className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <option value="">Selecciona una opción</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <div className="py-8 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
        <CheckCircle2 className="h-8 w-8 text-primary" />
      </div>
      <h2 className="mt-6 font-serif text-3xl text-foreground">¡Solicitud recibida!</h2>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
        Hemos recibido tu solicitud. Te contactaremos en un plazo de{" "}
        <strong className="text-foreground">24–48 horas</strong> para confirmar disponibilidad y
        ultimar los detalles.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:opacity-90"
        >
          Volver al inicio
        </Link>
        <button
          onClick={onReset}
          className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          Enviar otra solicitud
        </button>
      </div>
    </div>
  );
}
