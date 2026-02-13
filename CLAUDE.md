# Mindsport AB - Project Documentation

## Project Overview

Mindsport AB is a mental training platform for athletes who want to reach their full potential. The website provides information about mental training services, lectures, and coaching specifically designed for sports performance.

**Live Site:** https://mindsport-ab.vercel.app

## Tech Stack

### Core Technologies
- **React:** 19.2.3 (latest with concurrent features)
- **TypeScript:** ~5.8.2
- **Build Tool:** Vite 6.2.0
- **Router:** React Router DOM 7.10.1
- **Node:** >=18.0.0 required

### Styling & UI
- **CSS Framework:** Tailwind CSS (loaded via CDN from cdn.tailwindcss.com)
- **Icons:** Lucide React 0.561.0
- **Animations:** Framer Motion 11.x (added for hero section animations)

### Deployment
- **Platform:** Vercel
- **Build Command:** `npm run build`
- **Dev Server:** Port 3002
- **Configuration:** vercel.json in project root

## Project Structure

```
/Users/oscarjohansson/Downloads/mindsport-ab/
├── pages/
│   ├── Home.tsx              # Main landing page with hero + sections
│   ├── About.tsx             # About page
│   ├── Clients.tsx           # Client testimonials
│   ├── Lectures.tsx          # Lecture information
│   └── Contact.tsx           # Contact form
├── components/
│   ├── Navbar.tsx            # Fixed header with mobile menu
│   ├── Footer.tsx            # Footer with partners & social
│   ├── animations/           # Animation configuration
│   │   ├── variants.ts       # Framer Motion variants
│   │   └── springs.ts        # Spring physics configs
│   └── hero/                 # Hero section components
│       ├── ParticleField.tsx # Background particles (Phase 3)
│       └── ...               # Future hero components
├── hooks/
│   ├── useScrollAnimation.ts # Intersection Observer for sections
│   └── useMouseParallax.ts   # Mouse tracking for parallax (Phase 2)
├── Images/                   # Static assets (JPG, PNG, SVG)
├── App.tsx                   # Main router component
├── index.tsx                 # Entry point
├── types.ts                  # TypeScript interfaces
├── index.html                # HTML entry + global CSS
├── vite.config.ts            # Vite configuration
└── package.json              # Dependencies

```

## Key File Locations

### Hero Section
- **Main Hero:** [pages/Home.tsx](pages/Home.tsx) (lines 104-299)
- **Hero Image:** `Images/New Images/WhatsApp Image 2026-01-26 at 09.28.42.jpeg`

### Navigation
- **Navbar:** [components/Navbar.tsx](components/Navbar.tsx)
- **Footer:** [components/Footer.tsx](components/Footer.tsx)

### Global Styles
- **Location:** [index.html](index.html) (lines 31-243 in `<style>` tags)
- **CSS Variables:** Defined in `:root`
- **Scrollbar:** Custom dark theme styling

## Design System

### Color Palette
```css
/* Background Colors */
--bg-primary: #1f1f1f      /* Main dark background */
--bg-secondary: #2a2a2a    /* Lighter dark sections */
--bg-tertiary: #4e4e4e     /* Hover states */

/* Text Colors */
--text-primary: #f5f5f5    /* Off-white for readability */
--text-muted: #a0a0a0      /* Secondary text */

/* Accent Colors */
--accent-yellow: #ffcb33   /* Primary accent - CTAs, highlights */
--border: #374151          /* gray-800 for borders */
```

### Typography
- **Font:** System fonts (sans-serif)
- **Headings:** Bold, tight tracking
- **Sizes (Responsive):**
  - Mobile: 40px → Tablet: 48px → Desktop: 7xl → XL: 8xl

### Spacing & Layout
- **Max Width:** 1400px content container
- **Padding:** Consistent 16px/32px/48px scale
- **Hero Height:** Full viewport minus navbar (4rem)

## Animation System

### Current Implementation (Pre-Framer Motion)
- **Approach:** CSS keyframes in `<style>` tags
- **Types:** Fade-in, zoom, pulse, gradient shift
- **Performance:** Parallax disabled on mobile (<769px)
- **Accessibility:** Respects `prefers-reduced-motion`

### Hero Animation Upgrade (Framer Motion)

**Animation Principles:**
- **Vibe:** Focus & determination (sharp, purposeful)
- **Timing:** Fast (300-500ms), no wasted movement
- **Physics:** High-stiffness springs (300+), minimal bounce (damping 20+)
- **Interactions:** Mouse parallax, scroll effects, hover states

**Phases:**
1. ✅ **Phase 1:** Text reveals, CTA button enhancement
2. 🔄 **Phase 2:** Mouse parallax, scroll-linked scaling
3. 📋 **Phase 3:** Particle field background
4. 📋 **Phase 4:** Polish & cross-browser testing

### Scroll Animation Hook
- **Location:** [hooks/useScrollAnimation.ts](hooks/useScrollAnimation.ts)
- **Usage:** Intersection Observer-based triggers for sections
- **Used in:** About, Approach, Services, Testimonials, Lectures, Quote sections

## Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
# Server runs on http://localhost:3002
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Accessibility Features

- **Skip Link:** Jump to main content
- **ARIA Labels:** Throughout interactive elements
- **Keyboard Navigation:** Full support, visible focus states
- **Mobile Menu:** ESC key handling, focus management
- **Reduced Motion:** Respects user preference
- **Semantic HTML:** Proper heading hierarchy
- **Touch Targets:** Minimum 44x44px

## Performance Considerations

- **Images:** Lazy loading with `loading="lazy"`
- **Hero Image:** `fetchPriority="high"` for LCP optimization
- **Parallax:** Disabled on mobile for performance
- **Animations:** GPU-accelerated transforms/opacity only
- **Event Listeners:** Passive scroll listeners
- **Bundle:** Code splitting potential for heavy features

## Deployment (Vercel)

### Configuration
- **Framework:** Vite
- **Build Command:** Automatically detected
- **Output Directory:** `dist`
- **Node Version:** 18.x

### Environment
- **Production URL:** https://mindsport-ab.vercel.app
- **Auto-deploy:** Pushes to main branch

## Future Enhancement Ideas

### Content
- [ ] Blog section for mental training articles
- [ ] Video testimonials from athletes
- [ ] Interactive mental training tools/exercises
- [ ] Booking system integration

### Technical
- [ ] Add page transitions (Framer Motion)
- [ ] Implement dark/light mode toggle (currently dark only)
- [ ] Add analytics (Plausible or privacy-focused)
- [ ] Progressive Web App features
- [ ] Internationalization (Swedish/English)

### Animations
- [ ] Extend Framer Motion to other sections
- [ ] Add micro-interactions on form inputs
- [ ] Parallax on other hero images throughout site
- [ ] Loading states with animated skeleton screens

## Contact & Support

For questions about this project, reach out through the contact form at `/kontakt` on the live site.

## Notes for AI Assistant (Claude)

- **Project Location:** `/Users/oscarjohansson/Downloads/mindsport-ab/`
- **Working Directory:** Usually project root
- **Package Manager:** npm (not yarn/pnpm)
- **Code Style:** TypeScript strict mode, React functional components with hooks
- **Animation Library:** Framer Motion for hero, CSS for other sections (for now)
- **Tailwind:** Via CDN (not PostCSS config), use utility classes
- **Performance:** Always test on mobile, respect reduced motion preferences
- **Git:** Likely version controlled, check before major changes
