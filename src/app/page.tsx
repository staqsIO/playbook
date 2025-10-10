import { IntroVideo, TextBanner } from "@/components/home";
import { homePageConfig } from "@/config/home-config";

export default function Home() {
  const { introVideo, banners } = homePageConfig;

  return (
    <>
      <IntroVideo
        videoSrc={introVideo.videoSrc}
        text={introVideo.text}
      />
      {banners.map((banner) => (
        <TextBanner
          key={banner.id}
          title={banner.title}
          subtitle={banner.subtitle}
        />
      ))}
    </>
  );
}
