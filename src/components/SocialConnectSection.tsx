import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const socialLinks = [
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    handle: '@parssa-mohammadi',
    description: 'Professional updates, AI insights, and career milestones',
    url: 'https://www.linkedin.com/in/parssa-mohammadi-a9840a1b4/',
    icon: Linkedin,
    cta: 'Connect',
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@parssa.pro',
    description: 'Behind the scenes, daily AI experiments, and life updates',
    url: 'https://www.instagram.com/parssa.pro',
    icon: Instagram,
    cta: 'Follow',
  },
  {
    id: 'github',
    platform: 'GitHub',
    handle: '@PyParssa',
    description: 'Open source projects, code experiments, and contributions',
    url: 'https://github.com/PyParssa',
    icon: Github,
    cta: 'Visit',
  },
  {
    id: 'twitter',
    platform: 'X / Twitter',
    handle: '@parssadotpro',
    description: 'Quick thoughts on AI, tech commentary, and industry takes',
    url: 'https://x.com/parssadotpro',
    icon: Twitter,
    cta: 'Follow',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
};

export const SocialConnectSection: React.FC = () => {
  return (
    <section id="connect" className="py-24 px-6 sm:px-12 bg-[#FFF9F2]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col items-center text-center sm:items-start sm:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#373d20] mb-4">
            Let's Stay Connected
          </h2>
          <p className="text-[#8B7355] text-lg mb-6">
            Follow the journey. Share ideas. Build something together.
          </p>
          <div className="w-16 h-1 bg-[#717744] rounded-full" />
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.id}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 border border-[#bcbd8b]/20 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-[#FFF9F2] rounded-xl flex items-center justify-center text-[#717744] mb-4">
                  <Icon size={24} />
                </div>
                
                <h3 className="font-bold text-[#373d20] text-xl mb-1">
                  {link.platform}
                </h3>
                <p className="text-[#717744] font-medium text-sm mb-3">
                  {link.handle}
                </p>
                
                <p className="text-[#8B7355] text-sm mb-6 flex-grow">
                  {link.description}
                </p>
                
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#373d20] text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-[#717744] transition-colors w-full text-center inline-block mt-auto"
                >
                  {link.cta}
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
