/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, ChevronRight, Download, Link as LinkIcon, Database, Phone, Shield, GraduationCap, Award, Briefcase, Sparkles, BookOpen, Users } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { resumeData } from './data/resumeData';
import { Navbar } from './components/Navbar';
import { ContactSection } from './components/ContactSection';
import { SocialConnectSection } from './components/SocialConnectSection';
import { Toast } from './components/Toast';

export default function App() {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, 200]);

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
    <div className="min-h-screen bg-[#FAF8F5] text-[#373d20] font-sans selection:bg-[#bcbd8b] selection:text-[#373d20] overflow-x-hidden">
      
      {/* Top Navigation Bar */}
      <Navbar
        viewMode={viewMode}
        setViewMode={(mode) => {
          setViewMode(mode);
          showToast(mode === 'executive' ? 'Switched to Executive View' : 'Switched to Narrative View');
        }}
        email={resumeData.email}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 sm:px-12 pt-32 pb-16 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#bcbd8b]/40 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FFF9F2] rounded-full blur-[100px] opacity-80 pointer-events-none"></div>
        <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-[#F5E6D3]/50 rounded-full blur-[80px] pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center"
        >
          <img src="/images/pictureme2.jpg" alt="Parssa Mohammadi" className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-2xl mb-8 ring-4 ring-[#bcbd8b]/20" />
          
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#373d20] text-white text-sm font-semibold tracking-wider mb-6">
            AI SYSTEM DESIGNER & ENGINEER
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#373d20] mb-6 leading-tight">
            I build AI that <span className="font-editorial italic text-[#717744]">actually works</span> — and I love the craft behind it.
          </h1>
          <p className="text-xl md:text-2xl text-[#8B7355] mb-10 max-w-2xl mx-auto leading-relaxed">
            From early WordPress experiments to deploying HIPAA-compliant medical AI — my journey is driven by practical automation, systems thinking, and a deep love for purposeful engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#story" className="px-8 py-4 bg-[#373d20] text-white rounded-xl font-medium hover:bg-[#717744] transition-colors flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-[#373d20]/10">
              Read My Story <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#services" className="px-8 py-4 bg-white text-[#373d20] border border-[#bcbd8b]/30 rounded-xl font-medium hover:bg-[#FFF9F2] transition-colors w-full sm:w-auto justify-center text-center shadow-sm">
              Explore My Services
            </a>
          </div>
        </motion.div>
      </section>

      {/* The Story Timeline — Full-Width Narrative with Alternating Images */}
      <section id="story" className="py-24 px-6 sm:px-12 bg-white relative z-10 border-t border-[#bcbd8b]/10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <span className="text-sm font-bold text-[#bcbd8b] tracking-widest uppercase mb-4 block">The journey so far</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#373d20] mb-4 font-editorial italic">The Story So Far</h2>
            <p className="text-lg text-[#8B7355] max-w-2xl mx-auto">Every chapter taught me something new about building systems that matter. Here's how it unfolded.</p>
            <div className="w-16 h-1 bg-[#717744] rounded-full mx-auto mt-6"></div>
          </motion.div>

          {/* Central timeline line - visible on md+ */}
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#bcbd8b]/30 -translate-x-1/2"></div>

            <StoryChapter
              chapterNum="01"
              year="Early Years"
              title="The Spark — Python & WordPress"
              narrative="It started with curiosity. Before I turned 18, I was already deep into Python scripting and building WordPress sites — not as school projects, but as real, deployed websites for real people. Those late nights debugging PHP and writing my first Python functions taught me something I still carry: the thrill of making something work."
              image="/images/timeline_early_coding.jpg"
              imageAlt="Early coding workspace with Python and WordPress"
              icon={<BookOpen />}
              side="right"
            />
            <StoryChapter
              chapterNum="02"
              year="University"
              title="The Lab — Biomedical Engineering"
              narrative="I chose Biomedical Engineering because I wanted to build things that mattered to people's health. The rigorous coursework in computational modeling, signal processing, and medical systems gave me a framework for thinking about problems with extreme precision. I graduated with high honors, but the real education was learning to think in systems."
              image="/images/charlie.jpg"
              imageAlt="University years"
              icon={<GraduationCap />}
              side="left"
            />
            <StoryChapter
              chapterNum="03"
              year="Early Career"
              title="The Leap — IEEE & GE Healthcare"
              narrative="Joining IEEE connected me to a global community of engineers pushing boundaries. My internship at GE Healthcare was a turning point — I saw firsthand how enterprise-grade medical imaging systems work at scale, the compliance requirements, and the incredible precision needed when software meets healthcare."
              image="/images/bootcamp.webp"
              imageAlt="IEEE and tech conferences"
              icon={<Briefcase />}
              side="right"
            />
            <StoryChapter
              chapterNum="04"
              year="Research"
              title="The Papers — Medical AI Publications"
              narrative="The bridge between theory and practice became my thing. I co-authored peer-reviewed papers focused on real-world AI use cases in medical engineering — not theoretical exercises, but work aimed at improving how clinicians use diagnostic tools. This experience solidified my conviction: AI should serve, not just impress."
              image="/images/timeline_medical_ai.jpg"
              imageAlt="Medical AI research illustration"
              icon={<Award />}
              side="left"
            />
            <StoryChapter
              chapterNum="05"
              year="Upskilling"
              title="The Credentials — Meta & IBM"
              narrative="I completed Meta's Backend Development course and IBM's AI Engineering certification — not for the badges, but for the structured depth. These programs filled gaps in my enterprise engineering knowledge and gave me frameworks for building production-grade ML systems that companies actually rely on."
              image="/images/meinmeta.webp"
              imageAlt="At Meta headquarters"
              icon={<Award />}
              side="right"
            />
            <StoryChapter
              chapterNum="06"
              year="Projects"
              title="The Products — MedicChatbot & Plenary"
              narrative={
                <span>
                  Then came the products. <a href="https://parssa.pro/medicchatbot" className="text-[#717744] underline font-semibold hover:text-[#373d20]" target="_blank" rel="noreferrer">MedicChatbot</a> is an autonomous medical receptionist — it handles patient inquiries, books appointments, and never sleeps. <a href="https://parssa.pro/plenary" className="text-[#717744] underline font-semibold hover:text-[#373d20]" target="_blank" rel="noreferrer">Plenary</a> is the opposite — a quiet, mindful app for personal reflection. Two very different products, one principle: build only what genuinely helps.
                </span>
              }
              image="/images/timeline_product_dashboard.jpg"
              imageAlt="AI product dashboard"
              icon={<Database />}
              side="left"
            />
            <StoryChapter
              chapterNum="07"
              year="Present"
              title="The Practice — Freelance AI Systems"
              narrative="Today, I run my own consultancy, designing and building AI-powered software for businesses. My specialty: RAG pipelines, automation engines, and intelligent agents that drive actual revenue and operational efficiency. Every system I build is purpose-built — no bloat, no unnecessary complexity, just tools that work."
              image="/images/pictureme2.jpg"
              imageAlt="Parssa Mohammadi — present day"
              icon={<Sparkles />}
              side="right"
            />
            <StoryChapter
              chapterNum="08"
              year="Community"
              title="The Network — Sharing the Journey"
              narrative="I actively create content and build networks within the AI space on LinkedIn and Instagram, sharing insights on automation, system design, and practical AI. Because the best ideas come from conversations, not isolation."
              image="/images/timeline_community.jpg"
              imageAlt="Content creation and community"
              icon={<Users />}
              isLast
              side="left"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 sm:px-12 bg-[#FFF9F2] relative z-10 border-t border-[#bcbd8b]/10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold text-[#bcbd8b] tracking-widest uppercase mb-4 block">What I offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#373d20] mb-4">Specialized AI Services</h2>
            <p className="text-[#8B7355] max-w-2xl mx-auto">High-leverage automation systems designed to cut overhead and directly impact your bottom line.</p>
            <div className="w-16 h-1 bg-[#717744] rounded-full mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              number="01"
              title="Inbound Lead Qualification & Pipeline"
              tag="Fastest ROI"
              description="An automated system that instantly processes incoming leads, qualifies them, and alerts your sales team."
              details={[
                "Built in 1 week, zero regulatory risk.",
                "Stops leads from sitting unanswered and losing revenue.",
                "Live demo available: fill a test form, see the instant Slack alert.",
                "Available as a template or full done-for-you retainer."
              ]}
              color="bg-[#F5E6D3] text-[#8B7355]"
            />
            
            <ServiceCard 
              number="02"
              title="B2B Accounts Receivable Agent"
              tag="Operations Relief"
              description="An automated B2B collections agent that politely and persistently chases clients for unpaid invoices."
              details={[
                "Universally solves the discomfort of chasing money.",
                "'Stop being the bad guy, let the system do it.'",
                "Integrates deeply with QuickBooks & Xero ecosystems.",
                "Carefully calibrated language to maintain fair-debt-collection tone norms."
              ]}
              color="bg-[#E8EDE0] text-[#717744]"
            />

            <ServiceCard 
              number="03"
              title="Silent Automation Monitor & Proxy"
              tag="For Architects"
              description="A meta-tool for RevOps and Automation Architects to protect their own automations from failing silently."
              details={[
                "A lightweight monitoring backend for automation ecosystems.",
                "Protects your webhooks, n8n workflows, and APIs.",
                "Built for the community of automation engineers.",
                "Provides a dead-letter queue for failed critical operations."
              ]}
              color="bg-[#FFF9F2] text-[#8B7355]"
            />
          </div>
        </div>
      </section>

      {/* Social Media Connect Section */}
      <SocialConnectSection />
      
      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-16">
        <ContactSection
          data={resumeData}
          onCopyEmail={handleCopyEmail}
          copied={copiedEmail}
        />
      </div>

      {/* Footer */}
      <footer className="bg-[#373d20] text-white/70 py-8 px-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Parssa Mohammadi — Built with purpose and restraint.</p>
      </footer>
      
      <Toast message={toastMessage} />
    </div>
  );
}

// ─── Story Chapter (Alternating Timeline Item with Image) ──────────────

interface StoryChapterProps {
  chapterNum: string;
  year: string;
  title: string;
  narrative: React.ReactNode;
  image: string;
  imageAlt: string;
  icon: React.ReactNode;
  side: 'left' | 'right';
  isLast?: boolean;
}

function StoryChapter({ chapterNum, year, title, narrative, image, imageAlt, icon, side, isLast = false }: StoryChapterProps) {
  const isImageLeft = side === 'left';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 ${isLast ? 'mb-0' : ''}`}
    >
      {/* Timeline dot - center on md+ */}
      <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-white border-4 border-[#bcbd8b]/30 text-[#717744] items-center justify-center shadow-sm">
        {icon}
      </div>

      {/* Image side */}
      <div className={`${isImageLeft ? 'md:order-1' : 'md:order-2'}`}>
        <div className="relative group">
          <img 
            src={image} 
            alt={imageAlt} 
            className="w-full h-[300px] md:h-[350px] object-cover rounded-2xl shadow-lg border border-[#bcbd8b]/10 group-hover:shadow-xl transition-shadow duration-300" 
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-[#717744] shadow-sm">
            Chapter {chapterNum}
          </div>
        </div>
      </div>

      {/* Text side */}
      <div className={`${isImageLeft ? 'md:order-2 md:pl-12' : 'md:order-1 md:pr-12 md:text-right'}`}>
        {/* Mobile icon */}
        <div className="md:hidden flex w-10 h-10 rounded-full bg-white border-2 border-[#bcbd8b]/30 text-[#717744] items-center justify-center shadow-sm mb-4">
          {icon}
        </div>
        <span className="text-sm font-bold text-[#bcbd8b] tracking-widest uppercase mb-2 block">{year}</span>
        <h3 className="text-2xl md:text-3xl font-bold text-[#373d20] mb-4 leading-tight">{title}</h3>
        <p className="text-[#8B7355] leading-relaxed text-base md:text-lg">{narrative}</p>
      </div>
    </motion.div>
  );
}

// ─── Service Card ──────────────────────────────────────────────────────

function ServiceCard({ number, title, description, details, tag, color }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#bcbd8b]/10 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-6">
        <span className="text-4xl font-black text-[#bcbd8b]/30">{number}</span>
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${color}`}>
          {tag}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-[#373d20] mb-4 leading-tight">{title}</h3>
      <p className="text-[#8B7355] mb-6 flex-grow">{description}</p>
      
      <ul className="space-y-3 mt-auto">
        {details.map((detail: string, idx: number) => (
          <li key={idx} className="flex gap-3 text-sm text-[#717744]">
            <CheckCircle2 className="w-5 h-5 text-[#717744] flex-shrink-0" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
      
      <button className="mt-8 w-full py-3 rounded-xl border border-[#bcbd8b]/30 text-[#373d20] font-medium hover:bg-[#FFF9F2] transition-colors hover:cursor-pointer">
        Learn More
      </button>
    </motion.div>
  );
}
