import { useState } from "react";
import { Server, Activity, Blocks, ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const services = [
    {
      icon: Server,
      title: t("services.items.0.title"),
      description: t("services.items.0.description"),
    },
    {
      icon: Blocks,
      title: t("services.items.1.title"),
      description: t("services.items.1.description"),
    },
    {
      icon: Activity,
      title: t("services.items.2.title"),
      description: t("services.items.2.description"),
    },
  ];

  const updateCarousel = (newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const validIndex =
      ((newIndex % services.length) + services.length) % services.length;
    setCurrentIndex(validIndex);

    setTimeout(() => setIsAnimating(false), 400);
  };

  return (
    <section
      id="services"
      className="py-24 sm:py-28 border-t border-border bg-background"
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-7xl">
        {/* Título */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-3 tracking-tight">
            {t("services.title")}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Carousel Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Card atual */}
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = index === currentIndex;

                return (
                  <div
                    key={index}
                    className={`
                      absolute inset-0
                      transition-all duration-500 ease-out
                      ${isActive
                        ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
                        : "opacity-0 translate-x-4 scale-95 pointer-events-none"}
                    `}
                  >
                    <div className="bg-card border border-border rounded-2xl shadow-lg px-6 py-8 sm:px-8 sm:py-10 flex flex-col items-center text-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                        <Icon className="w-8 h-8 text-primary stroke-[1.6]" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-light mb-3 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Navegação lateral */}
              <button
                onClick={() => updateCarousel(currentIndex - 1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 sm:-translate-x-3 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/90 border border-border flex items-center justify-center shadow-sm hover:bg-primary/10 hover:border-primary/60 transition-all"
                aria-label="Previous service"
              >
                <ArrowLeft className="w-5 h-5 text-primary stroke-[1.8]" />
              </button>
              <button
                onClick={() => updateCarousel(currentIndex + 1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 sm:translate-x-3 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/90 border border-border flex items-center justify-center shadow-sm hover:bg-primary/10 hover:border-primary/60 transition-all"
                aria-label="Next service"
              >
                <ArrowRight className="w-5 h-5 text-primary stroke-[1.8]" />
              </button>

              {/* Espaço para o card (para não colapsar o layout) */}
              <div className="invisible">
                <div className="bg-card border border-border rounded-2xl px-6 py-8 sm:px-8 sm:py-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-5" />
                  <h3 className="text-xl sm:text-2xl mb-3">placeholder</h3>
                  <p className="text-sm sm:text-base">placeholder</p>
                </div>
              </div>
            </div>
          </div>

          {/* Texto lateral + dots */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6">
            <div className="text-center lg:text-left">
              <p className="uppercase tracking-[0.18em] text-xs text-primary/80 mb-2">
                {t("services.title")}
              </p>
              <h3 className="text-2xl sm:text-3xl font-light mb-3 text-foreground">
                {services[currentIndex].title}
              </h3>
              <p className="text-base text-muted-foreground font-light max-w-md">
                {services[currentIndex].description}
              </p>
            </div>

            {/* Dots */}
            <div className="flex gap-3 mt-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => updateCarousel(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
