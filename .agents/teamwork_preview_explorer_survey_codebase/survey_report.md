# Codebase & Tech Stack Survey Report

**Project**: PyParssa Portfolio & Services Website (`parssa.pro`)  
**Repository**: `/run/media/parssa/Extra/backend/parssa.pro/PyParssa.github.io`  
**Date**: 2026-09-20  
**Investigator**: Teamwork Codebase & Tech Stack Explorer  

---

## 1. Executive Summary

This survey provides a comprehensive technical architectural evaluation of the PyParssa portfolio website. The project is currently a modern, responsive single-page application (SPA) built with **React 19**, **Vite 6**, **TypeScript 5.8**, and **Tailwind CSS v4**. It builds cleanly and deploys automatically via GitHub Pages.

Presently, the site is structured as an interactive Curriculum Vitae / Resume focusing on clinical AI systems, independent engineering, academic background in biomedical engineering, and technical skills. To fulfill the requirements defined in `.agents/ORIGINAL_REQUEST.md`:
1. **Career Narrative (R1)**: Two critical milestones are missing from the current codebase: **Python/WordPress early work** and the **GE Healthcare internship**. The existing narrative components must be restructured into an evocative 5-step story progression.
2. **Service Offerings (R2)**: The site currently lacks any service offerings. Dedicated components and data structures must be added for: **1) Inbound Lead Qualification**, **2) Automated B2B Accounts Receivable**, and **3) Silent Automation Monitor**.
3. **Styling & Visuals (R3)**: The current UI employs a dark/indigo bento-grid aesthetic. It will need to adopt the "lightness" and palette extracted from the target Canva template. Additional static images residing in the root `images/` directory should be integrated or migrated to `public/images/`.

---

## 2. Tech Stack & Framework Architecture

### 2.1 Core Framework & Tooling

| Component | Technology | Version | Location / Reference |
| :--- | :--- | :--- | :--- |
| **Framework** | React / React-DOM | `^19.0.1` | `package.json:23-24` |
| **Build Tool & Dev Server** | Vite | `^6.2.3` | `package.json:25`, `vite.config.ts` |
| **Vite React Plugin** | `@vitejs/plugin-react` | `^5.0.4` | `package.json:18`, `vite.config.ts:2,9` |
| **Language** | TypeScript | `~5.8.2` | `package.json:35`, `tsconfig.json` |
| **CSS Framework** | Tailwind CSS (v4) | `^4.1.14` | `package.json:33`, `src/index.css:1` |
| **Tailwind Vite Plugin** | `@tailwindcss/vite` | `^4.1.14` | `package.json:17`, `vite.config.ts:1,9` |
| **Animation Library** | Motion (Framer Motion) | `^12.23.24` | `package.json:22` |
| **Iconography** | Lucide React | `^0.546.0` | `package.json:21` |
| **AI / GenAI SDK** | `@google/genai` | `^2.4.0` | `package.json:16` |
| **Node Runtime Target** | Node.js | `v22.22.1` | Local environment (`.github/workflows/deploy.yml` specifies `node-version: 20`) |

### 2.2 Multi-Page Configuration (`vite.config.ts`)

In `vite.config.ts` (lines 16–22), Rollup inputs are configured for two pages:
1. `main`: `/index.html` (the primary portfolio SPA, mounts `src/main.tsx`)
2. `plenary`: `/plenary.html` (a standalone static page for "Plenary — Illuminating Questions", styled with inline scoped CSS and Georgia serif typography)

Path aliases:
- `@/*` maps to `./*` via `vite.config.ts:11-13` and `tsconfig.json:18-22`.

---

## 3. Package Management & Build / Test Scripts

### 3.1 Package Manager
- **Package Manager**: `npm` (evidenced by `package-lock.json` in the root, lockfile version 3).
- Active runtime: Node `v22.22.1`, npm `9.2.0`.

### 3.2 NPM Scripts (`package.json:6-14`)

| Script | Command | Purpose | Verification Result |
| :--- | :--- | :--- | :--- |
| `npm run dev` | `vite --port=3000 --host=0.0.0.0` | Starts local dev server at `http://localhost:3000` | Verified config |
| `npm run build` | `vite build` | Compiles production bundle to `./dist` | **Passed** (0 errors, 12.98s) |
| `npm run preview` | `vite preview` | Serves `./dist` locally for QA inspection | Available |
| `npm run clean` | `rm -rf dist server.js` | Cleans build artifacts | Available |
| `npm run lint` | `tsc --noEmit` | Runs strict TypeScript type-checking | **Passed** (0 errors, code 0) |
| `npm run predeploy` | `npm run build` | Triggers build prior to manual deploy | Available |
| `npm run deploy` | `gh-pages -d dist` | Publishes `./dist` to GitHub Pages branch | Available |

