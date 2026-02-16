"use client"
import { Brain, BookOpen, Users, Clock, ShieldCheck, BarChart } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GlowingTiltCard } from "@/components/ui/glowing-tilt-card"
import { ParallaxScroll } from "@/components/ui/parallax-scroll"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { ProgressCard } from "@/components/ui-library/cards/progress-card"

export function FeaturesSection() {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-red-500" />,
      title: "Learning Science Rooted",
      description: "Built on conceptual scaffolding, spaced repetition, and evidence-based teaching practices.",
      progress: 98,
      borderClass: "border-glow-red",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-blue-500" />,
      title: "Strictly Grounded AI",
      description: "AI answers strictly from your uploaded course materials. No hallucinations. No off-topic wandering.",
      progress: 100,
      borderClass: "border-glow-blue",
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-500" />,
      title: "Effortless Course Prep",
      description: "Reduce course preparation time from weeks to hours using automated content ingestion.",
      progress: 90,
      borderClass: "border-glow-blue",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-500" />,
      title: "AI Co-Instructor",
      description: "Your digital teaching assistant that drafts quizzes, summaries, and lecture notes for your review.",
      progress: 95,
      borderClass: "border-glow-blue",
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-500" />,
      title: "Actionable Analytics",
      description: "Real-time insights into student engagement, question patterns, and learning gaps.",
      progress: 92,
      borderClass: "border-glow-blue",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-red-500" />,
      title: "Enterprise Secure",
      description: "FERPA compliant and LTI 1.3 integrated, delivering secure, scalable, and institution-ready performance.",
      progress: 100,
      borderClass: "border-glow-red",
    },
  ]

  return (
    <section id="features" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <AnimatedBackground variant="dots" color="rgba(220, 38, 38, 0.05)" />

      <div className="container px-6 md:px-8">
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
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlowingTiltCard>
                  <Card
                    className={`h-full glassmorphic-card border-none overflow-hidden group soft-glow ${feature.borderClass}`}
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
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                        {feature.description}
                      </CardDescription>

                      <ProgressCard
                        title=""
                        progress={feature.progress}
                        total={100}
                        status={feature.progress === 100 ? "success" : "default"}
                        showPercentage
                        variant="minimal"
                        progressColor={feature.progress === 100 ? "bg-blue-600" : "bg-red-600"}
                        animationDuration={2.5}
                      />
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
