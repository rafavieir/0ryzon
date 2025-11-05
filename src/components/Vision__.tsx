import { useLanguage } from "@/contexts/LanguageContext";

const Vision = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Vision */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-light mb-4">{t('vision.visionTitle')}</h3>
            <p className="text-muted-foreground font-light leading-relaxed text-base">
              {t('vision.visionText')}
            </p>
          </div>

          {/* Mission */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-light mb-4">{t('vision.missionTitle')}</h3>
            <p className="text-muted-foreground font-light leading-relaxed text-base">
              {t('vision.missionText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
