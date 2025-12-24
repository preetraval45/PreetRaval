'use client';

import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'NEXUS – Traveler Management System',
    status: 'Ongoing',
    role: 'Project Lead',
    company: 'American Circuits Inc.',
    description:
      'The future operational backbone of American Circuits Inc. - a centralized enterprise platform for traveler lifecycle management, step-based workflow automation, QC enforcement, and real-time production analytics.',
    technologies: ['Next.js', 'FastAPI', 'PostgreSQL', 'Docker', 'Nginx'],
    highlights: [
      'QR/Barcode scanning and operator tracking',
      'Automated routing between departments',
      'Step validation logic to reduce human error',
      'Complete traveler audit-history reconstruction',
    ],
  },
  {
    title: 'ACI Dashboard – Enterprise SaaS Platform',
    status: 'Production',
    role: 'Project Lead',
    company: 'American Circuits Inc.',
    description:
      "ACI's primary enterprise dashboard for production oversight, cybersecurity insights, internal analytics, and real-time monitoring.",
    technologies: ['Python', 'TypeScript', 'PostgreSQL', 'Docker'],
    highlights: [
      'AI-driven analytics and anomaly detection',
      'Penetration testing tools integration',
      'Network health monitoring',
      'Role-based dashboards for different stakeholders',
    ],
  },
  {
    title: 'The Serenity Living Website',
    status: 'Live',
    role: 'Full Ownership',
    link: 'https://serenityliving.com',
    description:
      'High-performance real-estate/assisted living website with custom CMS features, hosted on Vercel.',
    technologies: ['Next.js', 'Nginx', 'PostgreSQL', 'Python', 'Vercel'],
    highlights: [
      'Full UI/UX design and implementation',
      'Domain configuration and SSL setup',
      'SEO optimization',
      'Secure contact handling and data routing',
    ],
  },
  {
    title: 'Supply Chain Intelligence',
    status: 'Completed',
    description:
      'AI-powered optimization platform for demand forecasting, supplier risk scoring, logistics optimization, and anomaly detection.',
    technologies: ['Next.js', 'Python', 'PostgreSQL', 'ML Models'],
    highlights: [
      'Predictive dashboards for demand/supply flow',
      'Supplier performance analytics',
      'Route optimization using ML-driven cost modeling',
      'Inventory deviation detection',
    ],
  },
  {
    title: 'NeuroSmriti – AI Brain Simulation',
    status: 'Research',
    description:
      'AI-driven neural simulation toolkit for modeling memory formation, recall degradation, and cognitive pattern loss. Designed for Alzheimer\'s and dementia research.',
    technologies: ['Python', 'NumPy', 'Matplotlib', 'ML Models'],
    highlights: [
      'Memory retention/decay simulations',
      'Cognitive impairment modeling',
      'Visual dashboards showing neuron activity',
      'Modular neural computation blocks',
    ],
  },
  {
    title: 'Transformers Flowventory',
    status: 'Completed',
    description:
      'Inventory forecasting and optimization engine powered by Transformer models for high-accuracy stock prediction.',
    technologies: ['Python', 'Transformers', 'Pandas', 'ML Pipelines'],
    highlights: [
      'Demand prediction using sequence-to-sequence AI',
      'Automated reorder recommendations',
      'Seasonal/cyclic inventory pattern detection',
      'Forecast accuracy benchmarking',
    ],
  },
  {
    title: 'KOSH Inventory System',
    status: 'Completed',
    description:
      'Full-scale inventory management platform with barcode scanning, real-time stock tracking, predictive analytics, and automated alerts.',
    technologies: ['Next.js', 'FastAPI', 'PostgreSQL'],
    highlights: [
      'Inventory forecasting with ML',
      'Role-based permissions',
      'Product movement history & audit logs',
      'Low-stock alerts and notifications',
    ],
  },
];

export default function ProjectsPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
      case 'Production':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
      case 'Ongoing':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400';
      case 'Completed':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400';
      case 'Research':
        return 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400';
    }
  };

  return (
    <div className="fade-in">
      <section id="projects" className="section-container bg-surface-light dark:bg-surface-dark">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Enterprise platforms, AI systems, and innovative solutions driving real-world impact
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            {/* Header */}
            <div className="mb-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold flex-1">{project.title}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    aria-label="Visit project"
                  >
                    <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </a>
                )}
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
                {project.role && (
                  <span className="text-xs text-gray-600 dark:text-gray-400">{project.role}</span>
                )}
                {project.company && (
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    @ {project.company}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <div className="mt-auto">
              <ul className="space-y-1 text-sm">
                {project.highlights.slice(0, 3).map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <span className="text-blue-600 dark:text-blue-400 text-xs mt-1">▸</span>
                    <span className="text-xs">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
