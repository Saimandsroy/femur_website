"use client"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { Target, Users, Lightbulb } from "lucide-react"

export function AboutStorySection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <AnimatedBackground variant="dots" color="rgba(220, 38, 38, 0.05)" />

      <div className="container px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <AnimatedText
                text="Our Story"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl"
                animation="slide"
              />
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Founded with a vision to bridge the gap between innovative ideas and exceptional digital products, we
                  started as a small team of passionate developers who believed that every business deserves a powerful
                  digital presence.
                </p>
                <p className="text-lg leading-relaxed">
                  Over the years, we've grown into a full-service development agency, but our core values remain the
                  same: deliver quality, exceed expectations, and build lasting partnerships with our clients.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we're proud to have helped over 50 businesses transform their digital presence and achieve
                  their goals through custom web and mobile solutions.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="grid gap-6">
              <Card className="glassmorphic-card border-glow-red">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-xl bg-red-500/10">
                      <Target className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg">Our Mission</h3>
                      <p className="text-muted-foreground">
                        To empower businesses with cutting-edge digital solutions that drive growth and success.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glassmorphic-card border-glow-blue">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-xl bg-blue-500/10">
                      <Lightbulb className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg">Our Vision</h3>
                      <p className="text-muted-foreground">
                        To be the leading agency that transforms innovative ideas into exceptional digital experiences.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glassmorphic-card border-glow-green">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-xl bg-green-500/10">
                      <Users className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg">Our Values</h3>
                      <p className="text-muted-foreground">
                        Quality, innovation, transparency, and building lasting partnerships with our clients.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
