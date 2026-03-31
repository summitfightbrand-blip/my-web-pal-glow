import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandStory from "@/components/BrandStory";
import CollectionsGrid from "@/components/CollectionsGrid";
import BrandValues from "@/components/BrandValues";
import FeaturedBanner from "@/components/FeaturedBanner";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BrandStory />
      <CollectionsGrid />
      <BrandValues />
      <FeaturedBanner />
      <SiteFooter />
    </div>
  );
};

export default Index;
