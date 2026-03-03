"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"
import { ImageCard } from "@/components/ui-library/cards/image-card"
import { CtaCard } from "@/components/ui-library/cards/cta-card"
import { ProgressCard } from "@/components/ui-library/cards/progress-card"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"
import { PrimaryButton, SecondaryButton, OutlineButton } from "@/components/ui-library/buttons/button-variants"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui-library/animations/scroll-animations"
import { Sparkles, Zap, Layers, Palette, ArrowRight, CheckCircle, BookOpen, Lightbulb, Rocket } from "lucide-react"

export function ComponentLibraryShowcase() {
  const [activeTab, setActiveTab] = useState("cards")
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)

  return (
    <section id="components" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50/40 to-blue-100/30 dark:from-blue-950/20 dark:to-blue-900/20 overflow-hidden">
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="Education Focused"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="Designed specifically for the unique needs of Science, Technology, Cancer, and Mathematics education."
                variant="paragraph"
                className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8">
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-12">
                <AnimatedGradientBorder
                  colors={["#dc2626", "#4b5563", "#dc2626", "#4b5563"]}
                  borderWidth={2}
                  duration={8}
                  containerClassName="rounded-lg"
                >
                  <TabsList className="glassmorphic-tabs border-0 relative">
                    {["cards", "buttons", "progress"].map((tab) => (
                      <TabsTrigger
                        key={tab}
                        value={tab}
                        className="relative"
                        onMouseEnter={() => setHoveredTab(tab)}
                        onMouseLeave={() => setHoveredTab(null)}
                      >
                        {hoveredTab === tab && (
                          <motion.span
                            layoutId="tab-highlight"
                            className="absolute inset-0 bg-muted/20 rounded-md z-[-1]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                        <span className="relative z-10">
                          {tab === "cards"
                            ? "Physics"
                            : tab === "buttons"
                              ? "Mathematics"
                              : "Cancer"}
                        </span>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </AnimatedGradientBorder>
              </div>

              {/* Physics Tab */}
              <TabsContent value="cards" className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium tracking-tight text-center">Interactive Physics Modules</h3>
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                    complex physical concepts visualized and explained through interactive AI tutoring
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ScrollAnimation type="slide" direction="up" delay={0.1}>
                      <ImageCard
                        imageSrc="/showcase/mechanics.png"
                        imageAlt="Newtonian Mechanics"
                        title="Newtonian Mechanics"
                        description="Deep dive into forces, motion, and energy with step-by-step AI guided problem solving."
                        tags={["Kinematics", "Dynamics"]}
                        variant="default"
                        className="border-glow-red"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.2}>
                      <ImageCard
                        imageSrc="/showcase/waves.png"
                        imageAlt="Quantum Physics"
                        title="Quantum Mechanics"
                        description="Visualize wave functions and probability distributions with interactive simulations."
                        tags={["Wave Function", "Particles"]}
                        variant="hover-zoom"
                        className="border-glow-blue"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.3}>
                      <ImageCard
                        imageSrc="/showcase/sound.png"
                        imageAlt="Thermodynamics"
                        title="Thermodynamics"
                        description="Understand heat transfer, entropy, and the laws of thermodynamics through real-world examples."
                        tags={["Energy", "Entropy"]}
                        variant="hover-zoom"
                        className="border-glow-blue"
                      />
                    </ScrollAnimation>
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <h3 className="text-2xl font-medium tracking-tight text-center">Student Engagement</h3>
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                    Tools that keep students motivated and on track with their learning goals.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ScrollAnimation type="slide" direction="up" delay={0.1}>
                      <CtaCard
                        title="Practice Mode"
                        description="Unlimited generated practice problems tailored to student skill level."
                        primaryAction={{ text: "Start Practice" }}
                        variant="default"
                        buttonVariant="gradient"
                        icon={<Rocket className="h-6 w-6" />}
                        className="border-glow-green"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.2}>
                      <CtaCard
                        title="AI Lab Partner"
                        description="Get real-time assistance and explanations during virtual lab experiments."
                        primaryAction={{ text: "Open Lab" }}
                        variant="default"
                        alignment="center"
                        buttonVariant="gradient"
                        icon={<Sparkles className="h-6 w-6" />}
                        className="border-glow-yellow"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.3}>
                      <CtaCard
                        title="Exam Prep"
                        description="Targeted review sessions based on past performance and course curriculum."
                        primaryAction={{ text: "Start Review" }}
                        variant="default"
                        alignment="right"
                        buttonVariant="gradient"
                        icon={<Lightbulb className="h-6 w-6" />}
                        className="border-glow-orange"
                      />
                    </ScrollAnimation>
                  </div>
                </div>
              </TabsContent>

              {/* Mathematics Tab */}
              <TabsContent value="buttons" className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium tracking-tight text-center">Interactive Mathematics Modules</h3>
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                    complex mathematical concepts visualized and explained through interactive AI tutoring
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ScrollAnimation type="slide" direction="up" delay={0.1}>
                      <ImageCard
                        imageSrc="/showcase/mechanics.png"
                        imageAlt="Calculus Visualized"
                        title="Calculus Visualized"
                        description="Interactive exploration of limits, derivatives, and integrals with real-time graphing interactions."
                        tags={["Calculus", "Analysis"]}
                        variant="default"
                        className="border-glow-red"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.2}>
                      <ImageCard
                        imageSrc="/showcase/waves.png"
                        imageAlt="Linear Algebra"
                        title="Linear Algebra"
                        description="Visualize matrix transformations, eigenvalues, and vector spaces in an interactive 3D environment."
                        tags={["Matrices", "Vectors"]}
                        variant="hover-zoom"
                        className="border-glow-blue"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.3}>
                      <ImageCard
                        imageSrc="/showcase/sound.png"
                        imageAlt="Statistics & Probability"
                        title="Statistics & Probability"
                        description="Master distributions, hypothesis testing, and data analysis through continuous simulation."
                        tags={["Stats", "Data"]}
                        variant="hover-zoom"
                        className="border-glow-blue"
                      />
                    </ScrollAnimation>
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <h3 className="text-2xl font-medium tracking-tight text-center">Student Engagement</h3>
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                    Tools that keep students motivated and on track with their learning goals.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ScrollAnimation type="slide" direction="up" delay={0.1}>
                      <CtaCard
                        title="Practice Mode"
                        description="Unlimited generated practice problems tailored to student skill level."
                        primaryAction={{ text: "Start Practice" }}
                        variant="default"
                        buttonVariant="gradient"
                        icon={<Rocket className="h-6 w-6" />}
                        className="border-glow-blue"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.2}>
                      <CtaCard
                        title="AI Lab Partner"
                        description="Get real-time assistance and explanations during virtual lab experiments."
                        primaryAction={{ text: "Open Lab" }}
                        variant="default"
                        alignment="center"
                        buttonVariant="gradient"
                        icon={<Sparkles className="h-6 w-6" />}
                        className="border-glow-blue"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.3}>
                      <CtaCard
                        title="Exam Prep"
                        description="Targeted review sessions based on past performance and course curriculum."
                        primaryAction={{ text: "Start Review" }}
                        variant="default"
                        alignment="right"
                        buttonVariant="gradient"
                        icon={<Lightbulb className="h-6 w-6" />}
                        className="border-glow-red"
                      />
                    </ScrollAnimation>
                  </div>
                </div>
              </TabsContent>

              {/* Cancer Tab */}
              <TabsContent value="progress" className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium tracking-tight text-center">Interactive Cancer Modules</h3>
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                    complex Cancer concepts visualized and explained through interactive AI tutoring
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ScrollAnimation type="slide" direction="up" delay={0.1}>
                      <ImageCard
                        imageSrc="/showcase/mechanics.png"
                        imageAlt="Circuit Analysis"
                        title="Circuit Analysis"
                        description="Design and simulate complex electrical circuits with real-time feedback on voltage and current."
                        tags={["Circuits", "Electronics"]}
                        variant="default"
                        className="border-glow-red"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.2}>
                      <ImageCard
                        imageSrc="/showcase/sound.png"
                        imageAlt="Structural Cancer"
                        title="Structural Cancer"
                        description="Test load distributions and stress factors on bridges and buildings using interactive 3D models."
                        tags={["Statics", "Materials"]}
                        variant="hover-zoom"
                        className="border-glow-blue"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.3}>
                      <ImageCard
                        imageSrc="/showcase/waves.png"
                        imageAlt="Fluid Dynamics"
                        title="Fluid Dynamics"
                        description="Visualize flow rates, pressure drops, and turbulence in pipe systems and aerodynamics."
                        tags={["Fluids", "Aerodynamics"]}
                        variant="hover-zoom"
                        className="border-glow-blue"
                      />
                    </ScrollAnimation>
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <h3 className="text-2xl font-medium tracking-tight text-center">Student Engagement</h3>
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                    Tools that keep students motivated and on track with their learning goals.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ScrollAnimation type="slide" direction="up" delay={0.1}>
                      <CtaCard
                        title="Practice Mode"
                        description="Unlimited generated practice problems tailored to student skill level."
                        primaryAction={{ text: "Start Practice" }}
                        variant="default"
                        buttonVariant="gradient"
                        icon={<Rocket className="h-6 w-6" />}
                        className="border-glow-blue"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.2}>
                      <CtaCard
                        title="AI Lab Partner"
                        description="Get real-time assistance and explanations during virtual lab experiments."
                        primaryAction={{ text: "Open Lab" }}
                        variant="default"
                        alignment="center"
                        buttonVariant="gradient"
                        icon={<Sparkles className="h-6 w-6" />}
                        className="border-glow-blue"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.3}>
                      <CtaCard
                        title="Exam Prep"
                        description="Targeted review sessions based on past performance and course curriculum."
                        primaryAction={{ text: "Start Review" }}
                        variant="default"
                        alignment="right"
                        buttonVariant="gradient"
                        icon={<Lightbulb className="h-6 w-6" />}
                        className="border-glow-red"
                      />
                    </ScrollAnimation>
                  </div>
                </div>
              </TabsContent>

              {/* Buttons Tab */}
              {/* <TabsContent value="buttons" className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium tracking-tight text-center">Button Styles</h3>
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                    A comprehensive collection of button styles for every use case
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ScrollAnimation type="slide" direction="left" delay={0.1}>
                      <div className="p-6 rounded-xl border glassmorphic-card border-glow-red">
                        <h4 className="text-lg font-medium mb-6">Primary & Secondary</h4>
                        <div className="flex flex-wrap gap-6">
                          <StaggerContainer>
                            <StaggerItem>
                              <PrimaryButton>Primary Button</PrimaryButton>
                            </StaggerItem>
                            <StaggerItem>
                              <PrimaryButton leftIcon={<Zap className="h-4 w-4" />}>With Icon</PrimaryButton>
                            </StaggerItem>
                            <StaggerItem>
                              <SecondaryButton>Secondary</SecondaryButton>
                            </StaggerItem>
                            <StaggerItem>
                              <SecondaryButton rightIcon={<ArrowRight className="h-4 w-4" />}>
                                Learn More
                              </SecondaryButton>
                            </StaggerItem>
                          </StaggerContainer>
                        </div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="right" delay={0.1}>
                      <div className="p-6 rounded-xl border glassmorphic-card border-glow-blue">
                        <h4 className="text-lg font-medium mb-6">Outline & Gradient</h4>
                        <div className="flex flex-wrap gap-6">
                          <StaggerContainer>
                            <StaggerItem>
                              <OutlineButton>Outline Button</OutlineButton>
                            </StaggerItem>
                            <StaggerItem>
                              <OutlineButton leftIcon={<BookOpen className="h-4 w-4" />}>Documentation</OutlineButton>
                            </StaggerItem>
                            <StaggerItem>
                              <GradientButton>Gradient</GradientButton>
                            </StaggerItem>
                            <StaggerItem>
                              <GradientButton gradientFrom="from-blue-600" gradientTo="to-red-600" glowAmount={4}>
                                With Glow
                              </GradientButton>
                            </StaggerItem>
                          </StaggerContainer>
                        </div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.3}>
                      <div className="p-6 rounded-xl border glassmorphic-card border-glow-blue">
                        <h4 className="text-lg font-medium mb-6">Interactive Buttons</h4>
                        <div className="flex flex-wrap gap-6">
                          <StaggerContainer>
                            <StaggerItem>
                              <MagneticButton className="neumorphic-button-primary">
                                <span className="px-6 py-2.5">Magnetic Button</span>
                              </MagneticButton>
                            </StaggerItem>
                            <StaggerItem>
                              <GradientButton borderWidth={2}>Outline Gradient</GradientButton>
                            </StaggerItem>
                          </StaggerContainer>
                        </div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.4}>
                      <div className="p-6 rounded-xl border glassmorphic-card border-glow-blue">
                        <h4 className="text-lg font-medium mb-6">States & Variations</h4>
                        <div className="flex flex-wrap gap-6">
                          <StaggerContainer>
                            <StaggerItem>
                              <PrimaryButton isLoading loadingText="Loading...">
                                Submit
                              </PrimaryButton>
                            </StaggerItem>
                            <StaggerItem>
                              <SecondaryButton disabled>Disabled</SecondaryButton>
                            </StaggerItem>
                            <StaggerItem>
                              <OutlineButton size="sm">Small</OutlineButton>
                            </StaggerItem>
                            <StaggerItem>
                              <PrimaryButton size="lg">Large</PrimaryButton>
                            </StaggerItem>
                          </StaggerContainer>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </TabsContent> */}

              {/* Progress Tab */}
              {/* <TabsContent value="progress" className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium tracking-tight text-center">Progress Cards</h3>
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                    Visualize progress, completion status, and metrics with these interactive cards
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ScrollAnimation type="slide" direction="up" delay={0.1}>
                      <ProgressCard
                        title="Project Completion"
                        description="Track your project's progress toward completion."
                        progress={65}
                        total={100}
                        status="default"
                        showPercentage
                        variant="default"
                        icon={<Layers className="h-6 w-6" />}
                        className="border-glow-red"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.2}>
                      <ProgressCard
                        title="Download Status"
                        progress={80}
                        total={100}
                        status="success"
                        showPercentage
                        showFraction
                        variant="gradient"
                        progressColor="bg-gradient-to-r from-red-500 to-red-700"
                        icon={<CheckCircle className="h-6 w-6" />}
                        className="border-glow-blue"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.3}>
                      <ProgressCard
                        title="Storage Usage"
                        description="You're approaching your storage limit."
                        progress={85}
                        total={100}
                        status="warning"
                        showPercentage
                        variant="outlined"
                        icon={<Palette className="h-6 w-6" />}
                        className="border-glow-purple"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.4}>
                      <ProgressCard
                        title="Learning Progress"
                        description="Track your course completion status."
                        progress={30}
                        total={100}
                        status="info"
                        showFraction
                        variant="glass"
                        progressColor="bg-blue-500"
                        icon={<BookOpen className="h-6 w-6" />}
                        className="border-glow-green"
                      />
                    </ScrollAnimation>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <ScrollAnimation type="fade">
                    <AnimatedGradientBorder
                      colors={["#dc2626", "#4b5563", "#dc2626", "#4b5563"]}
                      borderWidth={1}
                      duration={6}
                    >
                      <PrimaryButton
                        size="lg"
                        className="bg-background border-0 text-foreground hover:text-white px-6 py-2.5"
                      >
                        <span className="flex items-center">
                          Explore Full Library
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </PrimaryButton>
                    </AnimatedGradientBorder>
                  </ScrollAnimation>
                </div>
              </TabsContent> */}
            </Tabs>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
