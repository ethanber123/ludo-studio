import { GalleryShowcaseSection } from "@/components/GalleryShowcaseSection";
import { HomeHeroSection } from "@/components/HomeHeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import Testimonials from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-3 sm:p-4 lg:p-5">
      <HomeHeroSection />

      <GalleryShowcaseSection />

      <HowItWorksSection />

      <PricingSection />

      <Testimonials />

      <Footer />
    </main>
  );
}
