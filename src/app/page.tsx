import { IntroVideo, TextBanner, Brands } from "@/components/home";
import { homePageConfig } from "../../config/home-config";

export const dynamic = 'force-dynamic';

export default function Home() {
  const { introVideo, brands, banners } = homePageConfig;

  return (
    <>
      <IntroVideo
        videoSrc={introVideo.videoSrc}
        text={introVideo.text}
      />
      
      <div className="mt-20">
      <TextBanner
        title={banners[0].title}
        subtitle={banners[0].subtitle}
      />
      </div>
      <Brands brands={brands.items} />
      
      <TextBanner
        title={banners[1].title}
        subtitle={banners[1].subtitle}
      />
    </>
  );
}
