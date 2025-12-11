"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Palette, Database, Cloud, Shield } from "lucide-react"

export function AboutExpertiseSection() {
  const expertiseAreas = [
    {
      icon: <Code className="h-8 w-8 text-red-500" />,
      title: "Frontend Development",
      description: "Modern, responsive web applications using the latest technologies and best practices.",
      technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: <Database className="h-8 w-8 text-blue-500" />,
      title: "Backend Development",
      description: "Scalable server-side solutions with robust APIs and database architecture.",
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-500" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android platforms.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-500" />,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging digital experiences.",
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
    },
    {
      icon: <Cloud className="h-8 w-8 text-orange-500" />,
      title: "Cloud & DevOps",
      description: "Deployment, scaling, and maintenance of applications in cloud environments.",
      technologies: ["AWS", "Vercel", "Docker", "CI/CD", "Monitoring"],
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-500" />,
      title: "Security & Performance",
      description: "Implementing security best practices and optimizing application performance.",
      technologies: ["Authentication", "Encryption", "Performance Optimization", "SEO"],
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="Our Expertise"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl"
                animation="slide"
              />
              <AnimatedText
                text="We specialize in full-stack development with deep expertise across modern technologies and frameworks."
                variant="paragraph"
                className="max-w-[800px] text-gray-500 md:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((area, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="h-full glassmorphic-card group">
                <CardHeader>
                  <div className="p-2 rounded-xl w-fit bg-muted/50 transition-transform duration-300 group-hover:scale-110">
                    {area.icon}
                  </div>
                  <CardTitle className="mt-4 tracking-tight">{area.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
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
