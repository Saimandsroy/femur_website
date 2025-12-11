"use client"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { MessageCircle, FileText, Palette, Code, TestTube, Rocket } from "lucide-react"
import { AnimatedBackground } from "@/components/ui/animated-background"

export function ProcessOverviewSection() {
  const steps = [
    {
      icon: <MessageCircle className="h-8 w-8 text-blue-500" />,
      title: "Discovery & Consultation",
      description: "Understanding your vision, goals, and requirements",
      duration: "1-2 days",
    },
    {
      icon: <FileText className="h-8 w-8 text-green-500" />,
      title: "Planning & Strategy",
      description: "Creating detailed project roadmap and technical specifications",
      duration: "3-5 days",
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-500" />,
      title: "Design & Prototyping",
      description: "Crafting user experiences and visual designs",
      duration: "1-2 weeks",
    },
    {
      icon: <Code className="h-8 w-8 text-red-500" />,
      title: "Development & Integration",
      description: "Building your application with modern technologies",
      duration: "2-8 weeks",
    },
    {
      icon: <TestTube className="h-8 w-8 text-yellow-500" />,
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing across devices and browsers",
      duration: "1 week",
    },
    {
      icon: <Rocket className="h-8 w-8 text-orange-500" />,
      title: "Launch & Support",
      description: "Deployment and ongoing maintenance support",
      duration: "Ongoing",
    },
  ]

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <AnimatedBackground variant="dots" color="rgba(220, 38, 38, 0.05)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <AnimatedText
              text="6-Step Development Process"
              variant="heading"
              className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl"
              animation="slide"
            />
            <AnimatedText
              text="A structured approach that ensures quality delivery and client satisfaction"
              variant="paragraph"
              className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400 opacity-70"
              animation="fade"
              delay={0.3}
            />
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="h-full glassmorphic-card group text-center relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-red-500 text-white text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 rounded-xl w-fit mx-auto bg-muted/50 transition-transform duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold tracking-tight">{step.title}</h3>
                  <p className="text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">
                    {step.description}
                  </p>
                  <div className="text-sm text-red-500 font-medium">{step.duration}</div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
