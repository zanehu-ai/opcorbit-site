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

The header uses x-ui `TopNavigation` (`0.2.0-rc.0`) with path links on this shared preview (`/dev/`, and so on). Canonicals and the sitemap point at the future subdomains.

Indexing follows the build type. `NEXT_PUBLIC_SITE_BUILD=preview` (`npm run build:preview`) always sends `noindex` and `robots.txt` disallows `/`. A production build (`npm run build`, or `NEXT_PUBLIC_SITE_BUILD` unset) does the same until launch. Set `NEXT_PUBLIC_ALLOW_INDEX=true` on a production build only when the site should be indexed. A preview build ignores that flag.

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

See `.env.example`. CI runs `npm run build` with prices off, then fails if `\$[0-9]` appears in the visible HTML under `out/`. It then runs `npm run build:preview`, which sets `NEXT_PUBLIC_SHOW_PRICES=true` and `NEXT_PUBLIC_SITE_BUILD=preview`. A Cloudflare Pages production environment must leave the price flag unset. A Pages preview environment should set `NEXT_PUBLIC_SHOW_PRICES=true` and `NEXT_PUBLIC_SITE_BUILD=preview`.

A raw `grep -R -E '\$[0-9]' out` also matches Next.js RSC row ids (`$2`), style paths (`$0:t:t:...`), minified regex replacements (`$1`), and bytes inside the WebP samples. `scripts/check-prices-off.mjs` applies that regex to HTML with `script` and `style` removed.

Lines that are only a dollar amount disappear when the flag is off. Lines that mix an amount with a term keep the term and drop the amount. `[To confirm: price]` on the support page is a marker, not a number, so it stays either way.

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
| `GH_PACKAGES_TOKEN` | Not used by CI while x-ui is vendored | Only if the dependency moves back to GitHub Packages. `read:packages` on `zanehu-ai/x-ui`, mapped to `NODE_AUTH_TOKEN`. |
| `CLOUDFLARE_API_TOKEN` | Not used by CI | Only if a Pages preview is created later. |
| `CLOUDFLARE_ACCOUNT_ID` | Not used by CI | Only if a Pages preview is created later. |
