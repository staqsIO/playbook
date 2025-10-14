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
  const [isInView, setIsInView] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsInView(true);
          setHasLoaded(true);
        }
      },
      {
        rootMargin, // Start loading before entering viewport
        threshold: 0.1,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [hasLoaded, rootMargin]);

  // Get WebM version if it exists (better compression)
  const webmSrc = videoSrc.replace('.mp4', '.webm');
  
  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={autoPlay && isInView}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={isInView ? preload : "none"}
      poster={poster}
    >
      {isInView && (
        <>
          {/* Try WebM first (better compression) */}
          <source src={webmSrc} type="video/webm" />
          {/* Fallback to MP4 */}
          <source src={videoSrc} type="video/mp4" />
        </>
      )}
      Your browser does not support the video tag.
    </video>
  );
}

