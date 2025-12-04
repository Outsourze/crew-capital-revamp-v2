import Link from "next/link";
import { useState } from "react";
import { IoCall } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { DarkBtnLink } from "../ui/Button";

const ServiceDropDown = () => {
  const services = [{
    title: "Airline Crew & Staff",
    url: "/airpline-crew",
  }, {
    title: "Mining Professional",
    url: "/mining-professionals",
  }, {
    title: "Financial Services",
    url: "/financial-services",
  }, {
    title: "Self Managed Super",
    url: "/smsf",
  }, {
    title: "Wealth Creation",
    url: "/wealth-creation",
  }, {
    title: "Let's Build Wealth",
    url: "/lets-build-wealth",
  }]

  return (
    <div className="
      absolute 
      top-full 
      -left-5
      bg-white 
      px-5 
      py-0 
      rounded-lg 
      w-[350px] 
      border 
      border-gray-300 
      shadow-md">
      {services.map((s, index) => (
        <div
          key={index}
          className="border-b border-gray-300 w-full py-3 last:border-b-0"
        >
          <Link
            href={s.url}
            className="text-gray-600 hover:text-[#E3572B] transition"
          >
            {s.title}
          </Link>
        </div>
      ))}
    </div>
  )
}

const DesktopNav = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="flex items-center gap-40 relative">
      <div className="flex items-center gap-9 relative text-white">
        <Link

          className=" hover:text-[#E3572B] py-10"
          href="/"
        >
          Home
        </Link>
        <Link

          className=" hover:text-[#E3572B] py-10"
          href="/about"
        >
          About
        </Link>

        <div 
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)} className="relative py-10">
          <Link
            className="flex items-center hover:text-[#E3572B]"
            href="/services"
          >
            Services
            <RiArrowDropDownLine size={32}/>
          </Link> 

          {isHover && (
            <ServiceDropDown />
          )}
        </div>
        
        <Link

          className=" hover:text-[#E3572B] py-10"
          href="/"
        >
          Events/webinars
        </Link>
      </div>
      <DarkBtnLink url={"/contact-us"}>
        <IoCall />Contact Us
      </DarkBtnLink>
    </div>
  );
};

export default DesktopNav;
