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
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            O Que Fazemos
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções completas de infraestrutura descentralizada com padrão enterprise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50 border-2"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
