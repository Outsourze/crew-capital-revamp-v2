import Image from "next/image";
import { useState } from "react";
import img1 from "@/assets/images/home/research.png";
import img2 from "@/assets/images/home/education.png";
import img3 from "@/assets/images/home/investment.png";
import img4 from "@/assets/images/home/ongoing-support.png";
import banner from "@/assets/images/home/banner.png";
import IA from "@/assets/icons/Research.svg"
import IB from "@/assets/icons/Education.svg"
import IC from "@/assets/icons/Investment.svg"
import ID from "@/assets/icons/Ongoing-support.svg"

const FoundationData = [{
    title: "Research",
    img: <IA className="brand-text-primary w-16 h-16" />,
    dscrpt: "Whether you're stepping into real estate investment for the first time or a seasoned investor, venturing into this field can yield significant returns. However, it demands meticulous planning and thorough research. Property research stands as a vital pillar for investors, enabling them to make informed decisions, minimize risks, and secure a competitive edge in the market."
}, {
    title: "Education",
    img: <IB className="brand-text-primary w-16 h-16" />,
    dscrpt: "Our educational property events have empowered countless Australians with insights into optimal property investment strategies. These events are complementary and offer a diverse array of topics tailored to your interests."
}, {
    title: "Investment",
    img: <IC className="brand-text-primary w-16 h-16" />,
    dscrpt: "Choosing your investment property To fully understand your individual circumstances and investment goals, we suggest arranging a consultation with one of our seasoned property selection specialists at Crew Capital."
}, {
    title: "Ongoing Support",
    img: <ID className="brand-text-primary w-16 h-16" />,
    dscrpt: "We're dedicated to assisting you at every step of your investment journey. With extensive experience in the property sector, our team is committed to offering personalized guidance throughout the entire investment process. From participating in our informative events to finalizing your property acquisition and beyond, providing tailored advice that matches your specific circumstances and investment aspirations."
}]

const technicalData = [{
    title: "60",
    dscrpt: "Year of Experienced"
}, {
    title: "9,200",
    dscrpt: "Satisfied Customers"
}, {
    title: "5,800",
    dscrpt: "Project Completed"
}, {
    title: "100",
    dscrpt: "Get Awards"
}]

const Foundation = () => {
    const [hoverActive, setHoverActive] = useState(null);

    return (
        <div className="w-full mx-auto brand-bg-secondary">
            <div className="items-center justify-center flex flex-col gap-16 py-20
                lg:px-20 md:px-10 max-md:px-5">
                <div className="flex flex-col gap-5 text-center">
                    <h4 className="uppercase tracking-[0.3em] text-white">
                      Key Foundations
                    </h4>
                    <h3 className="text-3xl brand-text-primary">
                        The 4 foundations of success
                    </h3>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-wrap max-w-7xl gap-5 justify-between">
                        {FoundationData.map((i, index) => (
                            <div key={index} className="text-white p-5 flex flex-col gap-5 border-1 border-[#D6E100] rounded-xl
                                md:w-[48%] max-md:w-full">
                                {i.img}
                                <h1 className="text-2xl font-semibold">{i.title}</h1>
                                <p>{i.dscrpt}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Foundation;
