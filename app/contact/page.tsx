import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="fade-in">
      <section id="contact" className="section-container bg-surface-light dark:bg-surface-dark px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Open to new opportunities, collaborations, and interesting projects. Reach out any time.
          </p>
        </div>

        <div className="max-w-xl mx-auto space-y-3 sm:space-y-4">
          {/* Email */}
          <a
            href="mailto:preetraval45@gmail.com"
            className="card flex items-center gap-4 hover:scale-[1.02] transition-all duration-200 group cursor-pointer"
          >
            <div className="p-3 sm:p-4 rounded-xl bg-blue-100 dark:bg-blue-900/30 group-hover:scale-110 transition-transform shrink-0">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5 font-medium uppercase tracking-wide">Email</p>
              <p className="font-semibold text-sm sm:text-base truncate text-slate-800 dark:text-slate-200">preetraval45@gmail.com</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0 group-hover:text-blue-500 transition-colors" />
          </a>

          {/* Phone */}
          <a
            href="tel:+19803611999"
            className="card flex items-center gap-4 hover:scale-[1.02] transition-all duration-200 group cursor-pointer"
          >
            <div className="p-3 sm:p-4 rounded-xl bg-green-100 dark:bg-green-900/30 group-hover:scale-110 transition-transform shrink-0">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5 font-medium uppercase tracking-wide">Phone</p>
              <p className="font-semibold text-sm sm:text-base text-slate-800 dark:text-slate-200">+1 (980) 361-1999</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0 group-hover:text-green-500 transition-colors" />
          </a>

          {/* Location */}
          <div className="card flex items-center gap-4">
            <div className="p-3 sm:p-4 rounded-xl bg-purple-100 dark:bg-purple-900/30 shrink-0">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5 font-medium uppercase tracking-wide">Location</p>
              <p className="font-semibold text-sm sm:text-base text-slate-800 dark:text-slate-200">Charlotte, NC</p>
            </div>
          </div>

          {/* Divider */}
          <div className="pt-2 pb-1">
            <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest text-center">Connect</p>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/preet-raval-5a5807206/"
            target="_blank"
            rel="noopener noreferrer"
            className="card flex items-center gap-4 hover:scale-[1.02] transition-all duration-200 group cursor-pointer border-blue-100 dark:border-blue-900/40"
          >
            <div className="p-3 sm:p-4 rounded-xl bg-blue-600 group-hover:bg-blue-700 transition-colors shrink-0">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5 font-medium uppercase tracking-wide">LinkedIn</p>
              <p className="font-semibold text-sm sm:text-base text-slate-800 dark:text-slate-200">preet-raval-5a5807206</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0 group-hover:text-blue-500 transition-colors" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/preetraval45"
            target="_blank"
            rel="noopener noreferrer"
            className="card flex items-center gap-4 hover:scale-[1.02] transition-all duration-200 group cursor-pointer"
          >
            <div className="p-3 sm:p-4 rounded-xl bg-slate-800 dark:bg-slate-700 group-hover:bg-slate-900 dark:group-hover:bg-slate-600 transition-colors shrink-0">
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5 font-medium uppercase tracking-wide">GitHub</p>
              <p className="font-semibold text-sm sm:text-base text-slate-800 dark:text-slate-200">preetraval45</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0 group-hover:text-slate-500 transition-colors" />
          </a>

          {/* Availability note */}
          <div className="pt-4 text-center">
            <span className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Open to new opportunities · Usually responds within 24 hours
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
