export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  tagline: string;
  badge?: string;
  highlights: string[];
  techStack: string[];
  link?: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  type: 'Paper' | 'Book Translation' | 'Professional Affiliation';
  venueOrPublisher: string;
  year: string;
  description: string;
  focus: string[];
  link?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  honors?: string;
  details: string;
  courseworkOrFocus: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  badgeText: string;
  skills: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  tagline: string;
  philosophy: string;
  location: string;
  email: string;
  website: string;
  websiteUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  xUrl: string;
  instagramUrl: string;
  summary: string;
  executiveSummary: string;
  experience: ExperienceItem[];
  publications: PublicationItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  skillCategories: SkillCategory[];
}

export const resumeData: ResumeData = {
  name: "Parssa Mohammadi",
  title: "AI Systems Designer",
  tagline: "Designing elegant, AI-powered systems & automated workflows for businesses.",
  location: "San Francisco Bay Area & Remote",
  email: "parssamohammadi@gmail.com",
  website: "parssa.pro",
  websiteUrl: "https://parssa.pro",
  githubUrl: "https://github.com/parssa",
  linkedinUrl: "https://www.linkedin.com/in/parssa",
  xUrl: "https://x.com/parssadotpro",
  instagramUrl: "https://www.instagram.com/parssa.pro",
  summary:
    "AI Systems Designer specializing in building elegant, AI-powered systems, web applications, and automated workflows for businesses. Deep background at the intersection of Biomedical Engineering and modern software architecture. Focused on enterprise-secure, cost-effective solutions engineered with restraint—integrating AI only where it genuinely removes manual friction rather than introducing technical debt.",
  executiveSummary:
    "AI Systems Designer with high honors Biomedical Engineering background and Meta Backend Certification. Proven track record deploying AI medical imaging applications (National Institute of Cancer), HIPAA-aware clinical voice/chat receptionists, and high-impact business workflow automation engines.",
  philosophy:
    "Elegance is a byproduct of restraint. In software and systems design, AI must earn its place—it should be smart, simple, and built strictly to remove work. We prioritize purpose-built systems tailored to actual operational realities over generic templates.",
  experience: [
    {
      id: "independent-ai",
      role: "AI Systems Designer & Full-Stack Architect",
      organization: "parssa.pro (Independent Engineering)",
      period: "2023 — Present",
      tagline: "Enterprise-grade AI systems, bespoke web apps, and automated workflows.",
      badge: "Current Focus",
      link: "https://parssa.pro",
      highlights: [
        "Architect and deliver custom AI-native software platforms and operational workflow engines tailored to specific business requirements.",
        "Implement end-to-end full-stack architectures combining high-performance Python/Django backend services with reactive TypeScript/React user interfaces.",
        "Design token-efficient LLM routing, Retrieval-Augmented Generation (RAG) pipelines, and deterministic validation layers that guarantee output reliability.",
        "Enforce strict enterprise data governance, zero-retention privacy protocols, and low-latency API infrastructure."
      ],
      techStack: ["Python", "Django", "React", "TypeScript", "Tailwind CSS", "LLM Pipelines", "PostgreSQL", "RAG"]
    },
    {
      id: "national-cancer-inst",
      role: "AI Systems & Clinical Web Architect",
      organization: "National Institute of Cancer",
      period: "Medical Imaging Project",
      tagline: "Clinician-facing AI web application accelerating breast cancer recognition.",
      badge: "Clinical Healthcare",
      highlights: [
        "Engineered an AI-assisted diagnostic web application created to accelerate breast cancer recognition and lesion identification in medical imaging.",
        "Designed the clinical user interface and low-latency client-side rendering pipeline to match real-world diagnostic workflows for attending radiologists.",
        "Collaborated with clinical oncologists to ensure model interpretability, confidence scoring clarity, and high-resolution DICOM visualization standards.",
        "Built responsive, distraction-free analytical views with instant diagnostic markups and structured findings export."
      ],
      techStack: ["Medical Imaging AI", "Computer Vision", "Python", "React", "DICOM", "Clinical UX", "REST APIs"]
    },
    {
      id: "ai-receptionist",
      role: "Lead AI Engineer & System Designer",
      organization: "Medical Clinic Autonomous Systems",
      period: "Autonomous Operations",
      tagline: "HIPAA-aware autonomous AI receptionist handling patient inquiries and scheduling.",
      badge: "Healthcare Ops",
      highlights: [
        "Architected an intelligent voice and conversational receptionist for medical clinics to handle round-the-clock patient inquiries and appointment booking.",
        "Designed strict HIPAA-compliant data pipelines featuring end-to-end encryption, ephemeral audio processing, and zero unauthorized data retention.",
        "Implemented intelligent calendar conflict resolution and deterministic fail-safe triggers to seamlessly escalate complex clinical queries to human staff.",
        "Reduced missed clinic calls to near-zero while eliminating over 60% of repetitive receptionist phone overhead."
      ],
      techStack: ["Conversational AI", "HIPAA Compliance", "Python", "Speech-to-Text / TTS", "Webhooks", "Calendar APIs"]
    },
    {
      id: "plenary",
      role: "Founder & Product Engineer",
      organization: "Plenary — Illuminating Questions",
      period: "Independent Product",
      tagline: "An app for mindful personal inquiry, intentional rituals, and daily reflection.",
      badge: "HCI & Product",
      link: "./plenary.html",
      highlights: [
        "Conceived, designed, and deployed Plenary—a calm, distraction-free personal space centered around deep questions and daily reflection rituals.",
        "Crafted a minimalist aesthetic rooted in typographic elegance, rhythmic spacing, and quiet digital interfaces.",
        "Built with client-side zero-telemetry architecture prioritizing user privacy and instant responsiveness across mobile and desktop devices."
      ],
      techStack: ["React", "TypeScript", "Minimalist UX", "State Architecture", "Mobile Responsive", "LocalStorage"]
    }
  ],
  publications: [
    {
      id: "scientific-paper",
      title: "Scientific Research on AI in Medical Diagnosis & Clinical Workflows",
      type: "Paper",
      venueOrPublisher: "Scientific Publication in Medical AI",
      year: "Author",
      description:
        "Authored a peer-reviewed scientific paper investigating the real-world application of artificial intelligence algorithms in clinical medicine, focusing on computational imaging analysis and diagnostic precision.",
      focus: ["Medical Imaging", "Diagnostic AI", "Clinical Decision Support", "Algorithmic Precision"]
    },
    {
      id: "book-translations",
      title: "Translations of Authoritative Medical AI Literature & Textbooks",
      type: "Book Translation",
      venueOrPublisher: "Technical & Medical AI Publishing",
      year: "Translator & Editor",
      description:
        "Translated authoritative medical AI books and hands-on clinical AI practice material into accessible regional language editions, expanding access to cutting-edge technical knowledge for students and healthcare professionals.",
      focus: ["Applied Healthcare AI", "Technical Knowledge Democratization", "Educational Resources"]
    },
    {
      id: "ieee-membership",
      title: "Active Member of IEEE (Institute of Electrical and Electronics Engineers)",
      type: "Professional Affiliation",
      venueOrPublisher: "IEEE Engineering Society",
      year: "Active Member",
      description:
        "Active member participating in discussions and initiatives on responsible artificial intelligence, medical electronics, and software engineering standards.",
      focus: ["Engineering Standards", "Ethical AI", "Bio-Engineering"]
    }
  ],
  education: [
    {
      id: "bme-degree",
      degree: "Bachelor of Science in Biomedical Engineering",
      institution: "Biomedical Engineering Faculty",
      period: "Graduated with High Honors",
      honors: "High Honors Graduate",
      details:
        "Strong foundation in quantitative engineering, computational biology, physiological modeling, and practical applications of machine learning in healthcare and diagnostic systems.",
      courseworkOrFocus: [
        "Machine Learning in Medicine",
        "Biomedical Signal & Image Processing",
        "Clinical Instrumentation & Biosystems",
        "Mathematical Modeling & Algorithms"
      ]
    }
  ],
  certifications: [
    {
      id: "meta-backend",
      name: "Meta Certified Backend Developer",
      issuer: "Meta",
      badgeText: "Meta Professional",
      skills: ["Python", "Django", "REST APIs", "Databases & ORM", "Version Control (Git)", "DevOps & Security"]
    },
    {
      id: "ibm-ai",
      name: "IBM AI Engineering Professional",
      issuer: "IBM",
      badgeText: "IBM Certified",
      skills: ["Machine Learning", "Deep Learning", "Neural Networks", "Applied AI Solutions", "Model Evaluation"]
    },
    {
      id: "coursera-dl",
      name: "Deep Learning & AI Specializations",
      issuer: "Coursera & DeepLearning.AI",
      badgeText: "DeepLearning.AI",
      skills: ["Convolutional Neural Networks", "Structuring ML Projects", "Sequence Models", "Optimization"]
    }
  ],
  skillCategories: [
    {
      title: "AI Systems & Applied Machine Learning",
      description: "Engineering intelligent, reliable inference layers that solve practical operational bottlenecks.",
      skills: [
        "LLM Pipeline Design",
        "Medical Imaging AI",
        "Computer Vision",
        "Retrieval-Augmented Generation (RAG)",
        "Prompt Engineering",
        "Agentic Workflow Design",
        "Model Benchmarking & Evaluation",
        "Cost & Latency Optimization"
      ]
    },
    {
      title: "Backend & Systems Architecture",
      description: "Secure, performant, and scalable server-side infrastructure.",
      skills: [
        "Python",
        "Django",
        "RESTful API Design",
        "Database Architecture (PostgreSQL, SQLite)",
        "Enterprise RBAC & Auth",
        "HIPAA-Aware Security Standards",
        "System Refactoring & Optimization",
        "CI/CD & Git Workflows"
      ]
    },
    {
      title: "Frontend & Human-Computer Interaction",
      description: "Clean, distraction-free interfaces that prioritize clarity and user autonomy.",
      skills: [
        "TypeScript",
        "React",
        "Modern CSS & Tailwind CSS",
        "Minimalist & Editorial UI Design",
        "Mobile-First Responsive Layouts",
        "Clinical & Radiologist UX",
        "Performance & Web Vitals",
        "Static Site Generation"
      ]
    },
    {
      title: "Healthcare Technology & Standards",
      description: "Domain-specific expertise in regulated clinical environments.",
      skills: [
        "HIPAA Compliance Principles",
        "Medical Imaging Data (DICOM)",
        "Clinical Diagnostic Workflows",
        "Audit Trail & Encryption Practices",
        "Healthtech System Integration"
      ]
    }
  ],
};
