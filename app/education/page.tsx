import { GraduationCap, MapPin, Calendar, ArrowRight, Star, CheckCircle2, Clock, ExternalLink, FileText } from 'lucide-react';
import Image from 'next/image';

/* Every preview is page 1 of a US-Letter landscape PDF rendered at 2x. */
const PREVIEW_W = 1584;
const PREVIEW_H = 1224;

const education = [
  {
    degree: 'B.A. in Computer Science',
    university: 'University of North Carolina at Charlotte',
    short: 'UNCC',
    location: 'Charlotte, NC',
    period: 'Jan 2023 – Dec 2025',
    status: 'Graduated',
    primary: true,
    coursework: [
      'Data Structures & Algorithms', 'Operating Systems', 'Computer Networks',
      'Database Systems', 'Software Engineering', 'Cybersecurity',
      'Machine Learning', 'Web Development', 'Computer Architecture', 'Discrete Mathematics',
    ],
  },
  {
    degree: 'B.Tech in Computer Science',
    university: 'Vellore Institute of Technology',
    short: 'VIT',
    location: 'Vellore, India',
    period: 'Sep 2020 – Dec 2022',
    status: 'Transferred',
    primary: false,
    coursework: [],
  },
];

const featuredCert = {
  name: 'AWS Solutions Architect (Associate)',
  issuer: 'Amazon Web Services',
  category: 'Cloud',
  status: 'In Progress',
  expected: 'Expected Jun 2026',
};

const architectureTrack = {
  name: 'Software Architecture',
  issuer: "O'Reilly by Pearson",
  category: 'Architecture',
  period: 'Mar 2026 – Jul 2026',
  summary: 'Five-level certification track covering architectural thinking, styles, trade-off analysis, and expert-level system design.',
  levels: [
    { level: 1, title: 'Exploring', date: 'Mar 2026', file: '/certificates/OReilly Software Architecture Level 1 Exploring.pdf', preview: '/certificates/previews/oreilly-software-architecture-level-1-exploring.webp' },
    { level: 2, title: 'Applying', date: 'Jul 2026', file: '/certificates/OReilly Software Architecture Level 2 Applying.pdf', preview: '/certificates/previews/oreilly-software-architecture-level-2-applying.webp' },
    { level: 3, title: 'Building', date: 'Jul 2026', file: '/certificates/OReilly Software Architecture Level 3 Building.pdf', preview: '/certificates/previews/oreilly-software-architecture-level-3-building.webp' },
    { level: 4, title: 'Advancing', date: 'Jul 2026', file: '/certificates/OReilly Software Architecture Level 4 Advancing.pdf', preview: '/certificates/previews/oreilly-software-architecture-level-4-advancing.webp' },
    { level: 5, title: 'Expert', date: 'Jul 2026', file: '/certificates/OReilly Software Architecture Level 5 Expert.pdf', preview: '/certificates/previews/oreilly-software-architecture-level-5-expert.webp' },
  ],
};

const HOLDER = 'Preet Raval';

type Certification = {
  name: string;
  issuer: string;
  category: string;
  date?: string;
  file?: string;
  /* Page 1 of the PDF, rendered by scripts/render-certificates.mjs */
  preview?: string;
  certificate?: string;
};

const certifications: Certification[] = [
  { name: 'Google Data Analytics Professional Certificate', issuer: 'Coursera / Google', category: 'Data Analytics', date: 'May 2025', file: '/certificates/google-data-analytics.pdf', preview: '/certificates/previews/google-data-analytics.webp', certificate: 'https://coursera.org/verify/professional-cert/6RNL2W89K2KC' },
  { name: 'AWS Cloud Solutions Architect', issuer: 'Coursera / AWS', category: 'Cloud', date: 'Jun 2025', file: '/certificates/aws-cloud-solutions.pdf', preview: '/certificates/previews/aws-cloud-solutions.webp', certificate: 'https://coursera.org/verify/professional-cert/FH1RIG29S3XE' },
  { name: 'Networking Fundamentals and Physical Networks', issuer: 'Coursera', category: 'Networking', date: 'Jun 2026', file: '/certificates/networking-fundamentals.pdf', preview: '/certificates/previews/networking-fundamentals.webp', certificate: 'https://coursera.org/verify/NPL0WX44OZ25' },
  { name: 'Claude Code In Action', issuer: 'Anthropic', category: 'AI', date: 'Apr 2026', file: '/certificates/claude-code-in-action.pdf', preview: '/certificates/previews/claude-code-in-action.webp', certificate: 'https://verify.skilljar.com/c/asafgz6e6gab' },
  { name: 'CCNA: Networking Fundamentals', issuer: "O'Reilly by Pearson", category: 'Networking' },
  { name: 'SQL for IT Professionals', issuer: "O'Reilly by Pearson", category: 'Database' },
  { name: 'Introduction to Penetration Testing', issuer: "O'Reilly by Pearson", category: 'Security' },
];

