/**
 * Hungarian. Mirrors the English in `content/` key for key; the shape is
 * checked against it at build time, so a missing key fails the build.
 *
 * ⚠️ NOT YET READ BY A NATIVE SPEAKER (Vivien, 2026-09-04). Vivien is the
 * obvious reader for this one.
 *
 * Same translation rules as the Spanish in `content/es/`:
 * - Brand names stay in English, because AGENTS.md forbids re-titling them:
 *   Narelo, the Five Worlds (Ocean, Mountain, World Around Us, Expression,
 *   Future), the age groups (Bloom, Nurture, The Nest, Little Beginnings,
 *   Builders I, Builders II, Navigators), Signature Saturdays, Holiday
 *   Experiences, Expert Insights, Community Mornings, Narelo Experiences.
 * - No em dashes, same as the English.
 * - Tone is invitation and wonder, never status.
 * - Informal address throughout, warmer and right for families.
 * - Paths, images, videos, numbers and contact details are untouched.
 * - The WhatsApp prefill is translated so a Hungarian family writes in
 *   Hungarian.
 */
import type { Dict } from '../dictionary';

export const hu: Dict = {
  site: {
    site: {
      name: 'Narelo',
      tagline: 'Privát gyermekkor-tagság',
      locale: 'hu',
      location: 'Marbella, Spanyolország',
      copyright: '© 2026 Narelo. Minden jog fenntartva.',
    },
    nav: [
      { label: 'Mi az a Narelo', href: '/membership/#what' },
      { label: 'Élmények', href: '/experiences/' },
      { label: 'Tagság', href: '/membership/' },
      { label: 'Kik vagyunk', href: '/membership/#who' },
    ],
    headerCta: { label: 'Kezdjünk egy beszélgetést', external: true },
    footerCta: {
      heading: 'Az első Narelo otthonunk idén ősszel nyílik Marbellában.',
      subheading: 'Marbellában kezdünk. Madrid és Mallorca a láthatáron.',
      ctaLabel: 'Kezdjünk egy beszélgetést',
      blurb: 'Privát klub, rendkívüli gyermekkori élmények köré építve.',
    },
    ui: {
      openMenu: 'Menü megnyitása',
      closeMenu: 'Menü bezárása',
      skipToContent: 'Ugrás a fő tartalomra',
      footerContact: 'Kapcsolat',
      languageLabel: 'Nyelv',
      homeLabel: 'kezdőlap',
      galleryAlt: 'Egy pillanat egy Narelo élményből',
      whatToExpect: 'Mire számíthatsz',
      backToTop: 'Vissza a tetejére',
    },
    contact: {
      visitLabel: 'Látogass el hozzánk',
      visitName: 'Narelo, Marbella',
      visitNote: 'Csak előzetes egyeztetéssel. Nagy örömmel fogadunk.',
      emailLabel: 'Email',
      email: 'hello@narelo.es',
      emailHref: 'mailto:hello@narelo.es',
      phoneLabel: 'Hívj vagy írj WhatsAppon',
      phone: '+34 655 366 888',
      phoneHref: 'tel:+34655366888',
      whatsapp:
        'https://wa.me/34655366888?text=Szia%20Narelo%2C%20szeretn%C3%A9k%20t%C3%B6bbet%20megtudni%20a%20csal%C3%A1dunknak%20sz%C3%B3l%C3%B3%20tags%C3%A1gr%C3%B3l.',
    },
    socialIcons: [
      { src: '/images/social-instagram.webp', label: 'Instagram', href: 'https://instagram.com/narelo.eu' },
      { src: '/images/social-whatsapp.webp', label: 'WhatsApp', href: 'https://wa.me/34655366888?text=Szia%20Narelo%2C%20szeretn%C3%A9k%20t%C3%B6bbet%20megtudni%20a%20csal%C3%A1dunknak%20sz%C3%B3l%C3%B3%20tags%C3%A1gr%C3%B3l.' },
      { src: '/images/social-tiktok.webp', label: 'TikTok', href: null },
      { src: '/images/social-facebook.webp', label: 'Facebook', href: null },
    ],
  },

  home: {
    hero: {
      eyebrow: 'Privát gyermekkor-tagság · Marbella',
      headingLines: ['Gyermekkor,', 'mélyen megélve.'],
      lede: 'A Narelo egy tagsági közösség, amely rendkívüli, valós világban átélt élmények köré épül, a várandósságtól nagyjából nyolcéves korig, és azoknak a családoknak, akik együtt nőnek fel a gyerekeikkel.',
      video: '/video/home-hero.mp4',
      poster: '/images/home-hero-poster.webp',
      scrollHint: 'Görgess',
    },
    belief: {
      eyebrow: 'Amiben hiszünk',
      heading: 'A gyerekeknek nem több programra van szükségük. Gazdagabb gyermekkorra.',
      body: 'Az iskola, a képernyők és a zsúfolt hetek között a gyermekkor csendben, a háttérben telik el. Szerintünk az előtérbe való: valódi napok, valódi helyek, valódi emberek, és idő arra, hogy be is fogadjuk őket.',
      pull: 'Hisszük, hogy a legnagyobb ajándék, amit egy gyereknek adhatunk, egy olyan gyermekkor, amely nemcsak az iskolára készíti fel, hanem egy olyan jövőre is, amelyet még el sem tudunk képzelni.',
      image: '/images/home-moment-to-pause.webp',
      imageAlt: 'Egy gyerek megáll a szabadban, és befogadja, ami körülötte van.',
    },
    statement: {
      lines: ['A gyerekek az élményekért jönnek.', 'A családok a közösségért maradnak.'],
    },
    shape: {
      eyebrow: 'Hogyan épül fel egy Narelo nap',
      heading: 'Kis csoportok. Valódi helyek. Senki sem siet.',
      body: 'Minden élmény ugyanarra a formára épül, akár az otthonunkban, akár a tengerparton, akár a város mögötti dombokon történik.',
      facts: [
        { value: '~8', label: 'gyerek egy csoportban', note: 'Elég kevés ahhoz, hogy minden gyereket a nevén ismerjünk, és ne tömegként kelljen kezelni.' },
        { value: '90', label: 'perc együtt', note: 'Elég hosszú ahhoz, hogy megérkezzünk, rendesen felfedezzünk, és visszataláljunk magunkhoz.' },
      ],
      image: '/images/home-not-to-be-rushed.webp',
      imageAlt: 'Kis csoport gyerek fedez fel együtt, sietség nélkül.',
    },
    worlds: {
      eyebrow: 'Az Öt Világ',
      heading: 'Öt út a világ felé',
      body: 'Élményeink öt világon haladnak keresztül, amelyeket a körülöttünk lévő valódi világ ihletett, és mindegyik új utakat nyit a felfedezéshez, a mozgáshoz, az alkotáshoz. Más világok. Más élmények. Mindig van még valami felfedezni való.',
      items: [
        { name: 'Ocean', short: 'A tenger mint élő hely', image: '/images/world-ocean.webp' },
        { name: 'Mountain', short: 'A természet a maga feltételei szerint', image: '/images/world-mountain.webp' },
        { name: 'World Around Us', short: 'Ajtók, amelyeket gyerekek ritkán nyithatnak ki', image: '/images/home-world-built-around-childhood.webp' },
        { name: 'Expression', short: 'Formát adni a gondolatoknak', image: '/images/gallery-02.webp' },
        { name: 'Future', short: 'Kíváncsiság arra, ami változik', image: '/images/contact-hero.webp' },
      ],
      linkLab: 'Az öt világ, teljes egészében',
      linkHref: '/experiences/#worlds',
    },
    journey: {
      eyebrow: 'A legelső pillanattól',
      heading: 'Egy hely, amely együtt nő a gyermekeddel',
      body: 'A családok bármikor csatlakozhatnak. Sokan még a gyerekük születése előtt kezdik, és végigkísérik a következő éveket.',
      stages: [
        { name: 'Bloom', age: 'Várandósság' },
        { name: 'Nurture', age: '0–1' },
        { name: 'The Nest', age: '1–2' },
        { name: 'Little Beginnings', age: '2–3' },
        { name: 'Builders I', age: '3–5' },
        { name: 'Builders II', age: '5–6' },
        { name: 'Navigators', age: '6–8' },
      ],
      note: 'Az ötéveseket érettségük alapján soroljuk a Builders I és a Builders II közé, nem a születési dátum szerint.',
      linkLabel: 'Fedezd fel a korcsoportokat',
      linkHref: '/experiences/#journey',
    },
    promise: {
      eyebrow: 'A Narelo ígéret',
      heading: 'Amire minden család számíthat',
      image: '/images/membership-beach-background.webp',
      items: [
        { title: 'Minden gyereket ismerünk', body: 'Nem egy név a névsorban. A pedagógusok tudják, min dolgozik a gyermeked, mi nehéz neki, és mit szeret.' },
        { title: 'Folytonosság', body: 'Ugyanazok az arcok, ugyanaz a közösség, évről évre. A gyerekek arra építenek, ami korábban volt, ahelyett, hogy minden félévben elölről kezdenék.' },
        { title: 'Védett környezet', body: 'Kicsiben tartjuk a csoportokat, és gondosan óvjuk a közösséget. Ez teszi lehetővé az összes többit.' },
        { title: 'Odatartozás, nem részvétel', body: 'A tagság közelebb áll egy második családhoz, mint egy helyhez, ahol leteszed a gyermeked. A családok is részei.' },
      ],
    },
    home: {
      eyebrow: 'Marbella',
      heading: 'Ahol a Narelo elkezdődik',
      body: 'Egyik oldalon a tenger, a másikon a hegyek, és egy családokból álló közösség, amelyet gondosan és lassan választunk. Az első Narelo otthonunk itt nyílik idén ősszel, és ez az első, nem az utolsó.',
      image: '/images/home-discovery.webp',
      imageAlt: 'A marbellai tengerpart, ahol az első Narelo otthon nyílik.',
    },
    closing: {
      headingLines: ['A gyermekkor', 'egyszer történik meg.'],
      body: 'A tagság kis létszámban nyílik meg az első otthonunk előtt. Ha ez a ti családotokról szól, szívesen beszélgetnénk.',
      ctaLabel: 'Kezdjünk egy beszélgetést',
    },
  },

  membership: {
    chapters: [
      { id: 'what', label: 'Mi az a Narelo' },
      { id: 'experience', label: 'Az élmények' },
      { id: 'ages', label: 'Korcsoportok' },
      { id: 'how', label: 'Hogyan működik' },
      { id: 'who', label: 'Kik vagyunk' },
      { id: 'join', label: 'Hogyan csatlakozz' },
    ],
    hero: {
      eyebrow: 'Tagság',
      headingLines: ['Odatartozás,', 'nem foglalás.'],
      lede: 'Privát tagság olyan családoknak, akik azt szeretnék, hogy a gyermekkorra a gyerekeik tényleg emlékezzenek.',
      image: '/images/membership-hero.webp',
    },
    whatItIs: {
      eyebrow: 'Mi az a Narelo',
      heading: 'Tagsági közösség, rendkívüli élmények köré építve',
      body: 'A Narelo privát klub, amely rendkívüli gyermekkori élmények köré épül, és a természeten, a kreativitáson, a mozgáson és a valódi kalandokon keresztül segíti a gyerekek fejlődését, egy olyan tagsági közösségben, ahol hasonlóan gondolkodó családok nőnek fel együtt.',
      body2: 'A Narelo több mint gyerekprogram: tagsági közösség, ahol a gyerekek magabiztosságot, önállóságot és valódi kapcsolatokat építenek, a szülők tovább tanulnak a szakértőinktől, és hasonlóan gondolkodó családok nőnek fel együtt, felkészítve a gyerekeket arra, hogy egy folyamatosan változó világban is kibontakozzanak.',
      pull: 'A gyerekek az élményekért jönnek. A családok a közösségért maradnak.',
      image: '/images/img-1667.webp',
      imageAlt: 'Gyerekek a valódi világban egy Narelo élmény közben.',
    },
    isNot: {
      eyebrow: 'És ami nem',
      items: ['Egy foglalkozás', 'Egy bölcsőde', 'Egy játszóház', 'Még egy program'],
      line: 'A Narelo egy tagság, amelyhez a családod tartozik.',
    },
    different: {
      eyebrow: 'Mitől más a Narelo',
      items: [
        {
          n: '01',
          title: 'Hely, ahová vissza lehet térni',
          body: 'Nem egyszeri program, hanem állandó pont az évben: élmények, kapcsolatok és közös pillanatok, amelyekhez a gyermeked visszatér.',
        },
        {
          n: '02',
          title: 'Ritmus, amely veled együtt nő',
          body: 'Egyik szakaszból a másikba, valódi folytonossággal, anélkül, hogy minden évben új programot kellene keresni.',
        },
        {
          n: '03',
          title: 'Ismerten, nem csak jelen',
          body: 'Kis, állandó csoportokban minden gyereket egyéniségként látunk, nem egynek a sok közül.',
        },
      ],
    },
    childExperience: {
      eyebrow: 'Amit a gyermeked átél',
      heading: 'Valódi helyek, kis csoportok, és idő arra, hogy mélyre menjünk',
      body: 'Nagyjából hároméves kortól az év öt világon halad keresztül. A kisebbek a mozgással, az érzékekkel és a kapcsolódással kezdik, és fokozatosan nőnek bele.',
      worldsLinkLabel: 'Az öt világ, teljes egészében',
      worldsLinkHref: '/experiences/#worlds',
      note: 'Az élmények a marbellai otthonunkban és jóval azon túl zajlanak: tengerparton, erdőben és a valódi élet helyszínein. A kisebbek csoportjaiba szülő is jöhet; a nagyobbak egyedül érkeznek.',
      formatLinkLabel: 'Hogyan épül fel egy élmény',
      formatLinkHref: '/experiences/#format',
    },
    ageGroups: {
      eyebrow: 'A legelső pillanattól',
      heading: 'Egy hely, amely együtt nő a gyermekeddel',
      body: 'Minden gyerek egy néven nevezett csoporthoz tartozik, amely vele együtt halad, ahogy nő. A családok bármikor csatlakozhatnak, és sokan még a gyerekük születése előtt kezdik.',
      note: 'Az ötéveseket érettségük alapján soroljuk a Builders I és a Builders II közé, nem a születési dátum szerint.',
      linkLabel: 'Nézd meg, mit tartalmaz az egyes szakaszok',
      linkHref: '/experiences/#journey',
    },
    howItWorks: {
      eyebrow: 'Hogyan működik a tagság',
      heading: 'Egy tagság, egy folyamatos hely',
      body: 'A gyermekednek helye van a saját korcsoportjában, nem egy időpontja a naptárban: heti egy élmény, a valódi világban, ugyanazokkal a pedagógusokkal és ugyanazzal a kis baráti körrel.',
      items: [
        {
          n: '01',
          title: 'Valódi helyek, nem négy fal',
          body: 'Egy élmény elviheti a csoportot a tengerpartra, az erdőbe, vagy azokhoz az emberekhez és mesterségekhez, amelyek a hétköznapi élet mögött állnak. Élménynek hívjuk, nem foglalkozásnak, mert ezt építjük: időt, amit a gyermeked átél, nem tananyagot, amit végigül.',
        },
        {
          n: '02',
          title: 'Együtt nő velük',
          body: 'Amikor a gyermeked a következő korcsoportba lép, a tagsága vele együtt lép tovább. Semmi sem kezdődik elölről.',
        },
        {
          n: '03',
          title: 'A családok is tagok',
          body: 'A közösségi reggelek, a szakértői alkalmak és a találkozók legalább annyira a szülőkről szólnak, mint a gyerekekről.',
        },
      ],
      note: 'A helyek szándékosan korlátozottak. A csoportok kicsik maradnak, így minden korcsoportba csak néhány család fér be.',
    },
    included: {
      eyebrow: 'A tagság tartalmazza',
      heading: 'Mit kap valójában a családod?',
      image: '/images/gallery-04.webp',
      cards: [
        {
          title: 'A gyermeked saját pedagógusa, veled párbeszédben',
          meta: 'Rendszeres négyszemközti beszélgetések',
          body: 'Megismerjük, mi ragadja meg a gyermekedet, mi jelent neki kihívást és hogyan fejlődik, és rendszeres négyszemközti beszélgetéseken megosztjuk veled ezt az utat.',
        },
        {
          title: 'A félévük, megörökítve és megőrizve',
          meta: 'Exkluzív digitális visszatekintés minden félévben',
          body: 'Gondosan összeállított, modern digitális visszatekintés minden félév végén, amely megőrzi a fontos élményeket és felfedezéseket, hogy vissza lehessen térni hozzájuk.',
        },
        {
          title: 'A tágabb Narelo világ, veled együtt növekedve',
          meta: 'Élmények, útmutatás és közösség',
          body: 'Hasonlóan gondolkodó tagokból álló közösség, ahol gyerekek és szülők idővel valódi kapcsolatokat építenek.',
        },
      ],
      groups: [
        {
          label: 'Szintén a tagságod része',
          items: [
            { title: 'Heti élmények', body: 'A gyermeked állandó helye a saját korcsoportjában, a tanév minden hetében.' },
            { title: 'Elsőbbségi foglalás', body: 'Elsőként férsz hozzá élményekhez, eseményekhez és korlátozott helyekhez, mielőtt szélesebb körben megnyílnának.' },
          ],
        },
        {
          label: 'Tagoknak, tagsági áron',
          items: [
            { title: 'Signature Saturdays' },
            { title: 'Expert Insights' },
            { title: 'Holiday Experiences' },
            { title: 'Community Mornings' },
            { title: 'A tágabb Narelo világ' },
          ],
          linkLabel: 'Mi is pontosan mindez',
          linkHref: '/experiences/',
        },
      ],
    },
    proof: {
      eyebrow: 'Kik állnak mögötte',
      heading: 'Natalie és Vivien',
      people: [
        {
          name: 'Natalie Curavic',
          role: 'Alapító és CEO',
          image: '/images/founder-natalie.webp',
          body: 'Natalie kulturális geográfiából szerzett M.A. diplomát, és MBA-t a FOM University of Applied Sciences egyetemen. Több mint 15 éve dolgozik humánerőforrás területen, ahol mindig az emberek álltak a középpontban, és az, ami segít nekik fejlődni és kiteljesedni. Prenatális jógaoktatói képzettséggel is rendelkezik. Saját útja az anyaságba elmélyítette benne, mennyit számít az odatartozás, a kapcsolódás és a közösség, nemcsak a gyerekeknek, hanem a szülőknek is.',
          quote: 'Az anyaság sokkal korábban feltette bennem ezt a kérdést. Egy gyorsan változó technológiai világban azt akartam, hogy a gyerekeknek valódi élményeik legyenek, amelyek kíváncsiságot, magabiztosságot, önállóságot és kapcsolódást építenek a körülöttük lévő világhoz. Ebből a gondolatból lett a Narelo.',
        },
        {
          name: 'Vivien Vörös',
          role: 'Társalapító és oktatási vezető',
          image: '/images/founder-vivien.webp',
          body: 'Vivien gyógypedagógiát végzett az Eötvös Loránd Tudományegyetemen, majd logopédiai és komplex mozgásterápiás képesítést szerzett. Több mint hét éve dolgozik iskolákban, terápiás környezetben és bölcsődékben, mindig ugyanazzal a fókusszal: valóban megismerni minden gyereket.',
          quote: 'Néhány gyerek feltűnik. Azt szeretném, hogy a Narelo legyen az a hely, ahol mindegyik feltűnik.',
        },
      ],
    },
    joining: {
      eyebrow: 'Hogyan csatlakozz',
      heading: 'Négy lépés, és mindenekelőtt egy beszélgetés',
      steps: [
        { n: '01', title: 'Kezdjünk egy beszélgetést', body: 'Írj nekünk WhatsAppon. Nincs kitöltendő űrlap, és nincs jelentkezés, mielőtt beszéltünk volna.', whatsapp: true },
        { n: '02', title: 'Megtaláljuk a helyét', body: 'Megkérdezzük, hány éves a gyermeked, majd elmondjuk, melyik korcsoportba tartozik és hol van szabad hely.' },
        { n: '03', title: 'Egy családi beszélgetés', body: 'Tizenöt-húsz perc együtt: kik vagytok, mit reméltek, és minden kérdés, ami felmerül. Ha inkább előbb olvasnád át nyugodtan, elküldjük írásban a teljes képet, és utána keresünk.' },
        { n: '04', title: 'Egy meghívás', body: 'Ha mindkét oldalról jó, személyes meghívás, a tagsági megállapodás és egy kezdési dátum. Utána fogadtatás, és a gyermeked első élménye.' },
      ],
      reassurance: 'A közösséget kicsiben tartjuk és gondosan választunk. Nem azért, hogy zártak legyünk, hanem mert a kis csoportok és egy megállapodott közösség maga a lényeg. Ha nincs hely a gyermeked korcsoportjában, amikor beszélünk, felvehetünk titeket a várólistára, és személyesen jelentkezünk, amint felszabadul egy hely.',
      whatsappLabel: 'Írj nekünk WhatsAppon',
    },
    closing: {
      headingLines: ['Gyere el, és nézd meg,', 'hogy passzol-e.'],
      body: 'Kezdd egy üzenettel, kötelezettség nélkül. Csak egy beszélgetés a családodról.',
      ctaLabel: 'Kezdjünk egy beszélgetést',
      secondaryLabel: 'Vagy írj emailt',
      video: '/video/membership-closing.mp4',
      poster: '/images/membership-video-poster.webp',
    },
  },

  experiences: {
    hero: {
      eyebrow: 'Élmények',
      headingLines: ['Élmények, amelyek', 'a gyermekeddel nőnek'],
      lede: 'Gondosan felépített élmények, amelyek kíváncsiságra, kreativitásra és kapcsolódásra hívnak, a gyermeked születése előttől nagyjából nyolcéves korig.',
      image: '/images/experiences-hero.webp',
    },
    format: {
      eyebrow: 'Egy élmény formája',
      heading: 'Kilencven perc, egy kis kör, és egy valódi hely',
      body: 'Az élmények a marbellai otthonunkban és jóval azon túl zajlanak: a tengerparton, az erdőben, és azokon a helyeken, ahol a hétköznapi élet valóban történik. Semmi sem siet, és semmi sem töltelék.',
      body2: 'A gyerekek együtt fedeznek fel, mozognak, kérdeznek, építenek, alkotnak és oldanak meg feladatokat, olyan pedagógusok vezetésével, akik tudják, mikor kell támogatni, és mikor kell teret adni, hogy megtalálják a saját útjukat.',
      body3: 'Hisszük, hogy a gyerekeknek mindkettőre szükségük van: erős kapcsolatra a valódi világgal, és magabiztosságra ahhoz, hogy eligazodjanak az eljövendőben. Ezért találkozhat a természet, a mozgás és a valós élmény a kreativitással, a robotikával és a mesterséges intelligenciával, mindig céllal.',
      pull: 'Gyökerekkel a valódi világban. Készen az eljövendőre.',
      facts: [
        { value: '90', label: 'perc együtt', note: 'Elég hosszú ahhoz, hogy megérkezzünk, rendesen felfedezzünk, és visszataláljunk magunkhoz.' },
        { value: '~8', label: 'gyerek egy csoportban', note: 'Elég kevés ahhoz, hogy minden gyereket a nevén ismerjünk, és ne tömegként kelljen kezelni.' },
        { value: '12', label: 'élmény egy évadban', note: 'Heti egy a tanév során, hogy az év épüljön, ne induljon újra.' },
      ],
      note: 'A kisebbek csoportjaiba szülő is jöhet. A nagyobbak egyedül érkeznek.',
      image: '/images/img-5211.webp',
      imageAlt: 'Egy Narelo élmény egy valódi helyszínen.',
    },
    spark: {
      eyebrow: 'Valami ilyen aprósággal is kezdődhet',
      heading: 'Egy gyerek felfedez valami váratlant',
      steps: ['Megállunk', 'Közelebbről megnézzük', 'Együtt csodálkozunk', 'A kíváncsiságból felfedezés lesz'],
      closing: 'Egy apró pillanat valami sokkal nagyobb kiindulópontja lehet.',
    },
    worlds: {
      eyebrow: 'Az Öt Világ',
      heading: 'Öt ajtó, amelyet együtt nyitunk ki',
      body: 'Élményeink öt világon haladnak keresztül, amelyeket a körülöttünk lévő valódi világ ihletett, és mindegyik új utakat nyit a felfedezéshez, a mozgáshoz, az alkotáshoz. Más világok. Más élmények. Mindig van még valami felfedezni való.',
      items: [
        { name: 'Ocean', body: 'A tenger felfedezése az érzékeken, a mozgáson, a kíváncsiságon és a valós felfedezésen keresztül.' },
        { name: 'Mountain', body: 'A természet felfedezése mozgáson, kihíváson, megfigyelésen és kalandon keresztül.' },
        { name: 'World Around Us', body: 'A valódi élet felfedezése embereken, helyeken, szakmákon, kultúrán és hétköznapi élményeken keresztül.' },
        { name: 'Expression', body: 'Gondolatok és felfedezések átfordítása művészetté, zenévé, történetté, építéssé és tervezéssé.' },
        { name: 'Future', body: 'A feltalálás, a problémamegoldás és az új lehetőségek felfedezése, ahol a technológia, a robotika és a mesterséges intelligencia az alkotás eszköze, nem a gondolkodás helyettesítője.' },
      ],
    },
    stages: {
      eyebrow: 'Az út',
      heading: 'Minden szakaszhoz saját ösvény',
      body: 'Minden gyerek egy néven nevezett csoporthoz tartozik, amely vele együtt halad, ahogy nő. A családok az út bármely pontján csatlakozhatnak.',
      note: 'Az ötéveseket érettségük alapján soroljuk a Builders I és a Builders II közé, nem a születési dátum szerint.',
    },
    regular: {
      eyebrow: 'Az év során',
      heading: 'A heti élményen túl',
      body: 'A tagság túlmutat a gyermeked heti élményein. Rendszeresen összejövünk közösségként, szülők és gyerekek egyaránt, és folyamatosan elérhetők a saját szakértőink. Egy hely, ahol tovább tanulhattok a szülőségről és magatokról mint családról.',
      note: 'Minden hónapban a saját szakértőink megnyitnak egy alkalmat neked: a tiéd, a tagság részeként. Amikor kívülről hívunk szakembert, a tagok mindig tagsági áron vesznek részt.',
      groups: [
        {
          label: 'A Narelo világod része',
          items: [
            { name: 'Narelo Experiences', body: 'Állandó hely a felfedezéshez, a fejlődéshez és a valódi kapcsolatok építéséhez, időről időre.' },
            { name: 'Community Mornings', body: 'Idő arra, hogy a családok találkozzanak, kapcsolódjanak és együtt fejlődjenek.' },
            { name: 'Expert Insights', body: 'Beszélgetések szakértőkkel a gyermekkorról, a fejlődésről és a családi életről.' },
          ],
        },
        {
          label: 'Tagoknak is foglalható',
          aside: 'és még több jön',
          items: [
            { name: 'Signature Saturdays', body: 'Különleges szombati élmények felfedezésre, alkotásra és kalandra tervezve.' },
            { name: 'Holiday Experiences', body: 'Gondosan összeállított élmények az iskolai szünetekben.' },
          ],
        },
      ],
    },
    personalised: {
      eyebrow: 'A hétköznapin túl',
      heading: 'A családodra tervezve',
      body: 'A tagságon túl a Narelo válogatott privát élményeket is készít, gondosan a gyermeked és a családod köré szabva.',
      items: [
        { name: 'Születésnapi élmények', body: 'Gondosan összeállított ünneplések a gyermeked érdeklődéséből és személyiségéből kiindulva.' },
        { name: 'Egyedi privát élmények', body: 'Személyre szabott élmények, gondosan a gyermeked és a családod köré építve.' },
      ],
    },
    closing: {
      headingLines: ['Néhány élmény', 'veled marad.'],
      body: 'Mert amit a gyerekek átélnek, része lesz annak, akivé válnak.',
      ctaLabel: 'Kezdjünk egy beszélgetést',
      video: '/video/experiences-closing.mp4',
      poster: '/images/experiences-video-poster.webp',
    },
  },

  stages: {
    stageDetails: [
      {
        name: 'Bloom',
        age: 'Várandósság',
        tagline: 'Szelíd kezdet, még mielőtt a gyermeked megérkezik.',
        summary:
          'Nyugodt tér a leendő szülőknek: idő a lassításra, más családokkal való kapcsolódásra, és arra, hogy a Narelo út még a gyermeked születése előtt elkezdődjön.',
        image: '/images/stage-photo-bloom.webp',
      },
      {
        name: 'Nurture',
        age: '0–1 év',
        tagline: 'Érzékelni, kapcsolódni és együtt felfedezni.',
        motto: 'Érzékelek és felfedezek.',
        summary:
          'Biztonságos, szeretetteljes tér, ahol a babák az érzékeikkel fedeznek fel, mozgatják a testüket, és megépítik a kapcsolódás, a kíváncsiság és a magabiztosság alapjait, a szülőjükkel együtt.',
        whatToExpect: [
          'Érkezés és megérkezés: megérkezés, köszönés, szabad felfedezés és elhelyezkedés a térben',
          'Szülő és baba kapcsolódása: dalok, babamasszázs, finom mozgás és játékos kötődés',
          'Tematikus érzékelési élmény: előkészített környezet, amelyet a babák a saját tempójukban fedeznek fel',
          'Elcsendesedés: közös lassítás, nyugodt érzékelési játék és kapcsolódás',
        ],
        image: '/images/stage-photo-nurture.webp',
      },
      {
        name: 'The Nest',
        age: '1–2 év',
        tagline: 'A világ felfedezése mozgáson és növekvő önállóságon keresztül.',
        motto: 'Mozgok és felfedezek.',
        summary:
          'Aktív, örömteli tér, ahol a kicsik erőt, egyensúlyt és magabiztosságot építenek mozgáson, játékon és felfedezésen keresztül, bent és a szabadban egyaránt.',
        whatToExpect: [
          'Érkezés és bemelegítés: dalok, mozgás és közös köszönő rituálé',
          'Mozgáspálya: mászás, kúszás, egyensúlyozás, tolás, húzás és ugrás egy előkészített térben',
          'Tematikus felfedezés: érzékelési játék, anyagok és nyitott végű felhívások',
          'Csoportkapcsolódás: játékok, zene és történetek, amelyek szociális készségeket és barátságot építenek',
          'Elcsendesedés: légzés, egy csendes pillanat vagy egy finom nyújtás a zárásra',
        ],
        image: '/images/stage-photo-nest.webp',
      },
      {
        name: 'Little Beginnings',
        age: '2–3 év',
        tagline: 'Növekvő magabiztosság kíváncsiságon, mozgáson és felfedezésen keresztül.',
        motto: 'Felfedezek.',
        summary:
          'Első kalandok az Öt Világban. Érzékelésre épülő, játékos élmények, amelyek felkeltik a kíváncsiságot, önállóságot építenek és örömteli emlékeket teremtenek.',
        whatToExpect: [
          'Érzékelési felfedezés a természetben és valódi környezetben',
          'Játékalapú tanulás mozgáson és felfedezésen keresztül',
          'Egyszerű alkotó élmények és zene',
          'Találkozás állatokkal, textúrák és anyagok felfedezése',
          'Az első önállóság és a társas kapcsolatok építése',
        ],
        image: '/images/stage-photo-little-beginnings.webp',
      },
      {
        name: 'Builders I',
        age: '3–5 év',
        tagline: 'Felfedezni, alkotni, és érteni kezdeni a világot.',
        motto: 'Felfedezek és alkotok.',
        summary:
          'Gyakorlati élmények az Öt Világban, amelyek felfedezésre, alkotásra, kérdezésre és az alkotás örömére hívnak.',
        whatToExpect: [
          'Természetjárás és szabadtéri kalandok',
          'Alkotó projektek természetes és újrahasznosított anyagokból',
          'Mozgás, jóga és testtudat',
          'Zene, történetek, dráma és képzeletjáték',
          'Csoportos kihívások, csapatmunka és problémamegoldás',
        ],
        image: '/images/gallery-02.webp',
      },
      {
        name: 'Builders II',
        age: '5–6 év',
        tagline: 'Kérdezni, alkotni, és a gondolatokat valósággá tenni.',
        motto: 'Kutatok és építek.',
        summary:
          'Mélyebb kutatások és valós élmények, amelyek fejlesztik a gondolkodást, az együttműködést és a növekvő önállóságot.',
        whatToExpect: [
          'Elmélyült természeti és helyi kutatások',
          'Kis projektek, kísérletek és alkotások',
          'Kihívást jelentő mozgás és szabadtéri tevékenységek',
          'Találkozás szakértőkkel, látogatás inspiráló helyeken',
          'Tervezés, reflexió és a gondolatok megosztása',
        ],
        image: '/images/home-not-to-be-rushed.webp',
      },
      {
        name: 'Navigators',
        age: '6–8 év',
        tagline: 'Növekvő önállóság, problémamegoldás és a saját út megtalálása.',
        motto: 'Mélyebbre megyek, és megtalálom az utamat.',
        summary:
          'Élmények, amelyek kíváncsiságot, kitartást és célt építenek, miközben a gyerekek belenőnek a saját önállóságukba.',
        whatToExpect: [
          'Valós kalandok és hosszabb felfedezések',
          'Kutatás, projektek és alkotó önkifejezés',
          'Vezetés, együttműködés és közösségi hatás',
          'Fizikai kihívások és készségfejlesztés',
          'Reflexió, célkitűzés és személyes fejlődés',
        ],
        image: '/images/world-mountain.webp',
      },
    ],
  },

  community: {
    hero: {
      headingLine1: 'Egy közösség, amely',
      headingLine2: 'veled együtt nő',
      image: '/images/community-hero.webp',
    },
    testimonials: [
      { quote: '“A gyerekek fantasztikusan érezték magukat, és végig teljesen benne voltak az ünneplésben”', attribution: '- MARÍA · NARELO CSALÁD' },
      { quote: '“A lányom minden élményt alig vár. És én is.”', attribution: '- TESSA · NARELO CSALÁD' },
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
      heading: 'Egy hely, ahová tartozni lehet',
      body: 'Ahol a gyerekek nőnek, a családok kapcsolódnak, és közösen születnek az emlékek.',
    },
    events: {
      heading: 'Pillanatok a kapcsolódásra és a közös fejlődésre',
      body: 'Közösségi élmények, amelyeket azért hoztunk létre, hogy a családok találkozzanak, tanuljanak, megosszák egymással a dolgaikat és értékes pillanatokat teremtsenek.',
      ctaLabel: 'MINDEN ESEMÉNY',
      ctaHref: '/events',
      emptyState: 'Jelenleg nincsenek események',
      video: '/video/community-band.mp4',
      poster: '/images/community-video-poster.webp',
    },
    journalTeaser: {
      heading: 'Tudás, amely elkísér',
      body: 'Átgondolt írások és szakértői nézőpontok a mai családi élet támogatására.',
      ctaLabel: 'NAPLÓ',
      ctaHref: '/journal',
    },
  },

  pages: {
    contactPage: {
      heading: 'Örülnénk, ha hallanánk felőled.',
      sub: 'Itt vagyunk, hogy megválaszoljuk a kérdéseidet, és segítsünk megtalálni a családodhoz illő élményt.',
      formHeading: 'Mesélj egy kicsit magatokról',
      submitLabel: 'KÜLDÉS',
      image: '/images/contact-hero.webp',
      video: '/video/contact-band.mp4',
      poster: '/images/contact-video-poster.webp',
      fields: [
        { name: 'name', label: 'Név', type: 'text', required: true, autoComplete: 'name' },
        { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
        { name: 'phone', label: 'Telefonszám', type: 'tel', required: true, autoComplete: 'tel' },
        { name: 'message', label: 'Mesélj arról, mit kerestek…', type: 'textarea', required: true, autoComplete: 'off' },
      ],
    },
    journalPage: {
      title: 'Napló',
      tabLabel: 'Minden bejegyzés',
      emptyHeading: 'Nézz vissza hamarosan',
      emptyBody: 'Amint megjelennek a bejegyzések, itt fogod látni őket.',
    },
    eventsPage: {
      title: 'Események',
      emptyHeading: 'Jelenleg nincsenek események',
    },
  },
};
