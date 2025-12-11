"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, MessageCircle, Linkedin, Twitter, Github } from "lucide-react"

export function ContactInfoSection() {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-red-500" />,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "hello@youragency.com",
      action: "Send Email",
      href: "mailto:hello@youragency.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-500" />,
      title: "Call Us",
      description: "Speak directly with our team during business hours",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
      href: "tel:+15551234567",
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-green-500" />,
      title: "Live Chat",
      description: "Get instant answers to your questions",
      contact: "Available 9 AM - 6 PM EST",
      action: "Start Chat",
      href: "#",
    },
  ]

  const businessInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-purple-500" />,
      label: "Office Location",
      value: "123 Tech Street, San Francisco, CA 94105",
    },
    {
      icon: <Clock className="h-5 w-5 text-yellow-500" />,
      label: "Business Hours",
      value: "Monday - Friday: 9 AM - 6 PM EST",
    },
  ]

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "#" },
    { icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "#" },
    { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "#" },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <AnimatedText
              text="Multiple Ways to Reach Us"
              variant="heading"
              className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl"
              animation="slide"
            />
            <AnimatedText
              text="Choose the contact method that works best for you"
              variant="paragraph"
              className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400 opacity-70"
              animation="fade"
              delay={0.3}
            />
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {contactMethods.map((method, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="h-full glassmorphic-card group text-center">
                <CardHeader>
                  <div className="p-3 rounded-xl w-fit mx-auto bg-muted/50 transition-transform duration-300 group-hover:scale-110">
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl tracking-tight">{method.title}</CardTitle>
                  <CardDescription className="opacity-70 group-hover:opacity-100 transition-opacity">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-medium text-lg">{method.contact}</p>
                  <Button className="w-full bg-transparent" variant="outline" asChild>
                    <a href={method.href}>{method.action}</a>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <Card className="glassmorphic-card">
            <CardContent className="p-8">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-heading font-semibold tracking-tight">Business Information</h3>
                  <div className="space-y-4">
                    {businessInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-muted/50">{info.icon}</div>
                        <div>
                          <p className="font-medium">{info.label}</p>
                          <p className="text-muted-foreground opacity-70">{info.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-heading font-semibold tracking-tight">Follow Us</h3>
                  <p className="text-muted-foreground opacity-70">
                    Stay updated with our latest projects, development tips, and industry insights.
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <Button key={index} size="sm" variant="outline" asChild>
                        <a href={social.href} className="flex items-center gap-2">
                          {social.icon}
                          {social.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  )
}
