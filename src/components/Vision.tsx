import { Target, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Vision = () => {
  return (
    <section className="py-32 border-t border-border">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Vision */}
          <div>
            <h3 className="text-3xl font-light mb-6">Visão</h3>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              Ser o principal operador e integrador de infraestrutura descentralizada da América Latina, 
              conectando provedores locais, empresas e comunidades a um novo modelo de internet — 
              aberta, confiável e colaborativa.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-3xl font-light mb-6">Missão</h3>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              Trazer profissionalismo, segurança e transparência à operação de nodes e validadores, 
              contribuindo para o crescimento sustentável do ecossistema Web3 global.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