const categoryStyle: Record<string, { pill: string; badge: string; ink: string; tint: string }> = {
  Cloud: {
    pill: 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-300',
    badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
    ink: '#2563eb', tint: '#dbeafe',
  },
  Networking: {
    pill: 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/60 text-green-700 dark:text-green-300',
    badge: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
    ink: '#16a34a', tint: '#dcfce7',
  },
  Database: {
    pill: 'bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800/60 text-purple-700 dark:text-purple-300',
    badge: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
    ink: '#9333ea', tint: '#f3e8ff',
  },
  Security: {
    pill: 'bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/60 text-rose-700 dark:text-rose-300',
    badge: 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400',
    ink: '#e11d48', tint: '#ffe4e6',
  },
  AI: {
    pill: 'bg-fuchsia-50 dark:bg-fuchsia-900/20 border border-fuchsia-200 dark:border-fuchsia-800/60 text-fuchsia-700 dark:text-fuchsia-300',
    badge: 'bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-400',
    ink: '#c026d3', tint: '#fae8ff',
  },
  'Data Analytics': {
    pill: 'bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800/60 text-teal-700 dark:text-teal-300',
    badge: 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400',
    ink: '#0d9488', tint: '#ccfbf1',
  },
  Architecture: {
    pill: 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300',
    badge: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
    ink: '#059669', tint: '#d1fae5',
  },
};

