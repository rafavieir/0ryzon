import { useLanguage } from "@/contexts/LanguageContext";

const Vision = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-32 border-t border-border">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Vision */}
          <div>
            <h3 className="text-3xl font-light mb-6">{t('vision.visionTitle')}</h3>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              {t('vision.visionText')}
            </p>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-3xl font-light mb-6">{t('vision.missionTitle')}</h3>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              {t('vision.missionText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
