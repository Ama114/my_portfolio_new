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

  // Email send  function 
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
            if (formRef.current) formRef.current.reset() // Form clear
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
      value: "amathun340@gmail.com",
      href: "mailto:amathun340@gmail.com",
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
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header Section (No changes here) */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-foreground font-mono text-xl md:text-2xl">05.</span>{" "}
              <span className="text-foreground">Get In Touch</span>
            </h2>
            <div className="w-20 h-1 mx-auto mb-8 bg-foreground" />
            <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
              I'm currently seeking opportunities to contribute to innovative projects and further develop my technical
              expertise. Whether you have a question or want to discuss potential collaborations, feel free to reach
              out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column: Contact Info & Socials (No changes here) */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <Card
                  key={info.title}
                  className="p-6 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 bg-card border-border"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <a href={info.href} className="flex items-center gap-4 group">
                    <div className="p-3 bg-foreground/10 rounded-lg group-hover:bg-foreground/20 transition-colors">
                      <info.icon className="h-7 w-7 text-foreground" />
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-muted-foreground mb-1">{info.title}</p>
                      <p className="font-semibold text-card-foreground group-hover:text-foreground transition-colors text-base md:text-lg lg:text-xl">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}

              <div className="pt-4">
                <h4 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Connect With Me</h4>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <Card
                      key={social.title}
                      className="p-6 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 bg-card border-border"
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group"
                      >
                        <div className="p-3 bg-foreground/10 rounded-lg group-hover:bg-foreground/20 transition-colors">
                          <social.icon className="h-7 w-7 text-foreground" />
                        </div>
                        <div>
                          <p className="text-base md:text-lg text-muted-foreground mb-1">{social.title}</p>
                          <p className="font-semibold text-card-foreground group-hover:text-foreground transition-colors text-base md:text-lg">
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
            <Card className="p-8 bg-card border-border">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-card-foreground">Send a Message</h3>
              
          
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-base md:text-lg font-medium mb-2 text-card-foreground">
                    Name
                  </label>
                
                  <Input 
                    id="name" 
                    name="user_name" 
                    placeholder="Your name" 
                    required 
                    className="bg-background border-border text-base md:text-lg h-12" 
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-base md:text-lg font-medium mb-2 text-card-foreground">
                    Email
                  </label>
                   <Input
                    id="email"
                    type="email"
                    name="user_email"
                    placeholder="your.email@example.com"
                    required
                    className="bg-background border-border text-base md:text-lg h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-base md:text-lg font-medium mb-2 text-card-foreground">
                    Message
                  </label>

                   <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    required
                    rows={6}
                    className="bg-background border-border resize-none text-base md:text-lg"
                  />
                </div>

                <Button type="submit" className="w-full group" disabled={isSending}>
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

      <footer className="mt-20 pt-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">© {new Date().getFullYear()} Vishwa Darshana. Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </section>
  )
}