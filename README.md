# Nayara Energy — Silver Rebrand (NestJS)

A premium, silver-themed rebrand of the Nayara Energy corporate website, built as a NestJS application that serves a static single-page site.

## Run

```bash
npm install
npm run start:dev      # dev with watch
npm run start:prod     # production (dist)
```

Open http://localhost:3000

## Scripts

- `npm run lint` — oxlint
- `npm test` — unit tests
- `npm run test:e2e` — e2e tests (serves home page, CSS, health endpoint)
- `npm run build` — compile to `dist/`

## Structure

```
public/
  index.html     # rebranded homepage (all original Nayara sections)
  css/style.css  # silver theme, animations, 3D hover effects
  js/main.js     # preloader, 3D tilt cards, counters, scroll reveal, parallax
src/
  app.module.ts  # ServeStaticModule for public/ + /api/health
  app.controller.ts
  app.controller.spec.ts
test/
  app.e2e-spec.ts
```

## Design notes

- Silver metallic gradient palette with deep steel/navy and a blue + gold accent.
- Playfair-free standard typography: Montserrat (headings) + Inter (body) for an "ordinary", professional look.
- Images: seeded placeholder photos with grayscale filter to keep the silver tone cohesive. Swap `public/index.html` image URLs for real assets.
- Interactions: silver preloader, frosted-glass sticky header, Ken Burns hero, scroll reveals, animated counters, mouse-tracked 3D tilt cards, parallax story image, shine-sweep buttons, back-to-top.