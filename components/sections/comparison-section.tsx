"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedText } from "@/components/ui/animated-text";
import { Check, X } from "lucide-react";

export function ComparisonSection() {
    return (
        <section id="comparison" className="relative w-full py-24 bg-muted/20">
            <div className="container px-4 md:px-8">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <AnimatedText
                            text="Why Choose Femur Studio?"
                            variant="heading"
                            className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text mb-6"
                            animation="slide"
                        />
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            See how we stack up against traditional freelancers and big agencies.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
                    <div className="min-w-[800px] grid grid-cols-4 gap-4 md:gap-8">
                        {/* Headers */}
                        <div className="col-span-1 p-6 flex items-end">
                            <span className="font-bold text-zinc-500 uppercase tracking-widest text-sm">Comparison</span>
                        </div>
                        <div className="col-span-1 p-6 text-center border-b border-white/10">
                            <h3 className="font-bold text-zinc-400">Freelancers</h3>
                        </div>
                        <div className="col-span-1 p-6 text-center border-b border-indigo-500/50 bg-indigo-500/5 rounded-t-xl relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full shadow-lg shadow-indigo-500/20">
                                Recommended
                            </div>
                            <h3 className="font-bold text-indigo-400 text-xl">Femur Studio</h3>
                        </div>
                        <div className="col-span-1 p-6 text-center border-b border-white/10">
                            <h3 className="font-bold text-zinc-400">Big Agencies</h3>
                        </div>

                        {/* Row 1: Quality */}
                        <div className="col-span-1 p-6 flex items-center">
                            <span className="font-medium text-white">Design Quality</span>
                        </div>
                        <div className="col-span-1 p-6 flex justify-center items-center text-zinc-500 bg-white/[0.02] rounded-lg">
                            Inconsistent
                        </div>
                        <div className="col-span-1 p-6 flex justify-center items-center bg-indigo-500/5 border-x border-indigo-500/10">
                            <div className="flex items-center gap-2 text-white font-bold">
                                <Check className="w-5 h-5 text-green-400" />
                                <span>World Class</span>
                            </div>
                        </div>
                        <div className="col-span-1 p-6 flex justify-center items-center text-zinc-500 bg-white/[0.02] rounded-lg">
                            Good
                        </div>

                        {/* Row 2: Integration */}
                        <div className="col-span-1 p-6 flex items-center">
                            <span className="font-medium text-white">Full Integration</span>
                        </div>
                        <div className="col-span-1 p-6 flex justify-center items-center text-zinc-500 bg-white/[0.02] rounded-lg">
                            <X className="w-5 h-5 text-red-400/50" />
                        </div>
                        <div className="col-span-1 p-6 flex justify-center items-center bg-indigo-500/5 border-x border-indigo-500/10">
                            <div className="flex items-center gap-2 text-white font-bold">
                                <Check className="w-5 h-5 text-green-400" />
                                <span>Design + Code + AI</span>
                            </div>
                        </div>
                        <div className="col-span-1 p-6 flex justify-center items-center text-zinc-500 bg-white/[0.02] rounded-lg">
                            <Check className="w-5 h-5 text-green-400/50" />
                        </div>

                        {/* Row 3: Speed */}
                        <div className="col-span-1 p-6 flex items-center">
                            <span className="font-medium text-white">Delivery Speed</span>
                        </div>
                        <div className="col-span-1 p-6 flex justify-center items-center text-zinc-500 bg-white/[0.02] rounded-lg">
                            Slow
                        </div>
                        <div className="col-span-1 p-6 flex justify-center items-center bg-indigo-500/5 border-x border-indigo-500/10">
                            <div className="flex items-center gap-2 text-white font-bold">
                                <Check className="w-5 h-5 text-green-400" />
                                <span>Lightning Fast</span>
                            </div>
                        </div>
                        <div className="col-span-1 p-6 flex justify-center items-center text-zinc-500 bg-white/[0.02] rounded-lg">
                            Slow (Bureaucracy)
                        </div>

                        {/* Row 4: Pricing */}
                        <div className="col-span-1 p-6 flex items-center">
                            <span className="font-medium text-white">Cost</span>
                        </div>
                        <div className="col-span-1 p-6 flex justify-center items-center text-zinc-500 bg-white/[0.02] rounded-lg">
                            Varies
                        </div>
                        <div className="col-span-1 p-6 flex justify-center items-center bg-indigo-500/5 border-x border-b border-indigo-500/10 rounded-b-xl">
                            <div className="flex items-center gap-2 text-white font-bold">
                                <Check className="w-5 h-5 text-green-400" />
                                <span>Transparent & Fair</span>
                            </div>
                        </div>
                        <div className="col-span-1 p-6 flex justify-center items-center text-zinc-500 bg-white/[0.02] rounded-lg">
                            $$$$$ (Expensive)
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
