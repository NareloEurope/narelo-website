/**
 * The Family Guide in Spanish: the strings that exist only on this page.
 *
 * Everything the guide shares with the rest of the site, the age groups, the
 * founders, the five worlds, what membership includes, the small-moment
 * steps, comes from `content/es/index.ts`, which a native speaker read and
 * rewrote (Translation Review V3, 2026-09-08). Only the words below are new,
 * because they exist nowhere else on the site.
 *
 * ⚠️ THESE STRINGS HAVE NOT BEEN READ BY A NATIVE SPEAKER (2026-09-24).
 * They are a first Spanish draft, written to the same rules the reviewer
 * worked to, and they need the same editorial pass the rest of the Spanish
 * had before this page is sent to a Spanish family. This is the house rule
 * that keeps German and Hungarian switched off, and it applies here too.
 *
 * Translation rules followed, the same ones content/es/index.ts lists:
 * - Brand names stay in English: Narelo, Narelo Early, Narelo Explore, the
 *   age groups, the Five Worlds, Narelo Experiences, Expert Insights,
 *   Signature Saturdays, Holiday Experiences, Celebration Experiences,
 *   Private Experiences, Founding Families.
 * - No em dashes, same as the English.
 * - Tú, not usted. Warmer, and right for families.
 * - Every call to action reads "Hablemos", never a literal rendering of
 *   "Start a conversation".
 * - Prices, dates, paths and contact details are untouched.
 *
 * Two judgement calls worth a reviewer's eye:
 * - "Family Guide" on the cover becomes "Guía para familias". It describes
 *   the document rather than naming a Narelo offering, so it is translated.
 * - "OECD" becomes "OCDE", the name that organisation actually uses in
 *   Spanish.
 */
import type { FamilyGuide } from '../family-guide';

