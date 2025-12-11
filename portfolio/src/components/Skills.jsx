import { Code, Database, Palette, Cloud } from 'lucide-react'
import React from 'react'

const skills = [
  {
    category: "Frontend",
    icon: <Code />,
    items: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    category: "Backend",
    icon: <Database />,
    items: ["Node.js", "Express", "Python", "Django", "MongoDB"]
  },
  {
    category: "Design",
    icon: <Palette />,
    items: ["Figma", "Adobe XD", "UI/UX Design", "Responsive Design", "Prototyping"]
  },
  {
    category: "DevOps",
    icon: <Cloud />,
    items: ["AWS", "Docker", "CI/CD", "Git", "Linux"]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50 ml-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{skill.category}</h3>
              </div>
              
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills