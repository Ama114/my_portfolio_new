"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import ParticleBackground from "@/components/ParticleBackground"

export default function Hero() {
  const name = "Vishwa Darshana"

  return (
    // වෙනස්කම 1: පසුබිම් පාට (Background Color)
    // bg-white = Light mode එකේදී සුදු පාට
    // dark:bg-black = Dark mode එකේදී කළු පාට
    // selection:bg-primary/20 = අකුරු select කරද්දී එන පාට
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-300 selection:bg-primary/20">
      
      <ParticleBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            
            {/* වෙනස්කම 2: කුඩා හැඳින්වීම */}
            {/* text-gray-600 = Light mode එකේදී තද අළු පාට */}
            {/* dark:text-muted-foreground = Dark mode එකේදී ලා අළු පාට */}
            <p className="text-gray-600 dark:text-muted-foreground font-mono text-lg md:text-xl tracking-wide">
              Hi, my name is
            </p>

            {/* වෙනස්කම 3: ප්‍රධාන නම */}
            {/* text-black = Light mode එකේදී කළු පාට */}
            {/* dark:text-white = Dark mode එකේදී සුදු පාට */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-black dark:text-white mb-6 drop-shadow-xl dark:drop-shadow-2xl">
              {name}
            </h1>

            {/* වෙනස්කම 4: Job Title (Gradient Text) */}
            {/* Light Mode: කළු සිට අළු දක්වා (from-black to-gray-600) */}
            {/* Dark Mode: සුදු සිට අළු දක්වා (dark:from-white dark:to-gray-600) */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600 dark:from-white dark:via-gray-400 dark:to-gray-600">
              Data Science Student & Web Developer
            </h2>

            {/* වෙනස්කම 5: විස්තරය */}
            {/* text-gray-700 = Light mode */}
            {/* dark:text-gray-400 = Dark mode */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Final-year Data Science undergraduate at SLTC Research University. 
              Turning raw data into actionable insights and building modern web solutions.
            </p>

            {/* Buttons (මේවා shadcn/ui නිසා ඉබේම පාට මාරු වෙනවා ඇති, නැත්නම් කියන්න) */}
            <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
              <Button size="lg" className="rounded-full" asChild>
                <a href="#projects">View My Work <ArrowDown className="ml-2 h-4 w-4"/></a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            {/* වෙනස්කම 6: Social Icons */}
            <div className="flex items-center justify-center gap-8 pt-8">
              {/* Light mode එකේදී කළු පාටට hover වෙනවා, Dark mode එකේදී සුදු පාටට */}
              <a href="https://github.com/Ama114" target="_blank" className="text-gray-600 dark:text-gray-500 hover:text-black dark:hover:text-white transition-all transform hover:scale-110"><Github className="h-7 w-7" /></a>
              <a href="https://www.linkedin.com/in/vishwa-darshana-5186a4319" target="_blank" className="text-gray-600 dark:text-gray-500 hover:text-black dark:hover:text-white transition-all transform hover:scale-110"><Linkedin className="h-7 w-7" /></a>
              <a href="mailto:amathun340@gmail.com" className="text-gray-600 dark:text-gray-500 hover:text-black dark:hover:text-white transition-all transform hover:scale-110"><Mail className="h-7 w-7" /></a>
            </div>
            
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        {/* Light mode එකේදී කළු, Dark mode එකේදී සුදු */}
        <ArrowDown className="h-6 w-6 text-black dark:text-white" />
      </div>

    </section>
  )
}