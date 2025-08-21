import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";
function AboutJourney() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/30"></div>
      <div className="relative max-w-4xl mx-auto px-4">
        <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-card to-card/50">
          <CardHeader className="text-center mb-8">
            <Badge variant="secondary" className="mb-4 w-fit mx-auto">
              Our Story
            </Badge>
            <CardTitle className="text-4xl md:text-5xl font-black tracking-tight">
              Our Journey
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Our Story
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in <span className="font-bold text-primary">2025</span>,
                NextLevel Parcel was born out of a passion for making delivery
                simple, affordable, and accessible. Today, we serve thousands of
                happy customers and continue to innovate in the logistics space.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Why Choose Us?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    Transparent pricing and no hidden fees
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    Flexible solutions for individuals and businesses
                  </li>
                </ul>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    Dedicated support and easy-to-use platform
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    Commitment to sustainability and community impact
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default AboutJourney;
