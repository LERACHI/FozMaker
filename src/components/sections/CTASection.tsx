const CTASection = ({ onRequestQuote }: { onRequestQuote: () => void }) => (
  <section id="cta" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="gradient-tech rounded-3xl p-12 md:p-20 text-center space-y-8 border border-border/30">
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
          Pronto para tirar sua ideia do papel?
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto">
          Entre em contato e transforme seu conceito em um produto real com impressão 3D de alta qualidade.
        </p>
        <button
          onClick={onRequestQuote}
          className="rounded-xl bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors neon-glow"
        >
          Solicitar Projeto Agora
        </button>
      </div>
    </div>
  </section>
);

export default CTASection;
