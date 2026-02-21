'use client';

import { Code2, Rocket, Target, Zap, Download } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Enterprise Solutions',
    description:
      'Leading development of NEXUS, ACI Forge, ACI ChatGPT, and KOSH at American Circuits Inc. — enterprise platforms used daily across manufacturing operations for workflow automation, SSO access control, AI reporting, and inventory management.',
  },
  {
    icon: Zap,
    title: 'AI Integration',
    description:
      'Built ACI ChatGPT — an internal AI assistant using the ChatGPT API that reduced maintenance overhead by 40% and improved system performance by 30% through AI-driven process prediction and caching.',
  },
  {
    icon: Target,
    title: 'Full-Stack Excellence',
    description:
      'End-to-end ownership across the stack: Next.js and React frontends, FastAPI and Python backends, PostgreSQL databases, Docker deployments, Nginx configuration, and Vercel hosting for live client websites.',
  },
  {
    icon: Rocket,
    title: 'AI & Cybersecurity',
    description:
      'High interest in AI and cybersecurity — with hands-on skills in LLM integration, generative AI, penetration testing, vulnerability assessment, network security, and SSO/OAuth implementation.',
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
      <section id="about" className="section-container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-500 bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-medium px-4">
            Full-Stack Developer with high interest in AI and cybersecurity
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Open to Work + Resume */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 sm:mb-8 p-4 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-green-700 dark:text-green-400">Open to new opportunities</span>
            </div>
            <a
              href="https://docs.google.com/document/d/1ZIAWshIYgeGcQCo9QJtR2q8F_iBRkQnD2f9LeKMIrAs/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Professional Summary */}
          <div className="card mb-6 sm:mb-8 md:mb-10 hover:border-blue-300 dark:hover:border-blue-700 transition-all">
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm a <span className="font-bold text-blue-600 dark:text-blue-400">Software Engineer</span> with a strong track record of building and shipping
              enterprise-grade SaaS platforms, AI automation systems, and full-stack web applications.
              At <span className="font-bold text-indigo-600 dark:text-indigo-400">American Circuits Inc.</span>, I lead development across four production systems — NEXUS (traveler management), ACI Forge (SSO enterprise portal), ACI ChatGPT (internal AI assistant), and KOSH (inventory management) — all actively used across manufacturing operations.
            </p>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mt-4 sm:mt-6">
              My expertise spans the full stack — React and Next.js frontends, FastAPI and Python backends, PostgreSQL databases, Docker deployments, and Nginx infrastructure. Outside of work, I've built live client websites, a financial fraud detection system, and AI/ML research tools.
              I have deep interest in <span className="font-bold text-blue-600 dark:text-blue-400">AI and cybersecurity</span>, including LLM integration, generative AI, penetration testing, and network security.
            </p>
          </div>

          {/* Key Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group card hover:scale-[1.02] hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <highlight.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 text-slate-800 dark:text-slate-100">{highlight.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Writing & Articles */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-800 dark:text-slate-100">Published Writing</h3>
            <a
              href="https://medium.com/skillship-vellore/how-to-start-your-journey-as-ui-ux-designer-77fea09d18a0"
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-start gap-3 sm:gap-4 hover:border-blue-300 dark:hover:border-blue-700 hover:scale-[1.01] transition-all duration-300 group"
            >
              <div className="p-2 sm:p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">Medium · Skillship Vellore</p>
                <h4 className="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  How to Start Your Journey as a UI/UX Designer
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">A guide covering tools, resources, and first steps for aspiring UI/UX designers.</p>
              </div>
              <span className="text-blue-500 dark:text-blue-400 text-xs font-semibold whitespace-nowrap mt-1">Read →</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            <div className="group text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 hover:scale-105 hover:shadow-lg transition-all">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">{monthsExperience >= 12 ? `${Math.floor(monthsExperience / 12)}+` : `${monthsExperience}+`}</div>
              <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">{monthsExperience >= 12 ? `Year${Math.floor(monthsExperience / 12) > 1 ? 's' : ''} (${monthsExperience} mo)` : 'Months Experience'}</div>
            </div>
            <div className="group text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800 hover:scale-105 hover:shadow-lg transition-all">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1 sm:mb-2">10+</div>
              <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">Projects Completed</div>
            </div>
            <div className="group text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 hover:scale-105 hover:shadow-lg transition-all">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-1 sm:mb-2">20+</div>
              <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">Technologies</div>
            </div>
            <div className="group text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800 hover:scale-105 hover:shadow-lg transition-all">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-1 sm:mb-2">9+</div>
              <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">Certifications</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
