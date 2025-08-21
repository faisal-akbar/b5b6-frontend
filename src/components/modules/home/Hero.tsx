import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const stats = [
  { number: "10K+", label: "Happy Customers" },
  { number: "99%", label: "On-time Delivery" },
  { number: "24/7", label: "Customer Support" },
  { number: "50+", label: "Cities Covered" },
];

function Hero() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background"></div>
      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-6">
          🚀 Trusted by 10,000+ customers
        </Badge>
        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
          NextLevel
          <span className="block text-primary">Parcel Delivery</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Fast, secure, and transparent delivery for everyone.
          <br className="hidden md:inline" /> Track every step and enjoy peace
          of mind with our cutting-edge logistics platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button asChild size="lg" className="text-lg px-10 py-6">
            <Link to="/register">Get Started Free</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg px-10 py-6"
          >
            <Link to="/about">Learn More</Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
