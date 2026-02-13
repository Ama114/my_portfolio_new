"use client"

import { useEffect, useRef, useState } from "react"
import { 
  Brain, 
  Database, 
  Layout, 
  Server, 
  GitBranch, 
  BarChart3, 
  FileSpreadsheet, 
  Terminal 
} from "lucide-react"
import Image from "next/image"
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["700"]
})

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const mainAreas = [
    { title: "Machine Learning", icon: Brain },
    { title: "Frontend Dev", icon: Layout },
    { title: "Backend Dev", icon: Server },
    { title: "Databases", icon: Database },
    { title: "Data Visualization", icon: BarChart3 },
    { title: "Version Control", icon: GitBranch },
    { title: "Office Tools", icon: FileSpreadsheet }
  ]

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-muted/20 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Large Size */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className={`${spaceGrotesk.className} text-4xl md:text-6xl font-bold text-foreground mb-6`}>
            About Me.
          </h2>
          <div className="h-2 w-24 bg-foreground/80 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Side: Profile Image */}
          <div className={`md:col-span-5 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="relative group rounded-3xl overflow-hidden h-full min-h-[500px] border border-border bg-muted/20 shadow-2xl">
              <Image
                src="/images/profile.jpg"
                alt="Vishwa Darshana"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent text-white">
                <p className="font-bold text-3xl mb-1">Vishwa Darshana</p>
                <p className="text-lg opacity-90">Data Science Undergrad</p>
              </div>
            </div>
          </div>

          {/* Right Side: Details */}
          <div className="md:col-span-7 flex flex-col gap-8">
            
            {/* Bio - Large Text */}
            <div className={`p-8 md:p-10 rounded-3xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Terminal className="w-8 h-8" />
                <span>The Story</span>
              </h3>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                I am a final-year undergraduate at <span className="text-foreground font-bold">SLTC Research University</span>, bridging the gap between raw data and impactful web experiences. 
                <br /><br />
                My passion lies in building intelligent applications using <span className="text-foreground font-bold">Python & Machine Learning</span>, while crafting seamless user interfaces with <span className="text-foreground font-bold">React</span>.
              </p>
            </div>

            {/* Tech Arsenal - Main Topics Only (Large Version) */}
            <div className={`p-8 rounded-3xl border border-border bg-card transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
               <h4 className="text-base uppercase tracking-widest text-muted-foreground mb-6 font-bold">Tech Arsenal</h4>
               
               {/* Grid of Main Topics */}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {mainAreas.map((area) => (
                   <div 
                    key={area.title} 
                    className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-background hover:bg-foreground hover:text-background transition-colors duration-300 group cursor-default shadow-sm"
                   >
                     <area.icon className="w-6 h-6 text-foreground group-hover:text-background transition-colors" />
                     <span className="font-bold text-lg md:text-xl">{area.title}</span>
                   </div>
                 ))}
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}