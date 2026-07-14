import { useMemo } from "react";
import { Database, Zap, Network, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Database, Zap, Network, Sparkles];
const nodeDelays = ["0.3s", "2.2s", "4.1s", "6s"];

const HEX_R = 44;
const HEX_W = Math.sqrt(3) * HEX_R;
const HEX_TILE_H = HEX_R * 3;

function hexPoints(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 180) * (60 * i - 90);
    return `${(cx + r * Math.cos(angle)).toFixed(2)},${(cy + r * Math.sin(angle)).toFixed(2)}`;
  }).join(" ");
}

const hexTileHexagons = [
  hexPoints(HEX_W / 2, HEX_R, HEX_R),
  hexPoints(0, HEX_R * 2.5, HEX_R),
  hexPoints(HEX_W, HEX_R * 2.5, HEX_R),
  hexPoints(0, HEX_R * 2.5 - HEX_TILE_H, HEX_R),
  hexPoints(HEX_W, HEX_R * 2.5 - HEX_TILE_H, HEX_R),
];

// Random spots on the grid above: a small light flows across a couple of
// edges, then spreads and lights up a little cluster of neighbouring
// hexagons at once, before fading and repeating elsewhere.
const GLINT_COUNT = 7;

const HEX_NEIGHBOR_OFFSETS = [
  { dx: HEX_W, dy: 0 },
  { dx: -HEX_W, dy: 0 },
  { dx: HEX_W / 2, dy: -HEX_R * 1.5 },
  { dx: -HEX_W / 2, dy: -HEX_R * 1.5 },
  { dx: HEX_W / 2, dy: HEX_R * 1.5 },
  { dx: -HEX_W / 2, dy: HEX_R * 1.5 },
];

function hexOutlineD(cx: number, cy: number) {
  return `M${hexPoints(cx, cy, HEX_R).replace(/ /g, " L")} Z`;
}

function randomHexCluster(index: number) {
  const col = Math.floor(Math.random() * 20);
  const row = Math.floor(Math.random() * 8);
  const family = Math.random() < 0.5 ? "A" : "B";
  const cx0 = family === "A" ? HEX_W * (col + 0.5) : HEX_W * col;
  const cy0 = family === "A" ? HEX_R * (1 + 3 * row) : HEX_R * (2.5 + 3 * row);

  const dirs = [0, 1, 2, 3, 4, 5].sort(() => Math.random() - 0.5).slice(0, 2);
  const neighborCenters = dirs.map((d) => ({
    cx: cx0 + HEX_NEIGHBOR_OFFSETS[d].dx,
    cy: cy0 + HEX_NEIGHBOR_OFFSETS[d].dy,
  }));

  const startEdge = Math.floor(Math.random() * 6);
  const pts = hexPoints(cx0, cy0, HEX_R)
    .split(" ")
    .map((p) => p.split(",").map(Number));
  const v0 = pts[startEdge];
  const v1 = pts[(startEdge + 1) % 6];
  const v2 = pts[(startEdge + 2) % 6];

  const cycleDur = 7 + Math.random() * 4;
  const flowDur = 1.1 + Math.random() * 0.7;
  const burstDur = 1.3 + Math.random() * 0.7;
  const delay = Math.random() * 6;

  const flowStartFrac = 0.04;
  const flowEndFrac = flowStartFrac + flowDur / cycleDur;
  const burstFadeInFrac = Math.min(flowEndFrac + 0.02, 0.97);
  const burstEndFrac = Math.min(burstFadeInFrac + burstDur / cycleDur, 0.98);
  const burstFadeOutFrac = Math.min(burstEndFrac + 0.02, 0.99);

  return {
    id: `cluster-${index}`,
    flowD: `M${v0[0]},${v0[1]} L${v1[0]},${v1[1]} L${v2[0]},${v2[1]}`,
    flowLen: HEX_R * 2,
    burstDs: [hexOutlineD(cx0, cy0), ...neighborCenters.map((n) => hexOutlineD(n.cx, n.cy))],
    cycleDur: cycleDur.toFixed(2),
    delay: delay.toFixed(2),
    flowStartFrac,
    flowEndFrac,
    burstFadeInFrac,
    burstEndFrac,
    burstFadeOutFrac,
  };
}

const Hero = () => {
  const { t } = useLanguage();
  const capabilities = t("hero.capabilities") as unknown as string[];
  const glints = useMemo(
    () => Array.from({ length: GLINT_COUNT }, (_, i) => randomHexCluster(i)),
    []
  );

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-16 bg-background border-b border-border overflow-hidden"
    >
      {/* Hexagon grid background */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" aria-hidden="true">
          <defs>
            <pattern id="hexGrid" width={HEX_W} height={HEX_TILE_H} patternUnits="userSpaceOnUse">
              {hexTileHexagons.map((points, i) => (
                <polygon key={i} points={points} fill="none" stroke="hsl(var(--foreground))" strokeWidth="1" />
              ))}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexGrid)" />
        </svg>
      </div>

      {/* Random spots on the grid above - light flows a little, then spreads and lights up neighbouring hexagons */}
      <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <filter id="connectionGlowBlur" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>
        {glints.map((g) => (
          <g key={g.id}>
            {/* base colour - the "metal" itself */}
            <path
              d={g.flowD}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${g.flowLen} ${g.flowLen}`}
              filter="url(#connectionGlowBlur)"
              opacity="0"
            >
              <animate
                attributeName="opacity"
                values="0;0;1;1;0;0"
                keyTimes={`0;${g.flowStartFrac};${Math.min(g.flowStartFrac + 0.01, 0.99)};${g.flowEndFrac};${Math.min(g.flowEndFrac + 0.01, 0.99)};1`}
                dur={`${g.cycleDur}s`}
                begin={`${g.delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-dashoffset"
                values={`0;0;${-g.flowLen};${-g.flowLen}`}
                keyTimes={`0;${g.flowStartFrac};${g.flowEndFrac};1`}
                dur={`${g.cycleDur}s`}
                begin={`${g.delay}s`}
                repeatCount="indefinite"
              />
            </path>
            {/* specular highlight - the reflection catching the light as it travels */}
            <path
              d={g.flowD}
              fill="none"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeDasharray={`${g.flowLen * 0.35} ${g.flowLen * 1.65}`}
              opacity="0"
            >
              <animate
                attributeName="opacity"
                values="0;0;0.9;0.9;0;0"
                keyTimes={`0;${g.flowStartFrac};${Math.min(g.flowStartFrac + 0.01, 0.99)};${g.flowEndFrac};${Math.min(g.flowEndFrac + 0.01, 0.99)};1`}
                dur={`${g.cycleDur}s`}
                begin={`${g.delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-dashoffset"
                values={`0;0;${-g.flowLen};${-g.flowLen}`}
                keyTimes={`0;${g.flowStartFrac};${g.flowEndFrac};1`}
                dur={`${g.cycleDur}s`}
                begin={`${g.delay}s`}
                repeatCount="indefinite"
              />
            </path>

            {g.burstDs.map((d, bi) => {
              const peakFrac = (Number(g.burstFadeInFrac) + Number(g.burstEndFrac)) / 2;
              const glintStart = Math.max(peakFrac - 0.015, g.burstFadeInFrac);
              const glintEnd = Math.min(peakFrac + 0.015, g.burstEndFrac);
              return (
                <g key={bi}>
                  {/* base colour - the "metal" itself */}
                  <path
                    d={d}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2.5"
                    filter="url(#connectionGlowBlur)"
                    opacity="0"
                  >
                    <animate
                      attributeName="opacity"
                      values="0;0;0.7;0.7;0;0"
                      keyTimes={`0;${g.flowEndFrac};${g.burstFadeInFrac};${g.burstEndFrac};${g.burstFadeOutFrac};1`}
                      dur={`${g.cycleDur}s`}
                      begin={`${g.delay}s`}
                      repeatCount="indefinite"
                    />
                  </path>
                  {/* specular highlight - a brief bright glint, like light catching metal */}
                  <path d={d} fill="none" stroke="white" strokeWidth="1.4" opacity="0">
                    <animate
                      attributeName="opacity"
                      values="0;0;0.95;0;0"
                      keyTimes={`0;${glintStart};${peakFrac};${glintEnd};1`}
                      dur={`${g.cycleDur}s`}
                      begin={`${g.delay}s`}
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              );
            })}
          </g>
        ))}
      </svg>

      <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-6xl relative z-10">
        <div className="space-y-8 max-w-3xl">
          <span className="block text-xs sm:text-sm text-primary tracking-[0.2em] uppercase animate-fade-in">
            {t("hero.kicker")}
          </span>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            {t("hero.title")}
          </h1>

          <p
            className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {t("hero.subtitle")}
          </p>

          <div
            className="pt-2 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button size="lg" className="w-full sm:w-auto">
              {t("hero.ctaPrimary")}
            </Button>
          </div>

          {/* Flow: Dados -> Automação -> Sistemas -> Inteligência aplicada */}
          <div
            className="hero-flow relative pt-12 pb-2 max-w-xl animate-fade-in"
            style={{ animationDelay: "0.45s" }}
          >
            <div className="relative flex items-start justify-between">
              <div className="absolute left-0 right-0 top-6 h-px bg-border" />
              <div className="flow-glow absolute top-6 -translate-y-1/2 h-6 w-6 rounded-full bg-primary/60 blur-md" />

              <span className="twinkle" style={{ left: "18%", top: "-14px", animationDelay: "0.6s" }} />
              <span className="twinkle" style={{ left: "45%", top: "26px", animationDelay: "1.8s" }} />
              <span className="twinkle" style={{ left: "70%", top: "-10px", animationDelay: "3.2s" }} />
              <span className="twinkle" style={{ left: "92%", top: "20px", animationDelay: "4.6s" }} />

              {capabilities.map((label, index) => {
                const Icon = icons[index];
                return (
                  <div key={label} className="relative z-10 flex flex-1 flex-col items-center gap-3">
                    <div
                      className="icon-node relative w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center overflow-hidden"
                      style={{ animationDelay: nodeDelays[index] }}
                    >
                      <Icon className="w-5 h-5 text-primary relative z-10" strokeWidth={1.6} />
                      <span className="icon-shine" style={{ animationDelay: nodeDelays[index] }} />
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground text-center leading-tight">
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .flow-glow {
          left: 12.5%;
          animation: flowGlow 10s ease-in-out infinite;
        }

        @keyframes flowGlow {
          0%   { left: 12.5%; opacity: 0; }
          3%   { opacity: 1; }
          10%  { left: 12.5%; opacity: 1; }
          22%  { left: 37.5%; opacity: 1; }
          29%  { left: 37.5%; opacity: 1; }
          41%  { left: 62.5%; opacity: 1; }
          48%  { left: 62.5%; opacity: 1; }
          60%  { left: 87.5%; opacity: 1; }
          67%  { left: 87.5%; opacity: 1; }
          75%  { left: 87.5%; opacity: 0; }
          100% { left: 87.5%; opacity: 0; }
        }

        .icon-node {
          animation: nodeGlow 10s ease-in-out infinite;
        }

        @keyframes nodeGlow {
          0%, 100% { border-color: hsl(var(--border)); box-shadow: none; }
          4%  { border-color: hsl(var(--primary)); box-shadow: 0 0 14px hsl(var(--primary) / 0.55); }
          8%  { border-color: hsl(var(--border)); box-shadow: none; }
        }

        .icon-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(115deg, transparent 40%, hsl(var(--primary) / 0.45) 50%, transparent 60%);
          transform: translateX(-150%);
          opacity: 0;
          animation: shineSweep 10s ease-in-out infinite;
        }

        @keyframes shineSweep {
          0%   { transform: translateX(-150%); opacity: 0; }
          4%   { opacity: 1; }
          8%   { transform: translateX(150%); opacity: 0; }
          100% { transform: translateX(150%); opacity: 0; }
        }

        .twinkle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 9999px;
          background: hsl(var(--primary));
          animation: twinkle 3.6s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.6); }
          50% { opacity: 0.85; transform: scale(1.4); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
