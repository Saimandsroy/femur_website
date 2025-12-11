"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const services = [
    {
        title: "iOS Development",
        description: "Swift • SwiftUI • App Store",
        image: "/images/project-mobile.png",
        accent: "border-blue-500/30",
        color: "from-blue-500 to-indigo-500"
    },
    {
        title: "Android Apps",
        description: "Kotlin • Jetpack • Play Store",
        image: "/images/project-mobile.png",
        accent: "border-green-500/30",
        color: "from-green-500 to-emerald-500"

    },
    {
        title: "Cross-Platform",
        description: "React Native • Flutter • Expo",
        image: "/images/project-mobile.png",
        accent: "border-purple-500/30",
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Web Applications",
        description: "Next.js • React • PWA",
        image: "/images/project-ecommerce.png",
        accent: "border-indigo-500/30",
        color: "from-indigo-500 to-violet-500"
    }
];

export function ProcessSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const ctx = gsap.context(() => {
            // Robust Marquee Animation
            const marquee = gsap.to(trackRef.current, {
                xPercent: -50,
                ease: "none",
                duration: 40,
                repeat: -1
            });

            const track = trackRef.current;
            if (track) {
                track.addEventListener("mouseenter", () => marquee.pause());
                track.addEventListener("mouseleave", () => marquee.play());
            }

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Duplicate services exactly once for seamless loop
    const marqueeServices = [...services, ...services, ...services];

    return (
        <section id="process" ref={sectionRef} className="py-24 min-h-[800px] bg-[#0a0a0a]/50 relative overflow-hidden flex flex-col justify-center">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 mb-16 text-center relative z-10">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20">
                    Expertise
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight mb-4">Development Services</h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
                    Specialized engineering for high-impact mobile and web applications.
                </p>
            </div>

            {/* Infinite Marquee Container */}
            <div className="w-full overflow-hidden">
                <div
                    ref={trackRef}
                    className="flex gap-8 w-max pl-4"
                >
                    {marqueeServices.map((service, index) => (
                        <div
                            key={`${service.title}-${index}`}
                            className="service-card flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-[450px] group relative bg-[#050505] rounded-[2rem] border border-white/10 overflow-hidden cursor-pointer hover:border-white/30 transition-all duration-700 shadow-xl"
                        >
                            {/* Ambient Light */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />

                            {/* Image Container */}
                            <div className="absolute inset-0 flex items-center justify-center pb-20 group-hover:scale-110 transition-transform duration-700 ease-out">
                                <div className="relative w-40 h-40">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                                    />
                                </div>
                            </div>

                            {/* Content - Bottom */}
                            <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
                                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-indigo-300 transition-colors">{service.title}</h3>
                                <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-transparent mb-4 rounded-full" />
                                <p className="text-sm text-slate-400 font-medium tracking-wide">
                                    {service.description}
                                </p>
                            </div>

                            {/* Hover Overlay */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-white/[0.02] border-2 ${service.accent.replace('border-', 'border-')}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
