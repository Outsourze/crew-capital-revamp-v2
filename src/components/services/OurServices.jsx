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
        <div className="max-w-7xl w-full m-auto py-20 px-10">
            <div>
                <div className="flex flex-col justify-center gap-2 items-center">
                  <p className="text-center brand-text-primary text-xl">Our Services</p>
                  <h1 className="font-semibold text-4xl text-center mb-14 leading-tight w-[70%] text-white">
                    Empowering Professionals With Industry Focused Guidance and Stability
                  </h1>
                </div>
                <div className="flex flex-wrap justify-between gap-5">
                    {services.map((item, index) => (
                        <div key={index} className="w-[32%] h-[450px] rounded-xl rounded-t-3xl shadow-lg flex flex-col gap-4 relative bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border border-t-0 border-white/10  overflow-hidden ">
                          <div className="relative w-full h-[250px] rounded-t-xl overflow-hidden">
                            <Image
                              src={item.img}
                              alt={item.title}
                              fill
                              className="object-cover"
                            />
                          </div>              
                          <div className="px-5 flex flex-col gap-3">
                              <h3 className="font-semibold text-lg text-white">
                                {item.title}
                              </h3>               

                              <p className="text-sm text-white">
                                {item.dscrpt}
                              </p>    
                          </div>

                          <Link href={item.url} className="px-5 flex items-center gap-3 absolute bottom-5 left-0 brand-text-primary cursor-pointer">
                              <p>Read More</p>
                              <FaArrowRightLong />
                          </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurServices;