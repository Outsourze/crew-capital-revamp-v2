import Link from "next/link";
import { useState } from "react";
import { SlMenu } from "react-icons/sl";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleOpen = () => {
        setIsNavOpen((prev) => !prev);
    }

    return (
        <div className="px-20 py-10 justify-between flex items-start absolute z-10 w-full">
            <div className="text-white">
                <h1>ICON</h1>
                <p className="capitalize">THE PREMIUM INDUSTRY SOLUTION</p>
            </div>
            <div className="relative">
                <div 
                    onClick={handleOpen}
                    className="brand-bg-primary px-4 py-2 rounded-sm cursor-pointer" >
                    <SlMenu size={24} className=""/>
                </div>
                {isNavOpen && (
                    <div className="absolute -bottom-60 right-0 w-[300px] flex flex-col items-end gap-3 text-[#c9f0d5]">
                        <Link className="text-lg" href={"/"}>Home</Link>
                        <Link className="text-lg" href={"/about"}>About</Link>
                        <Link className="text-lg" href={"/services"}>Services</Link>
                        <Link className="text-lg" href={"/event"}>Event/Webinars</Link>
                        <Link className="text-lg" href={"/contact-us"}>Contact Us</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header;