### 3.3 CI/CD Workflow (`.github/workflows/deploy.yml`)
- Triggered on push to `main` / `master` branches and `workflow_dispatch`.
- Steps: `actions/checkout@v4` → `actions/setup-node@v4` (Node 20) → `npm ci` → `npm run build` → `actions/deploy-pages@v4` deploying `./dist`.
- Custom domain: configured via `CNAME` (`parssa.pro`).

### 3.4 Automated Testing Status
- There is currently **no automated test runner** (e.g., Vitest, Jest, Cypress, Playwright) listed in `package.json`.
- Project health relies on `npm run lint` (`tsc --noEmit`) and production bundling (`vite build`).
- End-to-end responsiveness and visual verification must be executed using the dev server (`npm run dev` / `npm run preview`) with browser automation tools.

---

## 4. Directory Layout & Asset Inventory

### 4.1 Directory Tree

```
/run/media/parssa/Extra/backend/parssa.pro/PyParssa.github.io/
├── .agents/                                # Multi-agent coordination metadata
├── .github/
│   └── workflows/
│       └── deploy.yml                      # GitHub Actions Pages deployment
├── dist/                                   # Production build output
├── images/                                 # Root-level image assets repository
│   ├── .gitkeep
│   ├── bootcamp.webp                       # Bootcamp / educational moment (144 KB)
│   ├── charlie.jpg                         # Personal / working portrait (106 KB)
│   ├── hero.webp                           # Tech hero asset (172 KB)
│   ├── meinmeta.webp                       # Meta certification / conference asset (124 KB)
│   ├── pictureme2.jpg                      # Portrait photo (350 KB)
│   ├── webpic1.webp                        # Healthcare AI presentation photo (400 KB)
│   └── webpic2.webp                        # Engineering community photo (1.48 MB)
├── public/
│   ├── .nojekyll
│   ├── CNAME                               # Custom domain: parssa.pro
│   ├── assets/
│   │   └── aistudio/.gitignore
│   └── images/                             # Publicly served image directory (Vite root)
│       ├── pictureme2.jpg                  # Primary portrait (HeroSection.tsx:19)
│       ├── webpic1.webp                    # Healthcare AI event (HeroSection.tsx:20)
│       └── webpic2.webp                    # Community photo (HeroSection.tsx:21)
├── src/
│   ├── components/
│   │   ├── ContactSection.tsx              # CTA, contact buttons & footer links
│   │   ├── EducationAndCredentials.tsx     # BME degree & Meta/IBM certifications
│   │   ├── ExecutiveSummaryBanner.tsx      # 4 bento highlight cards
│   │   ├── ExperienceSection.tsx           # Timeline of work experience
│   │   ├── HeroSection.tsx                 # Bento header, portraits, links, philosophy
│   │   ├── Navbar.tsx                      # Header nav, mode toggles, print button
│   │   ├── PublicationsAndAffiliations.tsx # Papers, translations, IEEE affiliation
│   │   ├── SkillsSection.tsx               # 4 skill categories bento grid
│   │   └── Toast.tsx                       # Status feedback toast banner
│   ├── data/
│   │   └── resumeData.ts                   # Central data definitions & content constants
│   ├── App.tsx                             # Top-level application component
│   ├── index.css                           # Tailwind CSS v4 entry & custom root styles
│   └── main.tsx                            # React DOM root mounting App.tsx
├── CNAME                                   # Root CNAME
├── favicon.svg                             # Site favicon
├── index.html                              # Root HTML entry template
├── plenary.html                            # Standalone showcase page for Plenary product
├── package.json                            # Dependencies and scripts
├── package-lock.json                       # Lockfile
├── tsconfig.json                           # TypeScript compiler options
└── vite.config.ts                          # Vite and Rollup configuration
```

### 4.2 Asset Inventory & Sourcing Opportunity
Notice the divergence between `images/` (root) and `public/images/`:
- `public/images/` currently only contains `pictureme2.jpg`, `webpic1.webp`, and `webpic2.webp`.
- The root `images/` contains 4 additional valuable assets:
  - `meinmeta.webp`: Meta backend credentials / professional journey.
  - `bootcamp.webp`: Early Python / coding transition.
  - `hero.webp`: High-impact visual for the freelance AI systems hero banner.
  - `charlie.jpg`: Candid photo suitable for editorial narrative storytelling.
