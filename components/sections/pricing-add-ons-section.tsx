"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, BarChart, Headphones, Palette, Database } from "lucide-react"
import { AnimatedBackground } from "@/components/ui/animated-background"

export function PricingAddOnsSection() {
  const addOns = [
    {
      icon: <Palette className="h-6 w-6 text-purple-500" />,
      title: "UI/UX Design Package",
      description: "Complete design system with wireframes, mockups, and prototypes",
      price: "$2,999",
      timeline: "2-3 weeks",
      includes: ["User Research", "Wireframing", "Visual Design", "Prototyping", "Design System"],
    },
    {
      icon: <Database className="h-6 w-6 text-blue-500" />,
      title: "Database Design & Setup",
      description: "Custom database architecture and optimization for your application",
      price: "$1,999",
      timeline: "1-2 weeks",
      includes: ["Database Design", "Performance Optimization", "Security Setup", "Backup Strategy", "Documentation"],
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: "Security Audit & Hardening",
      description: "Comprehensive security review and implementation of best practices",
      price: "$1,499",
      timeline: "1 week",
      includes: ["Security Audit", "Vulnerability Testing", "SSL Setup", "Security Headers", "Monitoring"],
    },
    {
      icon: <BarChart className="h-6 w-6 text-yellow-500" />,
      title: "Analytics & Reporting Setup",
      description: "Advanced analytics implementation with custom dashboards",
      price: "$999",
      timeline: "3-5 days",
      includes: ["Google Analytics", "Custom Events", "Conversion Tracking", "Reports Dashboard", "Training"],
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      title: "Performance Optimization",
      description: "Speed optimization and performance monitoring setup",
      price: "$1,299",
      timeline: "1 week",
      includes: ["Speed Optimization", "Image Optimization", "CDN Setup", "Caching Strategy", "Monitoring"],
    },
    {
      icon: <Headphones className="h-6 w-6 text-red-500" />,
      title: "Extended Support Package",
      description: "Additional support and maintenance beyond standard package",
      price: "$499/month",
      timeline: "Ongoing",
      includes: ["Priority Support", "Monthly Updates", "Performance Monitoring", "Backup Management", "Bug Fixes"],
    },
  ]

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <AnimatedBackground variant="dots" color="rgba(220, 38, 38, 0.05)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <AnimatedText
              text="Add-On Services"
              variant="heading"
              className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl gradient-text"
              animation="slide"
            />
            <AnimatedText
              text="Enhance your project with additional services and features"
              variant="paragraph"
              className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400 opacity-70"
              animation="fade"
              delay={0.3}
            />
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {addOns.map((addOn, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="h-full glassmorphic-card group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-muted/50 transition-transform duration-300 group-hover:scale-110">
                      {addOn.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg tracking-tight">{addOn.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs text-red-500 border-red-500">
                          {addOn.price}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {addOn.timeline}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="opacity-70 group-hover:opacity-100 transition-opacity">
                    {addOn.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Includes:</h4>
                    <ul className="space-y-1">
                      {addOn.includes.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-3"></div>
                          {item}
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
