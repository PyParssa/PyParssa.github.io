# Original User Request

## 2026-09-20T11:41:09Z

# Teamwork Project Prompt — Draft

Create a narrative-style personal portfolio and services website for a freelance AI system designer, using the visual style from a provided Canva template, incorporating a specific career biography, three detailed AI service offerings, and local responsive testing.

Working directory: /run/media/parssa/Extra/backend/parssa.pro/PyParssa.github.io
Integrity mode: benchmark

> **Note to teamwork**: The user requested a specific workflow: one agent to crawl the Canva template for lightness/colors, a second to handle styling and request images from a third, a third to generate or fetch images from `public/images`, a fourth to write the narrative content, and a final agent to test the site locally across screen sizes. While you should manage your own optimal team routing, ensure these distinct tasks (crawling, styling, image generation, narrative generation, and local QA) are explicitly handled.

## Requirements

### R1. Narrative Content & Structure
Tell the story of the user's career path: Python/WordPress → Biomedical Engineering university degree → IEEE member & GE Healthcare internship → AI research papers in medical engineering → Freelance AI system design.

### R2. Service Offerings
Prominently feature three specific services with their provided value propositions: 1) Inbound Lead Qualification, 2) Automated B2B Accounts Receivable, 3) Silent Automation Monitor.

### R3. Styling & Visuals
Adopt the "lightness" and color palette from the Canva template (`https://www.canva.com/design/DAHVu7D1O2s/gwyuUfOUqbGYFA9E-AIyBA/edit`). Use existing images from `/run/media/parssa/Extra/backend/parssa.pro/PyParssa.github.io/public/images` or generate new ones as needed.

### R4. Responsive Design & QA
The final website must be tested locally to ensure it is fully functional and responsive across desktop and mobile screen sizes.

## Acceptance Criteria

### Content Verification
- [ ] The career narrative includes all requested milestones (Python/WordPress, Biomedical Engineering, IEEE, GE Healthcare, AI medical papers, AI system design).
- [ ] All three services (Inbound Lead Qualification, B2B AR Collections, Silent Automation Monitor) are present on the site with their detailed value propositions.

### Visuals & Styling
- [ ] A dedicated agent-as-judge has reviewed a screenshot of the local build against the Canva template (`https://www.canva.com/design/DAHVu7D1O2s/gwyuUfOUqbGYFA9E-AIyBA/edit`) and confirmed the colors and "lightness" match.
- [ ] Images have been successfully sourced from `public/images` or newly generated and integrated into the design.

### QA & Responsiveness
- [ ] The development server starts successfully without compilation errors.
- [ ] A local QA agent has verified via browser automation (or visual inspection) that the layout adapts correctly to both desktop and mobile viewports without overflowing text or broken elements.

