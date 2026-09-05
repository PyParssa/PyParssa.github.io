import React from 'react';
import { Briefcase, ArrowUpRight, CheckCircle2, Building2 } from 'lucide-react';
import { ExperienceItem } from '../data/resumeData';

interface ExperienceSectionProps {
  items: ExperienceItem[];
  isExecutiveMode?: boolean;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ 
  items,
  isExecutiveMode = false 
}) => {
  return (
    <section 
      id="experience-section" 
      className="my-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-xs"
    >
      {/* Bento Section Header with Indigo Accent Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 dark:border-neutral-800 pb-5 mb-7">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-6 bg-indigo-600 rounded-full"></div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Selected Work
          </h2>
        </div>
        <span className="font-mono-code text-xs text-neutral-400 dark:text-neutral-500">
          {items.length} Key Roles • Clinical AI & Production Engineering
        </span>
      </div>

      <div className="space-y-8">
        {items.map((item) => (
          <article
            key={item.id}
            id={`experience-item-${item.id}`}
            className="print-avoid-break group relative border-l-2 border-neutral-200 dark:border-neutral-800 pl-4 sm:pl-6 transition-colors hover:border-indigo-600 dark:hover:border-indigo-500"
          >
            {/* Timeline node dot */}
            <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-600 transition-colors group-hover:bg-indigo-600 dark:group-hover:bg-indigo-400" />

            {/* Header: Role & Organization */}
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100">
                  {item.role}
                </h3>
                {item.badge && (
                  <span className="rounded-full border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 px-2.5 py-0.5 text-[10px] font-bold text-neutral-700 dark:text-neutral-300">
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="font-mono-code text-xs font-medium text-neutral-500 dark:text-neutral-400">
                {item.period}
              </div>
            </div>

            {/* Organization / Context */}
            <div className="mt-1 flex items-center gap-2">
              <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                {item.organization}
              </span>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={item.id === 'plenary'
                    ? 'inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-700 transition-colors hover:border-indigo-300 hover:bg-indigo-100 dark:border-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-300 dark:hover:bg-indigo-950/70'
                    : 'inline-flex items-center text-xs font-medium text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors'}
                  title={item.id === 'plenary' ? 'Preview Plenary' : 'Visit website'}
                >
                  {item.id === 'plenary' && <span>Preview Plenary</span>}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>

            {/* Tagline summary */}
            <p className="mt-1.5 text-xs italic text-neutral-600 dark:text-neutral-400">
              {item.tagline}
            </p>

            {/* Bullets */}
            <ul className="mt-3.5 space-y-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              {(isExecutiveMode ? item.highlights.slice(0, 2) : item.highlights).map((highlight, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack Chips */}
            <div className="mt-3.5 flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mr-1">
                Stack:
              </span>
              {item.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/60 px-3 py-0.5 font-mono-code text-[11px] font-semibold text-neutral-700 dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
