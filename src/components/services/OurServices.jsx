import airport from "@/assets/images/services/airport.jpg";
import mining from "@/assets/images/services/mining-prof.jpg";
import financial from "@/assets/images/services/financial-services.jpg";
import sms from "@/assets/images/services/sms.jpg";
import wealthcreation from "@/assets/images/services/wealthcreation.jpg";
import fifo from "@/assets/images/services/fifo.jpg";

import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const services = [{
    title: "AIRLINE CREW & STAFF",
    dscrpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: airport,
    url: "/airpline-crew"
}, {
    title: "MINING PROFESSIONAL",
    dscrpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: mining,
    url: "/mining-professionals"
}, {
    title: "FINANCIAL SERVICES",
    dscrpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: financial,
    url: "/financial-services"
}, {
    title: "SELF MANAGED SUPER",
    dscrpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: sms,
    url: "/smsf"
}, {
    title: "WEALTH CREATION",
    dscrpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: wealthcreation,
    url: "/wealth-creation"
}, {
    title: "LET’S BUILD WEALTH",
    dscrpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: fifo,
    url: "/lets-build-wealth"
}]

const OurServices = () => {
    return (
        <div className="brand-bg-secondary">
            <div className="max-w-[90rem] w-full m-auto py-20 
                xl:px-10 
                lg:px-20
                md:px-10
                max-md:px-5">
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col gap-5 text-center">
                        <h4 className="uppercase tracking-[0.3em] text-white">
                          Our Services
                        </h4>
                        <h3 className="text-3xl brand-text-primary">
                            Empowering Professionals With Industry Focused Guidance and Stability
                        </h3>
                    </div>
                    <div className="flex flex-wrap justify-between gap-5 text-white">
                        {services.map((item, index) => (
                            <div key={index} className="h-[450px] rounded-xl shadow-lg flex flex-col gap-4 relative bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border border-t-0 border-white/10  overflow-hidden 
                                lg:w-[32%] lg:rounded-t-3xl 
                                md:w-[47%] md:rounded-t-2xl
                                max-md:w-full max-md:rounded-lg">
                              <div className="relative w-full h-[250px] overflow-hidden">
                                <Image
                                  src={item.img}
                                  alt={item.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>              
                              <div className="px-5 flex flex-col gap-3">
                                  <h3 className="font-semibold text-lg">
                                    {item.title}
                                  </h3>               

                                  <p className="text-sm ">
                                    {item.dscrpt}
                                  </p>    
                              </div>

                              <Link href={item.url} className="px-5 flex items-center gap-3 absolute bottom-5 left-0 cursor-pointer">
                                  <p>Read More</p>
                                  <FaArrowRightLong />
                              </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices;