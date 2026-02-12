import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 py-10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <span className="font-display text-lg font-bold tracking-tight">
        <span className="text-foreground">3D</span>
        <span className="text-primary"> Foz</span>
      </span>
      <div className="flex items-center gap-6">
        <a
          href="https://wa.me/5545999637109"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle size={20} />
        </a>
        <a
          href="https://instagram.com/fozmaker"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </a>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} 3D Foz. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
