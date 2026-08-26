# Narelo Website — Migration Audit

**Source:** https://mercedescgalera.wixsite.com/narelo (Wix, "Wix Harmony" template)
**Crawled:** 2026-08-26 · site `lastmod` in sitemap: 2026-08-25
**Purpose:** complete inventory of the live Wix site before rebuilding it 1:1 in Next.js.
**Status:** MIGRATED. Audit corrected against findings made during the rebuild —
corrections are marked *(corrected during build)*. See §11 for what changed and §12 for verification.

All pages returned HTTP 200. Nothing was unreachable. Every line of copy below is
transcribed verbatim from the live site, including typos (see §7).

---

## 1. Page inventory

Wix kept its default slugs (`blank`, `blank-1`, `blank-2`) even though the pages have
real names. The real names come from `<title>`.

| # | Nav label | Live URL | `<title>` | Proposed new route | Type |
|---|---|---|---|---|---|
| 1 | Home | `/narelo` | `Home \| Narelo` | `/` | Static |
| 2 | Experiences | `/narelo/blank` | `Experiences \| Narelo` | `/experiences` | Static |
| 3 | Membership | `/narelo/blank-1` | `Membership \| Narelo` | `/membership` | Static |
| 4 | Community | `/narelo/blank-2` | `Community \| Narelo` | `/community` | Static |
| 5 | Journal | `/narelo/blog` | `Journal \| Narelo` | `/journal` | Wix Blog app — **empty** |
| 6 | Contact | `/narelo/contact` | `Contact \| Narelo` | `/contact` | Static + form |
| 7 | *(not in nav)* | `/narelo/event-list` | `Events \| Narelo` | `/events` | Wix Events app — **empty** |

**Note on page 7:** Events is not in the header nav. It is reachable only via the
`SEE ALL EVENTS` button on the Community page.

**Decision needed:** confirm the proposed clean routes above. Keeping `/blank-1`
would be faithful-to-a-fault; the page *names* are unchanged either way.

---

## 2. Global elements

### Header (identical on all 7 pages)
- Wordmark image (links to `/`)
- Nav: `Home` · `Experiences` · `Membership` · `Community` · `Journal` · `Contact`
- CTA button: `BECOME A MEMBER`
- Height 129px desktop. Active nav item is underlined.

⚠️ **The `BECOME A MEMBER` button has no destination.** It is a Wix button with no
link configured — it does nothing when clicked, on every page. See §7.

### Footer (identical on all 7 pages)
- Wordmark image (links to `/`)
- Four social icons — WhatsApp, Instagram, TikTok, Facebook (1254×1254 sources, rendered ~55px). **None are links.**
- `Marbella, Spain`
- `© 2026 Narelo. Todos los derechos reservados.` ← **Spanish**, see §7
- `Start Now` link → `#SCROLL_TO_TOP` (scrolls up; it is not a real CTA)
- Height 370px desktop.

### Wix chrome to drop
- Top banner `Creado con Wix Harmony` → `https://wixharmony.com`
- Skip-link `Ir al contenido principal` / `top of page` / `bottom of page`
- Floating scroll-to-top button

### Not present anywhere on the site
No Instagram embed · no Google Maps embed · no YouTube/Vimeo · no cookie banner ·
no newsletter signup · no favicon · no `robots.txt` directives.

**Correction *(corrected during build)*:** the footer **does** carry four social
icons — WhatsApp, Instagram, TikTok, Facebook — rendered at ~55px. My first pass
mis-read them as decorative image tiles because they are `<img>` elements, not
icon fonts, and carry no links. **All four are dead:** every one has a null href
(verified). See §7E #29.

**@narelo.eu does not appear anywhere on the site.** Per CLAUDE.md this is the brand's
Instagram handle — flagged in §7 as a gap, not added.

---

## 3. Design system as actually rendered

### Typography
| Role | Family (as loaded by Wix) | Web equivalent | Rendered |
|---|---|---|---|
| Display / headings | `cormorantgaramond-light` | **Cormorant Garamond** 300 | 24–52px, `letter-spacing: -0.05em`, often `text-transform: uppercase` |
| Body / labels | `avenir-lt-w01_35-light1475496` | **Avenir Light** (fallback: Nunito Sans / system) | 17.8–18px, `letter-spacing: +0.05em` |
| Small nav / accents | `fraunces_120pt-light` | **Fraunces** 300 | 16px, `letter-spacing: 0.035em` |
| — | `onest` | *(ignore)* | Wix's own "Creado con" chrome only, not site design |

