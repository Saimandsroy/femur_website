"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutTeamSection() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Lead Full-Stack Developer",
      bio: "Passionate about creating scalable web applications with 8+ years of experience in modern JavaScript frameworks.",
      avatar: "AJ",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Sarah Chen",
      role: "Mobile App Developer",
      bio: "Specializes in cross-platform mobile development with expertise in React Native and Flutter.",
      avatar: "SC",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Michael Rodriguez",
      role: "UI/UX Designer",
      bio: "Creates beautiful and intuitive user experiences with a focus on user-centered design principles.",
      avatar: "MR",
      skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
  ]

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="Meet Our Team"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl"
                animation="slide"
              />
              <AnimatedText
                text="Our talented team of developers and designers are passionate about creating exceptional digital experiences."
                variant="paragraph"
                className="max-w-[800px] text-gray-500 md:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="h-full glassmorphic-card group text-center">
                <CardContent className="p-6 space-y-4">
                  <Avatar className="w-24 h-24 mx-auto glassmorphic-avatar border-2 border-transparent group-hover:border-red-500 transition-colors">
                    <AvatarImage
                      src={`/placeholder_svg.png?height=96&width=96&text=${member.avatar}`}
                      alt={member.name}
                    />
                    <AvatarFallback className="text-2xl">{member.avatar}</AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className="text-xl font-heading font-semibold tracking-tight group-hover:text-red-500 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-red-500 font-medium">{member.role}</p>
                  </div>

                  <p className="text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 justify-center">
                    <Button size="sm" variant="outline" asChild>
                      <a href={member.social.github}>
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={member.social.linkedin}>
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={member.social.twitter}>
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
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
