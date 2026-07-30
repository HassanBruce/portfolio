import Reveal from "./Reveal";
import { profile } from "@/data/portfolio";

export default function Stats() {
  // Only real, derivable facts — nothing invented.
  const stats = [
    profile.yearsOfExperience
      ? { value: `${profile.yearsOfExperience}+`, label: "Years building" }
      : null,
    { value: "Multiple", label: "Flagship projects shipped" },
    { value: "SaaS · AI · Cloud", label: "Focus areas" },
    { value: "Idea → Deploy", label: "End-to-end ownership" },
  ].filter(Boolean) as { value: string; label: string }[];

  return (
    <section className="mx-auto max-w-5xl px-6 py-14">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="h-full bg-card px-6 py-8">
              <div className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                <span className="gradient-text">{s.value}</span>
              </div>
              <div className="mt-2 text-xs leading-snug text-muted">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
