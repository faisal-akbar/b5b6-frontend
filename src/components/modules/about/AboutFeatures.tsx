import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Truck, Users, Zap } from "lucide-react";
function AboutFeatures() {
  const features = [
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Fast & Reliable",
      description:
        "Same-day and next-day delivery options, real-time tracking, and a network that covers all major cities and remote locations.",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Secure & Safe",
      description:
        "Your parcels are fully insured and protected, with contactless delivery and instant notifications at every step.",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Innovative Technology",
      description:
        "We leverage the latest tech for seamless booking, live updates, and easy management of all your shipments.",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Customer First",
      description:
        "Our support team is available 24/7 to help you with any questions or issues. Your satisfaction is our top priority.",
    },
  ];
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Why Choose Our Service?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide the most reliable and efficient parcel delivery service
            with cutting-edge technology
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50"
            >
              <CardHeader className="flex flex-row items-start gap-5 pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl">
                  {feature.icon}
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold tracking-tight mb-3">
                    {feature.title}
                  </CardTitle>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutFeatures;
