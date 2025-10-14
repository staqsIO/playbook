import { IntroVideo, TextBanner, Brands, VideoCard } from "@/components/home";
import { homePageConfig } from "../../config/home-config";

export const dynamic = "force-dynamic";

export default function Home() {
  const { introVideo, brands, banners, videoCards } = homePageConfig;

  return (
    <>
      <IntroVideo videoSrc={introVideo.videoSrc} text={introVideo.text} />

      <div className="mt-10">
        <TextBanner title={banners[0].title} subtitle={banners[0].subtitle} />
      </div>
      <Brands brands={brands.items} />

      <div className="mt-20">
        <TextBanner title={banners[1].title} subtitle={banners[1].subtitle} />
      </div>

      {/* Xbox Card */}
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

      {/* Electrolit Card */}
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

      {/* LOVB Card */}
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

      {/* Whistle Card */}
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
    </>
  );
}
