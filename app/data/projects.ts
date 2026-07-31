/**
 * Single source of truth for the project list. The projects page renders it and
 * the hero/about stat tiles derive their counts from it, so the numbers on the
 * site can never disagree with what is actually listed.
 */
export type Project = {
  /** Stable key so other surfaces (e.g. the homepage) can reference a project. */
  id: string;
  title: string;
  status: 'Live' | 'Production';
  category: 'Enterprise' | 'Client Work' | 'Personal';
  role: string;
  company?: string;
  link?: string;
  caseStudy?: string;
  screenshot?: string;
  description: string;
  technologies: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: 'vyne',
    title: 'VYNE: AI-Native Company Operating System',
    status: 'Live',
    category: 'Personal',
    role: 'Software Engineer & DevOps Engineer',
    link: 'https://vyne.vercel.app/',
    caseStudy: '/projects/vyne',
    screenshot: '/vyne-screenshot.webp',
    description: 'An AI-native correlation layer built from scratch that ties business events to infrastructure events on a single unified timeline, consolidating Slack, Jira, Notion, Datadog, and ODOO into one platform.',
    technologies: ['Next.js', 'React Native', 'C# .NET 9', 'FastAPI', 'PostgreSQL', 'Docker', 'Terraform', 'AWS', 'LangGraph', 'Microservices', 'CI/CD (GitHub Actions)', 'ArgoCD'],
    highlights: [
      '15+ modules including chat, projects, docs, voice, and video calls with live transcription and AI meeting recaps',
      'Causal AI engine surfaces deploys, config changes, and customer signals correlated with any incident or revenue dip',
      'Integrates with GitHub, Sentry, Datadog, HubSpot, Stripe, Linear, and PagerDuty',
      'Full monorepo with 8 microservices: API Gateway, Core Auth, Projects, Messaging, AI, ERP, Observability, Notifications',
      'AWS: ECS Fargate, Aurora Serverless v2, EventBridge, SQS FIFO, Cognito, CloudFront + ArgoCD canary deployments',
    ],
  },
  {
    id: 'nexus',
    title: 'NEXUS: Traveler Management and Workflow Automation',
    status: 'Production',
    category: 'Enterprise',
    role: 'Software Engineer',
    company: 'American Circuits Inc.',
    caseStudy: '/projects/nexus',
    screenshot: '/nexus-screenshot.webp',
    description: 'The operational backbone of American Circuits Inc., a centralized enterprise platform for traveler lifecycle management, step-based workflow automation, QC enforcement, and real-time production analytics.',
    technologies: ['Next.js', 'FastAPI', 'PostgreSQL', 'Docker', 'Nginx'],
    highlights: [
      'Solo-built from day one: schema, REST API, role hierarchy, and UI through staging to live production',
      'QR/barcode scanning with strict step-by-step work-center routing enforcement',
      'Live dashboard: job status, queue depths, operator activity, QC sign-off tracking',
      'Integrated with KOSH for grouped traveler tracking and cross-system production intelligence',
      'Predictive delay analytics using cross-system data to forecast bottlenecks',
      'Role-based access, encrypted API calls, and fully reconstructible audit history',
    ],
  },
  {
    id: 'aci-forge',
    title: 'ACI Forge: Enterprise SaaS Platform',
    status: 'Live',
    category: 'Enterprise',
    role: 'Software Engineer & DevOps Engineer',
    company: 'American Circuits Inc.',
    description: 'Centralized enterprise portal where employees log in once and access all internal tools based on role, with SSO and MFA, a maintenance request system, role-gated dashboards, and a unified entry point.',
    technologies: ['Next.js', 'Python', 'TypeScript', 'PostgreSQL', 'Docker', 'Cloudflare Tunnels'],
    highlights: [
      'SSO and MFA: one login grants access to all apps based on user role',
      'Cloudflare Tunnel: public site talks to on-prem backend without internet exposure',
      'Role-based access control across all integrated tools',
      'Unified dashboard with personalized tool visibility per user',
    ],
  },
  {
    id: 'kosh',
    title: 'KOSH: Inventory Management System',
    status: 'Production',
    category: 'Enterprise',
    role: 'Software Engineer',
    company: 'American Circuits Inc.',
    screenshot: '/kosh-screenshot.webp',
    description: 'Full-scale inventory management platform relied on daily by 50+ users. Integrated with NEXUS, where KOSH data feeds into NEXUS for predictive delay analytics and production intelligence.',
    technologies: ['Next.js', 'FastAPI', 'PostgreSQL'],
    highlights: [
      '100% user adoption as the primary system for all inventory operations',
      'KOSH data used inside NEXUS to predict production delays and bottlenecks',
      'Inventory forecasting with ML-based predictive analytics',
      'Role-based permissions and full product movement audit logs',
      'Low-stock alerts, automated reorder triggers, and notifications',
    ],
  },
  {
    id: 'pdf-to-bom',
    title: 'PDF to BOM Converter',
    status: 'Production',
    category: 'Enterprise',
    role: 'Software Engineer',
    company: 'American Circuits Inc.',
    description: 'AI-powered tool that converts engineering PDFs and scanned images into structured BOM Excel files, using OCR for extraction and an LLM to parse and map component data into the correct BOM format.',
    technologies: ['Python', 'FastAPI', 'LLM (OpenAI)', 'OCR', 'OpenCV', 'Pandas', 'openpyxl'],
    highlights: [
      'Accepts PDFs and image files, with OCR handling scanned documents and physical BOM photos',
      'LLM interprets extracted text to identify part numbers, quantities, descriptions, and reference designators',
      'Outputs a clean, correctly formatted BOM Excel file ready for procurement',
      'Eliminates manual BOM entry and is used daily by engineering and procurement teams',
    ],
  },
  {
    id: 'serenity-living',
    title: 'Serenity Living',
    status: 'Live',
    category: 'Client Work',
    role: 'Software Engineer',
    link: 'https://www.theserenityliving.com/',
    description: 'Took the project from a client brief to a fully live, optimized site, handling UI/UX design, backend services, and Vercel deployment. Managed every client conversation, timeline, and revision independently.',
    technologies: ['Next.js', 'Nginx', 'PostgreSQL', 'Python', 'Vercel'],
    highlights: [
      'Sole developer and client contact, handling UI/UX design, backend, deployment, and every revision independently',
      'Mobile-first, responsive design with fast load times and cross-browser compatibility',
      'Full domain configuration, SSL setup, and SEO optimization from day one',
      '100% uptime since delivery, with zero post-launch incidents and no further engineering support needed',
    ],
  },
];

export const projectCount = projects.length;
