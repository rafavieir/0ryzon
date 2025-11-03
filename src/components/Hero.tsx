import { Button } from "@/components/ui/button";
import { Network, Globe, Shield } from "lucide-react";
import heroImage from "@/assets/hero-network.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background border-b border-border overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{
             backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
             backgroundSize: '80px 80px'
           }} 
      />
      
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-6xl relative z-10">
        <div className="space-y-16">
          {/* Logo */}
          <div className="inline-block">
            <span className="text-2xl tracking-wider text-foreground font-light">
              ³Øryzon web3 Solutions
            </span>
          </div>

          {/* Main Content */}
          <div className="space-y-12 max-w-3xl">
            <div className="relative">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] text-foreground relative z-10">
                Infraestrutura<br />
                Descentralizada<br />
                Enterprise
              </h1>
              
              {/* Crypto-style animated grid */}
              <div className="absolute -right-20 top-0 w-64 h-64 opacity-30 pointer-events-none hidden lg:block">
                <div className="relative w-full h-full">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={`h-${i}`}
                      className="absolute left-0 right-0 h-px bg-primary"
                      style={{
                        top: `${i * 20}%`,
                        animation: `pulse 3s ease-in-out infinite ${i * 0.2}s`
                      }}
                    />
                  ))}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={`v-${i}`}
                      className="absolute top-0 bottom-0 w-px bg-primary"
                      style={{
                        left: `${i * 20}%`,
                        animation: `pulse 3s ease-in-out infinite ${i * 0.3}s`
                      }}
                    />
                  ))}
                  {/* Animated nodes */}
                  <div className="absolute top-[20%] left-[40%] w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <div className="absolute top-[60%] left-[60%] w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute top-[40%] left-[80%] w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </div>

            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
              Operação profissional de nodes, validadores e infraestrutura descentralizada com alta disponibilidade
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button 
                variant="default" 
                size="lg"
                className="font-light tracking-wide"
                onClick={() => window.location.href = 'mailto:contato@³Øryzon.io'}
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
