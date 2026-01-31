"use client"

import { ArrowDown, Github, Linkedin, Mail, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import ParticleBackground from "@/components/ParticleBackground"
import Image from "next/image"
// 1. අලුත් Library එක Import කරගන්න
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const name = "Vishwa Darshana"

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-300 selection:bg-primary/20">
      
      {/* Background Animation (Particles) */}
      <ParticleBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Layout: 1 Column on Mobile, 2 Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* --- LEFT SIDE: TEXT AND BUTTONS --- */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-6 animate-fade-in-up">
            
            {/* Greeting with Typewriter Effect */}
            <div className="text-gray-600 dark:text-muted-foreground font-mono text-lg md:text-xl tracking-wide min-h-[30px]">
              <TypeAnimation
                sequence={[
                  'Hi, my name is', // ටයිප් වෙන්න ඕන වචනය
                  1000, // ටයිප් වුණාට පස්සේ තත්පරයක් ඉන්නවා
                ]}
                wrapper="span"
                speed={50} // ටයිප් වෙන වේගය
                style={{ display: 'inline-block' }}
                repeat={0} // 0 = එක පාරයි ටයිප් වෙන්නේ (Loop වෙන්නේ නෑ)
                cursor={true} // අගට එන ඉර (Cursor) එක පෙන්නන්න
              />
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-black dark:text-white mb-6 drop-shadow-xl dark:drop-shadow-2xl">
              {name}
            </h1>

            {/* Job Title with Gradient Color */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600 dark:from-white dark:via-gray-400 dark:to-gray-600">
              Data Science Student & Web Developer
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Final-year Data Science undergraduate at SLTC Research University. 
              Turning raw data into actionable insights and building modern web solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-4">
              <Button size="lg" className="rounded-full" asChild>
                <a href="#projects">View My Work <ArrowDown className="ml-2 h-4 w-4"/></a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <a href="https://github.com/Ama114" target="_blank" className="text-gray-600 dark:text-gray-500 hover:text-black dark:hover:text-white transition-all transform hover:scale-110"><Github className="h-7 w-7" /></a>
              <a href="https://www.linkedin.com/in/vishwa-darshana-5186a4319" target="_blank" className="text-gray-600 dark:text-gray-500 hover:text-black dark:hover:text-white transition-all transform hover:scale-110"><Linkedin className="h-7 w-7" /></a>
              <a href="mailto:amathun340@gmail.com" className="text-gray-600 dark:text-gray-500 hover:text-black dark:hover:text-white transition-all transform hover:scale-110"><Mail className="h-7 w-7" /></a>
            </div>
          </div>


          {/* --- RIGHT SIDE: PROFILE IMAGE WITH ANIMATION --- */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up delay-200">
            
            {/* Animation Container */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[550px] lg:h-[550px] flex items-center justify-center">
              
              {/* 1. The Static Outer Circle (The Track) */}
              <div className="absolute inset-0 rounded-full border border-gray-300 dark:border-white/30" />

              {/* 2. The Rotating Part (Animation) */}
              <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                {/* The Floating Capsule with Icon */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-12 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-gray-200 dark:border-white/20">
                  <Code className="w-7 h-7 text-black dark:text-white" />
                </div>
              </div>

              {/* 3. The Main Profile Picture */}
              <div className="relative w-60 h-60 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 shadow-2xl">
                 <Image 
                  src="/vishwa.jpg"
                  alt="Profile"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bouncing Arrow at the bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden lg:block">
        <ArrowDown className="h-6 w-6 text-black dark:text-white" />
      </div>

    </section>
  )
}