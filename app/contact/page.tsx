import type { Metadata } from "next"
import { ContactHeroSection } from "@/components/sections/contact-hero-section"
import { ContactFormSection } from "@/components/sections/contact-form-section"
import { ContactInfoSection } from "@/components/sections/contact-info-section"
import { ContactFaqSection } from "@/components/sections/contact-faq-section"
import { ContactMapSection } from "@/components/sections/contact-map-section"

export const metadata: Metadata = {
  title: "Contact Us | Get Your Free Project Quote",
  description:
    "Ready to start your project? Contact our web and app development team for a free consultation and quote. Multiple ways to reach us including phone, email, and online booking.",
  keywords: [
    "contact web developer",
    "free project quote",
    "web development consultation",
    "app development contact",
    "project inquiry",
    "development services contact",
  ],
}

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center relative">
      <ContactHeroSection />
      <ContactFormSection />
      <ContactInfoSection />
      <ContactMapSection />
      <ContactFaqSection />
    </main>
  )
}
