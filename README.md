# opcorbit-site

OpcOrbit's marketing website, hosted on Vercel at https://www.opcorbit.com/. One Next.js static export serves the homepage and four service pages.

`/dev`, `/outbound`, `/creative`, and `/support` are Soft contact pages: no `[To confirm]` markers, no “Start a paid week” or paid-pilot button, and no live checkout. Booking links, contract terms, and unapproved prices are not invented. The DRAFT banner is shown only by `NEXT_PUBLIC_SITE_BUILD=preview` builds.

## Structure

| Path | Public URL | Offer |
| --- | --- | --- |
| `/dev/` | https://www.opcorbit.com/dev/ | Bet E, React and Next.js development |
| `/outbound/` | https://www.opcorbit.com/outbound/ | Bet F, done-for-you outbound |
| `/creative/` | https://www.opcorbit.com/creative/ | Bet A, weekly static ad creatives |
| `/support/` | https://www.opcorbit.com/support/ | Bet D, AI support and lead-capture agent |
| `/` | https://www.opcorbit.com/ | Service overview |

`lib/site.ts` is the registry (site identity, nav label, hostname, canonical, title, description). Page bodies live in `lib/copy/`. Shared chrome is `components/page-frame.tsx` (preview-only DRAFT banner, header, footer). Each route is `app/<slug>/page.tsx`.

The header uses x-ui `TopNavigation` (`0.2.0-rc.0`) with path links (`/dev/`, and so on). Canonicals, sharing URLs, images and the sitemap use the live www.opcorbit.com paths. Reserved offer hostnames remain in the registry for preview context; they are not production destinations.

Indexing follows the build type. `NEXT_PUBLIC_SITE_BUILD=preview` (`npm run build:preview`) always sends `noindex` and `robots.txt` disallows `/`. Production currently keeps the same indexing policy while business details are being confirmed. Removing the preview banner does not enable indexing. Set `NEXT_PUBLIC_ALLOW_INDEX=true` on a production build only when the site should be indexed. A preview build ignores that flag.

## How to add a page

1. Add an entry to `offers` in `lib/site.ts` (`slug`, `nav`, `hostname`, `path`, `canonical`, `title`, `headline`, `description`). The header, preview directory, and sitemap read that list.
2. Add the approved copy in `lib/copy/<slug>.ts`. Put every dollar amount in a `PriceText` (`priced` / `plain`) so the price flag can hide it. Do not add a `[To confirm]` marker.
3. Add `app/<slug>/page.tsx`. Export `offerMetadata(offers.<slug>)` and render the landing inside `PageFrame` (the DRAFT banner comes from the frame).
4. Do not add a booking URL, a payment link, an email address, or a legal term that is still unconfirmed. Point the call to action at `#contact`. The contact note stays soft until Stripe: reply on X or use `#contact`. Do not invent an address.
5. Add the future hostname to the table above and to the comment in `wrangler.toml`.

## Price flag

`NEXT_PUBLIC_SHOW_PRICES` is the only price switch. Dollar amounts are compiled into the static HTML.

- Unset, `false`, or any value other than `true`: prices are omitted. This is the production default.
- `true`: the draft amounts from the approved copy are shown. Use this for preview builds.

```bash
npm run build           # prices off
npm run build:preview   # NEXT_PUBLIC_SHOW_PRICES=true
```

See `.env.example`. CI runs `npm run build` with prices off, then fails if `\$[0-9]` appears in the visible HTML under `out/`. It then runs `npm run build:preview`, which sets `NEXT_PUBLIC_SHOW_PRICES=true` and `NEXT_PUBLIC_SITE_BUILD=preview`. A Cloudflare Pages production environment must leave the price flag unset. A Pages preview environment should set `NEXT_PUBLIC_SHOW_PRICES=true` and `NEXT_PUBLIC_SITE_BUILD=preview`.

A raw `grep -R -E '\$[0-9]' out` also matches Next.js RSC row ids (`$2`), style paths (`$0:t:t:...`), minified regex replacements (`$1`), and bytes inside the WebP samples. `scripts/check-prices-off.mjs` applies that regex to HTML with `script` and `style` removed.

Lines that are only a dollar amount disappear when the flag is off. Lines that mix an amount with a term keep the term and drop the amount. Creative and Support have no approved dollar amount, so both builds say pricing details will be published once confirmed.

## x-ui

The UI is `@zanehu-ai/x-ui@0.2.0-rc.0`. The published package lives on GitHub Packages, not the public npm registry. This environment cannot download it: the registry responds `403` with `Permission installation not allowed to Read organization package`. CI therefore does not call the registry.

`vendor/zanehu-ai-x-ui-0.2.0-rc.0.tgz` is `npm pack` of the public git tag `v0.2.0-rc.0` (`26428c97a7d930642b83bb5e655a0c977c8ce747`), which already contains `dist/`. `package-lock.json` includes that tarball, and CI installs with `npm ci`. `.npmrc` still points the `@zanehu-ai` scope at `https://npm.pkg.github.com` and reads `NODE_AUTH_TOKEN`, for a later switch back to the registry. The token is not committed.

```bash
npm ci
```

x-ui `0.2.0-rc.0` has no OpcOrbit brand theme and no `data-brand` attribute. This site uses the library default: `UIThemeProvider` with light, dark, and system appearance, and no palette overrides. A theme is not defined in this repo.

Tailwind scans `node_modules/@zanehu-ai/x-ui/dist` so the component classes are generated. The optional stylesheet `@zanehu-ai/x-ui/dist/theme/styles.css` is imported from the root layout.

## Local checks

Node.js 22.

```bash
npm run lint
npm run typecheck
npm run build
npm run build:preview
```

`output: 'export'` writes the site to `out/`.

## Deployment

Production uses the `opcorbit-site` project in the `opcorbit` Vercel team. Build with `npm run build`, keep prices off, and deploy the tested static `out/` export through Vercel Build Output. The www.opcorbit.com CNAME is managed at Alibaba Cloud DNS. Do not change nameservers, mail records, or unrelated hostnames for a website update. The GitHub PR review and merge are separate from publishing an exact tested commit.

### Legacy Cloudflare Pages configuration

`wrangler.toml` names the project `opcorbit-site` and sets `pages_build_output_dir = "out"`. `public/_headers` sets basic response headers. `cloudflare/host-routes.example.js` is a sketch of future hostname rewrites. It is not deployed.

The Cloudflare configuration is retained as an inactive alternative. Creating a Cloudflare Pages project would need:

- `CLOUDFLARE_API_TOKEN` with Cloudflare Pages edit permission
- `CLOUDFLARE_ACCOUNT_ID`
- someone to create the Pages project and attach this repo

The reserved offer subdomains are not connected to this deployment. Attach or repoint additional domains only when requested. CI validates builds and does not deploy.

## Secrets

| Name | Where | Why |
| --- | --- | --- |
| `GH_PACKAGES_TOKEN` | Not used by CI while x-ui is vendored | Only if the dependency moves back to GitHub Packages. `read:packages` on `zanehu-ai/x-ui`, mapped to `NODE_AUTH_TOKEN`. |
| `CLOUDFLARE_API_TOKEN` | Not used by CI | Only if a Pages preview is created later. |
| `CLOUDFLARE_ACCOUNT_ID` | Not used by CI | Only if a Pages preview is created later. |