export const es: FamilyGuide = {
  hero: {
    eyebrow: 'Guía para familias',
    image: '/images/img-5208.webp',
    imageAlt: 'Tres niños en una duna al atardecer, contemplando el mar.',
  },

  research: {
    eyebrow: 'Nuestra mirada sobre la infancia',
    headline: ['No creamos un mundo para los niños.', 'Les abrimos el mundo real.'],
    label: 'Por qué Narelo',
    lede: ['Algunas cosas se aprenden.', 'Otras hay que vivirlas.'],
    body: 'Los niños crecen hacia un mundo que no podemos predecir del todo. Además de todo lo que aprenden en el colegio, con sus aficiones y de las personas que los rodean, también necesitan oportunidades para vivir las cosas por sí mismos.',
    capability:
      'Moverse, crear, explorar, tomar decisiones, resolver problemas, colaborar, adaptarse y descubrir de lo que son capaces.',
    close: 'Ahí es donde entra Narelo.',
    citationsLabel: 'Nos apoyamos en',
    citations: ['MIT y Stanford', 'Harvard', 'OCDE', 'Investigación sobre la Generación Beta'],
  },

  worldChapter: {
    heading: 'El mundo de Narelo',
    whatIsLabel: '¿Qué es Narelo?',
    whatIs:
      'Un club privado de socios construido en torno a experiencias de infancia extraordinarias, que ayudan a los niños a crecer a través de la naturaleza, la creatividad, el movimiento y las aventuras de la vida real.',
    pull: 'Creemos que el mayor regalo que podemos dar a los niños es una infancia que los prepare no solo para el colegio, sino para un futuro que todavía no podemos imaginar.',
    more:
      'Más que un programa infantil, Narelo es una comunidad de socios donde los niños ganan confianza, independencia y vínculos que importan, los padres siguen aprendiendo con nuestros expertos y familias afines crecen juntas, preparando a los niños para desenvolverse en un mundo que cambia sin parar.',
    whoLabel: '¿Quién está detrás?',
  },

  differentChapter: {
    heading: 'Qué hace diferente a Narelo',
    lede: 'No es otra actividad más. Es una forma más amplia de crecer.',
    columns: [
      [
        'Narelo no gira en torno a una materia, un deporte o una habilidad.',
        'A través de experiencias muy variadas y reales, los niños se ponen a prueba en lo físico, lo creativo, lo social y lo personal.',
        'Vuelven semana tras semana, en grupos reducidos y con educadores conocidos, para que las experiencias, los vínculos y las capacidades se construyan con el tiempo.',
      ],
      [
        'Detrás de cada experiencia hay una intención. Pensamos en qué puede darle esa experiencia al niño: confianza, independencia, creatividad, resiliencia, colaboración, capacidad de resolver problemas o, sencillamente, el valor de probar algo nuevo.',
      ],
    ],
    contrast: {
      fromLabel: 'No nos preguntamos solo',
      from: '¿Qué actividad hacemos?',
      toLabel: 'Nos preguntamos',
      to: '¿Qué puede darle esta experiencia al niño?',
    },
    why: {
      label: 'Por qué importa',
      body: [
        'No podemos preparar a los niños para cada situación que encontrarán en el futuro.',
        'Pero sí podemos darles muchas oportunidades de pensar por sí mismos, moverse en lo desconocido, probar, ajustar y encontrar su propio camino.',
      ],
      pull: 'Porque saber algo es una cosa. Saber qué hacer cuando no hay una respuesta evidente es otra.',
    },
    families: {
      label: 'Para las familias',
      heading: ['Tiempo para ellos.', 'Tiempo para ti.'],
      body: [
        'Narelo crea experiencias que los niños esperan con ganas y, al mismo tiempo, da a los padres un tiempo de confianza con el que pueden contar.',
        'Desde las experiencias semanales hasta los sábados, las vacaciones escolares, los cumpleaños, los eventos privados y las Private Experiences individuales, las familias pueden contar con Narelo siempre que quieran que el tiempo de su hijo sea algo más que tiempo ocupado.',
      ],
      pull: 'Tú recuperas tiempo. Ellos reciben experiencias que les devuelven algo.',
    },
  },

  experienceChapter: {
    heading: 'La experiencia Narelo',
    whatLabel: '¿Qué vivirá mi hijo exactamente?',
    intro:
      'Las Narelo Experiences son sesiones de 90 minutos en grupos reducidos por edad, de unos ocho niños: doce experiencias por temporada, una por cada semana del trimestre. Cada experiencia es distinta, pero todas siguen el mismo principio Narelo.',
    journeyEyebrow: '¿Dónde empieza el viaje de tu familia?',
    worldsLabel: 'Cinco mundos por explorar',
  },

  membershipChapter: {
    heading: 'Formar parte de Narelo',
    receiveLabel: '¿Qué recibe tu familia exactamente?',
    heartEyebrow: 'El corazón de la membresía',
    heartHeading: 'Experiencias semanales, todo el año',
    heartFacts: ['Del embarazo a los ocho años', 'Grupos reducidos de ocho', '90 minutos'],
    includesLabel: 'La membresía incluye',
    alsoEnjoy: {
      label: 'Los socios disfrutan además de',
      items: [
        'Signature Saturdays',
        'Expert Insights',
        'Celebration Experiences',
        'Holiday Experiences',
        'Private Experiences',
      ],
      note: 'Los socios reservan primero, con tarifas especiales, antes que nadie de fuera del club.',
      experts:
        'Cada mes, nuestros propios expertos abren una sesión para ti, incluida en la membresía. Cuando invitamos a especialistas de fuera, los socios siempre tienen tarifas preferentes.',
    },
  },

  pricing: {
    heading: 'Tu membresía',
    eyebrow: 'Membresía · 2026',
    lede: 'Un precio. Un pago. Doce experiencias.',
    intro: 'Cada semana, una tarde que tu hijo recordará, del embarazo a los ocho años',
    perWeekLabel: 'Por semana',
    tiers: [
      {
        name: 'Narelo Early',
        groups: 'Bloom · Nurture · The Nest · Little Beginnings',
        who: 'Contigo · hasta los 3 años',
        price: '50 €',
        summary: '600 € por temporada · doce experiencias · un solo pago por adelantado',
        tone: 'forest',
      },
      {
        name: 'Narelo Explore',
        groups: 'Builders I · Builders II · Navigators',
        who: 'Su propia aventura · de 3 a 8 años',
        price: '60 €',
        summary: '720 € por temporada · doce experiencias · un solo pago por adelantado',
        tone: 'sand',
      },
    ],
    simple: {
      label: 'Sencillo, a propósito',
      promises: [
        { title: 'Un día fijo de la semana', body: 'en el grupo que corresponde a la edad de tu hijo' },
        { title: 'Un pago por temporada', body: '600 € o 720 €, nada más hasta que termine' },
        {
          title: 'Quedaos el tiempo que queráis',
          body: 'se renueva automáticamente; puedes dejarlo hasta 14 días antes de la última experiencia',
        },
      ],
    },
    facts: [
      { label: 'Founding Families', value: '10 % de por vida' },
      { label: 'Cuota de alta', value: '99 €' },
      { label: 'Expert Insights', value: 'Incluido' },
    ],
    footnote:
      'Precio Founding para las primeras 50 familias: 45 € / 54 € por semana, mientras la membresía continúe sin interrupción. Por niño, IVA del 21 % incluido. Sin cuotas mensuales, sin domiciliación y sin compromiso anual.',
  },

  /* Keyed by the stage name in content/stages.ts, which is a brand name and
     stays in English in every language. */
  journeyNotes: {
    Nurture: {
      label: 'Un tema nuevo cada semana',
      body: 'Cada experiencia tiene su propio mundo, preparado para esta edad: un spa para bebés, un viaje sensorial por el espacio, una mañana con animales de granja. Algo nuevo que descubrir cada semana, siempre con las mismas caras conocidas.',
    },
  },

  reserve: {
    eyebrow: 'Las membresías Founding están limitadas a 50 familias',
    heading: 'Reserva el lugar de tu familia',
    body: 'Si Narelo encaja con tu familia, el siguiente paso es sencillo: una conversación.',
    steps: ['Escríbenos', 'Vemos si encaja', 'Una conversación breve', 'Una invitación'],
    /* House rule: every call to action reads "Hablemos". */
    ctaLabel: 'Hablemos',
    instagramLabel: '@narelo.europe',
    manifesto: 'Queremos fortalecer la conexión humana a través de experiencias reales, en la naturaleza.',
    tagline: 'Niños hoy. Un mañana más luminoso.',
  },
};
