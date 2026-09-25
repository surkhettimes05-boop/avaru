# Avaru

Bilingual English and Nepali informational website for Avaru, a masala and spices brand being developed in Birendranagar, Surkhet, Nepal.

## Local development

The site is generated with Node.js and has no third-party runtime dependencies.

```bash
npm run build
npm run check
```

Serve the generated `dist` directory with any static web server.

## Project structure

- `scripts/build.mjs` — page content, metadata, language routes, sitemap and robots generation
- `scripts/check.mjs` — structural and asset checks for every generated page
- `src/site.css` — responsive visual system
- `src/site.js` — mobile navigation and FAQ interactions
- `src/assets` — approved or project-created website imagery
- `dist` — generated static site ready for hosting

The current deployment remains a private preview and intentionally uses `noindex` plus a blocking `robots.txt`. Enable indexing only after Avaru has an approved public domain and final launch details.
