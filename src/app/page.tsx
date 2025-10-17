import { IntroVideo, TextBanner, Brands, VideoCard } from "@/components/home";
import { FlowingMenu, FadeContent } from "@/components/bits";
import { Navbar } from "@/components/layout";
import { homePageConfig } from "../../config/home-config";
import type { Metadata } from "next";

// Static metadata for SEO and caching
export const metadata: Metadata = {
  title: "Playbook - Stories That Move Culture",
  description: "Collaboration with leading brands that shape culture and drive conversations. Campaign takeovers, brand partnerships, and original content.",
  keywords: ["playbook", "brand partnerships", "campaign takeovers", "creative content", "sports marketing"],
  openGraph: {
    title: "Playbook - Stories That Move Culture",
    description: "Collaboration with leading brands that shape culture and drive conversations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Playbook - Stories That Move Culture",
    description: "Collaboration with leading brands that shape culture and drive conversations.",
  },
};

// Optimize for static generation (but allow graceful fallbacks)
// Vercel will automatically cache and serve as static
export const dynamic = 'auto'; // Let Next.js decide best strategy
export const revalidate = false; // Don't revalidate (pure static)

export default function Home() {
  const { introVideo, brands, banners, videoCards, flowingMenu } = homePageConfig;

  return (
    <>
      {/* Intro - No Navbar */}
      <IntroVideo videoSrc={introVideo.videoSrc} text={introVideo.text} />

      {/* Main Content - With Sticky Navbar */}
      <div className="relative">
        <Navbar />
        
        <div className="pt-20">
          <FadeContent blur={true} blurAmount={10} duration={0.8}>
            <div className="mt-10">
              <TextBanner title={banners[0].title} subtitle={banners[0].subtitle} />
            </div>
          </FadeContent>

          <FadeContent blur={true} blurAmount={10} duration={0.8}>
            <Brands brands={brands.items} />
          </FadeContent>

          <FadeContent blur={true} blurAmount={10} duration={0.8}>
            <div className="mt-20">
              <TextBanner title={banners[1].title} subtitle={banners[1].subtitle} />
            </div>
          </FadeContent>

          {/* Xbox Card */}
          <FadeContent blur={true} blurAmount={10} duration={0.8}>
            <div className="mb-[120px]">
              <VideoCard
                number={videoCards[0].number}
                category={videoCards[0].category}
                title={videoCards[0].title}
                description={videoCards[0].description}
                videoSrc={videoCards[0].videoSrc}
                ctaText={videoCards[0].ctaText}
                color="secondary"
              />
            </div>
          </FadeContent>

          {/* Electrolit Card */}
          <FadeContent blur={true} blurAmount={10} duration={0.8}>
            <div className="mb-[120px]">
              <VideoCard
                number={videoCards[1].number}
                category={videoCards[1].category}
                title={videoCards[1].title}
                description={videoCards[1].description}
                videoSrc={videoCards[1].videoSrc}
                ctaText={videoCards[1].ctaText}
              />
            </div>
          </FadeContent>

          {/* LOVB Card */}
          <FadeContent blur={true} blurAmount={10} duration={0.8}>
            <div className="mb-[120px]">
              <VideoCard
                number={videoCards[2].number}
                category={videoCards[2].category}
                title={videoCards[2].title}
                description={videoCards[2].description}
                videoSrc={videoCards[2].videoSrc}
                ctaText={videoCards[2].ctaText}
                color="secondary"
              />
            </div>
          </FadeContent>

          {/* Whistle Card */}
          <FadeContent blur={true} blurAmount={10} duration={0.8}>
            <div className="mb-[120px]">
              <VideoCard
                number={videoCards[3].number}
                category={videoCards[3].category}
                title={videoCards[3].title}
                description={videoCards[3].description}
                videoSrc={videoCards[3].videoSrc}
                ctaText={videoCards[3].ctaText}
              />
            </div>
          </FadeContent>

          {/* Pancakes Card */}
          <FadeContent blur={true} blurAmount={10} duration={0.8}>
            <div className="mb-[120px]">
              <VideoCard
                number={videoCards[4].number}
                category={videoCards[4].category}
                title={videoCards[4].title}
                description={videoCards[4].description}
                videoSrc={videoCards[4].videoSrc}
                ctaText={videoCards[4].ctaText}
                color="secondary"
              />
            </div>
          </FadeContent>

          {/* Flowing Menu */}
          <FadeContent blur={true} blurAmount={10} duration={0.8}>
            <div className="mb-20">
              <FlowingMenu items={flowingMenu.items} />
            </div>
          </FadeContent>
        </div>
      </div>
    </>
  );
}
