"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: string;
  className?: string;
  colors?: string[];
  animate?: boolean;
}

export function GradientText({
  children,
  className,
  colors = ["#F97316", "#66A540"],
  animate = true,
}: GradientTextProps) {
  const gradient = `linear-gradient(90deg, ${colors.join(", ")})`;

  return (
    <motion.span
      className={cn("inline-block font-bold", className)}
      style={{
        backgroundImage: gradient,
        backgroundSize: animate ? "200% auto" : "100% auto",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
      }}
      animate={
        animate
          ? {
              backgroundPosition: ["0% center", "200% center"],
            }
          : {}
      }
      transition={
        animate
          ? {
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }
          : {}
      }
    >
      {children}
    </motion.span>
  );
}

