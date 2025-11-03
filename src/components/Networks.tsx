import { Badge } from "@/components/ui/badge";

const networks = [
  "Akash Network",
  "Peaq",
  "Meson Network",
  "Storj",
  "Mysterium",
  "DIMO",
  "Grass",
  "DePIN Alliance"
];

const Networks = () => {
  return (
    <section className="py-32 border-t border-border">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-6xl">
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-light mb-4">
            Redes & Ecossistemas
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl">
            Atuamos e colaboramos com projetos líderes em DePIN e Web3
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px border-t border-l border-border">
          {networks.map((network, index) => (
            <div 
              key={index}
              className="p-8 border-r border-b border-border bg-background hover:bg-muted/30 transition-colors text-center"
            >
              <span className="text-foreground font-light">{network}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground font-light italic">
            + Diversas outras redes PoS e DePIN em expansão
          </p>
        </div>
      </div>
    </section>
  );
};

export default Networks;
