# Citadel LLC Gold — Complete Website / Mobile Optimized

This ZIP contains the latest complete English website, including the English-only client eligibility policy and the latest founder and executive photographs. It runs independently of ChatGPT Sites.

## Included files

- `public/`: editable HTML with all CSS and application JavaScript, photographs, logo, hero background and data files.
- `dist/`: ready-to-publish copy of the website.
- `scripts/`: dependency-free Node.js build and local server.
- `package.json`: build and start commands.
- `reference/original-content.txt`: retained text from the original supplied website, for reference only.
- `asset-manifest.json`: SHA-256 integrity manifest.

## Local preview

Use Node.js 20.11 or later (22 or later recommended). No dependency installation is required.

```
npm run build
npm start
```

Open http://localhost:3000 in your browser. Serve the site over HTTP; do not open it using a file:// URL.

## Static deployment

Publish the contents of `dist/` on a static hosting service. On Render Static Site, use build command `npm run build` and publish directory `dist`. Upload the full unzipped project to a Git repository with package.json at the repository root. Upload folders without flattening their paths.

Alternatively, publish the already-built `dist/` without running a build. Any web server must serve index.html at the root and retain the images/ directory. This package does not change domain names, DNS or hosting settings.

## Editing

Edit public/index.html for page text, layout, inline CSS and interactions. The JSON files preserve the partner, profile and policy content in readable structured form; the page includes embedded copies, so update the page alongside the JSON when changing content. Rebuild after editing public/.

## External service

The spot gold chart loads TradingView's embedded chart for OANDA:XAUUSD. It requires internet access and is subject to provider availability, regional access and possible quotation delays. All website photographs, company logo and background images are included locally. The enquiry form prepares a draft in the visitor's email application; it does not send mail by itself or run a customer database.

## Export scope

Includes the full current static site and original retained local image assets. No account credentials, ChatGPT access restrictions, custom-domain verification tokens or deployment credentials are included. Profile dialogs, photograph enlargement, partner details, collaboration planning, navigation and the English-only access policy are preserved.


## Latest version — 2026-11-03

Includes the enlarged small typography and mobile layout updates from the published website: responsive navigation with enquiry link, stacked hero buttons, responsive portraits, readable policy sections, touch-friendly dialogs and 16px form inputs. Layout checked at 320px, 390px and 430px container widths.

No hosting identity, Git metadata, passwords, tokens or domain verification records are included. The custom domain citadelgoldjp.com has NOT been connected to this version. DNS and hosting settings must be configured separately at your chosen host.


## Social sharing card

A 1200 × 630 JPEG social sharing card is included at `images/citadel-gold-share.jpg` in both public and dist. English Open Graph and Twitter Card metadata is embedded in the HTML head. URLs use the intended production domain `https://citadelgoldjp.com/`. This does not bind or configure that domain. For a different deployment domain, replace every `https://citadelgoldjp.com` origin in public/index.html and run npm run build. The preview image must be publicly accessible over HTTPS; private login-only sites cannot reliably be fetched by sharing platforms. Existing shared links may retain cached previews.
