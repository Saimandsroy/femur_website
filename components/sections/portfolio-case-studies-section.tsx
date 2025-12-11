"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Zap } from "lucide-react"
import { AnimatedBackground } from "@/components/ui/animated-background"

export function PortfolioCaseStudiesSection() {
  const caseStudies = [
    {
      title: "TechCorp E-commerce Transformation",
      client: "TechCorp Solutions",
      challenge: "Outdated e-commerce platform with poor user experience and low conversion rates.",
      solution: "Complete platform redesign with modern UI/UX, optimized checkout flow, and mobile-first approach.",
      results: [
        { metric: "Conversion Rate", improvement: "+150%" },
        { metric: "Page Load Speed", improvement: "+300%" },
        { metric: "Mobile Traffic", improvement: "+200%" },
      ],
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      image: "/placeholder.svg?height=400&width=600&text=TechCorp+Case+Study",
      testimonial: "The new platform exceeded our expectations. Sales increased by 150% in the first quarter.",
      clientRole: "CEO, TechCorp Solutions",
    },
    {
      title: "HealthTracker App Success Story",
      client: "WellnessTech Inc.",
      challenge: "Need for a comprehensive health tracking solution with wearable device integration.",
      solution:
        "Cross-platform mobile app with real-time health monitoring, AI-powered insights, and telemedicine features.",
      results: [
        { metric: "User Engagement", improvement: "+400%" },
        { metric: "App Store Rating", improvement: "4.8/5" },
        { metric: "Daily Active Users", improvement: "+250%" },
      ],
      technologies: ["React Native", "Firebase", "HealthKit", "AI/ML"],
      image: "/placeholder.svg?height=400&width=600&text=HealthTracker+Case+Study",
      testimonial: "Our users love the app. The engagement metrics are beyond what we imagined possible.",
      clientRole: "Product Manager, WellnessTech Inc.",
    },
  ]

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <AnimatedBackground variant="waves" color="rgba(220, 38, 38, 0.05)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="Detailed Case Studies"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="Deep dive into how we've solved complex challenges and delivered exceptional results for our clients."
                variant="paragraph"
                className="max-w-[800px] text-gray-500 md:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <Card className="glassmorphic-card overflow-hidden">
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="order-2 lg:order-1">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          Case Study
                        </Badge>
                        <Badge variant="secondary" className="text-xs bg-red-500/10 text-red-500">
                          {study.client}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl tracking-tight">{study.title}</CardTitle>
                      <CardDescription className="text-base opacity-70">{study.challenge}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                          Solution
                        </h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                          Results
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {study.results.map((result, i) => (
                            <div key={i} className="text-center p-3 rounded-lg bg-muted/50">
                              <div className="text-2xl font-bold text-red-500">{result.improvement}</div>
                              <div className="text-sm text-muted-foreground">{result.metric}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="border-l-4 border-red-500 pl-4 bg-muted/30 p-4 rounded-r-lg">
                        <p className="text-muted-foreground italic">"{study.testimonial}"</p>
                        <p className="text-sm font-medium mt-2">— {study.clientRole}</p>
                      </div>

                      <Button className="w-full sm:w-auto bg-transparent" variant="outline">
                        View Full Case Study
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </div>

                  <div className="order-1 lg:order-2">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      className="w-full h-full object-cover rounded-lg lg:rounded-none lg:rounded-r-lg"
                    />
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="text-center mt-12">
            <Button size="lg" className="neumorphic-button">
              View All Case Studies
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
