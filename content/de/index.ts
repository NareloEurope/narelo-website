/**
 * German. Mirrors the English in `content/` key for key; the shape is checked
 * against it at build time, so a missing key fails the build.
 *
 * ⚠️ NOT YET READ BY A NATIVE SPEAKER (Vivien, 2026-09-04).
 *
 * Same translation rules as the Spanish in `content/es/`:
 * - Brand names stay in English, because AGENTS.md forbids re-titling them:
 *   Narelo, the Five Worlds (Ocean, Mountain, World Around Us, Expression,
 *   Future), the age groups (Bloom, Nurture, The Nest, Little Beginnings,
 *   Builders I, Builders II, Navigators), Signature Saturdays, Holiday
 *   Experiences, Expert Insights, Community Mornings, Narelo Experiences.
 * - No em dashes, same as the English.
 * - Tone is invitation and wonder, never status.
 * - Paths, images, videos, numbers and contact details are untouched.
 * - The WhatsApp prefill is translated so a German family writes in German.
 *
 * ⚠️ ONE DECISION TO CONFIRM: this uses "Sie", not "du". Spanish and Hungarian
 * are informal because that reads warm in those languages; in German,
 * addressing a stranger as "du" reads presumptuous rather than warm, and "Sie"
 * is the usual register for a private membership. Say the word and it flips.
 */
import type { Dict } from '../dictionary';