- These can be copied into `public/images/` to support the R1 narrative and R2 service offerings without requiring external generation.

---

## 5. Existing Content, Narrative & Services Analysis

### 5.1 Existing Data Structure (`src/data/resumeData.ts`)

The site data model revolves around `ResumeData`:
- `name`: "Parssa Mohammadi"
- `title`: "AI Systems Designer"
- `experience`: 4 items:
  1. `parssa.pro (Independent Engineering)`: "AI Systems Designer & Full-Stack Architect" (2023 — Present)
  2. `National Institute of Cancer`: "AI Systems & Clinical Web Architect"
  3. `Medical Clinic Autonomous Systems`: "Lead AI Engineer & System Designer"
  4. `Plenary — Illuminating Questions`: "Founder & Product Engineer"
- `publications`: 3 items:
  1. Scientific Research on AI in Medical Diagnosis & Clinical Workflows (Paper)
  2. Translations of Authoritative Medical AI Literature & Textbooks (Book Translation)
  3. Active Member of IEEE (Professional Affiliation)
- `education`:
  - Bachelor of Science in Biomedical Engineering (High Honors)
- `certifications`:
  - Meta Certified Backend Developer
  - IBM AI Engineering Professional
  - Deep Learning & AI Specializations (DeepLearning.AI)
- `skillCategories`:
  - AI Systems & Applied Machine Learning
  - Backend & Systems Architecture
  - Frontend & Human-Computer Interaction
  - Healthcare Technology & Standards

### 5.2 Gap Analysis: Career Narrative (R1)

| Required Milestone (R1) | Current Codebase Status | Gap & Required Action |
| :--- | :--- | :--- |
| **Stage 1: Python / WordPress** | **Missing** | No mention of early WordPress web development and transition into Python programming in `resumeData.ts` or components. Must be added. |
| **Stage 2: Biomedical Engineering University Degree** | **Present** | Documented in `resumeData.ts:184-200` (B.S. with High Honors, quantitative engineering, physiological modeling, signal/image processing). Needs narrative integration. |
| **Stage 3: IEEE Member & GE Healthcare Internship** | **Partial** | IEEE membership is documented (`resumeData.ts:174-182`), but the **GE Healthcare internship is completely absent**. Must add the GE Healthcare medical systems experience. |
| **Stage 4: AI Research Papers in Medical Engineering** | **Present** | Documented in `resumeData.ts:154-162` (cancer imaging, clinical workflows, book translations). |
| **Stage 5: Freelance AI System Design** | **Present** | Documented under `parssa.pro` (`resumeData.ts:90-105`), focusing on deterministic LLMs, RAG pipelines, and operational workflow engines. |

### 5.3 Gap Analysis: Service Offerings (R2)

| Required Service (R2) | Current Codebase Status | Required Proposition & Content |
| :--- | :--- | :--- |
| **1. Inbound Lead Qualification** | **Missing** | High-intent lead scoring, instant intelligent triage, conversational AI enrichment, CRM sync, deterministic handoffs to human sales reps. |
| **2. Automated B2B Accounts Receivable** | **Missing** | Autonomous invoice reconciliation, gentle conversational reminder flows, ERP integration, dispute detection, audit-ready payment tracking. |
| **3. Silent Automation Monitor** | **Missing** | Background watchdog agents for internal business processes, anomaly detection, automated fail-safe alerting, token & latency cost guardrails. |

Currently, the site possesses **no services section or service cards whatsoever**. The site is formatted strictly as a personal resume rather than a client-facing freelance services platform.

---

## 6. Styling & CSS Architecture

### 6.1 Tailwind CSS v4 Configuration
- Utilizes `@tailwindcss/vite` plugin in `vite.config.ts`.
- Uses native CSS entry point `@import "tailwindcss";` in `src/index.css`.
- Does not rely on legacy `tailwind.config.js`.

### 6.2 Existing Color System (`src/index.css:3-20`)

```css
:root {
  --bg-main: #fafafa;
  --text-main: #171717;
  --text-muted: #737373;
  --border-subtle: #e5e5e5;
  --surface: #ffffff;
  --accent-indigo: #4f46e5;
}

.dark {
  --bg-main: #0a0a0c;
  --text-main: #f5f5f5;
  --text-muted: #a3a3a3;
  --border-subtle: #262626;
  --surface: #121316;
  --accent-indigo: #6366f1;
}
```

