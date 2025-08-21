import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Globe2,
  MapPin,
  PackageCheck,
  Shield,
  Users,
  Zap,
} from "lucide-react";

const faqs = [
  {
    icon: <Clock className="w-6 h-6" />,
    question: "How long does delivery take?",
    answer:
      "Standard delivery takes 2-3 business days. Express delivery is available for same-day or next-day delivery in select areas.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    question: "What if my parcel gets lost?",
    answer:
      "All parcels are fully insured. If your parcel is lost or damaged, we'll provide full compensation within 48 hours.",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    question: "Can I track my parcel?",
    answer:
      "Yes! You'll receive a tracking number and can monitor your parcel's journey in real-time through our app or website.",
  },
  {
    icon: <PackageCheck className="w-6 h-6" />,
    question: "What are your delivery hours?",
    answer:
      "We deliver Monday to Saturday, 8 AM to 8 PM. Sunday deliveries are available in select areas.",
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    question: "Do you offer international shipping?",
    answer:
      "Yes, we partner with reliable carriers to deliver parcels worldwide with competitive rates and tracking.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    question: "Will I get notifications about my parcel?",
    answer:
      "You will receive instant notifications at every step of your parcel's journey via email, SMS, and push notifications.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    question: "Is customer support available?",
    answer:
      "Our support team is available 24/7 to assist you with any queries through phone, email, and live chat.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, PayPal, and bank transfers. All payments are secure and encrypted.",
  },
];
function FaqSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background"></div>
      <div className="relative max-w-4xl mx-auto px-4">
        <Card className="shadow-xl border-0 bg-gradient-to-br from-card to-card/40">
          <CardContent className="p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={String(idx)}
                  className="border rounded-lg px-6"
                >
                  <AccordionTrigger className="font-semibold text-lg text-left py-6 hover:no-underline ">
                    <span className="flex items-center gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-xl">
                        {faq.icon}
                      </div>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default FaqSection;
