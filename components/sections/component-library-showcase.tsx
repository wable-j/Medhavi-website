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
import { Sparkles, Zap, Layers, Palette, ArrowRight, CheckCircle, BookOpen, Lightbulb, Rocket, GraduationCap, Users, Building, MousePointerClick } from "lucide-react"

function ModernFeatureCard({
  title,
  description,
  icon: Icon,
  delay = 0,
  isStudent = false,
  isInstructor = false,
  isAdmin = false,
  imageSrc,
}: {
  title: string
  description: string
  icon: any
  delay?: number
  isStudent?: boolean
  isInstructor?: boolean
  isAdmin?: boolean
  imageSrc?: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group flex flex-col gap-5 text-left cursor-pointer perspective-[2000px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] w-full rounded-[24px] transition-all duration-500 will-change-transform group-hover:-translate-y-2">
        <motion.div
          className="w-full h-full relative shadow-sm group-hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] rounded-[24px]"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isHovered ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Front Face */}
          <div className="absolute inset-0 bg-[#0A0A0A] rounded-[24px] border border-neutral-800 flex flex-col items-center justify-center [backface-visibility:hidden] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
            {imageSrc ? (
              <img src={imageSrc} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-0" />
            ) : (
              <motion.div
                className="flex flex-col items-center justify-center gap-3 text-neutral-600 dark:text-neutral-500 z-0"
                animate={{ scale: isHovered && !isStudent ? 1.05 : 1 }}
                transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                {Icon ? <Icon className="w-12 h-12 stroke-[1.5]" /> : <MousePointerClick className="w-12 h-12 stroke-[1.5]" />}
                <span className="text-sm font-medium tracking-wide">Image</span>
              </motion.div>
            )}
          </div>

          {/* Back Face (Only for Student card right now) */}
          {isStudent && (
            <div
              className="absolute inset-0 bg-white dark:bg-[#0A0A0A] rounded-[24px] border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col"
            >
              {/* Header */}
              <div className="px-5 pt-5 pb-3 bg-neutral-50 dark:bg-[#111] border-b border-neutral-200 dark:border-neutral-800">
                <h4 className="text-[16px] font-bold text-neutral-900 dark:text-white mb-1.5 tracking-tight">Hours Studied This Month</h4>
                <div className="flex items-center justify-between text-[12px]">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-neutral-900 dark:text-white leading-none">124h</span>
                    <span className="font-medium text-rose-500">-1.6%</span>
                  </div>
                  <span className="text-neutral-500">Last month: 126h</span>
                </div>
              </div>

              <div className="flex-1 flex flex-row overflow-hidden bg-white dark:bg-[#050505]">
                {/* Left side: Bars matching the screenshot */}
                <div className="flex-1 p-4 border-r border-neutral-100 dark:border-neutral-800 flex flex-col justify-center gap-2.5">
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-neutral-700 dark:text-neutral-300">Physics Module</span>
                      <span className="font-semibold text-neutral-900 dark:text-white">45h <span className="text-emerald-500 ml-1">+18%</span></span>
                    </div>
                    <div className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-full h-1.5 overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: isHovered ? '80%' : 0 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} className="bg-[#0095ff] h-full rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-neutral-700 dark:text-neutral-300">Mathematics</span>
                      <span className="font-semibold text-neutral-900 dark:text-white">32h <span className="text-rose-500 ml-1">-22%</span></span>
                    </div>
                    <div className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-full h-1.5 overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: isHovered ? '60%' : 0 }} transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} className="bg-[#8b5cf6] h-full rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-neutral-700 dark:text-neutral-300">Cancer Biology</span>
                      <span className="font-semibold text-neutral-900 dark:text-white">28h <span className="text-emerald-500 ml-1">+12%</span></span>
                    </div>
                    <div className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-full h-1.5 overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: isHovered ? '50%' : 0 }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }} className="bg-[#10b981] h-full rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-neutral-700 dark:text-neutral-300">Practice Sets</span>
                      <span className="font-semibold text-neutral-900 dark:text-white">19h <span className="text-rose-500 ml-1">-14%</span></span>
                    </div>
                    <div className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-full h-1.5 overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: isHovered ? '30%' : 0 }} transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} className="bg-[#f43f5e] h-full rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Right side: Data */}
                <div className="w-[45%] py-4 pl-3 pr-4 flex flex-col justify-center gap-3 bg-neutral-50 dark:bg-[#0A0A0A]">
                  <div className="space-y-1.5 p-2 bg-white dark:bg-[#111] rounded-[10px] shadow-sm border border-neutral-200/50 dark:border-neutral-800">
                    <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400">
                      <Zap className="w-3 h-3 fill-current" /> Insight
                    </span>
                    <p className="text-[10px] text-neutral-600 dark:text-neutral-400 leading-snug">
                      Your <strong>Physics Module</strong> engagement increased <span className="text-emerald-500 font-semibold">+18%</span> leading to higher quiz scores.
                    </p>
                  </div>
                  <div className="space-y-1.5 p-2 bg-white dark:bg-[#111] rounded-[10px] shadow-sm border border-neutral-200/50 dark:border-neutral-800">
                    <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider font-bold text-orange-600 dark:text-orange-400">
                      <Lightbulb className="w-3 h-3" /> Focus Area
                    </span>
                    <p className="text-[10px] text-neutral-600 dark:text-neutral-400 leading-snug">
                      Mathematics time is down <span className="text-rose-500 font-semibold">-22%</span>. Try reviewing interactive Calculus limits today.
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-1.5 px-3 text-[10px] text-center text-neutral-500 dark:text-neutral-500 bg-neutral-50 dark:bg-[#111] border-t border-neutral-200 dark:border-neutral-800">
                Sample dashboard — actual metrics vary by deployment.
              </div>
            </div>
          )}

          {/* Back Face for Instructor card */}
          {isInstructor && (
            <div
              className="absolute inset-0 bg-white dark:bg-[#0A0A0A] rounded-[24px] border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col"
            >
              <div className="px-5 pt-5 pb-3 bg-neutral-50 dark:bg-[#111] border-b border-neutral-200 dark:border-neutral-800">
                <h4 className="text-[16px] font-bold text-neutral-900 dark:text-white mb-1.5 tracking-tight">Course Build Time</h4>
                <div className="flex items-center justify-between text-[12px]">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-neutral-900 dark:text-white leading-none">2.5h</span>
                    <span className="font-medium text-emerald-500">-85%</span>
                  </div>
                  <span className="text-neutral-500">Without AI: 18h</span>
                </div>
              </div>

              <div className="flex-1 flex flex-row overflow-hidden bg-white dark:bg-[#050505]">
                <div className="flex-1 p-4 border-r border-neutral-100 dark:border-neutral-800 flex flex-col justify-center gap-2.5">
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-neutral-700 dark:text-neutral-300">Quiz Generation</span>
                      <span className="font-semibold text-neutral-900 dark:text-white">5m <span className="text-emerald-500 ml-1">-95%</span></span>
                    </div>
                    <div className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-full h-1.5 overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: isHovered ? '95%' : 0 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} className="bg-[#f59e0b] h-full rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-neutral-700 dark:text-neutral-300">Content Curation</span>
                      <span className="font-semibold text-neutral-900 dark:text-white">45m <span className="text-emerald-500 ml-1">-80%</span></span>
                    </div>
                    <div className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-full h-1.5 overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: isHovered ? '80%' : 0 }} transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} className="bg-[#14b8a6] h-full rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-neutral-700 dark:text-neutral-300">Grading Hub</span>
                      <span className="font-semibold text-neutral-900 dark:text-white">1.5h <span className="text-emerald-500 ml-1">-70%</span></span>
                    </div>
                    <div className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-full h-1.5 overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: isHovered ? '70%' : 0 }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }} className="bg-[#3b82f6] h-full rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="w-[45%] py-4 pl-3 pr-4 flex flex-col justify-center gap-3 bg-neutral-50 dark:bg-[#0A0A0A]">
                  <div className="space-y-1.5 p-2 bg-white dark:bg-[#111] rounded-[10px] shadow-sm border border-neutral-200/50 dark:border-neutral-800">
                    <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider font-bold text-orange-600 dark:text-orange-400">
                      <Zap className="w-3 h-3 fill-current" /> Time Saved
                    </span>
                    <p className="text-[10px] text-neutral-600 dark:text-neutral-400 leading-snug">
                      Your AI assistant saved you <span className="text-emerald-500 font-semibold">15.5 hours</span> this week.
                    </p>
                  </div>
                  <div className="space-y-1.5 p-2 bg-white dark:bg-[#111] rounded-[10px] shadow-sm border border-neutral-200/50 dark:border-neutral-800">
                    <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider font-bold text-teal-600 dark:text-teal-400">
                      <Lightbulb className="w-3 h-3" /> New Tooling
                    </span>
                    <p className="text-[10px] text-neutral-600 dark:text-neutral-400 leading-snug">
                      The Auto-grader is fully configured for your Mathematics module.
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-1.5 px-3 text-[10px] text-center text-neutral-500 dark:text-neutral-500 bg-neutral-50 dark:bg-[#111] border-t border-neutral-200 dark:border-neutral-800">
                Sample dashboard — actual metrics vary by deployment.
              </div>
            </div>
          )}

          {/* Back Face for Admin card */}
          {isAdmin && (
            <div
              className="absolute inset-0 bg-white dark:bg-[#0A0A0A] rounded-[24px] border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col"
            >
              <div className="px-5 pt-5 pb-3 bg-neutral-50 dark:bg-[#111] border-b border-neutral-200 dark:border-neutral-800">
                <h4 className="text-[16px] font-bold text-neutral-900 dark:text-white mb-1.5 tracking-tight">System Compliance & Uptime</h4>
                <div className="flex items-center justify-between text-[12px]">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-neutral-900 dark:text-white leading-none">99.99%</span>
                    <span className="font-medium text-emerald-500">All Systems Go</span>
                  </div>
                  <span className="text-neutral-500">LTI 1.3 Target</span>
                </div>
              </div>

              <div className="flex-1 flex flex-row overflow-hidden bg-white dark:bg-[#050505]">
                <div className="flex-1 p-4 border-r border-neutral-100 dark:border-neutral-800 flex flex-col justify-center gap-2.5">
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-neutral-700 dark:text-neutral-300">Server Capacity</span>
                      <span className="font-semibold text-neutral-900 dark:text-white">42% <span className="text-emerald-500 ml-1">Optimal</span></span>
                    </div>
                    <div className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-full h-1.5 overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: isHovered ? '42%' : 0 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} className="bg-[#10b981] h-full rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-neutral-700 dark:text-neutral-300">FERPA Compliance</span>
                      <span className="font-semibold text-neutral-900 dark:text-white">100% <span className="text-emerald-500 ml-1">Secure</span></span>
                    </div>
                    <div className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-full h-1.5 overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: isHovered ? '100%' : 0 }} transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} className="bg-[#3b82f6] h-full rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-neutral-700 dark:text-neutral-300">Active Deployments</span>
                      <span className="font-semibold text-neutral-900 dark:text-white">8 <span className="text-emerald-500 ml-1">+2</span></span>
                    </div>
                    <div className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-full h-1.5 overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: isHovered ? '75%' : 0 }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }} className="bg-[#8b5cf6] h-full rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="w-[45%] py-4 pl-3 pr-4 flex flex-col justify-center gap-3 bg-neutral-50 dark:bg-[#0A0A0A]">
                  <div className="space-y-1.5 p-2 bg-white dark:bg-[#111] rounded-[10px] shadow-sm border border-neutral-200/50 dark:border-neutral-800">
                    <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400">
                      <Zap className="w-3 h-3 fill-current" /> Auto-Scaling
                    </span>
                    <p className="text-[10px] text-neutral-600 dark:text-neutral-400 leading-snug">
                      Successfully handled <span className="text-emerald-500 font-semibold">+30%</span> traffic spike across North American servers.
                    </p>
                  </div>
                  <div className="space-y-1.5 p-2 bg-white dark:bg-[#111] rounded-[10px] shadow-sm border border-neutral-200/50 dark:border-neutral-800">
                    <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400">
                      <CheckCircle className="w-3 h-3" /> Audit Passed
                    </span>
                    <p className="text-[10px] text-neutral-600 dark:text-neutral-400 leading-snug">
                      Latest security patch deployed and verified for LTI integration.
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-1.5 px-3 text-[10px] text-center text-neutral-500 dark:text-neutral-500 bg-neutral-50 dark:bg-[#111] border-t border-neutral-200 dark:border-neutral-800">
                Sample dashboard — actual metrics vary by deployment.
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <div className="flex flex-col gap-2.5 px-1">
        <h3 className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
          {Icon && <Icon className="w-5 h-5 text-foreground transition-colors group-hover:text-primary" />}
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-[15px]">
          {description}
        </p>
      </div>
    </motion.div>
  )
}


