import React from 'react';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { EducationItem, CertificationItem } from '../data/resumeData';

interface EducationAndCredentialsProps {
  education: EducationItem[];
  certifications: CertificationItem[];
}

export const EducationAndCredentials: React.FC<EducationAndCredentialsProps> = ({
  education,
  certifications
}) => {
  return (
    <section id="education-credentials-section" className="my-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Education Bento Card */}
        <div 
          id="education-column" 
          className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-6 bg-indigo-600 rounded-full"></div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Background
                </h2>
              </div>
              <span className="font-mono-code text-xs text-neutral-400">B.S. Biomedical Eng.</span>
            </div>

            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  id={`edu-item-${edu.id}`}
                  className="print-avoid-break rounded-2xl border border-neutral-150 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-800/40 p-5"
                >
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                      {edu.degree}
                    </h3>
                    <div className="font-mono-code text-xs font-semibold text-neutral-400">
                      {edu.period}
                    </div>
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                      {edu.institution}
                    </span>
                    {edu.honors && (
                      <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400">
                        {edu.honors}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {edu.details}
                  </p>

                  <div className="mt-4 pt-3 border-t border-neutral-200/60 dark:border-neutral-700/60">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                      Key Areas of Study:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courseworkOrFocus.map((course) => (
                        <span
                          key={course}
                          className="rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 px-2.5 py-0.5 text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 shadow-2xs"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Certifications Bento Card */}
        <div 
          id="certifications-column" 
          className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-6 bg-indigo-600 rounded-full"></div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Credentials
                </h2>
              </div>
              <span className="font-mono-code text-xs text-neutral-400">Meta • IBM Certified</span>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  id={`cert-item-${cert.id}`}
                  className="print-avoid-break rounded-2xl border border-neutral-150 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-800/40 p-5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                      {cert.name}
                    </h3>
                    <span className="rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-2.5 py-0.5 text-[10px] font-bold text-neutral-700 dark:text-neutral-300 shadow-2xs">
                      {cert.badgeText}
                    </span>
                  </div>

                  <div className="mt-1 text-xs font-medium text-indigo-600 dark:text-indigo-400">
                    Issued by {cert.issuer}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 px-2.5 py-0.5 text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 shadow-2xs"
                      >
                        <CheckCircle2 className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
