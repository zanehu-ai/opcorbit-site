import type { ReactNode } from "react";

export function SiteFooter({ children }: { children: ReactNode }) {
  return (
    <footer className="border-t border-[color:var(--x-ui-border)]">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 text-sm leading-6 sm:px-6">{children}</div>
    </footer>
  );
}
