"use client";

import { useEffect } from "react";

export function ScrollToTop() {
  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return;
    
    // Prevent automatic scroll restoration
    window.history.scrollRestoration = "manual";

    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return null;
}

