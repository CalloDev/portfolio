"use client";

import { useEffect, useRef, useState } from "react";
import { User } from "lucide-react";

const tags = [
  "Luau",
  "OOP",
  "ECS",
  "ModuleScripts",
  "Libraries",
  "Single Script Architecture",
  "Server Authority"
];

export function About() {
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
      id="about"
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
            About{" "}
            <span
              className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent"
            >
              Me
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Passionate scripter with 5+ years of experience
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Avatar Section */}
          <div
            className={`flex justify-center transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="relative">
              {/* Neon Ring */}
              <div
                className="animate-pulse-glow absolute -inset-4 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, #8b5cf6, #6366f1, #3b82f6)",
                  opacity: 0.3,
                  filter: "blur(20px)",
                }}
              />
              {/* Avatar Container */}
              <div
                className="relative flex h-64 w-64 items-center justify-center rounded-full sm:h-80 sm:w-80"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  border: "2px solid rgba(139, 92, 246, 0.5)",
                  boxShadow:
                    "0 0 40px rgba(139, 92, 246, 0.3), inset 0 0 60px rgba(139, 92, 246, 0.1)",
                }}
              >
                <User className="h-24 w-24 text-primary sm:h-32 sm:w-32" />
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div
            className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h3 className="mb-4 text-2xl font-bold">
              CalloDevelops - 18
            </h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              {`I'm a passionate and dedicated ROBLOX scripter with over 5 years of experience building everything from complex, production-ready systems or quick one-time commissions. My code is always clean and scalable, allowing for ease of maintenance or future additions.`}
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              {`I take a modular, system-first approach to every project and commission - prioritising readability and structure. I utilise OOP, ECS, and any relevant libraries such as Janitor, ProfileStore, Jecs, to ensure complete efficiency and optimisation. I also adapt easilty to existing codebases.`}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <span
                  key={tag}
                  className="glass rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor:
                      index % 2 === 0
                        ? "rgba(139, 92, 246, 0.3)"
                        : "rgba(59, 130, 246, 0.3)",
                    boxShadow:
                      index % 2 === 0
                        ? "0 0 15px rgba(139, 92, 246, 0.1)"
                        : "0 0 15px rgba(59, 130, 246, 0.1)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
