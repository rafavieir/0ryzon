import { useState } from "react";
import { Server, Activity, Blocks, ArrowUp, ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
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

  const updateCarousel = (newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const validIndex = ((newIndex % services.length) + services.length) % services.length;
    setCurrentIndex(validIndex);
    
    setTimeout(() => setIsAnimating(false), 800);
  };

  const getCardClass = (index: number) => {
    const offset = ((index - currentIndex + services.length) % services.length);
    
    if (offset === 0) return "carousel-card-center";
    if (offset === 1) return "carousel-card-down-1";
    if (offset === services.length - 1) return "carousel-card-up-1";
    return "carousel-card-hidden";
  };

  return (
    <section id="services" className="py-32 border-t border-border overflow-hidden">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-3">
            {t('services.title')}
          </h2>
          <p className="text-base text-muted-foreground font-light max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Carousel Section */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className="relative h-[500px] w-full max-w-[450px] flex items-center justify-center" style={{ perspective: "1000px" }}>
              {/* Mobile Navigation Arrows */}
              <button
                onClick={() => updateCarousel(currentIndex - 1)}
                className="lg:hidden absolute top-0 left-1/2 -translate-x-1/2 z-30 w-12 h-12 flex items-center justify-center bg-transparent hover:opacity-70 transition-all group"
                aria-label="Previous service"
              >
                <ArrowUp className="w-6 h-6 text-primary stroke-[1.5] group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <button
                onClick={() => updateCarousel(currentIndex + 1)}
                className="lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 z-30 w-12 h-12 flex items-center justify-center bg-transparent hover:opacity-70 transition-all group"
                aria-label="Next service"
              >
                <ArrowDown className="w-6 h-6 text-primary stroke-[1.5] group-hover:translate-y-1 transition-transform" />
              </button>

              {/* Cards */}
              <div className="relative w-full h-full flex items-center justify-center">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className={`carousel-card ${getCardClass(index)}`}
                      onClick={() => updateCarousel(index)}
                    >
                      <div className="w-full h-full bg-card rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center text-center border border-border transition-all hover:shadow-2xl">
                        <Icon className="w-12 h-12 text-primary mb-4 stroke-[1.5]" />
                        <h3 className="text-xl font-light mb-2">{service.title}</h3>
                        <p className="text-muted-foreground font-light leading-relaxed text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Controls Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-8">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-row gap-4">
              <button
                onClick={() => updateCarousel(currentIndex - 1)}
                className="w-12 h-12 flex items-center justify-center bg-transparent hover:opacity-70 transition-all group"
                aria-label="Previous service"
              >
                <ArrowUp className="w-7 h-7 text-primary stroke-[1.5] group-hover:-translate-y-1 transition-transform" />
              </button>
              <button
                onClick={() => updateCarousel(currentIndex + 1)}
                className="w-12 h-12 flex items-center justify-center bg-transparent hover:opacity-70 transition-all group"
                aria-label="Next service"
              >
                <ArrowDown className="w-7 h-7 text-primary stroke-[1.5] group-hover:translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Service Info */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-light mb-2 text-foreground relative inline-block">
                {services[currentIndex].title}
              </h3>
              <p className="text-base text-muted-foreground font-light mt-3 max-w-md">
                {services[currentIndex].description}
              </p>
            </div>

            {/* Dots */}
            <div className="flex gap-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => updateCarousel(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-primary/20"
                  }`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .carousel-card {
          position: absolute;
          width: 380px;
          height: 260px;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
          transform-style: preserve-3d;
        }

        .carousel-card-center {
          z-index: 10;
          transform: scale(1.1) translateZ(0);
          opacity: 1;
        }

        .carousel-card-up-1 {
          z-index: 5;
          transform: translateY(-160px) scale(0.9) translateZ(-100px);
          opacity: 0.6;
          filter: grayscale(0.8);
        }

        .carousel-card-down-1 {
          z-index: 5;
          transform: translateY(160px) scale(0.9) translateZ(-100px);
          opacity: 0.6;
          filter: grayscale(0.8);
        }

        .carousel-card-hidden {
          opacity: 0;
          pointer-events: none;
          transform: scale(0.7);
        }

        @media (max-width: 1024px) {
          .carousel-card {
            width: 320px;
            height: 220px;
          }

          .carousel-card-up-1 {
            transform: translateY(-110px) scale(0.85) translateZ(-100px);
          }

          .carousel-card-down-1 {
            transform: translateY(110px) scale(0.85) translateZ(-100px);
          }
        }

        @media (max-width: 640px) {
          .carousel-card {
            width: 280px;
            height: 200px;
          }

          .carousel-card-up-1 {
            transform: translateY(-90px) scale(0.8) translateZ(-100px);
          }

          .carousel-card-down-1 {
            transform: translateY(90px) scale(0.8) translateZ(-100px);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
