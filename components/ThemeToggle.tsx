"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span className="h-9 w-9 rounded-full border border-white/10 bg-white/[0.03]" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-ink-300 transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-accent-soft light-mode:border-black/10 light-mode:bg-black/[0.03] light-mode:text-ink-500"
    >
      {isDark ? (
        <Sun size={16} className="transition-transform group-hover:rotate-12" />
      ) : (
        <Moon
          size={16}
          className="transition-transform group-hover:-rotate-12"
        />
      )}
    </button>
  );
}
