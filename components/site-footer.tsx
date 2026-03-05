import Link from "next/link"
import { Icons } from "@/components/icons"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-lg">
      <div className="container flex flex-col gap-10 py-16">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex flex-1 flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Icons.logo className="h-6 w-6" />
              <span className="font-heading text-xl tracking-tight">Medhavi</span>
            </Link>
            <p className="text-foreground max-w-sm text-base">
              Medhavy turns textbooks into AI-curated, conversational courses inside any LTI-compliant LMS—reducing
              faculty workload, unifying fragmented content, and giving students effortless access to knowledge.
              <br />
              <br />
              Led by Professor Sridhar Srinivas with support from Humanitarians AI fellows.
            </p>
            <div className="flex gap-4">
              <Link href="https://twitter.com" target="_blank" rel="noreferrer" className="glassmorphic-icon">
                <Icons.twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://github.com" target="_blank" rel="noreferrer" className="glassmorphic-icon">
                <Icons.gitHub className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://discord.com" target="_blank" rel="noreferrer" className="glassmorphic-icon">
                <Icons.discord className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-medium tracking-tight">Product</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#features"
                    className="text-base text-foreground transition-colors hover:text-foreground"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-base text-foreground transition-colors hover:text-foreground"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#components"
                    className="text-base text-foreground transition-colors hover:text-foreground"
                  >
                    Components
                  </Link>
                </li>
                <li>
                  <Link
                    href="#changelog"
                    className="text-base text-foreground transition-colors hover:text-foreground"
                  >
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-medium tracking-tight">Company</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#about"
                    className="text-base text-foreground transition-colors hover:text-foreground"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#blog"
                    className="text-base text-foreground transition-colors hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#careers"
                    className="text-base text-foreground transition-colors hover:text-foreground"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-base text-foreground transition-colors hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-medium tracking-tight">Legal</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#privacy"
                    className="text-base text-foreground transition-colors hover:text-foreground"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#terms"
                    className="text-base text-foreground transition-colors hover:text-foreground"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#cookies"
                    className="text-base text-foreground transition-colors hover:text-foreground"
                  >
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link
                    href="#licenses"
                    className="text-base text-foreground transition-colors hover:text-foreground"
                  >
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-border/40" />
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-base text-foreground">
            &copy; {new Date().getFullYear()} Medhavi. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#terms"
              className="text-base text-foreground transition-colors hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="#privacy"
              className="text-base text-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  )
}
