import React from 'react';
import { 
  Printer, 
  FileText, 
  Mail,
  ArrowUpRight
} from 'lucide-react';

interface NavbarProps {
  viewMode: 'full' | 'executive';
  setViewMode: (mode: 'full' | 'executive') => void;
  email: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  viewMode,
  setViewMode,
  email
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header 
      id="main-navbar" 
      className="no-print sticky top-0 z-40 w-full border-b border-neutral-200/90 bg-neutral-50/80 backdrop-blur-md transition-colors duration-200 dark:border-neutral-800/90 dark:bg-neutral-950/80"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <a 
            href="#top" 
            id="nav-brand-link"
            className="group flex items-center gap-2.5 text-neutral-900 transition-opacity hover:opacity-80 dark:text-neutral-100"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-xs font-bold tracking-tight text-white shadow-xs">
              PM
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                Parssa Mohammadi
              </span>
              <span className="hidden text-[11px] font-medium text-neutral-400 sm:inline dark:text-neutral-500">
                parssa.pro
              </span>
            </div>
          </a>

          {/* Status Indicator */}
          <div className="hidden items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700 md:flex dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for Q4/2026 Systems</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Executive / Full Toggle */}
          <div 
            id="view-mode-selector"
            className="hidden sm:flex items-center rounded-full border border-neutral-200 bg-white p-1 text-xs dark:border-neutral-800 dark:bg-neutral-900 shadow-2xs"
          >
            <button
              id="view-mode-full-btn"
              type="button"
              onClick={() => setViewMode('full')}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1 font-medium transition-all ${
                viewMode === 'full'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200'
              }`}
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Full CV</span>
            </button>
            <button
              id="view-mode-executive-btn"
              type="button"
              onClick={() => setViewMode('executive')}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1 font-medium transition-all ${
                viewMode === 'executive'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200'
              }`}
            >
              <span>One-Page</span>
            </button>
          </div>

          {/* Print / Save PDF Button */}
          <button
            id="nav-print-btn"
            type="button"
            onClick={handlePrint}
            title="Print or Save as PDF"
            className="flex h-9 items-center gap-1.5 rounded-xl border border-neutral-200 bg-white px-3 text-xs font-semibold text-neutral-700 shadow-2xs transition-all hover:border-indigo-300 hover:text-indigo-600 hover:bg-neutral-50 active:scale-[0.98] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-neutral-700"
          >
            <Printer className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Print / PDF</span>
          </button>

          {/* Direct email link */}
          <a
            id="nav-copy-email-btn"
            href={`mailto:${email}`}
            title={`Email ${email}`}
            className="flex h-9 items-center gap-1.5 rounded-xl border border-neutral-200 bg-white px-3 text-xs font-semibold text-neutral-700 shadow-2xs transition-all hover:border-indigo-300 hover:text-indigo-600 hover:bg-neutral-50 active:scale-[0.98] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-neutral-700"
          >
            <Mail className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Email</span>
            <ArrowUpRight className="hidden h-3 w-3 sm:inline" />
          </a>
        </div>
      </div>
    </header>
  );
};