⚠️ **Avenir LT is a licensed Wix font** and cannot be self-hosted without a licence.
Recommend **Nunito Sans** (Google, geometric humanist, very close) as the substitute
and flag it for your sign-off. Cormorant Garamond and Fraunces are both free on Google Fonts.

### Colour
Sampled from computed styles on the live site:

| Token | Hex | rgb | Used for |
|---|---|---|---|
| `cream` | `#F7F4EE` | 247,244,238 | Dominant page background |
| `cream-alt` | `#F6F2E8` | 246,242,232 | Alternating section background |
| `sage` | `#59614B` | 89,97,75 | **Primary text colour** (most body + headings) |
| `rust` | `#5F2815` | 95,40,21 | Accent headings, eyebrow labels |
| `warm-grey` | `#6F6A63` | 111,106,99 | Secondary/supporting text |
| `forest` | `#3B4E2B` | 59,78,43 | `BECOME A MEMBER` button fill |
| `tan` | `#A27855` | 162,120,85 | Two full-width solid bands on Home *(corrected during build — these are solid colour, not images)* |
| `sage-light` | `#A8B29A` | 168,178,154 | Solid band on Membership |
| `cream-light` | `#FFFDF8` | 255,253,248 | Membership tiers section |

This sits inside the four families described in `brand/colour-guidelines.md`
(cream base, olive/sage accent, sand, warm brown) — **with one discrepancy**: the
guidelines say body text should be *deep warm brown "ink"*, but the live site sets
most text in **sage `#59614B`**. Cloning as-is; flagged in §7.

---

## 4. Page-by-page content

### 4.1 Home — `/narelo`

Ten sections. Copy verbatim:

**1 · Header**

**2 · Hero** (full-bleed background video, autoplay/muted/loop)
- H1: `A childhood full of things worth remembering.`
- Eyebrow: `EXTRAORDINARY CHILDHOOD EXPERIENCES` · `A PRIVATE MEMBERSHIP`
- Video control label: `Play Background Video: Kids running`

**3 · A moment to pause**
- Eyebrow: `A MOMENT TO PAUSE`
- Heading: `They are growing, right before our eyes.`
- Body: `Between routines, screens and busy days, childhood is quietly unfolding all around us.`

**4 · Not to be rushed**
- Heading: `Childhood is not to be rushed. Is to be lived.`
- Body: `Moments od curiosity. Real connection. Freedom to explore. Space to be themselves.`

**5 · More than a place to go**
- Eyebrow: `A world built around childhood` *(rendered uppercase via CSS)*
- Label: `MORE THAN A PLACE TO GO`
- Body: `Narelo brings together extraordinary experiences, trusted people and a community of families, creating a place where childhood can unfold in many different ways.`
- Closing: `Not just something to do. A world to grow into.`

**6 · Image band** (no copy)

**7 · For every chapter of childhood**
- Eyebrow: `For every chapter of childhood` *(uppercase via CSS)* · Label: `the journey`
- Seven stages, name over age:

| Stage | Age shown on Home |
|---|---|
| `bloom` | `Pregnancy` |
| `NURTURE` | `0 - 1 year` |
| `NEST` | `1 - 2 years` |
| `LITTLE BEGGININGS` | `2 - 3 years` |
| `BUILDERS I` | `3 - 4 years` |
| `BUILDERS II` | `4 - 5 years` |
| `NAVIGATORS` | `+5 years` |

- Link: `Discover their journey →`

**8 · A world of discovery**
- Eyebrow: `experiences` · Heading: `A world of discovery`
- Body: `Designed to spark curiosity, inspire exploration and create lasting memories.`
- Link: `EXPLORE ALL EXPERIENCES →`
- Four worlds:
  - `CONNECT` — `People, community & shared experiences.`
  - `MOVE` — `Movement, play & expression.`
  - `DISCOVER` — `Nature, exploration & the world around them.`
  - `CREATE` — `Art, imagination & making.`

**9 · Closing**
- Heading: `Familiar faces. New friendships. Shared mornings. Little traditions.`

**10 · Footer**

---

### 4.2 Experiences — `/narelo/blank`

**1 · Hero**
- H1: `Experiences that grow with your child`
- Body: `Thoughtfully created experiences that invite curiosity, creativity and connection.`
- Link: `Discover what's waiting →` → `#stages---experiences` (in-page anchor)

**2 · Intro**
- Heading: `For the way your family lives, explores and shares.`

