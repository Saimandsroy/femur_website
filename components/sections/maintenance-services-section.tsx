"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, BarChart, Headphones } from "lucide-react"
import { AnimatedBackground } from "@/components/ui/animated-background"

export function MaintenanceServicesSection() {
  const maintenanceServices = [
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Security & Updates",
      description: "Keep your applications secure with regular updates, security patches, and monitoring.",
      technologies: ["Security Audits", "Vulnerability Scanning", "SSL Certificates", "Backup Solutions"],
      benefits: ["Enhanced Security", "Regular Updates", "Data Protection", "Compliance"],
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization to ensure your applications run at peak performance.",
      technologies: ["Performance Monitoring", "Code Optimization", "Database Tuning", "CDN Setup"],
      benefits: ["Faster Load Times", "Better User Experience", "Improved SEO", "Cost Efficiency"],
    },
    {
      icon: <BarChart className="h-8 w-8 text-blue-500" />,
      title: "Analytics & Reporting",
      description: "Detailed insights into your application's performance, user behavior, and business metrics.",
      technologies: ["Google Analytics", "Custom Dashboards", "Performance Reports", "User Tracking"],
      benefits: ["Data-Driven Decisions", "User Insights", "Performance Metrics", "Growth Tracking"],
    },
    {
      icon: <Headphones className="h-8 w-8 text-purple-500" />,
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your applications are always running smoothly.",
      technologies: ["Monitoring Systems", "Issue Tracking", "Emergency Response", "Documentation"],
      benefits: ["Peace of Mind", "Quick Issue Resolution", "Minimal Downtime", "Expert Support"],
    },
  ]

  return (
    <section id="maintenance-services" className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <AnimatedBackground variant="grid" color="rgba(220, 38, 38, 0.03)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="Maintenance & Support Services"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="Keep your digital products running smoothly with our comprehensive maintenance and support services."
                variant="paragraph"
                className="max-w-[800px] text-gray-500 md:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {maintenanceServices.map((service, index) => (
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
                    <h4 className="font-semibold mb-2 text-sm">Services Include:</h4>
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
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3"></div>
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
