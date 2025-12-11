"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { SiteHeader } from "@/components/site-header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";

import { PortfolioHighlights } from "@/components/sections/portfolio-highlights";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { AnimatedBackground } from "@/components/ui/animated-background";
import CinematicSection from "@/components/ui/cinematic-section";
import AnimatedContent from "@/components/ui/animated-content";
import NavigationDots from "@/components/ui/navigation-dots";
import ThreeBackground from "@/components/ui/three-background";

export default function Home() {
    const [currentSection, setCurrentSection] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [direction, setDirection] = useState(1);
    const touchStart = useRef(0);

    const sections = [
        <HeroSection key="hero" />,
        <TechStackSection key="tech-stack" />,
        <ProcessSection key="process" />,

        <PortfolioHighlights key="portfolio" />,
        <ComparisonSection key="comparison" />,
        <TestimonialsSection key="testimonials" />,
        <CTA key="cta" />,
        <Footer key="footer" />
    ];

    const totalSections = sections.length;

    const changeSection = useCallback((newSection: number) => {
        if (newSection === currentSection) return;

        const newDirection = newSection > currentSection ? 1 : -1;
        setDirection(newDirection);
        setIsScrolling(true);
        setCurrentSection(newSection);
        setTimeout(() => setIsScrolling(false), 1200);
    }, [currentSection]);

    const handleWheel = useCallback((e: WheelEvent) => {
        if (isScrolling) {
            e.preventDefault();
            return;
        }

        const target = e.target as HTMLElement;
        // Find the specific scrollable container defined in CinematicSection
        const scrollContainer = target.closest('.overflow-y-auto');

        if (scrollContainer) {
            const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
            // Use a small buffer (1px) for float inconsistencies
            const isAtTop = scrollTop <= 1;
            const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) <= 1;

            // If scrolling DOWN (deltaY > 0)
            if (e.deltaY > 0) {
                // If we have room to scroll down internally, let the browser handle it
                if (!isAtBottom) {
                    return; // Do NOT preventDefault
                }
            }

            // If scrolling UP (deltaY < 0)
            else if (e.deltaY < 0) {
                // If we have room to scroll up internally, let the browser handle it
                if (!isAtTop) {
                    return; // Do NOT preventDefault
                }
            }
        }

        // If we fall through here, it means we are at the edge OR not in a scroll container.
        // Hijack the scroll to change sections.
        e.preventDefault();
        e.stopPropagation();

        if (Math.abs(e.deltaY) > 10) {
            const scrollDir = e.deltaY > 0 ? 1 : -1;
            const nextSection = currentSection + scrollDir;

            if (nextSection >= 0 && nextSection < totalSections) {
                changeSection(nextSection);
            }
        }
    }, [currentSection, isScrolling, totalSections, changeSection]);

    useEffect(() => {
        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [handleWheel]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isScrolling) return;

            let next = -1;
            if (e.key === 'ArrowDown' || e.key === ' ') next = currentSection + 1;
            if (e.key === 'ArrowUp') next = currentSection - 1;
            if (e.key === 'Home') next = 0;
            if (e.key === 'End') next = totalSections - 1;

            if (next !== -1 && next >= 0 && next < totalSections && next !== currentSection) {
                e.preventDefault();
                changeSection(next);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSection, isScrolling, totalSections, changeSection]);

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            touchStart.current = e.touches[0].clientY;
        };

        const handleTouchMove = (e: TouchEvent) => {
            e.preventDefault();
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (isScrolling) return;

            const touchEnd = e.changedTouches[0].clientY;
            const diff = touchStart.current - touchEnd;

            if (Math.abs(diff) > 50) {
                const scrollDir = diff > 0 ? 1 : -1;
                const next = currentSection + scrollDir;

                if (next >= 0 && next < totalSections) {
                    changeSection(next);
                }
            }
        };

        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd, { passive: false });

        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [currentSection, isScrolling, totalSections, changeSection]);

    return (
        <main className="min-h-screen bg-background overflow-hidden selection:bg-indigo-500/30 relative" style={{ perspective: '1000px' }}>
            <ThreeBackground />
            <SiteHeader />

            <NavigationDots
                totalSections={totalSections}
                currentSection={currentSection}
                onDotClick={(i) => {
                    if (!isScrolling && i !== currentSection) {
                        changeSection(i);
                    }
                }}
            />

            <div className="relative w-full h-full">
                <AnimatedBackground variant="grid" color="rgba(99, 102, 241, 0.03)" />

                {sections.map((Component, index) => {
                    const isActive = index === currentSection;
                    const isScrolledPast = index < currentSection;
                    const isFuture = index > currentSection;

                    return (
                        <CinematicSection
                            key={index}
                            isActive={isActive}
                            isPrevious={isScrolledPast}
                            isNext={isFuture}
                            direction={direction}
                            zIndex={isActive ? 10 : 0}
                        >
                            <AnimatedContent isActive={isActive}>
                                {Component}
                            </AnimatedContent>
                        </CinematicSection>
                    );
                })}
            </div>
        </main>
    );
}
