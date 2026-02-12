import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5545999637109"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform animate-pulse-neon"
    style={{ boxShadow: "0 0 20px rgba(37, 211, 102, 0.4)" }}
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppButton;
