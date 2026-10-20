# opcorbit-site

Preview-only marketing site for OpcOrbit. One Next.js static export, one landing page per future subdomain. Nothing here is live: no custom domains, no DNS, and no production deploy.

Pages are draft copy. Every `[To confirm]` / `[待确认]` marker stays visible. Booking links, contract terms, and unapproved prices are not invented.

## Structure

| Path | Future subdomain | Offer |
| --- | --- | --- |
| `/dev/` | https://dev.opcorbit.com/ | Bet E, React and Next.js development |
| `/outbound/` | https://outbound.opcorbit.com/ | Bet F, done-for-you outbound |
| `/creative/` | https://creative.opcorbit.com/ | Bet A, weekly static ad creatives |
| `/support/` | https://support.opcorbit.com/ | Bet D, AI support and lead-capture agent |
| `/` | Preview directory only | Links to the four pages. Not a public offer. |

`lib/site.ts` is the registry (nav label, hostname, canonical, title, description). Page bodies live in `lib/copy/`. Shared chrome is `components/page-frame.tsx` (DRAFT banner, header, footer). Each route is `app/<slug>/page.tsx`.

The header links are path links on this shared preview (`/dev/`, and so on). Canonicals and the sitemap point at the future subdomains. `app/robots.ts` disallows all crawling while the site is a preview. Pages also send `noindex`.

## How to add a page

1. Add an entry to `offers` in `lib/site.ts` (`slug`, `nav`, `hostname`, `path`, `canonical`, `title`, `headline`, `description`). The header, preview directory, and sitemap read that list.
2. Add the approved copy in `lib/copy/<slug>.ts`. Put every dollar amount in a `PriceText` (`priced` / `plain`) so the price flag can hide it. Keep `[To confirm]` markers in the string.
3. Add `app/<slug>/page.tsx`. Export `offerMetadata(offers.<slug>)` and render the landing inside `PageFrame` (the DRAFT banner comes from the frame).
4. Do not add a booking URL, a payment link, or a legal term that is still marked to confirm. Point the call to action at `#contact` and show the marker there.
5. Add the future hostname to the table above and to the comment in `wrangler.toml`.

## Price flag

`NEXT_PUBLIC_SHOW_PRICES` is the only price switch. Dollar amounts are compiled into the static HTML.

- Unset, `false`, or any value other than `true`: prices are omitted. This is the production default.
- `true`: the draft amounts from the approved copy are shown. Use this for preview builds.

```bash
npm run build           # prices off
npm run build:preview   # NEXT_PUBLIC_SHOW_PRICES=true
```

See `.env.example`. CI's build step sets the flag to `true`. A Cloudflare Pages production environment must leave it unset. A Pages preview environment should set `NEXT_PUBLIC_SHOW_PRICES=true`.

Lines that are only a dollar amount disappear when the flag is off. Lines that mix an amount with a term keep the term and drop the amount. `[To confirm: price]` on the support page is a marker, not a number, so it stays either way.

## x-ui

The UI is `@zanehu-ai/x-ui@0.2.0-rc.0` from GitHub Packages (not the public npm registry). `.npmrc` sends that scope to `https://npm.pkg.github.com` and reads the token from `NODE_AUTH_TOKEN`. The token is not committed.

```bash
export NODE_AUTH_TOKEN="$GH_PACKAGES_TOKEN"   # read:packages, not printed
npm install
```

CI maps `NODE_AUTH_TOKEN` from the Actions secret `GH_PACKAGES_TOKEN`.

The committed lockfile lists the public dependencies. `@zanehu-ai/x-ui` is not in that lockfile yet: downloading it needs the token above. The first authenticated `npm install` adds the package to `package-lock.json`. CI uses `npm install` (not `npm ci`) for that reason.

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

## Cloudflare Pages

`wrangler.toml` names the project `opcorbit-site` and sets `pages_build_output_dir = "out"`. `public/_headers` sets basic response headers. `cloudflare/host-routes.example.js` is a sketch of future hostname rewrites. It is not deployed.

A preview URL cannot be created from this repository alone. It needs:

- `CLOUDFLARE_API_TOKEN` with Cloudflare Pages edit permission
- `CLOUDFLARE_ACCOUNT_ID`
- someone to create the Pages project and attach this repo

Do not attach `dev.opcorbit.com`, `outbound.opcorbit.com`, `creative.opcorbit.com`, `support.opcorbit.com`, or any other custom domain until Albert's execute. CI does not deploy.

## Secrets

| Name | Where | Why |
| --- | --- | --- |
| `GH_PACKAGES_TOKEN` | GitHub Actions secret, and `NODE_AUTH_TOKEN` locally | Install `@zanehu-ai/x-ui` from GitHub Packages. `read:packages` on `zanehu-ai/x-ui`. |
| `CLOUDFLARE_API_TOKEN` | Not used by CI | Only if a Pages preview is created later. |
| `CLOUDFLARE_ACCOUNT_ID` | Not used by CI | Only if a Pages preview is created later. |
