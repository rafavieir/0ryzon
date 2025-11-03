import { Button } from "@/components/ui/button";
import { Network, Globe, Shield } from "lucide-react";
import heroImage from "@/assets/hero-network.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 z-0" style={{ background: 'var(--gradient-mesh)' }} />
      
      {/* Background Image with Strong Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Rede descentralizada com nodes conectados" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      {/* Glowing Orbs - Multiple layers */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-secondary/25 rounded-full blur-[130px] animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[150px] animate-float" style={{ animationDelay: '1.5s' }} />
      
      {/* Subtle dots pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }} 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Logo/Brand */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect mb-4 animate-glow">
            <Network className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-lg font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              3FORO
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Infraestrutura Descentralizada{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
              Enterprise
            </span>{" "}
            para LATAM
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Operação profissional de <span className="text-primary font-semibold">nodes</span>, <span className="text-secondary font-semibold">validadores</span> e provedores de computação descentralizada com padrão enterprise
          </p>

          {/* Key Features Pills */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 px-5 py-3 rounded-full glass-effect hover:scale-105 transition-transform duration-300 group">
              <Shield className="w-5 h-5 text-accent group-hover:animate-pulse" />
              <span className="text-sm font-semibold text-accent">Uptime Garantido</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 rounded-full glass-effect hover:scale-105 transition-transform duration-300 group">
              <Globe className="w-5 h-5 text-secondary group-hover:animate-pulse" />
              <span className="text-sm font-semibold text-secondary">Transparência Total</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 rounded-full glass-effect hover:scale-105 transition-transform duration-300 group">
              <Network className="w-5 h-5 text-primary group-hover:animate-pulse" />
              <span className="text-sm font-semibold text-primary">Multi-Rede</span>
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
