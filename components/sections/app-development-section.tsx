"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Tablet, Monitor, Layers } from "lucide-react"
import { AnimatedBackground } from "@/components/ui/animated-background"

export function AppDevelopmentSection() {
  const appServices = [
    {
      icon: <Smartphone className="h-8 w-8 text-blue-500" />,
      title: "Native iOS Development",
      description: "High-performance iOS apps built with Swift and optimized for the Apple ecosystem.",
      technologies: ["Swift", "SwiftUI", "Xcode", "Core Data"],
      benefits: ["App Store Optimization", "iOS-specific Features", "Superior Performance", "Native UI/UX"],
    },
    {
      icon: <Tablet className="h-8 w-8 text-green-500" />,
      title: "Native Android Development",
      description: "Robust Android applications using Kotlin and modern Android development practices.",
      technologies: ["Kotlin", "Jetpack Compose", "Android Studio", "Room"],
      benefits: ["Google Play Optimization", "Material Design", "Device Compatibility", "Performance Optimized"],
    },
    {
      icon: <Monitor className="h-8 w-8 text-purple-500" />,
      title: "Cross-Platform Development",
      description: "Build once, deploy everywhere with React Native and Flutter for maximum reach.",
      technologies: ["React Native", "Flutter", "Expo", "Dart"],
      benefits: ["Code Reusability", "Faster Development", "Cost Effective", "Consistent UI"],
    },
    {
      icon: <Layers className="h-8 w-8 text-orange-500" />,
      title: "Progressive Web Apps",
      description: "Web applications that work like native apps with offline capabilities and push notifications.",
      technologies: ["PWA", "Service Workers", "Web App Manifest", "IndexedDB"],
      benefits: ["Offline Functionality", "Push Notifications", "App-like Experience", "No App Store Required"],
    },
  ]

  return (
    <section id="app-development" className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <AnimatedBackground variant="waves" color="rgba(220, 38, 38, 0.05)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="Mobile App Development"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="Create powerful mobile experiences that engage users and drive business growth across all platforms."
                variant="paragraph"
                className="max-w-[800px] text-gray-500 md:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {appServices.map((service, index) => (
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
                    <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
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
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></div>
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
