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
    <section className="py-32 border-t border-border">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-6xl">
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-light mb-4">
            Diferenciais
          </h2>
        </div>

        <div className="space-y-12">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="border-t border-border pt-8"
            >
              <h3 className="text-2xl font-light mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-lg max-w-3xl">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
