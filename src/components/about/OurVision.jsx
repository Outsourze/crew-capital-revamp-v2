import { FaArrowRightLong } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import aboutP from "@/assets/images/about/aboutP.png";
import Image from "next/image";
import bg1 from "@/assets/images/bg-01-white.png";
import bg2 from "@/assets/images/bg-04-white.png";

const OurVision = () => {
    return (
        <div className="pt-10 pb-36 relative px-10">
            <Image src={bg1} className="absolute right-0 top-[35%]
                xl:block
                lg:hidden"/>
            <Image src={bg2} className="absolute left-0 bottom-0
                xl:block
                lg:hidden"/>
            <div className="max-w-[90rem] w-full m-auto">
                <div className="flex items-center gap-10 justify-between">
                    <div className="w-[48%] flex flex-col gap-8 items-start">
                        <div className="flex flex-col gap-2">
                            <p className="brand-text-orange text-xl">Our Vision</p>
                            <h1 className="text-5xl font-semibold text-white">Driving and <span className="text-green-300">Growth</span> & <span className="text-green-300">Excellence</span>.</h1>
                        </div>
                        <p className="text-white opacity-90">Crew Capital was founded to ensure that high-quality education, career pathways, and professional services are accessible to everyone. We are committed to opening doors, elevating careers, and helping individuals and businesses reach their full potential.</p>

                        <div className="flex items-center gap-5 text-white text-lg">
                            <div className="flex items-center gap-3">
                                <FaArrowRightLong className="brand-text-orange"/>
                                <p>List your own property</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaArrowRightLong className="brand-text-orange"/>
                                <p>Friendly host & Fast support</p>
                            </div>
                        </div>
                        <Link href={"/"} className="border border-green-300 rounded-full py-4 px-10 flex items-center gap-2 text-green-300 font-semibold">
                          <IoCall />Contact Us
                        </Link>
                    </div>
                    <div className="w-[48%] flex flex-col gap-5">
                        <div className="relative rounded-2xl h-[500px] overflow-hidden">
                          <Image
                            src={aboutP}
                            alt="profile"
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurVision;