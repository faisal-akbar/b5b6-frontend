import Feature from "@/components/modules/home/Feature";
import Hero from "@/components/modules/home/Hero";
import HomeAbout from "@/components/modules/home/HomeAbout";
import HomeCTA from "@/components/modules/home/HomeCTA";
import HomeFaq from "@/components/modules/home/HomeFaq";
import HomeTestimonials from "@/components/modules/home/HomeTestimonials";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Hero />
      <Feature />
      <HomeAbout />
      <HomeTestimonials />
      <HomeFaq />
      <HomeCTA />
    </div>
  );
};

export default HomePage;
