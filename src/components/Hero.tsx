import Lanyard from "@/components/Lanyard";

export default function Hero() {
  return (
    <section className="relative bg-primary py-section" data-aos="fade-up">
      <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="mb-6">
            Full-Stack Web Developer
            <br />
            <span className="text-accent">Building Scalable Systems</span>
          </h1>
          <p className="text-surface mb-8 max-w-prose">
            I build production-grade web applications with technical precision.
            Specializing in Laravel, Vue.js, and TypeScript for backend systems,
            dashboards, and API integrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a
              href="#projects"
              className="btn-secondary"
            >
              View Projects
            </a>
            <a
              href="/cv-muhamad-fahmi-musyafa.pdf"
              download
              className="btn-secondary"
            >
              Download CV
            </a>
          </div>
        </div>
        <div>
          <div className="h-[320px] md:h-[380px] border-2 border-neutral grid-lines overflow-hidden">
            <Lanyard
              className="h-full w-full"
              frontImage="/lanyard/card-depan.png"
              backImage="/lanyard/card-belakang.png"
              strapImage="/lanyard/tali-lanyard.png"
              imageFit="cover"
              cardColor="#0b1623"
              strapColor="#111111"
              finish="matte"
              metal="silver"
              size={0.62}
              strapLength={0.48}
              strapWidth={0.65}
              gravity={1}
              damping={0.5}
              elasticity={0.5}
              breeze={0.4}
              interactive
              intro
            />
          </div>
        </div>
      </div>
    </section>
  );
}
