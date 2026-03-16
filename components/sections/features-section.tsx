"use client"
import { Brain, BookOpen, Users, Clock, ShieldCheck, BarChart } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GlowingTiltCard } from "@/components/ui/glowing-tilt-card"
import { ParallaxScroll } from "@/components/ui/parallax-scroll"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { cn } from "@/lib/utils"

export function FeaturesSection() {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-red-500" />,
      title: "Learning Science Rooted",
      description: "Built on conceptual scaffolding, spaced repetition, and evidence-based teaching practices.",
      borderClass: "border-glow-red",
      color: "red",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-blue-500" />,
      title: "Strictly Grounded AI / No hallucinations",
      description: "AI answers strictly from your uploaded course materials. When a question falls outside the content, the system says so.",
      borderClass: "border-glow-blue",
      color: "blue",
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-500" />,
      title: "Effortless Course Prep",
      description: "Automated content ingestion reduces course preparation time significantly.",
      borderClass: "border-glow-blue",
      color: "blue",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-500" />,
      title: "AI Co-Instructor",
      description: "Your AI co-instructor drafts quizzes, summaries, and lecture notes for your review.",
      borderClass: "border-glow-blue",
      color: "blue",
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-500" />,
      title: "Actionable Analytics",
      description: "Real-time insights into student engagement, question patterns, and learning gaps.",
      borderClass: "border-glow-blue",
      color: "blue",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-red-500" />,
      title: "FERPA Compliant",
      description: "FERPA-compliant architecture.",
      borderClass: "border-glow-red",
      color: "red",
    },
  ]

  return (
    <section id="features" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
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
                text="Why leading institutions and educators are switching to Medhavy's AI-powered intelligent textbook system."
                variant="paragraph"
                className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed opacity-70"
                animation="fade"
                delay={0.5}
              />
            </div>
          </div>
        </ScrollReveal>

        <ParallaxScroll baseVelocity={0.1} direction="up" className="py-12">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                <GlowingTiltCard className="h-full">
                  <Card
                    className={`h-full flex flex-col glassmorphic-card border-none overflow-hidden group soft-glow ${feature.borderClass}`}
                  >
                    <CardHeader>
                      <div className="p-2 rounded-xl w-fit bg-muted/50 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        {feature.icon}
                      </div>
                      <CardTitle className="mt-4 tracking-tight relative">
                        {feature.title}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 flex flex-col flex-grow h-full">
                      <CardDescription className="text-base opacity-70 transition-opacity duration-300 group-hover:opacity-100 flex-grow">
                        {feature.description}
                      </CardDescription>

                      {/* Modern animated accent to replace percentage badges */}
                      <div className="mt-8 pt-4 flex items-center justify-between gap-4 justify-self-end mt-auto">
                        <div className={cn(
                          "relative flex h-3 w-3 items-center justify-center",
                          "group-hover:scale-125 transition-transform duration-500"
                        )}>
                          <span className={cn(
                            "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 duration-1000",
                            feature.color === 'red' ? "bg-red-500" : "bg-blue-500"
                          )}></span>
                          <span className={cn(
                            "relative inline-flex h-2 w-2 rounded-full",
                            feature.color === 'red' ? "bg-red-600" : "bg-blue-600"
                          )}></span>
                        </div>
                        <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-secondary/40">
                          <div 
                            className={cn(
                              "absolute inset-y-0 w-1/3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                              feature.color === 'red' 
                                ? "bg-gradient-to-r from-transparent via-red-500/80 to-transparent" 
                                : "bg-gradient-to-r from-transparent via-blue-500/80 to-transparent"
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
          </div>
        </ParallaxScroll>
      </div>
    </section>
  )
}
