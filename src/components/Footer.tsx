import { Mail, Instagram, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-6xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-2xl tracking-wider text-foreground font-light">3FORO</span>
            <p className="text-muted-foreground font-light leading-relaxed">
              Infraestrutura descentralizada enterprise de alta disponibilidade
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-light text-foreground">Contato</h4>
            <div className="space-y-2 text-sm font-light">
              <p className="text-muted-foreground">contato@3foro.io</p>
              <p className="text-muted-foreground">status.3foro.io (em breve)</p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-light text-foreground">Redes</h4>
            <div className="flex gap-6 text-sm font-light">
              <a 
                href="https://instagram.com/3foro.nodes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://github.com/3FORO" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-sm text-muted-foreground font-light">
          <p>© {new Date().getFullYear()} 3FORO</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
