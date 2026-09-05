import React from 'react';
import { BookOpen, FileText, Globe, Award } from 'lucide-react';
import { PublicationItem } from '../data/resumeData';

interface PublicationsAndAffiliationsProps {
  items: PublicationItem[];
}

export const PublicationsAndAffiliations: React.FC<PublicationsAndAffiliationsProps> = ({ items }) => {
  return (
    <section 
      id="publications-section" 
      className="my-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-xs"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 dark:border-neutral-800 pb-5 mb-7">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-6 bg-indigo-600 rounded-full"></div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Research, Publications & Affiliations
          </h2>
        </div>
        <span className="font-mono-code text-xs text-neutral-400 dark:text-neutral-500">
          Peer-Reviewed Research • Medical AI Translations • IEEE
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            id={`pub-item-${item.id}`}
            className="print-avoid-break flex flex-col justify-between rounded-2xl border border-neutral-150 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-800/40 p-5 transition-all hover:border-indigo-300 dark:hover:border-neutral-700"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="rounded-full border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 shadow-2xs">
                  {item.type}
                </span>
                <span className="font-mono-code text-xs font-semibold text-neutral-400">
                  {item.year}
                </span>
              </div>

              <h3 className="text-sm font-bold leading-snug text-neutral-900 dark:text-neutral-100">
                {item.title}
              </h3>

              <div className="mt-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                {item.venueOrPublisher}
              </div>

              <p className="mt-3 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                {item.description}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-neutral-200/60 dark:border-neutral-700/60">
              {item.focus.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 px-2.5 py-0.5 text-[10px] font-semibold text-neutral-700 dark:text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
