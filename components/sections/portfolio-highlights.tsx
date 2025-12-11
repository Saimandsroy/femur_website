"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { ArrowUpRight } from 'lucide-react';

export function PortfolioHighlights() {
  const projects = [
    {
      title: "The Oak Bistro",
      description: "Luxury Dining Experience & Reservations",
      image: "/images/oak-bistro.png",
      link: "https://www.theoakbistro.co.uk/",
      accent: "from-amber-600 to-yellow-500",
      category: "Hospitality"
    },
    {
      title: "Aurora Estates",
      description: "Premium Australian Real Estate Portfolio",
      image: "/images/aus-estate.png",
      link: "#", // User didn't provide link, using placeholder or could ask. Assuming placeholder for now.
      accent: "from-blue-600 to-sky-400",
      category: "Real Estate"
    },
    {
      title: "Bijin Salon",
      description: "Elite Beauty & Wellness Platform",
      image: "/images/bijin-salon.png",
      link: "https://www.bijinsalon.com/",
      accent: "from-pink-400 to-rose-400",
      category: "Beauty & Wellness"
    },
    {
      title: "Schmuckwerk",
      description: "Luxury Jewelry E-Commerce Boutique",
      image: "/images/schmuckwerk.png",
      link: "https://www.schmuckwerk-shop.com/",
      accent: "from-emerald-400 to-teal-500",
      category: "E-Commerce"
    },
    {
      title: "Awadhi Homes",
      description: "Premium Interior Design Platform",
      image: "/images/project-ecommerce.png",
      link: "https://awadhihomes.com",
      accent: "from-orange-500 to-red-500",
      category: "Real Estate"
    },
    {
      title: "Servox Store",
      description: "High-Performance Marketplace",
      image: "/images/project-mobile.png",
      link: "#",
      accent: "from-indigo-500 to-purple-600",
      category: "E-Commerce"
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative z-10 bg-black/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <AnimatedText
            text="Explore Our Work"
            variant="heading"
            className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight mb-6"
          />
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Deep dive into our specialized portfolios across development, automation, and marketing.
          </p>
        </div>
      </div>

      {/* Infinite Loop Ribbon - Using CSS Grid for proper spacing */}
      <div className="relative w-full overflow-hidden py-10">
        <div className="flex gap-6 animate-[marquee_60s_linear_infinite] hover:[animation-play-state:paused]">
          {/* First set of projects */}
          {projects.map((project, index) => (
            <a
              key={`first-${index}`}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card relative flex-shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] h-[450px] sm:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 bg-[#050505] cursor-pointer hover:border-white/30 transition-all duration-500 group shadow-2xl shadow-black/50"
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end items-start z-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
                  {/* Category Tag (Ribbon-like) */}
                  <span className="inline-block px-3 py-1 mb-4 text-[10px] md:text-xs font-bold tracking-widest text-white uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
                    {project.category}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 drop-shadow-md leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm font-medium mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Animated Button */}
                  <div className="w-full h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between px-4 group-hover:bg-white/10 transition-colors">
                    <span className="text-sm font-semibold text-white">View Project</span>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${project.accent} flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform`}>
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}

          {/* Duplicate set for seamless loop */}
          {projects.map((project, index) => (
            <a
              key={`second-${index}`}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card relative flex-shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] h-[450px] sm:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 bg-[#050505] cursor-pointer hover:border-white/30 transition-all duration-500 group shadow-2xl shadow-black/50"
              aria-hidden="true"
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end items-start z-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
                  {/* Category Tag (Ribbon-like) */}
                  <span className="inline-block px-3 py-1 mb-4 text-[10px] md:text-xs font-bold tracking-widest text-white uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
                    {project.category}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 drop-shadow-md leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm font-medium mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Animated Button */}
                  <div className="w-full h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between px-4 group-hover:bg-white/10 transition-colors">
                    <span className="text-sm font-semibold text-white">View Project</span>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${project.accent} flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform`}>
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="/portfolio"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full overflow-hidden hover:bg-white/10 transition-all duration-300"
        >
          <span className="relative z-10 text-white font-semibold tracking-wide">Explore All Projects</span>
          <ArrowUpRight className="relative z-10 w-5 h-5 text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
        </a>
      </div>

    </section >
  );
}
