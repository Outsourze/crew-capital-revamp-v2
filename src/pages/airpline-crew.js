import AboutAirline from "@/components/sub-services/airlinecrew/AboutAirline";
import BannerIntro from "@/components/ui/Banner";
import airline from "@/assets/images/sub-services/airline/airline-bg.jpg";
import BenefitsAirline from "@/components/sub-services/airlinecrew/BenefitsAirline";

export default function Airline() {
  
  return (
    <div className={""}>
      <div className="flex flex-col ">
        {/* hero section container */}
        <BannerIntro title={"AIRLINE CREW & STAFF"} bgImg={airline}/>
        <div className="flex flex-col lg:gap-10 md:gap-10 max-md:gap-10 max-sm:gap-5">
          <AboutAirline />
          <BenefitsAirline />
        </div>
      </div>
    </div>
  );
}
