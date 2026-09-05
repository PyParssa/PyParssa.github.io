import React from 'react';
import { CheckCircle2, Info } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'info';
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success' }) => {
  if (!message) return null;

  return (
    <div 
      id="status-toast"
      className="no-print fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/95 px-5 py-3 text-xs font-semibold text-neutral-900 dark:text-neutral-100 shadow-lg backdrop-blur-md transition-all animate-in fade-in slide-in-from-bottom-3 duration-200"
    >
      {type === 'success' ? (
        <CheckCircle2 className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
      ) : (
        <Info className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
      )}
      <span>{message}</span>
    </div>
  );
};
