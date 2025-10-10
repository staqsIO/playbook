"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface VideoCardProps {
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  videoSrc: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export function VideoCard({
  number,
  category,
  title,
  subtitle,
  description,
  videoSrc,
  ctaText = "MORE DETAILS",
  onCtaClick,
}: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      className="relative w-full h-[600px] overflow-hidden cursor-pointer"
      style={{ background: 'rgba(12, 15, 18, 0.80)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={false}
    >
      {/* Video Container */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: isHovered ? "40%" : "0%",
          scale: isHovered ? 0.9 : 1,
        }}
        transition={{
          duration: 0.6,
          delay: isHovered ? 0 : 0.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Horizontal Card - Default State */}
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            className="absolute bottom-8 left-8 right-8"
            style={{ 
              background: 'rgba(12, 15, 18, 0.80)',
              backdropFilter: 'blur(6px)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <div className="flex items-center gap-8 p-8">
              {/* Number */}
              <div className="flex-shrink-0">
                <span className="font-antonio text-8xl text-white/80 leading-none">
                  {number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">
                  {category}
                </p>
                <h3 className="font-antonio font-bold text-4xl text-white mb-3 leading-tight">
                  {title}
                  <br />
                  {subtitle}
                </h3>
                <p className="text-white/80 text-base max-w-xl">
                  {description}
                </p>
              </div>

              {/* CTA Button */}
              <motion.button
                className="flex-shrink-0 bg-primary hover:bg-primary/90 text-black font-bold px-12 py-4 text-lg transition-colors"
                onClick={onCtaClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {ctaText}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vertical Card - Hover State */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-[38%] backdrop-blur-sm"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <div className="flex flex-col justify-between h-full p-12">
              {/* Top Content */}
              <div>
                {/* Number */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.4,
                    type: "spring",
                    stiffness: 200,
                    damping: 8,
                    mass: 0.8
                  }}
                >
                  <span className="font-antonio text-9xl text-white/80 leading-none block mb-8">
                    {number}
                  </span>
                </motion.div>

                {/* Category */}
                <motion.p
                  className="text-primary text-sm font-medium tracking-wider uppercase mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 8,
                    mass: 0.8
                  }}
                >
                  {category}
                </motion.p>

                {/* Title */}
                <motion.h3
                  className="font-antonio font-bold text-5xl text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.55,
                    type: "spring",
                    stiffness: 200,
                    damping: 8,
                    mass: 0.8
                  }}
                >
                  {title}
                  <br />
                  {subtitle}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-white/80 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.6,
                    type: "spring",
                    stiffness: 200,
                    damping: 8,
                    mass: 0.8
                  }}
                >
                  {description}
                </motion.p>
              </div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.65,
                  type: "spring",
                  stiffness: 200,
                  damping: 8,
                  mass: 0.8
                }}
              >
                <motion.button
                  className="w-full bg-primary hover:bg-primary/90 text-black font-bold px-12 py-5 text-lg transition-colors"
                  onClick={onCtaClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {ctaText}
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

