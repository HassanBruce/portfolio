import { skills } from "@/data/portfolio";

export default function Marquee() {
  // Flatten the whole toolbox into one continuous ticker.
  const items = skills.flatMap((g) => g.items);
  const row = [...items, ...items]; // duplicated for a seamless loop

  return (
    <div
      aria-hidden="true"
      className="marquee border-y border-border bg-surface/50 py-4"
    >
      <div className="marquee-track gap-8">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 whitespace-nowrap font-mono text-sm text-muted"
          >
            {item}
            <span className="text-accent/40">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
