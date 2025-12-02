import CopyRight from "./Copyright";
import Link from "next/link";
import crewCapitalLogo from "@/assets/logo/Crew-Capital-Management_cap-logo-white-1.png";
import bg1 from "@/assets/images/bg-01-white.png";
import bg2 from "@/assets/images/bg-04-white.png";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaViber } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import FooterBanner from "./FooterBanner";

const FooterContainer = () => {
    const socialMed = [{
        icon: <FaFacebookF size={20}/>,
        url: "/"
    }, {
        icon: <FaTwitter size={20}/>,
        url: "/"
    }, {
        icon: <FaXTwitter size={20} className="brand-text-orange"/>,
        url: "/"
    }, {
        icon: <FaViber size={20}/>,
        url: "/"
    }]

    const quickLink = [{
        url: "/contact-us",
        text: "Contact Us"
    }, {
        url: "/about",
        text: "About Us"
    }, {
        url: "/services",
        text: "Services"
    }]

    const policies = [{
        url: "/",
        text: "Term of Use"
    }, {
        url: "/",
        text: "Privacy policy"
    }, {
        url: "/",
        text: "Media Consent & Releases"
    }]

    const services = [{
        url: "/airpline-crew",
        text: "Airline crew & staff"
    }, {
        url: "/mining-professionals",
        text: "Mining professionals"
    }, {
        url: "/lets-build-wealth",
        text: "Let's build wealth"
    }, {
        url: "/financial-services",
        text: "Financial services"
    }, {
        url: "/smsf",
        text: "Self managed super funds"
    }, {
        url: "/wealth-creation",
        text: "Welath creation"
    }]


    return (
        <div className="flex flex-col relative">
            <Image src={bg1} className="absolute left-0 top-[35%]"/>
            <Image src={bg2} className="absolute right-0 top-[35%]"/>
            <FooterBanner />
            <div className="h-[450px] relative max-w-7xl m-auto w-full">
                {/* Content ABOVE overlay */}
                <div className="relative z-10 flex items-start justify-between pt-16">
                    <div className="flex flex-col gap-8 w-[30%]">
                        <Link href="/" aria-label="Crew Capital Home">
                            <Image
                                src={crewCapitalLogo}
                                alt="Crew Capital Logo"
                                className="w-40 h-auto"
                            />
                        </Link>

                        <p className="text-white">Helping you find your dream home with ease. Trusted, reliable, and local real estate experts.</p>

                        <p className="text-gray-300 text-sm max-w-xs leading-relaxed">
                            118 Cahors Rd, <br/> Padstow NSW 2211<br/> Australia
                        </p>

                        <div className="flex items-center gap-2">
                            <p className="text-gray-300">Follow on</p>
                            {socialMed.map((data, index) => (
                                <Link key={index} href={data.url} className="brand-bg-blue text-white p-2 rounded-md">
                                    {data.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="text-white flex flex-col gap-10 w-[20%]">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
                            <div className="flex gap-1 w-[40%]">
                                <div className="w-[30%] h-[2px] brand-bg-orange"></div>
                                <div className="w-[70%] h-[2px] bg-white"></div>
                            </div>
                            
                        </div>
                        
                        <div className="flex flex-col gap-4">
                            {quickLink.map((data, index) => (
                                <Link key={index} href={data.url} className="flex items-center gap-3 text-gray-300">
                                    <RiArrowRightDoubleLine size={20} className="brand-text-orange"/>
                                    {data.text}
                                </Link>
                            ))}
                        </div>
                        
                    </div>
                    <div className="text-white flex flex-col gap-10 w-[20%]">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-white font-semibold text-lg">Policies</h3>
                            <div className="flex gap-1 w-[40%]">
                                <div className="w-[30%] h-[2px] brand-bg-orange"></div>
                                <div className="w-[70%] h-[2px] bg-white"></div>
                            </div>
                            
                        </div>
                        <div className="flex flex-col gap-4">
                            {policies.map((data, index) => (
                                <Link key={index} href={data.url} className="flex items-center gap-3 text-gray-300">
                                    <RiArrowRightDoubleLine size={20} className="brand-text-orange"/>
                                    {data.text}
                                </Link>
                            ))}
                        </div>
                        
                    </div>
                    <div className="text-white flex flex-col gap-10 w-[20%]">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-white font-semibold text-lg">Services</h3>
                            <div className="flex gap-1 w-[40%]">
                                <div className="w-[30%] h-[2px] brand-bg-orange"></div>
                                <div className="w-[70%] h-[2px] bg-white"></div>
                            </div>
                            
                        </div>
                        <div className="flex flex-col gap-4">
                            {services.map((data, index) => (
                                <Link key={index} href={data.url} className="flex items-center gap-3 text-gray-300">
                                    <RiArrowRightDoubleLine size={20} className="brand-text-orange"/>
                                    {data.text}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <CopyRight />
        </div>
    );
};

export default FooterContainer;
