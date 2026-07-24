import { profile, links } from "@/data/portfolio";

export default function Hero() {
  const hasEmail = links.email.length > 0;

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <p className="animate-fade-up font-mono text-sm text-accent-2">
          {profile.location}
        </p>
        <h1 className="animate-fade-up mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
          {profile.name}
          <span className="block text-muted">{profile.title}</span>
        </h1>
        <p className="animate-fade-up mt-6 max-w-2xl text-lg text-muted sm:text-2xl">
          <span className="gradient-text font-semibold">{profile.tagline}</span>
        </p>

        <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            View Projects
          </a>
          {hasEmail && (
            <a
              href={`mailto:${links.email}`}
              className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/40"
            >
              Get in touch
            </a>
          )}
        </div>

        <div className="animate-fade-up mt-10 flex flex-wrap gap-2">
          {profile.availability.map((a) => (
            <span
              key={a}
              className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted"
            >
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
