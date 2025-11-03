import { useLanguage } from "@/contexts/LanguageContext";

const Differentials = () => {
  const { t } = useLanguage();
  
  const differentials = [
    {
      title: t('differentials.items.0.title'),
      description: t('differentials.items.0.description')
    },
    {
      title: t('differentials.items.1.title'),
      description: t('differentials.items.1.description')
    },
    {
      title: t('differentials.items.2.title'),
      description: t('differentials.items.2.description')
    },
    {
      title: t('differentials.items.3.title'),
      description: t('differentials.items.3.description')
    },
    {
      title: t('differentials.items.4.title'),
      description: t('differentials.items.4.description')
    }
  ];

  return (
    <section className="py-32 border-t border-border">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-6xl">
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-light mb-4">
            {t('differentials.title')}
          </h2>
        </div>

        <div className="space-y-12">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="border-t border-border pt-8"
            >
              <h3 className="text-2xl font-light mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-lg max-w-3xl">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
