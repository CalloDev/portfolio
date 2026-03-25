"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, X } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  color: string;
  size: string;
  video?: string;
};

const projects: Project[] = [
  {
    title: "SimpleZone Module",
    description: "An OOP module with a variety of different functions such as player/part entering and exiting, get random point in zone, use for both client and server - optimised for performance and efficiency",
    tags: ["OOP", "Signal", "Type"],
    color: "#3b82f6",
    size: "medium",
    video: "https://aadadhzttjugnkracktt.supabase.co/storage/v1/object/public/portfolio/Roblox_2026.03.16-16.22%20-%20MERGE%20-%20Videobolt.net.mp4",
  },
  {
    title: "Breakaway Stud Wall",
    description:
      "A breakaway stud wall I made for practice and fun - breaks a part into studs before breaking away from the centre",
    tags: ["Math", "Modular"],
    color: "#8b5cf6",
    size: "medium",
    video: "https://aadadhzttjugnkracktt.supabase.co/storage/v1/object/public/portfolio/unknown_2026.03.18-14.23_clip_1.mp4"
  },
  {
    title: "Crater Explosion",
    description:
      "A modular crater generator - matches the surface underneath the player, combined with an explosion VFX, as well as damaging nearby players in a configurable radius",
    tags: ["TweenService", "Raycast", "VFX"],
    color: "#3b82f6",
    size: "medium",
    video: "https://aadadhzttjugnkracktt.supabase.co/storage/v1/object/public/portfolio/Roblox_2026.03.18-21.43_clip_1_clip_1.mp4"
  },
  {
    title: " Claude AI NPC",
    description:
      "Claude Sonnet 4.6 brought into Roblox - utilises tool calling to complete Roblox specific actions such as changing a players walkspeed, size, changing the time, etc.",
    tags: ["HTTP Service", "AI"],
    color: "#8b5cf6",
    size: "medium",
    video: "https://aadadhzttjugnkracktt.supabase.co/storage/v1/object/public/portfolio/Roblox_2026.03.18-23.29_clip_1.mp4"
  },
];

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpandedVideo(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = expandedVideo ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [expandedVideo]);

  return (
    <section id="projects" ref={sectionRef} className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground">
            A selection of a few development work
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid auto-rows-[minmax(200px,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group glass relative overflow-hidden rounded-xl p-6 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${project.size === "large"
                  ? "sm:col-span-2 sm:row-span-2"
                  : project.size === "medium"
                    ? "sm:row-span-2"
                    : ""
                }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                borderTop: `2px solid ${project.color}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 40px ${project.color}30, 0 0 80px ${project.color}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Hover Icon */}
              <div className="absolute top-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                <ExternalLink className="h-5 w-5" style={{ color: project.color }} />
              </div>

              {/* Video Preview - click to expand */}
              {project.video && (
                <div
                  className="mb-4 cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => setExpandedVideo(project.video!)}
                >
                  <video
                    className="w-full transition-transform duration-300 hover:scale-[1.02]"
                    style={{ height: "160px", objectFit: "cover" }}
                    src={project.video}
                    /*autoPlay*/
                    muted
                    loop
                    playsInline
                  />
                </div>
              )}

              {/* Content */}
              <div className="flex flex-col gap-2 mt-2">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        backgroundColor: `${project.color}20`,
                        color: project.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Background Gradient on Hover */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at bottom right, ${project.color}10 0%, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Video Overlay */}
      {expandedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.9)", backdropFilter: "blur(10px)" }}
          onClick={() => setExpandedVideo(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setExpandedVideo(null)}
              className="absolute -top-10 right-0 rounded-full p-2 text-white transition-all hover:opacity-70"
            >
              <X className="h-5 w-5" />
            </button>
            <video
              className="w-full rounded-2xl"
              src={expandedVideo}
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>
        </div>
      )}
    </section>
  );
}