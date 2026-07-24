import Section from "./Section";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="02 / Work" title="Selected projects">
      <div className="grid gap-6">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/20 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-accent-2">
                  {p.type}
                </span>
                <h3 className="mt-1 text-xl font-semibold sm:text-2xl">
                  {p.name}
                </h3>
              </div>
              <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                {p.status}
              </span>
            </div>

            <p className="mt-4 text-muted">{p.oneLiner}</p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold text-foreground">
                  Problem
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {p.problem}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">
                  Hard part
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {p.hardPart}
                </p>
              </div>
            </div>

            {p.highlights.length > 0 && (
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-background px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {s}
                </span>
              ))}
            </div>

            {(p.liveUrl || p.repoUrl) && (
              <div className="mt-6 flex gap-4 text-sm">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    Live demo →
                  </a>
                )}
                {p.repoUrl && (
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    Repository →
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
