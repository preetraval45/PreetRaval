'use client';

import { Github, Linkedin, Mail, Heart, Download } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 sm:py-10 md:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-3 sm:mb-4">Preet Raval</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Full-Stack Developer with high interest in AI and cybersecurity, building enterprise solutions that drive
              innovation and efficiency.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-blue-400 transition-colors inline-block">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-blue-400 transition-colors inline-block">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-400 transition-colors inline-block">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/education" className="hover:text-blue-400 transition-colors inline-block">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Get In Touch</h4>
            <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <p className="text-gray-400">Charlotte, NC</p>
              <a
                href="mailto:preetraval45@gmail.com"
                className="block hover:text-blue-400 transition-colors break-all sm:break-normal"
              >
                preetraval45@gmail.com
              </a>
              <a
                href="tel:+19803611999"
                className="block hover:text-blue-400 transition-colors"
              >
                +1 (980) 361-1999
              </a>
            </div>
            <div className="flex gap-2.5 sm:gap-3 mt-3 sm:mt-4">
              <a
                href="https://github.com/preetraval45"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 hover:scale-110 touch-manipulation"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/preet-raval-5a5807206/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 hover:scale-110 touch-manipulation"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:preetraval45@gmail.com"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 hover:scale-110 touch-manipulation"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://docs.google.com/document/d/1ZIAWshIYgeGcQCo9QJtR2q8F_iBRkQnD2f9LeKMIrAs/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-blue-700 hover:bg-blue-600 transition-all duration-200 hover:scale-110 touch-manipulation"
                aria-label="Download Resume"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-400">
          <p className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
            <span>© {currentYear} Preet Raval.</span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              Built with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" /> using Next.js & Tailwind CSS
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
