# DESIGN.md — Aaditya Mall Portfolio

This file overrides AGENTS.md for this project. Rules here take full precedence. Anything not mentioned here falls back to AGENTS.md.

**Last updated:** 2026-06-22 — reflects the full rebuild implemented as of this date.

---

## Project Type

**Type 1 — Static frontend-only.** No backend, no dynamic content, no data-fetching layer. All content is hardcoded as typed config arrays in each component. Single-page application with smooth scroll anchor navigation between sections.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v3 (class-based dark mode), custom CSS variables via `:root` / `.dark`
- **Theme:** `next-themes` with `attribute="class"`, `defaultTheme="dark"`
- **Icons:** Lucide React exclusively — no FontAwesome in new components
- **Fonts:** Inter (Google Fonts, via `next/font/google`)
- **Animations:** CSS-only (no framer-motion in new components), IntersectionObserver for scroll reveals

---

## Palette Override

Teal-based, modern. Replaces the old dark-only cyan/violet palette entirely.

```css
:root {
  /* Light mode */
  --color-background:     oklch(98% 0.005 195);
  --color-surface:        oklch(95% 0.01 195);
  --color-surface-hover:  oklch(91% 0.015 195);
  --color-primary:        oklch(55% 0.14 195);        /* teal */
  --color-primary-light:  oklch(72% 0.12 195);
  --color-text:           oklch(18% 0.02 195);
  --color-text-muted:     oklch(48% 0.03 195);
  --color-border:         oklch(87% 0.02 195);
}

.dark {
  --color-background:     oklch(11% 0.015 220);       /* deep navy-black */
  --color-surface:        oklch(16% 0.02 210);
  --color-surface-hover:  oklch(21% 0.025 210);
  --color-primary:        oklch(65% 0.16 195);        /* brighter teal */
  --color-primary-light:  oklch(55% 0.12 195);
  --color-text:           oklch(93% 0.01 195);
  --color-text-muted:     oklch(60% 0.03 195);
  --color-border:         oklch(25% 0.02 210);
}
```

Dark mode feels like a deep ocean at night — near-black with teal as the only accent. Light mode is crisp, airy, and clean.

Only two accents used: teal and its opacity variants. No violet, no cyan, no multi-colour gradients.

---

## Cursor

**Native browser cursor only.** No custom cursor implementation. `cursor: none` is NOT used anywhere. The previous glitch-animated cursor was removed entirely.

---

## Animation

Purposeful, never distracting:

- **Section entry:** fade-up via IntersectionObserver. Elements carry `.reveal` class and become `.visible` on viewport intersection. `opacity-0 translateY(24px)` → visible, `duration-600 ease-out`.
- **Stagger delays:** `.delay-100` through `.delay-600` for sequencing within sections.
- **Hero entrance:** Sequential `slideUpFade` animation with per-element delays (pill → name → title → tagline → CTAs).
- **Surface card hover:** `scale-[1.01]` + teal border + soft teal glow, `duration-200` — handled in `.surface-card:hover` CSS.
- **Smooth scroll:** `scroll-behavior: smooth` on `html`.
- **No looping animations. No auto-playing carousels. No parallax.**

---

## Page Structure — Single Page Application

One `page.tsx`. Sections stacked vertically, each with a section `id` for anchor navigation.

```
<Navbar />        ← sticky, anchor scroll links, transparent→frosted
<Hero />          ← full viewport, name + title + tagline + 2 CTAs
<About />         ← 2-para intro + 3 stat highlights
<Skills />        ← 3 bucket cards: Development, AI & Data, Cloud & DevOps
<FreelanceWork /> ← 3 client project cards (explicitly labelled "Freelance Work")
<Experience />    ← internship timeline (extendable to full-time)
<Projects />      ← compact academic/personal project cards (2-col grid)
<Achievements />  ← awards + leadership positions + certifications (lower weight)
<Contact />       ← direct links, no form, mailto CTA
<Footer />        ← single line: name + year
```

---

## File Structure

```
src/
├── app/
│   ├── globals.css         ← design tokens + utility classes
│   ├── layout.tsx          ← Inter font, ThemeProvider, Navbar, Footer
│   └── page.tsx            ← section assembly
└── components/
    ├── Home/               ← all page sections (uppercase per existing convention)
    │   ├── Hero.tsx
    │   ├── About.tsx
    │   ├── Skills.tsx
    │   ├── FreelanceWork.tsx
    │   ├── Experience.tsx
    │   ├── Projects.tsx
    │   ├── Achievements.tsx
    │   └── Contact.tsx
    └── Layout/             ← shell + utility components
        ├── Navbar.tsx
        ├── Footer.tsx
        ├── ThemeProvider.tsx
        └── SectionReveal.tsx
```

---

## Navbar

- **Floating pill** — always frosted glass, iOS-style glassmorphism (`backdrop-blur(24px) saturate(180%)`).
- **Shape:** `border-radius: 100px` (pill), `max-w-4xl`, centered, floats `top-4` above the page. Never spans full viewport.
- **Border:** `1px solid color-mix(primary 20%, border)` — teal-tinted transparent border.
- **Shadow:** soft on idle, slightly deeper on scroll.
- Logo: plain `"Aaditya"` text, left-aligned inside the pill.
- **Desktop links** (`hidden lg:flex`): centered inside pill, `text-xs font-semibold`.
- **Right side:** theme toggler + `Resume` border pill (opens `/AadityaMallResume.pdf`) + `Hire` solid teal compact pill.
- **Mobile:** hamburger → slide-in drawer. Drawer includes Resume link + Hire pill at bottom.
- Active section tracked via scroll; active link: teal color + `bg-primary/10` background.

---

## Section-Specific Design Notes

### Hero
- Full viewport height (`min-h-screen`), vertically centered, `text-center`.
- Teal radial glow blob behind text — more visible in dark mode (opacity 0.18 light, 0.28 dark).
- Sequential entrance: availability pill → name → title → tagline → CTAs (staggered).
- **Three CTAs:** "View Work" (`btn-primary` teal) + "Hire for Freelance" (`btn-outline`) + "Resume" (border ghost pill, opens `/AadityaMallResume.pdf` in new tab).
- Scroll arrow at bottom to `#about`.

### About
- Two paragraphs of confident, first-person copy.
- Three stat cards (`surface-card`): CGPA, Years building, Clients delivered.

### Skills
- **Full-width stacked bucket cards** — one card per bucket, full-width layout (not 3 columns).
- Each bucket card: Lucide icon box (teal) + title + description in one header row; skills as **icon chips** below a divider.
- **Skill chips** — `18px` SVG icon (from `/public/svgs/`) + readable name label side-by-side. Fallback to text-only if no SVG exists.
- Chip style: teal-tinted background, teal-tinted border, `text-sm font-medium`.
- Staggered fade-in on scroll.

### Freelance Work
- Section is **always labelled "Freelance Work"** — never "Projects".
- Subtle teal background tint on entire section.
- 3-column desktop grid of cards.
- **Cards have a preview image** at top (16:9 aspect ratio, `object-cover object-top`).
- On image hover: teal overlay appears with "Visit site" button (glassmorphism pill).
- Image scales `1.05` on card hover.
- **Year badge** overlaid on top-left of image.
- Content below image: name, description, stack pills, live link.

### Experience
- Section title: "Professional experience" — not "Where I've worked" (supports current roles).
- Stacked list of cards; each card has a **company logo** (40×40, `bg-white rounded-xl border`).
- **Current badge** (pulsing teal dot + "Current" text) appears on active roles.
- Type badge (Internship / Full-time / Freelance) styled as a ghost pill.
- Duration shows "Present" for ongoing roles, not an end date.
- Data: Protium (`isCurrent: true`, Full-time), Nobrokerage, RBL Bank. Extendable — add more roles by appending to the `experiences` array.

### Projects
- **4 projects only:** GreenMind, Aviation Ticketing System, SoleStore, CertiMail.
- **Horizontal card layout** on desktop (`md:flex-row`): left = screenshot image, right = content.
- Image: `shrink-0 w-56 lg:w-64`, `object-cover object-top`, scales on hover.
- Content: title, full description, smaller skill pills, GitHub + demo icon links.
- Images come from `/public/images/` (e.g. `greenmind.png`, `aviation-ticketing-system.png`).

### Achievements
- **Awards & Recognition** (high weight): cards with org logo (40×40) on left, title + description + org + year badge.
- **Positions of Responsibility** (medium weight): org logo (32×32) + org name header + role progression list.
  - Org images: `IET.png`, `GDSC.png`, `tq.jpg`.
- **Certifications** (lower weight): 2-column grid of tiles. Each tile: issuer logo (32×32, `bg-white`) + cert name + issuer + year. `ExternalLink` icon appears on hover.
  - Cert images: `cloud_practitioner.png`, `cloud_architecting.png`, `microsoft.jpeg`, `mongo.svg`, `hackerrank.webp`, `ibm.webp`.
  - Collapsible — shows 4 by default, expand to all.

### Contact
- No form — ever.
- Headline: "Have a website in mind?"
- Primary CTA: `btn-primary` mailto button — "Let's talk"
- Three link cards: Email, LinkedIn, GitHub.

### Footer
- **One line only:** `Aaditya Mall · © {year}`
- No social icons, no logo, no grid.

---

## CSS Utility Classes (globals.css)

| Class | Purpose |
|---|---|
| `.reveal` / `.visible` | IntersectionObserver fade-up system |
| `.delay-{100-600}` | Transition stagger delays |
| `.hero-animate` / `.hero-animate-{1-5}` | Hero entrance keyframe animation |
| `.surface-card` | Standard card: surface bg, border, hover teal border + glow |
| `.skill-pill` | Teal pill tag for skills/tech |
| `.teal-glow` | Radial gradient glow blob |
| `.section-label` | Labelled section header (dot + uppercase text) |
| `.navbar-frosted` | Frosted glass navbar state |
| `.btn-primary` | Solid teal button |
| `.btn-outline` | Outlined teal button |
| `.hire-pill` | Compact solid teal pill (navbar CTA) |
| `.divider-teal` | Horizontal teal gradient divider |

---

## Typography

- **Font:** Inter (Google Fonts), loaded via `next/font/google`
- **Headings:** `font-bold` or `font-semibold`. Scale: `text-3xl` → `text-5xl` for section h2s.
- **Body:** `font-normal`, `leading-relaxed`, `text-base` or `text-lg`.
- **Labels / muted:** `font-medium` or `font-semibold`, `text-xs` or `text-sm`, `var(--color-text-muted)`.
- No decorative fonts, no serif, no monospace for body text.

---

## What NOT to do

- Do not add "Open to Work" badges or any employment-seeking signals.
- Do not mix freelance work and personal projects in the same section.
- Do not use more than two accent colors. Teal and opacity variants only.
- Do not add a blog, testimonials, timeline, or work experience timeline to the Navbar.
- Do not auto-play anything.
- Do not use `cursor: none` or any custom cursor implementation.
- Do not use FontAwesome in new components — Lucide only.
- Do not use framer-motion in new components — CSS transitions only.
- Do not hardcode dark-only colors. All colors must have both `:root` and `.dark` variants.