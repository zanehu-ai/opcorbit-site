/**
 * Indexing is a build-time switch.
 *
 * Preview builds (NEXT_PUBLIC_SITE_BUILD=preview) are always noindex.
 * Production stays noindex until launch. Set NEXT_PUBLIC_ALLOW_INDEX=true
 * on a production build to allow indexing. A preview build ignores that flag.
 */
export function isPreviewBuild(): boolean {
  return process.env.NEXT_PUBLIC_SITE_BUILD === "preview";
}

export function allowIndex(): boolean {
  if (isPreviewBuild()) return false;
  return process.env.NEXT_PUBLIC_ALLOW_INDEX === "true";
}

export function robotsDirective(): { index: boolean; follow: boolean } {
  const index = allowIndex();
  return { index, follow: index };
}
