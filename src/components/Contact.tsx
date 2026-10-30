import { contact } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="bg-primary py-section" data-aos="fade-up">
      <div className="container-max">
        <h2 className="mb-12">Get In Touch</h2>
        <div className="max-w-2xl">
          <p className="text-surface mb-8">
            Interested in working together? Have questions about my work? Reach
            out &mdash; I&apos;m open to collaboration and conversation.
          </p>

          <div className="space-y-4 mb-8">
            <div>
              <p className="text-sm text-accent mb-2">Email</p>
              <a
                href={`mailto:${contact.email}`}
                className="text-secondary hover:text-accent transition-colors break-all"
              >
                {contact.email}
              </a>
            </div>

            <div>
              <p className="text-sm text-accent mb-2">Links</p>
              <div className="flex gap-6">
                {contact.github && (
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-accent transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {contact.linkedin && (
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-accent transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
