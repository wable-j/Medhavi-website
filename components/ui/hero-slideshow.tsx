"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, BookOpen, Sparkles, Zap } from "lucide-react"

const slides = [
    {
        id: 1,
        icon: <BookOpen className="w-8 h-8 text-black dark:text-white" strokeWidth={1.5} />,
        title: "Conversational Learning",
        description: "Students engage with course material through natural dialogue"
    },
    {
        id: 2,
        icon: <Sparkles className="w-8 h-8 text-black dark:text-white" strokeWidth={1.5} />,
        title: "AI-Powered Insights",
        description: "Get intelligent suggestions and automated content creation"
    },
    {
        id: 3,
        icon: <Zap className="w-8 h-8 text-black dark:text-white" strokeWidth={1.5} />,
        title: "Instant Guidance",
        description: "Real-time evaluation and guidance for student responses"
    }
]

export function HeroSlideshow() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => setCurrentSlide((p) => (p + 1) % slides.length)
    const prevSlide = () => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length)

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide()
        }, 5000) // Change slide every 5 seconds
        return () => clearInterval(timer)
    }, [currentSlide])

    return (
        <div className="relative w-full h-[350px] md:h-[450px]">
            {/* Main Container */}
            <div className="absolute inset-0 bg-[#f8f9fa] dark:bg-zinc-900/80 rounded-[32px] overflow-hidden shadow-sm border border-black/5 dark:border-white/10 flex items-center justify-center">

                {/* Grid Background */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.08]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Top Left Dots */}
                <div className="absolute top-6 left-6 flex gap-2 z-20">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`h-2.5 rounded-full transition-all duration-300 ${i === currentSlide
                                ? "bg-black/80 dark:bg-white/90 w-8"
                                : "bg-black/20 dark:bg-white/20 w-2.5"
                                }`}
                        />
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-6 z-20 p-3 bg-white dark:bg-zinc-800 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:scale-105 transition-transform text-black dark:text-white border border-black/5 dark:border-white/5"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-6 z-20 p-3 bg-white dark:bg-zinc-800 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:scale-105 transition-transform text-black dark:text-white border border-black/5 dark:border-white/5"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>

                {/* Slides */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center text-center px-16 md:px-24 z-10 w-full max-w-lg"
                    >
                        <div className="mb-6 p-5 bg-black/[0.04] dark:bg-white/10 fill-current text-current rounded-[20px] pointer-events-none">
                            {slides[currentSlide].icon}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-black dark:text-white tracking-tight">
                            {slides[currentSlide].title}
                        </h3>
                        <p className="text-base text-gray-500 dark:text-gray-400">
                            {slides[currentSlide].description}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Top Right Badge - Outside overflow-hidden */}
            <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 z-30">
                <div className="bg-white dark:bg-zinc-800 text-black dark:text-white text-xs md:text-sm font-semibold px-5 py-2.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-black/5 dark:border-white/10 whitespace-nowrap">
                    Built for Educators
                </div>
            </div>

            {/* Bottom Left Badge - Outside overflow-hidden */}
            <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 z-30">
                <div className="bg-black dark:bg-white text-white dark:text-black text-xs md:text-sm font-semibold px-5 py-2.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] whitespace-nowrap">
                    LTI Compliant
                </div>
            </div>
        </div>
    )
}
