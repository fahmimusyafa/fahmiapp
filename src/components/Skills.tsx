import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section className="bg-neutral py-section" data-aos="fade-up">
      <div className="container-max">
        <h2 className="mb-12">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skillGroup, idx) => (
            <div
              key={skillGroup.category}
              className="border border-neutral p-6"
              data-aos="fade-up"
              data-aos-delay={String(Math.min(idx * 60, 180))}
            >
              <h3 className="text-lg font-bold mb-4 text-accent">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2 text-surface text-sm">
                {skillGroup.items.map((item) => (
                  <li key={item}>→ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
