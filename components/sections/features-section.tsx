"use client"
import { Code, Smartphone, Palette, Zap, Shield, Users } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GlowingTiltCard } from "@/components/ui/glowing-tilt-card"
import { ParallaxScroll } from "@/components/ui/parallax-scroll"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { ProgressCard } from "@/components/ui-library/cards/progress-card"

export function FeaturesSection() {
  const features = [
    {
      icon: <Code className="h-10 w-10 text-indigo-500" />,
      title: "Website Development",
      description: "Custom websites, e-commerce platforms, and web applications built with modern technologies.",
      progress: 100,
      borderClass: "border-glow-indigo",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-violet-500" />,
      title: "Mobile App Development",
      description: "Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter.",
      progress: 95,
      borderClass: "border-glow-violet",
    },
    {
      icon: <Palette className="h-10 w-10 text-fuchsia-500" />,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging experiences for your customers.",
      progress: 90,
      borderClass: "border-glow-fuchsia",
    },
    {
      icon: <Zap className="h-10 w-10 text-cyan-500" />,
      title: "Performance Optimization",
      description: "Lightning-fast websites and apps optimized for speed, SEO, and user experience.",
      progress: 95,
      borderClass: "border-glow-cyan",
    },
    {
      icon: <Shield className="h-10 w-10 text-sky-500" />,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and maintenance to keep your digital products running smoothly.",
      progress: 100,
      borderClass: "border-glow-sky",
    },
    {
      icon: <Users className="h-10 w-10 text-pink-500" />,
      title: "Consultation & Strategy",
      description: "Expert guidance on technology choices, project planning, and digital transformation.",
      progress: 92,
      borderClass: "border-glow-pink",
    },
  ]

  return (
    <section id="services" className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <AnimatedBackground variant="dots" color="rgba(220, 38, 38, 0.05)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="Our Development Services"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="We provide comprehensive web and mobile development solutions to help your business thrive in the digital world."
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <ParallaxScroll baseVelocity={0.1} direction="up" className="py-12">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlowingTiltCard>
                  <Card
                    className={`h-full glassmorphic-card border-none overflow-hidden group soft-glow ${feature.borderClass}`}
                  >
                    <CardHeader>
                      <div className="p-2 rounded-xl w-fit bg-muted/50 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        {feature.icon}
                      </div>
                      <CardTitle className="mt-4 tracking-tight relative">
                        {feature.title}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                        {feature.description}
                      </CardDescription>

                      <ProgressCard
                        title=""
                        progress={feature.progress}
                        total={100}
                        status={feature.progress === 100 ? "success" : "default"}
                        showPercentage
                        variant="minimal"
                        progressColor={feature.progress === 100 ? "bg-green-500" : "bg-indigo-500"}
                      />
                    </CardContent>
                  </Card>
                </GlowingTiltCard>
              </ScrollReveal>
            ))}
          </div>
        </ParallaxScroll>
      </div>
    </section>
  )
}
