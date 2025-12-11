"use client"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export function PricingHeroSection() {
  const guarantees = ["Fixed-Price Projects", "No Hidden Costs", "Money-Back Guarantee", "Free Consultation"]

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <AnimatedBackground variant="gradient" color="rgba(220, 38, 38, 0.08)" secondaryColor="rgba(75, 85, 99, 0.08)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4 max-w-4xl">
              <AnimatedText
                text="Transparent, Fair Pricing"
                variant="heading"
                className="text-4xl font-heading font-bold tracking-tighter sm:text-5xl xl:text-6xl/none gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="Choose the perfect package for your project needs. All our pricing is transparent with no hidden fees, and every project includes our quality guarantee."
                variant="paragraph"
                className="max-w-[800px] text-gray-500 md:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />

              <div className="flex flex-wrap gap-4 justify-center mt-8">
                {guarantees.map((guarantee, index) => (
                  <Badge key={index} variant="outline" className="px-4 py-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    {guarantee}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
