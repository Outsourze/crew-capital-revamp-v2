import business from "@/assets/images/services/business.jpg";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { FillBtnLink } from "../ui/Button";

const WhatWeDo = () => {
    return (
        <div className="relative">
            <div className="max-w-[90rem] m-auto w-full flex justify-between items-center 
                xl:px-10
                lg:flex-row lg:gap-0 lg:px-20
                md:flex-col md:gap-10 md:px-10 md:py-20 
                max-md:flex-col max-md:gap-10 max-md:px-5 max-md:py-10">
                <div className=" rounded-2xl overflow-hidden
                    lg:w-1/2 
                    md:w-full">
                    <Image src={business} alt="two business man"/>
                </div>
                <div className="flex flex-col gap-7 items-start
                    lg:w-[45%] 
                    md:w-full">
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