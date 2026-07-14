import { Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-6xl py-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-16">
          <div className="space-y-4">
            <span className="text-xl tracking-wider text-foreground font-light">³Øryzon</span>
            <p className="text-muted-foreground font-light leading-relaxed text-sm max-w-sm">
              {t('footer.brand')}
            </p>
          </div>

          <Button variant="outline">{t('footer.contact')}</Button>
        </div>

        <div className="pt-8 border-t border-border flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-light">
          <p>© {new Date().getFullYear()} ³Øryzon</p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary/60 hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" strokeWidth={1.6} />
            </button>
            <button
              type="button"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary/60 hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
