import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, PackageCheck, Users } from "lucide-react";

function FaqHero() {
  const categories = [
    {
      title: "Shipping & Delivery",
      count: 4,
      icon: <PackageCheck className="w-8 h-8" />,
    },
    {
      title: "Tracking & Updates",
      count: 2,
      icon: <MapPin className="w-8 h-8" />,
    },
    {
      title: "Support & Help",
      count: 2,
      icon: <Users className="w-8 h-8" />,
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">
            FAQ
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            Frequently Asked
            <span className="block text-primary">Questions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Find answers to the most common questions about our parcel delivery
            service
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="text-center p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50"
            >
              <CardContent className="p-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-6">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.count} questions
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqHero;
