# Orchestration Plan: PyParssa Portfolio & Services Website

## Objectives
Build a high-quality, narrative-style personal portfolio and services website for a freelance AI system designer that strictly satisfies all requirements in `ORIGINAL_REQUEST.md`:
1. Career Path Narrative: Python/WordPress → Biomedical Engineering degree → IEEE member & GE Healthcare internship → AI research papers in medical engineering → Freelance AI system design.
2. 3 Featured Services:
   - Inbound Lead Qualification
   - Automated B2B Accounts Receivable
   - Silent Automation Monitor
3. Styling & Visuals:
   - Canva template color palette and "lightness" (https://www.canva.com/design/DAHVu7D1O2s/gwyuUfOUqbGYFA9E-AIyBA/edit)
   - Images sourced from `public/images` or generated as needed
4. Local QA & Responsive Design:
   - Dev server runs cleanly without errors
   - Desktop and mobile viewport testing (no overflow, clean layout)
   - Dedicated agent-as-judge visual comparison against the Canva template

## Phase 0: Survey & Specification Mining
- Explorer 1 (Codebase & Tech Stack): Inspect repository structure, package.json, framework, dev server scripts, existing components and styling setup.
- Spec Miner 2 (Canva Template & Palette): Inspect Canva design URL, extract colors, background lightness, typography styles, card and section layouts.
- Explorer 3 (Assets & Image Inventory): Inspect `public/images`, inventory existing photos/assets, identify what matches the narrative and services, determine generation needs.

## Phase 1: Architecture & Feature Inventory
- Synthesize findings into `PROJECT.md` with full feature inventory, interface contracts, and module boundaries.

## Phase 2: Implementation & Iteration Loops
- Distinct tasks handled:
  - Task A: Narrative Content & Services structure (Career progression + 3 services with value propositions)
  - Task B: Styling & Visuals (Applying Canva lightness, color palette, typography, responsive grid)
  - Task C: Image Integration & Generation (Placing relevant images for career stages and services)
- Verification loops with Worker, Reviewers, Challengers, and Forensic Auditor.

## Phase 3: Local QA, Responsive Testing & Visual Judge
- Start dev server locally and verify zero errors.
- Test across screen sizes (desktop, tablet, mobile).
- Dedicated Visual Judge to compare screenshots/layout against Canva template lightness and color scheme.
- Forensic audit for genuine implementation and clean integrity report.

