# Los Locos — Sito Web

Sito moderno per la Pizzeria Los Locos di Forlì, realizzato con HTML5, CSS3 e JavaScript vanilla. Nessuna dipendenza esterna.

## Struttura del progetto

```
pizzeria-sito-nuovo/
├── index.html          # Pagina principale con menu, galleria, recensioni, prenotazione
├── assets/
│   ├── css/
│   │   └── style.css   # Design system completo, responsive
│   ├── js/
│   │   └── main.js     # Interattività: menu tabs, sticky bar, animazioni
│   └── images/         # (opzionale) Immagini locali
└── README.md           # Questo file
```

## Come usarlo

### 1. Visualizzare localmente

```bash
cd pizzeria-sito-nuovo
python -m http.server 8080
# Apri http://localhost:8080 nel browser
```

### 2. Pubblicare su GitHub Pages

1. Crea un repository su GitHub (es. `los-locos-forli`)
2. Carica i file nella root del repository
3. Vai su **Settings → Pages → Source** e seleziona `main` branch
4. Il sito sarà live su `https://<tuoutente>.github.io/los-locos-forli/`

**Alternativa:** Usa il repository esistente: `niccoloponti73-gif.github.io/Los-Locos/`

```bash
git clone https://github.com/niccoloponti73-gif/niccoloponti73-gif.github.io.git
cd niccoloponti73-gif.github.io/Los-Locos
# Sostituisci i file con questi
git add .
git commit -m "Aggiornamento sito moderno"
git push
```

### 3. Personalizzare

| Cosa modificare | Dove |
|-----------------|------|
| **Colori** | `assets/css/style.css` → `:root` (variabili CSS) |
| **Menu** | `index.html` → sezioni `<div class="menu-category">` |
| **Foto galleria** | `index.html` → `<div class="gallery-card">` → cambia `src` |
| **Recensioni** | `index.html` → `<div class="review-card">` |
| **Orari** | `index.html` → `.where-info__row` e `.orario-item` |
| **Indirizzo/telefono** | `index.html` → modifica i link `tel:` e `href` |
| **Social** | `index.html` → `.footer__social` e `.top-bar__social` |
| **Font** | `index.html` → `<link href="https://fonts.googleapis.com/...">` |
| **Promozioni** | Aggiungi/rimuovi blocchi `<div class="promo-card">` |
| **Form prenotazione** | Personalizza l'action del form con Formspree o backend reale |
| **Newsletter** | Aggiungi un blocco sezione con form Mailchimp o similar |

### 4. Form di prenotazione (opzionale)

Per attivare il form di prenotazione con invio email reale:

**Opzione A — Formspree (free, senza backend):**
1. Vai su https://formspree.io e crea un form gratuito
2. Sostituisci il form HTML:
```html
<form class="booking-form" action="https://formspree.io/f/<IL_TUO_ID>" method="POST">
```
3. Rimuovi il campo `novalidate` e il gestore JS attuale

**Opzione B — Google Forms:**
Inserisci un Google Form embedded con `<iframe>`.

**Opzione C — Backend custom:**
Modifica `assets/js/main.js` per inviare i dati a un endpoint API reale.

### 5. SEO e Meta Tag

I meta tag sono già configurati in `index.html` → `<head>`. Personalizza:
- `<title>`: nome della pizzeria + città
- `<meta name="description">`: descrizione SEO (150-160 caratteri)
- `og:image`: URL di un'immagine rappresentativa (minimo 1200×630px)
- `<link rel="canonical">`: URL canonico del sito

### 6. Google Maps

La mappa è già embedata con iframe. Per personalizzare:
- Sostituisce il `src` dell'iframe con il tuo link Maps personalizzato
- Oppure usa l'API Google Maps JS per una mappa interattiva

### 7. Newsletter

Per aggiungere una newsletter:

1. Crea un blocco nella sezione desiderata:
```html
<section class="section newsletter-section" id="newsletter">
  <div class="section__header">
    <h2>Resta aggiornato</h2>
  </div>
  <form class="newsletter-form" action="https://<mailchimp-or-similar>" method="POST">
    <input type="email" name="email" placeholder="tua@email.it" required>
    <button type="submit">Iscriviti</button>
  </form>
</section>
```

2. Collegamento a Mailchimp, Buttondown, o servizio newsletter preferito

### 8. Promozioni e Feste (facile da modificare)

La sezione offerte è in `index.html` → `#promozioni`. Per aggiungere una promozione:

```html
<div class="promo-card">
  <div class="promo-icon">🎄</div>
  <h3>Natale 2024</h3>
  <p class="promo-desc">Menu festivo a 25€ a persona. Prenota entro il 20 dicembre.</p>
  <span class="promo-date">15-24 dicembre 2024</span>
</div>
```

### 9. Galleria foto

Per aggiungere foto:
1. Carica le immagini in `assets/images/` (o usa URL esterni)
2. Aggiungi un blocco:
```html
<div class="gallery-card">
  <img class="gallery-card__img" src="assets/images/tua-foto.jpg" alt="Descrizione" loading="lazy">
  <span class="gallery-card__label">Tua etichetta</span>
</div>
```

### 10. Schema.org (JSON-LD)

I dati strutturati per i motori di ricerca sono già inclusi in `index.html` → `<script type="application/ld+json">`. Aggiorna con i dati reali della pizzeria.

## Browser supportati

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile: Chrome Android, Safari iOS

## Standard tecnici

- HTML5 semantico e accessibile
- CSS3 con variabili, Grid, Flexbox, transizioni
- JavaScript vanilla (nessuna dipendenza)
- Responsive: desktop, tablet, mobile
- Focus visibile per accessibilità da tastiera
- ARIA labels per elementi interattivi

## Crediti

- Logo SVG inline personalizzato
- Icone: inline SVG (no librerie esterne)
- Font: Google Fonts (Playfair Display + Inter)

## License

Fai ciò che vuoi — questo sito è fatto per Los Locos. 🍕
