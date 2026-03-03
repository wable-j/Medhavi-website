"use client"

import { motion, type Variants } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { DemoRequestModal } from "@/components/demo-request-modal"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { InfiniteLogoCarousel } from "@/components/ui/infinite-logo-carousel"

import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"
import { AnimatedText } from "../ui/animated-text"
import { ChevronLeft, ChevronRight, Sparkles, BookOpen, Zap } from "lucide-react"

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function HeroSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section id="home" className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <AnimatedBackground variant="gradient" color="rgba(220, 38, 38, 0.08)" secondaryColor="rgba(30, 64, 175, 0.08)" />

      <div className="container px-6 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <ScrollReveal>
            <motion.div
              className="flex flex-col justify-center space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="space-y-4" variants={itemVariants}>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground bg-muted/80 px-4 py-2 rounded-full w-fit">
                  <Sparkles className="size-4 text-blue-500" />
                  <span className="gradient-text">AI-Powered</span> Education Platform
                </div>
                {/* Modern Hero Header with Gradient */}
                <h1 className="text-4xl font-heading font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">
                  <span className="text-foreground">Transform Static Textbooks Into</span>
                  <br />
                  <AnimatedText
                    text="Intelligent Courses "
                    variant="heading"
                    className="gradient-text pb-2 min-h-[1.2em] inline-block align-top"
                    animation="typewriter"
                    duration={1.5}
                    delay={1}
                  />
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl opacity-70">
                  Medhavy turns any textbook into a personalized, AI-curated conversational learning experience inside any LTI-compliant LMS. Built by educators, for educators.
                </p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-sm italic text-muted-foreground mt-2 border-l-4 border-blue-500 pl-4 bg-blue-50 dark:bg-blue-900/20 py-2 rounded-r"
                >
                  Sanskrit meaning: <span className="font-semibold text-blue-600 dark:text-blue-400">मेधावी (Maydhavee)</span> means INTELLECTUALLY BRILLIANT—the perfect name for our AI-powered intelligent textbook system.
                </motion.p>
              </motion.div>

              <motion.div className="flex flex-col gap-6 sm:flex-row sm:items-center" variants={itemVariants}>
                <GradientButton
                  glowAmount={5}
                  className="px-6 py-2.5 text-base cursor-pointer"
                  gradientFrom="from-red-500"
                  gradientTo="to-red-700"
                  onClick={() => setIsDemoModalOpen(true)}
                >
                  <span className="flex items-center">
                    Request a Demo
                    <motion.span
                      className="ml-2 inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 2, duration: 1 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </span>
                </GradientButton>

                <GradientButton borderWidth={2} className="neumorphic-button">
                  <Link href="#features" className="px-6 py-2.5 block">
                    View Features
                  </Link>
                </GradientButton>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4">
                <div className="flex items-center -space-x-3 mb-3">
                  {[
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80",
                  ].map((src, i) => (
                    <Avatar key={i} className="border-2 border-background w-8 h-8 md:w-10 md:h-10">
                      <AvatarImage src={src} alt={`Student ${i + 1}`} />
                      <AvatarFallback>S{i + 1}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-red-600 mr-2"></span>
                  Trusted by 2,000+ Students worldwide
                </p>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <SpotlightCard className="relative h-[300px] md:h-[450px] w-full overflow-hidden rounded-xl border glassmorphic-card p-1 border-glow-red">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-blue-900/20 z-10 pointer-events-none"></div>
              <div className="relative z-20 h-full w-full rounded-xl bg-black overflow-hidden shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/iT6pYsoCz60?si=eOkChzZhO4ubCFDO"
                  title="Medhavy Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </div>
        {/* infinite logo carousel */}
        {/* <div className="mt-20">
          <InfiniteLogoCarousel />
        </div> */}
      </div>
      <DemoRequestModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  )
}
