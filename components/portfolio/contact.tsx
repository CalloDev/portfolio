"use client";

import { useEffect, useRef, useState } from "react";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
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

  const handleCopy = () => {
    navigator.clipboard.writeText("CalloDevelops");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-xl">
        {/* Header */}
        <div
          className={`mb-12 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Hire{" "}
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-muted-foreground">
            Reach out on Discord and I'll get back to you as soon as possible
          </p>
        </div>

        {/* Discord Card */}
        <div
          className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div
            className="glass rounded-2xl p-10 flex flex-col items-center gap-6 text-center"
            style={{
              boxShadow: "0 0 60px rgba(139, 92, 246, 0.15), 0 0 120px rgba(59, 130, 246, 0.08)",
              border: "1px solid rgba(139, 92, 246, 0.2)",
            }}
          >
            {/* Discord Logo */}
            <div
              className="flex h-20 w-20 items-center justify-center rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(88,101,242,0.2), rgba(88,101,242,0.05))",
                boxShadow: "0 0 30px rgba(88, 101, 242, 0.3)",
                border: "1px solid rgba(88, 101, 242, 0.3)",
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 127.14 96.36"
                fill="#5865F2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
            </div>

            {/* Username */}
            <div>
              <p className="text-sm text-muted-foreground mb-1">Discord</p>
              <p
                className="text-2xl font-bold tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                CalloDevelops
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 w-full">
              <a
                href="https://discord.com/users/559133985561640961"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full py-3 text-sm font-semibold text-white text-center transition-all duration-300 hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)",
                }}
              >
                Message Me
              </a>
              <button
                onClick={handleCopy}
                className="flex-1 rounded-full py-3 text-sm font-semibold transition-all duration-300"
                style={{
                  background: "rgba(139, 92, 246, 0.1)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  color: copied ? "#3b82f6" : "#8b5cf6",
                }}
              >
                {copied ? "Copied!" : "Copy Username"}
              </button>
            </div>

            <p className="text-xs text-muted-foreground">
              Timezone: GMT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}