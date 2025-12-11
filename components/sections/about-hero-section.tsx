"use client"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedBackground } from "@/components/ui/animated-background"

export function AboutHeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <AnimatedBackground variant="gradient" color="rgba(220, 38, 38, 0.08)" secondaryColor="rgba(75, 85, 99, 0.08)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4 max-w-4xl">
              <AnimatedText
                text="Building Digital Solutions That Drive Success"
                variant="heading"
                className="text-4xl font-heading font-bold tracking-tighter sm:text-5xl xl:text-6xl/none gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="We are a passionate team of developers and designers dedicated to transforming your ideas into powerful digital experiences that engage users and grow your business."
                variant="paragraph"
                className="max-w-[800px] text-gray-500 md:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
