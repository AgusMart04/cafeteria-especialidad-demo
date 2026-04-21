import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "María G.",
    text: "Desayunos espectaculares y un café increíble. Repetiré seguro.",
    rating: 5,
  },
  {
    name: "Carlos R.",
    text: "Ambiente increíble y muy bonito. El sitio perfecto para empezar el día.",
    rating: 5,
  },
  {
    name: "Lucía P.",
    text: "El mejor brunch de Alicante. Todo riquísimo y un trato genial.",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section id="resenas" className="bg-muted py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="reveal text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Lo que dicen nuestros clientes
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-foreground md:text-6xl">
            <em className="text-primary">4,8 ★</em> en 243 reseñas
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="reveal hover-lift rounded-3xl border border-border bg-card p-8 shadow-soft"
            >
              <div className="mb-4 flex gap-0.5 text-primary">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-serif text-xl leading-snug text-foreground">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 text-sm font-medium text-muted-foreground">
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Sit%26Joy+Alicante"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50"
          >
            Ver todas las reseñas en Google <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
