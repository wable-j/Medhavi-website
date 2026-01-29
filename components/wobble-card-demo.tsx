"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { AnimatedText } from "@/components/ui/animated-text";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function WobbleCardDemo() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 overflow-hidden">
            <div className="container px-4 md:px-6">
                <ScrollReveal>
                    <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
                        <div className="space-y-4">
                            <AnimatedText
                                text="What Medhavi Does "
                                variant="heading"
                                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                                animation="wave"
                                delay={2.8}
                            />
                            <AnimatedText
                                text="Transforming static educational content into intelligent, interactive experiences."
                                variant="paragraph"
                                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                                animation="fade"
                                delay={3.1}
                            />
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={1.0}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                        <WobbleCard
                            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                            className=""
                        >
                            <div className="max-w-xs">
                                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                    Conversational Textbooks Use Natural Language
                                </h2>
                                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                                    Students ask questions in natural language and receive answers grounded in your course content—created using conceptual scaffolding principles.
                                </p>
                            </div>
                            <img
                                src="/textbook-interface.png"
                                width={500}
                                height={500}
                                alt="textbook interface demo"
                                className="absolute -right-1 lg:-right-[10%] grayscale filter -bottom-10 object-contain rounded-2xl"
                            />
                        </WobbleCard>
                        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                AI As Co-Instructor
                            </h2>
                            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                                Medhavy creates summaries, quizzes, and lecture notes. AI proposes. You dispose. You stay in control.
                            </p>
                        </WobbleCard>
                        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-blue-900">
                            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                Unified Learning Platform
                            </h2>
                            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                                One cohesive experience. Unifies textbooks, PDFs, and LMS content—eliminating platform jumping.
                            </p>
                        </WobbleCard>
                        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-indigo-800 min-h-[300px]">
                            <div className="max-w-sm">
                                <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                    Effortless Course Creation
                                </h2>
                                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                                    Imports content, builds LMS modules, and generates assessments. Weeks of prep now takes an afternoon.
                                </p>
                            </div>
                            <img
                                src="/admin-dashboard.png"
                                width={500}
                                height={500}
                                alt="admin dashboard demo"
                                className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                            />
                        </WobbleCard>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
