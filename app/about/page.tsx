'use client';

import { Code2, Rocket, Target, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Enterprise Solutions',
    description:
      'Architecting and deploying enterprise-grade SaaS platforms, AI-powered automation systems, and secure cloud infrastructure.',
  },
  {
    icon: Zap,
    title: 'AI Integration',
    description:
      'Expert in LLM integration, AI prompt design, and intelligent automation, driving efficiency and digital transformation.',
  },
  {
    icon: Target,
    title: 'Full-Stack Excellence',
    description:
      'Deep expertise in Next.js, React, FastAPI, PostgreSQL, Odoo, Docker, and Nginx with focus on scalable architecture.',
  },
  {
    icon: Rocket,
    title: 'AI & Cybersecurity',
    description:
      'High interest in AI and cybersecurity with skills in generative AI, LLM integration, penetration testing, vulnerability assessment, and network security.',
  },
];

export default function AboutPage() {
  // Calculate months of experience from June 2025
  const calculateExperience = () => {
    const startDate = new Date('2025-06-01');
    const currentDate = new Date();
    const months = (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
                   (currentDate.getMonth() - startDate.getMonth());
    return months > 0 ? months : 0;
  };

  const monthsExperience = calculateExperience();

  return (
    <div className="fade-in">
      <section id="about" className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-500 bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-medium">
            Full-Stack Developer with high interest in AI and cybersecurity
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Professional Summary */}
          <div className="card mb-10 hover:border-blue-300 dark:hover:border-blue-700">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm a <span className="font-bold text-blue-600 dark:text-blue-400">Full-Stack Developer</span> with a strong track record of architecting and deploying
              enterprise-grade SaaS platforms, AI automation systems, and secure cloud infrastructure.
              Currently working as a Software Engineer at <span className="font-bold text-indigo-600 dark:text-indigo-400">American Circuits Inc.</span>, where I lead the development
              of NEXUS, an enterprise-grade traveler management and workflow automation system.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mt-6">
              My expertise spans the full stack—from designing intuitive frontends with React and Next.js to building robust
              backends with FastAPI, PostgreSQL, and Odoo, to deploying scalable infrastructure with Docker and Nginx.
              I have high interest in <span className="font-bold text-blue-600 dark:text-blue-400">AI and cybersecurity</span>, including generative AI, LLM integration, penetration testing, network security, and vulnerability assessment.
            </p>
          </div>

          {/* Key Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group card hover:scale-[1.02] hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <highlight.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100">{highlight.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 hover:scale-105 hover:shadow-lg transition-all">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{monthsExperience >= 12 ? `${Math.floor(monthsExperience / 12)}+` : `${monthsExperience}+`}</div>
              <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{monthsExperience >= 12 ? `Year${Math.floor(monthsExperience / 12) > 1 ? 's' : ''} (${monthsExperience} mo)` : 'Months Experience'}</div>
            </div>
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800 hover:scale-105 hover:shadow-lg transition-all">
              <div className="text-3xl sm:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
              <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Projects Completed</div>
            </div>
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 hover:scale-105 hover:shadow-lg transition-all">
              <div className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">5+</div>
              <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Technologies</div>
            </div>
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800 hover:scale-105 hover:shadow-lg transition-all">
              <div className="text-3xl sm:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">9+</div>
              <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Certifications</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