**3 · The stages** (2552px — the tallest section on the site; seven stage cards)

| Stage | Age | Description |
|---|---|---|
| `Bloom` | `Pregnancy` | `A gentle beginning full of wonder` |
| `Nurture` | `0 - 1 year` | `Sensing, discovering and connecting.` |
| `Nest` | `1 - 2 years` | `Exploring the world through movement.` |
| `Little Beginnings` | `2 - 3 years` | `Building confidence through discovery` |
| `Builders I` | `3 - 5 years` | `Creating, exploring and making sense of the world.` |
| `Builders II` | `5 - 6 years` | `Questioning, creating and building ideas.` |
| `Navigators` | `6 - 8 years` | `Growing independence and finding their way.` |

- Section heading: `A path for every stage` · Label: `THE JOURNEY`
- Numerals `01`–`07` are rendered as decorative labels.

**4 · Decorative band** (no copy)

**5 · Regular experiences**
- Eyebrow: `REGULAR EXPERIENCES`
- Heading: `Thoughtfully designed experiences for our community.`
- Six cards:
  - `Birthday Experiences` — `Thoughtfully curated celebrations inspired by your child's interests and personality.`
  - `Member Events` — `Exclusive events for members to connect, celebrate and be inspired.`
  - `Community Mornings` — `Casual mornings to meet, connect and grow together as a community.`
  - `Expert Insights` — `Inspiring conversations with experts exploring childhood, development and family wellbeing.`
  - `Holiday Experiences` — `School holidays transformed into opportunities for adventure, discovery and connection.`
  - `Signature Saturdays` — `Slow Saturdays designed for discovery, creativity and meaningful time together.`

**6 · Personalised experiences**
- Eyebrow: `PERSONALISED EXPERIENCES`
- Heading: `Tailored experiences designed around your child and family`
- Five cards:
  - `Private Experiences` — `Fully personalised experiences thoughtfully created around your child and family.`
  - `Family Experiences` — `Meaningful experiences designed for families to connect, explore and create memories together.`
  - `Signature Family Days` — `Specially curated days created around your family, from thoughtful activities to unforgettable moments.`
  - `Private Caring Session` — `Personalised one-to-one care tailored to your child's needs, wherever you are.`
  - `Curated Holiday Experince` — `Bespoke holiday programmes blending nature, creativity, adventure and meaningful experiences.`

**7 · Closing** (background video)
- Eyebrow: `BEYOND THE EVERYDAY`
- Heading: `Some experiences stay with you.`
- Sub: `The ones children remember for years to come.`

---

### 4.3 Membership — `/narelo/blank-1`

**1 · Hero**
- H1: `A place to belong`
- Sub: `A place to return to, discover together and make your own.`

**2 · Eyebrow band**
- `Some things grow with time`
- `THOUGHTFUL EXPERIENCES · REAL CONNECTIONS · A CHILDHOOD THAT MATTERS`

**3 · Four "becomes" cards**
- `A fascination becomes a passion.` — `Moments of discovery can become interests they carry with them.`
- `A familiar face becomes a friend.` — `A community where children and families grow, connect and belong.`
- `A shared morning becomes a tradition.` — `The little moments you return to can become the ones your family remembers.`
- `A place becomes part of their childhood.` — `A familiar place can hold memories, relationships and a sense of belonging.`

**4 · Image band** (no copy)

**5 · Statement**
- `Not just somewhere to go, but something to look forward to, return to and share.`

**6 · Member benefits** — heading `More than a membership`, six cards:
- `Priority booking` — `Early access to experiences, events and limited places.`
- `Member pricing` — `Enjoy preferred pricing across experiences and events.`
- `Exclusive access` — `Access to member-only experiences, events and opportunities.`
- `Community` — `Build meaningful connections with families who share your values.`
- `Expert insights` — `Thoughtful guidance, expert perspectives and inspiration for family life.`
- `Narelo ecosystem` — `Be part of a wider world created around family life.`

**7 · Tiers** — heading `Choose how you belong`, intro `Find the way of experiencing Narelo that feels right for your family.`
- `ANNUAL` — `A year of meaningful experiences and connection.`
- `QUARTERLY` — `A flexible way to be part of the Narelo community.`
- `MONTHLY` — `The freedom to experience Narelo month by month.`
- `EXPERIENCE` — `Choose the experience that feels right for your family, from celebrations to private moments.`

⚠️ **No prices, no CTA buttons, and no links on any of the four tiers.** They are
descriptive cards only.

