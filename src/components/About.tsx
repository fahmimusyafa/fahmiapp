export default function About() {
  return (
    <section id="about" className="bg-neutral py-section" data-aos="fade-up">
      <div className="container-max">
        <h2 className="mb-12">About</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div data-aos="fade-up" data-aos-delay="40">
            <h3 className="text-lg font-bold mb-4 text-accent">Approach</h3>
            <p className="text-surface mb-4">
              I focus on building systems that solve real problems. Every choice from architecture to implementation serves clarity, performance,
              and maintainability.
            </p>
            <p className="text-surface">
              I work across the full stack: backend services and APIs, database
              design, frontend implementations, deployment infrastructure, and
              the automation that ties it all together.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="120">
            <h3 className="text-lg font-bold mb-4 text-accent">Focus</h3>
            <ul className="space-y-2 text-surface">
              <li>→ Production grade backend systems</li>
              <li>→ Data pipeline and reporting dashboards</li>
              <li>→ API design and integration</li>
              <li>→ Operational tooling and automation</li>
              <li>→ Performance and scalability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
