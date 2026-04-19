import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

const links = [
  { href: "/#sobre", label: "Sobre nosotros" },
  { href: "/#carta", label: "Carta" },
  { href: "/#resenas", label: "Reseñas" },
  { href: "/#horarios", label: "Horarios" },
  { href: "/#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="font-serif text-2xl tracking-tight text-foreground">
          Sit<span className="text-primary">&</span>Joy
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/reservas"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-4 py-2.5 text-sm font-medium text-primary transition-all hover:bg-secondary"
          >
            Reservar grupo
          </Link>
          <a
            href="https://wa.me/34651851946"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/reservas"
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-background px-3 py-2 text-xs font-medium text-primary transition-all hover:bg-secondary"
          >
            Reservar
          </Link>
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 text-foreground"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground/90 hover:bg-muted"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/reservas"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-primary px-3 py-3 text-center text-base font-medium text-primary-foreground"
              >
                Reservar grupo (10+)
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
