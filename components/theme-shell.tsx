"use client";

import { UIThemeProvider } from "@zanehu-ai/x-ui";
import type { ReactNode } from "react";

export function ThemeShell({ children }: { children: ReactNode }) {
  return <UIThemeProvider className="min-h-screen">{children}</UIThemeProvider>;
}
