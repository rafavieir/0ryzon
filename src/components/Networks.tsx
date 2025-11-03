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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Redes & Ecossistemas
            </h2>
            <p className="text-lg text-muted-foreground">
              Atuamos e colaboramos com projetos líderes em DePIN e Web3
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {networks.map((network, index) => (
              <Badge 
                key={index} 
                variant="outline"
                className="px-6 py-3 text-base font-medium hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-default"
              >
                {network}
              </Badge>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground italic">
              + Diversas outras redes PoS e DePIN em expansão
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Networks;
