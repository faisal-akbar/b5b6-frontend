import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

function HomeFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does delivery take?",
      answer:
        "Standard delivery takes 2-3 business days. Express delivery is available for same-day or next-day delivery in select areas.",
    },
    {
      question: "What if my parcel gets lost?",
      answer:
        "All parcels are fully insured. If your parcel is lost or damaged, we'll provide full compensation within 48 hours.",
    },
    {
      question: "Can I track my parcel?",
      answer:
        "Yes! You'll receive a tracking number and can monitor your parcel's journey in real-time.",
    },
    {
      question: "What are your delivery hours?",
      answer:
        "We deliver Monday to Saturday, 8 AM to 8 PM. Sunday deliveries are available in select areas.",
    },
  ];
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-background"></div>
      <div className="relative max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            FAQ
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Find answers to the most common questions about our service
          </p>
        </div>
        <Card className="shadow-xl border-0 bg-gradient-to-br from-card to-card/50">
          <CardContent className="p-8">
            <Accordion
              type="single"
              collapsible
              value={openFaq !== null ? String(openFaq) : undefined}
              onValueChange={(val) => setOpenFaq(val ? Number(val) : null)}
            >
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={String(index)}>
                  <AccordionTrigger className="font-semibold text-lg text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
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

export default HomeFaq;
