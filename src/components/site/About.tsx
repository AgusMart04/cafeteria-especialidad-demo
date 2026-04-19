import aboutImg from "@/assets/about-interior.jpg";

export function About() {
  return (
    <section id="sobre" className="bg-muted py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="reveal relative overflow-hidden rounded-3xl shadow-card">
          <img
            src={aboutImg}
            alt="Interior de la cafetería Sit&Joy en Alicante con luz natural y ambiente acogedor"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1024}
            height={1024}
          />
        </div>
        <div className="reveal flex flex-col justify-center">
          <span className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Sobre nosotros
          </span>
          <h2 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
            El café como <em className="text-primary">experiencia</em>,
            no como rutina.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/75 md:text-lg">
            Sit&Joy nace con la idea de transformar el café en experiencia.
            Un lugar donde cada plato y cada taza están pensados para
            disfrutar sin prisas, en un ambiente moderno, cálido y diseñado
            con cariño.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/75 md:text-lg">
            Trabajamos con producto fresco, café de especialidad y recetas
            propias para ofrecerte el mejor brunch del centro de Alicante.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { k: "4,8★", v: "Valoración" },
              { k: "243+", v: "Reseñas" },
              { k: "100%", v: "Artesanal" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-border bg-card px-4 py-5 text-center"
              >
                <div className="font-serif text-2xl text-primary md:text-3xl">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
