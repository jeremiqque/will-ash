# Will & Ash — website

Custom-coded website for Will & Ash, built with **Next.js 16**, **TypeScript**, **Tailwind CSS 4** and **Motion**.
The visual rules live in `DESIGN-will-ash.md`, and every colour, font and spacing value in the code comes from it.

## Run it locally

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install      # first time only
npm run dev      # open http://localhost:3000
```

Other commands:

| Command | What it does |
|---|---|
| `npm run build` | Production build (also type-checks) |
| `npm start` | Serve the production build |
| `npm run lint` | Check code quality |

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/practice-areas` | Practice areas overview |
| `/practice-areas/[slug]` | 7 practice pages (one template, content in `content/practice-areas.ts`) |
| `/contact` | Enquiry form + offices |
| `/book` | Free consultation booking (Cal.com) |
| `/privacy`, `/disclaimer`, `/cookies` | Legal pages (DRAFT — firm to review) |

## Settings (.env.local)

Copy `.env.example` to `.env.local` and fill in:

- `RESEND_API_KEY` makes the contact form email enquiries straight to willandash@outlook.com.
  Sign up to Resend **with willandash@outlook.com**, create an API key and paste it in. Nothing else is needed.
  `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` are optional (see `.env.example`).
  Until the key is set, the form validates but tells visitors to email the firm directly.
- **Booking link:** paste the firm's Cal.com link into `bookingUrl` in `src/content/site.ts`. The "Choose a time" button on `/book` then opens it.

## Design rules (from the brief)

No animated gradients, floating UI elements, gradient backgrounds, glows/blurred blobs or
glassmorphism. Surfaces are flat (ink, canvas, red); depth comes from colour contrast and 1px hairlines.

## Where things live

```
src/
  app/                 Pages (app router). page.tsx = Home
    globals.css        Design tokens + typography scale
    fonts.ts           Libre Caslon Display + General Sans (self-hosted)
  components/
    ui/                Buttons, eyebrow, section, accordion, reveal
    ui/icons.tsx       All icons (Hugeicons) — swap an icon here, once
    layout/            Header, footer, logo, cookie banner
    home/              Home page sections
  content/             ALL site text — edit copy here, not in components
    site.ts            Email, phone, hours, offices, social links
    home.ts            Home page copy, stats, FAQs
    practice-areas.ts  The 7 practice areas
  fonts/               woff2 web fonts (subset from public/font)
public/images/         Optimised, renamed images used by the site
```

## Before launch — content to confirm

Search the code for `TODO` and `DRAFT` to find everything that needs the firm's input:

- Phone number, Instagram handle, production domain (`src/content/site.ts`)
- Stats and draft copy (`src/content/home.ts`)
- Practice-area summaries (`src/content/practice-areas.ts`)
- Testimonial (placeholder on the Home page)
- Image for Technology, Data Protection & Privacy (placeholder)

## Images

To replace an image, put the new file in `public/images/` and update the path in the matching
`content/*.ts` file (or component). Recommended sizes: heroes 2400×1350, portrait panels 1600×2000,
cards 1600×1067. JPG or WebP; Next.js resizes them automatically.
