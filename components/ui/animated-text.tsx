"use client"

import { useEffect } from "react"
import { motion, useAnimation, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"


type AnimationType = "fade" | "slide" | "bounce" | "typewriter" | "wave"

type AnimatedTextProps = {
  text: string
  variant?: "heading" | "paragraph"
  className?: string
  once?: boolean
  delay?: number
  duration?: number
  staggerChildren?: number
  animation?: AnimationType
  color?: string
}

// ... (imports)

// Animation variants
const defaultAnimations: Record<AnimationType, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slide: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  bounce: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.5 } },
  },
  typewriter: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.1 }, // Fast fade in per char
    },
  },
  wave: {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  },
}

export function AnimatedText({
  text,
  variant = "heading",
  className,
  once = true,
  delay = 0,
  duration = 0.5,
  staggerChildren, // removed default here to calculate it if type is typewriter
  animation = "slide",
  color,
}: AnimatedTextProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, inView, once])

  // Handle character-based animations (wave, typewriter)
  if (animation === "wave" || animation === "typewriter") {
    // Calculate stagger for typewriter if not provided
    const calculatedStagger = staggerChildren ?? (animation === "typewriter" ? duration / (text.length || 1) : 0.03)

    return (
      <motion.div
        ref={ref}
        className={cn("inline-block", className)}
        initial="hidden"
        animate={controls}
        transition={{ staggerChildren: calculatedStagger, delayChildren: delay }}
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            className={cn(animation === "wave" ? "inline-block" : "inline")} // inline for typewriter to keep flow/gradient potentially better
            custom={i}
            variants={defaultAnimations[animation]}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={cn(variant === "heading" ? "font-heading" : "text-muted-foreground opacity-70", className)}
      initial="hidden"
      animate={controls}
      variants={defaultAnimations[animation]}
      transition={{ duration, delay }}
      style={{ color }}
    >
      {text}
    </motion.div>
  )
}
