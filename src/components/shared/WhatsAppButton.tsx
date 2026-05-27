import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={siteConfig.facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-red-600 px-5 py-4 text-sm font-black text-white shadow-2xl shadow-red-600/30 transition hover:-translate-y-1 hover:bg-red-700"
    >
      <MessageCircle size={20} />
      Contactar
    </a>
  );
}