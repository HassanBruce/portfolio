import { profile, links } from "@/data/portfolio";
import Portrait from "./Portrait";
import Magnetic from "./Magnetic";

export default function Hero() {
  const hasEmail = links.email.length > 0;
  const hasPhoto = profile.photo.length > 0;

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="glow pointer-events-none absolute inset-0" aria-hidden />
      {/* faint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-6 pt-28 pb-16 sm:pt-36 sm:pb-24 lg:grid-cols-[1.4fr_1fr] lg:gap-8">
        {/* ---- Left: copy ---- */}
        <div>
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted backdrop-blur">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent-2" />
            Available for new opportunities
          </div>

          <p className="animate-fade-up mt-6 font-mono text-sm text-accent-2">
            {profile.location}
          </p>

          <h1 className="font-display animate-fade-up mt-3 text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl">
            {profile.name}
            <span className="mt-2 block text-2xl text-muted sm:text-3xl">
              {profile.title}
            </span>
          </h1>

          <p className="animate-fade-up mt-7 max-w-xl text-xl leading-snug sm:text-2xl">
            <span className="gradient-text font-semibold">
              {profile.tagline}
            </span>
          </p>

          <p className="animate-fade-up mt-5 max-w-xl text-base leading-relaxed text-muted">
            {profile.summary}
          </p>

          <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
              >
                View Projects
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={hasEmail ? `mailto:${links.email}` : "#contact"}
                className="rounded-full border border-border-strong px-6 py-3 text-sm font-semibold transition-colors hover:border-foreground/50"
              >
                Get in touch
              </a>
            </Magnetic>
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

        {/* ---- Right: portrait ---- */}
        {hasPhoto && (
          <div className="animate-fade-up order-first lg:order-none">
            <div className="relative mx-auto w-full max-w-[300px] lg:max-w-none">
              {/* glow behind frame */}
              <div
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-accent/30 via-accent-3/20 to-accent-2/30 opacity-60 blur-2xl"
                aria-hidden
              />
              <div className="card-glow relative overflow-hidden rounded-[1.75rem] border border-border-strong bg-card">
                <Portrait />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"
                  aria-hidden
                />
                <div className="absolute bottom-3 left-3 rounded-full border border-border-strong bg-background/70 px-3 py-1 font-mono text-xs text-muted backdrop-blur">
                  {profile.name}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
