"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

// Variation 2: Simple Portfolio - About, Work, Contact
export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Variation 2: Simple Portfolio
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/60 backdrop-blur-md border-b border-border"
          : "bg-background/20 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground hover:opacity-80 transition-opacity">
            AVD
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group px-3 py-2 rounded-md text-lg md:text-xl font-medium text-muted-foreground transition-colors hover:text-foreground overflow-hidden before:content-[''] before:absolute before:inset-0 before:rounded-md before:bg-foreground/10 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Button size="sm" className="ml-4" asChild>
              <a href="/resume">Resume</a>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button className="text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group py-2 px-3 rounded-md text-xl font-medium text-muted-foreground transition-colors hover:text-foreground overflow-hidden before:content-[''] before:absolute before:inset-0 before:rounded-md before:bg-foreground/10 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button size="sm" className="w-full" asChild>
              <a href="/resume" onClick={() => setIsMobileMenuOpen(false)}>Resume</a>
            </Button>
            <div className="flex justify-center pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

