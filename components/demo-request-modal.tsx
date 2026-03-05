"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Check } from "lucide-react"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"
import { cn } from "@/lib/utils"

interface DemoRequestModalProps {
    isOpen: boolean
    onClose: () => void
}

export function DemoRequestModal({ isOpen, onClose }: DemoRequestModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSuccess(true)

        // Close modal after success message
        setTimeout(() => {
            setIsSuccess(false)
            onClose()
        }, 2000)
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white dark:bg-black border border-white/20 dark:border-white/10 shadow-2xl"
                    >
                        {/* Glassmorphic Background Effect */}
                        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/5 via-transparent to-red-500/5 pointer-events-none" />

                        {/* Header */}
                        <div className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-border/10">
                            <h2 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600 dark:from-blue-400 dark:to-red-400">
                                Request a Demo
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/20"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="relative z-10 p-6">
                            {isSuccess ? (
                                <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                                        <Check className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="text-xl font-medium">Request Sent!</h3>
                                    <p className="text-foreground">
                                        We've received your request and will get back to you shortly.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-base font-medium text-foreground">
                                            Full Name
                                        </label>
                                        <input
                                            id="name"
                                            required
                                            type="text"
                                            className="w-full px-4 py-2 rounded-lg bg-muted/50 border border-border/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-base font-medium text-foreground">
                                                Work Email
                                            </label>
                                            <input
                                                id="email"
                                                required
                                                type="email"
                                                className="w-full px-4 py-2 rounded-lg bg-muted/50 border border-border/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                                placeholder="john@university.edu"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="org" className="text-base font-medium text-foreground">
                                                Institution
                                            </label>
                                            <input
                                                id="org"
                                                required
                                                type="text"
                                                className="w-full px-4 py-2 rounded-lg bg-muted/50 border border-border/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                                placeholder="University Name"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-base font-medium text-foreground">
                                            Message (Optional)
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={3}
                                            className="w-full px-4 py-2 rounded-lg bg-muted/50 border border-border/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                                            placeholder="Tell us about your specific needs..."
                                        />
                                    </div>

                                    <div className="pt-4">
                                        <GradientButton
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full h-11"
                                            gradientFrom="from-red-600"
                                            gradientTo="to-red-700"
                                            gradientHoverFrom="from-red-500"
                                            gradientHoverTo="to-red-600"
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center gap-2">
                                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Sending...
                                                </div>
                                            ) : (
                                                "Submit Request"
                                            )}
                                        </GradientButton>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
