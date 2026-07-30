import Section from "./Section";
import Reveal from "./Reveal";
import SkillCard from "./SkillCard";
import { skills } from "@/data/portfolio";

export default function Skills() {
  const total = skills.reduce((n, g) => n + g.items.length, 0);

  return (
    <Section
      id="skills"
      eyebrow="03 / Toolbox"
      title="Skills & stack"
      intro={`${total} technologies across ${skills.length} domains — the tools I reach for, from the browser down to the database. Hover a card.`}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={(i % 3) * 70}>
            <SkillCard category={group.category} items={group.items} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
