import { Target, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Vision = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Ser o principal operador e integrador de infraestrutura descentralizada da América Latina, 
                conectando provedores locais, empresas e comunidades a um novo modelo de internet — 
                aberta, confiável e colaborativa.
              </p>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="border-2 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-8">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Compass className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Trazer profissionalismo, segurança e transparência à operação de nodes e validadores, 
                contribuindo para o crescimento sustentável do ecossistema Web3 global.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Vision;
