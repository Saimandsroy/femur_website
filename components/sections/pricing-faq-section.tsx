"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { Card, CardContent } from "@/components/ui/card"

export function PricingFaqSection() {
  const faqs = [
    {
      question: "What's included in the project price?",
      answer:
        "All our packages include design, development, testing, deployment, and initial support. You'll also get source code, documentation, and training on how to manage your website or app.",
    },
    {
      question: "Are there any hidden costs or ongoing fees?",
      answer:
        "No hidden costs! Our pricing is completely transparent. The only ongoing costs would be hosting (typically $10-50/month) and domain registration ($15/year), which you can manage independently.",
    },
    {
      question: "What happens if my project needs more work than estimated?",
      answer:
        "We provide detailed project scopes upfront to avoid surprises. If additional features are requested during development, we'll provide a clear quote for the extra work before proceeding.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes! We typically split payments into milestones: 50% to start, 25% at midpoint, and 25% upon completion. For larger projects, we can discuss custom payment schedules.",
    },
    {
      question: "What if I'm not satisfied with the final result?",
      answer:
        "We offer unlimited revisions during the development process and a 30-day money-back guarantee. Our goal is to ensure you're completely satisfied with your project.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Timeline varies by package: Starter (2-3 weeks), Professional (4-6 weeks), Enterprise (8-12 weeks). We'll provide a detailed timeline during the consultation phase.",
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes! All packages include initial support (3-12 months depending on package). We also offer extended support packages for ongoing maintenance, updates, and feature additions.",
    },
    {
      question: "Can I upgrade my package during development?",
      answer:
        "You can upgrade to a higher package at any time during development. We'll adjust the pricing and timeline accordingly and credit what you've already paid.",
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
              text="Everything you need to know about our pricing and packages"
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
