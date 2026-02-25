import BannerIntro from "@/components/ui/Banner";
import letsBuildWealth from "@/assets/images/sub-services/letsbuildwealth/letsbuildwealth-bg.jpg";
import AboutLetsBuildWealth from "@/components/sub-services/lets-build-wealth/AboutLetsBuildWealth";
import WealthChecklist from "@/components/sub-services/lets-build-wealth/WealthChecklist";
import WhatClientSay from "@/components/sub-services/lets-build-wealth/WhatClientSay";

export default function LetsBuildWealth() {
  return (
    <div className={""}>
      <div className="flex flex-col ">
        {/* hero section container */}
        <BannerIntro title={"LET'S BUILD WEALTH"} bgImg={letsBuildWealth}/>

        <div className="flex flex-col lg:gap-10 md:gap-10 max-md:gap-10 max-sm:gap-5">
          <AboutLetsBuildWealth />
          <WealthChecklist />
          <WhatClientSay />
        </div>
      </div>
    </div>
  );
}
