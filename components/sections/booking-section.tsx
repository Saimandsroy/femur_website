"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Calendar, Clock, Users, CheckCircle } from "lucide-react"
import Cal from "@calcom/embed-react"

export function BookingSection() {
  return (
    <section id="booking" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">
                Schedule Your Free Consultation
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70">
                Ready to bring your project to life? Book a free 30-minute consultation to discuss your requirements and
                get a custom quote.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-4xl py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <ScrollReveal delay={0.1}>
              <Card className="text-center glassmorphic-card">
                <CardHeader className="pb-2">
                  <Calendar className="h-8 w-8 mx-auto text-primary" />
                  <CardTitle className="text-lg">Flexible Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Choose from available time slots that work for you</p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="text-center glassmorphic-card">
                <CardHeader className="pb-2">
                  <Clock className="h-8 w-8 mx-auto text-primary" />
                  <CardTitle className="text-lg">30 Minutes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Focused discussion about your project needs</p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="text-center glassmorphic-card">
                <CardHeader className="pb-2">
                  <Users className="h-8 w-8 mx-auto text-primary" />
                  <CardTitle className="text-lg">Expert Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Meet with our experienced developers</p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Card className="text-center glassmorphic-card">
                <CardHeader className="pb-2">
                  <CheckCircle className="h-8 w-8 mx-auto text-primary" />
                  <CardTitle className="text-lg">Free Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Get a detailed project estimate</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.5}>
            <Card className="glassmorphic-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Book Your Consultation</CardTitle>
                <CardDescription>
                  Select a convenient time slot and we'll discuss your project requirements
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-6">
                <div className="w-full max-w-2xl">
                  <Cal
                    calLink="femurstudio/30min"
                    style={{ width: "100%", height: "600px" }}
                    config={{ layout: "month_view" }}
                  />
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  No commitment required • Free consultation • Response within 24 hours
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
