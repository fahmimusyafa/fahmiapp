export default function Header() {
  return (
    <header className="sticky top-0 z-100 bg-primary border-b border-neutral">
      <nav className="container-max py-4 flex items-center justify-between">
        <h1 className="text-lg font-bold">Portofolio.</h1>
        <div className="flex gap-6 text-sm">
          <a
            href="#about"
            className="text-surface hover:text-accent transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-surface hover:text-accent transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-surface hover:text-accent transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