export function ComponentLibraryShowcase() {
  const [activeTab, setActiveTab] = useState("cards")
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)

  return (
    <section id="components" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50/40 to-blue-100/30 dark:from-blue-950/20 dark:to-blue-900/20 overflow-hidden">
      <div className="container px-4 md:px-4">
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
                  colors={["#4b5563", "#dc2626", "#dc2626", "#4b5563"]}
                  borderWidth={2}
                  duration={6}
                  containerClassName="rounded-[14px]"
                  className="bg-[#E2E6F0] dark:bg-[#111827] rounded-[13px] border-none"
                >
                  <TabsList className="bg-transparent border-0 relative p-1 h-auto rounded-[12px] flex items-center justify-center gap-1">
                    {["cards", "buttons", "progress"].map((tab) => (
                      <TabsTrigger
                        key={tab}
                        value={tab}
                        className="relative px-5 py-2 text-[15px] font-medium tracking-wide transition-all data-[state=active]:bg-white data-[state=active]:dark:bg-white/10 data-[state=active]:text-[#0f172a] data-[state=active]:dark:text-white data-[state=active]:shadow-sm rounded-[10px] text-[#475569] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-white z-10 min-w-[120px]"
                        onMouseEnter={() => setHoveredTab(tab)}
                        onMouseLeave={() => setHoveredTab(null)}
                      >
                        {hoveredTab === tab && activeTab !== tab && (
                          <motion.span
                            layoutId="tab-highlight"
                            className="absolute inset-0 bg-[#cbd5e1]/50 dark:bg-white/5 rounded-[10px] z-[-1]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                        <span className="relative z-10">
                          {tab === "cards"
                            ? "Features"
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
                  <h3 className="text-2xl font-medium tracking-tight text-center">Platform Users</h3>
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                    Empowering distinct roles with specialized tools and cohesive educational experiences.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ModernFeatureCard
                      title="Students"
                      description="Access conversational textbooks that provide personalized explanations, cohesive course materials, and more time to focus on understanding concepts."
                      icon={GraduationCap}
                      delay={0.1}
                      isStudent={true}
                      imageSrc="/student_textbook.png"
                    />
                    <ModernFeatureCard
                      title="Instructors"
                      description="Get an AI co-instructor that knows their course, aligns with their teaching style, and cuts course build time from weeks to hours."
                      icon={Users}
                      delay={0.2}
                      isInstructor={true}
                      imageSrc="/instructor_ai.png"
                    />
                    <ModernFeatureCard
                      title="Administrators"
                      description="Deploy consistent, high-quality courses at scale with LTI-compliant integration, FERPA-compliant architecture, version control, and best-practice AI implementation."
                      icon={Building}
                      delay={0.3}
                      isAdmin={true}
                      imageSrc="/admin_architecture.png"
                    />
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
                        alignment="center"
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
                        alignment="center"
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
                        imageSrc="/showcase/newtonian.webp"
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
                        imageSrc="/showcase/Quantum-mechanics.webp"
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
                        imageSrc="/showcase/newtonian-mechanics.webp"
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
