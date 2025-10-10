"use client";

import GradualBlur from "@/components/bits/gradual-blur";

export function LayoutBlur() {
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

