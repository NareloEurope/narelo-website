/**
 * Spanish. Mirrors the English in `content/` key for key; the shape is checked
 * against it at build time, so a missing key fails the build.
 *
 * ⚠️ NOT YET READ BY A NATIVE SPEAKER (Vivien, 2026-09-04). Marbella is the
 * first Narelo home and Spanish is the commercially important language here,
 * so this needs a proper editorial pass before launch, not just a proofread.
 *
 * Translation rules followed here:
 * - Brand names stay in English, because AGENTS.md forbids re-titling them:
 *   Narelo, the Five Worlds (Ocean, Mountain, World Around Us, Expression,
 *   Future), the age groups (Bloom, Nurture, The Nest, Little Beginnings,
 *   Builders I, Builders II, Navigators), Signature Saturdays, Holiday
 *   Experiences, Expert Insights, Community Mornings, Narelo Experiences.
 * - No em dashes, same as the English.
 * - Tone is invitation and wonder, never status. "Club privado de socios"
 *   rather than anything that reads as exclusivity.
 * - Usted vs tú: tú throughout, warmer and right for families.
 * - Paths, images, videos, numbers and contact details are untouched.
 * - The WhatsApp prefill is translated so a Spanish family writes in Spanish.
 */
import type { Dict } from '../dictionary';

