import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    content:
      "The fastest and most reliable delivery service I've ever used. My customers love the real-time tracking!",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Online Seller",
    content:
      "Outstanding service! My parcels always arrive on time and in perfect condition. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Student",
    content:
      "Perfect for sending care packages to family. The tracking feature gives me peace of mind.",
    rating: 5,
  },
];

function HomeTestimonials() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/50"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50"
            >
              <CardHeader className="flex flex-row gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                ))}
              </CardHeader>
              <CardContent>
                <p className="mb-6 italic text-lg leading-relaxed text-muted-foreground">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeTestimonials;
