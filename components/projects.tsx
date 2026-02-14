"use client"

import { Github } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// 1. Shadcn Carousel එක import කරගන්න
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Projects() {
  
  const projects = [
    {
      title: "National Cricket Player Analysis System",
      description: "Final year project analyzing cricket player performance using ML models & statistical analysis.",
      image: "images/cricket_player_analyzing.png",
      technologies: ["React", "Flask", "RandomForest", "MYSQL"],
      github: "https://github.com/Ama114https://github.com/Ama114/srilanka_National_Player_analyzing_System",
      status: "In Progress",
    },
    {
      title: "Sri Lankan Cricket Squad Selector",
      description: "Data-driven squad selection system using CrickInfo data and performance metrics.",
      image: "images/Cricket Squad Selector.png",
      technologies: ["Python", "Data Mining", "Power BI"],
      github: "https://github.com/Ama114",
      status: "In Progress",
    },
    {
      title: "Personalized Diet Planner",
      description: "AI application analyzing meal images to provide diet recommendations using Computer Vision.",
      image: "images/personalize_diet_plan.png",
      technologies: ["Deep Learning", "Computer Vision", "React"],
      github: "https://github.com/sahan-23/10_CoreCrew_CCS4310-Personalized-Diet-Exercise-Planner-from-Meal-Images",
      status: "In Progress",
    },
    {
      title: "Sentiment Analysis",
      description: "NLP project analyzing sentiment in text data using various ML algorithms.",
      image: "images/Sentiment_analysis.png",
      technologies: ["Python", "NLP", "Pandas"],
      github: "https://github.com/Ama114/sentiment_analysis-project",
      status: "Completed",
    },
    {
      title: "Smart Pet Feeder",
      description: "IoT-based automated pet feeding system with scheduling and monitoring capabilities.",
      image: "images/pet_feeder.png",
      technologies: ["IoT", "React", "MongoDB"],
      github: "https://github.com/Ama114",
      status: "Completed",
    },


    {
      title: "TO_DO_web_app",
      description: "A simple and beautiful To-Do List web application built with pure HTML, CSS, and JavaScript. Add tasks, mark them as completed, delete them, and your list is saved automatically in the browser even after refresh!.",
      image: "images/To_Do_List.png",
      technologies: ["HTML5 ", "CSS3  ", "Vanilla JavaScript "],
      github: "https://github.com/Ama114/To-Do-List",
      status: "Completed",
    },

  {
      title: "AI Chat Assistant",
      description: "A real-time AI chatbot built with LangChain and Groq API.",
      image: "images/AI_chatbot.png",
      technologies: ["Streamlit", "LangChain", "Groq API", "LLaMA 3.1", "Python 3.8+"],
      github: "https://github.com/Ama114/-LangChain-Groq-Streamlit-Demo-LLaMA-3.1-",
      status: "Completed",
    },

    
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground font-mono text-xl md:text-2xl">03.</span>{" "}
            <span className="text-foreground">Academic Projects</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-foreground" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Swipe to explore my latest work and technical experiments.
          </p>
        </div>

        {/* --- Modern Carousel Section --- */}
        <div className="max-w-7xl mx-auto px-4">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                // basis-1/1 = Mobile (1 Card)
                // md:basis-1/2 = Tablet (2 Cards)
                // lg:basis-1/3 = Desktop (3 Cards)
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="group h-full flex flex-col overflow-hidden hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 bg-card border-border">
                      
                      {/* Image Section */}
                      <div className="relative overflow-hidden h-48 w-full border-b border-foreground/10">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className={project.status === "Completed" ? "bg-green-500/90" : "bg-yellow-500/90"}>
                            {project.status}
                          </Badge>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-5 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-2 text-card-foreground line-clamp-1" title={project.title}>
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 text-sm line-clamp-3 flex-grow">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs bg-foreground/5">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="secondary" className="text-xs bg-foreground/5">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>

                        <Button variant="outline" size="sm" className="w-full mt-auto gap-2 group/btn" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                            View Code
                          </a>
                        </Button>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Buttons */}
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>

      </div>
    </section>
  )
}