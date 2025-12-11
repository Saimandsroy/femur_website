"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { Badge } from "@/components/ui/badge"
import { Globe, ShoppingCart, Database, Zap } from "lucide-react"

export function WebDevelopmentSection() {
  const webServices = [
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: "Static & Dynamic Websites",
      description: "Fast, responsive websites built with modern frameworks and optimized for performance.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      benefits: ["Lightning Fast", "SEO Optimized", "Mobile Responsive", "Secure"],
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-green-500" />,
      title: "E-commerce Platforms",
      description: "Complete online stores with payment processing, inventory management, and admin dashboards.",
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
      benefits: ["Payment Integration", "Inventory Management", "Order Tracking", "Analytics"],
    },
    {
      icon: <Database className="h-8 w-8 text-purple-500" />,
      title: "Content Management Systems",
      description: "Easy-to-manage websites with custom CMS solutions tailored to your content needs.",
      technologies: ["WordPress", "Strapi", "Sanity", "Contentful"],
      benefits: ["Easy Content Updates", "Multi-user Access", "Media Management", "SEO Tools"],
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Web Applications",
      description: "Complex web applications with advanced functionality and real-time features.",
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis"],
      benefits: ["Real-time Features", "Scalable Architecture", "API Integration", "Cloud Deployment"],
    },
  ]

  return (
    <section id="web-development" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="Website Development Services"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="From simple landing pages to complex web applications, we build websites that drive results."
                variant="paragraph"
                className="max-w-[800px] text-gray-500 md:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {webServices.map((service, index) => (
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
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-3"></div>
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
