'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/xpwzkvgj', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="fade-in">
      <section id="contact" className="section-container bg-surface-light dark:bg-surface-dark px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
          <span className="gradient-text">Get In Touch</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
          Let's discuss how I can help bring your next project to life
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8">
        {/* Contact Information */}
        <div className="space-y-4 sm:space-y-6">
          <div className="card">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>

            <div className="space-y-3 sm:space-y-4">
              <a
                href="mailto:preetraval45@gmail.com"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group touch-manipulation"
              >
                <div className="p-2 sm:p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:scale-110 transition-transform flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Email</p>
                  <p className="font-semibold text-sm sm:text-base truncate">preetraval45@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+19803611999"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group touch-manipulation"
              >
                <div className="p-2 sm:p-3 rounded-lg bg-green-100 dark:bg-green-900/30 group-hover:scale-110 transition-transform flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Phone</p>
                  <p className="font-semibold text-sm sm:text-base">+1 (980) 361-1999</p>
                </div>
              </a>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg">
                <div className="p-2 sm:p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Location</p>
                  <p className="font-semibold text-sm sm:text-base">Charlotte, NC</p>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">Connect with me</p>
              <a
                href="https://www.linkedin.com/in/preet-raval-5a5807206/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full mb-3 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors touch-manipulation"
              >
                <Linkedin className="w-4 h-4 flex-shrink-0" />
                Message me on LinkedIn
              </a>
              <div className="flex gap-3">
                <a
                  href="https://github.com/preetraval45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-110 touch-manipulation"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/preet-raval-5a5807206/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-110 touch-manipulation"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="card">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send a Message</h3>

          {status === 'sent' ? (
            <div className="flex flex-col items-center justify-center py-10 gap-3 text-center">
              <CheckCircle className="w-12 h-12 text-green-500" />
              <p className="text-lg font-semibold text-green-600 dark:text-green-400">Message sent!</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Thanks for reaching out — I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a subject…</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Freelance / Project">Freelance / Project</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {status === 'error' && (
                <p className="text-xs text-red-500 dark:text-red-400">Something went wrong. Please try again or email me directly.</p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-primary flex items-center justify-center gap-2 py-2.5 sm:py-3 text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
    </div>
  );
}
