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
        <div className="relative brand-bg-secondary">
            <Image src={bg1} className="absolute left-5 top-0
                xl:block
                md:hidden
                max-md:hidden" />
            <div className="m-auto py-12
                max-w-[90rem] 
                xl:px-10
                lg:px-20
                md:px-10
                max-md:px-5">
                <div className="flex flex-col gap-1 text-center mb-10">
                  <h4 className="uppercase tracking-[0.3em] text-white">
                    Ancillary Services
                  </h4>
                  <h3 className="brand-text-primary
                    md:text-3xl 
                    max-md:text-2xl">
                    Supporting Your Business and Financial Goals
                  </h3>
                </div>

                <div className="flex flex-wrap gap-5 justify-between">
                    {ancillaryData.map((data, index) => (
                        <div 
                            key={index} 
                            className="w-full p-6 flex flex-col gap-5 border border-[#D6E100] rounded-md shadow-lg hover:shadow-2xl transition-all duration-300
                                md:w-[48%]
                                max-md:w-full"
                        >
                            <h1 className="text-2xl font-semibold brand-text-primary">{data.title}</h1>
                            <div className="flex flex-col gap-3 mt-2">
                                {data.benefits.map((bene, i) => (
                                    <div key={i} className="flex gap-3 items-start">
                                        <FaCheck className="mt-1 brand-text-primary flex-shrink-0" />
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
