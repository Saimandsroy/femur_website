"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { Card, CardContent } from "@/components/ui/card"

export function ContactFaqSection() {
  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer:
        "We typically respond to all inquiries within 2-4 hours during business hours (9 AM - 6 PM EST). For urgent matters, you can call us directly for immediate assistance.",
    },
    {
      question: "Do you offer free consultations?",
      answer:
        "Yes! We offer free 30-minute consultation calls to discuss your project, provide initial recommendations, and give you a ballpark estimate. No commitment required.",
    },
    {
      question: "What information should I include in my project inquiry?",
      answer:
        "The more details you provide, the better we can help you. Include your project goals, target audience, preferred timeline, budget range, and any specific features or requirements you have in mind.",
    },
    {
      question: "Can you work with clients remotely?",
      answer:
        "We work with clients worldwide and have perfected our remote collaboration process. We use modern communication tools and project management systems to ensure smooth collaboration regardless of location.",
    },
    {
      question: "What happens after I submit a project inquiry?",
      answer:
        "After receiving your inquiry, we'll review your requirements and respond within 24 hours with initial thoughts and next steps. If it's a good fit, we'll schedule a consultation call to discuss your project in detail.",
    },
    {
      question: "Do you sign NDAs for project discussions?",
      answer:
        "Yes, we're happy to sign NDAs before discussing sensitive project details. We understand the importance of protecting your business ideas and confidential information.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <AnimatedText
              text="Frequently Asked Questions"
              variant="heading"
              className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl"
              animation="slide"
            />
            <AnimatedText
              text="Quick answers to common questions about getting in touch and starting a project"
              variant="paragraph"
              className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400 opacity-70"
              animation="fade"
              delay={0.3}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <Card className="mx-auto max-w-4xl glassmorphic-card">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                    <AccordionTrigger className="text-left hover:text-red-500 transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground opacity-70 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  )
}
