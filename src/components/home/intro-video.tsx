"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface IntroVideoProps {
  videoSrc: string;
  text: string;
}

export function IntroVideo({ videoSrc, text }: IntroVideoProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show content immediately, animate only after mounted
  return (
    <section className="relative w-full h-screen overflow-hidden z-[60] bg-background">
      {/* Video Background */}
      <motion.video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/images/posters/intro.jpg"
        initial={mounted ? { opacity: 0, scale: 1.1 } : false}
        animate={mounted ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
      >
        {/* WebM provides better compression (30-50% smaller) */}
        <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Dark Overlay */}
      <motion.div 
        className="absolute inset-0 bg-black/50"
        initial={mounted ? { opacity: 0 } : false}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.3 }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Logo */}
        <motion.div 
          className="absolute top-8 left-8 md:top-12 md:left-12"
          initial={mounted ? { opacity: 0, y: -30 } : false}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 1.5 
          }}
        >
          <Image
            src="/images/logo-white.svg"
            alt="Playbook"
            width={186}
            height={40}
            className="h-10 w-auto md:h-12"
            priority
          />
        </motion.div>

        {/* Text and Scroll Indicator Container */}
        <div className="w-full absolute bottom-[4rem] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-6">
          {/* Text Above Scroll */}
          <motion.h1 
            className="text-white text-center px-4 mb-8"
            initial={mounted ? { opacity: 0, y: 40 } : false}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              type: "spring",
              stiffness: 180,
              damping: 18,
              delay: 1.8 
            }}
          >
            <div 
              className="font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </motion.h1>

          {/* Scroll Indicator */}
          <motion.div 
            className="animate-bounce"
            initial={mounted ? { opacity: 0, y: 30 } : false}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              type: "spring",
              stiffness: 160,
              damping: 20,
              delay: 2.2 
            }}
          >
            <div className="w-8 h-12 rounded-full border-2 border-white/60 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse" />
            </div>
              </motion.div>
            </div>
          </div>
        </section>
      );
    }

