'use client';

import { Brain, Code, Database, Cloud, Cog, Users } from 'lucide-react';

const skillCategories = [
  {
    icon: Brain,
    title: 'AI / ML & Data Science',
    skills: [
      'ChatGPT API',
      'LLM Integration',
      'Prompt Engineering',
      'Conversational AI',
      'Generative AI',
      'TensorFlow',
      'PyTorch',
      'Transformers (HuggingFace)',
      'RAG',
      'AI Automation',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'ML Pipelines',
    ],
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML5 / CSS3',
      'Node.js',
      'Python',
      'FastAPI',
      'Java Spring Boot',
      'REST APIs',
      'Microservices',
      'SSO / MFA',
      'Auth & API Security',
      'Role-Based Access Control',
    ],
  },
  {
    icon: Database,
    title: 'Backend & Databases',
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'SQL Server',
      'SQL Optimization',
      'Data Modeling',
      'DB Consolidation',
      'Migrations',
      'ORM',
    ],
  },
  {
    icon: Cloud,
    title: 'Cybersecurity & Cloud',
    skills: [
      'Penetration Testing',
      'Network Security',
      'SIEM',
      'Security Auditing',
      'Vulnerability Assessment',
      'AWS',
      'Azure',
      'Vercel',
      'Cloud Security',
      'IAM',
      'Encryption',
    ],
  },
  {
    icon: Cog,
    title: 'DevOps & Systems',
    skills: [
      'Docker',
      'Kubernetes',
      'Nginx',
      'CI/CD',
      'Linux',
      'GitHub Actions',
      'Azure DevOps',
      'Cloudflare Tunnels',
      'Server & Network Architecture',
      'Server Management',
      'Local Hosting & Infrastructure',
      'Database Server Administration',
      'Barcode / QR Scanning',
      'Workflow Automation',
      'Jira',
      'SuiteMaster',
    ],
  },
  {
    icon: Users,
    title: 'Soft Skills',
    skills: [
      'Leadership',
      'Problem Solving',
      'Collaboration',
      'Cross-Functional Communication',
      'Project Management',
      'Technical Writing',
      'Requirements Gathering',
      'BRD / TRD Documentation',
      'Technical Presentations',
      'Stakeholder Communication',
    ],
  },
];

// Per-category color identity: accent bar gradient, icon chip, and skill-pill hover
const categoryStyles: Record<string, { accent: string; icon: string; chip: string }> = {
  'AI / ML & Data Science': {
    accent: 'from-fuchsia-500 to-purple-600',
    icon: 'bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400',
    chip: 'hover:bg-fuchsia-100 dark:hover:bg-fuchsia-900/30 hover:text-fuchsia-600 dark:hover:text-fuchsia-400',
  },
  'Full-Stack Development': {
    accent: 'from-blue-500 to-indigo-600',
    icon: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    chip: 'hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400',
  },
  'Backend & Databases': {
    accent: 'from-emerald-500 to-teal-600',
    icon: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    chip: 'hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400',
  },
  'Cybersecurity & Cloud': {
    accent: 'from-rose-500 to-red-600',
    icon: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400',
    chip: 'hover:bg-rose-100 dark:hover:bg-rose-900/30 hover:text-rose-600 dark:hover:text-rose-400',
  },
  'DevOps & Systems': {
    accent: 'from-cyan-500 to-sky-600',
    icon: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400',
    chip: 'hover:bg-cyan-100 dark:hover:bg-cyan-900/30 hover:text-cyan-600 dark:hover:text-cyan-400',
  },
  'Soft Skills': {
    accent: 'from-amber-500 to-orange-600',
    icon: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
    chip: 'hover:bg-amber-100 dark:hover:bg-amber-900/30 hover:text-amber-600 dark:hover:text-amber-400',
  },
};

export default function SkillsPage() {
  return (
    <div className="fade-in">
      <section id="skills" className="section-container bg-surface-light dark:bg-surface-dark px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
          <span className="gradient-text">Skills & Competencies</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
          A comprehensive toolkit spanning AI/ML, full-stack development, cloud infrastructure, and
          cybersecurity
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {skillCategories.map((category, index) => {
          const style = categoryStyles[category.title] ?? categoryStyles['Full-Stack Development'];
          return (
          <div
            key={category.title}
            className="card relative overflow-hidden hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${style.accent}`} />
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <div className={`p-2 sm:p-3 rounded-lg flex-shrink-0 ${style.icon}`}>
                <category.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold flex-1">{category.title}</h3>
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 tabular-nums">{category.skills.length}</span>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-2.5 sm:px-3 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 transition-colors touch-manipulation ${style.chip}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          );
        })}
      </div>
    </section>
    </div>
  );
}
