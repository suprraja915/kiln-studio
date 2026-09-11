"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("kiln-theme", next ? "dark" : "light");
    } catch {
      // localStorage unavailable — theme just won't persist, no need to fail loudly
    }
  }

  return (
    <button
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-8 w-14 items-center rounded-full border border-ink/20 dark:border-ink-inverse/20 px-1 transition-colors"
    >
      <span
        className={`h-5 w-5 rounded-full bg-amber transition-transform ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
}
