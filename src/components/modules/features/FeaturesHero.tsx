import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Globe2, PackageCheck, Shield, Truck, Users, Zap } from "lucide-react";
function FeaturesHero() {
  const categories = [
    {
      name: "Delivery",
      icon: <Truck className="w-6 h-6" />,
    },
    {
      name: "Technology",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      name: "Security",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      name: "Support",
      icon: <Users className="w-6 h-6" />,
    },
    {
      name: "Global",
      icon: <Globe2 className="w-6 h-6" />,
    },
    {
      name: "Safety",
      icon: <PackageCheck className="w-6 h-6" />,
    },
  ];
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">
            Features
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            Our Amazing
            <span className="block text-primary">Features</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore the key features of our modern parcel delivery service
            designed to make shipping effortless
          </p>
        </div>

        {/* Feature Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="text-center p-4 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50"
            >
              <CardContent className="p-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl mb-3">
                  {category.icon}
                </div>
                <h3 className="text-sm font-bold mb-1">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesHero;
