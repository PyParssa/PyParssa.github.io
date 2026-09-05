import React from 'react';
import { 
  Mail, 
  Globe, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram,
  Sparkles, 
  Copy, 
  Check, 
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  ArrowRight
} from 'lucide-react';
import { ResumeData } from '../data/resumeData';

const portraitImage = '/images/pictureme2.jpg';
const eventImage = '/images/webpic1.webp';
const groupImage = '/images/webpic2.webp';

interface HeroSectionProps {
  data: ResumeData;
  onCopyEmail: () => void;
  copied: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  data,
  onCopyEmail,
  copied
}) => {
  return (
    <section id="hero-section" className="pt-8 pb-6 sm:pt-10 sm:pb-8">
      {/* Bento Header: Title + Location Bar */}
      <header className="flex flex-col md:flex-row justify-between md:items-end gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-4 sm:gap-5">
          <img
            src={portraitImage}
            alt="Portrait of Parssa Mohammadi"
            className="h-24 w-20 shrink-0 rounded-2xl object-cover object-top shadow-sm sm:h-28 sm:w-24"
          />
          <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] font-semibold text-neutral-700 shadow-2xs dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 mb-3">
            <Cpu className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
            <span>AI Systems & Biomedical Engineering</span>
          </div>
          <h1 
            id="candidate-name"
            className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50"
          >
            {data.name}
          </h1>
          <p className="mt-1 text-lg sm:text-xl font-semibold text-neutral-500 dark:text-neutral-400">
            {data.title}
          </p>
          <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            {data.summary}
          </p>
          </div>
        </div>

        <div className="text-left md:text-right shrink-0">
          <p className="text-xs text-neutral-400 uppercase tracking-widest font-bold">
            Based in
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 font-semibold text-base">
            {data.location}
          </p>
          <div className="mt-1.5 flex items-center md:justify-end gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Meta Certified • IEEE Member</span>
          </div>
        </div>
      </header>

      <div className="mt-6 grid grid-cols-[1.25fr_1fr] gap-3" aria-label="Selected work and community moments">
        <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <img
            src={eventImage}
            alt="Healthcare AI presentation"
            className="h-28 w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-32"
          />
          <span className="absolute bottom-2 left-2 rounded-full bg-neutral-950/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            Healthcare AI
          </span>
        </div>
        <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <img
            src={groupImage}
            alt="Professional engineering community"
            className="h-28 w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-32"
          />
          <span className="absolute bottom-2 left-2 rounded-full bg-neutral-950/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            In the field
          </span>
        </div>
      </div>

      {/* Top Bento Quick Trio: Availability, Links, and Philosophy */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Availability Dark Bento Card */}
        <div 
          id="bento-availability-card"
          className="md:col-span-4 bg-neutral-900 dark:bg-neutral-900 rounded-3xl p-6 sm:p-7 flex flex-col justify-between text-white border border-neutral-800 shadow-sm min-h-[220px]"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-bold uppercase text-xs tracking-wider text-neutral-400">
              Availability
            </h3>
            <span className="font-mono-code text-[11px] text-neutral-500">2026</span>
          </div>

          <p className="text-2xl font-light leading-tight my-4">
            Available for <span className="text-indigo-400 font-medium">AI Systems</span> & Workflow Consulting
          </p>

          <div className="flex items-center justify-between pt-2 border-t border-neutral-800">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-[11px] uppercase font-bold tracking-widest text-neutral-300">
                Active Now
              </span>
            </div>
            <a 
              href={`mailto:${data.email}`}
              className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1"
            >
              Contact <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Links Bento Card */}
        <div 
          id="bento-links-card"
          className="md:col-span-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-7 shadow-xs flex flex-col justify-between min-h-[220px]"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-5 bg-indigo-600 rounded-full"></div>
            <h3 className="font-bold uppercase text-xs tracking-wider text-neutral-400 dark:text-neutral-500">
              Links & Profiles
            </h3>
          </div>

          <div className="space-y-2.5">
            <a 
              href={data.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between text-sm font-semibold text-neutral-800 hover:text-indigo-600 dark:text-neutral-200 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-neutral-400 group-hover:text-indigo-600 transition-colors" />
                <span>parssa.pro</span>
              </div>
              <span className="text-neutral-400 group-hover:translate-x-1 group-hover:text-indigo-600 transition-all">→</span>
            </a>

            <a 
              href={data.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between text-sm font-semibold text-neutral-800 hover:text-indigo-600 dark:text-neutral-200 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4 text-neutral-400 group-hover:text-indigo-600 transition-colors" />
                <span>GitHub</span>
              </div>
              <span className="text-neutral-400 group-hover:translate-x-1 group-hover:text-indigo-600 transition-all">→</span>
            </a>

            <a 
              href={data.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between text-sm font-semibold text-neutral-800 hover:text-indigo-600 dark:text-neutral-200 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>LinkedIn</span>
              </div>
              <span className="text-neutral-400 group-hover:translate-x-1 group-hover:text-indigo-600 transition-all">→</span>
            </a>

            <a
              href={data.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between text-sm font-semibold text-neutral-800 hover:text-indigo-600 dark:text-neutral-200 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center text-[11px] font-bold text-neutral-400 group-hover:text-indigo-600 transition-colors">X</span>
                <span>@parssadotpro</span>
              </div>
              <span className="text-neutral-400 group-hover:translate-x-1 group-hover:text-indigo-600 transition-all">→</span>
            </a>

            <a
              href={data.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between text-sm font-semibold text-neutral-800 hover:text-indigo-600 dark:text-neutral-200 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-neutral-400 group-hover:text-indigo-600 transition-colors" />
                <span>Instagram / parssa.pro</span>
              </div>
              <span className="text-neutral-400 group-hover:translate-x-1 group-hover:text-indigo-600 transition-all">→</span>
            </a>

            <p className="border-t border-neutral-100 pt-2 text-[11px] leading-relaxed text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
              Content on implementing practical AI systems in businesses.
            </p>
          </div>

          <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs">
            <span className="font-mono-code text-neutral-500 truncate max-w-[170px]">{data.email}</span>
            <button
              type="button"
              onClick={onCopyEmail}
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>

        {/* Philosophy Bento Card */}
        <div 
          id="bento-philosophy-card"
          className="md:col-span-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-7 shadow-xs flex flex-col justify-between min-h-[220px]"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-5 bg-indigo-600 rounded-full"></div>
              <h3 className="font-bold uppercase text-xs tracking-wider text-neutral-400 dark:text-neutral-500">
                Philosophy
              </h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm italic leading-relaxed">
              "{data.philosophy}"
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-neutral-100 dark:border-neutral-800 pt-3">
            <span className="text-[10px] text-neutral-400 font-bold tracking-wider">
              &copy; PARSSA MOHAMMADI
            </span>
            <span className="text-[10px] text-neutral-400 font-bold tracking-wider">
              BUILD 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
