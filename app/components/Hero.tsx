'use client';

import { Github, Linkedin, Mail, Download, FileText, Sparkles, Code2, Rocket, Code, Zap, Brain, Box } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Hero() {
  const roles = ['Full-Stack Developer', 'Generative AI Engineer', 'Software Engineer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Calculate months of experience from June 2025
  const calculateExperience = () => {
    const startDate = new Date('2025-06-01');
    const currentDate = new Date();
    const months = (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
                   (currentDate.getMonth() - startDate.getMonth());
    return months > 0 ? months : 0;
  };

  const monthsExperience = calculateExperience();
  const experienceDisplay = monthsExperience >= 12
    ? `${Math.floor(monthsExperience / 12)} Year${Math.floor(monthsExperience / 12) > 1 ? 's' : ''} (${monthsExperience} months)`
    : `${monthsExperience} Months`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                Available for opportunities
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-400">
                  Hello, I'm
                </p>
                <h1 className="heading-display bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-500 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Preet Raval
                </h1>
              </div>
              <h2 className="heading-xl text-slate-800 dark:text-slate-200">
                <span className="text-blue-600 dark:text-blue-400 transition-all duration-500">
                  {roles[currentRoleIndex]}
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl leading-relaxed text-slate-700 dark:text-slate-300 max-w-2xl">
              Passionate developer specializing in <span className="font-semibold text-blue-700 dark:text-blue-300">enterprise SaaS platforms</span> with high interest in <span className="font-semibold text-indigo-700 dark:text-indigo-300">AI and cybersecurity</span>. Experienced in building secure systems with Next.js, FastAPI, PostgreSQL, Docker, and Odoo.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8">
              <div className="space-y-2 p-4 rounded-xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 transition-all hover:scale-105">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">{monthsExperience >= 12 ? `${Math.floor(monthsExperience / 12)}+` : `${monthsExperience}+`}</div>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{monthsExperience >= 12 ? `Year${Math.floor(monthsExperience / 12) > 1 ? 's' : ''} (${monthsExperience} mo)` : 'Months Experience'}</div>
              </div>
              <div className="space-y-2 p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30 transition-all hover:scale-105">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">10+</div>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Projects Delivered</div>
              </div>
              <div className="space-y-2 p-4 rounded-xl bg-purple-50/50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/30 transition-all hover:scale-105">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">5+</div>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Tech Stacks</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-3 group">
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Get In Touch
              </Link>
              <a
                href="/Preet Raval Resume.pdf"
                download
                className="btn-secondary inline-flex items-center gap-3 group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-6">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Connect:</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/preetraval45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-slate-900 dark:hover:border-slate-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/preet-raval-5a5807206/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl bg-blue-100 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-blue-700 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors" />
                </a>
                <a
                  href="mailto:preetraval45@gmail.com"
                  className="group p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/20 border border-indigo-300 dark:border-indigo-700 hover:border-indigo-600 dark:hover:border-indigo-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-indigo-700 dark:text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors" />
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
                <div className="relative bg-white dark:bg-slate-900 rounded-full overflow-hidden">
                  <div className="relative aspect-square rounded-full overflow-hidden">
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
                <div className="absolute top-1/2 -right-8 p-3 bg-white dark:bg-slate-800 rounded-xl shadow-2xl floating border-2 border-blue-200 dark:border-blue-800" style={{ animationDelay: '1s' }}>
                  <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="absolute top-1/2 -left-8 p-3 bg-white dark:bg-slate-800 rounded-xl shadow-2xl floating border-2 border-green-200 dark:border-green-800" style={{ animationDelay: '1.5s' }}>
                  <Box className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 p-3 bg-white dark:bg-slate-800 rounded-xl shadow-2xl floating border-2 border-yellow-200 dark:border-yellow-800" style={{ animationDelay: '2s' }}>
                  <Code className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
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
                <div className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-xl border-2 border-green-200 dark:border-green-800 text-sm font-semibold text-green-600 dark:text-green-400">
                  Docker
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
