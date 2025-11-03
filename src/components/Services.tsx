import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Server, Activity, FileCheck, Users, TestTube, Blocks } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Server,
      title: t('services.items.0.title'),
      description: t('services.items.0.description')
    },
    {
      icon: Blocks,
      title: t('services.items.1.title'),
      description: t('services.items.1.description')
    },
    {
      icon: Activity,
      title: t('services.items.2.title'),
      description: t('services.items.2.description')
    }
  ];

  return (
    <section id="services" className="py-32 border-t border-border">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-6xl">
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-light mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px border-t border-l border-border">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="p-10 border-r border-b border-border bg-background hover:bg-muted/30 transition-colors"
              >
                <Icon className="w-8 h-8 text-foreground mb-6" />
                <h3 className="text-xl font-light mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
