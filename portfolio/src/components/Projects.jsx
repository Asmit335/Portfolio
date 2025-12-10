import { ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-featured online shopping platform with cart, checkout, and admin dashboard",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management with real-time updates and drag & drop",
    tags: ["React", "Firebase", "Tailwind", "React DnD"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w-800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts and charts",
    tags: ["React", "API", "Chart.js", "Geolocation"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop"
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects