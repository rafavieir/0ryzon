import { Target, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Vision = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <Card className="border-2 glass-effect hover:border-primary transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.02] group">
            <CardContent className="pt-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-primary group-hover:animate-pulse" />
              </div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">Nossa Visão</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Ser o principal operador e integrador de infraestrutura descentralizada da América Latina, 
                conectando provedores locais, empresas e comunidades a um novo modelo de internet — 
                aberta, confiável e colaborativa.
              </p>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="border-2 glass-effect hover:border-secondary transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--secondary)/0.4)] hover:scale-[1.02] group">
            <CardContent className="pt-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/30 to-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Compass className="w-8 h-8 text-secondary group-hover:animate-pulse" />
              </div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-secondary transition-colors duration-300">Nossa Missão</h3>
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