**8 · Closing** (background video)
- Heading: `Ready to belong?` — no button attached.

---

### 4.4 Community — `/narelo/blank-2`

**1 · Hero**
- H1: `A community that grows` / `with you` (two lines, styled separately)

**2 · Testimonials** (carousel, 3 slides)
- `"The kids had an amazing time and were completely engaged throughout the whole celebration"` — `- MARÍA · NARELO FAMILY`
- `"It's more than the activities. It's the feeling of being part of something."` — `- CARLOS · NARELO FAMILY`
- `"My daughter looks forward to every experience. And so do I."` — `- TESSA · NARELO FAMILY`

**3 · Photo gallery** — 6 images, `01`–`06`, counter `01 / 06`, Previous/Next, click opens a lightbox (Close / Previous / Next).

**4 · A place to belong**
- Heading: `A place to belong`
- Body: `Where children grow, families connect, and memories are made together.`

**5 · Events**
- Heading: `Moments to conect and grow together`
- Body: `Community experiences created to bring families together, to learn, share and create meaningful moments.`
- Button: `SEE ALL EVENTS` → `/event-list`
- Wix Events widget renders: **`No hay eventos en este momento`** (Spanish, no events published)

**6 · Journal teaser** (background video)
- Heading: `Knowledge to guide you`
- Body: `Thoughtful insights and expert perspectives to support modern family life.`
- Button: `JOURNAL`

---

### 4.5 Contact — `/narelo/contact`

**1 · Hero**
- H1: `We'd love to hear from you.`
- Sub: `We are here to answer your questions and help you find the experience that's right for your family.`

**2 · Details**
- `Visit Us` — `Narelo, Marbella` · `By appointment only. We'd love to welcome you.`
- `Email us` — `hello@narelo.es`
- `call or whatsapp` — `+34 655 366 888`

⚠️ Email and phone are **plain text, not clickable** (no `mailto:` / `tel:` anywhere in the page source).

**3 · Form** — heading `A little more about you` (see §5)

**4 · Background-video band** (no copy)

---

### 4.6 Journal — `/narelo/blog`

Wix Blog app, **no posts published**. Renders:
- Tab: `All Posts` · overflow menu `Más`
- Empty state: `Vuelve pronto` / `Una vez que se publiquen entradas, las verás aquí.` ← **Spanish**

### 4.7 Events — `/narelo/event-list`

Wix Events app, **no events published**. Renders:
- Empty state: `No hay eventos en este momento` ← **Spanish**
- This page has **no hero, no heading, and no footer `Start Now` link** — it is the barest page on the site.

---

## 5. Forms

**One form on the entire site.**

| Property | Value |
|---|---|
| Page | `/narelo/contact` |
| Section heading | `A little more about you` |
| Submit button | `SEND` |
| Wix `action` | `https://mercedescgalera.wixsite.com/narelo/contact` (method `get` — Wix intercepts in JS) |
| Confirmation message | **Could not be captured** — requires an actual submission. Not tested, to avoid writing junk into the live Wix inbox. |

### Fields collected

| # | Label | Type | Required | Notes |
|---|---|---|---|---|
| 1 | `Name` | text | **Yes** | |
| 2 | `Email` | email | **Yes** | |
| 3 | `Phone number` | tel | **Yes** | `aria-label` is `Phone number. Teléfono` — Spanish leaks into the accessible name |
| 4 | `Tell us about what you're looking for…` | textarea | **Yes** | No placeholder; label sits above |

All four fields are required. Required fields are marked with `*`.

**Where the data goes today:** Wix Forms → the Wix site inbox (and whatever email
Wix notifies). **Not migratable** — the new build will render the same four fields
and POST to a stub handler with `// TODO: connect to form backend`.

---

## 6. SEO / meta

Present on **every** page: `<title>`, `og:title`, `og:url`, `og:site_name`,
`og:type=website`, `twitter:card=summary_large_image`, `twitter:title`, `<link rel="canonical">`.

**Missing on every page — nothing to migrate, must be written fresh:**
- ❌ `meta description` — **absent site-wide**
- ❌ `og:description`
- ❌ `og:image` — every social share renders blank, despite `twitter:card=summary_large_image`
- ❌ `og:locale`
- ❌ Structured data (no JSON-LD, no LocalBusiness / Organization schema)
- ❌ Favicon / apple-touch-icon

