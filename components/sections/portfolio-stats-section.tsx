"use client"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedBackground } from "@/components/ui/animated-background"

export function PortfolioStatsSection() {
  const stats = [
    {
      number: "50+",
      label: "Projects Completed",
      description: "Successful projects delivered across various industries",
    },
    {
      number: "40+",
      label: "Happy Clients",
      description: "Businesses that trust us with their digital transformation",
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      description: "Average client satisfaction rating based on project feedback",
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock support for all our delivered projects",
    },
  ]

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <AnimatedBackground variant="dots" color="rgba(220, 38, 38, 0.05)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <AnimatedText
              text="Our Track Record"
              variant="heading"
              className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl"
              animation="slide"
            />
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="glassmorphic-card group text-center">
                <CardContent className="p-6 space-y-2">
                  <div className="text-4xl font-heading font-bold text-red-500 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">
                    {stat.description}
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
