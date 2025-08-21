import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Star } from "lucide-react";

function FeaturesBenefit() {
  const benefits = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Service",
      description:
        "Experience the highest quality delivery service with attention to every detail.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award Winning",
      description:
        "Recognized for excellence in customer service and delivery reliability.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Secure",
      description:
        "Your parcels are fully protected with comprehensive insurance coverage.",
    },
  ];
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/30"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Premium Benefits
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the advantages that set us apart from the competition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50"
            >
              <CardContent className="p-4">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 text-primary rounded-3xl mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesBenefit;
