"use client"

import { useEffect, useRef, useState } from "react"
import { Github } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Projects() {
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
      { threshold: 0.2 },
    )

    cardRefs.current.forEach((card) => {
      if (card) cardObserver.observe(card)
    })

    return () => {
      observer.disconnect()
      cardObserver.disconnect()
    }
  }, [])

  const projects = [
    {
      title: "National Cricket Player Analysis System",
      description:
        "Final year project developing a comprehensive system to analyze cricket player performance using data science techniques. Implementing statistical analysis and machine learning models for player evaluation.",
      image: "images/cricket_player_analyzing.png",
      technologies: ["Frontend : react", "Backend : Flask", "ML model :RandomForest Regressor"],
      github: "https://github.com/Ama114",
      status: "In Progress",
    },
    {
      title: "Sri Lankan Cricket Squad Selector",
      description:
        "Data-driven squad selection system using CrickInfo data. Analyzing player statistics, form, and performance metrics to recommend optimal team compositions for different match conditions.",
      image: "images/Cricket Squad Selector.png",
      technologies: ["Python", "Data Mining", "SQL", "Power BI", "Web Scraping"],
      github: "https://github.com/Ama114",
      status: "In Progress",
    },
    {
      title: "Personalized Diet & Exercise Planner",
      description:
        "AI-powered application that analyzes meal images to provide personalized diet and exercise recommendations. Utilizing computer vision and machine learning for nutritional analysis.",
      image: "images/personalize_diet_plan.png",
      technologies: ["Python", "Deep Learning", "Computer Vision", "React", "MongoDB"],
      github: "https://github.com/Ama114",
      status: "In Progress",
    },
    {
      title: "Sentiment Analysis Mini Project",
      description:
        "Natural language processing project analyzing sentiment in text data. Implementing various ML algorithms to classify emotions and opinions from social media and review data.",
      image: "images/Sentiment_analysis.png",
      technologies: ["Python", "NLP", "Machine Learning", "Pandas", "Matplotlib"],
      github: "https://github.com/Ama114",
      status: "Completed",
    },
    {
      title: "Smart Pet Feeder",
      description:
        "IoT-based automated pet feeding system with scheduling and monitoring capabilities. Combining hardware integration with software development for smart home automation.",
      image: "/smart-pet-feeder.png",
      technologies: ["Python", "IoT", "React", "MongoDB", "Hardware Integration"],
      github: "https://github.com/Ama114",
      status: "Completed",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground font-mono text-xl md:text-2xl">03.</span>{" "}
              <span className="text-foreground">Academic Projects</span>
            </h2>
            <div className="w-20 h-1 mx-auto bg-foreground" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className={`group overflow-hidden hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 bg-card border-border
                  ${visibleCards[index] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="relative overflow-hidden h-60 md:h-72 rounded-xl group-hover:scale-105 transition-transform duration-700 border-2 border-foreground/20">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-foreground opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 transform group-hover:scale-110 transition-transform duration-300">
                    <Badge className={project.status === "Completed" ? "bg-green-500/90" : "bg-yellow-500/90"}>
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-card-foreground group-hover:text-foreground transition-all duration-300 group-hover:translate-x-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-base md:text-lg lg:text-xl transition-all duration-300 group-hover:text-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-foreground/10 text-foreground text-sm md:text-base transition-all duration-300 hover:bg-foreground hover:text-background hover:scale-110"
                        style={{
                          transitionDelay: `${techIndex * 50}ms`,
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="group/btn bg-transparent hover:bg-accent/10" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
