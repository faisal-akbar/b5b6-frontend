import FaqContact from "@/components/modules/faq/FaqContact";
import FaqHero from "@/components/modules/faq/FaqHero";
import FaqSection from "@/components/modules/faq/FaqSection";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <FaqHero />
      <FaqSection />
      <FaqContact />
    </div>
  );
}
