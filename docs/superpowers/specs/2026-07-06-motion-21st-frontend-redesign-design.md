# Redesign front-end con Motion + componenti 21st-style

Data: 2026-07-06
Stato: approvato — implementazione in corso

## Obiettivo

Elevare il design front-end del sito Centro Riflessologia con animazioni fluide
(libreria **Motion** / motion.dev) e componenti moderni ispirati ai pattern di
**21st.dev**, ricostruiti a mano e adattati al brand. Direzione creativa: **audace
ma coerente** con la palette calda (crema/sabbia) + teal `#105166` + pesca
`#E9B07D`. Ambito: **tutto il sito**.

## Vincoli

- Next.js 14.2.5 App Router, React 18.3.1, Tailwind 3.4.10, TypeScript.
- Mantenere le pagine come Server Components dove possibile: le animazioni vivono
  in wrapper client riutilizzabili (`"use client"`).
- Rispettare `prefers-reduced-motion`: nessuna animazione di movimento quando
  l'utente la disattiva (solo dissolvenze o stato finale immediato).
- Non regredire SEO, metadata, JSON-LD, struttura URL o accessibilità.
- Preservare palette, brand e contenuti testuali esistenti.
- Performance: nessun blocco del rendering, animazioni GPU-friendly (transform/opacity).

## Architettura

### Fondamenta Motion (`components/motion/`)

Set di wrapper client dichiarativi, così le pagine restano prevalentemente server:

- `MotionConfig` globale in `app/layout.tsx` con `reducedMotion="user"`.
- `Reveal` — fade + translate all'entrata in viewport (`whileInView`, `once`).
  Prop: `as`, `delay`, `y`, `className`.
- `Stagger` + `StaggerItem` — container che orchestra i figli in cascata.
- `Parallax` — sposta un layer in base allo scroll (`useScroll` + `useTransform`).
- `TiltCard` — leggero tilt 3D + glow su hover/pointer, con fallback statico.
- `KineticHeading` — titolo che entra parola per parola in stagger.
- Hook `usePrefersReducedMotion` (o uso di `useReducedMotion` di Motion) come guardia.

Tutti i wrapper degradano a contenuto statico quando reduced-motion è attivo.

### Sostituzioni

- `AnimateOnScroll` (CSS/IntersectionObserver) → rimpiazzato da `Reveal`,
  mantenendo compatibilità d'uso dove già importato.
- Keyframe CSS di scroll/stagger in `globals.css` deprecate una volta migrate
  le sezioni (rimosse in Fase 5).

## Componenti e direzione visiva

- **Hero cinematografico**: parallax leggero sullo sfondo, layer di gradiente/grana
  caldo animato, forme accento pesca/teal fluttuanti, `KineticHeading` per il titolo,
  CTA con micro-interazioni (scale/press).
- **Bento grid** per "Servizi" e "Benefici": card di dimensioni variabili con hover
  glow tenue e tilt 3D leggero (`TiltCard`).
- **Sezioni con reveal in stagger** allo scroll.
- **Navbar scroll-aware**: shrink + sfondo vetro/blur oltre una soglia di scroll.
- **Recensioni**: marquee upgradato a Motion con drag interattivo e dissolvenze ai bordi.
- **Transizioni di pagina** morbide tra le route (template.tsx).
- **Rifinitura**: spaziature più generose, gerarchia tipografica, ombre calde stratificate,
  bordi luminosi.

## Flusso di lavoro (fasi verificabili)

1. **Fondamenta Motion** — install `motion`, wrapper in `components/motion/`,
   `MotionConfig` nel layout, guardia reduced-motion. Deliverable: build verde,
   wrapper pronti all'uso.
2. **Homepage** — hero cinetico, bento servizi/benefici, reveal sezioni, CTA finale.
3. **Componenti condivisi** — Navbar scroll-aware, Footer, ServiceCard (tilt/glow),
   ReviewsSection (marquee Motion), CTAButton.
4. **Pagine servizio + interne** — template pagine servizio, FAQ, contatti,
   operatore-olistico, riflessologia-plantare.
5. **Passata finale** — rifinitura visiva, rimozione keyframe CSS obsolete,
   verifica performance (build, no layout shift) e accessibilità (reduced-motion,
   focus, contrasto).

## Testing / verifica

- `npm run build` verde ad ogni fase.
- Check visivo con dev server (preview) su desktop e mobile.
- Verifica `prefers-reduced-motion`: le animazioni di movimento si disattivano.
- Nessuna regressione su metadata/JSON-LD/sitemap.

## Fuori ambito

- Nessuna modifica ai contenuti testuali o all'offerta servizi.
- Nessun cambio di stack (niente CMS, niente nuove dipendenze oltre `motion`).
- Nessun refactor non funzionale al design.
