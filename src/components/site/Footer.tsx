import { Instagram, MessageCircle, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pb-28 pt-16 md:pb-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 md:px-8">
        <div>
          <div className="font-serif text-3xl text-foreground">
            Sit<span className="text-primary">&</span>Joy
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Café de especialidad y brunch artesanal en el centro de Alicante.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-lg text-foreground">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              Plaza del Papa Juan Pablo II, 21 · 03005 Alicante
            </li>
            <li>
              <a
                href="https://wa.me/34651851946"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp · 651 85 19 46
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sitjoycoffee/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Instagram className="h-4 w-4 text-primary" /> @sitjoycoffee
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg text-foreground">Horarios</h3>
          <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
            <li>Lun: 9:00 – 13:00</li>
            <li>Mar – Vie: 9:00 – 13:00 · 17:00 – 20:30</li>
            <li>Sáb – Dom: 9:00 – 14:00</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-border px-5 pt-6 text-center text-xs text-muted-foreground md:px-8">
        © {new Date().getFullYear()} Sit&Joy · Hecho con cariño en Alicante
      </div>
    </footer>
  );
}
