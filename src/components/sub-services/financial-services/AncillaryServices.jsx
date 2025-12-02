import bg1 from "@/assets/images/bg-01-white.png";
import bg2 from "@/assets/images/bg-04-white.png";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const ancillaryData = [
    {
        title: "Legal Services",
        benefits: [
            "Property law advice",
            "Contract review and drafting",
            "Dispute resolution and mediation",
            "Commercial leasing agreements",
            "Wills and estate planning",
        ]
    },
    {
        title: "Accounting Services",
        benefits: [
            "Book keeping and financial reporting",
            "Payroll services",
            "Bas and GTS compliance",
            "Financial statement preparation",
            "Audit and assurance services",
        ]
    },
];

const AncillaryServices = () => {
    return (
        <div className="relative">
            <Image src={bg1} className="absolute left-5 top-0" />
            <div className="max-w-7xl m-auto py-12">
                <div className="flex flex-col gap-5">
                    <p className="text-center brand-text-orange text-xl ">Ancillary Services</p>
                    <h1 className="font-semibold text-white text-4xl text-center mb-14 leading-tight">
                        Supporting Your <span className="text-green-300">Business</span> and <span className="text-green-300">Financial Goals</span>
                    </h1>
                </div>

                <div className="flex flex-wrap gap-5 justify-between">
                    {ancillaryData.map((data, index) => (
                        <div 
                            key={index} 
                            className="w-full sm:w-[49%] p-6 flex flex-col gap-5 bg-gradient-to-br from-gray-900/80 to-gray-900/60 border border-green-300 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <h1 className="text-2xl font-semibold text-green-300">{data.title}</h1>
                            <div className="flex flex-col gap-3 mt-2">
                                {data.benefits.map((bene, i) => (
                                    <div key={i} className="flex gap-3 items-start">
                                        <FaCheck className="mt-1 text-green-400 flex-shrink-0" />
                                        <p className="text-gray-200 leading-relaxed">{bene}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AncillaryServices;
