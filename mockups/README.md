# Mockup vetrina OMNISCENT®

Bozze statiche in HTML/CSS della vetrina pubblica, da approvare prima di portarle
in React. Non fanno parte della build: `frontend/` resta la sorgente del sito.

| File | Contenuto |
|---|---|
| `vetrina-v2.html` | Landing: hero, metodo, servizi, risultati, testimonianze, chi siamo, FAQ |
| `piani.html` | Piani: tre livelli, offerta founding member, tabella comparativa, FAQ |
| `omniscent-logo.png` | Lockup orizzontale con sfondo reso trasparente, ritagliato al contenuto |
| `server.mjs` | Server statico, zero dipendenze |

## Avvio

```bash
node mockups/server.mjs 4173
```

Poi apri http://localhost:4173 — la root reindirizza alla vetrina.
Le pagine sono autonome: si aprono anche con doppio click, ma dal server i link
relativi tra vetrina e piani funzionano meglio.

I font arrivano da Google Fonts, quindi serve connessione. Nel sito React sono
già in locale via `@fontsource`.

## Note

- Design token allineati tra le due pagine: modificarli in una richiede di
  riportarli nell'altra (in React diventeranno variabili condivise).
- Contrasti verificati WCAG AA. I bottoni usano `--violet-btn` (#7C3AED, 5.70:1
  su bianco); `--violet`/`--violet-hi` sono per bordi e testo su fondo scuro.
- Le anteprime PNG sono generate con Chrome headless e non versionate
  (vedi `.gitignore`).
