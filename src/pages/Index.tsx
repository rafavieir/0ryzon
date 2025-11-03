import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import Networks from "@/components/Networks";
import WorldMap from "@/components/WorldMap";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";
import NetworkStatus from "@/components/NetworkStatus";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Differentials />
      <Networks />
      <WorldMap />
      <Vision />
      <Footer />
      <NetworkStatus />
    </div>
  );
};

export default Index;
