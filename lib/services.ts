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
    slug: 'riflessologia-fertilita-gravidanza',
    title: 'Riflessologia per fertilità e gravidanza',
    subtitle:
      'Un accompagnamento dolce per la coppia che desidera un figlio e per la mamma in attesa: rilassamento profondo, ascolto ed equilibrio emotivo.',
    cardTitle: 'Riflessologia per fertilità e gravidanza',
    cardDescription: 'Percorso di sostegno per la coppia in ricerca di una gravidanza e per la mamma in attesa.',
    image: '/images/gravidanza-pancia.jpg',
    metaTitle: 'Riflessologia plantare per fertilità e gravidanza a San Bonifacio (VR)',
    description:
      'Studio di riflessologia a San Bonifacio (VR): percorsi di riflessologia plantare per la coppia in ricerca di una gravidanza e per la mamma in attesa. Rilassamento, ascolto ed equilibrio emotivo.',
    keywords: [
      'riflessologia fertilità',
      'riflessologia gravidanza',
      'riflessologia plantare fertilità Verona',
      'ricerca gravidanza',
      'studio di riflessologia San Bonifacio',
    ],
    waMessage: 'Ciao Danya, vorrei informazioni sul percorso di riflessologia per fertilità e gravidanza',
    duration: 'Percorso su misura',
    price: 'Su richiesta',
    priceNote: 'Il percorso si definisce dopo un primo colloquio conoscitivo, anche di coppia.',
    about: [
      {
        heading: 'Quando il corpo è pronto, ma il bambino non arriva',
        text: 'Capita spesso: gli esami sono a posto, mamma e papà stanno bene, eppure la gravidanza tarda ad arrivare. L’attesa, i tentativi e le aspettative possono creare tensione, stanchezza e un carico emotivo che pesa su entrambi. La riflessologia plantare offre uno spazio per rallentare, scaricare lo stress e ritrovare fiducia nel proprio corpo.',
      },
      {
        heading: 'Un percorso per la coppia, non solo per la donna',
        text: 'La ricerca di un figlio riguarda entrambi i partner. Per questo il percorso può coinvolgere anche il papà: lavorare insieme sul rilassamento e sull’equilibrio emotivo aiuta la coppia a vivere questo momento con più serenità. Lo stesso approccio, con manualità adattate, accompagna la donna durante la gravidanza.',
      },
    ],
    benefits: {
      title: 'Cosa può offrirti il percorso',
      items: [
        'Rilassamento profondo e riduzione dello stress legato all’attesa',
        'Uno spazio di ascolto per affrontare ansia e pressione emotiva',
        'Sostegno al riposo e alla qualità del sonno',
        'Maggiore consapevolezza e fiducia nel proprio corpo',
        'Un momento di cura condiviso per la coppia',
        'Accompagnamento delicato durante i mesi della gravidanza',
      ],
    },
    how: 'Si inizia con un colloquio, anche di coppia, per conoscere la vostra storia e il momento che state vivendo. Le sedute di riflessologia plantare vengono poi calibrate sulla persona: manualità dolci sui punti riflessi, tempi rispettosi e attenzione all’aspetto emotivo. La frequenza degli incontri si concorda insieme.',
    forWho:
      'Per le coppie che desiderano un figlio, anche durante percorsi di procreazione assistita, e per le donne in gravidanza che cercano un momento di rilassamento e cura di sé. Il percorso è complementare e non sostituisce in alcun modo le indicazioni del ginecologo o del centro che vi segue.',
    faq: [
      {
        q: 'Può sostituire le cure mediche?',
        a: 'No. La riflessologia è un trattamento olistico di benessere e rilassamento: affianca, senza sostituirlo, il percorso con il tuo medico o il centro di fertilità.',
      },
      {
        q: 'Può partecipare anche il partner?',
        a: 'Sì, anzi è consigliato: il percorso può essere pensato per entrambi, con sedute individuali o in momenti condivisi.',
      },
      {
        q: 'Si può fare durante la gravidanza?',
        a: 'Sì, con manualità adattate. Valutiamo insieme il momento più adatto, sempre in accordo con il tuo ginecologo o la tua ostetrica.',
      },
    ],
  },
  {
    slug: 'massaggio-sportivo-emozionale',
    title: 'Massaggio sportivo emozionale',
    subtitle:
      'Per runner e sportivi amatoriali: prepara il corpo e la testa alla gara e aiuta a recuperare dopo, senza restare bloccati.',
    cardTitle: 'Massaggio sportivo emozionale',
    cardDescription: 'Pre e post gara per runner e maratoneti amatoriali: tensioni muscolari ed equilibrio emotivo.',
    image: '/images/massaggio-sportivo-gambe.jpg',
    metaTitle: 'Massaggio sportivo pre e post gara per runner a San Bonifacio (VR)',
    description:
      'Massaggio sportivo emozionale a San Bonifacio (VR) per runner e maratoneti amatoriali: trattamenti pre gara e post gara per sciogliere tensioni, recuperare e affrontare la gara con la testa giusta.',
    keywords: [
      'massaggio sportivo San Bonifacio',
      'massaggio pre gara',
      'massaggio post gara',
      'massaggio runner Verona',
      'massaggio maratona',
      'massaggio sportivo emozionale',
    ],
    waMessage: 'Ciao Danya, vorrei prenotare un massaggio sportivo emozionale (pre/post gara)',
    duration: 'Su misura',
    price: 'Su richiesta',
    priceNote: 'Possiamo organizzare un ciclo di sedute intorno alla tua preparazione e alle date di gara.',
    about: [
      {
        heading: 'Non è solo una questione di muscoli',
        text: 'Crampi, gambe pesanti, rigidità: spesso si pensa solo a sali minerali, magnesio e potassio. Ma il modo in cui affronti la gara, l’ansia della partenza e la gestione del post gara pesano tanto quanto l’allenamento. Il massaggio sportivo emozionale lavora su entrambi i piani: il corpo e la tensione che ti porti dentro.',
      },
      {
        heading: 'Pre gara e post gara',
        text: 'Prima della gara il trattamento aiuta a sciogliere le tensioni e ad arrivare alla partenza più sciolto e concentrato. Dopo la gara favorisce il recupero, scarica la fatica accumulata e ti aiuta a non restare bloccato nei giorni successivi.',
      },
    ],
    benefits: {
      title: 'Cosa può darti',
      items: [
        'Scioglie tensioni e rigidità muscolari prima della partenza',
        'Favorisce il recupero e riduce la sensazione di gambe pesanti dopo la gara',
        'Aiuta a gestire ansia e tensione da prestazione',
        'Tecniche di rilassamento e riequilibrio per arrivare concentrato',
        'Un trattamento costruito sul tuo sport, sui tuoi carichi e sulle tue gare',
      ],
    },
    how: 'Partiamo da due chiacchiere su allenamenti, gare in programma, eventuali fastidi e su come vivi la competizione. Il trattamento unisce manualità sportive su gambe e schiena, tecniche di rilassamento e riflessologia, con un’intensità adattata al momento: più attivante nel pre gara, più distensiva nel post gara.',
    forWho:
      'Pensato per runner e maratoneti amatoriali, ma adatto a chiunque pratichi sport con costanza: ciclisti, triatleti, appassionati di trail. Non serve credere nella riflessologia: molti runner arrivano scettici e oggi vengono sia prima sia dopo ogni gara.',
    faq: [
      {
        q: 'Quanto prima della gara conviene farlo?',
        a: 'In genere qualche giorno prima, per lasciare al corpo il tempo di assestarsi. Lo concordiamo in base al tuo calendario.',
      },
      {
        q: 'E dopo la gara?',
        a: 'Di solito nei 2–3 giorni successivi, quando il corpo ha smaltito la fatica più acuta ed è pronto a recuperare.',
      },
      {
        q: 'Sostituisce il fisioterapista?',
        a: 'No. In caso di infortuni o dolori importanti è bene rivolgersi a un fisioterapista o a un medico dello sport; il massaggio sportivo emozionale è un trattamento di benessere e recupero.',
      },
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
