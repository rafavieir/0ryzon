import { Button } from "@/components/ui/button";
import { Network, Globe, Shield } from "lucide-react";
import heroImage from "@/assets/hero-network.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Hero = () => {
  const { t } = useLanguage();
  
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

      {/* Language Selector */}
      <div className="absolute top-8 right-8 z-20">
        <LanguageSelector />
      </div>
      
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-6xl relative z-10">
        <div className="space-y-16">
          {/* Logo */}
          <div className="inline-block animate-fade-in">
            <span className="text-xl tracking-wider text-foreground font-light">
              ³Øryzon web3 Solutions
            </span>
          </div>

          {/* Main Content */}
          <div className="space-y-8 max-w-3xl">
            <div className="relative">
              {/* Gooey Transition Title */}
              <div className="gooey-container">
                <h1 className="gooey-text text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground">
                  {t('hero.title')}
                </h1>
                <h1 className="gooey-text text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground">
                  {t('hero.titleAlt')}
                </h1>
              </div>
              
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

            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes combine {
          to { 
            filter: blur(10px) contrast(30); 
          }
        }

        .gooey-container {
          background: hsl(var(--background));
          animation: combine 4s linear infinite;
          animation-timing-function: linear(0, 0 45%, 1 50%, 0 55% 90%, 1 95%, 0 100%);
          padding: 0;
          display: grid;
          place-items: start;
          isolation: isolate;
        }

        .gooey-text {
          animation: fade 4s linear infinite;
          grid-area: 1 / 1;
        }

        .gooey-text:first-child {
          animation-timing-function: linear(1 45%, 0 55% 90%, 1 100%);
        }

        .gooey-text:nth-child(2) {
          animation-timing-function: linear(0 45%, 1 55% 90%, 0 100%);
        }
      `}</style>
    </section>
  );
};

export default Hero;
