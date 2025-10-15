"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface IntroVideoProps {
  videoSrc: string;
  text: string;
}

export function IntroVideo({ videoSrc, text }: IntroVideoProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden z-[60]">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/images/posters/intro.jpg"
      >
        {/* WebM provides better compression (30-50% smaller) */}
        <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Logo */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12">
          <Image
            src="/images/logo-white.svg"
            alt="Playbook"
            width={186}
            height={40}
            className="h-10 w-auto md:h-12"
            priority
          />
        </div>

        {/* Text and Scroll Indicator Container */}
        <div className="w-full absolute bottom-[4rem] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-6">
          {/* Text Above Scroll */}
          <h1 className="text-white text-center px-4 mb-8">
            <div 
              className="font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </h1>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-white/60 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse" />
            </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

