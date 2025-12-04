import BannerIntro from "@/components/ui/Banner";
import wealthCreation from "@/assets/images/sub-services/wealthcreation/wealthcreation-bg.jpg";
import AboutWealthCreation from "@/components/sub-services/wealth/AboutWealthCreation";

export default function WealthCreation() {
  return (
    <div className={""}>
      <div className="flex flex-col ">
        {/* hero section container */}
        <BannerIntro title={"WEALTH CREATION"} bgImg={wealthCreation}/>
        <div className="flex flex-col lg:gap-10 md:gap-10 max-md:gap-10 max-sm:gap-5">
          <AboutWealthCreation />
        </div>
      </div>
    </div>
  );
}
