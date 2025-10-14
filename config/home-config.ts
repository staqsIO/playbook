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

  // Brands Section
  brands: {
    title: "Brands We've Played With",
    items: [
      {
        id: "adidas",
        img: "/images/brands/adidas.png"
      },
      {
        id: "electrolit",
        img: "/images/brands/electrolit.png"
      },
      {
        id: "xbox",
        img: "/images/brands/xbox.png"
      },
      {
        id: "newyork-liberty",
        img: "/images/brands/newyork-liberty.png"
      },
      {
        id: "lovb",
        img: "/images/brands/lovb.png"
      },
      {
        id: "spanx",
        img: "/images/brands/spanx.png"
      },
      {
        id: "lilly",
        img: "/images/brands/lilly.png"
      },
      {
        id: "whistle-sports",
        img: "/images/brands/whistle-sports.png"
      }
    ]
  },

  // Text Banners
  banners: [
    {
      id: "brands",
      title: '<span class="tracking-tight font-antonio font-bold text-[80px] uppercase">Brands We\'ve Played With</span>',
      subtitle: "Collaboration with leading brands that shape culture and drive conversations.",
    },
    {
      id: "stories-in-motion",
      title: '<span class="tracking-tight font-antonio font-bold text-[80px]">STORIES</span> <span class="font-light text-[72px]">in</span> <span class="tracking-tight font-antonio font-bold text-[80px]">MOTION</span>',
      subtitle: "A curated look at projects where storytelling, creativity, and performance came together.",
    },
  ],

  // Video Cards
  videoCards: [
    {
      id: "liberty-xbox",
      number: "01",
      category: "Campaign Takeover",
      title: 'WNBA NY LIBERTY × Xbox "Sea of Thieves"',
      description: "A pirate‑themed takeover from schooner to jumbotron.",
      videoSrc: "/videos/liberty-xbox.mp4",
      ctaText: "MORE DETAILS",
    },
    {
      id: "electrolit-aryna",
      number: "02",
      category: "CAMPAIGN / PARTNERSHIP",
      title: 'ELECTROLIT × Aryna Sabalenka "Rumor Has It"',
      description: "A high-energy rumor-fueled social spot with tennis star Aryna Sabalenka, blending attitude, speed, and brand power at the U.S. Open.",
      videoSrc: "/videos/electrolit.mp4",
      ctaText: "MORE DETAILS",
    },
    {
      id: "lovb-spanx",
      number: "03",
      category: "SOCIAL CONTENT CAMPAIGN",
      title: "LOVB × SPANX (3 Parts)",
      description: "Compelling social videos featuring athlete-moms in Spanx, showcasing life beyond the game. Spanx's top-performing social content to date.",
      videoSrc: "/videos/lovb.mp4",
      ctaText: "MORE DETAILS",
    },
    {
      id: "whistle-sports",
      number: "04",
      category: "ORIGINAL SERIES",
      title: "WHISTLE SPORTS – No Days Off",
      description: "Documentary episode featuring Makena Cook, a rising teenage quarterback destined for Olympic flag football.",
      videoSrc: "/videos/whistle.mp4",
      ctaText: "MORE DETAILS",
    },
  ],
} as const;

// Type exports for better TypeScript support
export type HomePageConfig = typeof homePageConfig;
export type BannerConfig = typeof homePageConfig.banners[number];

