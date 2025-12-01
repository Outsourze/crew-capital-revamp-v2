import OurVision from "@/components/about/OurVision";
import Introduction from "@/components/about/Introduction";
import OurAchievement from "@/components/about/OurAchievement";
import FinancialHelp from "@/components/about/FinancialHelp";
import Testimonials from "@/components/about/Testimonials";

export default function About() {
  return (
    <div className={""}>
      <div className="flex flex-col ">
        {/* hero section container */}
        <Introduction />
        <div className="flex flex-col lg:gap-10 md:gap-10 max-md:gap-10 max-sm:gap-5">
          <OurAchievement />
          <OurVision />
          <FinancialHelp />
          <Testimonials />
        </div>
      </div>
    </div>
  );
}
