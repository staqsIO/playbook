"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  videoSrc: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  poster?: string;
  preload?: "none" | "metadata" | "auto";
  rootMargin?: string;
}

export function LazyVideo({
  videoSrc,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  poster,
  preload = "metadata",
  rootMargin = "200px",
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={preload}
      poster={poster}
      src={videoSrc}
    >
      Your browser does not support the video tag.
    </video>
  );
}

