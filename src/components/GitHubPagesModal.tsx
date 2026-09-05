import React, { useState } from 'react';
import { X, Github, Check, Copy, Terminal, ExternalLink, Sparkles } from 'lucide-react';
import { ResumeData } from '../data/resumeData';

interface GitHubPagesModalProps {
  isOpen: boolean;
  onClose: () => void;
  guide: ResumeData['githubPagesGuide'];
}

export const GitHubPagesModal: React.FC<GitHubPagesModalProps> = ({
  isOpen,
  onClose,
  guide
}) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const terminalCommands = `# 1. Build the production static assets
npm run build

# 2. Commit and push to your GitHub repository
git add .
git commit -m "Deploy Parssa Mohammadi Static Resume"
git push origin main

# 3. In GitHub Repository Settings:
# Go to Settings > Pages > Build and deployment
# Under 'Source', select 'GitHub Actions'
# That's it! GitHub will auto-deploy your resume.`;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(label);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div 
      id="github-pages-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/60 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        id="github-pages-modal-content"
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl sm:p-8 dark:border-neutral-800 dark:bg-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          id="close-modal-btn"
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900">
            <Github className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">
              {guide.title}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Zero-configuration static build ready for custom domains or github.io
            </p>
          </div>
        </div>

        {/* Verification badges */}
        <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3 text-xs dark:border-emerald-400/20 dark:bg-emerald-500/10">
            <span className="font-semibold text-emerald-700 dark:text-emerald-400">
              ✓ Relative Base Path
            </span>
            <p className="mt-1 text-[11px] text-neutral-600 dark:text-neutral-400">
              Configured with <code className="font-mono-code text-[10px]">base: './'</code> in Vite.
            </p>
          </div>

          <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3 text-xs dark:border-emerald-400/20 dark:bg-emerald-500/10">
            <span className="font-semibold text-emerald-700 dark:text-emerald-400">
              ✓ Actions Workflow
            </span>
            <p className="mt-1 text-[11px] text-neutral-600 dark:text-neutral-400">
              Pre-built <code className="font-mono-code text-[10px]">deploy.yml</code> for automated deployment.
            </p>
          </div>

          <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3 text-xs dark:border-emerald-400/20 dark:bg-emerald-500/10">
            <span className="font-semibold text-emerald-700 dark:text-emerald-400">
              ✓ Pure Static SPA
            </span>
            <p className="mt-1 text-[11px] text-neutral-600 dark:text-neutral-400">
              No server or database required at runtime.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-6 space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            Deployment Instructions
          </h4>

          {guide.steps.map((s) => (
            <div key={s.step} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                {s.step}
              </span>
              <div>
                <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  {s.title}
                </div>
                <p className="mt-0.5 text-xs text-neutral-600 dark:text-neutral-400">
                  {s.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal Commands Box */}
        <div className="mt-6">
          <div className="flex items-center justify-between rounded-t-lg border-x border-t border-neutral-800 bg-neutral-900 px-4 py-2.5 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5 text-neutral-400" />
              <span className="font-mono-code text-[11px]">Deploy Commands</span>
            </div>
            <button
              type="button"
              onClick={() => copyToClipboard(terminalCommands, 'commands')}
              className="flex items-center gap-1.5 text-[11px] text-neutral-400 hover:text-white"
            >
              {copiedCode === 'commands' ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy script</span>
                </>
              )}
            </button>
          </div>
          <pre className="overflow-x-auto rounded-b-lg border border-neutral-800 bg-neutral-950 p-4 font-mono-code text-xs text-neutral-300">
            {terminalCommands}
          </pre>
        </div>

        {/* Footer Button */}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-neutral-900 px-5 py-2 text-xs font-medium text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
