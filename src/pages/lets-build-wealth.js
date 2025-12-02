import BannerIntro from "@/components/ui/Banner";
import letsBuildWealth from "@/assets/images/sub-services/letsbuildwealth/letsbuildwealth-bg.jpg";

export default function LetsBuildWealth() {
  return (
    <div className={""}>
      <div className="flex flex-col ">
        {/* hero section container */}
        <BannerIntro title={"LET'S BUILD WEALTH"} bgImg={letsBuildWealth}/>

        <div className="flex flex-col lg:gap-10 md:gap-10 max-md:gap-10 max-sm:gap-5">
          
        </div>
      </div>
    </div>
  );
}
