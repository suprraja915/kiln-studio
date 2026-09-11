# Kiln Studio

A homepage for a fictional small-studio design agency, built for the Next.js
developer internship task.

Live: https://kiln-studio-six.vercel.app/

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
- Portfolio pieces are 3D flip cards: the front is original inline SVG art
  built from each fictional project's own three-colour palette, and hovering
  (or tabbing to it on keyboard) flips the card to reveal the actual
  case-study note underneath. It's a physical metaphor — turning a swatch
  card over to read the back — rather than a generic fade-in overlay.
- One deliberate load-in motion moment: the hero swatches settle into place
  once. Everything else responds directly to a hover, focus, or click,
  rather than animating on scroll.
- The contact form is wired to a real inbox via Formspree, with client-side
  validation, a loading state, and a distinct error state if the request
  fails — not a form that just pretends to submit.

## Why this is built the way it is

Most task submissions like this default to a templated look: a cream
background, a stock hero photo or gradient blob, three identical rounded
cards, lorem ipsum in the portfolio grid. None of that shows up here on
purpose. Every visual choice ties back to what an actual brand studio would
produce — swatches, flat colour blocks, palette-driven artwork — so the
site's own design *is* the pitch for the kind of work the studio does.

On the evaluation criteria specifically:

- **UI quality / creativity** — a distinct colour system and type pairing
  (Zilla Slab + Work Sans) instead of default Tailwind colours and system
  fonts, plus one considered interaction (the flip cards) instead of hover
  effects scattered across every element.
- **Component structure** — every section is its own component, the theme
  toggle and contact form are isolated client components, and shared design
  tokens live in `tailwind.config.ts` rather than being repeated inline.
- **Performance** — no image assets to optimise (portfolio art is inline
  SVG, so there's nothing to lazy-load or compress), fonts are self-hosted
  at build time via `next/font`, and the Open Graph image is generated on
  the edge rather than shipped as a static file.
- **Responsiveness** — tested down to mobile widths; the hero grid, services
  list, and portfolio grid all reflow to a single column, and the flip
  interaction works on tap as well as hover.

## Tech stack

- Next.js 14 (App Router)
- React 18, TypeScript
- Tailwind CSS, with a small custom token set (`tailwind.config.ts`) for the
  studio's palette and type scale instead of default Tailwind colours
- `next/font/google` for Zilla Slab (headings) and Work Sans (body/UI) —
  fonts are downloaded and self-hosted at build time, so there's no runtime
  request to Google Fonts
- Formspree for contact form delivery — no backend code or API key needed
  on this project's side
- `next/og` for a dynamically generated Open Graph preview image
- No UI kit or animation library — the flip cards are plain CSS 3D
  transforms, and the dark-mode toggle is plain React state + localStorage

## Project structure

app/
layout.tsx - fonts, metadata, theme-flash prevention script
page.tsx - assembles the sections
globals.css - base styles, focus states, flip-card CSS,
reduced-motion handling
icon.svg - favicon, built from the studio's own palette
opengraph-image.tsx - generated OG preview image
robots.ts - crawler rules
sitemap.ts - sitemap entry
components/
Header.tsx - nav + theme toggle
ThemeToggle.tsx - dark mode, persisted to localStorage
Hero.tsx
Services.tsx
Portfolio.tsx - flip-card grid
Contact.tsx - client component: validation, Formspree submit,
loading/success/error states
Footer.tsx


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

## Setting up the contact form

The form posts to Formspree. To point it at your own inbox:

1. Create a free form at formspree.io
2. Copy the form ID it gives you
3. Set `FORMSPREE_ID` at the top of `components/Contact.tsx`
4. Confirm the verification email Formspree sends the first time a
   submission comes through

## Assumptions and scope

- Portfolio projects and their case-study notes are fictional, written to
  sound like real client work rather than lorem ipsum. Thumbnails are
  original SVG art rather than real photos — using real photos of actual
  businesses as if they were this fictional studio's client work would
  misrepresent those businesses, so the artwork stays illustrative.
  Swapping in real photos later (if licensed or original) is a one-line
  change per card.
- Dark mode is implemented by hand (a class on `<html>` + localStorage)
  rather than pulling in `next-themes`, since the whole toggle is about
  fifteen lines of actual logic.
- The contact form sends real submissions via Formspree but has no custom
  backend — Formspree handles delivery, so there's no server code or
  secret key to manage in this repo.