⚠️ **`<html lang="es">` on every page** — the site declares itself Spanish while 100% of
the authored copy is English. This affects screen readers, translation prompts and
search. Verified in-browser on all 7 pages. The clone will set `lang="en"`; flagging
because it is a deliberate deviation from the source.

**This is a decision for you, not for me:** descriptions and og:images are *new copy*,
which the brief forbids me from writing. I will ship the clone with the same meta the
Wix site has, plus a `TODO` list, unless you'd rather supply them.

---

## 7. Copy issues found

Cloned **as-is** per the brief. Nothing below has been silently corrected.

### A. Typos and grammar

| # | Page | Live text | Issue |
|---|---|---|---|
| 1 | Home | `Moments od curiosity.` | `od` → `of` |
| 2 | Home | `LITTLE BEGGININGS` | → `LITTLE BEGINNINGS` (double error: `GG`, `INI`) |
| 3 | Home | `Childhood is not to be rushed. Is to be lived.` | Missing subject — `It is to be lived.` |
| 4 | Experiences | `Curated Holiday Experince` | `Experince` → `Experience` |
| 5 | Experiences | `Building confidence through discovery` | Missing full stop (siblings all have one) |
| 6 | Experiences | `A gentle beginning full of wonder` | Missing full stop |
| 7 | Community | `Moments to conect and grow together` | `conect` → `connect` |

### B. Language leaks — Spanish on an English site

| # | Page | Live text | Where |
|---|---|---|---|
| 8 | **All 7** | `© 2026 Narelo. Todos los derechos reservados.` | Footer — **most visible issue on the site** |
| 9 | All 7 | `Creado con Wix Harmony` | Wix banner (disappears on migration) |
| 10 | All 7 | `Ir al contenido principal` | Skip-link (disappears on migration) |
| 11 | Journal | `Vuelve pronto` / `Una vez que se publiquen entradas, las verás aquí.` | Wix Blog empty state |
| 12 | Community, Events | `No hay eventos en este momento` | Wix Events empty state |
| 13 | Contact | `Phone number. Teléfono` | Form field `aria-label` |
| 14 | Experiences | `Ondas rosas abstractas` | Stock image alt text |

Items 9, 10, 11, 12 are Wix-generated, not authored — they vanish when we leave Wix.
**Items 8, 13 and 14 are ours and need an English decision.**

### C. Factual contradiction — age ranges

**The Home page and the Experiences page disagree**, and Home also contradicts
`framework/age-groups.md` (canonical):

| Stage | Home says | Experiences says | `framework/age-groups.md` |
|---|---|---|---|
| Bloom | Pregnancy | Pregnancy | pregnancy ✅ |
| Nurture | 0 - 1 year | 0 - 1 year | 0–1 ✅ |
| Nest | 1 - 2 years | 1 - 2 years | **The Nest** 1–2 ⚠️ name |
| Little Beginnings | 2 - 3 years | 2 - 3 years | 2–3 ✅ |
| **Builders I** | **3 - 4 years** ❌ | 3 - 5 years | **3–5** |
| **Builders II** | **4 - 5 years** ❌ | 5 - 6 years | **5–6** |
| **Navigators** | **+5 years** ❌ | 6 - 8 years | **6–8** |

→ **The Experiences page is correct.** The Home page is wrong on three of seven stages.
Per the brief I am cloning both verbatim, including the contradiction. **Recommend
fixing Home before launch** — this is a factual claim families will act on.

→ Canonical name is **`The Nest`**; the site says `Nest` on both pages.

### D. Against CLAUDE.md rules

| # | Issue | Rule |
|---|---|---|
| 15 | `EXTRAORDINARY CHILDHOOD EXPERIENCES · A PRIVATE MEMBERSHIP` — "private" reads toward status-exclusivity in the hero position | Tone: *invitation, expedition, wonder — never status-exclusivity* |
| 16 | Membership tiers `ANNUAL / QUARTERLY / MONTHLY` frame membership as a subscription plan | *Membership is belonging, not transactional attendance* |
| 17 | No mention anywhere that Marbella is the **first** Narelo home; footer says only `Marbella, Spain` | *Marbella is the first Narelo home, not the business's identity* |
| 18 | Body text is sage `#59614B`; brand guidance calls for a deep warm brown "ink" | `brand/colour-guidelines.md` |
| 19 | `@narelo.eu` appears nowhere on the site | Brand handle per CLAUDE.md |

### E. Broken / dead-end interactions

| # | Issue | Impact |
|---|---|---|
| 20 | **`BECOME A MEMBER` (header, all 7 pages) has no link** — `<button>` with no `href` and no handler. **Click-tested live: no navigation, no dialog, no DOM change.** | The site's primary CTA does nothing |
| 21 | Membership tier cards have no CTA or link (verified: zero anchors in all four cards) | No path from interest → enquiry |
| 22 | `Ready to belong?` closing section has no button | Dead end |
| 23 | `hello@narelo.es` and `+34 655 366 888` are not clickable | Friction on mobile especially |
| 24 | Footer `Start Now` links to `#SCROLL_TO_TOP` | Looks like a CTA, only scrolls up |
| 25 | Journal and Events are linked from the nav/Community but are **empty** | Two of seven pages show a Spanish "nothing here" message |
| 29 | **All four footer social icons are dead** *(found during build)* — WhatsApp, Instagram, TikTok and Facebook are plain `<img>`s with no link | Every social path off the site is a dead end. `@narelo.eu` is never linked or named |

**#20 is the most commercially serious finding in this audit.** Every page pushes
`BECOME A MEMBER` and the button is inert.

### F. Structural / accessibility

| # | Issue |
|---|---|
| 26 | **Almost every text element on Home is an `<h1>`** — ~30 `h1`s on one page. Experiences/Membership use `h1`/`h2`/`h3` more sensibly. I will emit a correct single-`h1` hierarchy in the clone (visual output identical) — **flagging because it is a structural change, though no copy changes**. |
| 27 | Most images have empty `alt`; several expose filenames as alt (`POST - NARELO - 5.PNG`, `ChatGPT Image 18 ago 2026, 15_41_37.png`, `IMG_1667.JPG`) |
| 28 | `Nest` / `Nurture` cards appear in the DOM in a different order than they render (CSS-positioned) |

---

## 8. Assets

Full machine-readable manifest: [`scripts/assets.json`](scripts/assets.json).

**33 unique images** + **5 videos**. All originals confirmed downloadable at full
resolution (verified: a 1080×1350 PNG returned 1.58 MB, and the 720p hero video 2.97 MB).

### Images by page
| Page | Unique images | Largest source |
|---|---|---|
| Global (header/footer) | 5 (wordmark + 4 footer tiles) | 1254×1254 |
| Home | 5 | 1536×1024 |
| Experiences | 9 | 3000×2000 |
| Membership | 6 | 1855×848 |
| Community | 6 | 1536×2048 |
| Contact | 2 | 1536×1024 |
| Journal / Events | 0 (global only) | — |

*(Totals exceed 32 because `img-1667.jpg`, `img-5208.jpg` and `family-whatsapp-091957.jpeg` are each used on two pages.)*

### Videos
| Page | Best quality | Local filename | Notes |
|---|---|---|---|
| Home | 720p | `home-hero.mp4` | "Kids running" — no 1080p source exists |
| Experiences | 1080p | `experiences-closing.mp4` | Wix stock |
| Membership | 720p | `membership-closing.mp4` | Wix stock (`24216-340670744_medium.mp4`) |
| Community | 1080p | `community-band.mp4` | |
| Contact | 720p | `contact-band.mp4` | |

⚠️ **Two videos and one image are Wix stock library assets** (prefix `11062b_`, plus
the membership stock clip). Wix stock is licensed *for use on the Wix site*. Re-hosting
them on a non-Wix domain may fall outside that licence. **Recommend replacing all three
before going live** — flagging now rather than at launch. Cloning them for the
like-for-like build in the meantime.

---

## 9. Things that cannot be migrated

| Item | Why | Plan |
|---|---|---|
| Wix Forms backend | Proprietary; submissions live in the Wix inbox | Rebuild UI 1:1, POST to stub + `// TODO: connect to form backend` |
| Wix Blog (Journal) | Wix app; **zero posts exist** | Static page + same empty state (in English) |
| Wix Events | Wix app; **zero events exist** | Static page + same empty state (in English) |
| Form confirmation message | Needs a live submission to observe | Not tested — would write junk to the live inbox. **Ask Natalie/Vivien for the current text.** |
| Avenir LT W01 | Licensed Wix font | Substitute Nunito Sans — **needs your sign-off** |
| Existing form submissions | Stored in Wix | Export from Wix before any cancellation |

---

## 10. What was built

**Stack:** Next.js 16 (App Router) · `output: 'export'` (fully static, no server) ·
Tailwind CSS v4 · no CMS, no database, no auth.

```
applications/website/
├── app/                    one folder per route + layout, globals.css, not-found
├── components/             Header, Footer, Section, VideoBand, LazyVideo,
│                           Gallery, Testimonials, ContactForm, Reveal
├── content/                ALL copy as typed data — site, home, experiences,
│                           membership, community, pages
├── assets-source/          33 pristine Wix originals (31MB) — archive of record
├── public/images/          33 optimised .webp derivatives (2.5MB)
├── public/video/           5 videos
├── scripts/                assets.json manifest, fetch-assets, optimize-assets
├── MIGRATION-AUDIT.md      this file
└── README.md               how to run, deploy, and edit copy
```

Every string lives in `content/` rather than inline in JSX, so copy can be edited
in one place without touching components. Each deviation from the source is marked
`MIGRATION FIX` in a code comment next to the string it affects.

### Decisions taken (your answers, 2026-08-26)

| Question | Decision |
|---|---|
| Routes | Clean: `/experiences`, `/membership`, `/community`, `/journal`, `/events` |
| Typos, Spanish footer, Home age ranges | **Fix as we migrate** (not clone-verbatim) |
| `BECOME A MEMBER` | Point at `/contact` |
| Avenir substitute | Nunito Sans |

---

## 11. Changes applied (deviations from the source)

Everything below is a deliberate change. Nothing else in the copy was touched —
no wording was "improved", no marketing copy was written.

### 11.1 Typos corrected (§7A)

| Page | Was | Now |
|---|---|---|
| Home | `Moments od curiosity.` | `Moments of curiosity.` |
| Home | `LITTLE BEGGININGS` | `LITTLE BEGINNINGS` |
| Home | `Childhood is not to be rushed. Is to be lived.` | `…It is to be lived.` |
| Experiences | `Curated Holiday Experince` | `Curated Holiday Experience` |
| Experiences | `A gentle beginning full of wonder` | `…wonder.` (full stop) |
| Experiences | `Building confidence through discovery` | `…discovery.` (full stop) |
| Community | `Moments to conect and grow together` | `Moments to connect and grow together` |

### 11.2 Spanish translated (§7B)

| Where | Was | Now |
|---|---|---|
| Footer, all pages | `© 2026 Narelo. Todos los derechos reservados.` | `© 2026 Narelo. All rights reserved.` |
| Journal empty state | `Vuelve pronto` / `Una vez que se publiquen entradas, las verás aquí.` | `Check back soon` / `Once posts are published, you'll see them here.` |
| Events empty state | `No hay eventos en este momento` | `There are no events at this time` |
| Contact phone field | `aria-label="Phone number. Teléfono"` | `Phone number` |
| `<html lang>` | `es` | `en` |

### 11.3 Age ranges aligned to the framework (§7C)

Home showed Builders I `3-4`, Builders II `4-5`, Navigators `+5`, contradicting
both the Experiences page and `framework/age-groups.md`. Home now reads
`3 - 5`, `5 - 6`, `6 - 8`. Experiences was already correct and is unchanged.

⚠️ Still open: the framework calls the third group **`The Nest`**; both pages say
`Nest`. Left as the site had it — renaming a canonical group is your call.

### 11.4 Dead interactions made live

| What | Now |
|---|---|
| `BECOME A MEMBER` (all pages) | Links to `/contact` |
| `hello@narelo.es` | `mailto:` link |
| `+34 655 366 888` | `tel:` link |
| Footer `Start Now` → `#SCROLL_TO_TOP` | Removed (it was not a real CTA) |
| Four social icons | **Still dead** — reproduced unlinked. Add URLs in `content/site.ts` |

### 11.5 Structure and accessibility

- **Heading hierarchy rebuilt.** Home had ~30 `<h1>`s; every page now has exactly
  one `<h1>` and a correct outline. **No visible text changed** — only the tags.
- Journal and Events get a screen-reader-only `<h1>`, because the source shows no
  visible page heading and the pages would otherwise have none.
- Decorative images carry empty `alt`; the source exposed filenames like
  `POST - NARELO - 5.PNG` and `ChatGPT Image 18 ago 2026…` as alt text.
- Added a skip-to-content link and visible focus styles.
- Background videos are `aria-hidden` and removed from the tab order.
- `prefers-reduced-motion` disables the fade-up reveals and video autoplay.

### 11.6 Mobile — the source is broken, this clone is not

Captured at 390px against the live site. **The brief permits fixing responsiveness
where the Wix design is clearly broken; these are those cases.**

| Page | What the source does at 390px | This clone |
|---|---|---|
| Home | Hero collapses to ~100px and **the `<h1>` does not render at all** | Full-height hero, heading visible |
| Home | Journey timeline renders as **seven bare dots with no names or ages** | 2-column grid, all names and ages legible |
| Home | "Childhood is not to be rushed" sets text over a bright image, unreadable | Dark overlay added for contrast |
| All | No horizontal overflow at 390px | Verified clean (§12) |

### 11.7 Performance

The source's own media is served at full original resolution, which made first
drafts of this clone 10–22MB per page. Wix serves resized AVIF/WebP derivatives,
so optimising is *closer* to the visitor's real experience, not further from it.

- Originals archived untouched in `assets-source/` (31MB, 33 files).
- `public/images/` holds `.webp` derivatives sized to their rendered dimensions:
  **31.1MB → 2.5MB (92% smaller)**. Regenerate with `npm run optimize-assets`.
- Background videos now load only when scrolled near (`components/LazyVideo.tsx`),
  instead of all downloading up front.

| Page | Images before | Images after |
|---|---|---|
| Home | 7.8MB | 0.4MB |
| Experiences | 14.9MB | 0.5MB |
| Membership | 6.5MB | 0.8MB |
| Community | 3.7MB | 0.8MB |
| Contact | 3.5MB | 0.2MB |

⚠️ **Videos are untouched and are now the bulk of the weight** — the Membership
closing clip alone is 11.2MB at 720p. Re-encoding needs `ffmpeg`, which is not
installed here. Wix offers the same clip at 480p for 4.6MB (60% smaller) if you
accept the quality drop. Your call — I have not changed it.

---

## 12. Verification

Automated check across **7 routes × 2 viewports (1440px and 390px)**, run against
the running site (`scripts` in the session scratchpad; results reproducible):

| Check | Result |
|---|---|
| Horizontal overflow | ✅ none on any page at either width |
| Broken images / videos | ✅ none — every asset returns HTTP 200 |
| Dead internal links | ✅ none — every `/…` href resolves |
| Exactly one `<h1>` per page | ✅ all 7 |
| `meta description` present | ✅ all 7 |
| `og:title` present | ✅ all 7 · `og:image` on the 5 content pages |
| `<html lang>` | ✅ `en` everywhere |
| Lorem ipsum / placeholder / leftover Spanish | ✅ none found |
| Console errors | ✅ none except `/favicon.ico` 404 (see below) |
| Production build | ✅ `next build` clean, 9 static HTML files, 0 warnings |
| `npm audit` | ✅ 0 vulnerabilities |

Side-by-side screenshots were taken of every page against the live Wix page at
both widths and compared; discrepancies found this way drove the rebuilds logged
in §11 and the corrections marked *(corrected during build)*.

**One known 404: `/favicon.ico`.** The Wix site has no favicon either, so there is
nothing to migrate. Choosing one is a brand decision — drop an `icon.png` into
`app/` when the visual identity lands.

---

## 13. Still open — needs a decision from you

| # | Item | Why it needs you |
|---|---|---|
| 1 | Four dead social icons | Need the real WhatsApp / Instagram / TikTok / Facebook URLs. Instagram is `@narelo.eu` per CLAUDE.md but is nowhere on the site |
| 2 | Form backend | UI is rebuilt 1:1 and posts to a stub with `// TODO: connect to form backend`. Static export has no server, so this needs an external endpoint |
| 3 | Form confirmation copy | Not captured — would have required submitting to the live Wix inbox. Ask Natalie/Vivien for the current wording |
| 4 | Export existing form submissions | They live in Wix and are lost if the site is cancelled |
| 5 | `The Nest` vs `Nest` | Canonical framework name differs from the site (§11.3) |
| 6 | Meta descriptions / og:images | Absent on Wix. Currently reusing each page's own opening line rather than inventing copy |
| 7 | Favicon | None exists |
| 8 | Membership video weight | 11.2MB; 480p available at 4.6MB (§11.7) |
| 9 | Three Wix stock assets | `stage-bloom`, the Experiences closing video and the Membership closing video are Wix library media. That licence may not travel off Wix — replace before launch |
| 10 | Positioning conflicts with CLAUDE.md (§7D) | "A PRIVATE MEMBERSHIP" in the hero, subscription-style tier names, and no "first Narelo home" framing. **Untouched — outside the approved fixes** |
| 11 | Domain | `metadataBase` defaults to `https://narelo.es`; set `NEXT_PUBLIC_SITE_URL` for the real one |
