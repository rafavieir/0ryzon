import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Networks from "@/components/Networks";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";
import NetworkStatus from "@/components/NetworkStatus";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Networks />
      <Vision />
      <Footer />
      <NetworkStatus />
    </div>
  );
};

export default Index;
