import { Send, PenTool, Printer } from "lucide-react";

const steps = [
  { icon: Send, num: "01", title: "Envie sua ideia", desc: "Descreva o que você precisa — pode ser um esboço, foto ou apenas uma descrição." },
  { icon: PenTool, num: "02", title: "Criamos o modelo", desc: "Nossa equipe desenvolve o modelo 3D digital com precisão técnica." },
  { icon: Printer, num: "03", title: "Produzimos com precisão", desc: "Imprimimos seu projeto com materiais de alta qualidade." },
];

const ProcessSection = () => (
  <section id="processo" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center tracking-tight mb-16">
        Como <span className="text-primary">Funciona</span>
      </h2>
      <div className="relative max-w-4xl mx-auto">
        {/* Connector line */}
        <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-px bg-border hidden md:block" />

        <div className="space-y-12 md:space-y-16">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`flex flex-col md:flex-row items-start md:items-center gap-6 opacity-0 animate-fade-in ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={`flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                <span className="font-display text-5xl font-bold text-primary/20">{step.num}</span>
                <h3 className="font-display text-xl font-semibold mt-2">{step.title}</h3>
                <p className="text-muted-foreground mt-2 max-w-sm">{step.desc}</p>
              </div>
              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full glass neon-glow">
                <step.icon className="text-primary" size={24} />
              </div>
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
      <p className="text-center mt-16 font-display text-xl text-muted-foreground tracking-wide">
        Simples. Rápido. <span className="text-primary">Tecnológico.</span>
      </p>
    </div>
  </section>
);

export default ProcessSection;
