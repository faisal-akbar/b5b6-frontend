import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Phone } from "lucide-react";

function ContactHero() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "support@nextlevelparcel.com",
      subtitle: "We'll respond within 24 hours",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "+8801717171717",
      subtitle: "Available 24/7 for urgent matters",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with our support team",
      subtitle: "Get instant help anytime",
    },
  ];
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">
            Contact Us
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            Get in
            <span className="block text-primary">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Have a question? We'd love to hear from you! Fill out the form below
            and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="text-center p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50"
            >
              <CardContent className="p-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-6">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <p className="text-lg text-primary font-semibold mb-2">
                  {info.description}
                </p>
                <p className="text-sm text-muted-foreground">{info.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
