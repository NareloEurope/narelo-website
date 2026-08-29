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

- **`content/home.ts`**, `hero`, `belief`, `statement`, `shape`, `worlds`, `journey`, `promise`, `home`, `founders`, `closing`
- **`content/membership.ts`**, `hero`, `whatItIs`, `isNot`, `childExperience`, `practice`, `ageGroups`, `howItWorks`, `included`, `joining`, `closing`
- **`content/experiences.ts`**, `hero`, `format`, `worlds`, `stages`, `regular`, `personalised`, `closing`
- **`content/community.ts`**, `hero`, `testimonials`, `gallery`, `belong`, `events`, `journalTeaser`
- **`content/stages.ts`**, `stageDetails`: the age-group rows (name, age, motto, summary, what to expect, photo). Shared by Membership *and* Experiences, so editing a stage changes both pages.
- **`content/pages.ts`**, `contactPage` (including the form fields), `journalPage`, `eventsPage`
- **`content/site.ts`**, `site`, `nav`, `headerCta`, `contact`, `socialIcons`

## The editable surface

The design and the words are kept apart on purpose.

| Layer | Where it lives | Who changes it |
|---|---|---|
| **The words** (every headline, paragraph, label, link, testimonial) | `content/*.ts` | The Narelo team, freely |
| **The design** (layout, spacing, animation, structure) | `app/*.tsx` and `components/*.tsx` | Changes here are bigger; flag them |
| **The pictures** | `public/images/` and `public/video/` | Swap by filename, or add new ones |

Almost every request the team will ever make is a change to one file in `content/`. Those files are plain, readable objects. Editing them cannot break the design.

Components are design, not words: `Header`, `Footer`, `Section`, `Motion`, `Gallery`, `Testimonials`, `StageAccordion`, `IncludedAccordion`, `WorldsExplorer`, `ContactForm`, `LazyVideo`, `VideoBand`, `WhatsAppIcon`. If a request needs one of these to behave differently, it is a design change, not a copy change.

Pictures can be swapped or added directly. Originals live in `assets-source/` as the archive of record and are never edited or deleted; `npm run optimize-assets` regenerates the web-sized `.webp` files in `public/images/` from them. A new picture means adding the original to `assets-source/`, running that script, then pointing the content file at the new filename. Videos go straight into `public/video/`.

The site is a fully static export (`output: 'export'` in `next.config.ts`). There is no server, no CMS and no database. `trailingSlash: true`, so every internal link ends in `/`.

## House rules baked into the site

These are decisions already made. Do not quietly reverse them.

1. **No em dashes in published copy.** This is a hard house style rule and it is noted at the top of several content files. Use commas, full stops or colons.
2. **Community, Journal and Contact are live routes but hidden from the menu** until they are ready. The visible nav is only: *What is Narelo*, *Experiences*, *Membership*.
3. **The primary call to action is WhatsApp**, not a form. The header CTA is "Become a member" and it opens a prefilled WhatsApp message whose first question is about the child's age. This is deliberate (funnel step 3).
4. **TikTok and Facebook links are intentionally empty** (`href: null`). They were dead links on the old Wix site. Do not invent URLs. Instagram is `@narelo.eu`.
5. **The Bloom age group has no brief yet.** Its summary is provisional and it has no motto. Do not write one, flag it instead.
6. **The internal session rhythm** (Wonder Seed, Atelier and so on) is deliberately *not* public-facing and must not appear on the website.

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
- The only public founder faces are **Natalie** (founder) and **Vivien** (co-founder, Educational Leader). No one else appears on the site as a founder or a public face.
- The approved public wording for the opening is **"Our first Narelo home will open in Marbella this autumn."**
- The messaging stage has moved from *Emotion & Curiosity* to **Understanding & Desire**. Copy must build understanding of what Narelo actually is, not just evoke a feeling.
- **Never invent or guess a source** for any research or educational claim. If a source cannot be verified, say so rather than citing it.
- Tone is **invitation, expedition, wonder**, never status or exclusivity. The curated community exists to protect the environment and the community, not to signal status.

The Narelo framework and strategy documents are not part of this project, so nothing here can be checked against them. Treat the copy already on the site as the record. If a requested change needs a fact that is not already on the site or stated in this file, say what is missing rather than filling the gap.
