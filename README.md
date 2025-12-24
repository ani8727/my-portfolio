# Aniket's Portfolio

<div align="center">

## 🌐 Live Preview

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen?style=for-the-badge&logo=vercel)](https://ani8727.github.io/aniket/)

**[👉 Click Here to View Live Portfolio 👈](https://ani8727.github.io/aniket/)**

---

### Quick Links

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue?style=flat&logo=github)](https://github.com/ani8727/my-portfolio)
[![Build Status](https://img.shields.io/badge/Build-Passing-success?style=flat)](https://github.com/ani8727/my-portfolio/actions)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat)](LICENSE)

</div>

---

A modern, responsive portfolio website showcasing projects and skills as a Full Stack Developer specializing in Java backend, Spring Boot, cloud-native services, and Data Structures & Algorithms.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Responsive**: Optimized for all device sizes
- **Project Showcase**: Interactive project cards with GitHub integration  
- **Skills Display**: Comprehensive tech stack visualization
- **Contact Form**: Functional contact form with EmailJS integration
- **SEO Optimized**: Complete meta tags, sitemap, and favicon support

## 🛠️ Tech Stack

- **Frontend**: React 19, Tailwind CSS
- **Build Tool**: Vite
- **Icons**: React Icons
- **Email Service**: EmailJS
- **Image Processing**: Jimp
- **Code Quality**: ESLint
- **Deployment**: GitHub Pages with GitHub Actions

---

## 🚀 Overview

This repository contains a modern, responsive portfolio built with React and Tailwind CSS. It showcases personal projects, technical skills, and contact functionality. The app is built with Vite for fast development and production builds.

## 🧰 Tech & Skills

- **Frontend**: React 19, Vite, Tailwind CSS (utility-first styling)
- **Languages**: JavaScript (ESNext), JSX
- **Icons**: react-icons
- **Image Tools**: Jimp (favicon generation), custom Node script for SVG project previews
- **Docs / SEO**: meta tags, manifest.json, sitemap.xml, robots.txt
- **Testing & Linting**: ESLint (config included)

### Data Structures & Algorithms (DSA)

This portfolio emphasizes algorithmic problem solving and DSA fundamentals. Projects and learning resources include:

- Pattern-wise DSA repository (arrays, two-pointers, binary search, DP, graphs)
- Practice tracker visuals (DSA sheet) and curated lists of problems

If you want the DSA section to contain live statistics or dynamic progress, we can integrate an API or a small JSON-based progress tracker.

## 📂 Projects (Preview)

Each project includes a short description, GitHub link and (where applicable) a demo link. Thumbnails are generated programmatically to maintain consistent aspect ratio and fit the project cards.

- **Fitness App Microservice** — Microservices architecture using Spring Boot. Features user/workout management and REST APIs. (GH: `ani8727/fitness_app_microservice`)
- **Patient Management Service** — Healthcare backend services with authentication and scheduling. (GH: `ani8727/Patient-Management-Service`)
- **DSA Pattern Wise** — Collection of algorithmic problems organized by pattern with solutions. (GH: `ani8727/DSA-Pattern_Wise`)
- **DSA Learning Hub** — Interactive learning platform and tutorials. (GH: `ani8727/DSA_Learing_Hub`)
- **DSA Sheet - Topic Wise** — Practice tracker (visual) for topic-wise progress. (GH: `ani8727/DSA-Sheet---topic-wise`)
- **Jarvis Assistant** — Voice assistant built with Python (speech → actions). (GH: `ani8727/jarvish_assistant`)

If you want, I can expand each project's README with architecture diagrams, tech stacks, and deployment notes.

---

## 📦 Install & Run (Local)

Clone, install and run locally:

```bash
git clone https://github.com/ani8727/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Build for production:

```bash
npm run build
# Preview the production build locally
npm run preview
```

---

## ✅ Deployment Checklist & Recommendations

Follow these steps before deploying to production to ensure reliability, SEO and best practices:

1. Finalize `package.json` scripts (Vite is already configured):
   - `dev`, `build`, `preview` are present.
2. Confirm `public/manifest.json`, `sitemap.xml`, `robots.txt`, and favicon files exist (done).
3. Verify all internal links are relative and use the correct `base` if deploying to a subpath.
4. Test the production build locally with `npm run build` then `npm run preview`.
5. Add environment configuration if you use secrets (none required for this static portfolio).
6. Configure hosting platform (recommended):
   - **Vercel**: auto-deploy from GitHub (recommended for React + Vite). Use default build command `npm run build` and output `dist`.
   - **Netlify**: set build command `npm run build` and publish directory `dist`.
   - **GitHub Pages**: requires adapter to deploy `dist` branch or use `gh-pages` package and set `homepage` in `package.json`.
7. (Optional) Add GitHub Actions for CI — run `npm ci` and `npm run build` on pushes to `main`.

Sample minimal GitHub Actions workflow to build on push (add to `.github/workflows/build.yml`):

```yaml
name: Build
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Install
        run: npm ci
      - name: Build
        run: npm run build
```

---

## 🔒 Security & Privacy

- No backend secrets stored in the repo. EmailJS is client-side; if you prefer, move EmailJS to a server endpoint for extra security.

## ✅ Health Checks I Performed

- Confirmed `src` imports for images and resume are present.
- Favicon and manifest updated; generated multiple icon sizes.
- Project images generated and placed in `src/assets/projects`.
- Removed unused asset files to reduce repo size.

---

## Next Steps I Can Do For You

- Add a CI workflow and automatic deploy to Vercel/Netlify.
- Create per-project README files with architecture and deployment steps.
- Integrate a small JSON-based DSA progress API to show live stats.
- Add Lighthouse CI or GitHub Action to run accessibility/SEO checks.

If you'd like any of the above, tell me which item to do next and I will implement it.

---

## 📫 Contact

Connect via the contact form on the site or [GitHub](https://github.com/ani8727).

---

### Last updated: 2025-12-12