"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";

const stats = [
  { value: "50M+", label: "Visits" },
  { value: "5+", label: "Years" },
  { value: "100%", label: "Satisfaction" },
];

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden px-4 pt-32 pb-20">
      {/* Aurora Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="animate-pulse-glow absolute -top-1/2 left-1/4 h-[800px] w-[800px] rounded-full opacity-30 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
          }}
        />
        <div
          className="animate-pulse-glow absolute top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full opacity-20 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
            animationDelay: "1s",
          }}
        />
        <div
          className="animate-pulse-glow absolute -bottom-1/4 left-1/3 h-[500px] w-[500px] rounded-full opacity-20 blur-[80px]"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="grid-pattern absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div
            className="glass animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{ animationDelay: "0.1s" }}
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Available for Work
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="animate-fade-in-up mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="block text-foreground">Advanced</span>
            <span
              className="animate-gradient block bg-gradient-to-r from-[#8b5cf6] via-[#6366f1] to-[#3b82f6] bg-clip-text text-transparent"
              style={{ backgroundSize: "200% 200%" }}
            >
              Lua Scripter
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="animate-fade-in-up mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            style={{ animationDelay: "0.3s" }}
          >
            Developing clean and scalable systems, from fully fledged
            experiences to simple commissions.
          </p>

          {/* CTA Buttons */}
          <div
            className="animate-fade-in-up mb-16 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              onClick={() => scrollToSection("#projects")}
              size="lg"
              className="group rounded-full px-8 font-semibold text-primary-foreground transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                boxShadow:
                  "0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)",
              }}
            >
              View Work
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => scrollToSection("#contact")}
              size="lg"
              variant="outline"
              className="rounded-full border-border px-8 font-semibold text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/10"
            >
              Get in Touch
            </Button>
          </div>

          {/* Floating Stats */}
          <div
            className="animate-fade-in-up flex flex-wrap justify-center gap-6"
            style={{ animationDelay: "0.5s" }}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="animate-float glass rounded-xl px-6 py-4 transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  boxShadow:
                    index === 0
                      ? "0 0 30px rgba(139, 92, 246, 0.2)"
                      : index === 1
                        ? "0 0 30px rgba(99, 102, 241, 0.2)"
                        : "0 0 30px rgba(59, 130, 246, 0.2)",
                }}
              >
                <div
                  className="text-2xl font-bold sm:text-3xl"
                  style={{
                    color:
                      index === 0
                        ? "#8b5cf6"
                        : index === 1
                          ? "#6366f1"
                          : "#3b82f6",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
