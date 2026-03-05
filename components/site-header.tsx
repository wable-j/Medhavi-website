"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "Features", link: "#features" },
  { name: "Courses", link: "#components" },
  { name: "Testimonials", link: "#testimonials" },
  // { name: "Pricing", link: "#pricing" },
  // { name: "Blog", link: "#blog" },
  { name: "FAQ", link: "#faq" },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full z-50">
      <Navbar className="top-4">
        {/* Desktop Navigation */}
        <NavBody>
          <Link href="/" className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-base font-normal text-black">
            <Icons.logo className="h-6 w-6 fill-black dark:fill-white" />
            <span className="font-medium text-black dark:text-white">Medhavy</span>
          </Link>

          <NavItems items={navItems} />

          <div className="flex items-center gap-4 relative z-50">
            <ModeToggle />
            <NavbarButton
              variant="primary"
              href="https://physics-mechanics.medhavi.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 to-red-700 !text-white border-0 dark:bg-white dark:text-black dark:bg-none hover:from-red-700 hover:to-red-800 hover:!text-white"
            >
              Sign In
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <Link href="/" className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-base font-normal text-black">
              <Icons.logo className="h-6 w-6 fill-black dark:fill-white" />
              <span className="font-medium text-black dark:text-white">Medhavy</span>
            </Link>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={(e) => {
                  if (item.link.startsWith("#")) {
                    e.preventDefault();
                    const target = document.querySelector(item.link);
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="relative text-base text-foreground dark:text-foreground/80"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 !text-white border-0 dark:bg-transparent dark:text-white dark:bg-none hover:from-red-700 hover:to-red-800 hover:!text-white"
                href="#login"
              >
                Sign in
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
                href="#register"
              >
                Get Started
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
