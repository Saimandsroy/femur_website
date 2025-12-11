"use client"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { MapPin } from "lucide-react"
import { AnimatedBackground } from "@/components/ui/animated-background"

export function ContactMapSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <AnimatedBackground variant="waves" color="rgba(220, 38, 38, 0.05)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <AnimatedText
              text="Visit Our Office"
              variant="heading"
              className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl gradient-text"
              animation="slide"
            />
            <AnimatedText
              text="Located in the heart of San Francisco's tech district"
              variant="paragraph"
              className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400 opacity-70"
              animation="fade"
              delay={0.3}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <Card className="glassmorphic-card overflow-hidden">
            <CardContent className="p-0">
              <div className="grid gap-0 lg:grid-cols-2">
                <div className="p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-500/10">
                      <MapPin className="h-6 w-6 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold tracking-tight">Our Location</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Address</h4>
                      <p className="text-muted-foreground">
                        123 Tech Street
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Getting Here</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 2 blocks from Montgomery BART station</li>
                        <li>• Street parking available</li>
                        <li>• Visitor parking in building garage</li>
                        <li>• Accessible entrance on Tech Street</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Office Hours</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday - Sunday: Closed</p>
                        <p className="text-xs mt-2">* Appointments available outside business hours by request</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 min-h-[400px] flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="h-16 w-16 text-red-500 mx-auto" />
                    <div>
                      <h4 className="font-semibold text-lg">Interactive Map</h4>
                      <p className="text-muted-foreground text-sm">
                        Map integration would be implemented here
                        <br />
                        (Google Maps, Mapbox, etc.)
                      </p>
                    </div>
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
