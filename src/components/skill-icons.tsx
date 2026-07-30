// Minimal line icons keyed by skill category. Monochrome, inherit currentColor.
import type { ReactNode } from "react";

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

const icons: Record<string, ReactNode> = {
  Languages: (
    <svg {...base}>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m13 6-2 12" />
    </svg>
  ),
  Frontend: (
    <svg {...base}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 6.5h.01M10 6.5h.01" />
    </svg>
  ),
  "State Management": (
    <svg {...base}>
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 4v4h-4" />
    </svg>
  ),
  Backend: (
    <svg {...base}>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </svg>
  ),
  Database: (
    <svg {...base}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  ),
  "Auth & Security": (
    <svg {...base}>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9.5 12l1.8 1.8L15 10" />
    </svg>
  ),
  "Cloud & Deployment": (
    <svg {...base}>
      <path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 9.5a3.5 3.5 0 0 1 .5 8.5z" />
      <path d="M12 13v5m0 0-2-2m2 2 2-2" />
    </svg>
  ),
  Practices: (
    <svg {...base}>
      <path d="M12 3l2.1 5.5L20 9.3l-4 4 1 5.7-5-3-5 3 1-5.7-4-4 5.9-.8z" />
    </svg>
  ),
};

const fallback = (
  <svg {...base}>
    <circle cx="12" cy="12" r="8" />
  </svg>
);

export function SkillIcon({ category }: { category: string }) {
  return icons[category] ?? fallback;
}
