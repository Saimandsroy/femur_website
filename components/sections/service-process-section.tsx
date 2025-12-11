"use client"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { MessageCircle, FileText, Palette, Code, TestTube, Rocket } from "lucide-react"

export function ServiceProcessSection() {
  const processSteps = [
    {
      icon: <MessageCircle className="h-8 w-8 text-blue-500" />,
      title: "Consultation",
      description: "We start with a detailed discussion to understand your requirements, goals, and vision.",
      duration: "1-2 days",
    },
    {
      icon: <FileText className="h-8 w-8 text-green-500" />,
      title: "Planning",
      description: "Create a comprehensive project plan with timelines, milestones, and technical specifications.",
      duration: "3-5 days",
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-500" />,
      title: "Design",
      description: "Design user interfaces and user experiences that align with your brand and user needs.",
      duration: "1-2 weeks",
    },
    {
      icon: <Code className="h-8 w-8 text-red-500" />,
      title: "Development",
      description: "Build your application using modern technologies and best practices for quality and performance.",
      duration: "2-8 weeks",
    },
    {
      icon: <TestTube className="h-8 w-8 text-yellow-500" />,
      title: "Testing",
      description: "Thorough testing across devices and browsers to ensure everything works perfectly.",
      duration: "1 week",
    },
    {
      icon: <Rocket className="h-8 w-8 text-orange-500" />,
      title: "Launch",
      description: "Deploy your application and provide ongoing support to ensure smooth operation.",
      duration: "1-2 days",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="Our Development Process"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl"
                animation="slide"
              />
              <AnimatedText
                text="A proven process that ensures quality, transparency, and successful project delivery."
                variant="paragraph"
                className="max-w-[800px] text-gray-500 md:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="h-full glassmorphic-card group text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="relative">
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-red-500 text-white text-sm font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div className="p-3 rounded-xl w-fit mx-auto bg-muted/50 transition-transform duration-300 group-hover:scale-110">
                      {step.icon}
                    </div>
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
