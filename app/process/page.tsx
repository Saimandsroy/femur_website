import type { Metadata } from "next"
import { ProcessHeroSection } from "@/components/sections/process-hero-section"
import { ProcessOverviewSection } from "@/components/sections/process-overview-section"
import { ProcessDetailedStepsSection } from "@/components/sections/process-detailed-steps-section"
import { ProcessMethodologySection } from "@/components/sections/process-methodology-section"
import { ProcessTimelineSection } from "@/components/sections/process-timeline-section"
import { ProcessToolsSection } from "@/components/sections/process-tools-section"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Our Development Process | How We Work",
  description:
    "Learn about our proven development process from consultation to launch. Discover our methodology, tools, and approach to delivering successful web and mobile projects.",
  keywords: [
    "development process",
    "project methodology",
    "web development workflow",
    "app development process",
    "agile development",
    "project management",
  ],
}

export default function ProcessPage() {
  return (
    <main className="flex flex-col items-center relative">
      <ProcessHeroSection />
      <ProcessOverviewSection />
      <ProcessDetailedStepsSection />
      <ProcessMethodologySection />
      <ProcessTimelineSection />
      <ProcessToolsSection />
      <CtaSection />
    </main>
  )
}
