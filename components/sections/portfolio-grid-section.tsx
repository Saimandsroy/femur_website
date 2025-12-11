"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"
import { motion } from "framer-motion"

export function PortfolioGridSection() {
  const projects = [
    {
      title: "TechCorp E-commerce Platform",
      description:
        "Complete e-commerce solution with payment integration, inventory management, and analytics dashboard.",
      image: "/placeholder.svg?height=300&width=500&text=E-commerce+Platform",
      category: "E-commerce",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "HealthTracker Mobile App",
      description: "Cross-platform health tracking app with wearable integration and telemedicine features.",
      image: "/placeholder.svg?height=300&width=500&text=Health+App",
      category: "Mobile Apps",
      technologies: ["React Native", "Firebase", "HealthKit", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "FinanceFlow SaaS Dashboard",
      description: "Financial analytics dashboard with real-time data visualization and reporting tools.",
      image: "/placeholder.svg?height=300&width=500&text=Finance+Dashboard",
      category: "Web Development",
      technologies: ["React", "D3.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "RestaurantPro Management System",
      description: "Complete restaurant management system with POS, inventory, and staff scheduling.",
      image: "/placeholder.svg?height=300&width=500&text=Restaurant+System",
      category: "Web Development",
      technologies: ["Vue.js", "Laravel", "MySQL", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "EduLearn Learning Platform",
      description: "Online learning platform with video streaming, progress tracking, and interactive quizzes.",
      image: "/placeholder.svg?height=300&width=500&text=Learning+Platform",
      category: "Web Development",
      technologies: ["Next.js", "Prisma", "AWS", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "FitnessPal Workout App",
      description: "Comprehensive fitness app with workout plans, progress tracking, and social features.",
      image: "/placeholder.svg?height=300&width=500&text=Fitness+App",
      category: "Mobile Apps",
      technologies: ["Flutter", "Firebase", "Dart", "Google Fit"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-6 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card
                  className={`h-full glassmorphic-card group overflow-hidden ${
                    project.featured ? "border-glow-red lg:col-span-1" : ""
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="secondary" className="bg-red-500/90 text-white">
                        {project.category}
                      </Badge>
                      {project.featured && (
                        <Badge variant="secondary" className="bg-yellow-500/90 text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.liveUrl} className="flex items-center">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.githubUrl}>
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="tracking-tight group-hover:text-red-500 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="opacity-70 group-hover:opacity-100 transition-opacity">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                        <a href={project.liveUrl} className="flex items-center justify-center">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl}>
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
