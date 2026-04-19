import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import m1 from "@/assets/menu-pancakes.jpg";
import m2 from "@/assets/menu-coffee.jpg";
import m3 from "@/assets/menu-toast.jpg";
import m4 from "@/assets/menu-bowl.jpg";
import m5 from "@/assets/menu-iced.jpg";

const photos = [
  { src: g1, alt: "Ambiente cálido en Sit&Joy Alicante" },
  { src: m1, alt: "Pancakes artesanales" },
  { src: g3, alt: "Detalle de mesa con café de especialidad" },
  { src: m2, alt: "Café de especialidad recién preparado" },
  { src: g4, alt: "Rincón acogedor de la cafetería" },
  { src: m3, alt: "Tostada gourmet" },
  { src: g2, alt: "Brunch servido con cuidado" },
  { src: m4, alt: "Bowl saludable" },
  { src: m5, alt: "Bebida fría refrescante" },
];

export function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Galería
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-foreground md:text-6xl">
            Pequeños momentos en <em className="text-primary">Sit&Joy</em>
          </h2>
        </div>

        <div className="reveal mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {photos.map((photo, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label={`Ver imagen: ${photo.alt}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="hover-zoom-img h-full w-full object-cover"
              />
            </button>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <a
            href="https://www.instagram.com/sitjoycoffee/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:opacity-90"
          >
            Síguenos en @sitjoycoffee
          </a>
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos.map((p) => ({ src: p.src, alt: p.alt }))}
        controller={{ closeOnBackdropClick: true }}
        styles={{ container: { backgroundColor: "rgba(20, 15, 10, 0.92)" } }}
      />
    </section>
  );
}
