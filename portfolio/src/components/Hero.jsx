import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 ml-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="md:w-1/2">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              👋 Hello, I'm
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Asmit <span className="text-blue-600">Khanal</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              I create exceptional digital experiences with modern technologies.
              Passionate about clean code, intuitive design, and solving real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                View Projects
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-semibold"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://github.com/Asmit335" target='_blank' className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://np.linkedin.com/in/asmit335" target='_blank' className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
           
            </div>
          </div>

          {/* Right Image/Placeholder */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
              <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center">
                <div className="text-6xl md:text-8xl"><img className=' rounded-2xl' src="https://avatars.githubusercontent.com/u/84969950?v=4" width={220} height={220} alt="asmitPic" /></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero