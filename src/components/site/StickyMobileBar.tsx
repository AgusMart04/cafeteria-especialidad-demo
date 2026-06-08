import { MessageCircle, MapPin, UtensilsCrossed } from "lucide-react";

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Alicante+Spain";
const WHATSAPP_URL =
  "https://wa.me/624537879?text=Hola!%20me%20gusto%20tu%20demo%20de%20Caf%C3%A9%20de%20especialidad";

export function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 bg-primary py-3 text-primary-foreground"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-[11px] font-medium">WhatsApp</span>
        </a>
        <a href="#carta" className="flex flex-col items-center gap-1 py-3 text-foreground">
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
