"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

export function PortfolioFilterSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Web Development", "Mobile Apps", "E-commerce", "UI/UX Design"]

  return (
    <section className="w-full py-8">
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`${
                  activeFilter === filter
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-transparent hover:bg-red-500 hover:text-white"
                } transition-colors`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
