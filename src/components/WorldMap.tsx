import { useEffect, useState } from "react";

const WorldMap = () => {
  const [activePoints, setActivePoints] = useState<number[]>([]);

  // Datacenter locations (x, y coordinates in percentage)
  const datacenters = [
    { name: "North America - East", x: 25, y: 35, region: "US-East" },
    { name: "North America - West", x: 15, y: 38, region: "US-West" },
    { name: "South America", x: 32, y: 68, region: "BR" },
    { name: "Europe - West", x: 48, y: 32, region: "EU-West" },
    { name: "Europe - Central", x: 52, y: 30, region: "EU-Central" },
    { name: "Asia - East", x: 80, y: 38, region: "Asia-East" },
    { name: "Asia - Southeast", x: 78, y: 52, region: "Asia-SE" },
    { name: "Middle East", x: 58, y: 42, region: "ME" },
    { name: "Oceania", x: 85, y: 72, region: "AU" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * datacenters.length);
      setActivePoints(prev => {
        const newPoints = [...prev, randomIndex];
        return newPoints.slice(-3); // Keep only last 3
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-background border-y border-border">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-light text-foreground">
            Presença Global
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Infraestrutura distribuída em datacenters ao redor do mundo para máxima disponibilidade
          </p>
        </div>

        <div className="relative w-full aspect-[2/1] max-w-5xl mx-auto">
          {/* World Map SVG Background */}
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Simplified world map paths */}
            <path
              d="M 150,150 L 200,140 L 250,160 L 280,150 L 300,170 L 280,200 L 250,210 L 200,200 Z"
              fill="currentColor"
              className="text-primary"
            />
            <path
              d="M 320,180 L 380,170 L 420,190 L 450,180 L 480,200 L 460,240 L 420,250 L 380,240 Z"
              fill="currentColor"
              className="text-primary"
            />
            <path
              d="M 700,180 L 760,170 L 800,190 L 820,200 L 800,240 L 760,250 L 720,240 Z"
              fill="currentColor"
              className="text-primary"
            />
            <path
              d="M 280,300 L 320,290 L 340,310 L 320,340 L 280,350 Z"
              fill="currentColor"
              className="text-primary"
            />
            <path
              d="M 820,350 L 860,340 L 880,360 L 860,380 L 820,390 Z"
              fill="currentColor"
              className="text-primary"
            />
          </svg>

          {/* Grid overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
                               linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Datacenter points */}
          {datacenters.map((dc, index) => {
            const isActive = activePoints.includes(index);
            return (
              <div
                key={index}
                className="absolute group"
                style={{
                  left: `${dc.x}%`,
                  top: `${dc.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {/* Pulse effect */}
                {isActive && (
                  <div className="absolute inset-0 w-4 h-4 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  </div>
                )}
                
                {/* Point */}
                <div 
                  className={`w-3 h-3 rounded-full border-2 border-primary transition-all duration-300 ${
                    isActive ? 'bg-primary scale-150 shadow-[0_0_20px_hsl(var(--primary))]' : 'bg-background'
                  }`}
                />
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-background border border-border rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  <p className="text-xs font-light text-foreground">{dc.name}</p>
                  <p className="text-xs text-muted-foreground">{dc.region}</p>
                </div>

                {/* Connection lines */}
                {isActive && datacenters.slice(0, 2).map((target, targetIndex) => {
                  if (targetIndex === index) return null;
                  return (
                    <svg
                      key={targetIndex}
                      className="absolute top-0 left-0 pointer-events-none overflow-visible"
                      style={{
                        width: `${Math.abs(target.x - dc.x) * 10}px`,
                        height: `${Math.abs(target.y - dc.y) * 10}px`,
                        transform: `translate(${target.x > dc.x ? '0' : `${(dc.x - target.x) * -10}px`}, ${target.y > dc.y ? '0' : `${(dc.y - target.y) * -10}px`})`
                      }}
                    >
                      <line
                        x1="0"
                        y1="0"
                        x2={Math.abs(target.x - dc.x) * 10}
                        y2={Math.abs(target.y - dc.y) * 10}
                        stroke="hsl(var(--primary))"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        opacity="0.3"
                        className="animate-pulse"
                      />
                    </svg>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <div className="text-3xl font-light text-foreground">9+</div>
            <div className="text-sm text-muted-foreground font-light">Datacenters</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-light text-foreground">5</div>
            <div className="text-sm text-muted-foreground font-light">Continentes</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-light text-foreground">99.9%</div>
            <div className="text-sm text-muted-foreground font-light">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
