"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className="h-[30px] w-[64px] border border-line" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-[30px] border border-line px-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
    >
      {isDark ? "Dark" : "Light"}
    </button>
  );
}
