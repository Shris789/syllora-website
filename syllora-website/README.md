# 🎓 Syllora — "From Syllabus to Success"
**Next-Generation EdTech AI Study Companion**

Syllora is a modern, responsive, and visually stunning web platform built for university and junior college students across **Engineering, Pure Science, Commerce, Arts, and Junior College (FYJC/SYJC)**.

---

## 🚀 Key Highlights & Features

1. **Brand & Visual Identity**:
   - **Dual Theme Support (Light / Dark Mode Toggle)**: Instant one-click switching between a crisp, clean Light Theme (`#F8FAFC`, pure white cards `#FFFFFF`, deep charcoal text `#0F172A`) and an immersive Dark Tech Navy Theme (`#070F1E`, `#0A192F`, glowing cyan & emerald accents).
   - **Persistent Preference**: Automatically detects system preference (`prefers-color-scheme`) and persists user choices in `localStorage`.
   - **Color Palette**: Deep Tech Blue / Navy (`#0A192F` and `#0F172A`), Vibrant Tech Blue Accent (`#2563EB` / `#0284C7`), Emerald Green highlights for success metrics (`#059669` / `#10B981`).
   - **User Logo Integration**: Prominently integrated into the sticky glassmorphic navigation bar, header, and footer.
   - **Typography**: Clean, modern typography using Google's **Plus Jakarta Sans** and **JetBrains Mono** for equations and technical codes.
   - **Style**: Ultra-sleek glassmorphic panels (`backdrop-blur-xl`), animated gradient orbs, interactive card hover elevations, and dynamic glowing status indicators.

2. **Full Page Structure & Interactive Modules**:
   - **Main Navigation Bar**: Brand logo + name, nav links (Home, Features, AI Planner, Doubt Solver, PYQ Library, Pricing, Reviews), Dark/Light mode toggle, and "Try Free Planner" / "Login / Sign Up" buttons.
   - **Hero Section**:
     - Headline: *"Master Your University Syllabus with AI"*
     - Sub-headline: *"Your all-in-one study companion. Personalized AI study planners, instant doubt solving, curated Previous Year Questions (PYQs), and progress tracking."*
     - CTAs: Primary Cyan *"Get Started Free"* + Secondary Outline *"Watch Demo Video"*
     - Live interactive preview card of the AI Study Planner dashboard showing real-time task completion, exam countdown, and syllabus progress percentage.
   - **Interactive AI Study Planner Simulator**:
     - Switch between **Engineering (B.Tech)**, **Junior College (FYJC/SYJC)**, **Commerce (B.Com/BBA)**, and **Science (B.Sc)**.
     - Toggle task completion checkboxes to see syllabus progress recalculated in real time.
     - "Add Study Milestone" modal to dynamically insert custom syllabus tasks and target hours.
   - **24/7 Instant AI Doubt Solver Playground**:
     - Interactive question input field + 1-click popular prompts (Fourier series, Rotational KE derivation, Operating Leverage, PCR mechanism).
     - Live AI thinking animation followed by structured university-calibrated step-by-step solution breakdown, LaTeX formula formatting, marking rubric insights, and a 1-click "Copy Answer" button.
   - **How It Works (3-Step Flow)**:
     - Step 1: Select course & upload syllabus (interactive drag & drop zone simulation).
     - Step 2: AI curates personalized timetable and practice sets.
     - Step 3: Ace exams with automated tracking, instant doubt clearing, and PYQs.
   - **Curated PYQ & Mock Test Vault**:
     - Real-time search across subject names, course codes, and universities (Mumbai University, SPPU Pune, HSC Board, Delhi University, VTU, Anna University).
     - Filter tabs by academic stream.
     - Interactive "Quick Preview" modal with sample questions and marking schemes.
     - 1-click "Download PDF" simulation with toast notifications.
   - **Transparent Pricing Section**:
     - Monthly vs Annual Pass toggle switch (`Save 33% • Best Value`).
     - **Free Tier (Rs. 0/mo)**: Basic study guides, standard PYQ access, capped daily AI queries.
     - **Pro Monthly Tier (Rs. 149/mo)**: Unlimited AI doubt solver, dynamic planner, full PYQs, priority support.
     - **Annual Pass (Rs. 1,199/yr)**: All Pro features + offline access & dedicated exam revision packs.
   - **Student Reviews & Trust Metrics**:
     - 5-star student testimonials from 1st Year Engineering, 2nd Year, and Junior College students.
     - Dynamic animated counters: `15,000+` Students Onboarded, `95%` Exam Pass Rate Boost, `24/7` AI Doubt Resolution, `500+` Syllabi & PYQ Sets.
   - **Interactive Modals**:
     - "Try Free Planner / Sign Up" student onboarding modal with stream and target exam selector.
     - "Watch Demo Video" glassmorphic video player modal with chapter timestamps.
     - "PYQ Preview" modal with question paper blueprint and answer outline.
   - **Footer**:
     - Logo + Tagline (*"From Syllabus to Success"*)
     - Quick links, stream links, legal links, and social media handles (Instagram, YouTube, LinkedIn).
     - Copyright notice: `@copyright 2026 Syllora. All rights reserved.`

---

## 📁 Project Structure

```
Syllora AI study hub/
│
├── index.html                   # Main semantic, responsive landing page
├── css/
│   └── styles.css               # Design tokens, glassmorphism, animations, dark/light theme
├── js/
│   └── app.js                   # State engine, planner simulator, AI doubt solver, PYQs, modals
├── assets/
│   ├── syllora-logo.png         # Original high-res header logo provided by user
│   ├── syllora-navbar-logo-dark.png # High-contrast optimized logo for Dark Navy mode
│   ├── syllora-navbar-logo.png  # Transparent trimmed logo for Light mode
│   ├── syllora-icon.png         # Standalone brand mark / favicon
│   └── syllora-logo-transparent.png # Alpha-blended transparent logo asset
└── README.md                    # Project documentation & deployment guide
```

---

## 🌐 Quick Deployment

This is a zero-dependency static web application ready for instant deployment:

- **Local Preview**: Double-click [index.html](file:///c:/Users/Shrishti/Downloads/Syllora%20AI%20study%20hub/index.html) in your browser or run:
  ```bash
  python -m http.server 8000
  ```
- **Vercel / Netlify / GitHub Pages**: Simply push this folder to a GitHub repository or drag-and-drop the directory into the Netlify/Vercel dashboard. No build step or package manager required!
