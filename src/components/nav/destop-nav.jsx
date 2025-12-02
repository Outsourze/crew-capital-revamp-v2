import Link from "next/link";
import { useState } from "react";
import { IoCall } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const DesktopNav = () => {
  


  return (
    <div className="flex items-center gap-40 relative ">
      <div className="flex items-center gap-9 relative text-white">
        <Link

          className=""
          href="/"
        >
          Home
        </Link>
        <Link

          className=""
          href="/about"
        >
          About
        </Link>

        <Link

          className="flex items-center"
          href="/services"
        >
          Services
          <RiArrowDropDownLine size={32}/>
        </Link> 
        <Link

          className=""
          href="/events/webinars"
        >
          Events/webinars
        </Link>
      </div>
      <Link href={"/contact-us"} className="border border-green-300 rounded-full px-6 py-2 flex items-center gap-2 text-green-300">
        <IoCall />Contact Us
      </Link>
    </div>
  );
};

export default DesktopNav;