export default function EducationPage() {
  return (
    <div className="fade-in">
      <section className="section-container px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* ── Education ────────────────────────────────── */}
          <div className="text-center mb-10 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              <span className="gradient-text">Education</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Academic journey from India to Charlotte, NC
            </p>
          </div>

          {/* Journey cards */}
          <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-0 mb-16 sm:mb-20 max-w-3xl mx-auto">
            {/* VIT — origin */}
            <div className="flex-1 rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-800/60 shadow-sm overflow-hidden">
              <div className="h-1 bg-linear-to-r from-violet-500 to-purple-500" />
              <div className="p-5 sm:p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-700 dark:text-violet-300 font-bold text-sm shrink-0">
                    VIT
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
                      Transferred
                    </span>
                    <h3 className="font-bold text-slate-800 dark:text-slate-200 leading-snug">{education[1].degree}</h3>
                  </div>
                </div>
                <div className="space-y-1.5 text-sm text-gray-500 dark:text-gray-400">
                  <p className="font-medium text-gray-700 dark:text-gray-300">{education[1].university}</p>
                  <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{education[1].location}</p>
                  <p className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{education[1].period}</p>
                </div>
              </div>
            </div>

            {/* Arrow connector */}
            <div className="hidden sm:flex items-center justify-center px-3 shrink-0">
              <div className="flex flex-col items-center gap-1">
                <div className="w-px h-6 bg-gradient-to-b from-transparent to-blue-300 dark:to-blue-600" />
                <ArrowRight className="w-5 h-5 text-blue-400 dark:text-blue-500" />
                <div className="w-px h-6 bg-gradient-to-b from-blue-300 dark:from-blue-600 to-transparent" />
              </div>
            </div>
            {/* Mobile arrow */}
            <div className="flex sm:hidden items-center justify-center py-1">
              <div className="flex items-center gap-2 text-xs text-blue-500 dark:text-blue-400 font-medium">
                <div className="h-px w-8 bg-blue-300 dark:bg-blue-600" />
                <ArrowRight className="w-4 h-4" />
                Transferred to
                <div className="h-px w-8 bg-blue-300 dark:bg-blue-600" />
              </div>
            </div>

            {/* UNCC — primary */}
            <div className="flex-1 rounded-2xl border-2 border-blue-200 dark:border-blue-700/60 bg-blue-50/40 dark:bg-blue-900/10 shadow-md overflow-hidden">
              <div className="h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500" />
              <div className="p-5 sm:p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold text-xs shrink-0">
                    UNCC
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 mb-1.5 uppercase tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Graduated
                    </span>
                    <h3 className="font-bold text-slate-800 dark:text-slate-200 leading-snug">{education[0].degree}</h3>
                  </div>
                </div>
                <div className="space-y-1.5 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <p className="font-medium text-gray-700 dark:text-gray-300">{education[0].university}</p>
                  <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{education[0].location}</p>
                  <p className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{education[0].period}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-2">Relevant Coursework</p>
                  <div className="flex flex-wrap gap-1.5">
                    {education[0].coursework.map((course) => (
                      <span key={course} className="px-2 py-0.5 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-300">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Certifications ───────────────────────────── */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Continuous learning across architecture, cloud, networking, AI, and security
            </p>
          </div>

          {/* Featured: AWS SA In Progress */}
          <div className="relative rounded-2xl overflow-hidden bg-linear-to-r from-blue-600 via-indigo-600 to-blue-700 shadow-lg mb-6 sm:mb-8 p-6 sm:p-8">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-2 right-8 text-white text-[120px] font-black leading-none select-none">AWS</div>
            </div>
            <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="p-3 rounded-xl bg-white/20 shrink-0">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-400/30 text-amber-100 border border-amber-300/30">
                      <Clock className="w-3 h-3" />
                      In Progress
                    </span>
                    <span className="text-blue-200 text-xs">{featuredCert.expected}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{featuredCert.name}</h3>
                  <p className="text-blue-200 text-sm mt-0.5">{featuredCert.issuer}</p>
                </div>
              </div>
              <span className="shrink-0 px-3 py-1.5 rounded-full text-xs font-bold bg-white/20 text-white border border-white/30">
                {featuredCert.category}
              </span>
            </div>
          </div>

          {/* Software Architecture track — 5 levels, one certification */}
          <div className="rounded-2xl border border-emerald-200 dark:border-emerald-800/60 bg-white dark:bg-gray-800/60 shadow-sm mb-6 sm:mb-8 overflow-hidden">
            <div className="h-1 bg-linear-to-r from-emerald-500 via-green-500 to-teal-500" />
            <div className="p-5 sm:p-6 flex flex-col sm:flex-row gap-5 sm:gap-6">

              {/* Level 5 certificate */}
              <a
                href={architectureTrack.levels[4].file}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full sm:w-64 shrink-0 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700/60 bg-white hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors"
              >
                <Image
                  src={architectureTrack.levels[4].preview}
                  alt={`O'Reilly Software Architecture Level 5: Expert certificate issued to ${HOLDER}`}
                  width={PREVIEW_W}
                  height={PREVIEW_H}
                  sizes="(max-width: 640px) 100vw, 256px"
                  className="w-full h-auto"
                />
              </a>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${categoryStyle.Architecture.badge}`}>
                    {architectureTrack.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                    <CheckCircle2 className="w-3 h-3" />
                    All 5 levels complete
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200">
                  {architectureTrack.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  {architectureTrack.issuer} · {architectureTrack.period}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                  Issued to {HOLDER}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 mb-4">
                  {architectureTrack.summary}
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {architectureTrack.levels.map((lvl) => (
                    <a
                      key={lvl.level}
                      href={lvl.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-lg border border-gray-200 dark:border-gray-700/60 bg-gray-50/60 dark:bg-gray-900/30 px-3 py-2 hover:border-emerald-300 dark:hover:border-emerald-700 hover:bg-emerald-50/60 dark:hover:bg-emerald-900/10 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                          Level {lvl.level}
                        </span>
                        <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                      </div>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-snug">{lvl.title}</p>
                      <p className="text-[11px] text-gray-400 dark:text-gray-500">{lvl.date}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cert grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {certifications.map((cert, i) => {
              const style = categoryStyle[cert.category] ?? categoryStyle.Cloud;
              return (
                <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-800/60 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
                  {/* The certificate itself, rendered from the PDF */}
                  <div className="bg-gray-50 dark:bg-gray-900/40 border-b border-gray-200 dark:border-gray-700/60 p-3 min-h-40 flex items-center justify-center">
                    {cert.preview ? (
                      <a href={cert.file} target="_blank" rel="noopener noreferrer" className="block w-full rounded-md overflow-hidden bg-white">
                        <Image
                          src={cert.preview}
                          alt={`${cert.name} certificate issued to ${HOLDER}`}
                          width={PREVIEW_W}
                          height={PREVIEW_H}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="w-full h-auto"
                        />
                      </a>
                    ) : (
                      <div className="w-full rounded-md border border-dashed border-gray-300 dark:border-gray-700 py-8 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500">
                        <FileText className="w-6 h-6" />
                        <p className="text-xs">Certificate PDF not uploaded</p>
                      </div>
                    )}
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${style.badge}`}>
                      {cert.category}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  </div>
                  <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200 mb-1.5 leading-snug flex-1">
                    {cert.name}
                  </h4>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                    {cert.date && (
                      <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">{cert.date}</span>
                    )}
                  </div>
                  {(cert.file || cert.certificate) && (
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                      {cert.file && (
                        <a
                          href={cert.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        >
                          <FileText className="w-3 h-3" />
                          View Certificate
                        </a>
                      )}
                      {cert.certificate && (
                        <a
                          href={cert.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Verify
                        </a>
                      )}
                    </div>
                  )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
