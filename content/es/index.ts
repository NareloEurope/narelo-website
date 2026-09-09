/**
 * Spanish. Mirrors the English in `content/` key for key; the shape is checked
 * against it at build time, so a missing key fails the build.
 *
 * ✅ READ AND REWRITTEN BY A NATIVE SPEAKER (Translation Review V3, 2026-09-08,
 * brought in by Vivien). Every visible string on Home, Experiences, Membership
 * and Who we are now carries the reviewer's wording. This was the editorial
 * pass AGENTS.md had been asking for, not a proofread: sentences were rebuilt,
 * not corrected.
 *
 * Where the review and the current English disagreed, the English won, because
 * the English changed after the review was written:
 * - "Sin prisas. Sin relleno." is only "Sin prisas." now.
 * - The group size is 8, not ~8.
 *
 * Departures from the review, all noted for the team:
 * - Brand names stay in English, because AGENTS.md forbids re-titling them.
 *   The review translated several (Mañanas en comunidad, Consejos de expertos
 *   Narelo, Charlas con expertos invitados, Experiencias en vacaciones); the
 *   English names are kept and the review's sentences describe them.
 * - Role titles stay in Spanish. The review shows them in English, but it
 *   shows them as section labels rather than as a translation decision.
 * - "Entorno a la infancia" in the hero eyebrow is "en torno a la infancia".
 * - The home group-size note borrows the review's own clearer construction
 *   from the Experiences page ("Grupos lo suficientemente reducidos"), because
 *   "suficientemente chicos" next to "niños" reads as "boys" in Spain.
 * - "Un lugar que crece con tu hijo" on both Home and Membership. The review
 *   says "espacio" on one and "lugar" on the other for the same English line.
 * - The Narelo Promise keeps its closing "Las familias también forman parte.",
 *   which the review dropped.
 *
 * Translation rules followed here:
 * - Brand names stay in English: Narelo, the Five Worlds (Ocean, Mountain,
 *   World Around Us, Expression, Future), the age groups (Bloom, Nurture, The
 *   Nest, Little Beginnings, Builders I, Builders II, Navigators), Signature
 *   Saturdays, Holiday Experiences, Expert Insights, Community Mornings,
 *   Narelo Experiences.
 * - No em dashes, same as the English.
 * - Tone is invitation and wonder, never status.
 * - Usted vs tú: tú throughout, warmer and right for families.
 * - Paths, images, videos, numbers and contact details are untouched.
 * - The WhatsApp prefill is translated so a Spanish family writes in Spanish.
 */
import type { Dict } from '../dictionary';

