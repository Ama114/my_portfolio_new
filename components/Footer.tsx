"use client"

import { Github, Linkedin, Mail, ArrowUpRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  
  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/Ama114" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/vishwa-darshana-5186a4319" },
    { name: "Email", icon: Mail, href: "mailto:avdarshana2001@gmail.com" },
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="relative border-t border-border/40 bg-background overflow-hidden">
      
      {/* Background Gradient Blob (Optional for Glow Effect) */}
      <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        
        {/* --- Top Section: Big Call to Action --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
              Let's work together.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto md:mx-0">
              Turning raw data into insights and ideas into reality.
            </p>
          </div>
          
          {/* Main Action Button */}
          <Button size="lg" className="rounded-full text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-transform" asChild>
            <a href="mailto:amathun340@gmail.com">
              Get in Touch <Mail className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12 border-t border-border/40">
          
          {/* --- Brand Column (4 Cols) --- */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Vishwa Darshana
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A Data Science undergraduate tailored to building modern web solutions and AI-driven applications.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-secondary hover:bg-foreground hover:text-background transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* --- Links Column (Start from right) --- */}
          <div className="md:col-span-7 flex flex-col md:flex-row justify-center md:justify-end gap-10 md:gap-24 text-center md:text-left">
            
            {/* Quick Links Group */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-foreground text-lg">Navigation</h4>
              {quickLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center justify-center md:justify-start gap-1 group"
                >
                  {link.name}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </a>
              ))}
            </div>

            {/* Contact Info Group */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-foreground text-lg">Contact</h4>
              <p className="text-muted-foreground">Padukka, Sri Lanka</p>
              <a href="mailto:amathun340@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                avdarshana2001@gmail.com
              </a>
            </div>

          </div>
        </div>

        {/* --- Bottom Copyright --- */}
        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Vishwa Darshana.</p>
           
        </div>

      </div>
    </footer>
  )
}