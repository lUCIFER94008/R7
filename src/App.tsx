import { ArrowDown, Github, GraduationCap } from "lucide-react";
import { ProjectCard } from "./components/ProjectCard";
import { SkillTag } from "./components/SkillTag";
import { ContactForm } from "./components/ContactForm";
import { ScrollIndicator } from "./components/ScrollIndicator";
import { CheckeredBackground } from "./components/CheckeredBackground";
import { ScrollReveal } from "./components/ScrollReveal";

export default function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "C / C++",
    "SQL",
    "Microsoft SQL Server",
    "C#",
    "UI/UX Design",
    "Figma & Figma Make"
  ];

  const completedProjects = [
    {
      title: "IoT-Based Fishermen Safety Software",
      description: "A real-time IoT-based safety and rescue dashboard for fishermen.",
      liveLink: "https://iotkeralafisherman-8bfu.vercel.app/",
      githubLink: "https://github.com/lUCIFER94008/Iotfishermensafetydashboard.git"
    },
    {
      title: "New Bismi Gift House – E-commerce Website",
      description: "An online shopping platform for a local gift store.",
      liveLink: "https://newbismigift.vercel.app/",
      githubLink: "https://github.com/lUCIFER94008/Newbismigift.git"
    },
    {
      title: "Train Ticket Booking Website",
      description: "A static front-end train ticket booking website built using HTML and CSS, showcasing train search, schedule viewing, and ticket booking UI.",
      liveLink: "https://train-ticket-ebon.vercel.app/",
      githubLink: "https://github.com/lUCIFER94008/Train-ticket.git"
    }
  ];

  const inProgressProjects = [
    {
      title: "Inch by Inch – Gym Website",
      description: "A modern fitness website (currently under development).",
      liveLink: "https://inchbyinch-blush.vercel.app/",
      githubLink: "https://github.com/lUCIFER94008/Inchbyinch.git"
    }
  ];

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative">
      {/* Checkered Background with Mouse Effect */}
      <CheckeredBackground />
      
      {/* Scroll Indicator */}
      <ScrollIndicator />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Mohammed Rizwan
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600">
              Software Developer & System Administrator
            </p>
          </div>
          
          <div className="py-8">
            <p className="text-2xl sm:text-3xl italic border-l-4 border-black pl-6 text-left inline-block">
              "Like to discover more varieties of things."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={scrollToProjects}
              className="border-2 border-black px-8 py-3 hover:bg-black hover:text-white transition-all duration-300 text-lg"
            >
              View Projects
            </button>
            <button
              onClick={scrollToContact}
              className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-all duration-300 text-lg"
            >
              Contact Me
            </button>
          </div>

          <div className="pt-12 animate-bounce">
            <ArrowDown className="size-6 mx-auto" />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="border-l-2 border-black pl-8 py-6 relative">
              <div className="absolute -left-3 top-8 w-5 h-5 bg-black rounded-full"></div>
              <div className="flex items-start gap-4">
                <GraduationCap className="size-8 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    B.Voc – Software Development & System Administration
                  </h3>
                  <p className="text-gray-600">
                    Bachelor of Vocation in Software Development and System Administration
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <ScrollReveal key={skill} delay={index * 50}>
                <SkillTag skill={skill} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Completed Projects - Work */}
          <div>
            <ScrollReveal>
              <h2 className="text-4xl font-bold mb-12 text-center">Work</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {completedProjects.map((project, index) => (
                <ScrollReveal key={project.title} delay={index * 150}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    liveLink={project.liveLink}
                    githubLink={project.githubLink}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* In Progress Projects */}
          <div>
            <ScrollReveal>
              <h2 className="text-4xl font-bold mb-12 text-center">In Progress</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inProgressProjects.map((project, index) => (
                <ScrollReveal key={project.title} delay={index * 150}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    liveLink={project.liveLink}
                    githubLink={project.githubLink}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-black/10 relative">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2026 Mohammed Rizwan. All rights reserved.
          </p>
          <a
            href="https://github.com/lUCIFER94008"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-black transition-colors duration-300"
          >
            <Github className="size-5" />
            <span>GitHub Profile</span>
          </a>
        </div>
      </footer>
    </div>
  );
}