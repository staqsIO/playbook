/**
 * Home Page Configuration
 * 
 * This file contains all content and settings for the home page components.
 * Centralized configuration makes it easier to manage and update content.
 */

export const homePageConfig = {
  // Intro Video Section
  introVideo: {
    videoSrc: "/videos/intro.mp4",
    text: 'STORIES That <span class="font-antonio font-normal">MOVE</span> CULTURE',
  },

  // Text Banners
  banners: [
    {
      id: "brands",
      title: '<span class="font-anton font-[300] text-[80px] uppercase">Brands We\'ve Played With</span>',
      subtitle: "Collaboration with leading brands that shape culture and drive conversations.",
    },
    {
      id: "stories-in-motion",
      title: '<span class="font-anton font-[300] text-[80px]">STORIES</span> <span class="font-light text-[72px]">in</span> <span class="font-anton font-[300] text-[80px]">MOTION</span>',
      subtitle: "A curated look at projects where storytelling, creativity, and performance came together.",
    },
  ],
} as const;

// Type exports for better TypeScript support
export type HomePageConfig = typeof homePageConfig;
export type BannerConfig = typeof homePageConfig.banners[number];

