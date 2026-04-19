import { MessageCircle, MapPin, UtensilsCrossed } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Sit%26Joy+Plaza+del+Papa+Juan+Pablo+II+21+Alicante";

export function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-3">
        <a
          href="https://wa.me/34651851946"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 bg-primary py-3 text-primary-foreground"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-[11px] font-medium">WhatsApp</span>
        </a>
        <a
          href="#carta"
          className="flex flex-col items-center gap-1 py-3 text-foreground"
        >
          <UtensilsCrossed className="h-5 w-5 text-primary" />
          <span className="text-[11px] font-medium">Carta</span>
        </a>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-foreground"
        >
          <MapPin className="h-5 w-5 text-primary" />
          <span className="text-[11px] font-medium">Mapa</span>
        </a>
      </div>
    </div>
  );
}
