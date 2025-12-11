"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function PricingPackagesSection() {
  const websitePackages = [
    {
      name: "Website Starter",
      description: "Perfect for small businesses and personal websites",
      price: "$2,999",
      originalPrice: "$3,999",
      duration: "Complete Project",
      timeline: "2-3 weeks",
      features: [
        "Up to 5 pages",
        "Responsive design",
        "Contact form",
        "SEO optimization",
        "3 months support",
        "SSL certificate",
        "Google Analytics setup",
      ],
      popular: false,
      savings: "Save $1,000",
    },
    {
      name: "Website Professional",
      description: "Ideal for growing businesses and e-commerce",
      price: "$7,999",
      originalPrice: "$9,999",
      duration: "Complete Project",
      timeline: "4-6 weeks",
      features: [
        "Up to 15 pages",
        "Custom design",
        "E-commerce integration",
        "CMS integration",
        "Advanced SEO",
        "6 months support",
        "Payment gateway",
        "Analytics dashboard",
        "Performance optimization",
      ],
      popular: true,
      savings: "Save $2,000",
    },
    {
      name: "Website Enterprise",
      description: "For complex web applications and large businesses",
      price: "$15,999",
      originalPrice: "$19,999",
      duration: "Complete Project",
      timeline: "8-12 weeks",
      features: [
        "Unlimited pages",
        "Custom web application",
        "Advanced integrations",
        "Custom API development",
        "Database design",
        "12 months support",
        "DevOps & deployment",
        "Security implementation",
        "Scalable architecture",
        "Priority support",
      ],
      popular: false,
      savings: "Save $4,000",
    },
  ]

  const appPackages = [
    {
      name: "App Starter",
      description: "Simple mobile app for basic functionality",
      price: "$9,999",
      originalPrice: "$12,999",
      duration: "Complete Project",
      timeline: "6-8 weeks",
      features: [
        "Single platform (iOS or Android)",
        "Up to 10 screens",
        "Basic functionality",
        "App store submission",
        "3 months support",
        "Push notifications",
        "Analytics integration",
      ],
      popular: false,
      savings: "Save $3,000",
    },
    {
      name: "App Professional",
      description: "Cross-platform app with advanced features",
      price: "$19,999",
      originalPrice: "$24,999",
      duration: "Complete Project",
      timeline: "10-14 weeks",
      features: [
        "Cross-platform (iOS & Android)",
        "Up to 25 screens",
        "Advanced functionality",
        "Backend integration",
        "User authentication",
        "6 months support",
        "Push notifications",
        "In-app purchases",
        "Offline functionality",
      ],
      popular: true,
      savings: "Save $5,000",
    },
    {
      name: "App Enterprise",
      description: "Complex app with custom backend and integrations",
      price: "$39,999",
      originalPrice: "$49,999",
      duration: "Complete Project",
      timeline: "16-24 weeks",
      features: [
        "Cross-platform (iOS & Android)",
        "Unlimited screens",
        "Custom backend development",
        "Third-party integrations",
        "Advanced security",
        "12 months support",
        "Admin dashboard",
        "Real-time features",
        "Scalable architecture",
        "Priority support",
      ],
      popular: false,
      savings: "Save $10,000",
    },
  ]

  const PackageCard = ({ pkg, index }: { pkg: any; index: number }) => (
    <ScrollReveal key={index} delay={index * 0.1}>
      <Card className={`h-full flex flex-col glassmorphic-card relative ${pkg.popular ? "border-glow-red" : ""}`}>
        {pkg.popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-red-500 text-white px-4 py-1 flex items-center gap-1">
              <Star className="h-3 w-3" />
              Most Popular
            </Badge>
          </div>
        )}

        <CardHeader className="text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="text-xs text-green-600 border-green-600">
              {pkg.savings}
            </Badge>
            <CardTitle className="text-2xl tracking-tight">{pkg.name}</CardTitle>
            <CardDescription className="opacity-70">{pkg.description}</CardDescription>
          </div>

          <div className="space-y-2 pt-4">
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</span>
              <span className="text-4xl font-bold text-red-500">{pkg.price}</span>
            </div>
            <p className="text-sm text-muted-foreground">{pkg.duration}</p>
            <p className="text-sm font-medium text-blue-500">Timeline: {pkg.timeline}</p>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col">
          <ul className="space-y-3 mb-8 flex-1">
            {pkg.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          {pkg.popular ? (
            <AnimatedGradientBorder colors={["#dc2626", "#4b5563", "#dc2626", "#4b5563"]} borderWidth={1} duration={8}>
              <Button className="w-full bg-background border-0 text-foreground hover:text-white">Get Started</Button>
            </AnimatedGradientBorder>
          ) : (
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button className="w-full neumorphic-button">Get Started</Button>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </ScrollReveal>
  )

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-6 md:px-8">
        {/* Website Packages */}
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <AnimatedText
              text="Website Development Packages"
              variant="heading"
              className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl gradient-text"
              animation="slide"
            />
            <AnimatedText
              text="From simple landing pages to complex web applications"
              variant="paragraph"
              className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400 opacity-70"
              animation="fade"
              delay={0.3}
            />
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {websitePackages.map((pkg, index) => (
            <PackageCard key={`website-${index}`} pkg={pkg} index={index} />
          ))}
        </div>

        {/* Mobile App Packages */}
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <AnimatedText
              text="Mobile App Development Packages"
              variant="heading"
              className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl gradient-text"
              animation="slide"
            />
            <AnimatedText
              text="Native and cross-platform mobile applications"
              variant="paragraph"
              className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400 opacity-70"
              animation="fade"
              delay={0.3}
            />
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {appPackages.map((pkg, index) => (
            <PackageCard key={`app-${index}`} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
