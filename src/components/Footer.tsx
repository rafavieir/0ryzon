import { Mail, Instagram, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-6xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="space-y-4">
            <span className="text-xl tracking-wider text-foreground font-light">³Øryzon</span>
            <p className="text-muted-foreground font-light leading-relaxed text-sm">
              {t('footer.brand')}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-light text-foreground text-xs">{t('footer.contact')}</h4>
            <div className="space-y-2 text-xs font-light">
              <p className="text-muted-foreground">contato@³Øryzon.io</p>
            </div>
          </div>

          {/* Monitoring */}
          <div className="space-y-3">
            <h4 className="font-light text-foreground text-xs">{t('footer.monitoring')}</h4>
            <div className="flex flex-col gap-2 text-xs font-light">
              <a 
                href="https://status.³Øryzon.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
              >
                <Globe className="w-3 h-3 text-emerald-500 animate-pulse" />
                {t('footer.statusPage')}
              </a>
              <a 
                href="https://grafana.³Øryzon.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
              >
                <Globe className="w-3 h-3 text-emerald-500 animate-pulse" />
                {t('footer.grafanaDashboard')}
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="font-light text-foreground text-xs">{t('footer.social')}</h4>
            <div className="flex flex-col gap-2 text-xs font-light">
              <a 
                href="https://instagram.com/³Øryzon.nodes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://github.com/³Øryzon" 
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
        <div className="pt-8 border-t border-border text-xs text-muted-foreground font-light">
          <p>© {new Date().getFullYear()} ³Øryzon</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
