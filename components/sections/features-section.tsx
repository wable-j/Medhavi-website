"use client"
import { Brain, BookOpen, Users, Clock, ShieldCheck, BarChart } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GlowingTiltCard } from "@/components/ui/glowing-tilt-card"
import { ParallaxScroll } from "@/components/ui/parallax-scroll"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { cn } from "@/lib/utils"

export function FeaturesSection() {
  const liveFeatures = [
    {
      icon: <BookOpen className="h-10 w-10 text-blue-500" />,
      title: "Conversational Textbooks",
      description: "Students ask questions in natural language and receive answers grounded in your course content—created using conceptual scaffolding principles.",
      borderClass: "border-glow-blue",
      color: "blue",
      colSpan: "md:col-span-2",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-500" />,
      title: "AI Co-Instructor",
      description: "Your AI co-instructor drafts quizzes, summaries, and lecture notes for your review.",
      borderClass: "border-glow-blue",
      color: "blue",
      colSpan: "md:col-span-1",
    },
  ]

  const roadmapFeatures = [
    {
      icon: <Brain className="h-10 w-10 text-purple-500" />,
      title: "Unified Learning Platform",
      description: "One cohesive experience. Unifies textbooks, PDFs, and LMS content—eliminating platform jumping.",
      borderClass: "border-glow-purple",
      color: "purple",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-purple-500" />,
      title: "Practice Mode",
      description: "Interactive environments for students to safely apply concepts and receive immediate feedback.",
      borderClass: "border-glow-purple",
      color: "purple",
    },
    {
      icon: <BarChart className="h-10 w-10 text-purple-500" />,
      title: "Exam Prep",
      description: "Targeted review sessions proactively generated based on areas where the class struggled most.",
      borderClass: "border-glow-purple",
      color: "purple",
    },
  ]

  return (
    <section id="features" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes cyber-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}} />
      <AnimatedBackground variant="dots" color="rgba(220, 38, 38, 0.05)" />

      <div className="container px-4 md:px-4">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="The Medhavy Advantage"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="Why leading institutions and educators are using Medhavy's AI-powered intelligent textbook system."
                variant="paragraph"
                className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed opacity-70"
                animation="fade"
                delay={0.5}
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="py-12 w-full max-w-6xl mx-auto space-y-24">

          {/* Live Features Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-bold tracking-tight">Live Now</h3>
              <div className="h-[1px] flex-1 bg-border/50"></div>
            </div>

            <BentoGrid className="max-w-6xl mx-auto w-full md:auto-rows-[22rem]">
              {liveFeatures.map((feature, index) => (
                <ScrollReveal
                  key={`live-${index}`}
                  delay={index * 0.1}
                  className={cn("h-full w-full", feature.colSpan)}
                >
                  <GlowingTiltCard className="h-full w-full">
                    <Card
                      className={`h-full w-full flex flex-col glassmorphic-card border-none overflow-hidden group soft-glow ${feature.borderClass}`}
                    >
                      <CardHeader className="flex-[0]">
                        <div className="p-3 rounded-xl w-fit bg-blue-500/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                          {feature.icon}
                        </div>
                        <CardTitle className="mt-6 text-2xl tracking-tight relative">
                          {feature.title}
                          <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 flex flex-col flex-1 mt-4">
                        <CardDescription className="text-lg opacity-80 transition-opacity duration-300 group-hover:opacity-100 flex-grow leading-relaxed">
                          {feature.description}
                        </CardDescription>

                        {/* Modern animated accent */}
                        <div className="pt-6 flex items-center justify-between gap-4 justify-self-end mt-auto">
                          <div className={cn(
                            "relative flex h-3 w-3 items-center justify-center",
                            "group-hover:scale-125 transition-transform duration-500"
                          )}>
                            <span className={cn(
                              "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 duration-1000 bg-blue-500"
                            )}></span>
                            <span className={cn(
                              "relative inline-flex h-2 w-2 rounded-full bg-blue-600"
                            )}></span>
                          </div>
                          <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-secondary/40">
                            <div
                              className={cn(
                                "absolute inset-y-0 w-1/3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                "bg-gradient-to-r from-transparent via-blue-500/80 to-transparent"
                              )}
                              style={{ animation: 'cyber-shimmer 2.5s ease-in-out infinite' }}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </GlowingTiltCard>
                </ScrollReveal>
              ))}
            </BentoGrid>
          </div>

          {/* Roadmap Features Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 opacity-70">
              <h3 className="text-2xl font-bold tracking-tight text-muted-foreground flex items-center gap-3">
                <Clock className="h-6 w-6" />
                Coming Soon
              </h3>
              <div className="h-[1px] flex-1 bg-border/30 dashed"></div>
            </div>

            <div className="mx-auto grid max-w-6xl w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {roadmapFeatures.map((feature, index) => (
                <ScrollReveal key={`roadmap-${index}`} delay={index * 0.1} className="h-full w-full">
                  <div className="relative h-full w-full">
                    <Card
                      className={`h-full w-full flex flex-col glassmorphic-card overflow-hidden group border-dashed border-2 border-muted-foreground/20 hover:border-purple-500/30 transition-colors duration-500 bg-background/40 backdrop-blur-sm`}
                    >
                      <CardHeader className="flex-[0]">
                        <div className="p-2 rounded-xl w-fit bg-purple-500/5 transition-transform duration-300 group-hover:scale-105 opacity-80 group-hover:opacity-100">
                          {feature.icon}
                        </div>
                        <CardTitle className="mt-4 tracking-tight relative text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 flex flex-col flex-1">
                        <CardDescription className="text-base opacity-60 transition-opacity duration-300 group-hover:opacity-80 flex-grow">
                          {feature.description}
                        </CardDescription>

                        {/* Muted animated accent */}
                        <div className="mt-6 pt-4 flex items-center justify-between gap-4 justify-self-end mt-auto opacity-50 group-hover:opacity-80 transition-opacity duration-300">
                          <div className={cn(
                            "relative flex h-2 w-2 items-center justify-center",
                            "group-hover:scale-110 transition-transform duration-500"
                          )}>
                            <span className={cn(
                              "relative inline-flex h-2 w-2 rounded-full",
                              "bg-purple-500/40"
                            )}></span>
                          </div>
                          <div className="relative h-[1px] w-full overflow-hidden rounded-full bg-border/30">
                            <div
                              className={cn(
                                "absolute inset-y-0 w-1/4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                "bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"
                              )}
                              style={{ animation: 'cyber-shimmer 4s ease-in-out infinite' }}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Coming Soon Badge Overlay */}
                    <div className="absolute top-4 right-4 z-10 pointer-events-none">
                      <div className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-secondary/80 text-secondary-foreground border border-border backdrop-blur-md shadow-sm">
                        Roadmap
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
