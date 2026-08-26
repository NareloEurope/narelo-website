# Narelo Website

A static clone of the Narelo site, migrated off Wix
(`https://mercedescgalera.wixsite.com/narelo`) into Next.js.

**Nothing here is deployed yet.** No DNS, domain or hosting has been touched, and
the live Wix site is untouched and still serving.

> Full record of the migration — what the Wix site contained, what was changed and
> why, what is still open — is in **[MIGRATION-AUDIT.md](MIGRATION-AUDIT.md)**.
> Read that before changing copy.

---

## Run it

```bash
npm install && npm run dev
```

Then open http://localhost:3000.

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Static export into `out/` |
| `npm start` | Serves the built `out/` locally to check the real export |
| `npm run fetch-assets` | Re-downloads originals from Wix into `assets-source/` |
| `npm run optimize-assets` | Rebuilds `public/images/*.webp` from `assets-source/` |

## Stack

Next.js 16 (App Router) · Tailwind CSS v4 · TypeScript. Static export
(`output: 'export'`) — **no server, no database, no CMS, no auth.** `npm run build`
produces plain HTML/CSS/JS that any static host will serve.

Fonts are self-hosted at build time via `next/font`: **Cormorant Garamond** for
display and **Fraunces** for small accents (both match the source), with
**Nunito Sans** standing in for Avenir LT, which is licensed to Wix.

---

## Editing copy

**All text lives in `content/`** — never inline in components:

| File | Covers |
|---|---|
| `content/site.ts` | Nav, header CTA, footer, social icons, contact details |
| `content/home.ts` | Home |
| `content/experiences.ts` | Experiences |
| `content/membership.ts` | Membership |
| `content/community.ts` | Community |
| `content/pages.ts` | Contact, Journal, Events |

Change a string there and it updates everywhere it appears. Comments marked
`MIGRATION FIX` flag where this build deliberately differs from the Wix original —
if you edit one of those lines, update MIGRATION-AUDIT.md §11 too.

## Adding images

1. Put the original in `assets-source/` (full resolution — this is the archive).
2. Run `npm run optimize-assets` to generate the `.webp` in `public/images/`.
3. Reference it as `/images/<name>.webp` from `content/`.

Never edit `public/images/` by hand — it is generated. `assets-source/` holds the
only copies of the Wix media; if the Wix site is cancelled, those files are gone
from the internet.

---

## Before this can go live

These are blockers, not polish. Full list in MIGRATION-AUDIT.md §13.

1. **The contact form goes nowhere.** `components/ContactForm.tsx` renders the
   same four fields as Wix but posts to a stub — see `// TODO: connect to form
   backend`. Static export has no server, so this needs an external endpoint
   (Formspree, Basin, a serverless function) or the site must move off static
   export. **Until then, enquiries are silently lost.**
2. **Export existing form submissions from Wix** before cancelling anything.
   They live in the Wix inbox and are not recoverable afterwards.
3. **The four social icons are dead** — they were dead on Wix too. Add real URLs
   to `socialIcons` in `content/site.ts`.
4. **Three assets are Wix stock** (`stage-bloom`, and the Experiences and
   Membership closing videos). That licence likely does not cover a non-Wix
   domain — replace them.
5. **Set the domain**: `NEXT_PUBLIC_SITE_URL` so `og:image` resolves absolutely.
   It currently defaults to `https://narelo.es`.
6. **No favicon** — Wix had none either. Drop an `icon.png` into `app/`.

## Deploying

The build output is a plain static folder, so any static host works.

```bash
npm run build     # -> out/
```

Then either drag `out/` onto Netlify/Cloudflare Pages, or connect the repo with
build command `npm run build` and publish directory `out`. On Vercel, the
framework preset detects Next.js and needs no extra configuration.

Set `NEXT_PUBLIC_SITE_URL` to the production origin in the host's environment
settings.

**Do not point DNS at this until the contact form is wired up** — a live site that
drops enquiries is worse than the Wix one.

---

## Repository note

This folder is its **own git repository**, separate from `narelo-os`, which
gitignores `applications/`. That matches the BYST OS convention: one repo per app
under `applications/`, added as a submodule later.
