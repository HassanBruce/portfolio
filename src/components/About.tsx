import Section from "./Section";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" eyebrow="01 / About" title="What I do">
      <div className="grid gap-10 sm:grid-cols-3">
        <div className="sm:col-span-2">
          <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>
        </div>
        <dl className="space-y-6 text-sm">
          <div>
            <dt className="text-muted">Based in</dt>
            <dd className="mt-1 font-medium">{profile.location}</dd>
          </div>
          {profile.yearsOfExperience !== null && (
            <div>
              <dt className="text-muted">Experience</dt>
              <dd className="mt-1 font-medium">
                {profile.yearsOfExperience}+ years
              </dd>
            </div>
          )}
          <div>
            <dt className="text-muted">Relocation</dt>
            <dd className="mt-1 font-medium">{profile.relocation}</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
