<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# The Narelo website

## Page map

| Page | URL | Content file | Design file |
|---|---|---|---|
| Home | `/` | `content/home.ts` + `content/site.ts` | `app/page.tsx` |
| Membership | `/membership/` | `content/membership.ts` + `content/stages.ts` + `content/site.ts` | `app/membership/page.tsx` |
| Experiences | `/experiences/` | `content/experiences.ts` + `content/stages.ts` + `content/site.ts` | `app/experiences/page.tsx` |
| Community | `/community/` | `content/community.ts` | `app/community/page.tsx` |
| Contact | `/contact/` | `content/pages.ts` + `content/site.ts` | `app/contact/page.tsx` |
| Journal | `/journal/` | `content/pages.ts` | `app/journal/page.tsx` |
| Events | `/events/` | `content/pages.ts` | `app/events/page.tsx` |

Header, footer, navigation, contact details and social links are global and live in **`content/site.ts`**, changing them changes every page at once.

What is in each content file:

- **`content/home.ts`**, `hero`, `belief`, `statement`, `shape`, `worlds`, `journey`, `promise`, `home`, `closing`
- **`content/membership.ts`**, `hero`, `whatItIs`, `isNot`, `different`, `childExperience`, `practice`, `ageGroups`, `howItWorks`, `included`, `joining`, `closing`
- **`content/experiences.ts`**, `hero`, `format`, `spark`, `worlds`, `stages`, `regular`, `personalised`, `closing`
- **`content/community.ts`**, `hero`, `testimonials`, `gallery`, `belong`, `events`, `journalTeaser`
- **`content/stages.ts`**, `stageDetails`: the age-group rows (name, age, motto, summary, what to expect, photo). Shared by Membership *and* Experiences, so editing a stage changes both pages.
- **`content/pages.ts`**, `contactPage` (including the form fields), `journalPage`, `eventsPage`
- **`content/site.ts`**, `site`, `nav`, `headerCta`, `contact`, `socialIcons`

## Three languages

The site is published in **English (default), Spanish, German and Hungarian**, in that order in the selector.

- English lives at the plain URLs (`/`, `/membership/`) and the English files in
  `content/*.ts` stay the source of truth. Edit those exactly as before.
- Spanish is `/es/...`, German `/de/...`, Hungarian `/hu/...`. Each is one file:
  **`content/es/index.ts`**, **`content/de/index.ts`**, **`content/hu/index.ts`**.
- The three translation files mirror the English key for key. `content/dictionary.ts`
  derives the shape from the English, so **a missing or misspelled key fails the
  build**. When you add a key to an English file, add it to all three.
- Brand names are **not translated**: Narelo, the Five Worlds, the age group
  names, Signature Saturdays, Holiday Experiences, Expert Insights, Community
  Mornings, Narelo Experiences.
- ⚠️ **No translation has been read by a native speaker.** They need that pass
  before launch. German uses "Sie"; Spanish and Hungarian are informal.

## The editable surface

The design and the words are kept apart on purpose.

| Layer | Where it lives | Who changes it |
|---|---|---|
| **The words** (every headline, paragraph, label, link, testimonial) | `content/*.ts` | The Narelo team, freely |
| **The design** (layout, spacing, animation, structure) | `app/*.tsx` and `components/*.tsx` | Changes here are bigger; flag them |
| **The pictures** | `public/images/` and `public/video/` | Swap by filename |

Almost every request the team will ever make is a change to one file in `content/`. Those files are plain, readable objects. Editing them cannot break the design.

Components are design, not words: `Header`, `Footer`, `Section`, `Motion`, `Gallery`, `Testimonials`, `StageAccordion`, `IncludedAccordion`, `WorldsExplorer`, `ContactForm`, `LazyVideo`, `VideoBand`, `WhatsAppIcon`. If a request needs one of these to behave differently, it is a design change, not a copy change.

To swap a picture, a new image file can be added directly through this project (for example, one shared in the chat) and used to replace an existing file in `public/images/` or `public/video/`. Whoever supplies the image is vouching that it is free to use. Never invent or guess a source for a photo. If the source isn't known, say so plainly in the file's comment instead of citing one.

The site is a fully static export (`output: 'export'` in `next.config.ts`). There is no server, no CMS and no database. `trailingSlash: true`, so every internal link ends in `/`.

## What the September audit changed

An external website audit (V1, 2026-09-05) drove a pass over structure,
accessibility, SEO and the Spanish copy. Decisions taken from it, so they are
not quietly reversed:

