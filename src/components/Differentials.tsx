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
                className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
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
