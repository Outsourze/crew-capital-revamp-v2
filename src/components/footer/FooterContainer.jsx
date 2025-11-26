import CopyRight from "./Copyright";
import bgFooter from "@/assets/images/footer-bg.webp";
import Link from "next/link";
import crewCapitalLogo from "@/assets/logo/crew-capital-logo.png";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaViber } from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";

const FooterContainer = () => {
    const socialMed = [{
        icon: <FaFacebookF size={18}/>,
        url: "/"

    }, {
        icon: <FaTwitter size={18}/>,
        url: "/"

    }, {
        icon: <FaViber size={18}/>,
        url: "/"
    }]

    const quickLink = [{
        url: "/",
        text: "Contact Us"
    }, {
        url: "/",
        text: "About Us"
    }, {
        url: "/",
        text: "Wealth Creation"
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
        url: "/",
        text: "Airline crew & staff"
    }, {
        url: "/",
        text: "mining professionals"
    }, {
        url: "/",
        text: "let's build wealth"
    }, {
        url: "/",
        text: "financial services"
    }, {
        url: "/",
        text: "self managed super funds"
    }, {
        url: "/",
        text: "legal advice & property conveyancing"
    }]


    return (
        <div className="flex flex-col">
            <div
                style={{ backgroundImage: `url(${bgFooter.src})` }}
                className="h-[450px] bg-cover bg-no-repeat bg-[center_30%] relative"
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/80 z-0"></div>

                {/* Content ABOVE overlay */}
                <div className="relative z-10 flex items-start justify-between px-10 pt-16">
                    <div className="flex flex-col gap-5 w-[24%]">
                        <Link href="/" aria-label="Crew Capital Home">
                            <Image
                                src={crewCapitalLogo}
                                alt="Crew Capital Logo"
                                className="w-40 h-auto"
                            />
                        </Link>

                        <p className="text-white text-sm max-w-xs leading-relaxed">
                            118 Cahors Rd, Padstow NSW 2211 Australia
                        </p>

                        <div className="flex items-center gap-1">
                            {socialMed.map((data, index) => (
                                <Link href={data.url} className="brand-bg-blue text-white p-2 rounded-md">
                                    {data.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="text-white flex flex-col gap-10 w-[24%]">
                        <h3 className="text-white font-semibold text-xl">Quick Links</h3>
                        <div className="flex flex-col gap-4">
                            {quickLink.map((data, index) => (
                                <Link href={data.url} className="flex items-center gap-3 text-gray-300">
                                    <MdArrowRightAlt />
                                    {data.text}
                                </Link>
                            ))}
                        </div>
                        
                    </div>
                    <div className="text-white flex flex-col gap-10 w-[24%]">
                        <h3 className="text-gray-300 font-semibold text-xl">Policies</h3>
                        <div className="flex flex-col gap-4">
                            {policies.map((data, index) => (
                                <Link href={data.url}>
                                    {data.text}
                                </Link>
                            ))}
                        </div>
                        
                    </div>
                    <div className="text-white flex flex-col gap-10 w-[24%]">
                        <h3 className="text-gray-300 font-semibold text-xl">Services</h3>
                        <div className="flex flex-col gap-4">
                            {services.map((data, index) => (
                                <Link href={data.url}>
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
