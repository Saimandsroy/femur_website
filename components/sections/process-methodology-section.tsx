"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { Zap, Users, RefreshCw, Shield } from "lucide-react"
import { AnimatedBackground } from "@/components/ui/animated-background"

export function ProcessMethodologySection() {
  const methodologies = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Agile Development",
      description: "Iterative development with regular feedback loops and continuous improvement.",
      benefits: ["Faster time to market", "Regular client feedback", "Flexible scope adjustments", "Risk mitigation"],
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Collaborative Approach",
      description: "Close collaboration with clients throughout the development process.",
      benefits: [
        "Transparent communication",
        "Regular progress updates",
        "Client involvement in decisions",
        "Shared project ownership",
      ],
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-green-500" />,
      title: "Continuous Integration",
      description: "Automated testing and deployment for reliable and consistent releases.",
      benefits: ["Automated quality checks", "Faster bug detection", "Consistent deployments", "Reduced manual errors"],
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "Quality Assurance",
      description: "Comprehensive testing at every stage to ensure high-quality deliverables.",
      benefits: ["Multi-device testing", "Performance optimization", "Security validation", "User acceptance testing"],
    },
  ]

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <AnimatedBackground variant="waves" color="rgba(220, 38, 38, 0.05)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <AnimatedText
              text="Our Development Methodology"
              variant="heading"
              className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl"
              animation="slide"
            />
            <AnimatedText
              text="The principles and practices that guide our development approach"
              variant="paragraph"
              className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400 opacity-70"
              animation="fade"
              delay={0.3}
            />
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {methodologies.map((methodology, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="h-full glassmorphic-card group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-muted/50 transition-transform duration-300 group-hover:scale-110">
                      {methodology.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl tracking-tight">{methodology.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="opacity-70 group-hover:opacity-100 transition-opacity">
                    {methodology.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3 text-sm">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {methodology.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
