import airport from "@/assets/images/services/airport.jpg";
import mining from "@/assets/images/services/mining-prof.jpg";
import financial from "@/assets/images/services/financial-services.jpg";
import sms from "@/assets/images/services/sms.jpg";
import wealthcreation from "@/assets/images/services/wealthcreation.jpg";
import fifo from "@/assets/images/services/fifo.jpg";

import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const services = [{
    title: "AIRLINE CREW & STAFF",
    dscrpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: airport
}, {
    title: "MINING PROFESSIONAL",
    dscrpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: mining
}, {
    title: "FINANCIAL SERVICES",
    dscrpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: financial
}, {
    title: "SELF MANAGED SUPER",
    dscrpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: sms
}, {
    title: "WEALTH CREATION",
    dscrpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: wealthcreation
}, {
    title: "LET’S BUILD WEALTH",
    dscrpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: fifo
}]

const OurServices = () => {
    return (
        <div className="max-w-7xl w-full m-auto py-20">
            <div>
                <div className="flex flex-col justify-center gap-2 items-center">
                  <p className="text-center brand-text-orange text-xl">Our Services</p>
                  <h1 className="font-semibold text-4xl text-center mb-14 leading-tight w-[70%] text-white">
                    Empowering Professionals With Industry Focused Guidance and Stability
                  </h1>
                </div>
                <div className="flex flex-wrap justify-between gap-5">
                    {services.map((item, index) => (
                        <div key={index} className="w-[32%] h-[450px] rounded-xl rounded-t-3xl bg-white shadow-lg flex flex-col gap-4 relative">
                          <div className="relative w-full h-[250px] rounded-t-xl overflow-hidden">
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

                              <p className="text-sm text-gray-600">
                                {item.dscrpt}
                              </p>    
                          </div>

                          <div className="px-5 flex items-center gap-3 absolute bottom-5 left-0 brand-text-orange cursor-pointer">
                              <p>Read More</p>
                              <FaArrowRightLong />
                          </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurServices;