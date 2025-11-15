import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Client = {
  id: string;
  name: string;
  tag: string;
};

const clients: Client[] = [
  {
    id: "opus",
    name: "Opus Construtora",
    tag: "Construção & Reformas",
  },
  {
    id: "mordelicia",
    name: "Mordelicia",
    tag: "Food & Delivery",
  },
];

const Networks = () => {
  const { t } = useLanguage();
  const [activeClientId, setActiveClientId] = useState<string>("opus");

  const getStoryData = (id: string) => {
    const items = t("clients.items") as any[];
    if (!Array.isArray(items)) return null;

    if (id === "opus") return items[0];
    if (id === "mordelicia") return items[1];

    return items[0];
  };

  const story = getStoryData(activeClientId);

  return (
    <section className="py-24 border-t border-border" id="networks">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-6xl">
        {/* título */}
        <div className="mb-10 flex flex-col gap-3">
          <h2 className="text-3xl sm:text-4xl font-light">{t("clients.title")}</h2>
          <p className="text-base text-muted-foreground font-light max-w-2xl">
            {t("clients.subtitle")}
          </p>
        </div>

        {/* layout geral */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.6fr)] items-start">
          {/* lista de clientes */}
          <div className="flex flex-col gap-3">
            {clients.map((client) => {
              const active = client.id === activeClientId;

              return (
                <button
                  key={client.id}
                  onClick={() => setActiveClientId(client.id)}
                  className={`
                    w-full text-left rounded-2xl border px-5 py-5 transition-all duration-200
                    flex items-center justify-between
                    ${
                      active
                        ? "border-primary/70 bg-primary/5 shadow-sm"
                        : "border-border bg-background/60 hover:bg-muted/40 hover:border-foreground/30"
                    }
                  `}
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">
                      {client.name}
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">
                      {client.tag}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] uppercase tracking-[0.16em] ${
                      active ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {active ? t("clients.activeLabel") : t("clients.viewStory")}
                  </span>
                </button>
              );
            })}
          </div>

          {/* storytelling */}
          <div className="rounded-2xl border border-border bg-card/60 shadow-sm p-6 sm:p-8 lg:p-9">
            <p className="uppercase tracking-[0.18em] text-[11px] text-primary/80 mb-2">
              {t("clients.storyLabel")}
            </p>

            <h3 className="text-2xl sm:text-3xl font-light text-foreground mb-4">
              {story?.title}
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
              <p>{story?.context}</p>
              <p>{story?.howWeHelp}</p>
            </div>

            <div className="mt-6 rounded-xl bg-muted/40 border border-border/70 px-4 py-4">
              <p className="text-xs sm:text-sm text-muted-foreground">
                {story?.highlight}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-light text-xs italic">
            {t("clients.more")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Networks;
