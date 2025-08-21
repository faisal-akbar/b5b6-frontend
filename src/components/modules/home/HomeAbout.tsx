import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package } from "lucide-react";
import { Link } from "react-router";

function HomeAbout() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/30"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">
              About Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              About Our Delivery Service
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We started with a simple mission: to make parcel delivery fast,
              reliable, and transparent. Today, we're proud to serve thousands
              of customers with our innovative tracking system and dedicated
              delivery network.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 rounded-lg bg-primary/5">
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/5">
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-muted-foreground">On-time Delivery</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
              <CardHeader className="text-center">
                <Package className="w-16 h-16 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold">
                  Join Our Network
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                  Become part of our growing community of satisfied customers
                  and experience the future of parcel delivery.
                </p>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  <Link to="/register">Sign Up Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
