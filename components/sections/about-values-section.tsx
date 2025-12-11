"use client"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { Heart, Zap, Shield, Users } from "lucide-react"

export function AboutValuesSection() {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Passion",
      description: "We love what we do and it shows in every project we deliver.",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions.",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Quality",
      description: "We never compromise on quality and always deliver excellence.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Partnership",
      description: "We build lasting relationships and work as an extension of your team.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="Our Core Values"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl"
                animation="slide"
              />
              <AnimatedText
                text="These values guide everything we do and shape how we work with our clients."
                variant="paragraph"
                className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="h-full glassmorphic-card group text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 rounded-xl w-fit mx-auto bg-muted/50 transition-transform duration-300 group-hover:scale-110">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold tracking-tight">{value.title}</h3>
                  <p className="text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
