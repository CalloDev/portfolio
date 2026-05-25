"use client";

import { useEffect, useRef, useState } from "react";
import {
  Database,
  Palette,
  Gamepad2,
  ArrowLeftRight,
  Video,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Data & Save Systems",
    description:
      "Reliable data persistence with ProfileService, DataStores, and automatic backups.",
    color: "#8b5cf6",
  },
  {
    icon: Palette,
    title: "UI & Interfaces",
    description:
      "Beautiful, responsive ScreenGuis with smooth tweening and animations.",
    color: "#3b82f6",
  },
  {
    icon: Gamepad2,
    title: "Game Mechanics",
    description:
      "Core gameplay systems from simulators to round-based game modes.",
    color: "#8b5cf6",
  },
  {
    icon: ArrowLeftRight,
    title: "Trading & Economy",
    description:
      "Secure trading systems, currencies, and marketplace implementations.",
    color: "#3b82f6",
  },
  {
    icon: Video,
    title: "Animations & Cutscenes",
    description:
      "Cinematic cutscenes, character animations, and visual storytelling.",
    color: "#8b5cf6",
  },
  {
    icon: Users,
    title: "Team Projects",
    description:
      "Collaborative development with clear communication and version control.",
    color: "#3b82f6",
  },
];

export function Services() {
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
    <section ref={sectionRef} className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            My{" "}
            <span
              className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent"
            >
              Services
            </span>
          </h2>
          <p className="text-muted-foreground">
            What I can build for your Roblox game
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group glass cursor-pointer rounded-xl p-6 text-center transition-all duration-500 hover:scale-[1.02] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${service.color}30, 0 0 60px ${service.color}15`;
                  e.currentTarget.style.borderColor = `${service.color}50`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                }}
              >
                <div
                  className="mx-auto mb-4 inline-flex rounded-xl p-4 transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: `${service.color}15`,
                    boxShadow: `0 0 20px ${service.color}20`,
                  }}
                >
                  <Icon
                    className="h-8 w-8"
                    style={{ color: service.color }}
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
