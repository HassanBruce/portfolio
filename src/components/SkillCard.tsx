"use client";

import { useEffect, useRef, useState } from "react";
import TiltCard from "./TiltCard";
import { SkillIcon } from "./skill-icons";

export default function SkillCard({
  category,
  items,
}: {
  category: string;
  items: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="h-full">
      <TiltCard
        max={4}
        className="card-glow h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-border-strong"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-border-strong bg-background/60 text-accent-2">
              <SkillIcon category={category} />
            </span>
            <h3 className="font-display text-base font-semibold tracking-tight">
              {category}
            </h3>
          </div>
          <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[11px] text-muted">
            {String(items.length).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {items.map((item, i) => (
            <span
              key={item}
              className={`skill-chip rounded-lg border border-border bg-background/40 px-3 py-1.5 text-sm text-foreground/90 ${
                shown ? "skill-chip-in" : ""
              }`}
              style={{ transitionDelay: `${i * 55}ms` }}
            >
              {item}
            </span>
          ))}
        </div>
      </TiltCard>
    </div>
  );
}