export const es: Dict = {
  site: {
    site: {
      name: 'Narelo',
      tagline: 'Una membresía privada para la infancia',
      locale: 'es',
      location: 'Marbella, España',
      copyright: '© 2026 Narelo. Todos los derechos reservados.',
    },
    nav: [
      { label: 'Qué es Narelo', href: '/membership/#what' },
      { label: 'Experiencias', href: '/experiences/' },
      { label: 'Membresía', href: '/membership/' },
      { label: 'Quiénes somos', href: '/membership/#who' },
    ],
    headerCta: { label: 'Empieza una conversación', external: true },
    footerCta: {
      heading: 'Nuestra primera casa Narelo abre en Marbella este otoño.',
      subheading: 'Empezamos en Marbella. Madrid y Mallorca en el horizonte.',
      ctaLabel: 'Empieza una conversación',
      blurb: 'Un club privado de socios construido en torno a experiencias extraordinarias de la infancia.',
    },
    ui: {
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      skipToContent: 'Ir al contenido principal',
      footerExplore: 'Explora',
      footerContact: 'Contacto',
      languageLabel: 'Idioma',
      homeLabel: 'inicio',
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
      { src: '/images/social-instagram.webp', label: 'Instagram', href: 'https://instagram.com/narelo.eu' },
      { src: '/images/social-whatsapp.webp', label: 'WhatsApp', href: 'https://wa.me/34655366888?text=Hola%20Narelo%2C%20me%20encantar%C3%ADa%20saber%20m%C3%A1s%20sobre%20la%20membres%C3%ADa%20para%20mi%20familia.' },
      { src: '/images/social-tiktok.webp', label: 'TikTok', href: null },
      { src: '/images/social-facebook.webp', label: 'Facebook', href: null },
    ],
  },

  home: {
    hero: {
      eyebrow: 'Una membresía privada para la infancia · Marbella',
      headingLines: ['La infancia,', 'vivida de verdad.'],
      lede: 'Narelo es una comunidad de socios construida en torno a experiencias extraordinarias en el mundo real, para niños desde el embarazo hasta alrededor de los ocho años, y para las familias que crecen junto a ellos.',
      video: '/video/home-hero.mp4',
      poster: '/images/home-hero-poster.webp',
      scrollHint: 'Desliza',
    },
    belief: {
      eyebrow: 'En qué creemos',
      heading: 'Los niños no necesitan más actividades. Necesitan una infancia más rica.',
      body: 'Entre el colegio, las pantallas y las semanas llenas, la infancia pasa en segundo plano. Creemos que merece el primero: días reales, lugares reales, personas reales, y el tiempo para vivirlos.',
      pull: 'Creemos que el mayor regalo que podemos dar a un niño es una infancia que le prepare no solo para el colegio, sino para un futuro que todavía no podemos imaginar.',
      image: '/images/home-moment-to-pause.webp',
    },
    statement: {
      lines: ['Los niños vienen por las experiencias.', 'Las familias se quedan por la comunidad.'],
    },
    shape: {
      eyebrow: 'Cómo se construye un día Narelo',
      heading: 'Grupos pequeños. Lugares reales. Nadie con prisa.',
      body: 'Cada experiencia sigue la misma forma, ocurra en nuestra casa, en la playa o en las colinas que hay detrás del pueblo.',
      facts: [
        { value: '~8', label: 'niños por grupo', note: 'Pocos suficientes para que a cada niño se le conozca por su nombre, y no se le gestione como parte de una multitud.' },
        { value: '90', label: 'minutos juntos', note: 'Tiempo suficiente para instalarse, explorar de verdad y volver a uno mismo.' },
      ],
      image: '/images/home-not-to-be-rushed.webp',
    },
    worlds: {
      eyebrow: 'Los Cinco Mundos',
      heading: 'Cinco maneras de encontrarse con el mundo',
      body: 'Nuestras experiencias recorren cinco mundos inspirados en el mundo real que nos rodea, cada uno abriendo nuevas formas de explorar, moverse, crear y descubrir. Mundos distintos. Experiencias distintas. Siempre algo nuevo por descubrir.',
      items: [
        { name: 'Ocean', short: 'El mar como lugar vivo', image: '/images/world-ocean.webp' },
        { name: 'Mountain', short: 'La naturaleza en sus propios términos', image: '/images/world-mountain.webp' },
        { name: 'World Around Us', short: 'Puertas que los niños rara vez pueden abrir', image: '/images/home-world-built-around-childhood.webp' },
        { name: 'Expression', short: 'Dar forma a las ideas', image: '/images/gallery-02.webp' },
        { name: 'Future', short: 'Curiosidad por lo que está cambiando', image: '/images/contact-hero.webp' },
      ],
      linkLab: 'Los cinco mundos, al completo',
      linkHref: '/experiences/#worlds',
    },
    journey: {
      eyebrow: 'Desde el principio',
      heading: 'Un lugar que crece con tu hijo',
      body: 'Las familias pueden unirse en cualquier momento. Muchas empiezan antes de que su hijo nazca, y siguen durante los años que vienen después.',
      stages: [
        { name: 'Bloom', age: 'Embarazo' },
        { name: 'Nurture', age: '0–1' },
        { name: 'The Nest', age: '1–2' },
        { name: 'Little Beginnings', age: '2–3' },
        { name: 'Builders I', age: '3–5' },
        { name: 'Builders II', age: '5–6' },
        { name: 'Navigators', age: '6–8' },
      ],
      note: 'Los niños de cinco años se sitúan entre Builders I y Builders II según su madurez, no según su fecha de nacimiento.',
      linkLabel: 'Descubre los grupos de edad',
      linkHref: '/experiences/#journey',
    },
    promise: {
      eyebrow: 'La promesa Narelo',
      heading: 'Lo que toda familia puede esperar',
      image: '/images/membership-beach-background.webp',
      cards: [
        {
          title: 'A tu hijo se le conoce',
          body: 'Llegamos a saber qué despierta a tu hijo, qué le cuesta y cómo crece, y compartimos ese camino contigo en conversaciones regulares uno a uno.',
        },
        {
          title: 'Su recorrido queda recogido',
          body: 'Una recopilación digital cuidada y actual al final de cada trimestre, que recoge experiencias y descubrimientos significativos para volver a ellos.',
        },
        {
          title: 'Tu familia pertenece',
          body: 'Una comunidad de socios afines donde niños y padres construyen conexiones significativas con el tiempo.',
        },
      ],
      items: [
        { title: 'Continuidad', body: 'Las mismas caras, la misma comunidad, año tras año. Los niños construyen sobre lo anterior en lugar de empezar de cero cada trimestre.' },
        { title: 'Un entorno protegido', body: 'Mantenemos los grupos pequeños y la comunidad cuidada. Eso es lo que hace posible todo lo demás.' },
      ],
    },
    home: {
      eyebrow: 'Marbella',
      heading: 'Donde empieza Narelo',
      body: 'El mar a un lado, la montaña al otro, y una comunidad de familias que elegimos con cuidado y sin prisa. Nuestra primera casa Narelo abre aquí este otoño, y es la primera, no la última.',
      image: '/images/home-discovery.webp',
      ctaLabel: 'Empieza una conversación',
    },
    closing: {
      headingLines: ['La infancia', 'ocurre una vez.'],
      body: 'La membresía se abre en números reducidos antes de nuestra primera casa. Si te suena a tu familia, nos encantaría hablar.',
      ctaLabel: 'Empieza una conversación',
    },
  },

  membership: {
    chapters: [
      { id: 'what', label: 'Qué es Narelo' },
      { id: 'experience', label: 'Las experiencias' },
      { id: 'ages', label: 'Grupos de edad' },
      { id: 'how', label: 'Cómo funciona' },
      { id: 'who', label: 'Quiénes somos' },
      { id: 'join', label: 'Cómo unirse' },
    ],
    hero: {
      eyebrow: 'Membresía',
      headingLines: ['Pertenecer,', 'no reservar.'],
      lede: 'Una membresía privada para familias que quieren que la infancia sea algo que sus hijos recuerden de verdad.',
      image: '/images/membership-hero.webp',
    },
    whatItIs: {
      eyebrow: 'Qué es Narelo',
      heading: 'Una comunidad de socios construida en torno a experiencias extraordinarias',
      body: 'Narelo es un club privado de socios construido en torno a experiencias extraordinarias de la infancia que ayudan a los niños a crecer a través de la naturaleza, la creatividad, el movimiento y las aventuras de la vida real, dentro de una comunidad de familias afines que crecen juntas.',
      body2: 'Más que un programa infantil, Narelo es una comunidad de socios donde los niños construyen confianza, independencia y vínculos significativos, los padres siguen aprendiendo con nuestros expertos, y familias afines crecen juntas, preparando a los niños para florecer en un mundo en cambio constante.',
      pull: 'Los niños vienen por las experiencias. Las familias se quedan por la comunidad.',
      image: '/images/img-1667.webp',
    },
    isNot: {
      eyebrow: 'Y qué no es',
      items: ['Una clase', 'Una guardería', 'Un centro de juego', 'Otra actividad'],
      line: 'Narelo es una membresía a la que tu familia pertenece.',
    },
    different: {
      eyebrow: 'Qué hace diferente a Narelo',
      items: [
        {
          n: '01',
          title: 'Un lugar al que volver',
          body: 'No una actividad suelta, sino una constante a lo largo del año: experiencias, relaciones y momentos compartidos a los que tu hijo vuelve.',
        },
        {
          n: '02',
          title: 'Un ritmo que crece contigo',
          body: 'De una etapa a la siguiente, con continuidad real, sin tener que buscar un programa nuevo cada año.',
        },
        {
          n: '03',
          title: 'Conocido, no solo presente',
          body: 'En grupos pequeños y estables, cada niño es visto como un individuo, no como uno más entre muchos.',
        },
      ],
    },
    childExperience: {
      eyebrow: 'Lo que vive tu hijo',
      heading: 'Lugares reales, grupos pequeños y tiempo para llegar hondo',
      body: 'A partir de los tres años, el curso recorre cinco mundos. Los más pequeños empiezan con movimiento, sentidos y conexión, y van creciendo hacia ellos.',
      worlds: [
        { name: 'Ocean', body: 'El mar como lugar vivo, encontrado con los sentidos y el cuerpo.' },
        { name: 'Mountain', body: 'Bosque, colinas y senderos, en los términos de la naturaleza.' },
        { name: 'World Around Us', body: 'Las personas y el oficio que hay detrás de la vida cotidiana.' },
        { name: 'Expression', body: 'Arte, creación y dar forma a sus propias ideas.' },
        { name: 'Future', body: 'Invención, experimentación y lo que podría ser posible.' },
      ],
      worldsLinkLabel: 'Los cinco mundos, al completo',
      worldsLinkHref: '/experiences/#worlds',
      note: 'Las experiencias ocurren en nuestra casa de Marbella y mucho más allá: playa, bosque y lugares de la vida real. Los grupos de los más pequeños pueden incluir a un adulto; los mayores vienen solos.',
      formatLinkLabel: 'Cómo se construye una experiencia',
      formatLinkHref: '/experiences/#format',
    },
    ageGroups: {
      eyebrow: 'Desde el principio',
      heading: 'Un lugar que crece con tu hijo',
      body: 'Cada niño pertenece a un grupo con nombre propio que se mueve con él según crece. Las familias pueden unirse en cualquier momento, y muchas empiezan antes de que su hijo nazca.',
      note: 'Los niños de cinco años se sitúan entre Builders I y Builders II según su madurez, no según su fecha de nacimiento.',
      linkLabel: 'Mira qué incluye cada etapa',
      linkHref: '/experiences/#journey',
    },
    howItWorks: {
      eyebrow: 'Cómo funciona la membresía',
      heading: 'Una membresía, un lugar que continúa',
      body: 'Tu hijo tiene un lugar en su grupo de edad, no una plaza en un horario: una experiencia por semana, en el mundo real, con los mismos educadores y el mismo pequeño círculo de amigos.',
      items: [
        {
          n: '01',
          title: 'Lugares reales, no cuatro paredes',
          body: 'Una experiencia puede llevar al grupo a la playa, al bosque, o a las personas y los oficios que hay detrás de la vida cotidiana. Las llamamos experiencias y no clases, porque eso es lo que construimos: tiempo que tu hijo siente, no contenido que se sienta a escuchar.',
        },
        {
          n: '02',
          title: 'Crece con ellos',
          body: 'Cuando tu hijo pasa al siguiente grupo de edad, su membresía se mueve con él. No se reinicia nada.',
        },
        {
          n: '03',
          title: 'Las familias también son socias',
          body: 'Las mañanas de comunidad, las sesiones con expertos y los encuentros son tanto para los padres como para los niños.',
        },
      ],
      note: 'Las plazas son limitadas por diseño. Los grupos se mantienen pequeños, así que cada grupo de edad acoge solo a un número reducido de familias.',
    },
    included: {
      eyebrow: 'La membresía incluye',
      heading: '¿Qué recibe tu familia exactamente?',
      groups: [
        {
          label: 'Incluido en tu membresía',
          items: [
            { title: 'Experiencias semanales', body: 'El lugar habitual de tu hijo en su grupo de edad, cada semana del curso.' },
            {
              title: 'El educador de tu hijo, en diálogo contigo',
              meta: 'Conversaciones regulares uno a uno',
              body: 'Llegamos a saber qué despierta a tu hijo, qué le cuesta y cómo crece, y compartimos ese camino contigo en conversaciones regulares uno a uno.',
            },
            {
              title: 'Su temporada, recogida y guardada',
              meta: 'Una recopilación digital exclusiva cada trimestre',
              body: 'Una recopilación digital cuidada y actual al final de cada trimestre, que recoge experiencias y descubrimientos significativos para volver a ellos.',
            },
            {
              title: 'Un círculo privado de familias afines',
              meta: 'Solo socios, año tras año',
              body: 'Una comunidad de socios afines donde niños y padres construyen conexiones significativas con el tiempo.',
            },
            { title: 'Reserva prioritaria', body: 'Acceso primero a experiencias, encuentros y plazas limitadas antes de que se abran más ampliamente.' },
          ],
        },
        {
          label: 'Para socios, con tarifa de socio',
          items: [
            { title: 'Signature Saturdays' },
            { title: 'Expert Insights' },
            { title: 'Holiday Experiences' },
            { title: 'Community Mornings' },
            { title: 'El mundo Narelo más amplio' },
          ],
          linkLabel: 'Qué es cada una de estas cosas',
          linkHref: '/experiences/',
        },
      ],
    },
    proof: {
      eyebrow: 'Quién está detrás de esto',
      heading: 'Natalie y Vivien',
      people: [
        {
          name: 'Natalie Curavic',
          role: 'Fundadora y CEO',
          image: '/images/founder-natalie.webp',
          body: 'Natalie tiene un máster en Geografía Cultural y un MBA por la FOM University of Applied Sciences. Durante más de 15 años, su trabajo en Recursos Humanos se ha centrado en las personas y en lo que les ayuda a crecer y desarrollarse. También está formada en yoga prenatal. Su propio camino hacia la maternidad profundizó su comprensión de cuánto importan la pertenencia, la conexión y la comunidad, no solo para los niños, sino también para los padres.',
          quote: 'Ser madre me hizo plantearme esa pregunta mucho antes. En un mundo marcado por un cambio tecnológico acelerado, quería que los niños tuvieran experiencias reales que construyeran curiosidad, confianza, independencia y conexión con el mundo que les rodea. De esa idea nació Narelo.',
        },
        {
          name: 'Vivien Vörös',
          role: 'Cofundadora y Directora de Educación',
          image: '/images/founder-vivien.webp',
          body: 'Vivien se formó en Educación Especial en la Universidad Eötvös Loránd, con titulaciones adicionales en Logopedia y Terapia de Movimiento Compleja. Durante más de siete años ha trabajado en colegios, entornos terapéuticos y escuelas infantiles, siempre con el mismo foco: llegar a conocer de verdad a cada niño.',
          quote: 'A algunos niños se les nota. Quiero que Narelo sea el lugar donde se les note a todos.',
        },
      ],
    },
    joining: {
      eyebrow: 'Cómo unirse',
      heading: 'Cuatro pasos, y una conversación antes que nada',
      steps: [
        { n: '01', title: 'Empieza una conversación', body: 'Escríbenos por WhatsApp. Sin formularios, y sin ninguna solicitud antes de haber hablado.', whatsapp: true },
        { n: '02', title: 'Encontramos el encaje', body: 'Te preguntamos qué edad tiene tu hijo, y te decimos a qué grupo de edad pertenece y qué plazas hay abiertas.' },
        { n: '03', title: 'Una conversación en familia', body: 'Quince o veinte minutos juntos: quién es tu familia, qué esperáis, y todo lo que quieras preguntar. Si prefieres leerlo con calma antes, te enviamos la información completa por escrito y te escribimos después.' },
        { n: '04', title: 'Una invitación', body: 'Si encaja por ambas partes, una invitación personal, el acuerdo de membresía y una fecha de inicio. Después, la bienvenida y la primera experiencia de tu hijo.' },
      ],
      reassurance: 'Mantenemos la comunidad pequeña y elegimos con cuidado. No por ser exclusivos, sino porque los grupos pequeños y una comunidad asentada son justamente lo importante. Si no hay plaza en el grupo de tu hijo cuando hablemos, podemos guardar a tu familia en nuestra lista de espera y volver a escribirte personalmente en cuanto se abra una.',
      whatsappLabel: 'Escríbenos por WhatsApp',
    },
    closing: {
      headingLines: ['Ven a ver', 'si encaja.'],
      body: 'Empieza con un mensaje, sin compromiso. Solo una conversación sobre tu familia.',
      ctaLabel: 'Empieza una conversación',
      secondaryLabel: 'O escríbenos un email',
      video: '/video/membership-closing.mp4',
      poster: '/images/membership-video-poster.webp',
    },
  },

  experiences: {
    hero: {
      eyebrow: 'Experiencias',
      headingLines: ['Experiencias que', 'crecen con tu hijo'],
      lede: 'Experiencias creadas con cuidado que invitan a la curiosidad, la creatividad y la conexión, desde antes de que tu hijo nazca hasta alrededor de los ocho años.',
      image: '/images/experiences-hero.webp',
    },
    format: {
      eyebrow: 'La forma de una experiencia',
      heading: 'Noventa minutos, un círculo pequeño y un lugar real',
      body: 'Las experiencias ocurren en nuestra casa de Marbella y mucho más allá: la playa, el bosque y los lugares donde la vida cotidiana sucede de verdad. Nada va con prisa y nada es relleno.',
      body2: 'Los niños exploran, se mueven, preguntan, construyen, crean y resuelven juntos, guiados por educadores que saben cuándo acompañar y cuándo dejarles espacio para encontrar su propio camino.',
      body3: 'Creemos que los niños necesitan las dos cosas: una conexión fuerte con el mundo real y la confianza para navegar el mundo que viene. Por eso la naturaleza, el movimiento y las experiencias de la vida real pueden encontrarse con la creatividad, la robótica y la IA, siempre con un propósito.',
      pull: 'Con raíces en el mundo real. Preparados para el mundo que viene.',
      facts: [
        { value: '90', label: 'minutos juntos', note: 'Tiempo suficiente para instalarse, explorar de verdad y volver a uno mismo.' },
        { value: '~8', label: 'niños por grupo', note: 'Pocos suficientes para que a cada niño se le conozca por su nombre, y no se le gestione como parte de una multitud.' },
        { value: '12', label: 'experiencias por temporada', note: 'Una por semana durante el curso, para que el año se construya en lugar de reiniciarse.' },
      ],
      note: 'Los grupos de los más pequeños pueden incluir a un adulto. Los mayores vienen solos.',
      image: '/images/img-5211.webp',
    },
    spark: {
      eyebrow: 'Puede empezar con algo así de pequeño',
      heading: 'Un niño descubre algo inesperado',
      steps: ['Nos paramos', 'Miramos más de cerca', 'Nos preguntamos juntos', 'La curiosidad se vuelve descubrimiento'],
      closing: 'Un momento pequeño puede ser el punto de partida de algo mucho más grande.',
    },
    worlds: {
      eyebrow: 'Los Cinco Mundos',
      heading: 'Cinco puertas que abrimos juntos',
      body: 'Nuestras experiencias recorren cinco mundos inspirados en el mundo real que nos rodea, cada uno abriendo nuevas formas de explorar, moverse, crear y descubrir. Mundos distintos. Experiencias distintas. Siempre algo nuevo por descubrir.',
      items: [
        { name: 'Ocean', body: 'Explorar el mar a través de los sentidos, el movimiento, la curiosidad y el descubrimiento en el mundo real.' },
        { name: 'Mountain', body: 'Explorar la naturaleza a través del movimiento, el reto, la observación y la aventura.' },
        { name: 'World Around Us', body: 'Descubrir la vida real a través de personas, lugares, oficios, cultura y experiencias cotidianas.' },
        { name: 'Expression', body: 'Convertir ideas y descubrimientos en arte, música, historias, construcción y diseño.' },
        { name: 'Future', body: 'Explorar la invención, la resolución de problemas y nuevas posibilidades, con la tecnología, la robótica y la IA como herramientas para crear, no para sustituir al pensamiento.' },
      ],
    },
    stages: {
      eyebrow: 'El recorrido',
      heading: 'Un camino para cada etapa',
      body: 'Cada niño pertenece a un grupo con nombre propio que se mueve con él según crece. Las familias pueden unirse en cualquier punto del camino.',
      note: 'Los niños de cinco años se sitúan entre Builders I y Builders II según su madurez, no según su fecha de nacimiento.',
    },
    regular: {
      eyebrow: 'A lo largo del año',
      heading: 'Más allá de la experiencia semanal',
      body: 'La membresía va más allá de las experiencias semanales de tu hijo. Nos reunimos regularmente como comunidad, padres y niños por igual, y tienes acceso continuo a nuestros propios expertos. Un lugar donde seguir aprendiendo sobre la maternidad y la paternidad, y sobre vosotros mismos como familia.',
      note: 'Cada mes, nuestros propios expertos abren una sesión para ti: tuya, como parte de la membresía. Cuando invitamos a especialistas de fuera, los socios siempre tienen tarifa de socio.',
      groups: [
        {
          label: 'Parte de tu mundo Narelo',
          items: [
            { name: 'Narelo Experiences', body: 'Un lugar constante donde explorar, crecer y construir relaciones significativas con el tiempo.' },
            { name: 'Community Mornings', body: 'Tiempo para que las familias se conozcan, conecten y crezcan juntas.' },
            { name: 'Expert Insights', body: 'Conversaciones con expertos sobre infancia, desarrollo y vida familiar.' },
          ],
        },
        {
          label: 'También reservable para socios',
          aside: 'y más por venir',
          items: [
            { name: 'Signature Saturdays', body: 'Experiencias especiales de sábado pensadas para el descubrimiento, la creatividad y la aventura.' },
            { name: 'Holiday Experiences', body: 'Experiencias cuidadas durante las vacaciones escolares.' },
          ],
        },
      ],
    },
    personalised: {
      eyebrow: 'Más allá de lo cotidiano',
      heading: 'Diseñado en torno a tu familia',
      body: 'Más allá de la membresía, Narelo también crea experiencias privadas seleccionadas, pensadas a medida de tu hijo y de tu familia.',
      items: [
        { name: 'Experiencias de cumpleaños', body: 'Celebraciones cuidadas e inspiradas en los intereses y la personalidad de tu hijo.' },
        { name: 'Experiencias privadas a medida', body: 'Experiencias personalizadas creadas con cuidado en torno a tu hijo y tu familia.' },
      ],
    },
    closing: {
      headingLines: ['Algunas experiencias', 'se quedan contigo.'],
      body: 'Porque lo que los niños viven se convierte en parte de quienes llegan a ser.',
      ctaLabel: 'Empieza una conversación',
      video: '/video/experiences-closing.mp4',
      poster: '/images/experiences-video-poster.webp',
    },
  },

  stages: {
    stageDetails: [
      {
        name: 'Bloom',
        age: 'Embarazo',
        tagline: 'Un comienzo suave, antes de que llegue tu hijo.',
        summary:
          'Un espacio en calma para futuros padres: tiempo para bajar el ritmo, conectar con otras familias y empezar el camino Narelo antes de que nazca tu hijo.',
        image: '/images/stage-photo-bloom.webp',
      },
      {
        name: 'Nurture',
        age: '0–1 año',
        tagline: 'Sentir, conectar y descubrir juntos.',
        motto: 'Siento y descubro.',
        summary:
          'Un espacio seguro y afectuoso donde los bebés exploran con sus sentidos, mueven su cuerpo y construyen la base de la conexión, la curiosidad y la confianza, junto a su madre o su padre.',
        whatToExpect: [
          'Bienvenida e instalarse: llegada, saludo, exploración libre y acomodarse en el espacio',
          'Conexión entre adulto y bebé: canciones, masaje infantil, movimiento suave y juego de vínculo',
          'Experiencia sensorial temática: un entorno preparado que los bebés exploran a su ritmo',
          'Calma y reflexión: un momento para bajar el ritmo juntos, juego sensorial tranquilo y conexión',
        ],
        image: '/images/stage-photo-nurture.webp',
      },
      {
        name: 'The Nest',
        age: '1–2 años',
        tagline: 'Explorar el mundo a través del movimiento y una independencia que crece.',
        motto: 'Me muevo y exploro.',
        summary:
          'Un espacio activo y alegre donde los más pequeños construyen fuerza, equilibrio y confianza a través del movimiento, el juego y el descubrimiento, dentro y fuera de casa.',
        whatToExpect: [
          'Bienvenida y calentamiento: canciones, movimiento y un ritual de saludo juntos',
          'Circuito de movimiento: trepar, gatear, equilibrarse, empujar, tirar y saltar por un espacio preparado',
          'Exploración temática: juego sensorial, materiales e invitaciones abiertas',
          'Conexión de grupo: juegos, música e historias que construyen habilidades sociales y amistad',
          'Calma y reflexión: respiración, un momento tranquilo o un estiramiento suave para cerrar',
        ],
        image: '/images/stage-photo-nest.webp',
      },
      {
        name: 'Little Beginnings',
        age: '2–3 años',
        tagline: 'Confianza que crece a través de la curiosidad, el movimiento y el descubrimiento.',
        motto: 'Descubro.',
        summary:
          'Primeras aventuras en los Cinco Mundos. Experiencias sensoriales y llenas de juego que despiertan la curiosidad, construyen independencia y crean recuerdos alegres.',
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
        tagline: 'Explorar, crear y empezar a dar sentido al mundo.',
        motto: 'Exploro y creo.',
        summary:
          'Experiencias prácticas en los Cinco Mundos que animan a explorar, crear, preguntar y disfrutar del hacer.',
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
        tagline: 'Preguntar, crear y convertir las ideas en algo real.',
        motto: 'Investigo y construyo.',
        summary:
          'Investigaciones más profundas y experiencias en el mundo real que desarrollan el pensamiento, la colaboración y una independencia creciente.',
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
        tagline: 'Independencia que crece, problemas que se resuelven y un camino propio.',
        motto: 'Voy más hondo y encuentro mi camino.',
        summary:
          'Experiencias que construyen curiosidad, resiliencia y propósito, mientras los niños crecen hacia su propia independencia.',
        whatToExpect: [
          'Aventuras en el mundo real y exploraciones más largas',
          'Investigación, proyectos y expresión creativa',
          'Liderazgo, colaboración e impacto en la comunidad',
          'Retos físicos y desarrollo de habilidades',
          'Reflexión, objetivos y crecimiento personal',
        ],
        image: '/images/world-mountain.webp',
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
  },
};
