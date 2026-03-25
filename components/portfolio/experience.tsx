"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    group: "Naval Roleplay Community",
    role: "Scripter",
    duration: "3+ Years",
    description: "Contributed to multiple updates and maintained Warship Roleplay (22M+ visits), as well as other games across their connected groups.",
    url: "https://www.roblox.com/communities/3534363/Naval-Roleplay-Community",
    members: "250,000+",
    current: false,
  },
  {
    group: "Duo Interactive",
    role: "Scripter",
    duration: "Present",
    description: "Actively scripting new systems and maintaining the main game Dupoint County Jail (11M+ visits), collaborating with the team to deliver updates and improvements.",
    url: "https://www.roblox.com/communities/33283057/Duo-Interactive",
    members: "23,000+",
    current: false,
  },
];

export function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div
          className={`mb-12 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            My{" "}
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-muted-foreground">
            Notable groups I've contributed to as a scripter
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {experiences.map((exp, index) => (
            <div
              key={exp.group}
              className={`glass rounded-2xl p-6 flex flex-col gap-4 transition-all duration-700 hover:scale-[1.02] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                border: "1px solid rgba(139, 92, 246, 0.15)",
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.05)",
              }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-bold text-foreground">{exp.group}</h3>
                    {exp.current && (
                      <span
                        className="rounded-full px-2 py-0.5 text-xs font-semibold"
                        style={{
                          background: "rgba(139, 92, 246, 0.15)",
                          color: "#8b5cf6",
                          border: "1px solid rgba(139, 92, 246, 0.3)",
                        }}
                      >
                        Current
                      </span>
                    )}
                  </div>
                  <p
                    className="mt-1 text-sm font-medium"
                    style={{
                      background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {exp.role}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{exp.duration}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground">{exp.description}</p>

              {/* Members */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-muted-foreground">👥</span>
                <span className="text-xs text-muted-foreground">{exp.members} members</span>
              </div>

              {/* View link */}
              <a
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 self-start rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:opacity-80"
                style={{
                  background: "rgba(139, 92, 246, 0.1)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  color: "#8b5cf6",
                }}
              >
                View Group <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}