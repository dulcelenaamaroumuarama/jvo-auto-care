import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-brand-red-foreground shadow-lg shadow-brand-red/40 ring-4 ring-brand-red/20 transition hover:scale-105 hover:ring-brand-red/30"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-brand-red" />
      </span>
    </a>
  );
}
