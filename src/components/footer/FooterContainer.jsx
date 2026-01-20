import CopyRight from "./Copyright";
import Link from "next/link";
import crewCapitalLogo from "@/assets/logo/Crew-Capital-Management_cap-logo-white-1.png";
import bg1 from "@/assets/images/bg-01-white.png";
import bg2 from "@/assets/images/bg-04-white.png";
import Image from "next/image";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaViber, FaXTwitter } from "react-icons/fa6";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import FooterBanner from "./FooterBanner";

const FooterContainer = () => {
  const socialMed = [
    { icon: <FaFacebookF size={18} />, url: "/" },
    { icon: <FaTwitter size={18} />, url: "/" },
    { icon: <FaXTwitter size={18} className="brand-text-primary" />, url: "/" },
    { icon: <FaViber size={18} />, url: "/" },
  ];

  const quickLink = [
    { url: "/contact-us", text: "Contact Us" },
    { url: "/about", text: "About Us" },
    { url: "/services", text: "Services" },
  ];

  const policies = [
    { url: "/", text: "Term of Use" },
    { url: "/", text: "Privacy policy" },
    { url: "/", text: "Media Consent & Releases" },
  ];

  const services = [
    { url: "/airpline-crew", text: "Airline crew & staff" },
    { url: "/mining-professionals", text: "Mining professionals" },
    { url: "/lets-build-wealth", text: "Let's build wealth" },
    { url: "/financial-services", text: "Financial services" },
    { url: "/smsf", text: "Self managed super funds" },
    { url: "/wealth-creation", text: "Wealth creation" },
  ];

  return (
    <footer className="relative brand-bg-secondary pt-12 pb-6 px-6 md:px-10 lg:px-16 xl:px-24">
      {/* Decorative Background Images */}
      <Image
        src={bg1}
        alt=""
        className="absolute left-0 top-1/3 hidden xl:block"
      />
      <Image
        src={bg2}
        alt=""
        className="absolute right-0 top-1/3 hidden xl:block"
      />

      {/* Footer Banner */}
      <FooterBanner />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto mt-12">
        <div className="grid grid-cols-1 gap-12 max-md:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="flex flex-col gap-6 text-center max-md:text-center md:text-left">
            <Link href="/">
              <Image
                src={crewCapitalLogo}
                alt="Crew Capital Logo"
                className="w-36 max-md:w-32 mx-auto md:mx-0"
              />
            </Link>

            <p className="text-white text-sm max-md:text-xs leading-relaxed max-w-md mx-auto md:mx-0">
              Helping you find your dream home with ease. Trusted, reliable, and local real estate experts.
            </p>

            <p className="text-gray-300 text-sm max-md:text-xs leading-relaxed">
              118 Cahors Rd, <br />
              Padstow NSW 2211 <br />
              Australia
            </p>

            <div className="flex justify-center md:justify-start items-center gap-3">
              <span className="text-gray-300 text-sm max-md:text-xs">Follow</span>
              {socialMed.map((data, index) => (
                <Link
                  key={index}
                  href={data.url}
                  className="brand-bg-blue text-white p-2 rounded-md hover:opacity-80 transition"
                >
                  {data.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links, Policies, Services */}
          {[{ title: "Quick Links", items: quickLink },
            { title: "Policies", items: policies },
            { title: "Services", items: services }].map((section, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <div>
                <h3 className="font-semibold text-lg max-md:text-base text-white">{section.title}</h3>
                <div className="flex gap-1 w-24">
                  <div className="w-1/3 h-[2px] brand-bg-primary"></div>
                  <div className="w-2/3 h-[2px] bg-white"></div>
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:pb-0 md:pb-5 max-md:pb-5">
                {section.items.map((data, index) => (
                  <Link
                    key={index}
                    href={data.url}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition max-md:text-sm"
                  >
                    <RiArrowRightDoubleLine
                      size={18}
                      className="brand-text-primary"
                    />
                    {data.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <CopyRight />
    </footer>
  );
};

export default FooterContainer;
