import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Shield, Truck } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-7 h-7" />,
    title: "Fast Delivery",
    description: "Same-day and next-day delivery options available.",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Secure & Safe",
    description: "Fully insured and tracked parcels.",
  },
  {
    icon: <Clock className="w-7 h-7" />,
    title: "Real-time Tracking",
    description: "Track your parcel in real-time.",
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    title: "Wide Coverage",
    description: "Delivering to all major cities and remote locations.",
  },
];

function Feature() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Why Choose Our Service?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide the most reliable and efficient parcel delivery service
            with cutting-edge technology
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50"
            >
              <CardHeader className="flex flex-col items-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold tracking-tight">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;
