import Section from "./Section";
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
    <Section id="contact" eyebrow="04 / Contact" title="Let's build something">
      <p className="max-w-2xl text-lg text-muted">
        I&apos;m {profile.availability.join(", ").toLowerCase()}.{" "}
        {profile.relocation} If you have a product to build or a role to fill,
        reach out.
      </p>

      {entries.length > 0 ? (
        <div className="mt-8 flex flex-wrap gap-3">
          {entries.map((e) => (
            <a
              key={e.label}
              href={e.href}
              target={e.label === "Email" ? undefined : "_blank"}
              rel="noreferrer"
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground/40"
            >
              {e.label} →
            </a>
          ))}
        </div>
      ) : (
        <p className="mt-8 rounded-xl border border-dashed border-border bg-card px-5 py-4 text-sm text-muted">
          Contact links not yet configured. Add them in{" "}
          <code className="font-mono text-foreground/80">
            src/data/portfolio.ts
          </code>
          .
        </p>
      )}
    </Section>
  );
}
