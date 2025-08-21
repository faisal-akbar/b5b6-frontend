import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function HomeCTA() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background"></div>
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-6">
          Get Started
        </Badge>
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-10 text-muted-foreground max-w-3xl mx-auto">
          Join thousands of satisfied customers and experience the best parcel
          delivery service with our modern platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button asChild size="lg" className="text-lg px-10 py-6">
            <Link to="/register">Create Account</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg px-10 py-6"
          >
            <Link to="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HomeCTA;
