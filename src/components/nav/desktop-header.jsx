import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaRegMap } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";

const DesktopHeader = () => {
  return (
    <div className="bg-white">
        <div className="flex items-center justify-between gap-9 relative max-w-7xl m-auto">
          <div className="flex items-center gap-10 p-4">
            <div className="flex items-center gap-2">
                <MdOutlineMail size={18} className="brand-text-blue"/>
                <p className="text-sm ">info@crewcapital.com.au</p>
            </div>
            <div className="flex items-center gap-2">
                <IoCall size={15} className="brand-text-blue"/>
                <p className="text-sm ">Call Us: +1300 008 566</p>
            </div>
            <div className="flex items-center gap-2">
                <FaRegMap size={16} className="brand-text-blue"/>
                <p className="text-sm ">203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
          </div>
          <div className="flex gap-3 items-center text-white cursor-pointer brand-bg-blue p-4">
            <FaPaperPlane />
            <p>Get In Touch</p>
          </div>
        </div>
    </div>
  );
};

export default DesktopHeader;
