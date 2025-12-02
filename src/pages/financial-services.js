import BannerIntro from "@/components/ui/Banner";
import finiancialService from "@/assets/images/sub-services/financialservices/financial-services-bg.jpg";
import AboutFinancialService from "@/components/sub-services/financial-services/AboutFinancial";
import PropertyServices from "@/components/sub-services/financial-services/PropertyServices";

export default function FinancialService() {
  return (
    <div className={""}>
      <div className="flex flex-col ">
        {/* hero section container */}
        <BannerIntro title={"FINANCIAL SERVICES"} bgImg={finiancialService}/>
        <div className="flex flex-col lg:gap-10 md:gap-10 max-md:gap-10 max-sm:gap-5">
          <AboutFinancialService />
          <PropertyServices />
        </div>
      </div>
    </div>
  );
}
