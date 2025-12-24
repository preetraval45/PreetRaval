'use client';

import { Brain, Code, Database, Cloud, Cog, Users } from 'lucide-react';

const skillCategories = [
  {
    icon: Brain,
    title: 'AI / ML & Prompt Engineering',
    skills: [
      'ChatGPT API',
      'LLM Integration',
      'Prompt Design',
      'Generative AI',
      'TensorFlow',
      'PyTorch',
      'RAG',
      'AI Automation',
    ],
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Python',
      'FastAPI',
      'REST APIs',
    ],
  },
  {
    icon: Database,
    title: 'Backend & Databases',
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'SQL Optimization',
      'Data Modeling',
      'Migrations',
      'ORM',
    ],
  },
  {
    icon: Cloud,
    title: 'Cybersecurity & Cloud',
    skills: [
      'AWS',
      'Azure',
      'Penetration Testing',
      'SIEM',
      'Cloud Security',
      'IAM',
      'Encryption',
      'Network Security',
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
      'Terraform',
      'GitHub Actions',
      'Jira',
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
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-container bg-surface-light dark:bg-surface-dark">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          <span className="gradient-text">Skills & Competencies</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A comprehensive toolkit spanning AI/ML, full-stack development, cloud infrastructure, and
          cybersecurity
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className="card hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
