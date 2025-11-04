import { useState } from "react";
import { Server, Activity, Blocks, ChevronUp, ChevronDown } from "lucide-react";
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
        <div className="mb-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-light mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
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
                className="lg:hidden absolute top-4 left-1/2 -translate-x-1/2 z-30 w-14 h-14 flex items-center justify-center bg-transparent hover:scale-110 transition-transform"
                aria-label="Previous service"
              >
                <ChevronUp className="w-10 h-10 text-primary" />
              </button>
              
              <button
                onClick={() => updateCarousel(currentIndex + 1)}
                className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-30 w-14 h-14 flex items-center justify-center bg-transparent hover:scale-110 transition-transform"
                aria-label="Next service"
              >
                <ChevronDown className="w-10 h-10 text-primary" />
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
                      <div className="w-full h-full bg-card rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-center border border-border">
                        <Icon className="w-16 h-16 text-primary mb-6" />
                        <h3 className="text-2xl font-light mb-3">{service.title}</h3>
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
            <div className="hidden lg:flex flex-row gap-6">
              <button
                onClick={() => updateCarousel(currentIndex - 1)}
                className="w-16 h-16 flex items-center justify-center bg-transparent hover:scale-110 transition-transform"
                aria-label="Previous service"
              >
                <ChevronUp className="w-12 h-12 text-primary" />
              </button>
              <button
                onClick={() => updateCarousel(currentIndex + 1)}
                className="w-16 h-16 flex items-center justify-center bg-transparent hover:scale-110 transition-transform"
                aria-label="Next service"
              >
                <ChevronDown className="w-12 h-12 text-primary" />
              </button>
            </div>

            {/* Member Info */}
            <div className="text-center lg:text-left">
              <h3 className="text-3xl sm:text-4xl font-light mb-2 text-foreground relative inline-block">
                {services[currentIndex].title}
              </h3>
              <p className="text-lg text-muted-foreground font-light mt-4 max-w-md">
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
          width: 400px;
          height: 280px;
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
            width: 340px;
            height: 240px;
          }

          .carousel-card-up-1 {
            transform: translateY(-120px) scale(0.85) translateZ(-100px);
          }

          .carousel-card-down-1 {
            transform: translateY(120px) scale(0.85) translateZ(-100px);
          }
        }

        @media (max-width: 640px) {
          .carousel-card {
            width: 300px;
            height: 220px;
          }

          .carousel-card-up-1 {
            transform: translateY(-100px) scale(0.8) translateZ(-100px);
          }

          .carousel-card-down-1 {
            transform: translateY(100px) scale(0.8) translateZ(-100px);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
