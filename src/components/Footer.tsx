import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div
          aria-hidden="true"
          data-watermark={profile.name}
          className="watermark font-display select-none text-5xl font-bold tracking-tighter text-foreground/6 sm:text-8xl"
        />
        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-sm text-muted sm:flex-row sm:items-center">
          <span>
            © {profile.name} — {profile.title}
          </span>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs">
              Built with Next.js &amp; Tailwind CSS
            </span>
            <a
              href="#top"
              className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-xs transition-colors hover:border-foreground/40"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
