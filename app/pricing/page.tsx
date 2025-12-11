import type { Metadata } from "next"
import { PricingHeroSection } from "@/components/sections/pricing-hero-section"
import { PricingPackagesSection } from "@/components/sections/pricing-packages-section"
import { PricingComparisonSection } from "@/components/sections/pricing-comparison-section"
import { PricingFaqSection } from "@/components/sections/pricing-faq-section"
import { PricingAddOnsSection } from "@/components/sections/pricing-add-ons-section"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Pricing | Web & App Development Packages",
  description:
    "Transparent pricing for web development, mobile app development, and UI/UX design services. Choose from our starter, professional, or enterprise packages.",
  keywords: [
    "web development pricing",
    "app development cost",
    "development packages",
    "website pricing",
    "mobile app pricing",
    "custom development rates",
  ],
}

export default function PricingPage() {
  return (
    <main className="flex flex-col items-center relative">
      <PricingHeroSection />
      <PricingPackagesSection />
      <PricingComparisonSection />
      <PricingAddOnsSection />
      <PricingFaqSection />
      <CtaSection />
    </main>
  )
}
