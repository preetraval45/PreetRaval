'use client';

import { Brain, Code, Database, Cloud, Cog, Users } from 'lucide-react';

const skillCategories = [
  {
    icon: Brain,
    title: 'AI / ML & Data Science',
    skills: [
      'ChatGPT API', 'LLM Integration', 'Prompt Engineering', 'Conversational AI',
      'Generative AI', 'TensorFlow', 'PyTorch', 'Transformers (HuggingFace)',
      'RAG', 'AI Automation', 'NumPy', 'Pandas', 'Matplotlib', 'ML Pipelines',
      'Data Analytics', 'Data Visualization', 'Tableau', 'Agentic AI (Claude)',
      'R Programming', 'Statistical Analysis', 'Data Cleaning', 'Data Storytelling',
      'Claude API', 'MCP (Model Context Protocol)', 'AI-Assisted Development', 'Tool Use (Agentic)',
    ],
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    skills: [
      'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5 / CSS3',
      'Node.js', 'Python', 'Java', 'C#', '.NET', 'FastAPI', 'Java Spring Boot',
      'REST APIs', 'Microservices', 'SSO / MFA', 'Auth & API Security', 'Role-Based Access Control',
    ],
  },
  {
    icon: Database,
    title: 'Backend & Databases',
    skills: [
      'PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'Oracle Database',
      'SQL Optimization', 'Data Modeling', 'DB Consolidation', 'Migrations', 'ORM',
      'BigQuery', 'Google Sheets',
    ],
  },
  {
    icon: Cloud,
    title: 'Cybersecurity & Cloud',
    skills: [
      'Penetration Testing', 'Network Security', 'SIEM', 'Security Auditing',
      'Vulnerability Assessment', 'AWS', 'AWS Cloud Architecture', 'Azure', 'Vercel',
      'Cloud Security', 'IAM', 'Encryption', 'Networking Fundamentals',
      'TCP/IP', 'OSI Model', 'Routing & Switching', 'Subnetting', 'LAN / WAN',
      'VLANs', 'Ethernet', 'Wireless Networking (Wi-Fi)', 'Physical Network Topology',
      'Network Hardware', 'Fiber Optics & Cabling',
    ],
  },
  {
    icon: Cog,
    title: 'DevOps & Systems',
    skills: [
      'Docker', 'Kubernetes', 'Nginx', 'CI/CD', 'Linux', 'GitHub Actions',
      'Azure DevOps', 'Cloudflare Tunnels', 'Server & Network Architecture',
      'Server Management', 'Local Hosting & Infrastructure',
      'Database Server Administration', 'Workflow Automation', 'Jira',
    ],
  },
  {
    icon: Users,
    title: 'Soft Skills',
    skills: [
      'Leadership', 'Problem Solving', 'Collaboration', 'Cross-Functional Communication',
      'Project Management', 'Technical Writing', 'Requirements Gathering',
      'BRD / TRD Documentation', 'Technical Presentations', 'Stakeholder Communication',
      'Data-Driven Decision Making',
    ],
  },
];

const categoryStyles: Record<string, {
  accent: string; icon: string; pill: string; bar: string; count: string;
}> = {
  'AI / ML & Data Science': {
    accent: 'from-fuchsia-500 to-purple-600',
    icon: 'bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400',
    pill: 'bg-fuchsia-50 dark:bg-fuchsia-900/20 border border-fuchsia-200 dark:border-fuchsia-800/50 text-fuchsia-700 dark:text-fuchsia-300 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-900/40',
    bar: 'bg-fuchsia-400',
    count: 'text-fuchsia-500 dark:text-fuchsia-400',
  },
  'Full-Stack Development': {
    accent: 'from-blue-500 to-indigo-600',
    icon: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    pill: 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40',
    bar: 'bg-blue-400',
    count: 'text-blue-500 dark:text-blue-400',
  },
  'Backend & Databases': {
    accent: 'from-emerald-500 to-teal-600',
    icon: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    pill: 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/40',
    bar: 'bg-emerald-400',
    count: 'text-emerald-500 dark:text-emerald-400',
  },
  'Cybersecurity & Cloud': {
    accent: 'from-rose-500 to-red-600',
    icon: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400',
    pill: 'bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/50 text-rose-700 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-900/40',
    bar: 'bg-rose-400',
    count: 'text-rose-500 dark:text-rose-400',
  },
  'DevOps & Systems': {
    accent: 'from-cyan-500 to-sky-600',
    icon: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400',
    pill: 'bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800/50 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/40',
    bar: 'bg-cyan-400',
    count: 'text-cyan-500 dark:text-cyan-400',
  },
  'Soft Skills': {
    accent: 'from-amber-500 to-orange-600',
    icon: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
    pill: 'bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/40',
    bar: 'bg-amber-400',
    count: 'text-amber-500 dark:text-amber-400',
  },
};

const maxSkills = Math.max(...skillCategories.map(c => c.skills.length));
const totalSkills = skillCategories.reduce((acc, c) => acc + c.skills.length, 0);

export default function SkillsPage() {
  return (
    <div className="fade-in">
      <section id="skills" className="section-container bg-surface-light dark:bg-surface-dark px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Skills & Competencies</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
            A comprehensive toolkit spanning AI/ML, full-stack development, cloud infrastructure, and cybersecurity
          </p>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-semibold">
            {totalSkills} skills across {skillCategories.length} domains
          </span>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => {
            const style = categoryStyles[category.title] ?? categoryStyles['Full-Stack Development'];
            return (
              <div
                key={category.title}
                className="rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-800/60 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Accent bar */}
                <div className={`h-1 w-full bg-linear-to-r ${style.accent}`} />

                <div className="p-5 sm:p-6">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl shrink-0 ${style.icon}`}>
                      <category.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-200 leading-tight">
                        {category.title}
                      </h3>
                    </div>
                    <span className={`text-xs font-bold tabular-nums shrink-0 ${style.count}`}>
                      {category.skills.length}
                    </span>
                  </div>

                  {/* Skill volume bar */}
                  <div className="h-1 w-full bg-gray-100 dark:bg-gray-700 rounded-full mb-4 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${style.bar} opacity-60`}
                      style={{ width: `${(category.skills.length / maxSkills) * 100}%` }}
                    />
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 text-xs font-medium rounded-full transition-colors cursor-default ${style.pill}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
