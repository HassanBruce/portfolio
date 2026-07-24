import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center">
        <span>
          {profile.name} — {profile.title}
        </span>
        <span className="font-mono text-xs">
          Built with Next.js &amp; Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
