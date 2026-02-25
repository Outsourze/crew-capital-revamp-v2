import BannerIntro from "@/components/ui/Banner";
import smsf from "@/assets/images/sub-services/smsf/self-manage-super-bg.jpg";
import AboutSmsf from "@/components/sub-services/smsf/AboutSmsf";

export default function SMSF() {
  return (
    <div className={""}>
      <div className="flex flex-col ">
        {/* hero section container */}
        <BannerIntro title={"SELF MANAGED SUPER"} bgImg={smsf}/>
        <div className="flex flex-col lg:gap-10 md:gap-10 max-md:gap-10 max-sm:gap-5">
          <AboutSmsf />
        </div>
      </div>
    </div>
  );
}
