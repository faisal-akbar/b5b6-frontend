import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Clock,
  Globe2,
  MapPin,
  PackageCheck,
  Shield,
  Truck,
  Users,
  Zap,
} from "lucide-react";
function FeaturesGrid() {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Same-day and next-day options for urgent shipments.",
      category: "Delivery",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Safe",
      description: "Fully insured, tracked, and protected parcels.",
      category: "Security",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-time Tracking",
      description: "Monitor your parcel's journey with live updates.",
      category: "Technology",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Wide Coverage",
      description: "Delivering to all major cities and remote locations.",
      category: "Coverage",
    },
    {
      icon: <PackageCheck className="w-8 h-8" />,
      title: "Contactless Delivery",
      description: "Safe, contactless drop-off for your convenience.",
      category: "Safety",
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "International Shipping",
      description: "Send parcels worldwide with reliable partners.",
      category: "Global",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Notifications",
      description: "Get notified at every step of your parcel's journey.",
      category: "Technology",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Support",
      description: "24/7 customer support for all your delivery needs.",
      category: "Support",
    },
  ];
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            All Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Complete Feature Set
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for fast, secure, and reliable parcel delivery
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="p-6 flex flex-col items-start text-left shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50"
            >
              <CardHeader className="flex flex-col items-start pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-4">
                  {feature.icon}
                </div>
                <Badge variant="secondary" className="mb-2 text-xs">
                  {feature.category}
                </Badge>
                <CardTitle className="text-xl font-bold tracking-tight text-nowrap">
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

export default FeaturesGrid;
