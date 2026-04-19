import { useState } from "react";
import eggJoy from "@/assets/menu-egg-joy.jpg";
import clubJoy from "@/assets/menu-club-joy.jpg";
import coffee from "@/assets/menu-coffee.jpg";
import pancakes from "@/assets/menu-pancakes.jpg";
import pastry from "@/assets/menu-pastry.jpg";
import toast from "@/assets/menu-toast.jpg";
import iced from "@/assets/menu-iced.jpg";
import bowl from "@/assets/menu-bowl.jpg";

type Item = {
  name: string;
  desc: string;
  price: string;
  img: string;
  cat: string;
  featured?: boolean;
};

const items: Item[] = [
  { name: "Egg Joy", desc: "Tostada de masa madre, aguacate, huevo poché y microbrotes", price: "12,50 €", img: eggJoy, cat: "Brunch", featured: true },
  { name: "Club Joy", desc: "Pan tostado, pollo, bacon, lechuga y tomate con patatas", price: "12,50 €", img: clubJoy, cat: "Sándwiches", featured: true },
  { name: "Flat White", desc: "Café de especialidad con leche cremosa y arte latte", price: "3,20 €", img: coffee, cat: "Cafés" },
  { name: "Pancakes Joy", desc: "Pancakes esponjosos con frutos rojos y sirope de arce", price: "9,80 €", img: pancakes, cat: "Desayunos" },
  { name: "Croissant artesano", desc: "Mantequilla, hojaldre dorado y café de la casa", price: "4,50 €", img: pastry, cat: "Repostería" },
  { name: "Avo Toast", desc: "Tostada con aguacate, huevo, chile y cilantro fresco", price: "8,90 €", img: toast, cat: "Tostadas" },
  { name: "Iced Latte", desc: "Espresso doble con leche fría y hielo", price: "3,80 €", img: iced, cat: "Bebidas frías" },
  { name: "Granola Bowl", desc: "Yogur natural, granola casera, frutas y miel", price: "7,90 €", img: bowl, cat: "Desayunos" },
];

const cats = ["Todo", "Cafés", "Desayunos", "Brunch", "Sándwiches", "Tostadas", "Repostería", "Bebidas frías"];

export function Menu() {
  const [active, setActive] = useState("Todo");
  const filtered = active === "Todo" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="carta" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Nuestra carta
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-foreground md:text-6xl">
            Recetas pensadas para <em className="text-primary">disfrutar</em>
          </h2>
          <p className="mt-5 text-base text-foreground/70 md:text-lg">
            Cada plato está elaborado al momento, con producto fresco y mucho mimo.
          </p>
        </div>

        <div className="reveal mt-10 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === c
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "border border-border bg-card text-foreground/80 hover:border-primary/50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <article
              key={item.name}
              className="group hover-lift overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="hover-zoom-img h-full w-full object-cover"
                />
                {item.featured && (
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary backdrop-blur">
                    Destacado
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="mb-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  {item.cat}
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-2xl text-foreground">{item.name}</h3>
                  <span className="font-serif text-xl text-primary">{item.price}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
