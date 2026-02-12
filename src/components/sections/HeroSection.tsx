import { MessageCircle } from "lucide-react";

const HeroSection = ({ onRequestQuote }: { onRequestQuote: () => void }) => (
  <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
    <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
    <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/5 blur-[100px]" />

    <div className="container relative mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pt-24">
      {/* Text */}
      <div className="space-y-8 opacity-0 animate-fade-in">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
          Impressão 3D com{" "}
          <span className="text-primary neon-text">Precisão</span> e{" "}
          <span className="text-accent">Inovação.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg">
          Transformamos sua ideia em realidade com tecnologia de ponta.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={onRequestQuote}
            className="rounded-lg bg-primary px-8 py-3.5 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors neon-glow"
          >
            Solicitar Orçamento
          </button>
          <a
            href="https://wa.me/5545999637109"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-border px-8 py-3.5 font-semibold text-foreground hover:bg-muted/50 transition-colors"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
        </div>
      </div>

      {/* 3D Object */}
      <div className="flex items-center justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <div className="relative w-64 h-64 md:w-80 md:h-80" style={{ perspective: "600px" }}>
          <div className="absolute inset-0 animate-spin-slow" style={{ transformStyle: "preserve-3d" }}>
            {/* Cube faces */}
            {[
              { transform: "translateZ(60px)", bg: "bg-primary/20 border-primary/40" },
              { transform: "rotateY(180deg) translateZ(60px)", bg: "bg-accent/20 border-accent/40" },
              { transform: "rotateY(90deg) translateZ(60px)", bg: "bg-primary/15 border-primary/30" },
              { transform: "rotateY(-90deg) translateZ(60px)", bg: "bg-accent/15 border-accent/30" },
              { transform: "rotateX(90deg) translateZ(60px)", bg: "bg-primary/10 border-primary/25" },
              { transform: "rotateX(-90deg) translateZ(60px)", bg: "bg-accent/10 border-accent/25" },
            ].map((face, i) => (
              <div
                key={i}
                className={`absolute top-1/2 left-1/2 w-[120px] h-[120px] -ml-[60px] -mt-[60px] border backdrop-blur-sm ${face.bg}`}
                style={{ transform: face.transform, backfaceVisibility: "hidden" }}
              />
            ))}
          </div>
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-[60px] animate-float" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
