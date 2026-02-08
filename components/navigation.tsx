"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  weight: ["700"] 
})

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

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* --- Updated AVD Logo with Animation --- */}
          {/* --- Updated AVD Logo --- */}
      {/* --- Auto-Playing "Liquid Flow" Logo --- */}
      {/* --- Logo with New Font & Auto Animation --- */}
        <a 
          href="/" 
          className={`text-2xl md:text-3xl lg:text-4xl uppercase tracking-widest 
                    animate-liquid ${spaceGrotesk.className}`} 
          style={{ fontWeight: 700 }} // Extra bold look
        >
          AVD
        </a>
          {/* ---------------------------------------- */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group px-2 py-1 text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Button size="sm" className="ml-4 rounded-full px-6" asChild>
              <a href="/resume">Resume</a>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
              className="text-foreground p-2" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border h-screen">
          <div className="container mx-auto px-6 py-10 flex flex-col gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-3xl font-bold tracking-widest text-foreground border-b border-border/50 pb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button size="lg" className="w-full text-xl py-6 rounded-xl" asChild>
              <a href="/resume" onClick={() => setIsMobileMenuOpen(false)}>View Resume</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}