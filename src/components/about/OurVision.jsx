import { FaArrowRightLong } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import aboutP from "@/assets/images/about/aboutP.png";
import Image from "next/image";
import bg1 from "@/assets/images/bg-01-white.png";
import bg2 from "@/assets/images/bg-04-white.png";
import { FillBtnLink } from "../ui/Button";

const OurVision = () => {
    return (
        <div className="py-32 relative px-10 brand-bg-secondary">
            <Image src={bg1} className="absolute right-0 top-[35%]
                xl:block
                lg:hidden"/>
            <Image src={bg2} className="absolute left-0 bottom-0
                xl:block
                lg:hidden"/>
            <div className="max-w-[90rem] w-full m-auto">
                <div className="flex items-center gap-10 justify-between">
                    <div className="w-[48%] flex flex-col gap-8 items-start">
                        <div className="flex flex-col gap-1">
                            <h4 className="uppercase tracking-[0.3em] text-white">
                              Our Vision
                            </h4>
                            <h3 className="text-3xl brand-text-primary">
                                Driving and Growth & Excellence
                            </h3>
                        </div>
                        <p className="text-white opacity-90">Crew Capital was founded to ensure that high-quality education, career pathways, and professional services are accessible to everyone. We are committed to opening doors, elevating careers, and helping individuals and businesses reach their full potential.</p>

                        <div className="flex items-center gap-5 text-white text-lg">
                            <div className="flex items-center gap-3">
                                <FaArrowRightLong className="brand-text-primary"/>
                                <p>List your own property</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaArrowRightLong className="brand-text-primary"/>
                                <p>Friendly host & Fast support</p>
                            </div>
                        </div>

                        <FillBtnLink href={"/contact-us"}>
                            Contact Us
                        </FillBtnLink>
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