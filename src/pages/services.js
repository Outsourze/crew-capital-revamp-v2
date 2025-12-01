import Introduction from "@/components/services/Introduction";
import OurServices from "@/components/services/OurServices";
import WhatWeDo from "@/components/services/WhatWeDo";

export default function Services() {
  return (
    <div className={""}>
      <div className="flex flex-col ">
        {/* hero section container */}
        <Introduction />
        <div className="flex flex-col lg:gap-10 md:gap-10 max-md:gap-10 max-sm:gap-5">
            <WhatWeDo />
            <OurServices />
        </div>
      </div>
    </div>
  );
}
