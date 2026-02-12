import { Zap, Wrench, Gift, Box } from "lucide-react";

const services = [
  { icon: Zap, title: "Prototipagem Rápida", desc: "Do conceito ao protótipo em tempo recorde." },
  { icon: Wrench, title: "Peças Sob Medida", desc: "Componentes técnicos com encaixe perfeito." },
  { icon: Gift, title: "Produtos Personalizados", desc: "Itens exclusivos para seu negócio ou projeto." },
  { icon: Box, title: "Modelagem 3D", desc: "Criação digital profissional do seu modelo." },
];

const ServicesSection = () => (
  <section id="servicos" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center tracking-tight mb-16">
        Nossos <span className="text-primary">Serviços</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="glass rounded-2xl p-8 text-center space-y-4 hover:scale-[1.03] transition-transform opacity-0 animate-fade-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <s.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-display text-lg font-semibold">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
