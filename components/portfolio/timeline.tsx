"use client";

import { useEffect, useRef, useState } from "react";

const milestones = [
  {
    year: "2023",
    title: "Professional Commissions",
    description:
      "Started taking paid commissions and working with game studios on complex projects.",
    color: "#8b5cf6",
  },
  {
    year: "2024",
    title: "50M+ Visits Milestone",
    description:
      "Projects I contributed to collectively reached over 50 million visits.",
    color: "#3b82f6",
  },
  {
    year: "2025",
    title: "Full-Stack Game Developer",
    description:
      "Expanded expertise to cover complete game development from systems to UI/UX.",
    color: "#8b5cf6",
  },
  {
    year: "2026",
    title: "Seeking New Opportunities",
    description:
      "Open for exciting projects and team collaborations. Let's build something amazing!",
    color: "#3b82f6",
  },
];

export function Timeline() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            My{" "}
            <span
              className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent"
            >
              Journey
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Key milestones in my development career
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-4 top-0 h-full w-0.5 sm:left-1/2 sm:-translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, #8b5cf6, #6366f1, #3b82f6, #8b5cf6)",
            }}
          />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`,
                }}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-4 z-10 h-4 w-4 rounded-full sm:left-1/2 sm:-translate-x-1/2"
                  style={{
                    backgroundColor: milestone.color,
                    boxShadow: `0 0 20px ${milestone.color}80`,
                  }}
                />

                {/* Content Card */}
                <div
                  className={`ml-12 w-full sm:ml-0 sm:w-[calc(50%-40px)] ${
                    index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"
                  }`}
                >
                  <div
                    className="glass rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      borderColor: `${milestone.color}30`,
                      boxShadow: `0 0 30px ${milestone.color}10`,
                    }}
                  >
                    <span
                      className="mb-2 inline-block text-sm font-bold"
                      style={{ color: milestone.color }}
                    >
                      {milestone.year}
                    </span>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {milestone.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
