"use client";

import { Alert } from "@zanehu-ai/x-ui";

export function DraftBanner({ host }: { host?: string }) {
  return (
    <div className="px-4 pt-4 sm:px-6">
      <Alert variant="warning" role="region" aria-label="Draft notice" className="mx-auto max-w-6xl">
        <strong>DRAFT.</strong> Preview only{host ? ` for ${host}` : ""}. This page is not live.
      </Alert>
    </div>
  );
}
