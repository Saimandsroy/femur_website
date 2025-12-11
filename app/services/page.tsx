import type { Metadata } from "next"
import { ServicesHeroSection } from "@/components/sections/services-hero-section"
import { ServicesOverviewSection } from "@/components/sections/services-overview-section"
import { WebDevelopmentSection } from "@/components/sections/web-development-section"
import { AppDevelopmentSection } from "@/components/sections/app-development-section"
import { DesignServicesSection } from "@/components/sections/design-services-section"
import { MaintenanceServicesSection } from "@/components/sections/maintenance-services-section"
import { ServiceProcessSection } from "@/components/sections/service-process-section"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Our Services | Web & App Development Agency",
  description:
    "Comprehensive web development, mobile app development, UI/UX design, and maintenance services. Transform your business with our expert development solutions.",
  keywords: [
    "web development services",
    "mobile app development",
    "UI UX design",
    "e-commerce development",
    "maintenance support",
    "custom software development",
  ],
}

export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center relative">
      <ServicesHeroSection />
      <ServicesOverviewSection />
      <WebDevelopmentSection />
      <AppDevelopmentSection />
      <DesignServicesSection />
      <MaintenanceServicesSection />
      <ServiceProcessSection />
      <CtaSection />
    </main>
  )
}
