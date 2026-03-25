"use client";

import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Database,
  Palette,
  Gamepad2,
  Coins,
  Zap,
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Modular Design",
    description: "Fully modular code, utilising OOP where necessary",
    color: "#8b5cf6",
  },
  {
    icon: Database,
    title: "Systems",
    description: "ProfileStore, Rojo, Knit, Signal",
    color: "#3b82f6",
  },
  {
    icon: Palette,
    title: "UI",
    description: "TweenService, Effects, Menu, Settings, Shop",
    color: "#8b5cf6",
  },
  {
    icon: Gamepad2,
    title: "Game Mechanics",
    description: "Round Systems, Combat Mechanics, Cutscenes",
    color: "#3b82f6",
  },
  {
    icon: Coins,
    title: "Monetization",
    description: "Gamepasses, DevProducts, Subscriptions",
    color: "#8b5cf6",
  },
  {
    icon: Zap,
    title: "Optimization",
    description: "Performance & Efficiency, Networking, Anti-Exploit",
    color: "#3b82f6",
  },
];

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative px-4 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            My{" "}
            <span
              className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent"
            >
              Skills
            </span>
          </h2>
          <p className="text-muted-foreground">
            Example of things I can bring to every project
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className={`group glass rounded-xl p-6 transition-all duration-500 hover:scale-[1.02] ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                  }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  borderTop: `2px solid ${skill.color}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${skill.color}40, 0 0 60px ${skill.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="mb-4 inline-flex rounded-lg p-3"
                  style={{
                    backgroundColor: `${skill.color}20`,
                  }}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{ color: skill.color }}
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
