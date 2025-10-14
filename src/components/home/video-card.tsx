"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyVideo } from "@/components/ui/lazy-video";

export interface VideoCardProps {
  number: string;
  category: string;
  title: string;
  description: string;
  videoSrc: string;
  ctaText?: string;
  onCtaClick?: () => void;
  fullWidth?: boolean;
  color?: "primary" | "secondary";
}

export function VideoCard({
  number,
  category,
  title,
  description,
  videoSrc,
  ctaText = "MORE DETAILS",
  onCtaClick,
  fullWidth = false,
  color = "primary",
}: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      className={`relative w-full h-[600px] overflow-hidden cursor-pointer ${
        !fullWidth ? "container mx-auto" : ""
      }`}
      style={{ background: "rgba(12, 15, 18, 0.80)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={false}
    >
      {/* Video Container */}
      <motion.div
        className="absolute right-0 bottom-0"
        animate={{
          width: isHovered ? "60%" : "100%",
          height: isHovered ? "95%" : "100%",
        }}
        transition={{
          duration: 0.4,
          delay: isHovered ? 0.3 : 0.4,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        <LazyVideo
          videoSrc={videoSrc}
          className="w-full h-full object-cover center"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={`/images/posters/${videoSrc.split('/').pop()?.replace('.mp4', '.jpg')}`}
          rootMargin="300px"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Horizontal Card - Default State */}
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            className="absolute bottom-8 left-0"
            style={{
              background: "rgba(12, 15, 18, 0.80)",
              backdropFilter: "blur(6px)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.3, delay: 0.7 },
            }}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.15 } }}
          >
            <div className="flex items-center gap-8 p-4">
              {/* Number */}
              <div className="flex-shrink-0">
                <span className="font-[100] text-[74px] text-[#F9FAFB] leading-none">
                  {number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 whitespace-nowrap">
                <p className={`${color === "primary" ? "text-primary" : "text-secondary"} text-[14px] font-[300] tracking-wider uppercase`}>
                  {category}
                </p>
                <h3 className="font-anton text-[32px] text-white">{title}</h3>
              </div>
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
            transition={{
              duration: 0.35,
              delay: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            <div className="flex flex-col justify-end h-full pt-2 pb-8 pl-12 pr-4">
              {/* Top Content */}
              <div>
                {/* Number */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15,
                    type: "spring",
                    stiffness: 250,
                    damping: 7,
                    mass: 0.7,
                  }}
                >
                  <span className="text-[64px] font-[100] text-[#F9FAFB] block">
                    {number}
                  </span>
                </motion.div>

                {/* Category */}
                <motion.p
                  className={`${color === "primary" ? "text-primary" : "text-secondary"} text-[16px] font-[300] tracking-wider uppercase mb-2`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.22,
                    type: "spring",
                    stiffness: 250,
                    damping: 7,
                    mass: 0.7,
                  }}
                >
                  {category}
                </motion.p>

                {/* Title */}
                <motion.h3
                  className="font-anton font-[400] text-[48px] text-white mb-2 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.27,
                    type: "spring",
                    stiffness: 250,
                    damping: 7,
                    mass: 0.7,
                  }}
                >
                  {title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="font-[300] text-white text-[20px] leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.32,
                    type: "spring",
                    stiffness: 250,
                    damping: 7,
                    mass: 0.7,
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
                  delay: 0.37,
                  type: "spring",
                  stiffness: 250,
                  damping: 7,
                  mass: 0.7,
                }}
              >
                <motion.button
                  className={`w-full ${color === "primary" ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"} text-[#0C0F12] font-[400] px-12 py-5 text-[20px] transition-colors`}
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
