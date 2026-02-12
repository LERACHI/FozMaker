const projects = [
  { name: "Protótipo Industrial", category: "Engenharia" },
  { name: "Miniaturas Personalizadas", category: "Colecionáveis" },
  { name: "Case para Eletrônicos", category: "Design" },
  { name: "Peça Mecânica", category: "Automotivo" },
  { name: "Maquete Arquitetônica", category: "Arquitetura" },
  { name: "Acessório Customizado", category: "Moda" },
];

const GallerySection = () => (
  <section id="galeria" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center tracking-tight mb-16">
        Nossos <span className="text-primary">Projetos</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <div
            key={p.name}
            className="group relative aspect-[4/3] rounded-2xl bg-muted/30 overflow-hidden cursor-pointer opacity-0 animate-fade-in"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            {/* Placeholder gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-xl bg-muted/40 backdrop-blur-sm border border-border/30" />
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-background/80 to-transparent">
              <h3 className="font-display font-semibold text-lg">{p.name}</h3>
              <span className="text-sm text-primary">{p.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
