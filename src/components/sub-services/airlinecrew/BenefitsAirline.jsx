
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import avitation from "@/assets/images/sub-services/airline/airline-avigation.jpg";

const whyUsData = [
  {
    title: "Financial Freedom",
    img: <FaCheck className="w-8 h-8 text-green-300" />,
    dscrpt: "Financial freedom to fly or work part time while earning six figures and tax relief"
  },
  {
    title: "Quality Time",
    img: <FaCheck className="w-8 h-8 text-green-300" />,
    dscrpt: "Spend quality time with your family and friends"
  },
  {
    title: "Pursue Your Passion",
    img: <FaCheck className="w-8 h-8 text-green-300 " />,
    dscrpt: "Finally pursue that passion project you've always dreamed of?"
  }
];


const BenefitsAirline = () => {
    return (
        <div className="brand-bg-secondary">
            <div className="max-w-7xl m-auto flex flex-col gap-12 py-20 px-10">
                <div className="w-full flex justify-between items-center">
                    <div className="w-[45%] rounded-2xl overflow-hidden">
                        <Image src={avitation} alt="office girl"/>
                    </div>
                    <div className="w-[45%] flex flex-col gap-7 items-start">
                        <div className="flex flex-col gap-3">
                            {whyUsData.map((i, index) => (
                                <div key={index} className="flex flex-col gap-3 p-5 rounded-xl bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border border-white/10">
                                    {i.img}
                                    <h3 className="text-xl font-semibold text-green-300">{i.title}</h3>
                                    <p className="text-white">{i.dscrpt}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenefitsAirline;