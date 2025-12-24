"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

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

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setVisibleCards((prev) => {
                const newVisible = [...prev]
                newVisible[index] = true
                return newVisible
              })
            }
          }
        })
      },
      { threshold: 0.3 },
    )

    cardRefs.current.forEach((card) => {
      if (card) cardObserver.observe(card)
    })

    return () => {
      observer.disconnect()
      cardObserver.disconnect()
    }
  }, [])

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "SQL", "R (Basic)"],
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Data Tools",
      skills: ["Microsoft Excel", "Power BI", "SPSS (Basic)", "Pandas", "NumPy", "Matplotlib"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "DevOps & Tools",
      skills: ["GitHub", "Docker (Basic)", "Git", "GitHub Collaboration"],
    },
    {
      title: "Office Tools",
      skills: ["Microsoft Word", "Microsoft PowerPoint", "Microsoft Excel"],
    },
    {
      title: "Soft Skills",
      skills: ["Problem-solving", "Presentation", "Communication", "Teamwork"],
    },
    {
      title: "Languages",
      skills: ["Sinhala (Native)", "English (Fluent)"],
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-foreground font-mono text-xl md:text-2xl">04.</span>{" "}
              <span className="text-foreground">Skills & Technologies</span>
            </h2>
            <div className="w-20 h-1 mx-auto bg-foreground" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className={`p-6 hover:shadow-lg hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 bg-card border-border group
                  ${visibleCards[index] ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-10 rotate-3"}`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground transition-all duration-300 group-hover:scale-105">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-muted hover:bg-foreground/20 hover:text-foreground transition-all duration-300 text-sm md:text-base hover:scale-110 hover:-rotate-2"
                      style={{
                        transitionDelay: `${skillIndex * 50}ms`,
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
              Continuously learning and expanding my skill set in data science and web development. Eager to apply these
              skills to real-world challenges and innovative projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
