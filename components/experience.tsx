"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Calendar, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
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

  const experiences = [
    {
      title: "Bachelor of Science (Hons) in Data Science",
      company: "SLTC Research University",
      period: "2022 - 2026",
      description:
        "Pursuing comprehensive education in data science with focus on machine learning, deep learning, and artificial intelligence. Developing strong foundation in Python programming, statistics, and data visualization.",
      technologies: ["Python", "Machine Learning", "Deep Learning", "Data Analysis", "Statistics", "AI"],
      icon: GraduationCap,
    },
    {
      title: "Volunteer",
      company: "University LEO Club",
      period: "2022 - Present",
      description:
        "Active volunteer contributing to community service initiatives and leadership development programs. Collaborating with team members on various social impact projects.",
      technologies: ["Leadership", "Teamwork", "Community Service", "Event Planning"],
      icon: Users,
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-accent font-mono text-lg md:text-xl">02.</span> Education & Experience
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`relative ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"}`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-accent rounded-full border-4 border-background -translate-x-1.5 md:-translate-x-2 hidden sm:block" />

                  <Card className="p-6 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 bg-card border-border ml-8 sm:ml-12 md:ml-0">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <exp.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-card-foreground mb-1">{exp.title}</h3>
                        <p className="text-accent font-semibold mb-2">{exp.company}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
