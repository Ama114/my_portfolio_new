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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted">
        <div className="absolute inset-0 bg-foreground/5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <p className="text-foreground font-mono text-lg md:text-xl mb-6 animate-slide-in-left">{"Hi, my name is"}</p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 text-foreground whitespace-nowrap">       
            {name}
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muted-foreground mb-6 text-balance animate-scale-in">
              Data Science Student & Web Developer
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed text-pretty animate-fade-in-up-delay">
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
