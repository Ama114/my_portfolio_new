"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

const skillIconMap: Record<string, string> = {
  HTML: "devicon-html5-plain colored",
  CSS: "devicon-css3-plain colored",
  JavaScript: "devicon-javascript-plain colored",
  React: "devicon-react-original colored",
  Python: "devicon-python-plain colored",
  SQL: "devicon-mysql-plain colored",
  MongoDB: "devicon-mongodb-plain colored",
  MySQL: "devicon-mysql-plain colored",
  Git: "devicon-git-plain colored",
  GitHub: "devicon-github-original",
  Docker: "devicon-docker-plain colored",
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setVisibleCards((prev) => {
                const updated = [...prev]
                updated[index] = true
                return updated
              })
            }
          }
        })
      },
      { threshold: 0.3 }
    )

    cardRefs.current.forEach((card) => card && observer.observe(card))
    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    { title: "Web Development", skills: ["HTML", "CSS", "JavaScript", "React"] },
    { title: "Programming", skills: ["Python", "SQL"] },
    { title: "Databases", skills: ["MongoDB", "MySQL"] },
    { title: "Tools", skills: ["Git", "GitHub", "Docker"] },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          Skills & Technologies
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`p-6 transition-all duration-700 ease-out
              hover:-translate-y-3 hover:shadow-xl
              ${visibleCards[index] ? "opacity-100" : "opacity-0 translate-y-10"}`}
            >
              <h3 className="text-xl font-semibold mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={skill}
                    className="w-14 h-14 flex items-center justify-center rounded-xl bg-muted
                    animate-icon transition-all duration-500
                    hover:scale-125 hover:-translate-y-2"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    {skillIconMap[skill] ? (
                      <i className={`${skillIconMap[skill]} text-3xl`} />
                    ) : (
                      <span className="text-xs">{skill}</span>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
