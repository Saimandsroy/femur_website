"use client"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { Badge } from "@/components/ui/badge"
import { Clock, MessageCircle, Phone } from "lucide-react"

export function ContactHeroSection() {
  const contactMethods = [
    { icon: <Phone className="h-4 w-4" />, text: "Free Consultation" },
    { icon: <MessageCircle className="h-4 w-4" />, text: "Quick Response" },
    { icon: <Clock className="h-4 w-4" />, text: "24h Reply Time" },
  ]

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <AnimatedBackground variant="gradient" color="rgba(220, 38, 38, 0.08)" secondaryColor="rgba(75, 85, 99, 0.08)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4 max-w-4xl">
              <AnimatedText
                text="Let's Build Something Amazing Together"
                variant="heading"
                className="text-4xl font-heading font-bold tracking-tighter sm:text-5xl xl:text-6xl/none gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="Ready to transform your digital presence? Get in touch with our team for a free consultation and detailed project quote. We're here to help bring your vision to life."
                variant="paragraph"
                className="max-w-[800px] text-gray-500 md:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />

              <div className="flex flex-wrap gap-3 justify-center mt-8">
                {contactMethods.map((method, index) => (
                  <Badge key={index} variant="outline" className="px-4 py-2 flex items-center gap-2">
                    {method.icon}
                    {method.text}
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
