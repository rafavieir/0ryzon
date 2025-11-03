import { Button } from "@/components/ui/button";
import { Network, Globe, Shield } from "lucide-react";
import heroImage from "@/assets/hero-network.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Rede descentralizada com nodes conectados" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }} 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Logo/Brand */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4">
            <Network className="w-5 h-5 text-primary" />
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              3FORO
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Infraestrutura Descentralizada{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
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
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">Uptime Garantido</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 backdrop-blur-sm">
              <Globe className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">Transparência Total</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
              <Network className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Multi-Rede</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => window.location.href = 'mailto:contato@3foro.io'}
            >
              Falar com Especialista
            </Button>
            <Button 
              variant="outline" 
              size="xl"
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
