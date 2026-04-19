import { Clock } from "lucide-react";

const schedule = [
  { day: "Lunes", time: "9:00 – 13:00" },
  { day: "Martes", time: "9:00 – 13:00 · 17:00 – 20:30" },
  { day: "Miércoles", time: "9:00 – 13:00 · 17:00 – 20:30" },
  { day: "Jueves", time: "9:00 – 13:00 · 17:00 – 20:30" },
  { day: "Viernes", time: "9:00 – 13:00 · 17:00 – 20:30" },
  { day: "Sábado", time: "9:00 – 14:00" },
  { day: "Domingo", time: "9:00 – 14:00" },
];

export function Hours() {
  return (
    <section id="horarios" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="reveal text-center">
          <Clock className="mx-auto mb-4 h-8 w-8 text-primary" />
          <h2 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Horarios
          </h2>
          <p className="mt-3 text-foreground/70">
            Te esperamos para desayunar, hacer brunch o tomar el mejor café.
          </p>
        </div>

        <div className="reveal mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <ul className="divide-y divide-border">
            {schedule.map((s) => (
              <li
                key={s.day}
                className="flex items-center justify-between gap-4 px-6 py-4 md:px-8"
              >
                <span className="font-medium text-foreground">{s.day}</span>
                <span className="text-right text-sm text-foreground/75">{s.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="reveal mt-4 text-center text-xs text-muted-foreground">
          *Los horarios pueden variar según temporada.
        </p>
      </div>
    </section>
  );
}
