import { Mail, Instagram, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* CTA Section */}
          <div className="text-center mb-12 pb-12 border-b">
            <h2 className="text-3xl font-bold mb-4">
              Vamos Construir Juntos
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Conecte sua infraestrutura ao ecossistema Web3 ou integre sua aplicação à rede descentralizada
            </p>
            <Button 
              variant="default" 
              size="lg"
              onClick={() => window.location.href = 'mailto:contato@3foro.io'}
            >
              <Mail className="w-4 h-4 mr-2" />
              Entrar em Contato
            </Button>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">3FORO</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Infraestrutura descentralizada enterprise para América Latina
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Contato</h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  📬 contato@3foro.io
                </p>
                <p className="text-muted-foreground">
                  📡 status.3foro.io (em breve)
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Redes Sociais</h4>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => window.open('https://instagram.com/3foro.nodes', '_blank')}
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => window.open('https://github.com/3FORO', '_blank')}
                >
                  <Github className="w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => window.location.href = 'https://3foro.io'}
                >
                  <Globe className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} 3FORO. Infraestrutura descentralizada LATAM.</p>
            <p className="mt-2">Uptime real • Transparência • Performance</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
