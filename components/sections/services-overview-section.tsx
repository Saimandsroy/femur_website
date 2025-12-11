"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Palette, Wrench, ArrowRight } from "lucide-react"
import { AnimatedBackground } from "@/components/ui/animated-background"

export function ServicesOverviewSection() {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-red-500" />,
      title: "Website Development",
      description: "Custom websites, e-commerce platforms, and web applications built with modern technologies.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Secure & Scalable"],
      link: "#web-development",
    },
    {
      icon: <Smartphone className="h-12 w-12 text-blue-500" />,
      title: "Mobile App Development",
      description: "Native iOS and Android apps, plus cross-platform solutions for maximum reach.",
      features: ["Native Development", "Cross-Platform", "App Store Deployment", "Push Notifications"],
      link: "#app-development",
    },
    {
      icon: <Palette className="h-12 w-12 text-purple-500" />,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      link: "#design-services",
    },
    {
      icon: <Wrench className="h-12 w-12 text-green-500" />,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and maintenance to keep your digital products running smoothly.",
      features: ["24/7 Monitoring", "Regular Updates", "Bug Fixes", "Performance Optimization"],
      link: "#maintenance-services",
    },
  ]

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <AnimatedBackground variant="dots" color="rgba(220, 38, 38, 0.05)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="What We Offer"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl"
                animation="slide"
              />
              <AnimatedText
                text="Our comprehensive suite of development services covers every aspect of your digital journey."
                variant="paragraph"
                className="max-w-[800px] text-gray-500 md:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="h-full glassmorphic-card group border-glow-red">
                <CardHeader>
                  <div className="p-3 rounded-xl w-fit bg-muted/50 transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <CardTitle className="mt-4 text-2xl tracking-tight">{service.title}</CardTitle>
                  <CardDescription className="text-base opacity-70 group-hover:opacity-100 transition-opacity">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-red-500 group-hover:text-white transition-colors bg-transparent"
                    asChild
                  >
                    <a href={service.link} className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
