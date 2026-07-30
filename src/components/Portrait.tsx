"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";

// Shows the portrait photo; if the file isn't present yet, falls back to a
// gradient monogram so the layout never shows a broken image.
export default function Portrait() {
  const [failed, setFailed] = useState(false);

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  if (!profile.photo || failed) {
    return (
      <div className="flex aspect-square w-full items-center justify-center bg-gradient-to-tr from-accent/30 via-surface to-accent-2/20">
        <span className="font-display text-6xl font-bold text-foreground/80">
          {initials}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={profile.photo}
      alt={`Portrait of ${profile.name}, ${profile.title}`}
      width={900}
      height={900}
      fetchPriority="high"
      decoding="async"
      onError={() => setFailed(true)}
      className="aspect-square w-full object-cover"
    />
  );
}
