import { Button } from "@/components/ui/button";
import { Network, Globe, Shield } from "lucide-react";
import heroImage from "@/assets/hero-network.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background border-b border-border">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-6xl">
        <div className="space-y-16">
          {/* Logo */}
          <div className="inline-block">
            <span className="text-2xl tracking-wider text-foreground font-light">
              3FORO
            </span>
          </div>

          {/* Main Content */}
          <div className="space-y-12 max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] text-foreground">
              Infraestrutura<br />
              Descentralizada<br />
              Enterprise
            </h1>

            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
              Operação profissional de nodes, validadores e provedores de computação descentralizada para LATAM
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button 
                variant="default" 
                size="lg"
                className="font-light tracking-wide"
                onClick={() => window.location.href = 'mailto:contato@3foro.io'}
              >
                Falar com Especialista
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="font-light tracking-wide"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nossos Serviços
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
