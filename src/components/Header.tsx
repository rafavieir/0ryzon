import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-7xl h-16 flex items-center justify-between">
        <a href="#top" className="logo-shine text-lg tracking-wider font-light">
          ³Øryzon
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="default" size="sm" className="hidden sm:inline-flex">
            {t("header.cta")}
          </Button>
          <ThemeToggle />
          <LanguageSelector />
        </div>
      </div>

      <style>{`
        .logo-shine {
          background-image: linear-gradient(
            100deg,
            hsl(var(--foreground)) 40%,
            hsl(var(--primary)) 50%,
            hsl(var(--foreground)) 60%
          );
          background-size: 300% 100%;
          background-position: -100% 0;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          animation: logoShine 8s ease-in-out infinite;
        }

        @keyframes logoShine {
          0%   { background-position: -100% 0; }
          10%  { background-position: 200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </header>
  );
};

export default Header;
