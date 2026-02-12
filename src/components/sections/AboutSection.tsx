const AboutSection = () => (
  <section id="sobre" className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-3xl text-center space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
      <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
        Sobre a <span className="text-primary">3D Foz</span>
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        A 3D Foz é especializada em soluções personalizadas em impressão 3D, unindo tecnologia, criatividade e precisão para transformar conceitos em objetos reais.
      </p>
    </div>
  </section>
);

export default AboutSection;
