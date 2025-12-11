import type { Metadata } from "next"
import { AboutHeroSection } from "@/components/sections/about-hero-section"
import { AboutStorySection } from "@/components/sections/about-story-section"
import { AboutExpertiseSection } from "@/components/sections/about-expertise-section"
import { AboutTeamSection } from "@/components/sections/about-team-section"
import { AboutValuesSection } from "@/components/sections/about-values-section"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "About Us | Professional Web & App Development Agency",
  description:
    "Learn about our story, mission, and expertise in full-stack web and mobile app development. Discover why businesses trust us with their digital transformation.",
  keywords: [
    "about us",
    "web development agency",
    "app development",
    "full-stack development",
    "digital transformation",
  ],
}

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center relative">
      <AboutHeroSection />
      <AboutStorySection />
      <AboutExpertiseSection />
      <AboutTeamSection />
      <AboutValuesSection />
      <CtaSection />
    </main>
  )
}
