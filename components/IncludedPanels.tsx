import Link from 'next/link';

type Item = {
  readonly title: string;
  /** The small line the dossier prints under a title, e.g. "Members only, year after year". */
  readonly meta?: string;
  readonly body?: string;
};
type Group = {
  readonly label: string;
  readonly items: readonly Item[];
  /** Where the things in this group are explained, when they are not here. */
  readonly linkLabel?: string;
  readonly linkHref?: string;
};

/**
 * What comes with membership, in two groups: what it already includes, and
 * what members can additionally book at member rates.
 *
 * Both groups are panels now (Vivien, 2026-09-07). The first one became a
 * panel because it used to be a quiet eyebrow over collapsed rows, so the
 * things a family actually gets were the faintest part of the section and
 * half of them were hidden behind a plus. The second one then had the
 * opposite problem: left as bare rows over a photograph it all but
 * disappeared, so it now sits on the same panel, same marks, same weight.
 *
 * Both panels are the same linen, on purpose. What tells them apart is the
 * mark against each line, filled for what you already have and hollow for
 * what you can add, and the label at the top of each. Not one of them being
 * faint.
 *
 * Nothing here expands any more, so nothing is interactive and this is a
 * plain server component. It was an accordion until both groups became
 * panels; the file was renamed with it.
 */
export default function IncludedPanels({ groups }: { groups: readonly Group[] }) {
  const [lead, ...rest] = groups;

  return (
    <div className="flex flex-col gap-8">
      {lead && <Panel group={lead} tone="included" />}
      {rest.map((group) => (
        <Panel key={group.label} group={group} tone="extra" />
      ))}
    </div>
  );
}

/**
 * One group as a panel: everything visible, nothing to click. Items without a
 * body simply have no paragraph, which is how the member-rate group reads,
 * those are explained once on the Experiences page and the link goes across.
 */
function Panel({ group, tone }: { group: Group; tone: 'included' | 'extra' }) {
  const included = tone === 'included';

  return (
    <div
      className="rounded-[2px] bg-linen p-8 shadow-[0_18px_40px_-30px_rgba(43,32,24,0.45)] ring-1 ring-forest/15 md:p-11 fade"
      data-reveal
    >
      <p className="eyebrow mb-2 text-olive">{group.label}</p>
      <div className="mb-9 h-px w-12 bg-olive/40" aria-hidden="true" />

      <ul className={`grid gap-x-12 sm:grid-cols-2 ${included ? 'gap-y-9' : 'gap-y-6'}`}>
        {group.items.map((item) => (
          <li key={item.title} className="flex gap-4">
            {/* Filled for what you already have, hollow for what you can add. */}
            <span
              className={`mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full ${
                included ? 'bg-olive' : 'border border-olive'
              }`}
              aria-hidden="true"
            />
            <div>
              <h3 className="display text-xl text-ink md:text-2xl">{item.title}</h3>
              {item.meta && <p className="eyebrow mt-2 text-olive">{item.meta}</p>}
              {item.body && <p className="body-copy mt-3 text-ink-soft">{item.body}</p>}
            </div>
          </li>
        ))}
      </ul>

      {group.linkLabel && group.linkHref && (
        <Link href={group.linkHref} className="link-line eyebrow mt-9 inline-block text-ink">
          {group.linkLabel}
        </Link>
      )}
    </div>
  );
}
