"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TypewriterProps {
    words: string[]
    className?: string
    cursorClassName?: string
    typingSpeed?: number
    deletingSpeed?: number
    delayBetweenWords?: number
}

export function Typewriter({
    words,
    className,
    cursorClassName,
    typingSpeed = 80,
    deletingSpeed = 40,
    delayBetweenWords = 3000,
}: TypewriterProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [currentText, setCurrentText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentWord = words[currentWordIndex]

        if (!isDeleting && currentText === currentWord) {
            const timeout = setTimeout(() => {
                setIsDeleting(true)
            }, delayBetweenWords)
            return () => clearTimeout(timeout)
        }

        if (isDeleting && currentText === "") {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
            return
        }

        const timeout = setTimeout(() => {
            setCurrentText((prev) => {
                if (isDeleting) {
                    return prev.slice(0, -1)
                } else {
                    return currentWord.slice(0, prev.length + 1)
                }
            })
        }, isDeleting ? deletingSpeed : typingSpeed)

        return () => clearTimeout(timeout)
    }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords])

    return (
        <div className={cn("inline-flex items-center", className)}>
            <span>{currentText}</span>
            <span className={cn("ml-1 animate-pulse", cursorClassName)}>|</span>
        </div>
    )
}
