# Hon. Suleiman Salihu Usman — Branding & UI Guide

**Version:** 1.0  
**Last Updated:** 2024  
**Website:** [suleimanusmanfor.ng](https://suleimanusmanfor.ng)

---

## Table of Contents

1. [Brand Overview](#brand-overview)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [UI Components](#ui-components)
5. [Layout & Spacing](#layout--spacing)
6. [Pages & Sections](#pages--sections)
7. [Content Areas](#content-areas)
8. [Animation & Motion](#animation--motion)
9. [Responsive Design](#responsive-design)
10. [Developer Setup](#developer-setup)

---

## Brand Overview

**Subject:** Honourable Suleiman Salihu Usman  
**Role:** House of Representatives Aspirant, Zamfara State, Nigeria  
**Party:** Nigeria Democratic Congress (NDC)  
**Contact Email:** info@suleimanusmanfor.ng  
**Phone:** +234 800 000 0000  
**Address:** Party Secretariat, Zamfara State, Nigeria  

### Brand Identity
- **Logo:** "SU" initials in a rounded square badge (primary color background, white text)
- **Tagline:** Visionary leadership for Zamfara State
- **Mission:** Proactive, transparent, and effective representation focusing on education, healthcare, youth empowerment, agriculture, infrastructure, and economic development

### Core Values
- **Service** — Prioritizing community needs above all else
- **Transparency** — Operating with absolute clarity, honesty, and accountability
- **Empowerment** — Providing people with tools to succeed
- **Progress** — Driving sustainable growth and innovation

---

## Color Palette

### Primary Colors (Light Mode)
```css
--primary: 222 89% 31%          /* Deep Blue #1E40AF */
--primary-foreground: 0 0% 100% /* White */
--accent: 4 85% 44%             /* Burnt Orange/Red #DC4D41 */
--accent-foreground: 0 0% 100%  /* White */
```

### Primary Colors (Dark Mode)
```css
--primary: 222 89% 51%          /* Bright Blue #2E5FFF */
--primary-foreground: 0 0% 100% /* White */
--accent: 4 85% 54%             /* Lighter Burnt Orange #F97316 */
--accent-foreground: 0 0% 100%  /* White */
```

### Neutral Colors (Light Mode)
```css
--background: 0 0% 100%          /* White */
--foreground: 215 28% 12%        /* Dark Blue-Gray #0F1E3D */
--border: 215 20% 91%            /* Light Gray-Blue #E5EAEF */
--card: 0 0% 100%                /* White */
--card-foreground: 215 28% 12%   /* Dark Blue-Gray */
--muted: 210 20% 96%             /* Very Light Gray #F3F5F7 */
--muted-foreground: 215 16% 47%  /* Medium Gray #6B7280 */
```

### Neutral Colors (Dark Mode)
```css
--background: 215 28% 8%         /* Very Dark Blue #0A1929 */
--foreground: 0 0% 100%          /* White */
--border: 215 28% 18%            /* Dark Blue-Gray #1E3A5F */
--card: 215 28% 10%              /* Dark Blue #0F2847 */
--muted: 215 28% 18%             /* Slightly Lighter Dark Blue */
--muted-foreground: 215 16% 67%  /* Light Gray #A0AFBF */
```

### Special Colors
```css
--destructive: 0 84% 60%         /* Red #EF4444 */
--input: 215 20% 91% (light) / 215 28% 18% (dark)
--ring: 222 89% 31% (light) / 222 89% 51% (dark)
```

### Hero Gradient
```css
Linear gradient: from #0a2158 (0%) → #1a4db5 (50%) → #cc2222 (100%)
```

---

## Typography

### Font Family
```css
--app-font-sans: 'Plus Jakarta Sans', sans-serif  /* Main font */
--app-font-serif: Georgia, serif                  /* Fallback serif */
--app-font-mono: Menlo, monospace                 /* Code/monospace */
```

**Plus Jakarta Sans** is imported from Google Fonts with weights: 300, 400, 500, 600, 700, 800 (regular & italic)

### Type Scale
- **H1:** 3rem–4rem (text-5xl–text-8xl) — Bold (font-extrabold), tracked-tight, leading-[1.05]
- **H2:** 2rem–3rem (text-3xl–text-4xl) — Bold (font-bold/extrabold)
- **H3:** 1.5rem–2rem (text-xl–text-2xl) — Bold (font-bold)
- **Body Large:** 1.125rem (text-lg) — Regular, leading-relaxed
- **Body:** 1rem (text-base) — Regular, leading-relaxed
- **Small:** 0.875rem (text-sm) — Regular
- **Tiny/Badge:** 0.75rem (text-xs) — Bold, uppercase, tracking-widest

---

## UI Components

### Button Styles

#### Primary Button
```tsx
className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg 
  hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
```
- **Background:** Primary color
- **Text:** White, bold
- **Corner Radius:** Full (rounded-full)
- **Hover:** Slight opacity reduction, enhanced shadow
- **Transition:** Smooth 300ms

#### Secondary Button (Outline)
```tsx
className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full 
  font-bold text-lg hover:bg-white/10 transition-colors"
```
- **Background:** Transparent
- **Text:** White, bold
- **Border:** 2px white
- **Corner Radius:** Full
- **Hover:** Subtle white background

#### Icon Button
```tsx
className="w-14 h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur 
  flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all"
```
- **Size:** 56px × 56px (w-14 h-14)
- **Background:** Semi-transparent white with backdrop blur
- **Hover:** Slight scale increase, opacity change

### Badge Component
```tsx
// Default (Primary)
bg-primary text-primary-foreground

// Success (Green)
bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400

// Warning (Amber)
bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400

// Outline
text-foreground border border-border bg-background
```

### Cards
```tsx
className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 
  hover:shadow-2xl transition-all duration-300 group"
```
- **Padding:** 2rem (p-8)
- **Corner Radius:** 1.875rem (rounded-3xl)
- **Shadow:** Medium (shadow-xl)
- **Border:** Light gray (border-slate-100)
- **Hover State:** Darker shadow, scale changes

### Status Badges
- **"Completed"** — Green background (success)
- **"Open"** — Primary color
- **"Coming Soon"** — Amber/Warning
- **"Featured"** — Primary color with accent

---

## Layout & Spacing

### Container & Grid
```tsx
// Container
className="container mx-auto px-4 md:px-6"

// Grid spacing
gap-8 (2rem), gap-6 (1.5rem), gap-4 (1rem)

// Section padding
py-24 (6rem), py-20 (5rem), py-16 (4rem)
```

### Breakpoints (Tailwind v4)
- **Mobile:** < 640px (base)
- **Tablet:** 640px+ (sm)
- **Desktop:** 768px+ (md)
- **Large Desktop:** 1024px+ (lg)
- **XL:** 1280px+ (xl)
- **2XL:** 1536px+ (2xl)

### Responsive Images
```tsx
aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl
object-cover hover:scale-105 transition-transform duration-1000
```

---

## Pages & Sections

### Home Page (Home.tsx)

#### 1. **Hero Section**
```
- Full viewport height (min-h-[100dvh])
- Gradient background with hero-pattern overlay
- Hero Slider component (auto-rotating background)
- Left column: Badge + H1 + Subtitle + Two CTAs + Video button
- Right column: Hero portrait image (currently disabled in code)
- Scroll indicator with animated arrow at bottom
- Padding-top: pt-20 (accounts for navbar)
```

**Key Content:**
- Badge text: `hero.badge`
- Title: `hero.title` (very large, 8xl on desktop)
- Subtitle: `hero.subtitle` (light, descriptive)
- CTA 1: "Learn About My Vision" (links to /vision)
- CTA 2: "Explore Programs" (links to /programs)
- Video prompt: Click to watch

---

#### 2. **Statistics Section**
```
- White background (bg-white)
- 4-column grid (1 col mobile, 2 tablet, 4 desktop)
- Each stat card has:
  - Icon (rotating between 4 types: FolderOpen, Users, Zap, MapPin)
  - Large number with animated counter
  - Label text
  - Gradient underline (primary → blue-400)
  - Hover state: slight upward translation
```

**Stats Data:**
- 25+ Community Projects
- 10,000+ Citizens Reached
- 500+ Youth Empowered
- 15 LGAs Impacted

---

#### 3. **About Preview Section**
```
- White background
- Left column: Portrait image with quote card (hidden on mobile)
  - Image: rounded-[2.5rem] with shadow
  - Quote card: bottom-right, white background, ring border
- Right column: Content with section header
  - Bio paragraphs (2)
  - 3 values displayed as list items with icons
  - "Read Full Bio" CTA button
```

**Values Displayed:**
- Service (Heart icon)
- Transparency (Eye icon)
- Empowerment (Zap icon)

---

#### 4. **Vision Preview Section**
```
- Slate-50 background (subtle gray)
- Radial gradient overlay (semi-transparent)
- Section header with title & subtitle
- 6-card grid (responsive: 1→2→3 columns)
- Each vision card:
  - Icon in gradient background (primary → blue-600)
  - Title & description
  - Hover: slight upward movement
- "View All Visions" link at bottom
```

**Vision Areas (6 displayed):**
Education, Healthcare, Agriculture, Youth, Women, Technology, Infrastructure, Economy, Security (9 total)

---

#### 5. **Community Impact Preview Section**
```
- White background
- 3 featured projects alternating left/right layout
- Each project:
  - Left: Project image with status badge
  - Right: Category badge, title, description, metrics (2-column), "Read Case" link
  - Metrics: Beneficiaries + Location (displayed in white boxes)
- Responsive: Stacks vertically on mobile
- "View All Projects" button at bottom
```

---

#### 6. **Programs Preview Section**
```
- Slate-50 background
- Section header
- 4-column grid (responsive)
- Each program: ProgramCard component
- "View All Programs" link at bottom
```

---

#### 7. **Testimonials Section**
```
- Primary color background (deep blue gradient)
- Hero-pattern overlay (opacity-10)
- Centered header (title + subtitle + underline)
- Embla carousel (manual + auto-rotate every 5s)
  - 100% width mobile, 50% tablet, 33.33% desktop
  - Smooth transitions
- Dot indicators at bottom for slide navigation
- Each testimonial card:
  - Semi-transparent white background
  - Backdrop blur effect
  - Quote mark styling
  - Avatar (initials in gradient circle)
  - Name + role
```

---

#### 8. **News Preview Section**
```
- White background with top border
- Section header
- 3-column grid for latest news (1→2→3 responsive)
- Each NewsCard component
- "Read More News" link at bottom
```

---

#### 9. **Volunteer CTA Section**
```
- Gradient background: from-[#0a2158] to-[#1a4db5]
- Hero-pattern overlay
- Decorative blur circles (top-left & bottom-right)
- Centered content:
  - Large H2 (5xl–7xl)
  - Subtitle
  - Two CTAs: "Volunteer" (white) + "Contact" (outline)
- All wrapped in motion animation
```

---

## Content Areas

### Data Structure Files (src/data/)

#### `statistics.ts`
```typescript
[
  { value: 25, suffix: '+', label: 'Community Projects' },
  { value: 10000, suffix: '+', label: 'Citizens Reached' },
  { value: 500, suffix: '+', label: 'Youth Empowered' },
  { value: 15, suffix: '', label: 'LGAs Impacted' }
]
```

#### `about.ts`
```typescript
{
  name: string
  title: string
  bio: string[]
  quote: string
  timeline: { year, title, description }[]
  values: { title, description, icon }[]
}
```

#### `vision.ts`
9 vision areas with icon, title, description

#### `programs.ts`
Programs with: id, title, description, eligibility, timeline, status, category, image, benefits[]

#### `projects.ts`
Community impact projects with: id, title, category, overview, problem, solution, impact, beneficiaries, location, dates, partners, status, featuredImage

#### `testimonials.ts`
Testimonial cards with: id, name, role, location, testimonial, avatar

#### `news.ts`
News articles with: id, title, excerpt, content, author, date, category, featured, image, readTime

#### `gallery.ts`
Gallery images with: id, src, alt, category, caption

---

## Animation & Motion

### Framer Motion Variants (src/animations/variants.ts)

#### `fadeUp`
```typescript
{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }
```

#### `staggerContainer`
```typescript
Container for staggered children animations
```

#### `scaleIn`
```typescript
{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }
```

#### `fadeLeft`
```typescript
Slide in from left with opacity change
```

#### `fadeRight`
```typescript
Slide in from right with opacity change
```

### Motion Components Used
- `motion.div` with `initial="hidden"` ��� `animate="visible"` → `variants={fadeUp}`
- `whileInView="visible"` for scroll-triggered animations
- `viewport={{ once: true, margin: "-80px" }}` to trigger earlier
- `whileHover={{ y: -4 }}` for subtle hover lift effects
- `group` & `group-hover:` for coordinated component hover states

### Carousel Animation
- **Embla Carousel** (embla-carousel-react)
- Auto-advance every 5 seconds
- Manual dot navigation
- Smooth transitions with flex layout

---

## Responsive Design

### Mobile-First Strategy
```
- Base styles: mobile
- md: (768px+) tablet/small desktop
- lg: (1024px+) desktop
- Hidden on mobile: `hidden lg:block` or `hidden md:flex`
```

### Key Breakpoint Usage
- **Hero:** Stacked (mobile) → 2-column (lg+)
- **Stats:** 1 col → 2 col (md) → 4 col (lg)
- **Vision Cards:** 1 col → 2 col (md) → 3 col (lg)
- **Navigation:** Mobile menu (burger) → horizontal nav (lg)
- **Footer:** 1 col → 2-4 col (md/lg)

### Responsive Images
```tsx
aspect-[4/5]          // Maintains ratio
rounded-[2.5rem]      // Large corners
h-[600px] lg:h-[800px] // Height responsive
object-cover
```

---

## Developer Setup

### Installation & Running
```bash
npm install
npm run dev         # Starts dev server (port 5173)
npm run build       # Production build
npm run preview     # Test production build locally
```

### Project Structure
```
src/
├── animations/          # Framer Motion variants
├── components/
│   ├── common/         # Reusable UI (Badge, Card, Counter, etc.)
│   ├── forms/          # Netlify form wrapper
│   └── ui/             # shadcn/ui base components
├── constants/          # siteConfig.ts (contact, social, nav)
├── data/               # Content files (edit here!)
├── hooks/              # useSEO, useAnimatedCounter
├── layouts/            # MainLayout (navbar + footer)
├── pages/              # Page components (one per route)
└── utils/              # Utility functions (cn, formatDate, etc.)
public/
└── images/             # All photos
```

### Key Technologies
- **React 19** + **Vite**
- **TypeScript**
- **Tailwind CSS v4** (with Vite plugin)
- **Framer Motion** (animations)
- **shadcn/ui** (component library)
- **Embla Carousel** (testimonials slider)
- **react-i18next** (internationalization)
- **Lucide React** (icons)
- **Wouter** (client-side routing)
- **Netlify Forms** (form submissions)

### Editing Content
**All content lives in `src/data/` — edit these files, not components.**

| File | What It Controls |
|------|------------------|
| `about.ts` | Biography, values, timeline |
| `vision.ts` | 9 vision areas |
| `programs.ts` | 6 programs |
| `projects.ts` | Community impact projects |
| `news.ts` | News articles |
| `gallery.ts` | Gallery images |
| `testimonials.ts` | Testimonial quotes |
| `statistics.ts` | Home page stats |
| `siteConfig.ts` | Name, phone, email, social links, nav |

### i18n (Internationalization)
- Uses **react-i18next** for translations
- Strings referenced as `t("key.subkey")`
- Translation files in `src/i18n/locales/`
- Language switcher in header

### Deployment
- **Netlify** (recommended)
- Uses `netlify.toml` for build config
- Netlify Forms auto-enabled on first deploy
- Environment variables: `PORT`, `BASE_PATH`

### Building & Deploying
```bash
# Build production bundle
npm run build

# Test locally
npm run preview

# Deploy via Netlify CLI
netlify deploy --prod --dir=dist
```

---

## Additional Notes

### Animations & Performance
- Most animations use `viewport={{ once: true }}` to trigger only once
- Scroll margin of -80px brings animations into view slightly earlier
- Hover states use `transition-all duration-300` for smooth effects
- No heavy animations on mobile for better performance

### Accessibility
- Buttons have proper `aria-label` attributes
- Contrast ratios meet WCAG standards
- Navigation is keyboard accessible
- Form elements have proper labels and error handling

### SEO
- Site-wide SEO hook via `useSEO()` in each page
- Schema.org JSON-LD for structured data
- OG image meta tags
- Proper heading hierarchy (H1 → H3 only)

### Forms
- Contact, Volunteer, Newsletter forms use **Netlify Forms**
- No backend required — submissions auto-captured
- View in Netlify dashboard under "Forms"

---

**End of Guide**

For questions or updates, contact: info@suleimanusmanfor.ng
