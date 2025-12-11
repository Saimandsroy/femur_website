import type { Metadata } from "next"
import { PortfolioHeroSection } from "@/components/sections/portfolio-hero-section"
import { PortfolioFilterSection } from "@/components/sections/portfolio-filter-section"
import { PortfolioGridSection } from "@/components/sections/portfolio-grid-section"
import { PortfolioCaseStudiesSection } from "@/components/sections/portfolio-case-studies-section"
import { PortfolioStatsSection } from "@/components/sections/portfolio-stats-section"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Portfolio | Our Web & App Development Projects",
  description:
    "Explore our portfolio of successful web development, mobile app development, and UI/UX design projects. See how we've helped businesses achieve their digital goals.",
  keywords: [
    "portfolio",
    "web development projects",
    "mobile app portfolio",
    "case studies",
    "development work",
    "client projects",
  ],
}

export default function PortfolioPage() {
  return (
    <main className="flex flex-col items-center relative">
      <PortfolioHeroSection />
      <PortfolioStatsSection />
      <PortfolioFilterSection />
      <PortfolioGridSection />
      <PortfolioCaseStudiesSection />
      <CtaSection />
    </main>
  )
}
