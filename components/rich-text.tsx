"use client";

import { Badge } from "@zanehu-ai/x-ui";

const marker = /(\[(?:To confirm|待确认)[^[\]]*\])/;

export function RichText({ text }: { text: string }) {
  return text.split(marker).map((part, index) => {
    if (part.startsWith("[To confirm") || part.startsWith("[待确认")) {
      return (
        <Badge
          key={index}
          variant="warning"
          className="mx-1 inline-block max-w-full whitespace-normal align-baseline text-left"
        >
          {part}
        </Badge>
      );
    }
    if (part === "") return null;
    return <span key={index}>{part}</span>;
  });
}
