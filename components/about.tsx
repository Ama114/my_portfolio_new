"use client"

import { useEffect, useRef, useState } from "react"
import { Brain, Code2, Database, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const features = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Building predictive models and AI solutions",
    },
    {
      icon: Database,
      title: "Data Analysis",
      description: "Extracting insights from complex datasets",
    },
    {
      icon: Code2,
      title: "Web Development",
      description: "Creating responsive and modern web applications",
    },
    {
      icon: TrendingUp,
      title: "Data Visualization",
      description: "Presenting data through compelling visuals",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground font-mono text-xl md:text-2xl">01.</span>{" "}
              <span className="text-foreground">About Me</span>
            </h2>
            <div className="w-20 h-1 mx-auto bg-foreground" />
          </div>

          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Text content on the left */}
              <div className="space-y-6">
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  I'm an enthusiastic and detail-oriented final-year Data Science undergraduate at SLTC Research
                  University with a strong foundation in data analysis, programming, and machine learning. My journey in
                  tech combines the analytical power of data science with the creativity of web development.
                </p>
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  Skilled in Python for data manipulation and visualization, I have hands-on experience building web
                  applications with modern frameworks like React. I'm proficient in tools like Microsoft Excel, Power
                  BI, and various databases including MongoDB and MySQL.
                </p>
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  I'm eager to apply my academic knowledge to real-world challenges in data-driven environments and
                  contribute to innovative projects. As a volunteer at the University LEO Club, I believe in giving back
                  to the community while continuously developing my technical expertise.
                </p>
              </div>

              {/* Profile image on the right */}
              <div className="flex justify-center md:justify-end">
                <div className="relative group perspective-1000">
                  <div className="absolute -inset-1 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500 bg-foreground" />
                  <div className="relative transition-3d animate-float">
                    <Image
                      src="/images/profile.jpg"
                      alt="Vishwa Darshana"
                      width={500}
                      height={500}
                      className="rounded-2xl shadow-2xl object-cover w-full max-w-md aspect-square transition-transform duration-500 group-hover:scale-[1.02]"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="p-6 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-2 bg-card border-border"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <feature.icon className="h-12 w-12 text-foreground mb-4" />
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-card-foreground">{feature.title}</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
