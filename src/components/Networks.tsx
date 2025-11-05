import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { Switch } from "@/components/ui/switch"; // do shadcn/ui (ou troca por teu toggle preferido)
import { Label } from "@/components/ui/label";

const mainnets = [
  {
    name: "Akash Network",
    logo: "https://raw.githubusercontent.com/ovrclk/docs/master/static/img/akash-logo.svg",
    href: "https://gitbook-oryzon/akash",
  },
  {
    name: "Peaq",
    logo: "https://peaq.network/peaq-logo.svg",
    href: "https://gitbook-oryzon/peaq",
  },
  {
    name: "Meson Network",
    logo: "https://cdn.meson.network/brand/logo.svg",
    href: "https://gitbook-oryzon/meson",
  },
  {
    name: "Storj",
    logo: "https://www.storj.io/hubfs/raw_assets/public/storj-website/images/logos/storj-logo.svg",
    href: "https://gitbook-oryzon/storj",
  },
  {
    name: "Mysterium",
    logo: "https://mysterium.network/wp-content/uploads/2023/03/mysterium-logo.svg",
    href: "https://gitbook-oryzon/mysterium",
  },
  {
    name: "DIMO",
    logo: "https://dimo.zone/_next/static/media/dimo-logo.42ad7b4f.svg",
    href: "https://gitbook-oryzon/dimo",
  },
  {
    name: "Grass",
    logo: "https://www.getgrass.io/_next/image?url=%2Fgrass-logo.png&w=256&q=75",
    href: "https://gitbook-oryzon/grass",
  },
  {
    name: "DePIN Alliance",
    logo: "https://depinalliance.org/wp-content/uploads/2023/11/depin-alliance-logo.svg",
    href: "https://gitbook-oryzon/depin",
  },
];

const testnets = [
  {
    name: "Nym Testnet",
    logo: "https://nymtech.net/_next/image?url=%2Fnym-logo.svg&w=128&q=75",
    href: "https://gitbook-oryzon/nym-testnet",
  },
  {
    name: "Nosana Testnet",
    logo: "https://docs.nosana.io/img/nosana-logo.svg",
    href: "https://gitbook-oryzon/nosana-testnet",
  },
  {
    name: "Subspace Gemini",
    logo: "https://subspace.network/assets/img/subspace_logo_dark.svg",
    href: "https://gitbook-oryzon/subspace-gemini",
  },
  {
    name: "Peaq Testnet (krest)",
    logo: "https://peaq.network/peaq-logo.svg",
    href: "https://gitbook-oryzon/peaq-testnet",
  },
];

const Networks = () => {
  const { t } = useLanguage();
  const [showTestnets, setShowTestnets] = useState(false);

  const networks = showTestnets ? testnets : mainnets;

  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-6xl">
        {/* título e subtítulo */}
        <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-light mb-2">
              {t("networks.title")}
            </h2>
            <p className="text-base text-muted-foreground font-light max-w-2xl">
              {t("networks.subtitle")}
            </p>
          </div>

          {/* toggle mainnet / testnet */}
          <div className="flex items-center gap-2 mt-6 sm:mt-0">
            <Label htmlFor="testnet-mode" className="text-sm text-muted-foreground">
              {showTestnets ? "Testnets" : "Mainnets"}
            </Label>
            <Switch
              id="testnet-mode"
              checked={showTestnets}
              onCheckedChange={setShowTestnets}
            />
          </div>
        </div>

        {/* grade de logos */}
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0">
            {networks.map((network, index) => (
              <a
                key={network.name}
                href={network.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group flex flex-col items-center justify-center
                  min-w-[120px] md:min-w-0
                  rounded-xl border border-border bg-background/80
                  hover:bg-muted/40 hover:border-foreground/40
                  transition-all duration-200
                  shadow-sm hover:shadow-md
                  px-4 py-6
                  animate-fade-in
                "
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative w-12 h-12 mb-3">
                  <Image
                    src={network.logo}
                    alt={network.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <span className="text-foreground font-light text-xs text-center leading-snug group-hover:text-foreground">
                  {network.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-light text-xs italic">
            {t("networks.more")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Networks;
