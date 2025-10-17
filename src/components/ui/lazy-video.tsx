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
  preload = "none",
  rootMargin = "200px",
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Intersection Observer to detect when video enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin, // Start loading before video enters viewport
        threshold: 0.1, // Trigger when 10% of video is visible
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

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
    >
      {shouldLoad && (
        <>
          <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
          <source src={videoSrc} type="video/mp4" />
        </>
      )}
      Your browser does not support the video tag.
    </video>
  );
}

