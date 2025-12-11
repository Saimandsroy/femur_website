"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, MessageSquare, GitBranch, TestTube, Cloud } from "lucide-react"
import { AnimatedBackground } from "@/components/ui/animated-background"

export function ProcessToolsSection() {
  const toolCategories = [
    {
      icon: <Code className="h-6 w-6 text-blue-500" />,
      category: "Development",
      description: "Modern development tools and frameworks",
      tools: ["VS Code", "Git", "Docker", "Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: <Palette className="h-6 w-6 text-purple-500" />,
      category: "Design",
      description: "Professional design and prototyping tools",
      tools: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Zeplin"],
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-green-500" />,
      category: "Communication",
      description: "Tools for seamless client collaboration",
      tools: ["Slack", "Discord", "Zoom", "Google Meet", "Loom", "Notion"],
    },
    {
      icon: <GitBranch className="h-6 w-6 text-orange-500" />,
      category: "Version Control",
      description: "Code management and collaboration",
      tools: ["GitHub", "GitLab", "Bitbucket", "Git Flow"],
    },
    {
      icon: <TestTube className="h-6 w-6 text-red-500" />,
      category: "Testing",
      description: "Quality assurance and testing tools",
      tools: ["Jest", "Cypress", "Playwright", "Postman", "BrowserStack"],
    },
    {
      icon: <Cloud className="h-6 w-6 text-yellow-500" />,
      category: "Deployment",
      description: "Cloud platforms and deployment tools",
      tools: ["Vercel", "AWS", "Netlify", "Heroku", "Docker", "GitHub Actions"],
    },
  ]

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <AnimatedBackground variant="grid" color="rgba(220, 38, 38, 0.03)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <AnimatedText
              text="Tools & Technologies"
              variant="heading"
              className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl"
              animation="slide"
            />
            <AnimatedText
              text="The modern tools and technologies we use to deliver exceptional results"
              variant="paragraph"
              className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400 opacity-70"
              animation="fade"
              delay={0.3}
            />
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {toolCategories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="h-full glassmorphic-card group">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-muted/50 transition-transform duration-300 group-hover:scale-110">
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg tracking-tight">{category.category}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="opacity-70 group-hover:opacity-100 transition-opacity">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tool}
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
