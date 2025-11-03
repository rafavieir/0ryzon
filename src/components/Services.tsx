import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Server, Activity, FileCheck, Users, TestTube, Blocks } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Operação de Nodes DePIN",
    description: "Operação e monitoramento 24/7 de nodes DePIN e validadores em múltiplas redes blockchain."
  },
  {
    icon: Blocks,
    title: "Infraestrutura Descentralizada",
    description: "Provisionamento completo de storage, computação e banda em infraestrutura distribuída."
  },
  {
    icon: Activity,
    title: "Monitoramento & SLA",
    description: "Painéis públicos de uptime, métricas transparentes e auditoria contínua de performance."
  },
  {
    icon: FileCheck,
    title: "Consultoria Web3",
    description: "Apoio técnico para empresas Web2 e Web3 integrarem aplicações à infraestrutura descentralizada."
  },
  {
    icon: TestTube,
    title: "Testnets & Incentivos",
    description: "Participação ativa em programas de testnet e redes incentivadas, apoiando novos ecossistemas."
  },
  {
    icon: Users,
    title: "Integração LATAM",
    description: "Conexão entre datacenters locais e o ecossistema global de computação descentralizada."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 border-t border-border">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-6xl">
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-light mb-4">
            Serviços
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl">
            Soluções completas de infraestrutura descentralizada com padrão enterprise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px border-t border-l border-border">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="p-10 border-r border-b border-border bg-background hover:bg-muted/30 transition-colors"
              >
                <Icon className="w-8 h-8 text-foreground mb-6" />
                <h3 className="text-xl font-light mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
