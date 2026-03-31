# Mork Mongkul — Portfolio

A clean, minimal portfolio site built with React, TypeScript, Tailwind CSS, and Vite.

## Design System

| Token | Value |
|---|---|
| Sage green | `#59695e` |
| Warm tan | `#b38363` |
| Deep ink | `#0c0404` |
| Display font | Cormorant Garamond (serif) |
| Body font | DM Sans |
| Mono font | JetBrains Mono |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment on Vercel

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Vercel auto-detects Vite — no config needed
5. Click **Deploy**

The `vercel.json` handles SPA routing automatically.

## Customizing Your Content

All portfolio content lives in one file:

```
src/data/portfolio.ts
```

Edit these exports to make the site yours:
- `personalInfo` — name, bio, email, social links
- `education` — degrees and certifications
- `skillStack` — your skill categories and tools
- `projects` — your project showcase

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Sticky nav with active section tracking
│   ├── Footer.tsx        # Minimal footer
│   └── Reveal.tsx        # Scroll-triggered animation wrapper
├── sections/
│   ├── Hero.tsx          # Full-screen hero with rotating roles
│   ├── About.tsx         # Bio + stats
│   ├── Education.tsx     # Timeline layout
│   ├── Skills.tsx        # Skill category cards
│   ├── Projects.tsx      # Filterable project grid
│   └── Contact.tsx       # Dark contact section
├── hooks/
│   └── useScrollReveal.ts  # IntersectionObserver hook
├── data/
│   └── portfolio.ts      # All your content — edit this!
├── App.tsx               # Root with loading screen
├── main.tsx
└── index.css             # Global styles + Tailwind
```

## No Database Needed

This portfolio is fully static — all data is in `src/data/portfolio.ts`. 
No backend, no CMS, no database. Just deploy and go.

To update content: edit the data file → push to GitHub → Vercel auto-deploys.
