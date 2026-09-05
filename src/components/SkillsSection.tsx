import React from 'react';
import { Layers, Terminal, Sparkles, Layout, ShieldCheck } from 'lucide-react';
import { SkillCategory } from '../data/resumeData';

interface SkillsSectionProps {
  categories: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ categories }) => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return Sparkles;
      case 1:
        return Terminal;
      case 2:
        return Layout;
      default:
        return ShieldCheck;
    }
  };

  return (
    <section 
      id="skills-section" 
      className="my-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-xs"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 dark:border-neutral-800 pb-5 mb-7">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-6 bg-indigo-600 rounded-full"></div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            What I Do
          </h2>
        </div>
        <span className="font-mono-code text-xs text-neutral-400 dark:text-neutral-500">
          Biomedical AI • Backend • HCI • Deterministic LLMs
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {categories.map((cat, idx) => {
          const Icon = getCategoryIcon(idx);
          return (
            <div
              key={cat.title}
              id={`skill-cat-${idx}`}
              className="print-avoid-break rounded-2xl border border-neutral-150 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-800/40 p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-2xs">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white dark:bg-neutral-900 rounded-full text-xs font-bold text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 shadow-2xs hover:border-indigo-400 hover:text-indigo-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
