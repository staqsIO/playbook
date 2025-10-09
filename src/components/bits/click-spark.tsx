"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Spark {
  id: number;
  x: number;
  y: number;
}

interface ClickSparkProps {
  children: React.ReactNode;
  className?: string;
}

export function ClickSpark({ children, className = "" }: ClickSparkProps) {
  const [sparks, setSparks] = useState<Spark[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newSpark = {
      id: Date.now(),
      x,
      y,
    };

    setSparks((prev) => [...prev, newSpark]);

    setTimeout(() => {
      setSparks((prev) => prev.filter((spark) => spark.id !== newSpark.id));
    }, 1000);
  };

  return (
    <div
      className={`relative cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {children}
      {sparks.map((spark) => (
        <motion.div
          key={spark.id}
          className="pointer-events-none absolute"
          style={{
            left: spark.x,
            top: spark.y,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-primary"
              initial={{ x: 0, y: 0 }}
              animate={{
                x: Math.cos((i * Math.PI) / 4) * 30,
                y: Math.sin((i * Math.PI) / 4) * 30,
              }}
              transition={{ duration: 0.6 }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
}

