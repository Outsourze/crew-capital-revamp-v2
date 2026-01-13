import business from "@/assets/images/services/business.jpg";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { FillBtnLink } from "../ui/Button";

const WhatWeDo = () => {
    return (
        <div className="relative">
            <div className="max-w-[90rem] m-auto w-full py-20 flex justify-between items-center px-10">
                <div className="w-1/2 rounded-2xl overflow-hidden">
                    <Image src={business} alt="two business man"/>
                </div>
                <div className="w-[45%] flex flex-col gap-7 items-start">
                    <div className="flex flex-col">
                        <h4 className="uppercase tracking-[0.3em]">
                            Why Choose ?
                        </h4>
                        <h3 className="text-3xl brand-text-primary">
                             Crew Capital
                        </h3>
                    </div>
                    <p className="text-gray-500 ">Crew Capital provides industry-focused support for aviation crew, mining professionals, and individuals seeking financial, legal, and wealth-building services tailored to create long-term stability and growth.</p>
                    <FillBtnLink href={"/"}>
                        Get Started 
                    </FillBtnLink>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo;