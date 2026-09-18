/**
 * Age-group stage details. The Experiences page renders the full
 * StageAccordion (name, motto, summary and the "what to expect" list);
 * Membership shows only the one-line tagline per stage and links across to
 * Experiences for the rest (Rui, 2026-08-29: the full breakdown repeated on
 * both pages was too much for a page meant to read in 60-90 seconds).
 *
 * Names and ages are canonical (framework/age-groups.md). Mottos and
 * summaries for Nurture and The Nest are transcribed from Rui's stage briefs
 * (assets-source/stage-briefs/, 2026-08-26), which also supplied their photos.
 *
 * Nurture and The Nest use their own stage briefs, including the session
 * steps under "How a session looks" as their what-to-expect list.
 *
 * Little Beginnings, Builders I, Builders II and Navigators come from the
 * four-groups chart (assets-source/stage-briefs/four-groups-chart.jpeg,
 * 2026-08-27): mottos, summaries and "what to expect" lists transcribed
 * verbatim. Photos are unchanged, per Rui.
 *
 * TODO: Bloom is the only stage still without a brief. Its summary is
 * provisional and it carries no motto or list.
 *
 * Taglines refreshed from Vivien's feedback pass (2026-08-31); names and
 * ages are unchanged.
 *
 * Woodwork and real tools, at an age-appropriate level, added to Builders I,
 * Builders II and Navigators' "what to expect" lists (Vivien, 2026-09-19),
 * supplied directly rather than transcribed from a stage brief.
 *
 * `shortSummary` (Vivien, 2026-09-19) is a condensed rewrite of `summary`
 * for the dossier's compact per-stage card, which asked for something
 * shorter and more scannable than the Experiences page's fuller paragraph.
 * Same facts, fewer words: nothing here says anything `summary` does not.
 * The Experiences page's StageAccordion keeps using the full `summary`.
 *
 * House style: no em dashes in published copy.
 */

export type Stage = {
  name: string;
  age: string;
  tagline: string;
  motto?: string;
  summary: string;
  /**
   * A shorter rewrite of `summary`, for compact contexts like the dossier's
   * card. Optional, not because English ever omits it, but because `Stage`
   * is shared with the translated `content/es/`, `content/de/` and
   * `content/hu/` stage lists, which the dossier does not use (it is
   * English only) and so do not carry a translation of this field.
   */
  shortSummary?: string;
  /** "What to expect" bullets from the stage brief, where one exists. */
  whatToExpect?: readonly string[];
  image: string;
};

export const stageDetails: readonly Stage[] = [
  {
    name: 'Bloom',
    age: 'Pregnancy',
    tagline: 'A gentle beginning, before your child arrives.',
    summary:
      'A calm space for expecting mothers: time to slow down, connect with other women, and begin the Narelo journey before your child is born.',
    shortSummary: 'A calm space for expecting mothers to slow down and connect, before your child is born.',
    /*
     * Pregnant woman, eyes closed, in white, sitting cross-legged in soft
     * light, hands resting on her belly. Supplied by Vivien (2026-09-07),
     * replacing the earlier Bloom photograph. Source not confirmed.
     */
    image: '/images/stage-photo-bloom.webp',
  },
  {
    name: 'Nurture',
    age: '0–1 year',
    tagline: 'Sensing, connecting and discovering together.',
    motto: 'I sense and discover.',
    summary:
      'A safe, loving space where babies explore with their senses, move their bodies and build the foundation for connection, curiosity and confidence, together with their parent.',
    shortSummary: 'A safe space where babies explore, move and connect, together with their parent.',
    whatToExpect: [
      'Welcome and settle: arrival, greeting, free exploration and settling in the space',
      'Parent and baby connection: songs, baby massage, gentle movement and playful bonding',
      'Sensory theme experience: a prepared environment babies explore at their own pace',
      'Calm and reflect: a moment to slow down together, quiet sensory play and connection',
    ],
    /*
     * Babies and parents on the floor around sensory trays, the Narelo
     * banner behind them. Supplied by Vivien (2026-09-07), replacing the
     * wide strip that was here. Source not confirmed.
     */
    image: '/images/stage-photo-nurture.webp',
  },
  {
    name: 'The Nest',
    age: '1–2 years',
    tagline: 'Exploring the world through movement and growing independence.',
    motto: 'I move and explore.',
    summary:
      'An active, joyful space where toddlers build strength, balance and confidence through movement, play and discovery, indoors and out in the world.',
    shortSummary: 'An active space where toddlers build strength and confidence through movement and play.',
    whatToExpect: [
      'Welcome and warm up: songs, movement and a hello ritual together',
      'Movement circuit: climb, crawl, balance, push, pull and jump through a prepared space',
      'Theme exploration: sensory play, materials and open-ended invitations',
      'Group connection: games, music and stories that build social skills and friendship',
      'Calm and reflect: breathing, a quiet moment or a gentle stretch to close',
    ],
    /*
     * Toddlers climbing over fallen logs in a sunlit wood. Supplied by
     * Vivien (2026-09-07); source not confirmed.
     */
    image: '/images/stage-photo-nest.webp',
  },
  {
    name: 'Little Beginnings',
    age: '2–3 years',
    tagline: 'Growing confidence through curiosity, movement and discovery.',
    motto: 'I discover.',
    summary:
      'First adventures in the Five Worlds. Sensory, playful experiences that spark curiosity, build independence and create joyful memories.',
    shortSummary: 'First adventures in the Five Worlds: playful experiences that spark curiosity and independence.',
    whatToExpect: [
      'Sensory exploration in nature and real environments',
      'Play-based learning through movement and discovery',
      'Simple creative experiences and music',
      'Meeting animals, exploring textures and materials',
      'Building early independence and social connections',
    ],
    image: '/images/stage-photo-little-beginnings.webp',
  },
  {
    name: 'Builders I',
    age: '3–5 years',
    tagline: 'Exploring, creating and making sense of the world.',
    motto: 'I explore and create.',
    summary:
      'Hands-on experiences in the Five Worlds that encourage exploration, creativity, questioning and the joy of making.',
    shortSummary: 'Hands-on experiences in the Five Worlds: exploration, creativity and the joy of making.',
    whatToExpect: [
      'Nature exploration and outdoor adventures',
      'Creative projects with natural and recycled materials',
      'Movement, yoga and body awareness',
      'Music, stories, drama and imaginative play',
      'Group challenges, teamwork and problem solving',
      'Building and creating with wood and natural materials, using real tools at an age-appropriate level',
    ],
    image: '/images/gallery-02.webp',
  },
  {
    name: 'Builders II',
    age: '5–6 years',
    tagline: 'Questioning, creating and turning ideas into something real.',
    motto: 'I investigate and build.',
    summary:
      'Deeper investigations and real-world experiences that develop thinking, collaboration and growing independence.',
    shortSummary: 'Deeper investigations that build thinking, collaboration and independence.',
    whatToExpect: [
      'In-depth nature and place-based investigations',
      'Small projects, experiments and creations',
      'Challenging movement and outdoor activities',
      'Meeting experts, visiting inspiring places',
      'Planning, reflecting and sharing ideas',
      'Building and creating with wood and natural materials, using real tools at an age-appropriate level',
    ],
    image: '/images/home-not-to-be-rushed.webp',
  },
  {
    name: 'Navigators',
    age: '6–8 years',
    tagline: 'Growing independence, solving problems and finding their own way.',
    motto: 'I go deeper and find my way.',
    summary:
      'Experiences that build curiosity, resilience and purpose, as children grow into their own independence.',
    shortSummary: 'Experiences that build curiosity, resilience and independence.',
    whatToExpect: [
      'Real-world adventures and longer explorations',
      'Research, projects and creative expression',
      'Leadership, collaboration and community impact',
      'Physical challenges and skill-building',
      'Reflection, goal setting and personal growth',
      'Building and creating with wood and natural materials, using real tools at an age-appropriate level',
    ],
    /*
     * Four children running towards the camera through a sunlit wood.
     * Supplied by Vivien (2026-09-07); source not confirmed. It replaces the
     * borrowed Mountain world photograph, which was standing in here.
     */
    image: '/images/stage-photo-navigators.webp',
  },
] as const;
