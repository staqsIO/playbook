"use client";

import { useEffect } from "react";

export function ScrollToTop() {
  useEffect(() => {
    // Prevent automatic scroll restoration
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
    }

    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return null;
}

