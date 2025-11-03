import { Button } from "@/components/ui/button";
import { Network, Globe, Shield } from "lucide-react";
import heroImage from "@/assets/hero-network.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-background">
      {/* Subtle Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Rede descentralizada com nodes conectados" 
          className="w-full h-full object-cover opacity-[0.02]"
        />
      </div>
      
      {/* Minimal gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Logo/Brand */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm mb-4">
            <Network className="w-5 h-5 text-foreground" />
            <span className="text-lg font-bold text-foreground">
              3FORO
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Infraestrutura Descentralizada{" "}
            <span className="text-foreground">
              Enterprise
            </span>{" "}
            para LATAM
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Operação profissional de nodes, validadores e provedores de computação descentralizada com padrão enterprise
          </p>

          {/* Key Features Pills */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-muted/50 transition-colors duration-300">
              <Shield className="w-5 h-5 text-foreground" />
              <span className="text-sm font-medium text-foreground">Uptime Garantido</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-muted/50 transition-colors duration-300">
              <Globe className="w-5 h-5 text-foreground" />
              <span className="text-sm font-medium text-foreground">Transparência Total</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-muted/50 transition-colors duration-300">
              <Network className="w-5 h-5 text-foreground" />
              <span className="text-sm font-medium text-foreground">Multi-Rede</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              variant="default" 
              size="lg"
              className="font-medium"
              onClick={() => window.location.href = 'mailto:contato@3foro.io'}
            >
              Falar com Especialista
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="font-medium"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
