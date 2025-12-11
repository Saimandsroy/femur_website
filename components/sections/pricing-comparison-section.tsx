"use client"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { Check, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PricingComparisonSection() {
  const features = [
    {
      category: "Design & Development",
      items: [
        { feature: "Custom Design", starter: true, professional: true, enterprise: true },
        { feature: "Responsive Layout", starter: true, professional: true, enterprise: true },
        { feature: "SEO Optimization", starter: "Basic", professional: "Advanced", enterprise: "Premium" },
        { feature: "Performance Optimization", starter: false, professional: true, enterprise: true },
        { feature: "Custom Animations", starter: false, professional: true, enterprise: true },
        { feature: "Advanced Integrations", starter: false, professional: "Limited", enterprise: true },
      ],
    },
    {
      category: "Features & Functionality",
      items: [
        { feature: "Contact Forms", starter: true, professional: true, enterprise: true },
        { feature: "E-commerce Integration", starter: false, professional: true, enterprise: true },
        { feature: "User Authentication", starter: false, professional: true, enterprise: true },
        { feature: "Admin Dashboard", starter: false, professional: "Basic", enterprise: "Advanced" },
        { feature: "API Development", starter: false, professional: false, enterprise: true },
        { feature: "Real-time Features", starter: false, professional: false, enterprise: true },
      ],
    },
    {
      category: "Support & Maintenance",
      items: [
        { feature: "Initial Support", starter: "3 months", professional: "6 months", enterprise: "12 months" },
        { feature: "Bug Fixes", starter: true, professional: true, enterprise: true },
        { feature: "Content Updates", starter: "Limited", professional: true, enterprise: true },
        { feature: "Priority Support", starter: false, professional: false, enterprise: true },
        { feature: "24/7 Monitoring", starter: false, professional: false, enterprise: true },
        { feature: "Performance Reports", starter: false, professional: "Monthly", enterprise: "Weekly" },
      ],
    },
  ]

  const renderFeatureValue = (value: any) => {
    if (value === true) {
      return <Check className="h-5 w-5 text-green-500 mx-auto" />
    }
    if (value === false) {
      return <X className="h-5 w-5 text-red-500 mx-auto" />
    }
    return <span className="text-sm text-center">{value}</span>
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <AnimatedText
              text="Package Comparison"
              variant="heading"
              className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl"
              animation="slide"
            />
            <AnimatedText
              text="Compare features across all our website development packages"
              variant="paragraph"
              className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400 opacity-70"
              animation="fade"
              delay={0.3}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <Card className="glassmorphic-card overflow-hidden">
            <CardHeader>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div></div>
                <CardTitle className="text-lg">Starter</CardTitle>
                <CardTitle className="text-lg text-red-500">Professional</CardTitle>
                <CardTitle className="text-lg">Enterprise</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {features.map((category, categoryIndex) => (
                <div key={categoryIndex} className="border-t border-border/50">
                  <div className="bg-muted/30 px-6 py-3">
                    <h3 className="font-semibold text-sm uppercase tracking-wide">{category.category}</h3>
                  </div>
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="grid grid-cols-4 gap-4 px-6 py-4 border-t border-border/30 hover:bg-muted/20 transition-colors"
                    >
                      <div className="font-medium text-sm">{item.feature}</div>
                      <div className="flex justify-center">{renderFeatureValue(item.starter)}</div>
                      <div className="flex justify-center">{renderFeatureValue(item.professional)}</div>
                      <div className="flex justify-center">{renderFeatureValue(item.enterprise)}</div>
                    </div>
                  ))}
                </div>
              ))}
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  )
}
