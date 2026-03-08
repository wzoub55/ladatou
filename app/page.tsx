import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ConceptSection from "@/components/ConceptSection";
import CategoriesSection from "@/components/CategoriesSection";
import MagasinSection from "@/components/MagasinSection";
import InfosSection from "@/components/InfosSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function LadatouLandingPage() {
  return (
    <main className="min-h-screen bg-[#FEF3C7] text-[#4C1D95] selection:bg-[#7C3AED] selection:text-white">
      <Header />
      <HeroSection />
      <ConceptSection />
      <CategoriesSection />
      <MagasinSection />
      <InfosSection />
      <SocialSection />
      <Footer />
      <MobileCTA />
    </main>
  );
}
