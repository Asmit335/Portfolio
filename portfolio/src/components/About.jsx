import { User, Target, Award, Calendar } from 'lucide-react'
import React from 'react'

const About = () => {
  const experiences = [
    {
      year: "2023 - Present",
      role: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      description: "Leading frontend development for multiple projects using React and Next.js"
    },
    {
      year: "2021 - 2023",
      role: "Full Stack Developer",
      company: "StartupXYZ",
      description: "Built scalable web applications with React and Node.js"
    },
    {
      year: "2019 - 2021",
      role: "Web Developer",
      company: "Digital Solutions",
      description: "Developed responsive websites and e-commerce platforms"
    }
  ]

  const achievements = [
    { icon: <Target />, title: "50+ Projects", description: "Successfully delivered" },
    { icon: <Award />, title: "Client Satisfaction", description: "98% positive feedback" },
    { icon: <Calendar />, title: "5+ Years", description: "Industry experience" }
  ]

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image & Stats */}
          <div>
            <div className="relative mb-8">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center">
                    <div className="text-center p-8">
                      <User size={120} className="mx-auto text-blue-600 mb-4" />
                      <div className="text-3xl font-bold text-gray-900">Your Name</div>
                      <div className="text-gray-600 mt-2">Full Stack Developer</div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-400 rounded-full opacity-20"></div>
              </div>
            </div>

            {/* Stats/Quick Facts */}
            <div className="grid grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-xl text-center hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex p-3 bg-blue-100 text-blue-600 rounded-lg mb-3">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{achievement.title}</div>
                  <div className="text-gray-600 text-sm">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Me</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600 text-lg">
                Hello! I'm a passionate Full Stack Developer with over 5 years of experience 
                building modern web applications. I specialize in creating exceptional digital 
                experiences that combine beautiful design with robust functionality.
              </p>
              
              <p className="text-gray-600">
                My journey in web development started with a curiosity about how websites work, 
                which quickly turned into a passion for creating them. I love turning complex 
                problems into simple, beautiful, and intuitive designs.
              </p>

              <p className="text-gray-600">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge through blog posts and tutorials.
              </p>
            </div>

            {/* Work Experience */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Work Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-6 last:pb-0"
                  >
                    {/* Timeline line */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-[-8px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="w-32">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                          <Calendar size={14} />
                          {exp.year}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900">{exp.role}</h4>
                        <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                        <p className="text-gray-600">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Let's work together!
                  </h4>
                  <p className="text-gray-600">
                    Have a project in mind? I'd love to hear about it.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About