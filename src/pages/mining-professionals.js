import BannerIntro from "@/components/ui/Banner";
import mining from "@/assets/images/sub-services/mining/mining-bg.jpg";
import AboutMining from "@/components/sub-services/mining/AboutMining";
import AboutMining2 from "@/components/sub-services/mining/AboutMining2";
import MiningBanner from "@/components/sub-services/mining/Banner";
import AboutMining3 from "@/components/sub-services/mining/AboutMining3";

export default function Mining() {
  return (
    <div className={""}>
      <div className="flex flex-col ">
        {/* hero section container */}
        <BannerIntro title={"MINING PROFESSIONALS"} bgImg={mining}/>
        <div className="flex flex-col lg:gap-10 md:gap-10 max-md:gap-10 max-sm:gap-5">
          <AboutMining />
          <div className="flex flex-col gap-10 relative lg:pb-36 md:pb-0 max-md:pb-0">
            <AboutMining2 />
            <MiningBanner />
          </div>
          <AboutMining3 />
        </div>
      </div>
    </div>
  );
}
