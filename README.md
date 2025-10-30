# Centro Riflessologia — Sito web

Sito statico veloce per il Centro Riflessologia (Paganotto Danya), costruito con **Next.js (App Router)** e **Tailwind CSS**. Deploy consigliato su **Vercel**.

## Requisiti
- Node.js 18+

## Installazione e sviluppo
```bash
npm install
npm run dev
# apri http://localhost:3000
```

## Deploy
1. Crea una repo GitHub e fai push dei file.
2. Su Vercel: New Project → Import from GitHub → Framework: Next.js → Deploy.
3. Nessuna variabile d’ambiente necessaria.

## Struttura
```
app/
  page.tsx                     # Home
  servizi/page.tsx             # Elenco servizi
  riflessologia-plantare/...   # Pagina dedicata
  operatore-olistico/...       # Chi è l’operatore olistico
  faq/page.tsx                 # Domande frequenti
  contatti/page.tsx            # Contatti + mappa
  layout.tsx, globals.css      # Layout e stili globali
  sitemap.ts, icon.svg         # SEO & Icon
components/                    # Navbar, Footer, CTA, ecc.
public/robots.txt              # Robots
```

## Dati del centro
- Nome: Centro Riflessologia — Paganotto Danya
- Indirizzo: Via Tombole, 168 – San Bonifacio (VR)
- Telefono/WhatsApp: +39 349 449 36 83
- Email: paganottodanya@gmail.com
- Instagram: @centro_riflessologia
- P.IVA: 04891460232

## Personalizzazione
- I colori principali sono definiti in `app/globals.css` (variabili CSS).
- Il testo è in italiano. Aggiorna le pagine con informazioni specifiche (orari, prezzi, politiche, ecc.).

## Licenza
Progetto privato del cliente. Tutti i diritti riservati.


