"use client"

import { useEffect, useRef, useState, FormEvent } from "react"
import emailjs from "@emailjs/browser"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSending, setIsSending] = useState(false)
  
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  // --- Glassmorphism Styles (Light & Dark Mode) ---
  
  // 1. Card Styles:
  // Light Mode: bg-white/40 (සුදු පාට වීදුරු), border-black/5 (සියුම් කළු දාරයක්)
  // Dark Mode: dark:bg-white/5 (අඳුරු වීදුරු), dark:border-white/10 (සුදු දාරයක්)
  const glassCardClass = "bg-white/40 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-xl"

  // 2. Input Styles:
  // Light Mode: bg-white/50 (සුදු පාට), text-gray-900 (කළු අකුරු)
  // Dark Mode: dark:bg-white/5 (අඳුරු), dark:text-white (සුදු අකුරු)
  const glassInputClass = "bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:bg-white/80 dark:focus:bg-white/10 focus:border-cyan-500/50 transition-all"

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const sendEmail = (e: FormEvent) => {
    e.preventDefault()
    setIsSending(true)

    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(
          (result) => {
            console.log(result.text)
            alert("Message sent successfully!")
            setIsSending(false)
            if (formRef.current) formRef.current.reset()
          },
          (error) => {
            console.log(error.text)
            alert("Failed to send message. Please try again.")
            setIsSending(false)
          }
        )
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "avdarshana2001@gmail.com",
      href: "mailto:avdarshana2001@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+94 76 857 7484",
      href: "tel:+94768577484",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kudhaduwegama, Uggalboda, Kalutara North",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/Ama114",
      href: "https://github.com/Ama114",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/vishwa-darshana",
      href: "https://www.linkedin.com/in/vishwa-darshana-5186a4319",
    },
  ]

  return (
    // Section Background: Light Mode = gray-50 , Dark Mode = zinc-950
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">
      
      {/* --- Ambient Background Glows --- */}
      
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 dark:bg-purple-500/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 dark:bg-blue-500/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xl md:text-2xl">05.</span>{" "}
              <span>Get In Touch</span>
            </h2>
            <div className="w-20 h-1 mx-auto mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
              I'm currently seeking opportunities to contribute to innovative projects. 
              Whether you have a question or want to discuss potential collaborations, feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Column: Info Cards */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              
              {contactInfo.map((info, index) => (
                <Card
                  key={info.title}
                  // use Glass Styles
                  className={`p-6 hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-300 ${glassCardClass}`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <a href={info.href} className="flex items-center gap-4 group">
                    <div className="p-3 bg-gray-100 dark:bg-white/10 rounded-lg group-hover:bg-cyan-500/10 dark:group-hover:bg-cyan-500/20 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 text-gray-700 dark:text-white transition-colors">
                      <info.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-1">{info.title}</p>
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors text-base md:text-lg lg:text-xl">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}

              <div className="pt-4">
                <h4 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">Connect With Me</h4>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <Card
                      key={social.title}
                      className={`p-6 hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-300 ${glassCardClass}`}
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group"
                      >
                        <div className="p-3 bg-gray-100 dark:bg-white/10 rounded-lg group-hover:bg-cyan-500/10 dark:group-hover:bg-cyan-500/20 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 text-gray-700 dark:text-white transition-colors">
                          <social.icon className="h-7 w-7" />
                        </div>
                        <div>
                          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-1">{social.title}</p>
                          <p className="font-semibold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors text-base md:text-lg">
                            {social.value}
                          </p>
                        </div>
                      </a>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <Card className={`p-8 ${glassCardClass}`}>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h3>
              
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-base md:text-lg font-medium mb-2 text-gray-700 dark:text-gray-200">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    name="user_name" 
                    placeholder="Your name" 
                    required 
                    className={`h-12 ${glassInputClass}`} 
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-base md:text-lg font-medium mb-2 text-gray-700 dark:text-gray-200">
                    Email
                  </label>
                   <Input
                    id="email"
                    type="email"
                    name="user_email"
                    placeholder="your.email@example.com"
                    required
                    className={`h-12 ${glassInputClass}`}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-base md:text-lg font-medium mb-2 text-gray-700 dark:text-gray-200">
                    Message
                  </label>
                   <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    required
                    rows={6}
                    className={`resize-none text-base md:text-lg ${glassInputClass}`}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border-none h-12 text-lg font-medium shadow-md" 
                  disabled={isSending}
                >
                  {isSending ? (
                    <>
                      Sending... <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-gray-200 dark:border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p className="text-sm">© {new Date().getFullYear()} Vishwa Darshana. Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </section>
  )
}