- **One call to action per page close.** The home page had three buttons in a
  row and every other page had two. The Marbella section and the footer band
  lost their buttons; each page's closing block keeps its own, and a small
  floating WhatsApp button (`FloatingActions`) is always within reach.
- **The footer no longer repeats the main menu.** The "Explore" column is gone.
- **The five worlds appear twice, not three times:** in full on Experiences,
  as a teaser on the home page. The Membership recap is a sentence and a link.
- **Images that carry meaning have alt text**, in every language. Full-bleed
  background photographs behind headlines keep `alt=""` on purpose: they are
  decorative and a screen reader should skip them.
- **`robots.txt`, `sitemap.xml` and Organization/LocalBusiness JSON-LD** exist
  now. robots follows the same `NEXT_PUBLIC_ALLOW_INDEXING` switch as the meta
  tag, so launch is one environment variable, not a code change.

Still open from the audit, deliberately not done: moving "What Narelo is" to
the home page, giving the founders their own page, merging the Narelo Promise
with "What makes Narelo different", and translating the Spanish URL slugs.
All four are content-architecture decisions for the team.

## House rules baked into the site

These are decisions already made. Do not quietly reverse them.

1. **No em dashes in published copy.** (Rui, 2026-08-26.) This is a hard house style rule and it is noted at the top of several content files. Use commas, full stops or colons.
2. **No pricing anywhere.** The "What does it cost?" section was deliberately removed from the Membership page because pricing is not yet agreed. Never invent or reinstate a price. Restore the section only when Rui says pricing is set.
3. **Community, Journal and Contact are live routes but hidden from the menu** until they are ready. The visible nav is only: *What is Narelo*, *Experiences*, *Membership*, *Who we are* (the last one is an anchor into the Membership page's "Who we are" section).
4. **The primary call to action is WhatsApp**, not a form. Every CTA on the site reads **"Start a conversation"** and opens a prefilled WhatsApp message ("Hi Narelo, I'd love to learn more about membership for my family."). WhatsApp is the concierge entry point for every path, website, Instagram and referral alike (Funnel Process, 2026-08-31). There is no application form before the family conversation, and the mini dossier is offered on request, never as a gate.
5. **TikTok and Facebook links are intentionally empty** (`href: null`). They were dead links on the old Wix site. Do not invent URLs. Instagram is `@narelo.eu`.
6. **The Bloom age group has no brief yet.** Its summary is provisional and it has no motto. Do not write one, flag it instead.
7. **The internal session rhythm** (Wonder Seed, Atelier and so on) is deliberately *not* public-facing and must not appear on the website.
8. Every content file carries a comment block naming the narelo-os document it came from. **Keep those comments accurate.** If copy changes, and the source changed too, update the comment.

## Canonical names and tone

Never paraphrase, re-order or re-title these:

- **The Five Worlds**, their names and descriptions
- **The age group names**, including their exact age ranges
- **The Core Belief titles**
- **The Narelo Promise**

On the business itself:

- Marbella is **"our first Narelo home"**, never "a Marbella business"
- Narelo is a **membership and a community**, never a class, nursery, play centre, school, or "a collection of sessions"
- The name is **Narelo**. Never Norello, never Naralo.
- The only **founders** are **Natalie Curavic** (Founder & CEO) and **Vivien Vörös** (Co-founder & Head of Education). Names, roles and both biographies come from the Narelo Family Guide. They appear in **one place only**: the "Who we are" section of the Membership page (`proof` in `content/membership.ts`). The home page's founders section was removed, do not re-add it.
- **Jessica and Mercedes are team, not founders** (Vivien, 2026-09-05). The September audit listed them alongside Natalie and Vivien; that was wrong. **Jessica** is Senior Educator and **Mercedes** is Brand Experience Manager. Neither is on the website today. If a team section is ever added it is separate from the founders, and never present either of them as a founder. ⚠️ Their surnames, photographs and biographies are not supplied, so nothing about them can go on the site yet.
- The approved public wording for the opening is **"Our first Narelo home will open in Marbella this autumn."**
- The messaging stage has moved from *Emotion & Curiosity* to **Understanding & Desire**. Copy must build understanding of what Narelo actually is, not just evoke a feeling.
- **Never invent or guess a source** for any research or educational claim. If a source cannot be verified, say so rather than citing it.
- Tone is **invitation, expedition, wonder**, never status or exclusivity. The curated community exists to protect the environment and the community, not to signal status.

Some framework documents contain **⚠️ GAP** markers on facts that are not yet confirmed. Anything behind a GAP flag must never appear on the website as a statement of fact. If a requested change depends on one, say which GAP it is and stop.
