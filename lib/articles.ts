export type Article = {
  slug: string
  title: string
  /** Meta description e sottotitolo in hero. */
  description: string
  keywords: string[]
  /** Data di pubblicazione ISO (YYYY-MM-DD). */
  date: string
  image: string
  /** Slug del servizio collegato: l'articolo appare anche nella sua pagina. */
  service?: string
  intro: string
  sections: { heading: string; paragraphs: string[]; list?: string[] }[]
}

/** Più recenti per primi. Per aggiungere un articolo basta un nuovo oggetto qui. */
export const ARTICLES: Article[] = [
  {
    slug: 'crampi-in-gara-runner',
    title: 'Crampi e gambe pesanti in gara: non è solo questione di magnesio',
    description:
      'Perché ai runner vengono i crampi anche quando integrano sali minerali? Il ruolo della fatica, della tensione pre gara e del recupero, con consigli pratici per prima, durante e dopo la corsa.',
    keywords: [
      'crampi corsa',
      'crampi maratona',
      'crampi in gara cause',
      'gambe pesanti dopo la gara',
      'massaggio pre gara',
      'massaggio post gara',
      'runner San Bonifacio',
    ],
    date: '2026-11-25',
    image: '/images/runner-gara-gambe.jpg',
    service: 'massaggio-sportivo-emozionale',
    intro:
      'Chilometro 30, il ritmo tiene, e all’improvviso il polpaccio si blocca. Chi corre la maratona o la mezza lo sa: il crampo arriva quando meno te lo aspetti, spesso anche se hai preso magnesio e potassio per giorni. Ecco perché succede e cosa puoi fare, prima, durante e dopo la gara.',
    sections: [
      {
        heading: 'Il mito dei sali minerali',
        paragraphs: [
          'Per anni il crampo è stato spiegato quasi solo con disidratazione e carenza di sali minerali. Bere e reintegrare resta importante, soprattutto nelle gare lunghe e con il caldo. Ma molti runner con idratazione corretta e integrazione regolare continuano ad avere crampi, sempre più o meno allo stesso punto della gara.',
          'Oggi si dà molto peso alla fatica neuromuscolare: quando un muscolo lavora a lungo vicino al suo limite, i segnali che lo fanno contrarre e quelli che lo fanno rilasciare perdono equilibrio. Il muscolo “resta acceso” e si contrae da solo. Non a caso i crampi colpiscono soprattutto i muscoli più sollecitati, come polpacci e cosce, e nella seconda metà della gara.',
        ],
      },
      {
        heading: 'Cosa c’entra la testa',
        paragraphs: [
          'La fatica non è solo fisica. L’adrenalina della partenza spinge a correre i primi chilometri più forte del previsto, e quel ritmo si paga dopo. La tensione dei giorni prima si traduce in sonno scarso, respirazione corta e muscoli già contratti prima ancora di partire.',
          'In altre parole: come affronti la gara, e come la vivi emotivamente, incide su quanto arrivi stanco ai chilometri finali. Lavorare sulla tensione è parte della preparazione, non un extra.',
        ],
      },
      {
        heading: 'Prima della gara: cosa puoi fare',
        paragraphs: ['Nei giorni che precedono la gara, poche regole fanno la differenza:'],
        list: [
          'Allenati al ritmo che terrai davvero in gara, anche nei lunghi: il muscolo si abitua a quello sforzo specifico.',
          'Non cambiare nulla il giorno della gara: scarpe, integratori e colazione devono essere già collaudati.',
          'Idratati con regolarità nei giorni prima, senza esagerare la mattina stessa.',
          'Proteggi il sonno delle due notti precedenti: quella subito prima conta meno di quanto pensi.',
          'Ritagliati un momento per scaricare la tensione: respirazione lenta, una camminata, un trattamento rilassante.',
        ],
      },
      {
        heading: 'Se arriva il crampo in gara',
        paragraphs: ['Quando il muscolo si blocca, insistere peggiora le cose. Meglio:'],
        list: [
          'Rallentare o fermarti per qualche secondo.',
          'Allungare con dolcezza il muscolo colpito: per il polpaccio, punta del piede verso di te.',
          'Respirare lentamente e lasciare che la contrazione si sciolga.',
          'Ripartire con un ritmo più basso, aumentando solo quando le sensazioni tornano normali.',
        ],
      },
      {
        heading: 'Dopo la gara: il recupero conta quanto la preparazione',
        paragraphs: [
          'Gambe pesanti, rigidità, scale da affrontare di lato: nei 2–3 giorni dopo una gara lunga è normale. Una camminata leggera subito dopo l’arrivo, reidratarsi, mangiare bene e dormire aiutano il corpo a smaltire la fatica.',
          'Il rischio, soprattutto per chi corre tanto, è restare bloccati: tensioni che si accumulano gara dopo gara e che rendono ogni allenamento un po’ più faticoso del precedente.',
        ],
      },
      {
        heading: 'Dove entra il massaggio sportivo emozionale',
        paragraphs: [
          'Il massaggio sportivo emozionale lavora su entrambi i piani di cui abbiamo parlato: le tensioni muscolari e quella mentale. Qualche giorno prima della gara aiuta a sciogliere la rigidità e ad arrivare alla partenza più sciolto e concentrato. Nei giorni dopo favorisce il recupero e la sensazione di leggerezza nelle gambe.',
          'Molti runner arrivano scettici, convinti che serva solo “sciogliere i muscoli”. Poi scoprono che arrivare alla gara rilassati cambia anche come la si corre. Non sostituisce allenamento, alimentazione o il parere di un professionista sanitario: è un alleato in più nella preparazione.',
        ],
      },
      {
        heading: 'Quando rivolgersi a un medico',
        paragraphs: [
          'Un crampo occasionale durante uno sforzo intenso è comune. Parlane con il tuo medico o con un medico dello sport se i crampi sono frequenti, compaiono anche a riposo o di notte, si accompagnano a gonfiore, debolezza o dolore che non passa. Dopo una gara, un dolore muscolare molto intenso insieme a urine scure è un segnale da non sottovalutare: in quel caso contatta subito un medico.',
        ],
      },
    ],
  },
]

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug)

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })

/** Minuti di lettura stimati (≈200 parole/minuto). */
export const readingTime = (a: Article) => {
  const text = [a.intro, ...a.sections.flatMap((s) => [...s.paragraphs, ...(s.list ?? [])])].join(' ')
  return Math.max(1, Math.round(text.split(/\s+/).length / 200))
}
