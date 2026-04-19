import { MessageCircle, MapPin, UtensilsCrossed } from "lucide-react";
import heroImg from "@/assets/hero-brunch.jpg";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Sit%26Joy+Plaza+del+Papa+Juan+Pablo+II+21+Alicante";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Brunch con café de especialidad, tostada de aguacate y pancakes en Sit&Joy Alicante"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/95" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-end px-5 pb-24 pt-40 md:items-center md:justify-center md:px-8 md:pb-20 md:text-center">
        <span className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-foreground/80 backdrop-blur">
          Café · Brunch · Alicante
        </span>

        <h1 className="reveal max-w-4xl font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
          Café de especialidad y brunch
          <span className="block italic text-primary"> en el corazón de Alicante</span>
        </h1>

        <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
          Un espacio donde el sabor, el diseño y el buen ambiente se encuentran.
          Desayunos creativos, brunch artesanal y café de origen, sin prisas.
        </p>

        <div className="reveal mt-8 flex flex-wrap gap-3 md:justify-center">
          <a
            href="https://wa.me/34651851946"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:translate-y-[-2px] hover:shadow-card"
          >
            <MessageCircle className="h-4 w-4" /> Escribir por WhatsApp
          </a>
          <a
            href="#carta"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-all hover:bg-background"
          >
            <UtensilsCrossed className="h-4 w-4" /> Ver carta
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-all hover:bg-background"
          >
            <MapPin className="h-4 w-4" /> Cómo llegar
          </a>
        </div>

        <div className="reveal mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-foreground/70 md:justify-center">
          <span className="flex items-center gap-2">
            <span className="text-base text-primary">★ 4,8</span> · 243 reseñas
          </span>
          <span className="hidden h-4 w-px bg-border md:inline-block" />
          <span>Plaza del Papa Juan Pablo II, 21 · Alicante</span>
        </div>
      </div>
    </section>
  );
}
