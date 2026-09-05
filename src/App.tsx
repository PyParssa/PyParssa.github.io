/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { resumeData } from './data/resumeData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExecutiveSummaryBanner } from './components/ExecutiveSummaryBanner';
import { ExperienceSection } from './components/ExperienceSection';
import { PublicationsAndAffiliations } from './components/PublicationsAndAffiliations';
import { SkillsSection } from './components/SkillsSection';
import { EducationAndCredentials } from './components/EducationAndCredentials';
import { ContactSection } from './components/ContactSection';
import { Toast } from './components/Toast';

export default function App() {
  const [viewMode, setViewMode] = useState<'full' | 'executive'>('full');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.email);
    setCopiedEmail(true);
    showToast(`Email copied: ${resumeData.email}`);
    setTimeout(() => {
      setCopiedEmail(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 transition-colors duration-200 dark:bg-neutral-950 dark:text-neutral-100">
      {/* Top Navigation Bar (Hidden during printing) */}
      <Navbar
        viewMode={viewMode}
        setViewMode={(mode) => {
          setViewMode(mode);
          showToast(mode === 'executive' ? 'Switched to One-Page Executive View' : 'Switched to Full CV View');
        }}
        email={resumeData.email}
      />

      {/* Main Resume Canvas Container */}
      <main id="resume-container" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-4">
        {/* Header / Hero Section */}
        <HeroSection
          data={resumeData}
          onCopyEmail={handleCopyEmail}
          copied={copiedEmail}
        />

        {/* Executive Highlights Grid */}
        <ExecutiveSummaryBanner />

        {/* Selected Systems & Work Experience */}
        <ExperienceSection
          items={resumeData.experience}
          isExecutiveMode={viewMode === 'executive'}
        />

        {/* Technical Stack & Disciplines */}
        <SkillsSection categories={resumeData.skillCategories} />

        {/* Publications, Research & Translations */}
        <PublicationsAndAffiliations items={resumeData.publications} />

        {/* Education & Industry Certifications */}
        <EducationAndCredentials
          education={resumeData.education}
          certifications={resumeData.certifications}
        />

        {/* Professional Inquiries & Footer Section */}
        <ContactSection
          data={resumeData}
          onCopyEmail={handleCopyEmail}
          copied={copiedEmail}
        />
      </main>

      {/* Lightweight Status Toast Feedback */}
      <Toast message={toastMessage} />
    </div>
  );
}
