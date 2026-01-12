import business from "@/assets/images/services/business.jpg";
import Image from "next/image";

const WhatWeDo = () => {
    return (
        <div className="relative brand-bg-secondary">
            <div className="max-w-[90rem] m-auto w-full py-20 flex justify-center items-center px-10 text-center">
                <div className="w-[60%] flex flex-col gap-7 items-center">
                    <div className="flex flex-col gap-1">
                      <h4 className="uppercase tracking-[0.3em] text-white">
                        What We Do
                      </h4>
                      <h3 className="text-3xl brand-text-primary">
                        Building Futures Through Expertise
                      </h3>
                    </div>
                    <p className="brand-text-primary text-3xl">Crew Capital provides industry-focused support for aviation crew, mining professionals, and individuals seeking financial, legal, and wealth-building services tailored to create long-term stability and growth.</p>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo;