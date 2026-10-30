"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { StaticImageData } from "next/image";
import { projects, type ProjectImageKey } from "@/data/portfolio";
import ChromaGrid, { type ChromaItem } from "@/components/ChromaGrid";
import bridgeImage from "@/assets/img/Macbook-Air-bridge.ethos.co.id.webp";
import datalogicImage from "@/assets/img/Macbook-Air-datalogic-vps.ethos.co.id.webp";
import ssrImage from "@/assets/img/Macbook-Air-ssr-itdev.ethos.co.id.webp";
import twentyMefreeAdminImage from "@/assets/img/Macbook-Air-20mefree-prod-cms.ethos.co.id.webp";
import twentyMefreeLandingImage from "@/assets/img/Macbook-Air-20mefree.id.webp";
import keepointImage from "@/assets/img/Macbook-Air-keepoint.webp";

const projectImages: Record<ProjectImageKey, StaticImageData> = {
  bridge: bridgeImage,
  datalogic: datalogicImage,
  ssr: ssrImage,
  twentyMefreeAdmin: twentyMefreeAdminImage,
  twentyMefreeLanding: twentyMefreeLandingImage,
  keepoint: keepointImage,
};

const accentPalette = ["#00ff9d", "#ff9f30", "#8b9bb4", "#7dd3fc", "#fbbf24", "#34d399"];

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedProjectId) ?? null,
    [selectedProjectId]
  );

  const chromaItems: ChromaItem[] = useMemo(
    () =>
      projects.map((project, index) => ({
        image: projectImages[project.image].src,
        title: project.name,
        subtitle: project.role,
        accent: accentPalette[index % accentPalette.length],
        alt: `Preview project ${project.name}`,
      })),
    []
  );

  useEffect(() => {
    if (!selectedProjectId) return undefined;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProjectId(null);
        return;
      }

      if (event.key !== "Tab") return;

      const root = modalRef.current;
      if (!root) return;

      const focusable = root.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (!focusable.length) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [selectedProjectId]);

  return (
    <section id="projects" className="bg-primary py-section" data-aos="fade-up">
      <div className="container-max">
        <h2 className="mb-12">Selected Projects</h2>
        <p className="mb-6 text-surface max-w-3xl">
          Click on a project card to view the full description, impact, and the technologies used.
        </p>
        <ChromaGrid
          items={chromaItems}
          columns={3}
          minCardWidth={220}
          gap={16}
          radius={240}
          cardRadius={0}
          reveal="spotlight"
          theme="dark"
          frame={false}
          className="w-full"
          onItemClick={(_, index) => setSelectedProjectId(projects[index]?.id ?? null)}
        />
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[300] bg-primary/80 backdrop-blur-sm px-6 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-dialog-title"
          onClick={() => setSelectedProjectId(null)}
        >
          <div className="mx-auto max-w-3xl h-full flex items-center">
            <div
              ref={modalRef}
              className="w-full border border-neutral bg-primary shadow-xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 border-b border-neutral px-5 py-4">
                <div>
                  <h3 id="project-dialog-title" className="text-xl md:text-2xl text-secondary">
                    {selectedProject.name}
                  </h3>
                  <p className="text-sm text-accent mt-1">{selectedProject.role}</p>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setSelectedProjectId(null)}
                  className="btn-secondary px-3 py-2"
                  aria-label="Close project details"
                >
                  Close
                </button>
              </div>

              <div className="px-5 py-5 space-y-5 max-h-[70vh] overflow-y-auto">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-surface mb-2">Description</h4>
                  <p className="text-secondary">{selectedProject.description}</p>
                </div>

                {selectedProject.impact && (
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-surface mb-2">Impact</h4>
                    <p className="text-secondary">{selectedProject.impact}</p>
                  </div>
                )}

                <div>
                  <h4 className="text-sm uppercase tracking-wider text-surface mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 border border-neutral text-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
