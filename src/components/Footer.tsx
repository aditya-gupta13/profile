import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Aditya Gupta</h3>
            <p className="mt-2 text-gray-400">Software Developer & Database Executive</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/aditya-gupta13"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/guptaaditya8299"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:adityagupta2253@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aditya Gupta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;