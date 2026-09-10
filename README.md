# Kiln Studio

A homepage for a fictional small-studio design agency, built for the Next.js
developer internship task.

Live Website: https://kiln-studio-six.vercel.app/

## Concept

Instead of a generic "creative agency" placeholder, I built Kiln Studio: a
small studio that does brand identity, web design, and packaging for
independent restaurants and makers — not big corporate clients. That
narrower brief drove the actual design decisions:

- The hero's visual is a grid of glaze-swatch tiles instead of a stock photo
  or gradient blob, because a swatch palette is literally the first thing a
  brand studio hands a client.
- The services section is a plain divided list with a small colour chip per
  row, not a set of identical rounded cards — the studio's own visual
  language (flat colour, no shadows) carries into its own site.
- Portfolio thumbnails are original inline SVGs built from each fictional
  project's own three-colour palette, so there are no stock images or
  copyrighted assets anywhere in the project.
- One deliberate motion moment: the swatches settle into place on load.
  Everything else is static or responds directly to a hover/click, rather
  than animating on scroll.

## Tech stack

- Next.js 14 (App Router)
- React 18, TypeScript
- Tailwind CSS, with a small custom token set (`tailwind.config.ts`) for the
  studio's palette and type scale instead of default Tailwind colours
- `next/font/google` for Zilla Slab (headings) and Work Sans (body/UI) —
  fonts are downloaded and self-hosted at build time, so there's no runtime
  request to Google Fonts
- No UI kit, animation library, or form service — the contact form's
  validation and the dark-mode toggle are both plain React state

## Project structure

```
app/
  layout.tsx      - fonts, metadata, theme-flash prevention script
  page.tsx         - assembles the sections
  globals.css      - base styles, focus states, reduced-motion handling
components/
  Header.tsx       - nav + theme toggle
  ThemeToggle.tsx  - dark mode, persisted to localStorage
  Hero.tsx
  Services.tsx
  Portfolio.tsx
  Contact.tsx      - client component: validation + success state
  Footer.tsx
```

## Running it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npm run start
```

for a production build.

## Deploying

```bash
npx vercel
```

or connect the GitHub repo directly at vercel.com/new. No environment
variables are required.

## Assumptions and scope

- The contact form validates client-side and shows a success state, but
  isn't wired to a real backend or email service — the task scope is
  front-end, so I didn't want to fake a working submission. Swapping in an
  API route or a service like Resend/Formspree would be a small addition.
- All portfolio projects and their case-study notes are fictional, written
  to sound like real client work rather than lorem ipsum.
- Dark mode is implemented by hand (a class on `<html>` + localStorage)
  rather than pulling in `next-themes`, since the whole toggle is about
  fifteen lines of actual logic.
