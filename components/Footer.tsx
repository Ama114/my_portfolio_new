"use client"

import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react"

export default function Footer() {
  
  // Social Links Data
  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/Ama114" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/vishwa-darshana-5186a4319" },
    { name: "Email", icon: Mail, href: "mailto:amathun340@gmail.com" },
  ]

  // Quick Links Data
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* 1. Brand & Description */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Vishwa Darshana
            </h2>
            <p className="text-muted-foreground text-base max-w-xs mx-auto md:mx-0">
              Building digital experiences with code and creativity. 
              Let's create something amazing together.
            </p>
          </div>

          {/* 2. Quick Links (Navigation) */}
          <div className="flex flex-col justify-center gap-4 text-base font-medium text-muted-foreground">
            {quickLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="hover:text-foreground transition-colors duration-300 hover:underline underline-offset-4"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* 3. Social Icons */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/80 hover:text-foreground transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                <social.icon className="w-15 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* --- Bottom Separator --- */}
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          
          <p>© {new Date().getFullYear()} Vishwa Darshana.</p>
          
          

        </div>
      </div>
    </footer>
  )
}