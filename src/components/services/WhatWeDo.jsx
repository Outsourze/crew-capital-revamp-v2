import business from "@/assets/images/services/business.jpg";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import bg1 from "@/assets/images/bg-01.png";
import bg2 from "@/assets/images/bg-04.png";
import { LightBtn } from "../ui/Button";

const WhatWeDo = () => {
    return (
        <div className="bg-[#fff8f2] relative">
            <Image src={bg1} className="absolute left-0 top-5"/>
            <Image src={bg2} className="absolute right-0 bottom-5"/>
            <div className="max-w-[90rem] m-auto w-full py-20 flex justify-between items-center px-10">
                <div className="w-1/2 rounded-2xl overflow-hidden">
                    <Image src={business} alt="two business man"/>
                </div>
                <div className="w-[45%] flex flex-col gap-7 items-start">
                    <div className="flex flex-col gap-4">
                        <p className="brand-text-orange text-xl">What We Do</p>
                        <h1 className="text-5xl font-semibold">Building Futures Through Expertise</h1>
                    </div>
                    <p className="text-gray-500 ">Crew Capital provides industry-focused support for aviation crew, mining professionals, and individuals seeking financial, legal, and wealth-building services tailored to create long-term stability and growth.</p>
                    <LightBtn>
                        Get Started <FaArrowRightLong />
                    </LightBtn>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo;