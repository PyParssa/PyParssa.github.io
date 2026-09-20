import React, { useState } from 'react';
import { 
  Mail,
  ArrowUpRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  viewMode: 'full' | 'executive';
  setViewMode: (mode: 'full' | 'executive') => void;
  email: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  viewMode, // kept for backwards compatibility
  setViewMode, // kept for backwards compatibility
  email
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Story', href: '#story' },
    { name: 'Services', href: '#services' },
    { name: 'Connect', href: '#connect' },
  ];

  return (
    <header 
      id="main-navbar" 
      className="no-print sticky top-0 z-40 w-full border-b border-[#bcbd8b]/20 bg-[#FAF8F5]/80 backdrop-blur-md transition-colors duration-200"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <a 
            href="#top" 
            id="nav-brand-link"
            className="group flex items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#373d20] text-xs font-bold tracking-tight text-white shadow-xs">
              PM
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-[#373d20]">
                Parssa Mohammadi
              </span>
              <span className="hidden text-[11px] font-medium text-[#8B7355] sm:inline">
                parssa.pro
              </span>
            </div>
          </a>

          {/* Status Indicator */}
          <div className="hidden items-center gap-2 rounded-full border border-[#bcbd8b]/30 bg-[#FAF8F5] px-3 py-1 text-xs font-medium text-[#717744] md:flex shadow-2xs">
            <span>🟢 Open for projects</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[#717744] hover:text-[#373d20] font-medium text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct email link */}
            <a
              id="nav-copy-email-btn"
              href={`mailto:${email}`}
              title={`Email ${email}`}
              className="flex h-9 items-center gap-1.5 rounded-xl border border-[#bcbd8b]/30 bg-white px-3 text-xs font-semibold text-[#373d20] shadow-2xs transition-all hover:border-[#717744] hover:text-[#717744] active:scale-[0.98]"
            >
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Email</span>
              <ArrowUpRight className="hidden h-3 w-3 sm:inline" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-[#bcbd8b]/30 bg-white text-[#373d20] hover:text-[#717744] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-[#bcbd8b]/20 bg-[#FAF8F5]"
          >
            <nav className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#717744] hover:text-[#373d20] font-medium text-sm transition-colors block w-full"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-2 rounded-full border border-[#bcbd8b]/30 bg-white px-3 py-2 text-xs font-medium text-[#717744] shadow-2xs w-fit">
                <span>🟢 Open for projects</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
