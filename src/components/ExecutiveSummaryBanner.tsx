import React from 'react';
import { Award, Zap, Code2, HeartPulse, Activity } from 'lucide-react';

export const ExecutiveSummaryBanner: React.FC = () => {
  return (
    <div 
      id="executive-highlights-grid"
      className="my-6 grid grid-cols-1 md:grid-cols-12 gap-5 print-avoid-break"
    >
      {/* Featured Clinical AI Systems Bento Card (Indigo 600 theme block) */}
      <div 
        id="exec-metric-0"
        className="md:col-span-6 bg-indigo-600 dark:bg-indigo-700 rounded-3xl p-6 sm:p-7 text-white shadow-xs flex items-center justify-between gap-4 min-h-[160px]"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
            <h3 className="font-bold uppercase text-[11px] tracking-wider text-indigo-200">
              Featured Clinical Systems
            </h3>
          </div>
          <h4 className="text-xl font-bold tracking-tight mb-1 text-white">
            Clinical AI Impact & Diagnostics
          </h4>
          <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
            Breast Cancer Imaging AI (National Institute of Cancer) & HIPAA-aware Voice/Chat Receptionist.
          </p>
        </div>
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 shrink-0">
          <HeartPulse className="h-8 w-8 text-white" />
        </div>
      </div>

      {/* Academic & Professional Honors Bento Card */}
      <div 
        id="exec-metric-1"
        className="md:col-span-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-7 shadow-xs flex flex-col justify-between min-h-[160px]"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-5 bg-indigo-600 rounded-full"></div>
          <h3 className="font-bold uppercase text-xs tracking-wider text-neutral-400 dark:text-neutral-500">
            Accreditations
          </h3>
        </div>
        <div>
          <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-1">
            Academic & Professional Honors
          </h4>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Biomedical Engineering with High Honors, Meta Certified Backend Developer, and IBM AI Specialization.
          </p>
        </div>
        <div className="mt-3 flex items-center gap-2 pt-2 border-t border-neutral-100 dark:border-neutral-800 text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">
          <Award className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
          <span>Meta • IBM • IEEE Fellow-Eligible</span>
        </div>
      </div>

      {/* Full-Stack + AI Architecture */}
      <div 
        id="exec-metric-2"
        className="md:col-span-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-7 shadow-xs flex flex-col justify-between min-h-[150px]"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-5 bg-indigo-600 rounded-full"></div>
          <h3 className="font-bold uppercase text-xs tracking-wider text-neutral-400 dark:text-neutral-500">
            Engineering
          </h3>
        </div>
        <div>
          <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-1">
            Full-Stack + AI Architecture
          </h4>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Python/Django server infrastructure, modern React interfaces, token-efficient deterministic LLM workflows.
          </p>
        </div>
        <div className="mt-3 flex items-center gap-2 pt-2 border-t border-neutral-100 dark:border-neutral-800 text-[11px] font-mono-code text-neutral-500 dark:text-neutral-400">
          <Code2 className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
          <span>Python • Django • React • TypeScript</span>
        </div>
      </div>

      {/* Restraint-Driven Design */}
      <div 
        id="exec-metric-3"
        className="md:col-span-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-7 shadow-xs flex flex-col justify-between min-h-[150px]"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-5 bg-indigo-600 rounded-full"></div>
          <h3 className="font-bold uppercase text-xs tracking-wider text-neutral-400 dark:text-neutral-500">
            Principles
          </h3>
        </div>
        <div>
          <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-1">
            Restraint-Driven Systems
          </h4>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Systems built to remove unnecessary overhead, lowering operational latency and infrastructure costs.
          </p>
        </div>
        <div className="mt-3 flex items-center gap-2 pt-2 border-t border-neutral-100 dark:border-neutral-800 text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">
          <Zap className="h-3.5 w-3.5 text-amber-500" />
          <span>Zero-Fluff • High Reliability</span>
        </div>
      </div>
    </div>
  );
};
