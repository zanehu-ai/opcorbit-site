/**
 * Example only. Not deployed.
 *
 * Cloudflare Pages can serve this static export today at a *.pages.dev preview
 * URL, using the path routes (/dev/, /outbound/, /creative/, /support/).
 * Mapping those paths onto the future subdomains needs a Pages project plus
 * Albert's execute for DNS. Do not attach custom domains from this repo.
 *
 * If a Pages Advanced Mode worker is added later, the sketch below rewrites
 * the hostname root onto the matching path and then serves the static asset.
 * It is inert until those hostnames resolve to the Pages project.
 */
const PREFIX = {
  "dev.opcorbit.com": "/dev",
  "outbound.opcorbit.com": "/outbound",
  "creative.opcorbit.com": "/creative",
  "support.opcorbit.com": "/support",
};

const hostRoutes = {
  async fetch(request, env) {
    const url = new URL(request.url);
    const prefix = PREFIX[url.hostname];
    if (prefix && url.pathname !== prefix && !url.pathname.startsWith(`${prefix}/`)) {
      const suffix = url.pathname === "/" ? "/" : url.pathname;
      url.pathname = `${prefix}${suffix}`;
      return env.ASSETS.fetch(new Request(url, request));
    }
    return env.ASSETS.fetch(request);
  },
};

export default hostRoutes;
