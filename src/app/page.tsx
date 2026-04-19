import { AboutCardsSection } from "@/components/AboutCardsSection";
import { CategoryExperience } from "@/components/CategoryExperience";
import { CustomerExperiencesSection } from "@/components/CustomerExperiencesSection";
import { HeroSlider } from "@/components/HeroSlider";
import { CtaReadySection } from "@/components/CtaReadySection";
import { FaqBannerSection } from "@/components/FaqBannerSection";
import { LatestInsightsSection } from "@/components/LatestInsightsSection";
import { ProductCatalogSection } from "@/components/ProductCatalogSection";
import { SmartTvFeatureSection } from "@/components/SmartTvFeatureSection";

export default function Home() {
  return (
    <div className="bg-white dark:bg-zinc-950">
      <HeroSlider />
      <CategoryExperience />
      <ProductCatalogSection />
      <SmartTvFeatureSection />
      <AboutCardsSection />
      <CustomerExperiencesSection />
      <FaqBannerSection />
      <LatestInsightsSection />
      <CtaReadySection />
    </div>
  );
}
