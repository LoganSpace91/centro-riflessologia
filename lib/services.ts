export type Service = {
  slug: string
  /** Titolo mostrato in hero (h1). */
  title: string
  subtitle: string
  /** Titolo e descrizione della card in /servizi e "Altri trattamenti". */
  cardTitle: string
  cardDescription: string
  image: string
  metaTitle: string
  description: string
  keywords: string[]
  waMessage: string
  duration: string
  price: string
  priceNote?: string
  about: { heading: string; text: string }[]
  benefits?: { title: string; items: string[] }
  how: string
  forWho?: string
  faq: { q: string; a: string }[]
}

export const SERVICES: Service[] = [
  {
    slug: 'massaggio-riflessologia-corpo',
    title: 'Massaggio corpo con riflessologia plantare',
    subtitle: 'Unisce manualità distensive e stimolazione dei punti riflessi del piede per riequilibrare tutto il corpo.',
    cardTitle: 'Massaggio corpo con riflessologia plantare',
    cardDescription: 'Massaggio mirato ai punti riflessi dei piedi per favorire equilibrio e rilassamento.',
    image: '/piede_2.jpg',
    metaTitle: 'Massaggio corpo con riflessologia plantare',
    description:
      'Massaggio corpo con riflessologia plantare a San Bonifacio e Verona: trattamento distensivo e punti riflessi per un benessere profondo.',
    keywords: ['Massaggio', 'Riflessologia', 'piedi', 'professionisti', 'San Bonifacio', 'Riflessologia plantare Verona'],
    waMessage: 'Vorrei prenotare il massaggio corpo con riflessologia plantare',
    duration: '45 min',
    price: '50€',
    priceNote: 'Possibilità di percorsi personalizzati su richiesta.',
    about: [
      {
        heading: "Cos'è la riflessologia plantare",
        text: "La riflessologia plantare è un'arte antica che ascolta il corpo partendo dai piedi. Attraverso un massaggio delicato ma profondo sui punti riflessi della pianta, il corpo ritrova il suo naturale equilibrio e un senso di rilassamento profondo. Ogni punto nei piedi corrisponde a un organo o a una parte del corpo, e stimolandoli si favorisce il benessere totale, riducendo le tensioni e rinvigorendo corpo e mente.",
      },
    ],
    benefits: {
      title: 'I benefici principali',
      items: [
        'Scioglie lo stress e dona una calma immediata',
        'Migliora la circolazione, aiutando il corpo a rigenerarsi',
        'Allevia dolori muscolari e tensioni, riportando leggerezza',
        'Favorisce un sonno più profondo e rigenerante',
        "Stimola le difese naturali dell'organismo",
        'Dona una sensazione di armonia dentro e fuori',
      ],
    },
    how: "Dopo un breve colloquio per comprendere le tue esigenze, il massaggiatore lavora con dolci pressioni e carezze sui piedi. Ogni movimento è pensato per liberare l'energia e ristabilire l'equilibrio. La seduta dura circa 45 minuti e, già dalla prima, puoi percepire le tensioni sciogliersi.",
    forWho:
      'Perfetto per chi desidera prendersi cura di sé in modo naturale, ritrovare serenità e vivere con più energia. Indicato in caso di stress, tensioni muscolari, mal di testa o semplicemente per regalarsi un momento di relax totale. Adatto anche ai bambini con manualità dolce e rispettosa.',
    faq: [
      {
        q: 'Serve preparazione particolare?',
        a: 'È sufficiente indossare abbigliamento comodo e evitare pasti molto pesanti nelle due ore precedenti la seduta.',
      },
      { q: 'È un trattamento doloroso?', a: 'No. Le manualità sono dolci ma efficaci, sempre calibrate in base alla tua sensibilità.' },
    ],
  },
  {
    slug: 'riflessologia-impacco',
    title: 'Riflessologia con impacco terapeutico',
    subtitle: 'La sinergia tra riflessologia plantare e impacco caldo/funzionale per un rilassamento profondo.',
    cardTitle: 'Massaggio corpo con riflessologia plantare + impacco terapeutico',
    cardDescription: 'Riflessologia dei piedi con applicazione di impacco: azione sinergica, profondo relax.',
    image: '/images/foot-massage-2.jpg',
    metaTitle: 'Riflessologia plantare con impacco terapeutico',
    description:
      'Massaggio di riflessologia plantare con impacco terapeutico a San Bonifacio e Verona: trattamento sinergico per benessere e relax.',
    keywords: ['Massaggio', 'Riflessologia', 'piedi', 'professionisti', 'San Bonifacio', 'Riflessologia plantare Verona'],
    waMessage: 'Prenotazione Riflessologia con impacco',
    duration: '50–60 min',
    price: '55€',
    priceNote: 'Possibilità di percorsi personalizzati.',
    about: [
      {
        heading: 'Un trattamento dolce e rigenerante per corpo e anima',
        text: "Questo massaggio speciale unisce la riflessologia plantare a un impacco terapeutico avvolgente. Mentre le mani lavorano sui punti riflessi dei piedi, l'impacco caldo dalle proprietà lenitive e antinfiammatorie amplifica l'effetto rilassante e rigenerante del trattamento.",
      },
    ],
    benefits: {
      title: "Benefici dell'unione sinergica",
      items: [
        "Relax profondo grazie all'azione combinata di impacco caldo e stimolazione riflessa",
        'Miglioramento della circolazione sanguigna e linfatica, con eliminazione di tossine e gonfiori',
        'Sollievo da dolori muscolari e articolari per effetto antinfiammatorio e rilassante',
        'Sensazione di leggerezza e benessere che si irradia in tutto il corpo',
        'Riequilibrio psicofisico e rivitalizzazione energetica',
      ],
    },
    how: "Si inizia con un massaggio riflessologico ai piedi per sciogliere stress e tensioni. Successivamente viene applicato un impacco caldo specifico (a base di erbe, alghe o oli naturali) lasciato agire alcuni minuti. Durante l'impacco, il massaggiatore continua con manovre dolci per integrare l'effetto e portare a un rilassamento profondo e completo.",
    forWho:
      "Ideale per chi cerca un rimedio naturale contro stress, stanchezza muscolare, dolori articolari o piedi stanchi e gonfi. Perfetto per chi desidera migliorare la circolazione e vivere un'esperienza di massaggio completa e rigenerante.",
    faq: [
      {
        q: 'Serve preparazione?',
        a: 'È sufficiente indossare abiti comodi e arrivare qualche minuto prima. Evita pasti molto pesanti nelle ore precedenti.',
      },
      { q: "L'impacco è sempre lo stesso?", a: 'No, viene scelto di volta in volta in base alle tue esigenze e alla risposta del corpo.' },
    ],
  },
  {
    slug: 'massaggio-parziale-bambino',
    title: 'Massaggio corpo parziale / bambino',
    subtitle: 'Un trattamento breve e mirato, pensato per sciogliere tensioni con dolcezza.',
    cardTitle: 'Massaggio corpo parziale / bambino',
    cardDescription: 'Trattamento delicato, mirato a zone specifiche. Ideale anche per i più piccoli.',
    image: '/Bambino_1.jpg',
    metaTitle: 'Massaggio corpo parziale / bambino',
    description: 'Trattamento mirato e delicato per aree specifiche o per bambini: approccio dolce e personalizzato.',
    keywords: ['Massaggio', 'piedi', 'San Bonifacio', 'professionisti'],
    waMessage: 'Prenotazione Massaggio parziale/bambino',
    duration: '25–30 min',
    price: '35€',
    about: [
      {
        heading: "Un massaggio d'amore, delicato e rispettoso",
        text: "Trattamento speciale pensato per le pelli più sensibili: un momento di cura che dona sollievo e benessere senza mai forzare il bambino. Un gesto d'affetto che aiuta a ritrovare calma e serenità.",
      },
      {
        heading: "Cos'è il massaggio per il bambino",
        text: "Più che un tocco, è un linguaggio d'amore: movimenti morbidi e ritmati sciolgono tensioni, stimolano la circolazione e favoriscono uno sviluppo armonioso. I gesti rispettano sempre i segnali del piccolo, creando un'atmosfera serena e rassicurante.",
      },
    ],
    benefits: {
      title: 'Benefici',
      items: [
        'Calma il sistema nervoso e favorisce il relax',
        'Aiuta la digestione e allevia piccoli fastidi come le coliche',
        'Stimola la crescita armoniosa e la coordinazione',
        'Genera comfort, sicurezza e un legame profondo',
      ],
    },
    how: 'Si esegue in un ambiente caldo e tranquillo, con luci soffuse e, se piace, musica dolce. Si usa un olio naturale adatto alla pelle delicata del bambino e le mani scorrono con dolcezza su gambe, braccia, pancia e schiena, rispettando sempre il ritmo del piccolo.',
    faq: [
      { q: 'Si può fare a tutte le età?', a: "Sì, modulando intensità e durata in base all'età e alla sensibilità." },
      { q: 'Serve preparazione?', a: 'Abbigliamento comodo e, se possibile, un pasto leggero prima della seduta.' },
    ],
  },
  {
    slug: 'alius-corpo',
    title: 'Trattamento corpo ALIUS',
    subtitle: "Un'attenzione mirata agli inestetismi con approccio dolce e personalizzato.",
    cardTitle: 'Trattamento corpo per inestetismo ALIUS',
    cardDescription: 'Percorso dedicato agli inestetismi con tecniche dolci e prodotti mirati.',
    image: '/images/bamboo-leaves.jpg',
    metaTitle: 'Trattamento corpo per inestetismo ALIUS',
    description: 'Percorso corpo dedicato agli inestetismi: tecniche dolci, prodotti mirati, benessere globale.',
    keywords: ['Massaggio', 'San Bonifacio', 'professionisti'],
    waMessage: 'Prenotazione ALIUS corpo',
    duration: '60 min',
    price: '60€',
    priceNote: 'Percorsi mirati su aree specifiche possono prevedere trattamenti da 70€ con prodotti intensivi personalizzati.',
    about: [
      {
        heading: 'Un percorso delicato e mirato per prendersi cura di sé',
        text: 'Il trattamento corpo ALIUS accompagna la persona in un viaggio di rinascita. Tecniche manuali dolci e prodotti specifici lavorano in sinergia per donare alla pelle un aspetto più levigato, equilibrato e radioso, nel rispetto della tua natura.',
      },
      {
        heading: "Un'esperienza oltre la bellezza",
        text: "Ingredienti naturali, oli essenziali e principi attivi ALIUS attivano un'azione riequilibrante su corpo e mente. Riduce gli inestetismi, migliora tono e compattezza, e dona un momento di profondo rilassamento.",
      },
    ],
    how: 'Inizia con una valutazione attenta della pelle. Poi, manovre dolci e precise, abbinate a prodotti mirati, nutrono in profondità e stimolano la rigenerazione cutanea, liberando le tensioni e donando benessere totale.',
    forWho:
      "Indicato per chi desidera affrontare inestetismi come rilassamento cutaneo, irregolarità o secchezza con delicatezza. Perfetto per ritrovare fiducia nel proprio corpo e sentirsi avvolti in un'esperienza di cura su misura.",
    faq: [
      { q: 'Quante sedute servono?', a: "Dipende dall'obiettivo: si definisce un percorso personalizzato dopo la valutazione iniziale." },
      { q: 'Posso proseguire con prodotti a casa?', a: 'Sì, possiamo consigliarti routine di mantenimento per proseguire i benefici.' },
    ],
  },
  {
    slug: 'alius-viso-essere',
    title: 'Trattamento viso "ESSERE" ALIUS',
    subtitle: 'Un momento di cura e luminosità per la pelle del viso.',
    cardTitle: 'Trattamento viso "ESSERE" ALIUS',
    cardDescription: 'Cura del viso rigenerante per ritrovare luminosità e benessere.',
    image: '/faccia_1.jpeg',
    metaTitle: 'Trattamento viso "ESSERE" ALIUS',
    description: 'Percorso viso ALIUS: prodotti naturali, massaggio olistico e luminosità immediata per ogni tipo di pelle.',
    keywords: ['Trattamento viso', 'San Bonifacio', 'professionisti'],
    waMessage: 'Prenotazione ALIUS viso ESSERE',
    duration: '50–60 min',
    price: '60€',
    priceNote: "Possiamo strutturare pacchetti stagionali per mantenere la pelle vitale tutto l'anno.",
    about: [
      {
        heading: 'Un percorso di bellezza consapevole',
        text: 'Il trattamento viso "ESSERE" ALIUS è pensato per nutrire, rigenerare e riequilibrare la pelle con ingredienti naturali e tecniche delicate. Oltre all\'estetica, valorizza la persona nella sua interezza attraverso una coccola personalizzata che favorisce drenaggio, ossigenazione e rinnovamento cellulare.',
      },
    ],
    benefits: {
      title: 'Benefici principali',
      items: [
        'Riduce secchezza, tono irregolare e piccoli inestetismi',
        'Dona luminosità, compattezza e una texture più levigata',
        "Favorisce il drenaggio e l'ossigenazione, rilassando i tratti",
        'Rigenera la vitalità del viso rispettando anche le pelli sensibili',
      ],
    },
    how: 'Si parte da un colloquio e da una detersione mirata. Seguono applicazioni detossinanti e idratanti con prodotti ALIUS, massaggio dolce di viso e collo e una fase finale riequilibrante. La durata media è di 50–60 minuti.',
    forWho:
      "È adatto a tutti i tipi di pelle, anche le più sensibili. Ideale per chi desidera un'esperienza naturale, olistica e rispettosa dell'equilibrio cutaneo.",
    faq: [
      { q: 'Ogni quanto è consigliato?', a: 'Si può programmare un percorso mensile o stagionale in base alle esigenze della pelle.' },
      { q: 'Posso truccarmi dopo?', a: 'Meglio attendere qualche ora per permettere ai principi attivi di agire in profondità.' },
    ],
  },
  {
    slug: 'stone-massage',
    title: 'Stone massage',
    subtitle: 'Il calore delle pietre per sciogliere tensioni e ritrovare equilibrio.',
    cardTitle: 'Stone massage',
    cardDescription: 'Massaggio con pietre calde per sciogliere tensioni e favorire il rilassamento.',
    image: '/hot-stone-massage-benefits.png',
    metaTitle: 'Stone massage',
    description: 'Massaggio con pietre calde per sciogliere tensioni e favorire un profondo rilassamento.',
    keywords: ['Massaggio', 'San Bonifacio', 'professionisti'],
    waMessage: 'Prenotazione Stone massage',
    duration: '60 min',
    price: '60€',
    priceNote: 'Possiamo proporre cicli dedicati per un rilascio graduale delle tensioni.',
    about: [
      {
        heading: "Cos'è lo stone massage",
        text: "Il massaggio con pietre calde utilizza pietre di basalto vulcanico riscaldate tra 35 e 70°C per sciogliere le tensioni muscolari. Le pietre vengono posizionate lungo la colonna, sui chakra o sulle zone doloranti, scivolando sulla pelle con oli essenziali che amplificano l'effetto terapeutico.",
      },
    ],
    benefits: {
      title: 'Benefici principali',
      items: [
        'Rilassamento profondo di corpo e mente',
        'Decontratturazione muscolare e miglioramento della circolazione',
        'Riduzione di infiammazioni, dolori muscolari e articolari',
        'Eliminazione delle tossine e pelle più levigata',
        'Supporto contro stress, ansia, insonnia e stanchezza generale',
      ],
    },
    how: 'Il trattamento dura circa 60 minuti. Alterna pietre calde e fresche per stimolare la circolazione; il calore avvolge il corpo mentre il massaggio con oli aromatici induce un profondo benessere fisico e mentale.',
    forWho:
      'Ideale per chi desidera sciogliere contratture, migliorare la circolazione e rilassarsi in modo naturale. Da evitare in caso di problemi cardiaci, fragilità capillare, pelle molto sensibile, gravidanza o infiammazioni acute.',
    faq: [
      { q: 'Le pietre sono molto calde?', a: 'La temperatura è sempre controllata per essere confortevole e sicura.' },
      { q: 'Quali oli vengono usati?', a: 'Oli essenziali naturali scelti in base alle tue esigenze per amplificare il beneficio.' },
    ],
  },
]

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug)
