import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageTransition } from "@/components/page-transition"
import { Analytics } from "@vercel/analytics/next"

import "@/app/globals.css"
import { Suspense } from "react"

// Use only Google Fonts to avoid any local font references
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
})

const fontHeading = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
})

export const metadata: Metadata = {
  title: "Medhavy",
  description: "Medhavy turns textbooks into AI-curated, conversational courses inside any LTI-compliant LMS—reducing faculty workload, unifying fragmented content, and giving students effortless access to knowledge.",
  keywords: ["Medhavy", "LTI", "LMS", "AI-curated courses", "faculty workload", "unifying fragmented content", "effortless access to knowledge", "AI-curated courses", "faculty workload", "unifying fragmented content", "effortless access to knowledge"],
  generator: 'Medhavy'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-sans antialiased font-light",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <Suspense>
              <PageTransition>
                <div className="flex-1">{children}</div>
              </PageTransition>
            </Suspense>
            <SiteFooter />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
