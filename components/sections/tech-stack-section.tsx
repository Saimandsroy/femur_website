"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Code, Database, Globe, Layout, Server, Smartphone, Cpu, Cloud, Lock, Zap } from "lucide-react";

export function TechStackSection() {
    const technologies = [
        { name: "React", icon: <Globe className="w-8 h-8 text-cyan-400" /> },
        { name: "Next.js", icon: <Layout className="w-8 h-8 text-white" /> },
        { name: "TypeScript", icon: <Code className="w-8 h-8 text-blue-400" /> },
        { name: "Node.js", icon: <Server className="w-8 h-8 text-green-500" /> },
        { name: "PostgreSQL", icon: <Database className="w-8 h-8 text-blue-300" /> },
        { name: "Tailwind", icon: <Zap className="w-8 h-8 text-cyan-300" /> },
        { name: "React Native", icon: <Smartphone className="w-8 h-8 text-purple-400" /> },
        { name: "AWS", icon: <Cloud className="w-8 h-8 text-orange-400" /> },
        { name: "Security", icon: <Lock className="w-8 h-8 text-red-400" /> },
        { name: "AI/ML", icon: <Cpu className="w-8 h-8 text-indigo-400" /> },
    ];

    return (
        <section id="tech-stack" className="relative w-full py-20 overflow-hidden bg-black/20">
            <AnimatedBackground variant="grid" color="rgba(99, 102, 241, 0.05)" />

            <div className="container px-6 md:px-8 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <AnimatedText
                            text="Powered by Modern Engineering"
                            variant="heading"
                            className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl text-white mb-4"
                            animation="slide"
                        />
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            Built on the bedrock of scalable, high-performance technologies.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Marquee Container */}
                <div className="relative flex overflow-x-hidden group">
                    <div className="animate-marquee flex gap-12 items-center whitespace-nowrap py-4">
                        {/* First Set */}
                        {technologies.map((tech, i) => (
                            <div key={i} className="flex flex-col items-center gap-4 group/item min-w-[100px]">
                                <div className="project-card w-24 h-24 rounded-3xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-slate-400 group-hover/item:text-white group-hover/item:border-indigo-500/50 group-hover/item:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)] transition-all duration-500 relative overflow-hidden">
                                    {/* Inner Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                                    <div className="relative z-10 transform group-hover/item:scale-110 transition-transform duration-500">
                                        {tech.icon}
                                    </div>
                                </div>
                                <span className="text-sm font-semibold text-slate-500 group-hover/item:text-indigo-300 tracking-wide uppercase transition-colors">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="absolute top-0 animate-marquee2 flex gap-12 items-center whitespace-nowrap py-4">
                        {/* Duplicate Set for smooth loop */}
                        {technologies.map((tech, i) => (
                            <div key={`dup-${i}`} className="flex flex-col items-center gap-4 group/item min-w-[100px]">
                                <div className="project-card w-24 h-24 rounded-3xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-slate-400 group-hover/item:text-white group-hover/item:border-indigo-500/50 group-hover/item:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)] transition-all duration-500 relative overflow-hidden">
                                    {/* Inner Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                                    <div className="relative z-10 transform group-hover/item:scale-110 transition-transform duration-500">
                                        {tech.icon}
                                    </div>
                                </div>
                                <span className="text-sm font-semibold text-slate-500 group-hover/item:text-indigo-300 tracking-wide uppercase transition-colors">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
