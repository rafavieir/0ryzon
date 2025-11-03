import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import Networks from "@/components/Networks";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Differentials />
      <Networks />
      <Vision />
      <Footer />
    </div>
  );
};

export default Index;
