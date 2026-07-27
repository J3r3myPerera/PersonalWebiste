"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className="block h-[30px] w-[62px] border border-line" />;
  }

  const isDark = theme === "dark";

  return (
    <div
      role="group"
      aria-label="Colour theme"
      className="relative grid h-[30px] w-[62px] grid-cols-2 border border-line transition-colors hover:border-line-strong"
    >
      {/* sliding knob */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-accent-soft transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: isDark ? "translateX(0)" : "translateX(100%)" }}
      />
      <button
        type="button"
        aria-label="Switch to dark mode"
        aria-pressed={isDark}
        onClick={() => setTheme("dark")}
        className={`relative grid place-items-center transition-colors ${
          isDark ? "text-accent" : "text-ink-faint hover:text-ink"
        }`}
      >
        <Moon size={13} />
      </button>
      <button
        type="button"
        aria-label="Switch to light mode"
        aria-pressed={!isDark}
        onClick={() => setTheme("light")}
        className={`relative grid place-items-center transition-colors ${
          !isDark ? "text-accent" : "text-ink-faint hover:text-ink"
        }`}
      >
        <Sun size={13} />
      </button>
    </div>
  );
}
