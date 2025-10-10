"use client";

import { useEffect, useState } from "react";
import GradualBlur from "@/components/bits/gradual-blur";

export function LayoutBlur() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <GradualBlur 
      position="bottom" 
      strength={2}
      height="5rem"
      opacity={1}
      target="page"
      exponential={true}
    />
  );
}

