import { CheckCircle2 } from "lucide-react";

const differentials = [
  {
    title: "Infraestrutura 100% Monitorada",
    description: "Painéis públicos de uptime e logs auditáveis em tempo real."
  },
  {
    title: "Operação Multi-Rede",
    description: "Experiência comprovada em performance e segurança em múltiplas blockchains."
  },
  {
    title: "Expertise Técnico Real",
    description: "Conhecimento profundo em cloud, containers, networking e arquitetura corporativa."
  },
  {
    title: "Presença LATAM",
    description: "Proximidade linguística e técnica com clientes e comunidades da região."
  },
  {
    title: "Educação & Expansão",
    description: "Compromisso com o crescimento e educação do ecossistema Web3 regional."
  }
];

const Differentials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Nosso Diferencial
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O que nos torna o parceiro ideal para sua infraestrutura Web3
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentials.map((item, index) => (
              <div 
                key={index}
                className="flex gap-4 p-7 rounded-2xl glass-effect hover:border-primary transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] group hover:scale-[1.02]"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-7 h-7 text-accent group-hover:animate-pulse" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
