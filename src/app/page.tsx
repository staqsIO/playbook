import { IntroVideo, TextBanner, Brands, VideoCard } from "@/components/home";
import { homePageConfig } from "../../config/home-config";

export const dynamic = "force-dynamic";

export default function Home() {
  const { introVideo, brands, banners, videoCards } = homePageConfig;

  return (
    <>
      <IntroVideo videoSrc={introVideo.videoSrc} text={introVideo.text} />

      <div className="mt-20">
        <TextBanner title={banners[0].title} subtitle={banners[0].subtitle} />
      </div>
      <Brands brands={brands.items} />

      <TextBanner title={banners[1].title} subtitle={banners[1].subtitle} />

      <div className="container mx-auto mt-20 mb-40">
        <VideoCard
          number={videoCards[0].number}
          category={videoCards[0].category}
          title={videoCards[0].title}
          subtitle={videoCards[0].subtitle}
          description={videoCards[0].description}
          videoSrc={videoCards[0].videoSrc}
          ctaText={videoCards[0].ctaText}
        />
      </div>
    </>
  );
}
