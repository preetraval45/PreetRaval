'use client';

import { Github, Linkedin, Mail, Download, ArrowDown, FileText } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                Hello, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="gradient-text">Preet Raval</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300">
                Full-Stack Developer & AI Specialist
              </h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Results-driven developer with proven experience in architecting enterprise-grade
              SaaS platforms, AI-powered automation systems, and secure cloud infrastructure.
              Expert in Next.js, React, FastAPI, PostgreSQL, Docker, and Nginx.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
              <a
                href="/Preet Raval Resume.pdf"
                download
                className="btn-secondary flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume (PDF)
              </a>
              <a
                href="https://docs.google.com/document/d/1xGM63_e86Gc0ytm-Ept8RPFpsi4hPjvoVSV23whYlqs/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                View Resume Online
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/preetraval"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/preetraval/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:preetraval45@gmail.com"
                className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Image/Visual Element */}
          <div className="relative animate-slide-up">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-1">
                <div className="bg-white dark:bg-gray-800 rounded-full p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl font-bold gradient-text">PR</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Software Engineer
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">
                      Charlotte, NC
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
