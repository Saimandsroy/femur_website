"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code, Smartphone } from "lucide-react"

import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* Cinematic Background Overlay - Translucent to show ThreeBackground */}
      <div className="absolute inset-0 bg-[#030303]/80 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/50 to-[#030303] z-0 pointer-events-none"></div>

      {/* Subtle Atmospheric Glow - Moving */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-[100%] pointer-events-none z-0 mix-blend-screen opacity-50 animate-pulse-slow"></div>

      <div className="container relative z-10 px-6 md:px-8 flex flex-col items-center text-center flex-grow justify-center">
        <motion.div
          className="max-w-5xl mx-auto space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Trust Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-indigo-500/10 ring-1 ring-white/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-zinc-300 tracking-wider uppercase">Engineering Partner for Market Leaders</span>
            </div>
          </motion.div>

          {/* Massive Headline */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tighter text-white leading-[1.1] md:leading-[1.1] drop-shadow-2xl">
              Building Software <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500">
                That Defines Industries.
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-light leading-relaxed tracking-wide">
              We design and engineer elite digital ecosystems. No shortcuts. <br className="hidden md:block" />
              Just precision code and breathtaking infrastructure for visionary brands.
            </p>
          </motion.div>

          {/* Authority Controls */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
          >
            {/* Primary "Obsidian" Button with Shimmer */}
            <Link
              href="https://cal.com/femurstudio/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden px-10 py-5 bg-white text-black font-bold text-lg rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center gap-3"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Partnership
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent z-0"></div>
            </Link>

            {/* Secondary "Ghost" Button */}
            <Link
              href="#portfolio"
              className="px-10 py-5 text-zinc-400 font-medium text-lg hover:text-white transition-colors duration-300 flex items-center gap-2 relative group"
            >
              Explore Case Studies
              <span className="absolute bottom-4 left-10 right-10 h-px bg-white/0 group-hover:bg-white/50 transition-all duration-300"></span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Established Authority Ticker - MOVED TO FLOW (mt-24) to avoid overlap */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1.0 }}
        className="relative z-10 w-full mt-24 md:mt-32 border-t border-white/5 pt-12"
      >
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-zinc-600 mb-8">
            Trusted by the world&apos;s most innovative teams
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale mix-blend-screen transition-opacity hover:opacity-100 duration-500">
            {/* Premium Minimal Text Logos */}
            <span className="text-xl md:text-2xl font-bold font-heading text-white tracking-tight">ORACLE</span>
            <span className="text-xl md:text-2xl font-bold font-heading text-white tracking-tight">stripe</span>
            <span className="text-xl md:text-2xl font-bold font-heading text-white tracking-tight">Segment</span>
            <span className="text-xl md:text-2xl font-bold font-heading text-white tracking-tight">Linear</span>
            <span className="text-xl md:text-2xl font-bold font-heading text-white tracking-tight hidden md:block">Vercel</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
