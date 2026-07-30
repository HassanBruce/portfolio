import Section from "./Section";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="02 / Work"
      title="Selected projects"
      intro="A focused set of products I've architected and built end-to-end — the real problem, the hard part, and the stack behind each."
    >
      <div className="grid gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 60}>
            <Spotlight className="card-glow group block rounded-3xl border border-border bg-card p-6 transition-colors hover:border-border-strong sm:p-9">
              <div className="flex items-start gap-5">
                <span className="hidden font-mono text-sm text-muted/60 sm:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-accent-2">
                        {p.type}
                      </span>
                      <h3 className="font-display mt-1.5 text-xl font-semibold tracking-tight sm:text-2xl">
                        {p.name}
                      </h3>
                    </div>
                    <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                      {p.status}
                    </span>
                  </div>

                  <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                    {p.oneLiner}
                  </p>

                  <div className="mt-7 grid gap-6 sm:grid-cols-2">
                    <div className="rounded-2xl border border-border bg-background/40 p-5">
                      <h4 className="flex items-center gap-2 text-sm font-semibold">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
                        The problem
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {p.problem}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border bg-background/40 p-5">
                      <h4 className="flex items-center gap-2 text-sm font-semibold">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        The hard part
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {p.hardPart}
                      </p>
                    </div>
                  </div>

                  {p.highlights.length > 0 && (
                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {p.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 text-sm text-muted"
                        >
                          <span className="mt-1.75 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-7 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {(p.liveUrl || p.repoUrl) && (
                    <div className="mt-7 flex gap-5 text-sm">
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium underline-offset-4 hover:underline"
                        >
                          Live demo →
                        </a>
                      )}
                      {p.repoUrl && (
                        <a
                          href={p.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium underline-offset-4 hover:underline"
                        >
                          Repository →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
