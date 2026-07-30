import Reveal from "./Reveal";
import { links, profile } from "@/data/portfolio";

export default function Contact() {
  const entries = [
    { label: "Email", href: links.email ? `mailto:${links.email}` : "", value: links.email },
    { label: "GitHub", href: links.github, value: links.github },
    { label: "LinkedIn", href: links.linkedin, value: links.linkedin },
    { label: "X", href: links.x, value: links.x },
    { label: "Website", href: links.website, value: links.website },
  ].filter((e) => e.href.length > 0);

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <Reveal>
          <div className="card-glow relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12 sm:py-20">
            <div className="glow pointer-events-none absolute inset-0 opacity-60" aria-hidden />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">
                04 / Contact
              </p>
              <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
                Let&apos;s build something{" "}
                <span className="gradient-text">worth shipping.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
                Available for {profile.availability.join(", ").toLowerCase()}.{" "}
                {profile.relocation} If you have a product to build or a role to
                fill, I&apos;d love to hear about it.
              </p>

              {entries.length > 0 && (
                <div className="mt-9 flex flex-wrap justify-center gap-3">
                  {entries.map((e) => (
                    <a
                      key={e.label}
                      href={e.href}
                      target={e.label === "Email" ? undefined : "_blank"}
                      rel="noreferrer"
                      className="rounded-full border border-border-strong bg-background/60 px-6 py-3 text-sm font-semibold backdrop-blur transition-transform hover:-translate-y-0.5"
                    >
                      {e.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
