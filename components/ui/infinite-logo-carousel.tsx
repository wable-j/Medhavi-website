"use client"

import React from "react"
import { motion } from "framer-motion"

const universities1 = [
    { name: "Stanford University", icon: "S" },
    { name: "MIT", icon: "M" },
    { name: "Harvard University", icon: "H" },
    { name: "University of Oxford", icon: "O" },
    { name: "Cambridge University", icon: "C" },
]

const universities2 = [
    { name: "ETH Zurich", icon: "E" },
    { name: "Caltech", icon: "C" },
    { name: "Imperial College", icon: "I" },
    { name: "Berkeley", icon: "B" },
    { name: "Princeton", icon: "P" },
]

export function InfiniteLogoCarousel() {
    return (
        <div className="w-full py-12 flex flex-col items-center justify-center overflow-hidden gap-8 opacity-80">
            <h3 className="text-sm font-bold tracking-widest uppercase gradient-text">
                Trusted by Leading Universities
            </h3>

            {/* First Row - Moves Left */}
            <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                <motion.div
                    className="flex flex-nowrap gap-16 pr-16"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {/* Quadruple the list to ensure smooth infinite effect on wide screens with fewer items */}
                    {[...universities1, ...universities1, ...universities1, ...universities1].map((uni, idx) => (
                        <div key={idx} className="flex items-center gap-3 group opacity-50 hover:opacity-100 transition-opacity cursor-default">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50 text-xs font-bold text-muted-foreground group-hover:bg-blue-500/10 group-hover:text-blue-500 transition-colors border border-transparent group-hover:border-blue-500/20">
                                {uni.icon}
                            </div>
                            <span className="text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                                {uni.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Second Row - Moves Right */}
            <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                <motion.div
                    className="flex flex-nowrap gap-16 pr-16"
                    animate={{
                        x: ["-50%", "0%"],
                    }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {[...universities2, ...universities2, ...universities2, ...universities2].map((uni, idx) => (
                        <div key={idx} className="flex items-center gap-3 group opacity-50 hover:opacity-100 transition-opacity cursor-default">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50 text-xs font-bold text-muted-foreground group-hover:bg-red-500/10 group-hover:text-red-500 transition-colors border border-transparent group-hover:border-red-500/20">
                                {uni.icon}
                            </div>
                            <span className="text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                                {uni.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
