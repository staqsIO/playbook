"use client";

import { useState, useEffect } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check initial theme
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      setIsDark(root.classList.contains("dark"));
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-4 right-4 rounded-md border border-input bg-background p-2 text-sm shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
      aria-label="Toggle theme"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}

