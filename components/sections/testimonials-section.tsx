"use client";

import { useEffect, useRef } from 'react';
import { Star, Calendar } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, Awadhi Homes",
    image: "SJ",
    content: "Femur Studio completely transformed our digital presence. The 3D property visualization tool they built increased our engagement by 200%. Simply world-class engineering.",
    project: "Real Estate Tech",
    rating: 5,
    date: "Dec 15, 2024",
    color: "from-amber-500 to-orange-600",
    zIndex: 30
  },
  {
    name: "David Chen",
    role: "Founder, Incubator Online",
    image: "DC",
    content: "We needed a scalable platform for thousands of startups. The team delivered a robust, secure, and beautiful solution ahead of schedule. Their understanding of SaaS is unmatched.",
    project: "Platform Dev",
    rating: 5,
    date: "Nov 22, 2024",
    color: "from-blue-500 to-indigo-600",
    zIndex: 20
  },
  {
    name: "Elena Rodriguez",
    role: "Director, Servox Store",
    image: "ER",
    content: "Our e-commerce conversion rates doubled after the redesign. The attention to detail in UX and performance optimization is exactly what we were looking for. Highly recommended.",
    project: "E-commerce",
    rating: 5,
    date: "Oct 10, 2024",
    color: "from-emerald-500 to-teal-500",
    zIndex: 10
  }
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      gsap.fromTo(containerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 relative z-10 px-6 overflow-hidden min-h-[800px] flex flex-col justify-center bg-black/30">
      {/* Scoped Styles for Testimonial Stack - Using unique class names */}
      <style jsx>{`
                /* Desktop Expansion */
                @media (min-width: 1024px) {
                    .testimonial-stack-container:hover .testimonial-stack-card-0 {
                        transform: translateX(-110%) translateY(0) rotate(-4deg) scale(0.9) !important;
                        opacity: 1 !important;
                    }
                    .testimonial-stack-container:hover .testimonial-stack-card-1 {
                        transform: translateX(0) translateY(-20px) scale(1) !important;
                        opacity: 1 !important;
                        z-index: 50 !important;
                    }
                    .testimonial-stack-container:hover .testimonial-stack-card-2 {
                        transform: translateX(110%) translateY(0) rotate(4deg) scale(0.9) !important;
                        opacity: 1 !important;
                    }
                }
                
                /* Mobile/Tablet Vertical Expansion */
                @media (max-width: 1023px) {
                    .testimonial-stack-container:hover .testimonial-stack-card-0 { 
                        transform: translateY(-105%) scale(0.9) !important;
                        opacity: 1 !important;
                    }
                    .testimonial-stack-container:hover .testimonial-stack-card-1 {
                        transform: translateY(0) scale(1) !important;
                        z-index: 50 !important;
                        opacity: 1 !important;
                    }
                    .testimonial-stack-container:hover .testimonial-stack-card-2 {
                        transform: translateY(105%) scale(0.9) !important;
                        opacity: 1 !important;
                    }
                }
            `}</style>

      <div className="max-w-[1400px] mx-auto px-6 mb-20 text-center relative z-10">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20">
          Real Feedback
        </span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight mb-4">What People Are Saying</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
          Straight from the founders we work with.
        </p>
      </div>

      {/* Stack Container */}
      <div ref={containerRef} className="testimonial-stack-container relative w-full max-w-[1000px] mx-auto h-[400px] flex justify-center">

        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`
                            testimonial-stack-card-${index}
                            absolute top-0
                            w-[calc(100%-2rem)] sm:w-full max-w-[400px] h-auto p-6 sm:p-8 
                            rounded-[2rem] bg-[#0A0A0A] border border-white/10 shadow-2xl shadow-indigo-500/10
                            transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                            origin-bottom
                            flex flex-col
                        `}
            style={{
              zIndex: testimonial.zIndex,
              transform: index === 0
                ? 'translateY(0) scale(1)'
                : index === 1
                  ? 'translateY(15px) scale(0.95)'
                  : 'translateY(30px) scale(0.90)',
              opacity: index === 0 ? 1 : 1 - (index * 0.2)
            }}
          >
            {/* Top Row */}
            <div className="flex justify-between items-start mb-6">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                {testimonial.image}
              </div>
              <div className="flex gap-1" aria-label={`${testimonial.rating} stars`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>

            {/* Content */}
            <p className="text-slate-300 leading-relaxed mb-6 font-medium text-lg">
              "{testimonial.content}"
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-white/5 mb-6" />

            {/* Footer Info */}
            <div className="flex justify-between items-end mt-auto">
              <div>
                <h4 className="text-white font-bold">{testimonial.name}</h4>
                <p className="text-sm text-slate-500 mb-1">{testimonial.role}</p>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/5 text-indigo-300">
                  {testimonial.project}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 opacity-60">
                <Calendar className="w-3 h-3" />
                <time>{testimonial.date}</time>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-20 md:mt-12 text-slate-500 text-sm animate-pulse">
        Hover to interact
      </div>
    </section>
  );
}
