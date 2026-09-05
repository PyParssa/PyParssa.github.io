import React from 'react';
import { Mail, Globe, Github, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react';
import { ResumeData } from '../data/resumeData';

interface ContactSectionProps {
  data: ResumeData;
  onCopyEmail: () => void;
  copied: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  data,
  onCopyEmail,
  copied
}) => {
  return (
    <section 
      id="contact-section" 
      className="print-avoid-break my-6 mb-16 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-xs"
    >
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-6 bg-indigo-600 rounded-full"></div>
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Inquiries & Collaborations
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Let's talk about purposeful systems.
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            Whether architecting AI-powered diagnostic pipelines, designing autonomous workflow infrastructure, or engineering end-to-end full-stack applications.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center md:flex-col md:items-stretch shrink-0">
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${data.email}`}
              id="footer-email-btn"
              className="flex h-11 items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 text-xs font-bold text-white shadow-xs transition-all hover:bg-indigo-700 active:scale-[0.98]"
            >
              <Mail className="h-4 w-4" />
              <span>Send Email</span>
            </a>

            <button
              id="footer-copy-email-btn"
              type="button"
              onClick={onCopyEmail}
              title="Copy email to clipboard"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-neutral-700 shadow-2xs transition-colors hover:border-indigo-300 hover:text-indigo-600 active:scale-[0.98] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-700"
            >
              {copied ? (
                <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>

          <a
            href={data.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="footer-website-link"
            className="flex h-11 items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white px-5 text-xs font-semibold text-neutral-700 transition-colors hover:border-indigo-300 hover:text-indigo-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-700 shadow-2xs"
          >
            <Globe className="h-4 w-4 text-neutral-400" />
            <span>Visit parssa.pro</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400" />
          </a>
        </div>
      </div>

      {/* Footer Info / Static pages note */}
      <div className="mt-8 flex flex-col justify-between gap-3 border-t border-neutral-100 dark:border-neutral-800 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center dark:text-neutral-400">
        <div className="flex items-center gap-4">
          <a
            href={data.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href={data.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href={data.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            parssa.pro
          </a>
        </div>

        <div className="font-mono-code text-[11px] text-neutral-400">
          Static Resume • GitHub Pages Ready • MIT
        </div>
      </div>
    </section>
  );
};
