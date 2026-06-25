import { GraduationCap, MapPin, Calendar, ArrowRight, Star, CheckCircle2, Clock, ExternalLink } from 'lucide-react';

const education = [
  {
    degree: 'B.A. in Computer Science',
    university: 'University of North Carolina at Charlotte',
    short: 'UNCC',
    location: 'Charlotte, NC',
    period: '01/2023 – 12/2025',
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
    period: '09/2020 – 12/2022',
    status: 'Transferred',
    primary: false,
    coursework: [],
  },
];

const featuredCert = {
  name: 'AWS Solutions Architect – Associate',
  issuer: 'Amazon Web Services',
  category: 'Cloud',
  status: 'In Progress',
  expected: 'Expected 06/2026',
};

const certifications = [
  { name: 'Google Data Analytics Professional Certificate', issuer: 'Coursera / Google', category: 'Data Analytics', date: '05/2025', certificate: 'https://coursera.org/verify/professional-cert/6RNL2W89K2KC' },
  { name: 'AWS Cloud Solutions', issuer: 'Coursera / AWS', category: 'Cloud', date: '06/2025', certificate: 'https://coursera.org/verify/professional-cert/FH1RIG29S3XE' },
  { name: 'Networking Fundamentals and Physical Networks', issuer: 'Coursera', category: 'Networking', date: '06/2026', certificate: 'https://coursera.org/verify/NPL0WX44OZ25' },
  { name: 'Claude Code In Action', issuer: 'Anthropic', category: 'AI', date: '06/2026', certificate: 'https://verify.skilljar.com/c/asafgz6e6gab' },
  { name: 'CCNA – Networking Fundamentals', issuer: 'Cisco', category: 'Networking' },
  { name: 'SQL for IT Professionals', issuer: "O'Reilly by Pearson", category: 'Database' },
  { name: 'Introduction to Penetration Testing', issuer: 'Cybersecurity Course', category: 'Security' },
];

const categoryStyle: Record<string, { pill: string; badge: string }> = {
  Cloud: {
    pill: 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-300',
    badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
  },
  Networking: {
    pill: 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/60 text-green-700 dark:text-green-300',
    badge: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
  },
  Database: {
    pill: 'bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800/60 text-purple-700 dark:text-purple-300',
    badge: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
  },
  Security: {
    pill: 'bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/60 text-rose-700 dark:text-rose-300',
    badge: 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400',
  },
  AI: {
    pill: 'bg-fuchsia-50 dark:bg-fuchsia-900/20 border border-fuchsia-200 dark:border-fuchsia-800/60 text-fuchsia-700 dark:text-fuchsia-300',
    badge: 'bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-400',
  },
  'Data Analytics': {
    pill: 'bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800/60 text-teal-700 dark:text-teal-300',
    badge: 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400',
  },
};

export default function EducationPage() {
  return (
    <div className="fade-in">
      <section className="section-container px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* ── Education ────────────────────────────────── */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              <span className="gradient-text">Education</span>
            </h2>
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
              Continuous learning across cloud, networking, AI, and security
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

          {/* Cert grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {certifications.map((cert, i) => {
              const style = categoryStyle[cert.category] ?? categoryStyle.Cloud;
              return (
                <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-800/60 shadow-sm p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
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
                  {(cert as { certificate?: string }).certificate && (
                    <a
                      href={(cert as { certificate?: string }).certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View Certificate
                    </a>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