export const de: Dict = {
  site: {
    site: {
      name: 'Narelo',
      tagline: 'Eine private Mitgliedschaft für die Kindheit',
      locale: 'de',
      location: 'Marbella, Spanien',
      copyright: '© 2026 Narelo. Alle Rechte vorbehalten.',
    },
    nav: [
      { label: 'Was Narelo ist', href: '/membership/#what' },
      { label: 'Erlebnisse', href: '/experiences/' },
      { label: 'Mitgliedschaft', href: '/membership/' },
      { label: 'Wer wir sind', href: '/membership/#who' },
    ],
    headerCta: { label: 'Beginnen Sie ein Gespräch', external: true },
    footerCta: {
      heading: 'Unser erstes Narelo Zuhause öffnet diesen Herbst in Marbella.',
      subheading: 'Wir beginnen in Marbella. Madrid und Mallorca am Horizont.',
      ctaLabel: 'Beginnen Sie ein Gespräch',
      blurb: 'Ein privater Members Club rund um außergewöhnliche Kindheitserlebnisse.',
    },
    ui: {
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen',
      skipToContent: 'Zum Hauptinhalt springen',
      footerContact: 'Kontakt',
      languageLabel: 'Sprache',
      homeLabel: 'Startseite',
      galleryAlt: 'Ein Moment aus einem Narelo Erlebnis',
      whatToExpect: 'Was Sie erwartet',
      backToTop: 'Nach oben',
    },
    contact: {
      visitLabel: 'Besuchen Sie uns',
      visitName: 'Narelo, Marbella',
      visitNote: 'Nur nach Vereinbarung. Wir würden Sie sehr gern empfangen.',
      emailLabel: 'E-Mail',
      email: 'hello@narelo.es',
      emailHref: 'mailto:hello@narelo.es',
      phoneLabel: 'Anrufen oder per WhatsApp schreiben',
      phone: '+34 655 366 888',
      phoneHref: 'tel:+34655366888',
      whatsapp:
        'https://wa.me/34655366888?text=Hallo%20Narelo%2C%20ich%20w%C3%BCrde%20gern%20mehr%20%C3%BCber%20die%20Mitgliedschaft%20f%C3%BCr%20unsere%20Familie%20erfahren.',
    },
    socialIcons: [
      { src: '/images/social-instagram.webp', label: 'Instagram', href: 'https://instagram.com/narelo.eu' },
      { src: '/images/social-whatsapp.webp', label: 'WhatsApp', href: 'https://wa.me/34655366888?text=Hallo%20Narelo%2C%20ich%20w%C3%BCrde%20gern%20mehr%20%C3%BCber%20die%20Mitgliedschaft%20f%C3%BCr%20unsere%20Familie%20erfahren.' },
      { src: '/images/social-tiktok.webp', label: 'TikTok', href: null },
      { src: '/images/social-facebook.webp', label: 'Facebook', href: null },
    ],
  },

  home: {
    hero: {
      eyebrow: 'Eine private Mitgliedschaft für die Kindheit · Marbella',
      headingLines: ['Kindheit,', 'wirklich gelebt.'],
      lede: 'Narelo ist eine Mitgliedergemeinschaft rund um außergewöhnliche Erlebnisse in der wirklichen Welt, für Kinder von der Schwangerschaft bis etwa zum achten Lebensjahr, und für die Familien, die mit ihnen wachsen.',
      video: '/video/home-hero.mp4',
      poster: '/images/home-hero-poster.webp',
      scrollHint: 'Scrollen',
    },
    belief: {
      eyebrow: 'Woran wir glauben',
      heading: 'Kinder brauchen nicht mehr Programm. Sie brauchen eine reichere Kindheit.',
      body: 'Zwischen Schulwegen, Bildschirmen und vollen Wochen vergeht die Kindheit still im Hintergrund. Wir finden, sie gehört in den Vordergrund: echte Tage, echte Orte, echte Menschen, und die Zeit, sie wirklich aufzunehmen.',
      pull: 'Wir glauben, das größte Geschenk, das wir Kindern machen können, ist eine Kindheit, die sie nicht nur auf die Schule vorbereitet, sondern auf eine Zukunft, die wir uns noch gar nicht vorstellen können.',
      image: '/images/home-moment-to-pause.webp',
      imageAlt: 'Ein Kind hält draußen inne und nimmt etwas in sich auf.',
    },
    statement: {
      lines: ['Kinder kommen wegen der Erlebnisse.', 'Familien bleiben wegen der Gemeinschaft.'],
    },
    shape: {
      eyebrow: 'Wie ein Narelo Tag aufgebaut ist',
      heading: 'Kleine Gruppen. Echte Orte. Niemand in Eile.',
      body: 'Jedes Erlebnis folgt derselben Form, ob es in unserem Haus stattfindet, am Strand oder in den Hügeln hinter der Stadt.',
      facts: [
        { value: '~8', label: 'Kinder in einer Gruppe', note: 'Wenige genug, dass jedes Kind mit Namen gekannt wird und nicht als Teil einer Menge behandelt.' },
        { value: '90', label: 'Minuten miteinander', note: 'Lange genug, um anzukommen, richtig zu erkunden und wieder bei sich zu sein.' },
      ],
      image: '/images/home-not-to-be-rushed.webp',
      imageAlt: 'Eine kleine Gruppe Kinder erkundet gemeinsam, ohne Eile.',
    },
    worlds: {
      eyebrow: 'Die Fünf Welten',
      heading: 'Fünf Arten, der Welt zu begegnen',
      body: 'Unsere Erlebnisse führen durch fünf Welten, inspiriert von der wirklichen Welt um uns herum, und jede öffnet neue Wege zu erkunden, sich zu bewegen, zu gestalten und zu entdecken. Andere Welten. Andere Erlebnisse. Immer etwas Neues zu entdecken.',
      items: [
        { name: 'Ocean', short: 'Das Meer als lebendiger Ort', image: '/images/world-ocean.webp' },
        { name: 'Mountain', short: 'Natur zu ihren eigenen Bedingungen', image: '/images/world-mountain.webp' },
        { name: 'World Around Us', short: 'Türen, die Kinder selten öffnen dürfen', image: '/images/home-world-built-around-childhood.webp' },
        { name: 'Expression', short: 'Ideen eine Form geben', image: '/images/gallery-02.webp' },
        { name: 'Future', short: 'Neugier auf das, was sich verändert', image: '/images/contact-hero.webp' },
      ],
      linkLab: 'Die fünf Welten, vollständig',
      linkHref: '/experiences/#worlds',
    },
    journey: {
      eyebrow: 'Von Anfang an',
      heading: 'Ein Ort, der mit Ihrem Kind wächst',
      body: 'Familien können jederzeit dazukommen. Viele beginnen, bevor ihr Kind geboren ist, und bleiben die Jahre danach.',
      stages: [
        { name: 'Bloom', age: 'Schwangerschaft' },
        { name: 'Nurture', age: '0–1' },
        { name: 'The Nest', age: '1–2' },
        { name: 'Little Beginnings', age: '2–3' },
        { name: 'Builders I', age: '3–5' },
        { name: 'Builders II', age: '5–6' },
        { name: 'Navigators', age: '6–8' },
      ],
      note: 'Fünfjährige werden je nach Entwicklungsstand zwischen Builders I und Builders II eingeordnet, nicht nach dem Geburtsdatum.',
      linkLabel: 'Die Altersgruppen entdecken',
      linkHref: '/experiences/#journey',
    },
    promise: {
      eyebrow: 'Das Narelo Versprechen',
      heading: 'Worauf sich jede Familie verlassen kann',
      image: '/images/membership-beach-background.webp',
      items: [
        { title: 'Jedes Kind wird gekannt', body: 'Kein Name auf einer Liste. Die Pädagoginnen und Pädagogen wissen, woran Ihr Kind arbeitet, was ihm schwerfällt und was es liebt.' },
        { title: 'Kontinuität', body: 'Dieselben Gesichter, dieselbe Gemeinschaft, Jahr für Jahr. Kinder bauen auf dem auf, was vorher war, statt jedes Halbjahr von vorn zu beginnen.' },
        { title: 'Ein geschützter Rahmen', body: 'Wir halten die Gruppen klein und die Gemeinschaft sorgsam zusammen. Das ist es, was alles andere möglich macht.' },
        { title: 'Dazugehören, nicht teilnehmen', body: 'Die Mitgliedschaft ist einer zweiten Familie näher als einem Ort, an dem man sein Kind abgibt. Familien gehören dazu.' },
      ],
    },
    home: {
      eyebrow: 'Marbella',
      heading: 'Wo Narelo beginnt',
      body: 'Auf der einen Seite das Meer, auf der anderen die Berge, und eine Gemeinschaft von Familien, die wir sorgfältig und langsam auswählen. Unser erstes Narelo Zuhause öffnet hier diesen Herbst, und es ist das erste, nicht das letzte.',
      image: '/images/home-discovery.webp',
      imageAlt: 'Die Küste bei Marbella, wo das erste Narelo Zuhause öffnet.',
    },
    closing: {
      headingLines: ['Kindheit', 'geschieht einmal.'],
      body: 'Die Mitgliedschaft öffnet in kleiner Zahl, noch vor unserem ersten Zuhause. Wenn das nach Ihrer Familie klingt, sprechen wir gern.',
      ctaLabel: 'Beginnen Sie ein Gespräch',
    },
  },

  membership: {
    chapters: [
      { id: 'what', label: 'Was Narelo ist' },
      { id: 'experience', label: 'Die Erlebnisse' },
      { id: 'ages', label: 'Altersgruppen' },
      { id: 'how', label: 'Wie es funktioniert' },
      { id: 'who', label: 'Wer wir sind' },
      { id: 'join', label: 'Wie Sie dazukommen' },
    ],
    hero: {
      eyebrow: 'Mitgliedschaft',
      headingLines: ['Dazugehören,', 'nicht buchen.'],
      lede: 'Eine private Mitgliedschaft für Familien, die möchten, dass Kindheit etwas wird, an das ihre Kinder sich wirklich erinnern.',
      image: '/images/membership-hero.webp',
    },
    whatItIs: {
      eyebrow: 'Was Narelo ist',
      heading: 'Eine Mitgliedergemeinschaft rund um außergewöhnliche Erlebnisse',
      body: 'Narelo ist ein privater Members Club rund um außergewöhnliche Kindheitserlebnisse, die Kinder durch Natur, Kreativität, Bewegung und echte Abenteuer wachsen lassen, innerhalb einer Gemeinschaft gleichgesinnter Familien, die miteinander wachsen.',
      body2: 'Mehr als ein Kinderprogramm: Narelo ist eine Mitgliedergemeinschaft, in der Kinder Selbstvertrauen, Eigenständigkeit und echte Verbindungen aufbauen, Eltern durch unsere Fachleute weiterlernen und gleichgesinnte Familien miteinander wachsen, damit Kinder in einer sich ständig verändernden Welt aufblühen können.',
      pull: 'Kinder kommen wegen der Erlebnisse. Familien bleiben wegen der Gemeinschaft.',
      image: '/images/img-1667.webp',
      imageAlt: 'Kinder draußen in der wirklichen Welt bei einem Narelo Erlebnis.',
    },
    isNot: {
      eyebrow: 'Und was es nicht ist',
      items: ['Ein Kurs', 'Eine Kita', 'Ein Spielcenter', 'Noch eine Aktivität'],
      line: 'Narelo ist eine Mitgliedschaft, zu der Ihre Familie gehört.',
    },
    different: {
      eyebrow: 'Was Narelo anders macht',
      items: [
        {
          n: '01',
          title: 'Ein Ort zum Wiederkommen',
          body: 'Keine einmalige Aktivität, sondern eine Konstante durch das Jahr: Erlebnisse, Beziehungen und gemeinsame Momente, zu denen Ihr Kind zurückkehrt.',
        },
        {
          n: '02',
          title: 'Ein Rhythmus, der mitwächst',
          body: 'Von einer Stufe zur nächsten, mit echter Kontinuität, ohne jedes Jahr ein neues Programm suchen zu müssen.',
        },
        {
          n: '03',
          title: 'Gekannt, nicht nur dabei',
          body: 'In kleinen, gleichbleibenden Gruppen wird jedes Kind als Persönlichkeit gesehen, nicht als eines von vielen.',
        },
      ],
    },
    childExperience: {
      eyebrow: 'Was Ihr Kind erlebt',
      heading: 'Echte Orte, kleine Gruppen und die Zeit, in die Tiefe zu gehen',
      body: 'Etwa ab drei Jahren führt das Jahr durch fünf Welten. Jüngere Kinder beginnen mit Bewegung, Sinnen und Verbindung und wachsen in sie hinein.',
      worldsLinkLabel: 'Die fünf Welten, vollständig',
      worldsLinkHref: '/experiences/#worlds',
      note: 'Die Erlebnisse finden in unserem Haus in Marbella statt und weit darüber hinaus: am Strand, im Wald und an echten Orten des Alltags. Bei den jüngeren Gruppen kann ein Elternteil dabei sein; ältere Kinder kommen allein.',
      formatLinkLabel: 'Wie ein Erlebnis aufgebaut ist',
      formatLinkHref: '/experiences/#format',
    },
    ageGroups: {
      eyebrow: 'Von Anfang an',
      heading: 'Ein Ort, der mit Ihrem Kind wächst',
      body: 'Jedes Kind gehört zu einer benannten Gruppe, die mit ihm weitergeht, während es wächst. Familien können jederzeit dazukommen, und viele beginnen, bevor ihr Kind geboren ist.',
      note: 'Fünfjährige werden je nach Entwicklungsstand zwischen Builders I und Builders II eingeordnet, nicht nach dem Geburtsdatum.',
      linkLabel: 'Sehen, was jede Stufe umfasst',
      linkHref: '/experiences/#journey',
    },
    howItWorks: {
      eyebrow: 'Wie die Mitgliedschaft funktioniert',
      heading: 'Eine Mitgliedschaft, ein Platz, der bleibt',
      body: 'Ihr Kind hat einen Platz in seiner Altersgruppe, keinen Termin im Kalender: ein Erlebnis pro Woche, in der wirklichen Welt, mit denselben Pädagoginnen und Pädagogen und demselben kleinen Freundeskreis.',
      items: [
        {
          n: '01',
          title: 'Echte Orte, keine vier Wände',
          body: 'Ein Erlebnis kann die Gruppe an den Strand führen, in den Wald oder zu den Menschen und Handwerken hinter dem Alltag. Wir nennen es Erlebnis und nicht Unterricht, denn genau das bauen wir: Zeit, die Ihr Kind spürt, keinen Stoff, den es absitzt.',
        },
        {
          n: '02',
          title: 'Es wächst mit',
          body: 'Wenn Ihr Kind in die nächste Altersgruppe wechselt, geht die Mitgliedschaft mit. Nichts beginnt von vorn.',
        },
        {
          n: '03',
          title: 'Familien sind auch Mitglieder',
          body: 'Die Gemeinschaftsmorgen, die Expertenrunden und die Treffen sind ebenso für die Eltern wie für die Kinder.',
        },
      ],
      note: 'Die Plätze sind bewusst begrenzt. Die Gruppen bleiben klein, deshalb hat jede Altersgruppe immer nur wenige Familien.',
    },
    included: {
      eyebrow: 'Die Mitgliedschaft umfasst',
      heading: 'Was bekommt Ihre Familie tatsächlich?',
      image: '/images/gallery-04.webp',
      cards: [
        {
          title: 'Die eigene Pädagogin Ihres Kindes, im Austausch mit Ihnen',
          meta: 'Regelmäßige Gespräche unter vier Augen',
          body: 'Wir lernen kennen, was Ihr Kind anzieht, was es herausfordert und wie es wächst, und teilen diesen Weg mit Ihnen in regelmäßigen Gesprächen unter vier Augen.',
        },
        {
          title: 'Ihr Halbjahr, festgehalten und bewahrt',
          meta: 'Ein exklusiver digitaler Rückblick pro Halbjahr',
          body: 'Ein sorgfältig gestalteter, moderner digitaler Rückblick am Ende jedes Halbjahres, der bedeutsame Erlebnisse und Entdeckungen festhält, um sie wieder aufzusuchen.',
        },
        {
          title: 'Die weitere Narelo Welt, die mit Ihnen wächst',
          meta: 'Erlebnisse, Begleitung und Gemeinschaft',
          body: 'Eine Gemeinschaft gleichgesinnter Mitglieder, in der Kinder und Eltern mit der Zeit echte Verbindungen aufbauen.',
        },
      ],
      groups: [
        {
          label: 'Ebenfalls in Ihrer Mitgliedschaft enthalten',
          items: [
            { title: 'Wöchentliche Erlebnisse', body: 'Der feste Platz Ihres Kindes in seiner Altersgruppe, in jeder Woche des Halbjahres.' },
            { title: 'Bevorzugte Buchung', body: 'Zuerst Zugang zu Erlebnissen, Terminen und begrenzten Plätzen, bevor sie weiter geöffnet werden.' },
          ],
        },
        {
          label: 'Für Mitglieder, zum Mitgliedspreis',
          items: [
            { title: 'Signature Saturdays' },
            { title: 'Expert Insights' },
            { title: 'Holiday Experiences' },
            { title: 'Community Mornings' },
            { title: 'Die weitere Narelo Welt' },
          ],
          linkLabel: 'Was jedes davon ist',
          linkHref: '/experiences/',
        },
      ],
    },
    proof: {
      eyebrow: 'Wer dahintersteht',
      heading: 'Natalie und Vivien',
      people: [
        {
          name: 'Natalie Curavic',
          role: 'Gründerin & CEO',
          image: '/images/founder-natalie.webp',
          body: 'Natalie hat einen M.A. in Kulturgeographie und einen MBA der FOM Hochschule für Oekonomie & Management. Seit mehr als 15 Jahren arbeitet sie im Personalwesen, immer mit Blick auf Menschen und darauf, was ihnen hilft zu wachsen und aufzublühen. Sie ist außerdem in pränatalem Yoga ausgebildet. Ihr eigener Weg in die Mutterschaft hat ihr Verständnis dafür vertieft, wie viel Zugehörigkeit, Verbindung und Gemeinschaft bedeuten, nicht nur für Kinder, sondern auch für Eltern.',
          quote: 'Mutter zu werden hat mir diese Frage viel früher gestellt. In einer Welt, die von rasantem technologischem Wandel geprägt ist, wollte ich, dass Kinder echte Erlebnisse haben, die Neugier, Selbstvertrauen, Eigenständigkeit und Verbindung zur Welt um sie herum aufbauen. Aus dieser Idee wurde Narelo.',
        },
        {
          name: 'Vivien Vörös',
          role: 'Mitgründerin & Leitung Pädagogik',
          image: '/images/founder-vivien.webp',
          body: 'Vivien hat Sonderpädagogik an der Eötvös Loránd Universität studiert, mit weiteren Qualifikationen in Logopädie und komplexer Bewegungstherapie. Seit mehr als sieben Jahren arbeitet sie in Schulen, therapeutischen Einrichtungen und Kitas, immer mit demselben Fokus: jedes Kind wirklich kennenzulernen.',
          quote: 'Manche Kinder fallen auf. Ich möchte, dass Narelo der Ort ist, an dem jedes Kind auffällt.',
        },
      ],
    },
    joining: {
      eyebrow: 'Wie Sie dazukommen',
      heading: 'Vier Schritte, und vor allem ein Gespräch',
      steps: [
        { n: '01', title: 'Beginnen Sie ein Gespräch', body: 'Schreiben Sie uns über WhatsApp. Kein Formular, und keine Bewerbung, bevor wir miteinander gesprochen haben.', whatsapp: true },
        { n: '02', title: 'Wir finden den Platz', body: 'Wir fragen, wie alt Ihr Kind ist, und sagen Ihnen, zu welcher Altersgruppe es gehört und welche Plätze offen sind.' },
        { n: '03', title: 'Ein Gespräch mit der Familie', body: 'Fünfzehn bis zwanzig Minuten miteinander: wer Ihre Familie ist, was Sie sich wünschen, und alles, was Sie fragen möchten. Wenn Sie lieber zuerst in Ruhe lesen, schicken wir Ihnen das ganze Bild schriftlich und melden uns danach.' },
        { n: '04', title: 'Eine Einladung', body: 'Wenn es für beide Seiten passt, eine persönliche Einladung, die Mitgliedschaftsvereinbarung und ein Startdatum. Danach ein Willkommen, und das erste Erlebnis Ihres Kindes.' },
      ],
      reassurance: 'Wir halten die Gemeinschaft klein und wählen sorgfältig aus. Nicht um exklusiv zu sein, sondern weil kleine Gruppen und eine eingespielte Gemeinschaft genau der Punkt sind. Wenn in der Altersgruppe Ihres Kindes gerade kein Platz frei ist, nehmen wir Ihre Familie gern auf unsere Warteliste und melden uns persönlich, sobald einer frei wird.',
      whatsappLabel: 'Schreiben Sie uns über WhatsApp',
    },
    closing: {
      headingLines: ['Kommen Sie vorbei', 'und schauen Sie, ob es passt.'],
      body: 'Beginnen Sie mit einer Nachricht, ganz unverbindlich. Einfach ein Gespräch über Ihre Familie.',
      ctaLabel: 'Beginnen Sie ein Gespräch',
      secondaryLabel: 'Oder schreiben Sie uns eine E-Mail',
      video: '/video/membership-closing.mp4',
      poster: '/images/membership-video-poster.webp',
    },
  },

  experiences: {
    hero: {
      eyebrow: 'Erlebnisse',
      headingLines: ['Erlebnisse, die', 'mit Ihrem Kind wachsen'],
      lede: 'Sorgfältig gestaltete Erlebnisse, die zu Neugier, Kreativität und Verbindung einladen, von vor der Geburt Ihres Kindes bis etwa zum achten Lebensjahr.',
      image: '/images/experiences-hero.webp',
    },
    format: {
      eyebrow: 'Die Form eines Erlebnisses',
      heading: 'Neunzig Minuten, ein kleiner Kreis und ein echter Ort',
      body: 'Die Erlebnisse finden in unserem Haus in Marbella statt und weit darüber hinaus: am Strand, im Wald und an den Orten, an denen der Alltag wirklich stattfindet. Nichts wird gehetzt und nichts ist Füllmaterial.',
      body2: 'Kinder erkunden, bewegen sich, fragen, bauen, gestalten und lösen gemeinsam, begleitet von Pädagoginnen und Pädagogen, die wissen, wann sie unterstützen und wann sie Raum lassen, damit Kinder ihren eigenen Weg finden.',
      body3: 'Wir glauben, Kinder brauchen beides: eine starke Verbindung zur wirklichen Welt und das Selbstvertrauen, sich in der kommenden zurechtzufinden. Deshalb dürfen Natur, Bewegung und echte Erlebnisse auf Kreativität, Robotik und KI treffen, immer mit Absicht.',
      pull: 'Verwurzelt in der wirklichen Welt. Bereit für die kommende.',
      facts: [
        { value: '90', label: 'Minuten miteinander', note: 'Lange genug, um anzukommen, richtig zu erkunden und wieder bei sich zu sein.' },
        { value: '~8', label: 'Kinder in einer Gruppe', note: 'Wenige genug, dass jedes Kind mit Namen gekannt wird und nicht als Teil einer Menge behandelt.' },
        { value: '12', label: 'Erlebnisse pro Saison', note: 'Eines pro Woche im Halbjahr, damit das Jahr aufbaut statt neu zu beginnen.' },
      ],
      note: 'Bei den jüngeren Gruppen kann ein Elternteil dabei sein. Ältere Kinder kommen allein.',
      image: '/images/img-5211.webp',
      imageAlt: 'Ein Narelo Erlebnis an einem echten Ort.',
    },
    spark: {
      eyebrow: 'Es kann mit etwas so Kleinem beginnen',
      heading: 'Ein Kind entdeckt etwas Unerwartetes',
      steps: ['Wir halten inne', 'Wir schauen genauer hin', 'Wir staunen gemeinsam', 'Aus Neugier wird Entdeckung'],
      closing: 'Ein kleiner Moment kann der Anfang von etwas viel Größerem sein.',
    },
    worlds: {
      eyebrow: 'Die Fünf Welten',
      heading: 'Fünf Türen, die wir gemeinsam öffnen',
      body: 'Unsere Erlebnisse führen durch fünf Welten, inspiriert von der wirklichen Welt um uns herum, und jede öffnet neue Wege zu erkunden, sich zu bewegen, zu gestalten und zu entdecken. Andere Welten. Andere Erlebnisse. Immer etwas Neues zu entdecken.',
      items: [
        { name: 'Ocean', body: 'Das Meer erkunden über die Sinne, Bewegung, Neugier und echtes Entdecken.' },
        { name: 'Mountain', body: 'Die Natur erkunden über Bewegung, Herausforderung, Beobachtung und Abenteuer.' },
        { name: 'World Around Us', body: 'Das wirkliche Leben entdecken über Menschen, Orte, Berufe, Kultur und alltägliche Erfahrungen.' },
        { name: 'Expression', body: 'Ideen und Entdeckungen in Kunst, Musik, Geschichten, Bauen und Gestalten verwandeln.' },
        { name: 'Future', body: 'Erfindung, Problemlösen und neue Möglichkeiten erkunden, mit Technik, Robotik und KI als Werkzeuge zum Gestalten, nicht als Ersatz für das Denken.' },
      ],
    },
    stages: {
      eyebrow: 'Der Weg',
      heading: 'Ein Weg für jede Stufe',
      body: 'Jedes Kind gehört zu einer benannten Gruppe, die mit ihm weitergeht, während es wächst. Familien können an jedem Punkt dazukommen.',
      note: 'Fünfjährige werden je nach Entwicklungsstand zwischen Builders I und Builders II eingeordnet, nicht nach dem Geburtsdatum.',
    },
    regular: {
      eyebrow: 'Durch das Jahr',
      heading: 'Über das wöchentliche Erlebnis hinaus',
      body: 'Die Mitgliedschaft reicht über die wöchentlichen Erlebnisse Ihres Kindes hinaus. Wir kommen regelmäßig als Gemeinschaft zusammen, Eltern und Kinder gleichermaßen, und Sie haben durchgehend Zugang zu unseren eigenen Fachleuten. Ein Ort, an dem Sie weiterlernen können, über Elternschaft und über sich als Familie.',
      note: 'Jeden Monat öffnen unsere eigenen Fachleute eine Runde für Sie: Ihre, als Teil der Mitgliedschaft. Wenn wir Fachleute von außen einladen, sitzen Mitglieder immer zum Mitgliedspreis dabei.',
      groups: [
        {
          label: 'Teil Ihrer Narelo Welt',
          items: [
            { name: 'Narelo Experiences', body: 'Ein beständiger Ort, um zu erkunden, zu wachsen und mit der Zeit echte Beziehungen aufzubauen.' },
            { name: 'Community Mornings', body: 'Zeit für Familien, sich zu begegnen, zu verbinden und miteinander zu wachsen.' },
            { name: 'Expert Insights', body: 'Gespräche mit Fachleuten über Kindheit, Entwicklung und Familienleben.' },
          ],
        },
        {
          label: 'Auch für Mitglieder buchbar',
          aside: 'und mehr wird folgen',
          items: [
            { name: 'Signature Saturdays', body: 'Besondere Samstagserlebnisse für Entdeckung, Kreativität und Abenteuer.' },
            { name: 'Holiday Experiences', body: 'Sorgfältig gestaltete Erlebnisse in den Schulferien.' },
          ],
        },
      ],
    },
    personalised: {
      eyebrow: 'Über den Alltag hinaus',
      heading: 'Um Ihre Familie herum gestaltet',
      body: 'Über die Mitgliedschaft hinaus gestaltet Narelo auch ausgewählte private Erlebnisse, sorgfältig auf Ihr Kind und Ihre Familie zugeschnitten.',
      items: [
        { name: 'Geburtstagserlebnisse', body: 'Sorgfältig gestaltete Feiern, inspiriert von den Interessen und der Persönlichkeit Ihres Kindes.' },
        { name: 'Private Erlebnisse nach Maß', body: 'Persönliche Erlebnisse, sorgfältig um Ihr Kind und Ihre Familie herum entwickelt.' },
      ],
    },
    closing: {
      headingLines: ['Manche Erlebnisse', 'bleiben.'],
      body: 'Weil das, was Kinder erleben, Teil dessen wird, wer sie werden.',
      ctaLabel: 'Beginnen Sie ein Gespräch',
      video: '/video/experiences-closing.mp4',
      poster: '/images/experiences-video-poster.webp',
    },
  },

  stages: {
    stageDetails: [
      {
        name: 'Bloom',
        age: 'Schwangerschaft',
        tagline: 'Ein sanfter Anfang, bevor Ihr Kind ankommt.',
        summary:
          'Ein ruhiger Raum für werdende Eltern: Zeit zum Langsamerwerden, um andere Familien kennenzulernen und den Narelo Weg zu beginnen, bevor Ihr Kind geboren ist.',
        image: '/images/stage-photo-bloom.webp',
      },
      {
        name: 'Nurture',
        age: '0–1 Jahr',
        tagline: 'Spüren, verbinden und gemeinsam entdecken.',
        motto: 'Ich spüre und entdecke.',
        summary:
          'Ein sicherer, liebevoller Raum, in dem Babys mit ihren Sinnen erkunden, ihren Körper bewegen und die Grundlage für Verbindung, Neugier und Selbstvertrauen aufbauen, gemeinsam mit einem Elternteil.',
        whatToExpect: [
          'Ankommen: Begrüßung, freies Erkunden und sich im Raum einrichten',
          'Verbindung zwischen Eltern und Baby: Lieder, Babymassage, sanfte Bewegung und spielerische Nähe',
          'Sinneserlebnis zum Thema: eine vorbereitete Umgebung, die Babys im eigenen Tempo erkunden',
          'Ruhe und Nachklang: gemeinsam langsamer werden, ruhiges Sinnesspiel und Verbindung',
        ],
        image: '/images/stage-photo-nurture.webp',
      },
      {
        name: 'The Nest',
        age: '1–2 Jahre',
        tagline: 'Die Welt entdecken über Bewegung und wachsende Selbstständigkeit.',
        motto: 'Ich bewege mich und erkunde.',
        summary:
          'Ein aktiver, fröhlicher Raum, in dem Kleinkinder Kraft, Gleichgewicht und Selbstvertrauen über Bewegung, Spiel und Entdecken aufbauen, drinnen und draußen.',
        whatToExpect: [
          'Ankommen und Aufwärmen: Lieder, Bewegung und ein gemeinsames Begrüßungsritual',
          'Bewegungsparcours: klettern, krabbeln, balancieren, schieben, ziehen und springen durch einen vorbereiteten Raum',
          'Erkundung zum Thema: Sinnesspiel, Materialien und offene Angebote',
          'Verbindung in der Gruppe: Spiele, Musik und Geschichten, die soziale Fähigkeiten und Freundschaft aufbauen',
          'Ruhe und Nachklang: Atmen, ein stiller Moment oder eine sanfte Dehnung zum Abschluss',
        ],
        image: '/images/stage-photo-nest.webp',
      },
      {
        name: 'Little Beginnings',
        age: '2–3 Jahre',
        tagline: 'Wachsendes Selbstvertrauen über Neugier, Bewegung und Entdecken.',
        motto: 'Ich entdecke.',
        summary:
          'Erste Abenteuer in den Fünf Welten. Sinnliche, spielerische Erlebnisse, die Neugier wecken, Selbstständigkeit aufbauen und fröhliche Erinnerungen schaffen.',
        whatToExpect: [
          'Sinnliches Erkunden in der Natur und an echten Orten',
          'Spielerisches Lernen über Bewegung und Entdecken',
          'Einfache kreative Erlebnisse und Musik',
          'Tieren begegnen, Texturen und Materialien erkunden',
          'Erste Selbstständigkeit und soziale Verbindungen aufbauen',
        ],
        image: '/images/stage-photo-little-beginnings.webp',
      },
      {
        name: 'Builders I',
        age: '3–5 Jahre',
        tagline: 'Erkunden, gestalten und beginnen, die Welt zu verstehen.',
        motto: 'Ich erkunde und gestalte.',
        summary:
          'Erlebnisse zum Anfassen in den Fünf Welten, die zum Erkunden, Gestalten, Fragen und zur Freude am Machen einladen.',
        whatToExpect: [
          'Naturerkundung und Abenteuer im Freien',
          'Kreative Projekte mit natürlichen und wiederverwendeten Materialien',
          'Bewegung, Yoga und Körperwahrnehmung',
          'Musik, Geschichten, Theater und Fantasiespiel',
          'Gruppenaufgaben, Zusammenarbeit und Problemlösen',
        ],
        image: '/images/gallery-02.webp',
      },
      {
        name: 'Builders II',
        age: '5–6 Jahre',
        tagline: 'Fragen, gestalten und Ideen in etwas Wirkliches verwandeln.',
        motto: 'Ich erforsche und baue.',
        summary:
          'Tiefere Erkundungen und Erlebnisse in der wirklichen Welt, die Denken, Zusammenarbeit und wachsende Selbstständigkeit fördern.',
        whatToExpect: [
          'Vertiefte Erkundungen in Natur und Umgebung',
          'Kleine Projekte, Experimente und Kreationen',
          'Fordernde Bewegung und Aktivitäten im Freien',
          'Fachleuten begegnen, inspirierende Orte besuchen',
          'Planen, nachdenken und Ideen teilen',
        ],
        image: '/images/home-not-to-be-rushed.webp',
      },
      {
        name: 'Navigators',
        age: '6–8 Jahre',
        tagline: 'Wachsende Selbstständigkeit, Probleme lösen und den eigenen Weg finden.',
        motto: 'Ich gehe tiefer und finde meinen Weg.',
        summary:
          'Erlebnisse, die Neugier, Widerstandskraft und Sinn aufbauen, während Kinder in ihre eigene Selbstständigkeit hineinwachsen.',
        whatToExpect: [
          'Abenteuer in der wirklichen Welt und längere Erkundungen',
          'Recherche, Projekte und kreativer Ausdruck',
          'Führung, Zusammenarbeit und Wirkung in der Gemeinschaft',
          'Körperliche Herausforderungen und Können aufbauen',
          'Nachdenken, Ziele setzen und persönliches Wachstum',
        ],
        image: '/images/world-mountain.webp',
      },
    ],
  },

  community: {
    hero: {
      headingLine1: 'Eine Gemeinschaft, die',
      headingLine2: 'mit Ihnen wächst',
      image: '/images/community-hero.webp',
    },
    testimonials: [
      { quote: '“Die Kinder hatten eine wunderbare Zeit und waren die ganze Feier über voll dabei”', attribution: '- MARÍA · NARELO FAMILIE' },
      { quote: '“Meine Tochter freut sich auf jedes Erlebnis. Und ich auch.”', attribution: '- TESSA · NARELO FAMILIE' },
    ],
    gallery: [
      { src: '/images/gallery-01.webp', n: '01' },
      { src: '/images/gallery-02.webp', n: '02' },
      { src: '/images/family-whatsapp-091957.webp', n: '03' },
      { src: '/images/gallery-04.webp', n: '04' },
      { src: '/images/gallery-05.webp', n: '05' },
      { src: '/images/img-5208.webp', n: '06' },
    ],
    belong: {
      heading: 'Ein Ort zum Dazugehören',
      body: 'Wo Kinder wachsen, Familien sich verbinden und Erinnerungen gemeinsam entstehen.',
    },
    events: {
      heading: 'Momente, um sich zu verbinden und miteinander zu wachsen',
      body: 'Gemeinschaftserlebnisse, die Familien zusammenbringen, zum Lernen, Teilen und für Momente mit Bedeutung.',
      ctaLabel: 'ALLE TERMINE',
      ctaHref: '/events',
      emptyState: 'Zurzeit sind keine Termine geplant',
      video: '/video/community-band.mp4',
      poster: '/images/community-video-poster.webp',
    },
    journalTeaser: {
      heading: 'Wissen, das Sie begleitet',
      body: 'Durchdachte Einblicke und fachliche Perspektiven für das heutige Familienleben.',
      ctaLabel: 'JOURNAL',
      ctaHref: '/journal',
    },
  },

  pages: {
    contactPage: {
      heading: 'Wir würden gern von Ihnen hören.',
      sub: 'Wir sind da, um Ihre Fragen zu beantworten und mit Ihnen das passende Erlebnis für Ihre Familie zu finden.',
      formHeading: 'Erzählen Sie uns ein wenig von sich',
      submitLabel: 'SENDEN',
      image: '/images/contact-hero.webp',
      video: '/video/contact-band.mp4',
      poster: '/images/contact-video-poster.webp',
      fields: [
        { name: 'name', label: 'Name', type: 'text', required: true, autoComplete: 'name' },
        { name: 'email', label: 'E-Mail', type: 'email', required: true, autoComplete: 'email' },
        { name: 'phone', label: 'Telefonnummer', type: 'tel', required: true, autoComplete: 'tel' },
        { name: 'message', label: 'Erzählen Sie uns, wonach Sie suchen…', type: 'textarea', required: true, autoComplete: 'off' },
      ],
    },
    journalPage: {
      title: 'Journal',
      tabLabel: 'Alle Beiträge',
      emptyHeading: 'Schauen Sie bald wieder vorbei',
      emptyBody: 'Sobald Beiträge veröffentlicht sind, finden Sie sie hier.',
    },
    eventsPage: {
      title: 'Termine',
      emptyHeading: 'Zurzeit sind keine Termine geplant',
    },
  },
};
