"use client"
import * as React from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

function FaqItem({ 
  question, 
  answer, 
  isOpen, 
  onToggle 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onToggle: () => void;
}) {
  return (
    <div className="glassmorphic-accordion-item border-b border-border/50 py-5">
      <button
        onClick={onToggle}
        className="flex w-full items-start text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm group"
      >
        <div className="flex-shrink-0 mt-[2px]">
          {isOpen ? (
            <Minus className="h-[20px] w-[20px] text-foreground transition-transform duration-200" strokeWidth={1.5} />
          ) : (
            <Plus className="h-[20px] w-[20px] text-foreground transition-transform duration-200" strokeWidth={1.5} />
          )}
        </div>
        <span className="text-base font-medium tracking-tight text-foreground transition-all group-hover:underline">
          {question}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pl-9 pt-3 pb-2 text-sm text-muted-foreground opacity-70">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FaqSection() {
  const faqs = [
    {
      question: "What is Medhavy?",
      answer: "Medhavy is an AI-powered intelligent textbook system that transforms static textbooks into conversational, interactive learning experiences inside your LMS. Students can ask questions in natural language and get answers grounded in your course content."
    },
    {
      question: "How is Medhavy different from ChatGPT or other AI tools?",
      answer: "Medhavy is specifically designed for STEM education and built on learning science principles. It integrates seamlessly with your LMS via LTI 1.3, maintains instructor control (\"AI proposes, you dispose\"), and provides scientifically accurate explanations rather than generic AI responses."
    },
    {
      question: "What does the name Medhavy mean?",
      answer: "मेधावी (Maydhavee) is Sanskrit for \"intellectually brilliant\"—the perfect name for an AI-powered intelligent textbook system."
    },
    {
      question: "What is LTI and why does it matter?",
      answer: "LTI (Learning Tools Interoperability) is the industry standard for connecting educational tools to learning management systems. It means Medhavy integrates seamlessly with your existing LMS—no separate logins, automatic grade sync, and launch directly from Canvas, Blackboard, Moodle, or any LTI-compliant platform."
    },
    {
      question: "Which LMS platforms does Medhavy support?",
      answer: "Medhavy works with any LTI 1.3 compliant learning management system, including Canvas, Blackboard, Moodle, D2L Brightspace, Schoology, and others."
    },
    {
      question: "Do students need separate accounts?",
      answer: "No. Students access Medhavy through single sign-on (SSO) via your LMS. They use the same login they already have."
    },
    {
      question: "How much time does Medhavy save instructors?",
      answer: "Traditional course build takes 40-60 hours. With Medhavy, expect 4-6 hours for review and refinement—about 90% time reduction."
    },
    {
      question: "Do I lose control over my course content?",
      answer: "No. Medhavy follows \"AI proposes, you dispose\" philosophy. You review, edit, approve, or reject all AI-generated content before students see it. You maintain complete editorial control."
    },
    {
      question: "Can Medhavy work with my existing course materials?",
      answer: "Yes. Medhavy imports textbooks, PDFs, videos, images, lab materials, code repositories, and more. It works with what you already have."
    },
    {
      question: "Will students just get AI to do their homework?",
      answer: "Medhavy is designed to promote learning, not provide answers. It uses Socratic questioning, encourages deeper thinking, and helps students understand concepts rather than just giving solutions."
    },
    {
      question: "How does Medhavy utilize Learning Science?",
      answer: "Medhavy is built on conceptual scaffolding, zone of proximal development, spaced repetition, retrieval practice, immediate feedback, and evidence-based teaching practices. It adapts explanations based on student questions and demonstrated understanding."
    },
    {
      question: "What makes Medhavy different for STEM courses?",
      answer: "Medhavy is specifically designed to handle scientific question answering, mathematical notation, complex visualizations, lab materials, and technical documentation that STEM courses require. It's not generic AI—it's purpose-built for STEM learning."
    },
    {
      question: "How does Medhavy scale across an institution?",
      answer: "Medhavy integrates at the institutional level via LTI. Once installed, instructors can add it to their courses without per-course IT setup. It is FERPA-compliant and uses secure data exchange protocols."
    }
  ]

  const [showAll, setShowAll] = React.useState(false)
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5)

  return (
    <section id="faq" className="w-full py-20 lg:py-32 bg-gradient-to-br from-blue-50/40 to-blue-100/30 dark:from-blue-950/20 dark:to-blue-900/20 overflow-hidden">
      <div className="container px-4 md:px-8 mx-auto xl:max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          <div className="md:col-span-5 lg:col-span-4 md:sticky md:top-32 h-fit">
            <ScrollReveal>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tighter gradient-text leading-[1.05]">
                Frequently <br className="hidden md:block" />
                asked <br className="hidden md:block" />
                questions
              </h2>
            </ScrollReveal>
          </div>

          <div className="md:col-span-7 lg:col-span-7 lg:col-start-6 flex flex-col pt-4 md:pt-0">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col border-t border-border/50">
                {visibleFaqs.map((faq, index) => (
                  <FaqItem 
                    key={index} 
                    question={faq.question} 
                    answer={faq.answer} 
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                  />
                ))}
              </div>

              {faqs.length > 5 && (
                <div className="mt-8 flex">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-primary px-8 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:ring-2 hover:ring-primary hover:ring-offset-2 ring-offset-background"
                  >
                    <span className="mr-2">{showAll ? "Show Less" : "Show More FAQs"}</span>
                    <span className="relative flex h-4 w-4 overflow-hidden">
                      <span className={`absolute transition-all duration-300 ${showAll ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                        ↓
                      </span>
                      <span className={`absolute transition-all duration-300 ${showAll ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                        ↑
                      </span>
                    </span>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/80 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </button>
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