export const es: Dict = {
  site: {
    site: {
      name: 'Narelo',
      tagline: 'Una comunidad privada en torno a la infancia',
      locale: 'es',
      location: 'Marbella, España',
      copyright: '© 2026 Narelo. Todos los derechos reservados.',
    },
    nav: [
      { label: 'Qué es Narelo', href: '/membership/#what' },
      { label: 'Experiencias', href: '/experiences/' },
      { label: 'Membresía', href: '/membership/' },
      { label: 'Quiénes somos', href: '/who-we-are/' },
    ],
    headerCta: { label: 'Hablemos', external: true },
    footerCta: {
      heading: 'Nuestro primer espacio Narelo abre en Marbella este otoño.',
      subheading: 'Comenzamos en Marbella. Madrid y Mallorca como próximos destinos.',
      ctaLabel: 'Hablemos',
      blurb: 'Una comunidad privada para familias, creada en torno a experiencias de infancia extraordinarias.',
    },
    ui: {
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      skipToContent: 'Ir al contenido principal',
      footerContact: 'Contacto',
      languageLabel: 'Idioma',
      homeLabel: 'inicio',
      galleryAlt: 'Un momento de una experiencia Narelo',
      whatToExpect: 'Qué esperar',
      backToTop: 'Volver arriba',
      closePortrait: 'Cerrar',
      legalLabel: 'Aviso legal',
    },
    contact: {
      visitLabel: 'Visítanos',
      visitName: 'Narelo, Marbella',
      visitNote: 'Solo con cita previa. Nos encantaría recibirte.',
      emailLabel: 'Email',
      email: 'hello@narelo.es',
      emailHref: 'mailto:hello@narelo.es',
      phoneLabel: 'Llámanos o escríbenos por WhatsApp',
      phone: '+34 655 366 888',
      phoneHref: 'tel:+34655366888',
      whatsapp:
        'https://wa.me/34655366888?text=Hola%20Narelo%2C%20me%20encantar%C3%ADa%20saber%20m%C3%A1s%20sobre%20la%20membres%C3%ADa%20para%20mi%20familia.',
    },
    socialIcons: [
      { src: '/images/social-instagram.webp', label: 'Instagram', href: 'https://instagram.com/narelo.europe' },
      { src: '/images/social-whatsapp.webp', label: 'WhatsApp', href: 'https://wa.me/34655366888?text=Hola%20Narelo%2C%20me%20encantar%C3%ADa%20saber%20m%C3%A1s%20sobre%20la%20membres%C3%ADa%20para%20mi%20familia.' },
      { src: '/images/social-tiktok.webp', label: 'TikTok', href: null },
      { src: '/images/social-facebook.webp', label: 'Facebook', href: null },
    ],
  },

  home: {
    hero: {
      eyebrow: 'Una comunidad privada en torno a la infancia · Marbella',
      headingLines: ['Una infancia que', 'de verdad se vive.'],
      lede: 'Narelo es una comunidad privada para familias, creada alrededor de experiencias extraordinarias del mundo real. El recorrido comienza desde el embarazo y acompaña a los niños hasta los 8 años.',
      video: '/video/home-hero.mp4',
      poster: '/images/home-hero-poster.webp',
      scrollHint: 'Desliza',
    },
    belief: {
      eyebrow: 'Nuestra filosofía',
      heading: 'Los niños no necesitan más actividades. Necesitan una infancia más rica.',
      body: 'Entre las idas y venidas del colegio, las pantallas y la rutina ajetreada, la infancia pasa desapercibida. Creemos que se merecen el foco: días reales, sitios reales, personas reales, y el tiempo de disfrutarlo.',
      pull: 'Creemos que el mayor regalo que le podemos ofrecer a los niños es una infancia que les prepare, no solo para el colegio, sino también para un futuro que no podemos ni imaginar.',
      image: '/images/home-moment-to-pause.webp',
      imageAlt: 'Un niño que se detiene al aire libre y se toma su tiempo.',
    },
    statement: {
      lines: ['Los niños vienen por las experiencias.', 'Las familias se quedan por la comunidad.'],
    },
    shape: {
      eyebrow: 'Cómo se construye un día en Narelo',
      heading: 'Grupos reducidos. Espacios reales. Sin prisa.',
      body: 'Cada experiencia se elabora con el mismo pensamiento, da igual que sea dentro de nuestra casa, en la playa o en las montañas.',
      facts: [
        { value: '8', label: 'niños por grupo', note: 'Grupos lo suficientemente reducidos para conocer a cada niño por su nombre y que ninguno se pierda entre la multitud.' },
        { value: '90', label: 'minutos juntos', note: 'Tiempo de sobra para calmarse, explorar y estar concentrado.' },
      ],
      image: '/images/home-not-to-be-rushed.webp',
      imageAlt: 'Un grupo pequeño de niños explorando juntos, sin prisa.',
    },
    worlds: {
      eyebrow: 'Los Cinco Mundos',
      heading: 'Cinco formas de descubrir el mundo',
      body: 'Nuestras experiencias recorren cinco mundos inspirados en el mundo real que nos rodea. Cada día, nuevas formas de explorar, moverse, crear y descubrir. Diferentes mundos. Diferentes experiencias. Siempre algo nuevo por descubrir.',
      items: [
        { name: 'Ocean', short: 'El mar como entorno', image: '/images/world-ocean.webp' },
        { name: 'Mountain', short: 'Naturaleza en sí misma', image: '/images/stage-photo-navigators.webp' },
        { name: 'World Around Us', short: 'Puertas que los niños rara vez tienen la oportunidad de abrir', image: '/images/home-world-built-around-childhood.webp' },
        { name: 'Expression', short: 'Dar forma a las ideas', image: '/images/gallery-02.webp' },
        { name: 'Future', short: 'Curiosidad por lo que está por venir', image: '/images/contact-hero.webp' },
      ],
      linkLab: 'Los cinco mundos en detalle',
      linkHref: '/experiences/#worlds',
    },
    journey: {
      eyebrow: 'Desde el principio',
      heading: 'Un lugar que crece con tu hijo',
      body: 'Donde toda la familia pueda disfrutar. Muchas de las experiencias empiezan incluso antes de que nazca y continúan a lo largo de los años.',
      stages: [
        { name: 'Bloom', age: 'Embarazo' },
        { name: 'Nurture', age: '0–1' },
        { name: 'The Nest', age: '1–2' },
        { name: 'Little Beginnings', age: '2–3' },
        { name: 'Builders I', age: '3–5' },
        { name: 'Builders II', age: '5–6' },
        { name: 'Navigators', age: '6–8' },
      ],
      note: 'Las edades son orientativas, nos adaptamos al desarrollo e interés de cada niño.',
      linkLabel: 'Explorar los grupos de edades',
      linkHref: '/experiences/#journey',
    },
    promise: {
      eyebrow: 'Nuestra promesa',
      heading: 'Qué puede esperar cada familia',
      image: '/images/membership-beach-background.webp',
      items: [
        { title: 'Cada niño es conocido', body: 'No solo un nombre en la lista. Las educadoras conocen aquello en lo que tu hijo está trabajando, lo que le resulta difícil y lo que le apasiona.' },
        { title: 'Continuidad', body: 'Las mismas caras, la misma comunidad año tras año. Los niños construyen sobre lo que han vivido anteriormente, en lugar de empezar de cero cada trimestre.' },
        { title: 'Un entorno protegido', body: 'Mantenemos grupos reducidos y cuidamos especialmente de nuestra comunidad, lo que nos permite hacer posible todo lo demás.' },
        { title: 'Pertenencia, no asistencia', body: 'La membresía será como tu segunda familia, no simplemente un lugar donde dejas a tu hijo. Las familias también forman parte.' },
      ],
    },
    home: {
      eyebrow: 'Marbella',
      heading: 'Donde comienza Narelo',
      body: 'El mar a un lado, las montañas al otro y una comunidad de familias que estamos formando con cuidado y sin prisas. Nuestro primer espacio Narelo abre aquí este otoño, y será el primero, pero no el último.',
      image: '/images/img-5208.webp',
      imageAlt: 'Tres niños en una duna al atardecer, mirando el mar.',
    },
    closing: {
      headingLines: ['La infancia', 'solo se vive una vez.'],
      body: 'Abrimos las primeras inscripciones con plazas limitadas antes de inaugurar nuestro primer espacio. Si crees que tu familia encaja con la filosofía Narelo, nos encantaría hablar contigo.',
      ctaLabel: 'Hablemos',
    },
  },

  membership: {
    chapters: [
      { id: 'what', label: 'Qué es Narelo' },
      { id: 'experience', label: 'Las experiencias' },
      { id: 'ages', label: 'Grupos de edad' },
      { id: 'how', label: 'Cómo funciona' },
      { id: 'join', label: 'Cómo formar parte' },
    ],
    hero: {
      eyebrow: 'Membresía',
      headingLines: ['Pertenencia,', 'desde el primer contacto.'],
      lede: 'Una comunidad privada para familias que quieren que la infancia sea algo que sus hijos realmente recuerden.',
      image: '/images/membership-hero.webp',
    },
    whatItIs: {
      eyebrow: 'Qué es Narelo',
      heading: 'Una comunidad de familias, construida en torno a experiencias extraordinarias',
      body: 'Narelo es una comunidad privada para familias, creada en torno a experiencias extraordinarias de infancia que ayudan a los niños a crecer a través de la naturaleza, la creatividad, el movimiento y las aventuras en el mundo real, dentro de un grupo de familias con valores afines que crecen juntas.',
      body2: 'Más que un programa infantil, Narelo es una comunidad donde los niños desarrollan confianza, independencia y vínculos significativos; los padres siguen aprendiendo gracias al conocimiento de expertos; y las familias con valores afines crecen juntas, preparando a los niños para desenvolverse en un mundo en constante cambio.',
      image: '/images/img-1667.webp',
      imageAlt: 'Niños en el mundo real durante una experiencia Narelo.',
    },
    isNot: {
      eyebrow: 'Qué no es Narelo',
      items: ['Una clase', 'Una guardería', 'Un centro de juegos', 'Una actividad más'],
      line: 'Narelo es una comunidad a la que pertenece tu familia.',
      pull: 'No creamos un mundo para los niños. Les abrimos las puertas al mundo real.',
    },
    different: {
      eyebrow: 'Qué hace diferente a Narelo',
      items: [
        {
          n: '01',
          title: 'Un lugar al que volver',
          body: 'No es una actividad puntual, sino una constante a lo largo del año: experiencias, relaciones y momentos compartidos a los que tu hijo vuelve una y otra vez.',
        },
        {
          n: '02',
          title: 'Un ritmo que crece contigo',
          body: 'De una etapa a la siguiente, con una continuidad real, sin tener que buscar un programa nuevo cada año.',
        },
        {
          n: '03',
          title: 'Ser conocido, no simplemente asistir',
          body: 'En grupos pequeños y estables, cada niño es reconocido como individuo, no como uno más.',
        },
      ],
    },
    childExperience: {
      eyebrow: 'Qué experimenta tu hijo',
      heading: 'Lugares reales, grupos pequeños y vínculos auténticos',
      body: 'A partir de aproximadamente los tres años, el año transcurre a través de cinco mundos. Los niños más pequeños comienzan con el movimiento, los sentidos y la conexión, y van creciendo hacia ellos.',
      worldsLinkLabel: 'Descubre los Cinco Mundos',
      worldsLinkHref: '/experiences/#worlds',
      note: 'Las experiencias tienen lugar en nuestro espacio de Marbella y mucho más allá: en la playa, el bosque y otros lugares del mundo real. En los grupos de menor edad puede participar uno de los padres; los niños mayores acuden por su cuenta.',
      formatLinkLabel: 'Cómo se crea una experiencia',
      formatLinkHref: '/experiences/#format',
    },
    ageGroups: {
      eyebrow: 'Desde el principio',
      heading: 'Un lugar que crece con tu hijo',
      body: 'Cada niño pertenece a un grupo con nombre propio que le acompaña a medida que crece. Las familias pueden incorporarse en cualquier momento, y muchas comienzan incluso antes de que nazca su hijo.',
      note: 'Las edades son orientativas, nos adaptamos al desarrollo e interés de cada niño.',
      linkLabel: 'Mira qué incluye cada etapa',
      linkHref: '/experiences/#journey',
    },
    howItWorks: {
      eyebrow: 'Cómo funciona la membresía',
      heading: 'Una membresía, un lugar al que seguir perteneciendo',
      body: 'Tu hijo tiene una plaza en su grupo de edad, no simplemente un hueco en un horario: una experiencia a la semana, en el mundo real, con las mismas educadoras y el mismo pequeño círculo de amigos.',
      items: [
        {
          n: '01',
          title: 'Lugares reales, no cuatro paredes',
          body: 'Una experiencia puede llevar al grupo a la playa, al bosque o a conocer a las personas y los oficios que forman parte de la vida cotidiana. Las llamamos experiencias, y no clases, porque eso es lo que estamos creando: momentos que tu hijo vive y siente, no contenidos que simplemente recibe.',
        },
        {
          n: '02',
          title: 'Crece con ellos',
          body: 'A medida que tu hijo pasa al siguiente grupo de edad, su membresía le acompaña. Nada vuelve a empezar desde cero.',
        },
        {
          n: '03',
          title: 'Las familias también forman parte',
          body: 'Los Community Mornings, las sesiones con expertos y los eventos están pensados tanto para los padres como para los niños.',
        },
      ],
      note: 'Las plazas son limitadas por diseño. Los grupos se mantienen pequeños, por lo que cada grupo de edad acoge únicamente a un número reducido de familias.',
    },
    included: {
      eyebrow: 'Qué incluye la membresía',
      heading: '¿Qué recibe realmente tu familia?',
      image: '/images/gallery-04.webp',
      cards: [
        {
          title: 'Tu hijo cuenta con su propia educadora, en diálogo contigo',
          meta: 'Conversaciones individuales periódicas',
          body: 'Conocemos qué despierta el interés de tu hijo, qué le supone un reto y cómo va creciendo, y compartimos ese recorrido contigo a través de conversaciones individuales periódicas.',
        },
        {
          title: 'Sus recuerdos, documentados y conservados para siempre',
          meta: 'Un recuerdo digital exclusivo cada trimestre',
          body: 'Un recuerdo digital moderno y cuidadosamente elaborado al final de cada trimestre, que recoge experiencias y descubrimientos significativos para volver a ellos con el tiempo.',
        },
        {
          title: 'El universo Narelo, creciendo contigo',
          meta: 'Experiencias, acompañamiento y comunidad',
          body: 'Una comunidad de miembros con valores afines donde niños y padres pueden construir vínculos significativos a lo largo del tiempo.',
        },
      ],
      groups: [
        {
          label: 'También está incluido en la membresía',
          items: [
            { title: 'Experiencias semanales', body: 'La plaza habitual de tu hijo en su grupo de edad, cada semana del trimestre.' },
            { title: 'Acceso anticipado', body: 'Acceso anticipado a experiencias, eventos y plazas limitadas antes de que se abran a un público más amplio.' },
            { title: 'Community Mornings', body: 'Tiempo para que las familias se conozcan, conecten y crezcan juntas.' },
            { title: 'Narelo Expert Insights', body: 'Conversaciones con nuestros propios expertos sobre infancia, desarrollo y vida familiar, incluidas como parte de tu membresía.' },
          ],
        },
        {
          label: 'Acceso prioritario con tarifas especiales',
          items: [
            { title: 'Guest Expert Insights' },
            { title: 'Signature Saturdays' },
            { title: 'Holiday Experiences' },
            { title: 'Experiencias de cumpleaños' },
            { title: 'Experiencias privadas, creadas para tu familia' },
          ],
          linkLabel: 'Descubre en qué consiste cada una',
          linkHref: '/experiences/',
        },
      ],
    },
    proof: {
      eyebrow: 'Quiénes somos',
      heading: 'Natalie y Vivien',
      people: [
        {
          name: 'Natalie Curavic',
          role: 'Fundadora y CEO',
          image: '/images/founder-natalie.webp',
          body: 'Natalie cuenta con un máster en Geografía Cultural y un MBA por la FOM University of Applied Sciences. Durante más de 15 años, su trabajo en Recursos Humanos se ha centrado en las personas y en aquello que les ayuda a crecer y desarrollarse. También cuenta con formación en yoga prenatal. Su propia experiencia con la maternidad profundizó su comprensión de la importancia del sentido de pertenencia, la conexión y la comunidad, no solo para los niños, sino también para los padres.',
          quote: 'Convertirme en madre hizo que me planteara esa pregunta mucho antes. En un mundo marcado por rápidos cambios tecnológicos, quería que los niños tuvieran experiencias reales que fomentaran su curiosidad, confianza, independencia y conexión con el mundo que les rodea. De esa idea nació Narelo.',
        },
        {
          name: 'Vivien Vörös',
          role: 'Cofundadora y Directora de Educación',
          image: '/images/founder-vivien.webp',
          body: 'Vivien se formó en Educación Especial en la Universidad Eötvös Loránd y cuenta con formación complementaria en Logopedia y Terapia del Movimiento Complejo. Durante más de siete años, ha trabajado en colegios, centros terapéuticos y escuelas infantiles, siempre con un mismo enfoque: conocer de verdad a cada niño.',
          quote: 'Algunos niños reciben atención. Quiero que Narelo sea el lugar donde todos la reciban.',
        },
      ],
      teamLabel: 'El equipo',
      team: [
        {
          name: 'Jessica Fletcher',
          role: 'Educadora sénior',
          image: '/images/team-jessica-fletcher.webp',
          body: 'Jessica estudió Psicología en la Universidad Massey de Nueva Zelanda y cuenta con varios años de experiencia trabajando con niños en la primera infancia y en entornos educativos. Su enfoque se centra en el desarrollo infantil, el bienestar emocional y las relaciones que dan forma al mundo de cada niño, con especial interés en las dinámicas familiares y en fortalecer el vínculo entre padres e hijos.',
          quote: 'Cuando comprendemos al niño y las relaciones que le rodean, creamos una base más sólida para que pueda crecer.',
        },
        {
          name: 'Mercedes Carrasco Galera',
          role: 'Responsable de Experiencia de Marca',
          image: '/images/team-mercedes.webp',
          body: 'Mercedes estudió Publicidad, Relaciones Públicas y Marketing en ESIC Business & Marketing School, en Madrid. Su trayectoria abarca el marketing, la creación de contenido y la producción creativa. Su experiencia con niños ha contribuido a desarrollar su sensibilidad hacia la curiosidad, las conexiones y los pequeños momentos que definen la infancia. En Narelo, une estos mundos para trasladar su filosofía a la manera en que la marca se comunica y se vive.',
          quote: 'Las historias más significativas nacen de momentos reales, conexiones auténticas y un poquito de curiosidad.',
        },
      ],
    },
    joining: {
      eyebrow: 'Cómo formar parte',
      heading: 'Cuatro pasos, y una conversación antes de nada',
      steps: [
        { n: '01', title: 'Iniciamos una conversación', body: 'Escríbenos por WhatsApp. Sin formularios que rellenar ni solicitudes antes de haber hablado.', whatsapp: true },
        { n: '02', title: 'Encontramos el grupo adecuado', body: 'Te preguntamos la edad de tu hijo y te contamos qué grupo le corresponde y qué plazas hay disponibles.' },
        { n: '03', title: 'Una conversación en familia', body: 'Entre quince y veinte minutos juntos para conocer a tu familia, saber qué estás buscando y responder a todas tus preguntas. Si prefieres leer primero toda la información con calma, te enviamos una explicación más completa por escrito y retomamos la conversación después.' },
        { n: '04', title: 'Una invitación', body: 'Si sentimos que encaja por ambas partes, recibirás una invitación personal, el acuerdo de membresía y una fecha de inicio. Después, la bienvenida y la primera experiencia de tu hijo.' },
      ],
      reassurance: 'Mantenemos una comunidad pequeña y elegimos cuidadosamente a las familias. No por exclusividad, sino porque los grupos reducidos y una comunidad estable son la esencia de Narelo. Si cuando hablamos no hay plazas disponibles en el grupo de edad de tu hijo, podemos incluir a tu familia en nuestra lista de espera y contactar personalmente contigo en cuanto se libere una plaza.',
      whatsappLabel: 'Escríbenos por WhatsApp',
    },
    closing: {
      headingLines: ['Descubre si', 'encajamos contigo.'],
      body: 'Empieza con un mensaje, sin compromiso. Simplemente una conversación sobre tu familia.',
      ctaLabel: 'Hablemos',
      secondaryLabel: 'O escríbenos por email',
      video: '/video/membership-closing.mp4',
      poster: '/images/membership-video-poster.webp',
    },
  },

  experiences: {
    hero: {
      eyebrow: 'Experiencias',
      headingLines: ['Pensadas para que', 'crezcan con tu hijo'],
      lede: 'Experiencias creadas cuidadosamente, que invitan a la curiosidad, a la creatividad y a la conexión, desde antes de que tu hijo nazca hasta los 8 años.',
      image: '/images/experiences-hero.webp',
    },
    format: {
      eyebrow: 'Cómo es una experiencia',
      heading: 'Noventa minutos, un grupo reducido y un entorno real',
      body: 'Las experiencias suceden en nuestro espacio en Marbella, pero también en la playa, en el bosque, y en esos lugares en los que día a día transcurre la vida. Sin prisas.',
      body2: 'Los niños exploran, se mueven, se hacen preguntas, construyen, crean y resuelven retos juntos, acompañados por educadoras que saben cuándo ofrecer apoyo y cuándo darles espacio para encontrar su propio camino.',
      body3: 'Creemos que los niños necesitan ambas cosas: una conexión sólida con el mundo real, y la confianza para desenvolverse en el mundo que viene. Por eso, la naturaleza, el movimiento y las experiencias de la vida real pueden convivir con la creatividad, la robótica y la inteligencia artificial, siempre con un propósito.',
      pull: 'Conectados con el mundo real. Preparados para lo que está por venir.',
      facts: [
        { value: '90', label: 'minutos juntos', note: 'Tiempo suficiente para adaptarse, explorar y disfrutar de la experiencia sin prisas.' },
        { value: '8', label: 'niños por grupo', note: 'Grupos lo suficientemente reducidos para que cada niño sea conocido por su nombre y reciba una atención personalizada.' },
        { value: '12', label: 'experiencias por temporada', note: 'Una experiencia a la semana durante el trimestre, para que cada etapa construya sobre la anterior, en lugar de empezar de cero.' },
      ],
      note: 'Los grupos de los más pequeños pueden incluir a uno de sus padres, los más mayores participan de manera independiente.',
      image: '/images/img-5211.webp',
      imageAlt: 'Una experiencia Narelo en marcha, en un lugar real.',
    },
    spark: {
      eyebrow: 'Puede empezar con algo así de pequeño',
      heading: 'Un niño descubre algo inesperado',
      steps: ['Nos paramos', 'Miramos más de cerca', 'Imaginamos juntos', 'La curiosidad se convierte en un descubrimiento'],
      closing: 'Un momento pequeño se puede convertir en el punto de partida de algo mucho más grande.',
    },
    worlds: {
      eyebrow: 'Los Cinco Mundos',
      heading: 'Cinco puertas que abrimos juntos',
      body: 'Nuestras experiencias recorren cinco mundos inspirados en la vida real. Cada uno abre nuevas formas de explorar, moverse, crear y descubrir. Mundos diferentes. Experiencias diferentes. Siempre algo nuevo por descubrir.',
      items: [
        { name: 'Ocean', body: 'Explorar el mar a través de los sentidos, el movimiento, la curiosidad y el descubrimiento del mundo real.' },
        { name: 'Mountain', body: 'Explorar la naturaleza a través del movimiento, los retos, la observación y la aventura.' },
        { name: 'World Around Us', body: 'Descubrir la vida real a través de las personas, los lugares, las profesiones, la cultura y las experiencias cotidianas.' },
        { name: 'Expression', body: 'Transformar ideas y descubrimientos en arte, música, historias, construcciones y diseño.' },
        { name: 'Future', body: 'Explorar la invención, la resolución de problemas y nuevas posibilidades, utilizando la tecnología, la robótica y la inteligencia artificial como herramientas para crear, no para sustituir el pensamiento.' },
      ],
    },
    stages: {
      eyebrow: 'El recorrido',
      heading: 'Un camino para cada etapa',
      body: 'Cada niño forma parte de un grupo con nombre propio que le acompaña a medida que crece. Las familias pueden unirse en cualquier momento del recorrido.',
      note: 'Las edades son orientativas, nos adaptamos al desarrollo e interés de cada niño.',
    },
    regular: {
      eyebrow: 'A lo largo del año',
      heading: 'Más allá de la experiencia semanal',
      body: 'La membresía va más allá de las experiencias semanales de tu hijo. Nos reunimos regularmente como comunidad, tanto padres como niños, y tienes acceso continuo a nuestros expertos. Un espacio para seguir aprendiendo sobre la crianza y sobre ti mismo, en tu propia familia.',
      note: 'Cada mes, uno de nuestros expertos ofrece una sesión para ti, incluida en la membresía. Cuando invitamos a un especialista externo, los miembros disfrutan de una tarifa especial.',
      groups: [
        {
          label: 'Parte de tu mundo Narelo',
          items: [
            { name: 'Regular Narelo Experiences', body: 'Para tu hijo: una experiencia a la semana con su propio grupo reducido, un espacio constante donde explorar, crecer y construir amistades auténticas con el tiempo.' },
            { name: 'Community Mornings', body: 'Para toda la familia: tiempo para conocer a otras familias Narelo, conectar y crecer juntos.' },
            { name: 'Narelo Expert Insights', body: 'Para los padres: conversaciones con nuestros propios expertos sobre infancia, desarrollo y vida familiar.' },
            { name: 'Conversaciones individuales con la educadora', body: 'Para los padres: una vez por trimestre o temporada, tiempo con la educadora de tu hijo para hablar sobre cómo está creciendo.' },
            { name: 'Vídeos que reflejan el final de cada temporada', body: 'Para tu familia: un vídeo personal al cierre de cada temporada que recoge los descubrimientos de tu hijo para conservarlos como recuerdo.' },
          ],
        },
        {
          label: 'Acceso prioritario con tarifas especiales',
          aside: 'y más por venir',
          items: [
            { name: 'Guest Expert Insights', body: 'Sesiones con especialistas externos invitados por Narelo, ofrecidas a los miembros con una tarifa especial.' },
            { name: 'Signature Saturdays', body: 'Experiencias especiales de sábado diseñadas para el descubrimiento, la creatividad y la aventura.' },
            { name: 'Holiday Experiences', body: 'Experiencias cuidadosamente diseñadas durante las vacaciones escolares.' },
          ],
        },
      ],
    },
    personalised: {
      eyebrow: 'Más allá del día a día',
      heading: 'Diseñado en torno a tu familia',
      body: 'Además de la membresía, Narelo también crea experiencias privadas seleccionadas, cuidadosamente adaptadas a tu hijo y a tu familia.',
      note: 'Estas experiencias son independientes de la membresía y están abiertas a familias que no son miembros. Los miembros tienen prioridad de reserva y disfrutan siempre de una tarifa especial.',
      items: [
        {
          name: 'Experiencias de cumpleaños',
          body: 'Celebraciones cuidadosamente diseñadas e inspiradas en los intereses y la personalidad de tu hijo.',
          ctaLabel: '¿Te gustaría celebrar con nosotros?',
          whatsappText: 'Hola Narelo, me encantaría saber más sobre una experiencia de cumpleaños para mi hijo.',
        },
        {
          name: 'Experiencias privadas hechas a medida',
          body: 'Experiencias personalizadas, creadas con atención en torno a tu hijo y a tu familia.',
          ctaLabel: '¿Diseñamos algo para tu familia?',
          whatsappText: 'Hola Narelo, me encantaría hablar sobre una experiencia privada para mi familia.',
        },
      ],
    },
    closing: {
      headingLines: ['Hay experiencias', 'que permanecen contigo.'],
      body: 'Lo que los niños viven se convierte en parte de quienes son.',
      ctaLabel: 'Hablemos',
      video: '/video/experiences-closing.mp4',
      poster: '/images/experiences-video-poster.webp',
    },
  },

  stages: {
    stageDetails: [
      {
        name: 'Bloom',
        age: 'Embarazo',
        tagline: 'Un comienzo tranquilo, antes de la llegada de tu hijo.',
        summary:
          'Un espacio de calma para futuras madres: tiempo para bajar el ritmo, conectar con otras mujeres y comenzar el recorrido Narelo antes de que nazca tu hijo.',
        image: '/images/stage-photo-bloom.webp',
      },
      {
        name: 'Nurture',
        age: '0–1 año',
        tagline: 'Sintiendo, conectando y descubriendo juntos.',
        motto: 'Siento y descubro.',
        summary:
          'Un espacio seguro y acogedor donde los bebés exploran a través de sus sentidos, mueven su cuerpo y comienzan a desarrollar las bases de la conexión, la curiosidad y la confianza, junto a sus padres.',
        whatToExpect: [
          'Una bienvenida tranquila, con tiempo para explorar y familiarizarse con el espacio',
          'Canciones, masajes, movimiento suave y juegos para fortalecer el vínculo entre padres y bebés',
          'Experiencias sensoriales en un entorno preparado, que cada bebé explora a su propio ritmo',
          'Momentos de calma, juego sensorial y conexión para cerrar',
        ],
        image: '/images/stage-photo-nurture.webp',
      },
      {
        name: 'The Nest',
        age: '1–2 años',
        tagline: 'Explorando el mundo a través del movimiento y creciendo con independencia.',
        motto: 'Me muevo y exploro.',
        summary:
          'Un espacio activo y alegre donde los más pequeños desarrollan fuerza, equilibrio y confianza a través del movimiento, el juego y el descubrimiento, tanto en interiores como al aire libre.',
        whatToExpect: [
          'Bienvenida y calentamiento con canciones, movimiento y un pequeño ritual de saludo',
          'Circuitos para trepar, gatear, mantener el equilibrio, empujar, tirar y saltar',
          'Exploración sensorial con materiales y propuestas abiertas',
          'Juegos, música e historias que favorecen las habilidades sociales y la amistad',
          'Un momento final de calma, respiración o estiramientos suaves',
        ],
        image: '/images/stage-photo-nest.webp',
      },
      {
        name: 'Little Beginnings',
        age: '2–3 años',
        tagline: 'Confianza que crece a través de la curiosidad, el movimiento y el descubrimiento.',
        motto: 'Descubro.',
        summary:
          'Las primeras aventuras en los Cinco Mundos. Experiencias sensoriales y lúdicas que despiertan la curiosidad, fomentan la independencia y crean recuerdos felices.',
        whatToExpect: [
          'Exploración sensorial en la naturaleza y en entornos reales',
          'Aprendizaje a través del juego, el movimiento y el descubrimiento',
          'Experiencias creativas sencillas y música',
          'Encuentros con animales, exploración de texturas y materiales',
          'Primeros pasos hacia la independencia y las relaciones sociales',
        ],
        image: '/images/stage-photo-little-beginnings.webp',
      },
      {
        name: 'Builders I',
        age: '3–5 años',
        tagline: 'Explorando, creando y comprendiendo el mundo.',
        motto: 'Exploro y creo.',
        summary:
          'Experiencias prácticas en los Cinco Mundos que fomentan la exploración, la creatividad, las preguntas y el placer de crear.',
        whatToExpect: [
          'Exploración de la naturaleza y aventuras al aire libre',
          'Proyectos creativos con materiales naturales y reciclados',
          'Movimiento, yoga y conciencia corporal',
          'Música, historias, teatro y juego imaginativo',
          'Retos de grupo, trabajo en equipo y resolución de problemas',
        ],
        image: '/images/gallery-02.webp',
      },
      {
        name: 'Builders II',
        age: '5–6 años',
        tagline: 'Preguntando, creando y convirtiendo las ideas en algo real.',
        motto: 'Investigo y construyo.',
        summary:
          'Investigaciones más profundas y experiencias en el mundo real que desarrollan el pensamiento, la colaboración y una autonomía cada vez mayor.',
        whatToExpect: [
          'Investigaciones a fondo sobre la naturaleza y el territorio',
          'Pequeños proyectos, experimentos y creaciones',
          'Movimiento exigente y actividades al aire libre',
          'Encuentros con expertos, visitas a lugares que inspiran',
          'Planificar, reflexionar y compartir ideas',
        ],
        image: '/images/home-not-to-be-rushed.webp',
      },
      {
        name: 'Navigators',
        age: '6–8 años',
        tagline: 'Creciendo con independencia, resolviendo problemas y encontrando su propio ritmo.',
        motto: 'Profundizo y encuentro mi propio camino.',
        summary:
          'Experiencias que desarrollan la curiosidad, la resiliencia y el sentido de propósito, a medida que los niños adquieren mayor autonomía.',
        whatToExpect: [
          'Aventuras en el mundo real y exploraciones más largas',
          'Investigación, proyectos y expresión creativa',
          'Liderazgo, colaboración e impacto en la comunidad',
          'Retos físicos y desarrollo de habilidades',
          'Reflexión, objetivos y crecimiento personal',
        ],
        image: '/images/stage-photo-navigators.webp',
      },
    ],
  },

  community: {
    hero: {
      headingLine1: 'Una comunidad que crece',
      headingLine2: 'contigo',
      image: '/images/community-hero.webp',
    },
    testimonials: [
      { quote: '“Los niños se lo pasaron en grande y estuvieron completamente metidos durante toda la celebración”', attribution: '- MARÍA · FAMILIA NARELO' },
      { quote: '“Mi hija espera cada experiencia con ganas. Y yo también.”', attribution: '- TESSA · FAMILIA NARELO' },
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
      heading: 'Un lugar al que pertenecer',
      body: 'Donde los niños crecen, las familias conectan y los recuerdos se construyen juntos.',
    },
    events: {
      heading: 'Momentos para conectar y crecer juntos',
      body: 'Experiencias de comunidad creadas para reunir a las familias, aprender, compartir y crear momentos con sentido.',
      ctaLabel: 'VER TODOS LOS ENCUENTROS',
      ctaHref: '/events',
      emptyState: 'No hay encuentros en este momento',
      video: '/video/community-band.mp4',
      poster: '/images/community-video-poster.webp',
    },
    journalTeaser: {
      heading: 'Conocimiento que te acompaña',
      body: 'Reflexiones cuidadas y perspectivas expertas para acompañar la vida familiar de hoy.',
      ctaLabel: 'DIARIO',
      ctaHref: '/journal',
    },
  },

  pages: {
    contactPage: {
      heading: 'Nos encantaría saber de ti.',
      sub: 'Estamos aquí para responder tus preguntas y ayudarte a encontrar la experiencia adecuada para tu familia.',
      formHeading: 'Cuéntanos un poco más sobre ti',
      submitLabel: 'ENVIAR',
      image: '/images/contact-hero.webp',
      video: '/video/contact-band.mp4',
      poster: '/images/contact-video-poster.webp',
      fields: [
        { name: 'name', label: 'Nombre', type: 'text', required: true, autoComplete: 'name' },
        { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
        { name: 'phone', label: 'Teléfono', type: 'tel', required: true, autoComplete: 'tel' },
        { name: 'message', label: 'Cuéntanos qué estás buscando…', type: 'textarea', required: true, autoComplete: 'off' },
      ],
    },
    journalPage: {
      title: 'Diario',
      tabLabel: 'Todas las entradas',
      emptyHeading: 'Vuelve pronto',
      emptyBody: 'Cuando se publiquen entradas, las verás aquí.',
    },
    eventsPage: {
      title: 'Encuentros',
      emptyHeading: 'No hay encuentros en este momento',
    },
    legalPage: {
      title: 'Aviso legal',
      intro: 'Quién está detrás de esta web, según lo exige la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico.',
      rows: [
        { label: 'Denominación social', value: 'Narelo Europe S.L.', href: null },
        { label: 'NIF', value: 'B93933273', href: null },
        { label: 'Domicilio social', value: 'C. Valentuñana, 2, 29601 Marbella, Málaga, España', href: null },
        { label: 'Email', value: 'hello@narelo.es', href: 'mailto:hello@narelo.es' },
        { label: 'Teléfono', value: '+34 655 366 888', href: 'tel:+34655366888' },
        { label: 'Administradoras', value: 'Natalie Curavic y Vivien Vörös', href: null },
      ],
    },
  },
};
