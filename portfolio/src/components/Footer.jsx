import { Heart } from 'lucide-react'
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="text-2xl font-bold text-white">
              Portfolio<span className="text-blue-400">.</span>
            </a>
            <p className="mt-2">Building amazing digital experiences</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Projects</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Made with <Heart size={16} className="text-red-500" /> by Your Name
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer