"use client"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { Badge } from "@/components/ui/badge"

export function ProcessTimelineSection() {
  const projectTypes = [
    {
      type: "Simple Website",
      description: "Landing pages, portfolios, small business websites",
      timeline: [
        { phase: "Discovery", duration: "1 day" },
        { phase: "Planning", duration: "2 days" },
        { phase: "Design", duration: "1 week" },
        { phase: "Development", duration: "1-2 weeks" },
        { phase: "Testing", duration: "2-3 days" },
        { phase: "Launch", duration: "1 day" },
      ],
      totalTime: "2-3 weeks",
      color: "bg-green-500",
    },
    {
      type: "Complex Website",
      description: "E-commerce, web applications, custom functionality",
      timeline: [
        { phase: "Discovery", duration: "2 days" },
        { phase: "Planning", duration: "1 week" },
        { phase: "Design", duration: "2 weeks" },
        { phase: "Development", duration: "4-6 weeks" },
        { phase: "Testing", duration: "1 week" },
        { phase: "Launch", duration: "2-3 days" },
      ],
      totalTime: "8-10 weeks",
      color: "bg-blue-500",
    },
    {
      type: "Mobile Application",
      description: "Native or cross-platform mobile apps",
      timeline: [
        { phase: "Discovery", duration: "3 days" },
        { phase: "Planning", duration: "1 week" },
        { phase: "Design", duration: "2-3 weeks" },
        { phase: "Development", duration: "8-12 weeks" },
        { phase: "Testing", duration: "2 weeks" },
        { phase: "Launch", duration: "1 week" },
      ],
      totalTime: "14-18 weeks",
      color: "bg-purple-500",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <AnimatedText
              text="Project Timelines"
              variant="heading"
              className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl gradient-text"
              animation="slide"
            />
            <AnimatedText
              text="Typical timelines for different types of projects"
              variant="paragraph"
              className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400 opacity-70"
              animation="fade"
              delay={0.3}
            />
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {projectTypes.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <Card className="glassmorphic-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-4 h-4 rounded-full ${project.color}`}></div>
                    <div>
                      <h3 className="text-2xl font-heading font-semibold tracking-tight">{project.type}</h3>
                      <p className="text-muted-foreground opacity-70">{project.description}</p>
                    </div>
                    <Badge variant="outline" className="ml-auto text-red-500 border-red-500">
                      Total: {project.totalTime}
                    </Badge>
                  </div>

                  <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
                    <div className="space-y-4">
                      {project.timeline.map((phase, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className={`w-3 h-3 rounded-full ${project.color} relative z-10`}></div>
                          <div className="flex-1 flex items-center justify-between">
                            <span className="font-medium">{phase.phase}</span>
                            <Badge variant="secondary" className="text-xs">
                              {phase.duration}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
