"use client"
import { useState } from "react"
import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Send, MessageSquare } from "lucide-react"
import { AnimatedBackground } from "@/components/ui/animated-background"

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    services: [] as string[],
    newsletter: false,
  })

  const projectTypes = [
    "Website Development",
    "Mobile App Development",
    "E-commerce Platform",
    "Web Application",
    "UI/UX Design",
    "Maintenance & Support",
    "Other",
  ]

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
    "Not sure yet",
  ]

  const timelineOptions = ["ASAP", "Within 1 month", "1-3 months", "3-6 months", "6+ months", "Just exploring"]

  const additionalServices = [
    "SEO Optimization",
    "Content Creation",
    "Digital Marketing",
    "Hosting Setup",
    "Analytics Setup",
    "Training & Documentation",
  ]

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: checked ? [...prev.services, service] : prev.services.filter((s) => s !== service),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <AnimatedBackground variant="dots" color="rgba(220, 38, 38, 0.05)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <AnimatedText
              text="Get Your Free Project Quote"
              variant="heading"
              className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl gradient-text"
              animation="slide"
            />
            <AnimatedText
              text="Tell us about your project and we'll provide a detailed quote within 24 hours"
              variant="paragraph"
              className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400 opacity-70"
              animation="fade"
              delay={0.3}
            />
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          <ScrollReveal delay={0.2}>
            <div className="lg:col-span-2">
              <Card className="glassmorphic-card">
                <CardHeader>
                  <CardTitle className="text-2xl tracking-tight">Project Details</CardTitle>
                  <CardDescription>The more details you provide, the more accurate our quote will be</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Project Type *</Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your project type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Budget Range</Label>
                        <RadioGroup
                          value={formData.budget}
                          onValueChange={(value) => setFormData({ ...formData, budget: value })}
                        >
                          {budgetRanges.map((range) => (
                            <div key={range} className="flex items-center space-x-2">
                              <RadioGroupItem value={range} id={range} />
                              <Label htmlFor={range} className="text-sm">
                                {range}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label>Timeline</Label>
                        <RadioGroup
                          value={formData.timeline}
                          onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                        >
                          {timelineOptions.map((timeline) => (
                            <div key={timeline} className="flex items-center space-x-2">
                              <RadioGroupItem value={timeline} id={timeline} />
                              <Label htmlFor={timeline} className="text-sm">
                                {timeline}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Additional Services</Label>
                      <div className="grid gap-2 md:grid-cols-2">
                        {additionalServices.map((service) => (
                          <div key={service} className="flex items-center space-x-2">
                            <Checkbox
                              id={service}
                              checked={formData.services.includes(service)}
                              onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                            />
                            <Label htmlFor={service} className="text-sm">
                              {service}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Description *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        className="min-h-[120px]"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Subscribe to our newsletter for development tips and updates
                      </Label>
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-red-500 hover:bg-red-600">
                      <Send className="h-4 w-4 mr-2" />
                      Send Project Details
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="space-y-6">
              <Card className="glassmorphic-card">
                <CardHeader>
                  <CardTitle className="text-xl tracking-tight flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-green-500" />
                    Quick Questions?
                  </CardTitle>
                  <CardDescription>Get instant answers to common questions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Response Time:</p>
                    <Badge variant="secondary" className="bg-green-500/10 text-green-500">
                      Usually within 2-4 hours
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Best for:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Quick project questions</li>
                      <li>• Pricing inquiries</li>
                      <li>• Timeline estimates</li>
                      <li>• Technical feasibility</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="glassmorphic-card border-glow-red">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Free Consultation Includes:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Project scope discussion</li>
                    <li>• Technology recommendations</li>
                    <li>• Timeline & budget estimate</li>
                    <li>• Next steps planning</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
