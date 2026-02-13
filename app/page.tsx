import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>

        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}


