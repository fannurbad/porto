# Premium Modern Developer Portfolio

Modern, high-performance personal developer portfolio tailored for an **Informatics Engineering Student & Aspiring Software Developer** at **Politeknik TEDC Bandung**.

Built with an editorial **Dark Premium** design system, full accessibility features, smooth responsive interactions, and a clean single-file data configuration.

---

## ⚡ Tech Stack & Architecture

- **Framework**: React 18 with TypeScript
- **Bundler**: Vite 5
- **Styling**: Tailwind CSS with custom design tokens (`#0B0D12`, `#151A24`, `#5B8CFF`, `#8AB4FF`)
- **Iconography**: Lucide React
- **Typography**: Inter (Sans-serif) & JetBrains Mono (Code/Metadata)
- **Deployment**: Zero-config compatibility with Vercel, Netlify, or GitHub Pages (`base: './'`)

---

## 📁 Project Structure

```text
developer-portfolio/
├── dist/                          # Production build output
├── src/
│   ├── components/                # Modular UI Components
│   │   ├── Navbar.tsx             # Sticky header, section spy, mobile drawer
│   │   ├── Hero.tsx               # Dominant typography, CTA, code terminal card
│   │   ├── ProjectShowcase.tsx    # Category filters & project grid
│   │   ├── ProjectCard.tsx        # Card with architectural mockups & actions
│   │   ├── ProjectModal.tsx       # Accessible dialog modal for case studies
│   │   ├── AboutSection.tsx       # Student profile & engineering principles
│   │   ├── SkillsSection.tsx      # Categorized tech ecosystem (no fake % bars)
│   │   ├── ExperienceSection.tsx  # Academic timeline & learning sprints
│   │   ├── ContactSection.tsx     # Direct mailto composer & clipboard action
│   │   ├── Footer.tsx             # Wordmark, dynamic year, back to top
│   │   ├── Toast.tsx              # User feedback notification
│   │   └── BackgroundAesthetics.tsx # Ambient blue glow & subtle grid patterns
│   ├── data/
│   │   └── portfolioData.ts       # ⭐️ SINGLE FILE to update all personal info & projects
│   ├── types/
│   │   └── portfolio.ts           # TypeScript interfaces & types
│   ├── App.tsx                    # Root application component
│   ├── index.css                  # Global styles, scrollbar, reduced motion
│   └── main.tsx                   # React DOM render entry
├── index.html                     # HTML5 shell, Open Graph SEO, favicon
├── package.json
├── tailwind.config.js             # Design tokens & color system
├── tsconfig.json                  # TypeScript compiler settings
└── vite.config.ts                 # Bundler config with relative base path
```

---

## 🛠️ How to Customize Your Content

All data is separated from UI components. To update your name, bio, social links, projects, and skills, edit **one file**:

📄 **`src/data/portfolioData.ts`**

1. **Personal Information**:
   - `fullName`: Your real name (e.g., `"Raditya Pratama"` or `"[NAMA LENGKAP]"`)
   - `email`: Your active contact email
   - `github`: Your GitHub profile URL
   - `linkedin`: Your LinkedIn profile URL
   - `resumeUrl`: Link to your CV PDF (in `/public/resume.pdf` or Google Drive)
2. **Projects**:
   - Add, edit, or remove projects inside `projectsData`.
   - Each project contains `problem`, `solution`, `features`, `technologies`, `githubUrl`, and `liveDemoUrl`.
3. **Skills**:
   - Grouped into `Frontend`, `Programming Languages`, `Backend & Database`, and `Developer Tools`.
   - Each skill uses honest status tags: `'Core Stack'`, `'Proficient'`, or `'Learning'`.
4. **Learning Journey**:
   - Milestones for Politeknik TEDC Bandung, laboratory projects, and self-directed sprints.

---

## 🚀 Getting Started Locally

> **Note on Windows PowerShell**: Always run `npm.cmd` if your script execution policy is restricted.

### 1. Install Dependencies
```bash
npm install
# or on Windows PowerShell:
npm.cmd install
```

### 2. Start Development Server
```bash
npm run dev
# or:
npm.cmd run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
# or:
npm.cmd run build
```
The optimized production files will be generated in the `dist/` directory.

---

## 🌐 Deployment Guide

### Option A: Deploy to Vercel (Recommended)
1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of developer portfolio"
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and import your GitHub repository.
4. Framework Preset: **Vite** (automatically detected).
5. Click **"Deploy"**. Your site will be live on a `.vercel.app` URL with free SSL in less than 1 minute!

### Option B: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and log in.
2. Select **"Import an existing project"** from GitHub.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **"Deploy site"**.

### Option C: Deploy to GitHub Pages
The project includes `base: './'` in `vite.config.ts`, making it directly compatible with GitHub Pages:
1. In your repository on GitHub, go to **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Use the standard static HTML/Vite GitHub Actions workflow.

---

## ♿ Accessibility & Performance Highlights

- **Reduced Motion Support**: Respects `@media (prefers-reduced-motion: reduce)`.
- **Keyboard Navigation**: Full keyboard navigation support (Tab, Escape to close modal, skip-to-content anchor).
- **Zero CLS & Fast First Load**: Custom SVG/CSS architectural cards instead of heavy unoptimized external stock images.
- **Direct Mail Composer**: Transparent `mailto:` trigger without fake API form submissions.
