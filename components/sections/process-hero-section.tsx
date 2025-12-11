"use client"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { Badge } from "@/components/ui/badge"

export function ProcessHeroSection() {
  const principles = ["Transparent Communication", "Agile Methodology", "Quality Assurance", "Client Collaboration"]

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <AnimatedBackground variant="gradient" color="rgba(220, 38, 38, 0.08)" secondaryColor="rgba(75, 85, 99, 0.08)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4 max-w-4xl">
              <AnimatedText
                text="Our Proven Development Process"
                variant="heading"
                className="text-4xl font-heading font-bold tracking-tighter sm:text-5xl xl:text-6xl/none gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="A systematic approach to delivering exceptional digital products. From initial consultation to post-launch support, we follow a proven methodology that ensures quality, transparency, and successful project outcomes."
                variant="paragraph"
                className="max-w-[800px] text-gray-500 md:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />

              <div className="flex flex-wrap gap-3 justify-center mt-8">
                {principles.map((principle, index) => (
                  <Badge key={index} variant="outline" className="px-4 py-2">
                    {principle}
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
