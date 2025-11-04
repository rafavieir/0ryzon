import { useLanguage } from "@/contexts/LanguageContext";

const networks = [
  "Akash Network",
  "Peaq",
  "Meson Network",
  "Storj",
  "Mysterium",
  "DIMO",
  "Grass",
  "DePIN Alliance"
];

const Networks = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-light mb-3">
            {t('networks.title')}
          </h2>
          <p className="text-base text-muted-foreground font-light max-w-2xl">
            {t('networks.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px border-t border-l border-border">
          {networks.map((network, index) => (
            <div 
              key={index}
              className="p-6 border-r border-b border-border bg-background hover:bg-muted/30 transition-all text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-foreground font-light text-sm group-hover:scale-105 transition-transform inline-block">{network}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-mono font-light text-xs">
            {t('networks.more')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Networks;
