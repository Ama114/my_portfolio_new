"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [textRevealed, setTextRevealed] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)

    setTimeout(() => setTextRevealed(true), 300)

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const name = "Vishwa Darshana"
  const nameChars = name.split("")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted">
        <div
          className="absolute inset-0 opacity-30 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 200, 255, 0.15), transparent 50%)`,
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-3/4 left-1/3 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <p className="text-accent font-mono text-sm md:text-base mb-4 animate-slide-in-left">{"Hi, my name is"}</p>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-balance">
              <span className="inline-block">
                {nameChars.map((char, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent animate-char-reveal"
                    style={{
                      animationDelay: `${index * 0.05}s`,
                      opacity: textRevealed ? 1 : 0,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6 text-balance animate-scale-in">
              Data Science Student & Web Developer
            </h2>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty animate-fade-in-up-delay">
              Final-year Data Science undergraduate at SLTC Research University with expertise in Python, machine
              learning, and web development. Passionate about turning data into actionable insights and building
              innovative solutions.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Button size="lg" className="group animate-fade-in-up" style={{ animationDelay: "0.8s" }} asChild>
                <a href="#projects">
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="animate-fade-in-up bg-transparent"
                style={{ animationDelay: "0.9s" }}
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6">
              <a
                href="https://github.com/Ama114"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-all hover:scale-110 animate-pop-in"
                style={{ animationDelay: "1s" }}
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/vishwa-darshana-5186a4319"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-all hover:scale-110 animate-pop-in"
                style={{ animationDelay: "1.1s" }}
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:amathun340@gmail.com"
                className="text-muted-foreground hover:text-accent transition-all hover:scale-110 animate-pop-in"
                style={{ animationDelay: "1.2s" }}
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
