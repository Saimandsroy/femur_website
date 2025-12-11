"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, FileText, Lightbulb } from "lucide-react"

export function ProcessDetailedStepsSection() {
  const detailedSteps = [
    {
      phase: "Discovery & Consultation",
      icon: <Users className="h-6 w-6 text-blue-500" />,
      description:
        "We start every project with a comprehensive discovery phase to understand your business, goals, and technical requirements.",
      activities: [
        "Initial consultation call",
        "Requirements gathering",
        "Target audience analysis",
        "Competitive research",
        "Technical feasibility assessment",
        "Project scope definition",
      ],
      deliverables: ["Project brief", "Requirements document", "Initial timeline", "Cost estimate"],
      duration: "1-2 days",
    },
    {
      phase: "Planning & Strategy",
      icon: <FileText className="h-6 w-6 text-green-500" />,
      description: "Detailed planning ensures smooth execution and helps avoid scope creep and timeline delays.",
      activities: [
        "Technical architecture planning",
        "Database design",
        "API specification",
        "User journey mapping",
        "Feature prioritization",
        "Risk assessment",
      ],
      deliverables: ["Technical specification", "Project roadmap", "Wireframes", "Development plan"],
      duration: "3-5 days",
    },
    {
      phase: "Design & Prototyping",
      icon: <Lightbulb className="h-6 w-6 text-purple-500" />,
      description:
        "Creating intuitive and engaging user experiences that align with your brand and business objectives.",
      activities: [
        "User experience design",
        "Visual design creation",
        "Interactive prototyping",
        "Design system development",
        "Client feedback integration",
        "Design finalization",
      ],
      deliverables: ["UI/UX designs", "Interactive prototype", "Design system", "Asset library"],
      duration: "1-2 weeks",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <AnimatedText
              text="Detailed Process Breakdown"
              variant="heading"
              className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl gradient-text"
              animation="slide"
            />
            <AnimatedText
              text="A closer look at what happens in each phase of our development process"
              variant="paragraph"
              className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400 opacity-70"
              animation="fade"
              delay={0.3}
            />
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {detailedSteps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <Card className="glassmorphic-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-muted/50">{step.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl tracking-tight">{step.phase}</CardTitle>
                        <Badge variant="outline" className="text-red-500 border-red-500">
                          {step.duration}
                        </Badge>
                      </div>
                      <CardDescription className="text-base opacity-70">{step.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-4 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        Key Activities
                      </h4>
                      <ul className="space-y-2">
                        {step.activities.map((activity, i) => (
                          <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-3 mt-2"></div>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4 flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-blue-500" />
                        Deliverables
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {deliverable}
                          </Badge>
                        ))}
                      </div>
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
