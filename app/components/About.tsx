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
      'Deep expertise in Next.js, React, FastAPI, PostgreSQL, Docker, and Nginx with focus on scalable architecture.',
  },
  {
    icon: Rocket,
    title: 'DevOps & Security',
    description:
      'Strong foundation in DevOps pipelines, cybersecurity hardening, cloud security, and penetration testing.',
  },
];

export function About() {
  return (
    <section id="about" className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          <span className="gradient-text">About Me</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Full-Stack Developer & AI Specialist passionate about building innovative solutions
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Professional Summary */}
        <div className="card mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a <span className="font-semibold text-blue-600 dark:text-blue-400">Full-Stack Developer & AI Specialist</span> with a strong track record of architecting and deploying
            enterprise-grade SaaS platforms, AI-powered automation systems, and secure cloud infrastructure.
            Currently working as a Software Engineer at <span className="font-semibold">American Circuits Inc.</span>, where I lead the development
            of NEXUS, an enterprise-grade traveler management and workflow automation system.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            My expertise spans the full stack—from designing intuitive frontends with React and Next.js to building robust
            backends with FastAPI and PostgreSQL, and deploying scalable infrastructure with Docker, Kubernetes, and Nginx.
            I'm passionate about leveraging AI and machine learning to solve complex problems and drive digital transformation.
          </p>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="card hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex-shrink-0">
                  <highlight.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="text-center p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-purple-50 dark:bg-purple-900/20">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-green-50 dark:bg-green-900/20">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-orange-50 dark:bg-orange-900/20">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">9+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
}
