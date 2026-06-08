import { MessageCircle, MapPin, Instagram } from "lucide-react";

const MAPS_EMBED = "https://www.google.com/maps?q=Alicante+Spain&output=embed";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Alicante+Spain";
const WHATSAPP_URL =
  "https://wa.me/624537879?text=Hola!%20me%20gusto%20tu%20demo%20de%20Caf%C3%A9%20de%20especialidad";

export function Contact() {
  return (
    <section id="contacto" className="bg-muted py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Visítanos
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-foreground md:text-6xl">
            Visítanos en Alicante
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-5">
          <div className="reveal flex flex-col gap-4 md:col-span-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  WhatsApp
                </div>
                <div className="mt-1 font-serif text-2xl text-foreground">624 53 78 79</div>
              </div>
            </a>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Dirección
                </div>
                <div className="mt-1 text-base leading-snug text-foreground">
                  Calle Principal, 1
                  <br />
                  03001 Alicante
                </div>
              </div>
            </a>

            <a
              href="https://www.instagram.com/websites.agus/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                <Instagram className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Instagram
                </div>
                <div className="mt-1 font-serif text-2xl text-foreground">@websites.agus</div>
              </div>
            </a>
          </div>

          <div className="reveal overflow-hidden rounded-3xl border border-border shadow-card md:col-span-3">
            <iframe
              src={MAPS_EMBED}
              title="Mapa de ubicación en Alicante"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full md:h-full"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
