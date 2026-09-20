import React from 'react';
import { motion } from 'motion/react';
import { Server, Brain, Workflow } from 'lucide-react';

export const SkillsVisionSection: React.FC = () => {
  const skills = [
    {
      title: 'Backend Engineering',
      icon: <Server size={24} />,
      items: [
        'Python', 'Django', 'PostgreSQL', 'REST API Design', 'Docker', 'CI/CD', 'Git', 'HIPAA-Compliant Architecture'
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain size={24} />,
      items: [
        'LLM Pipeline Design', 'RAG (Retrieval-Augmented Generation)', 'Prompt Engineering', 'Computer Vision', 'Medical Imaging AI', 'Model Evaluation & Benchmarking', 'Agentic Workflows', 'Fine-Tuning'
      ]
    },
    {
      title: 'Workflow Engineering',
      icon: <Workflow size={24} />,
      items: [
        'n8n', 'Webhooks', 'Make (Integromat)', 'Zapier', 'API Orchestration', 'Cron & Scheduling', 'Event-Driven Architecture', 'Dead-Letter Queues'
      ]
    }
  ];

  const projects = [
    {
      tag: 'Product',
      tagStyles: 'bg-[#E8EDE0] text-[#717744]',
      title: 'Plenary',
      description: 'A calm digital space for meaningful questions, intentional rituals, and daily reflection. Built with privacy-first, zero-telemetry architecture — a quiet corner of the internet for personal inquiry.',
      status: 'Live',
      statusColor: 'bg-green-500',
      link: './plenary.html'
    },
    {
      tag: 'Healthcare AI',
      tagStyles: 'bg-[#DCEFDC] text-[#2E7D5B]',
      title: 'MedicChatbot',
      description: 'An autonomous, HIPAA-aware AI receptionist for medical clinics. Handles patient inquiries 24/7, books appointments, manages scheduling conflicts, and communicates naturally via voice or chat.',
      status: 'Private Beta',
      statusColor: 'bg-green-500',
      link: './medicchatbot.html'
    },
    {
      tag: 'National Cancer Institution',
      tagStyles: 'bg-[#F5E6D3] text-[#8B7355]',
      title: 'AI-Powered Breast Cancer Detection',
      description: 'An AI-assisted diagnostic system for the National Cancer Institution to accelerate breast cancer recognition and lesion identification in medical imaging, helping radiologists detect anomalies with higher confidence.',
      status: 'In Active Development',
      statusColor: 'bg-green-500'
    },
    {
      tag: 'Healthcare IoT',
      tagStyles: 'bg-[#FFF9F2] text-[#8B7355]',
      title: 'Smart Homes for Healthcare & IoT',
      description: 'An intelligent home monitoring system integrating IoT sensors with AI-driven health analytics. Tracks vitals, detects anomalies in daily patterns, and provides early alerts to caregivers and medical professionals.',
      status: 'In Research Phase',
      statusColor: 'bg-amber-500'
    },
    {
      tag: 'Medical Imaging',
      tagStyles: 'bg-[#E8EDE0] text-[#717744]',
      title: 'Smart Co-Worker for Field Engineers',
      description: 'An AI-powered assistant for field engineers at medical imaging companies. Helps technicians diagnose equipment issues, access service manuals, log field reports, and get real-time guidance.',
      status: 'In Development',
      statusColor: 'bg-green-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="skills-vision" className="py-24 px-6 sm:px-12 bg-white border-t border-[#bcbd8b]/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Skills Section */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#373d20] mb-4">What I Work With</h2>
            <div className="w-16 h-1 bg-[#717744] rounded-full mb-6"></div>
            <p className="text-[#8B7355] text-lg max-w-2xl">The tools and frameworks I use to build intelligent systems.</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 border border-[#bcbd8b]/20"
              >
                <div className="w-12 h-12 bg-[#FFF9F2] rounded-xl flex items-center justify-center text-[#717744] mb-6">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-[#373d20] mb-4">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span 
                      key={i}
                      className="bg-[#F5F0EB] text-[#373d20] px-3 py-1.5 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Projects Section */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#373d20] mb-4">My Projects</h2>
            <div className="w-16 h-1 bg-[#717744] rounded-full mb-6"></div>
            <p className="text-[#8B7355] text-lg max-w-2xl">Products and systems I've built or am actively building — from live apps to healthcare research.</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 border border-[#bcbd8b]/10 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="mb-6">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${project.tagStyles}`}>
                    {project.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#373d20] mb-4">{project.title}</h3>
                <p className="text-[#8B7355] flex-grow mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-full ${project.statusColor}`}></div>
                    <span className="text-sm font-medium text-[#373d20]">{project.status}</span>
                  </div>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#717744] hover:text-[#373d20] transition-colors"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};