### 6.3 Typography (`index.html:26`, `src/index.css:22-35`)
- Primary font: `"Plus Jakarta Sans"`, loaded via Google Fonts.
- Monospace font: `"JetBrains Mono"`, loaded via Google Fonts.
- Editorial Serif font: `"Newsreader"` (loaded in `index.html:26`, but currently rarely utilized in components).

### 6.4 Alignment with Canva Styling (R3)
- Requirement R3 states: *Adopt the "lightness" and color palette from the Canva template (`https://www.canva.com/design/DAHVu7D1O2s/gwyuUfOUqbGYFA9E-AIyBA/edit`).*
- The current site has strong indigo accents (`#4f46e5`), heavy neutral borders (`border-neutral-200`), dark bento cards (`bg-neutral-900`), and dark mode toggles.
- When the Canva Crawler agent extracts the palette and lightness values, the styling agent should:
  1. Update `:root` variables in `src/index.css`.
  2. Adjust component backgrounds to match the light, breathable aesthetic of the Canva design.
  3. Align button styles, accent borders, and card elevations.

---

## 7. Key Files to Touch and Create

To seamlessly transition this codebase from a raw CV into a compelling narrative portfolio and freelance service platform, the following files must be created or modified:

### 7.1 Files to Modify

1. **`src/data/resumeData.ts`** (or create dedicated data modules):
   - Add narrative timeline items (Python/WordPress origins, Biomedical Engineering, IEEE & GE Healthcare internship, Medical AI publications, Freelance AI practice).
   - Add structured data for the 3 service offerings (title, tagline, value proposition, deliverables, tech architecture).
2. **`src/App.tsx`**:
   - Import and arrange the new narrative and services sections into the main layout.
   - Coordinate layout flow: Hero → Career Narrative Story → 3 Service Offerings → Selected Work/Systems → Skills & Accreditations → Contact.
3. **`src/components/Navbar.tsx`**:
   - Add navigation anchors: `#story` (Career Narrative), `#services` (AI Services), `#work` (Experience), and `#contact`.
   - Ensure mobile menu or responsive controls accommodate the new sections.
4. **`src/index.css`**:
   - Adjust theme CSS variables, lightness, subtle gradients, and typography based on the Canva template findings.
5. **`index.html`**:
   - Update metadata, title, and social preview descriptions to highlight "Freelance AI System Designer & Business Automation" and the three core services.
6. **`public/images/`**:
   - Copy relevant assets (`meinmeta.webp`, `bootcamp.webp`, `hero.webp`, `charlie.jpg`) from `/images/` into `/public/images/` or generate new assets as instructed.

### 7.2 Files to Create

1. **`src/components/NarrativeSection.tsx`**:
   - An editorial, responsive storytelling component representing the 5 career milestones with rich imagery, milestone badges, and contextual prose.
2. **`src/components/ServicesSection.tsx`**:
   - A dedicated 3-column or bento grid showcasing:
     - **Inbound Lead Qualification**
     - **Automated B2B Accounts Receivable**
     - **Silent Automation Monitor**
   - Each card featuring clear business ROI, technical mechanics, and interactive consultation triggers.
3. **`src/data/servicesData.ts`** & **`src/data/narrativeData.ts`** (Optional Clean Architecture approach):
   - Separates service offerings and career storytelling data from the traditional CV resume data for cleaner maintenance.

---

## 8. Summary Checklist for Subsequent Team Agents

| Agent Responsibility | Codebase Targets | Specific Deliverables |
| :--- | :--- | :--- |
| **Canva Crawler / Palette Inspector** | External URL inspection | Exact hex palette, lightness ratio, font pairings to feed into `src/index.css`. |
| **Image Asset Sourcing / Generation** | `images/` → `public/images/` | Ensure images for all 5 narrative stages and 3 services exist and are optimized. |
| **Narrative & Content Specialist** | `src/data/narrativeData.ts`, `src/data/servicesData.ts` | Detailed prose for the 5-milestone journey and in-depth value propositions for the 3 services. |
| **Frontend Implementation & Styling** | `src/components/NarrativeSection.tsx`, `src/components/ServicesSection.tsx`, `src/App.tsx`, `src/index.css` | Code the components, wire up the layout, apply Canva palette and lightness. |
| **Responsive QA & Local Tester** | Dev server (`npm run dev`), viewport testing | Verify desktop (1280px+), tablet (768px), and mobile (375px) responsive layouts without horizontal scroll or broken cards. |
