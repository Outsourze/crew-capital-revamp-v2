import Link from "next/link";
import { useState } from "react";
import { SlMenu } from "react-icons/sl";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleOpen = () => {
        setIsNavOpen((prev) => !prev);
    }

    return (
        <div className="px-20 py-10 justify-between flex items-start">
            <div className="text-white">
                <h1>ICON</h1>
                <p className="capitalize">THE PREMIUM INDUSTRY SOLUTION</p>
            </div>
            <div className="relative">
                <div 
                    onClick={handleOpen}
                    className="brand-bg-primary px-4 py-2 rounded-sm" >
                    <SlMenu size={24}/>
                </div>
                {isNavOpen && (
                    <div className="absolute -bottom-52 right-0 w-[300px] flex flex-col items-end gap-3">
                        <Link className="text-lg" href={"/"}>Features</Link>
                        <Link className="text-lg" href={"/"}>Integration</Link>
                        <Link className="text-lg" href={"/"}>Testimonials</Link>
                        <Link className="text-lg" href={"/"}>Faqs</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header;