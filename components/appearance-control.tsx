"use client";

import { SegmentedControl, SegmentedControlItem, useUITheme, type UITheme } from "@zanehu-ai/x-ui";

const choices: UITheme[] = ["light", "dark", "system"];

export function AppearanceControl() {
  const { theme, setTheme } = useUITheme();

  return (
    <SegmentedControl
      aria-label="Appearance"
      value={theme}
      onValueChange={(value) => setTheme(value as UITheme)}
    >
      {choices.map((choice) => (
        <SegmentedControlItem key={choice} value={choice}>
          {choice}
        </SegmentedControlItem>
      ))}
    </SegmentedControl>
  );
}
