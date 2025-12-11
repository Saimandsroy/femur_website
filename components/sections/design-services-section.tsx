"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { Badge } from "@/components/ui/badge"
import { Palette, Users, Layers, Zap } from "lucide-react"

export function DesignServicesSection() {
  const designServices = [
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "User Experience (UX) Design",
      description: "Research-driven UX design that creates intuitive and engaging user journeys.",
      technologies: ["User Research", "Journey Mapping", "Usability Testing", "Information Architecture"],
      benefits: [
        "Improved User Satisfaction",
        "Higher Conversion Rates",
        "Reduced Bounce Rate",
        "Better Accessibility",
      ],
    },
    {
      icon: <Palette className="h-8 w-8 text-pink-500" />,
      title: "User Interface (UI) Design",
      description: "Beautiful, modern interfaces that align with your brand and delight your users.",
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle"],
      benefits: ["Brand Consistency", "Visual Hierarchy", "Responsive Design", "Modern Aesthetics"],
    },
    {
      icon: <Layers className="h-8 w-8 text-blue-500" />,
      title: "Design Systems",
      description: "Comprehensive design systems that ensure consistency across all your digital products.",
      technologies: ["Component Libraries", "Style Guides", "Design Tokens", "Documentation"],
      benefits: ["Design Consistency", "Faster Development", "Scalable Design", "Team Collaboration"],
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Prototyping & Testing",
      description: "Interactive prototypes and user testing to validate design decisions before development.",
      technologies: ["Interactive Prototypes", "A/B Testing", "User Feedback", "Iteration"],
      benefits: ["Reduced Development Risk", "Validated Concepts", "User-Centered Design", "Cost Savings"],
    },
  ]

  return (
    <section id="design-services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="UI/UX Design Services"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="Create exceptional user experiences that convert visitors into customers and keep them coming back."
                variant="paragraph"
                className="max-w-[800px] text-gray-500 md:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {designServices.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="h-full glassmorphic-card group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-xl bg-muted/50 transition-transform duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl tracking-tight">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="opacity-70 group-hover:opacity-100 transition-opacity">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Approach:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
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
