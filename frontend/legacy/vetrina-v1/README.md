# Vetrina v1 — archivio

Il design della vetrina pubblica in uso fino ad agosto 2026, prima del redesign.
Conservato qui per poterci tornare senza dover scavare nella storia di git.

## Perché qui e non commentato dentro `src/`

Questa cartella sta **fuori da `src/`**, quindi CRA non la compila e nessun
import la raggiunge: è inerte per costruzione. Commentare il contenuto dei file
dentro `src/` avrebbe ottenuto lo stesso risultato in modo più fragile — basta
un import dimenticato per rimetterli in gioco, e i file commentati tendono a
rompersi silenziosamente. Ogni file ha comunque un'intestazione che ne dichiara
lo stato.

## Cosa contiene

| File | Corrispondente attuale |
|---|---|
| `Header.jsx` `Hero.jsx` `Services.jsx` `Stats.jsx` `Testimonials.jsx` `About.jsx` `FAQ.jsx` `Footer.jsx` `TickerBanner.jsx` | `src/components/` |
| `LangContext.js` | `src/context/` |
| `App.js` `App.css` `index.css` | `src/` |

## Ripristino

Completo:

```bash
cd frontend
cp legacy/vetrina-v1/{Header,Hero,Services,Stats,Testimonials,About,FAQ,Footer,TickerBanner}.jsx src/components/
cp legacy/vetrina-v1/LangContext.js src/context/
cp legacy/vetrina-v1/{App.js,App.css,index.css} src/
```

Attenzione: `App.js` della v1 non conosce la rotta `/piani` né il componente
`Method`, quindi ripristinarlo rimuove anche quelli. Il modo pulito per tornare
indietro davvero è `git revert` del commit del redesign.

Di un singolo pezzo (esempio l'hero):

```bash
cp frontend/legacy/vetrina-v1/Hero.jsx frontend/src/components/Hero.jsx
```

In questo caso serve rimettere anche le classi CSS che la v1 usava e che il
redesign ha sostituito (`hero-overlay`, `service-card` nella vecchia forma,
`stat-item-light`): stanno in `legacy/vetrina-v1/App.css`.
