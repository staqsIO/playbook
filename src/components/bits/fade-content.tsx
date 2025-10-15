"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeContentProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  blur?: boolean;
  blurAmount?: number;
  y?: number;
  once?: boolean;
}

export function FadeContent({
  children,
  className,
  delay = 0,
  duration = 0.8,
  blur = true,
  blurAmount = 10,
  y = 20,
  once = true,
}: FadeContentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y,
        filter: blur ? `blur(${blurAmount}px)` : undefined,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : y,
        filter: isInView ? "blur(0px)" : blur ? `blur(${blurAmount}px)` : undefined,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

