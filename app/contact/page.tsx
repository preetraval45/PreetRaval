'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Briefcase, Server, Code2, Globe, Navigation, Copy, Check } from 'lucide-react';

const contactMethods = [
  {
    href: 'mailto:preetraval45@gmail.com',
    bar: 'from-blue-500 to-indigo-500',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    arrowHover: 'group-hover:text-blue-500',
    label: 'Email',
    value: 'preetraval45@gmail.com',
    Icon: Mail,
    external: false,
  },
  {
    href: 'tel:+19803611999',
    bar: 'from-green-500 to-emerald-500',
    iconBg: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400',
    arrowHover: 'group-hover:text-green-500',
    label: 'Phone',
    value: '+1 (980) 361-1999',
    Icon: Phone,
    external: false,
  },
  {
    href: null,
    bar: 'from-purple-500 to-violet-500',
    iconBg: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-600 dark:text-purple-400',
    arrowHover: '',
    label: 'Location',
    value: 'Charlotte, NC',
    Icon: MapPin,
    external: false,
  },
  {
    href: 'https://www.linkedin.com/in/preet-raval-5a5807206/',
    bar: 'from-blue-600 to-blue-500',
    iconBg: 'bg-blue-600',
    iconColor: 'text-white',
    arrowHover: 'group-hover:text-blue-500',
    label: 'LinkedIn',
    value: 'preet-raval-5a5807206',
    Icon: Linkedin,
    external: true,
  },
  {
    href: 'https://github.com/preetraval45',
    bar: 'from-slate-600 to-slate-800',
    iconBg: 'bg-slate-800 dark:bg-slate-700',
    iconColor: 'text-white',
    arrowHover: 'group-hover:text-slate-500',
    label: 'GitHub',
    value: 'preetraval45',
    Icon: Github,
    external: true,
  },
];

const openTo = [
  { icon: Briefcase, label: 'Full-Time Roles' },
  { icon: Server, label: 'DevOps Engineer' },
  { icon: Code2, label: 'Software Engineer' },
  { icon: Globe, label: 'Remote' },
  { icon: Navigation, label: 'Open to Relocate' },
];

export default function ContactPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      // clipboard not available
    }
  };

  return (
    <div className="fade-in">
      <section id="contact" className="section-container px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-4">
            Open to new opportunities, collaborations, and interesting projects. Reach out any time.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Usually responds within 24 hours
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">

          {/* Contact cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactMethods.map((m) => {
              const isCopyable = m.label === 'Email' || m.label === 'Phone';
              const isCopied = copiedKey === m.label;

              const cardInner = (
                <div className="rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-800/60 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer h-full">
                  <div className={`h-1 w-full bg-linear-to-r ${m.bar}`} />
                  <div className="p-4 sm:p-5 flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl shrink-0 group-hover:scale-110 transition-transform ${m.iconBg}`}>
                      <m.Icon className={`w-5 h-5 ${m.iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-0.5">{m.label}</p>
                      <p className="font-semibold text-sm text-slate-800 dark:text-slate-200 break-all">{m.value}</p>
                    </div>
                    {isCopyable ? (
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => copyToClipboard(m.value, m.label)}
                          title={isCopied ? 'Copied!' : 'Copy'}
                          className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          {isCopied
                            ? <Check className="w-3.5 h-3.5 text-green-500" />
                            : <Copy className="w-3.5 h-3.5 text-gray-400" />}
                        </button>
                        <a
                          href={m.href!}
                          className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          title={`Open ${m.label}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                        </a>
                      </div>
                    ) : m.href && (
                      <ExternalLink className={`w-3.5 h-3.5 text-gray-400 dark:text-gray-500 shrink-0 transition-colors ${m.arrowHover}`} />
                    )}
                  </div>
                </div>
              );

              if (isCopyable) return <div key={m.label}>{cardInner}</div>;

              return m.href ? (
                <a
                  key={m.label}
                  href={m.href}
                  {...(m.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {cardInner}
                </a>
              ) : (
                <div key={m.label}>{cardInner}</div>
              );
            })}
          </div>

          {/* Why work with me */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-800/60 shadow-sm overflow-hidden">
            <div className="h-1 w-full bg-linear-to-r from-emerald-500 to-teal-500" />
            <div className="p-5 sm:p-6">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Why work with me</p>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                I've been the sole engineer behind five systems that people at American Circuits Inc. use every time they clock in. I don't hand things off. I build them, deploy them, and keep them running. If you need someone who can own a product end-to-end and ship without a lot of hand-holding, that's what I do.
              </p>
            </div>
          </div>

          {/* What I'm open to */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-800/60 shadow-sm overflow-hidden">
            <div className="h-1 w-full bg-linear-to-r from-blue-500 via-indigo-500 to-violet-500" />
            <div className="p-5 sm:p-6">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">What I'm looking for</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {openTo.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5 p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50">
                    <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/40 shrink-0">
                      <Icon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
