'use client';

import { Github, Linkedin, Mail, Download, FileText, Sparkles, Code2, Rocket } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="space-y-10 fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                Available for opportunities
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-400">
                  Hello, I'm
                </p>
                <h1 className="heading-display gradient-text shimmer">
                  Preet Raval
                </h1>
              </div>
              <h2 className="heading-xl text-slate-800 dark:text-slate-200">
                Full-Stack Developer & <br />
                <span className="text-indigo-600 dark:text-indigo-400">AI Specialist</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl">
              Results-driven developer with proven experience in architecting <span className="font-semibold text-slate-800 dark:text-slate-200">enterprise-grade SaaS platforms</span>, AI-powered automation systems, and secure cloud infrastructure.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="space-y-1">
                <div className="text-4xl font-bold gradient-text">2+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-bold gradient-text">10+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Projects Delivered</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-bold gradient-text">5+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Tech Stacks</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Get In Touch
              </Link>
              <a
                href="/Preet Raval Resume.pdf"
                download
                className="btn-secondary inline-flex items-center gap-3"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Connect with me:</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/preetraval"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/preetraval/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                </a>
                <a
                  href="mailto:preetraval45@gmail.com"
                  className="group p-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image with Decorations */}
          <div className="relative scale-in">
            <div className="relative w-full max-w-xl mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl opacity-20 blur-2xl floating"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl opacity-20 blur-2xl floating" style={{ animationDelay: '1s' }}></div>

              {/* Profile Image Container */}
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-[3rem] blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                {/* Image */}
                <div className="relative bg-white dark:bg-slate-900 rounded-[3rem] p-3 overflow-hidden">
                  <div className="relative aspect-square rounded-[2.5rem] overflow-hidden">
                    <Image
                      src="/profile.jpg"
                      alt="Preet Raval"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute -top-6 -right-6 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl floating border-2 border-indigo-200 dark:border-indigo-800">
                  <Code2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="absolute -bottom-6 -left-6 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl floating border-2 border-purple-200 dark:border-purple-800" style={{ animationDelay: '0.5s' }}>
                  <Rocket className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
                <div className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-xl border-2 border-indigo-200 dark:border-indigo-800 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  Next.js
                </div>
                <div className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-xl border-2 border-purple-200 dark:border-purple-800 text-sm font-semibold text-purple-600 dark:text-purple-400">
                  FastAPI
                </div>
                <div className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-xl border-2 border-pink-200 dark:border-pink-800 text-sm font-semibold text-pink-600 dark:text-pink-400">
                  AI/ML
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
