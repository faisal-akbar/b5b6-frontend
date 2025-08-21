import FeaturesBenefit from "@/components/modules/features/FeaturesBenefit";
import FeaturesCTA from "@/components/modules/features/FeaturesCTA";
import FeaturesGrid from "@/components/modules/features/FeaturesGrid";
import FeaturesHero from "@/components/modules/features/FeaturesHero";

export default function Features() {
  return (
    <div className="min-h-screen bg-background">
      <FeaturesHero />
      <FeaturesGrid />
      <FeaturesBenefit />
      <FeaturesCTA />
    </div>
  );
}
