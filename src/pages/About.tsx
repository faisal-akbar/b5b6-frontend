import AboutFeatures from "@/components/modules/about/AboutFeatures";
import AboutHero from "@/components/modules/about/AboutHero";
import AboutJourney from "@/components/modules/about/AboutJourney";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <AboutHero />
      <AboutFeatures />
      <AboutJourney />
    </div>
  );
}
