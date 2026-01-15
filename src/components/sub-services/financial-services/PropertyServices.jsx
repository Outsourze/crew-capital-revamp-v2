import bg1 from "@/assets/images/bg-01-white.png";
import bg2 from "@/assets/images/bg-04-white.png";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const propertyData = [
    {
        title: "Conveyancing Services",
        benefits: [
            "Property sales and purchases",
            "Transfer of ownership",
            "Title searches and registration",
            "Preparation of legal documents",
            "Liaison with mortgage lenders and other parties",
            "Settlement services"
        ]
    },
    {
        title: "Property Valuation",
        benefits: [
            "Residential property valuation",
            "Commercial property valuation",
            "Investment property assessment",
            "Market appraisal",
        ]
    },
    {
        title: "Property Management",
        benefits: [
            "Tenant selection and screening",
            "Rent collection and management",
            "Maintenance and repairs coordination",
            "Property inspections",
            "Lease agreement management"
        ]
    },
    {
        title: "Real Estate Advisory",
        benefits: [
            "Market research and analysis",
            "Investment property advice",
            "Portfolio management",
            "Property development consultancy",
            "Strategic property planning",
        ]
    },
    {
        title: "Buyer's Agent Services",
        benefits: [
            "Property search and selection",
            "Negotiation on behalf of buyers",
            "Due diligence and inspections",
            "Auction bidding and representation",
        ]
    },
    {
        title: "Seller's Agent Services",
        benefits: [
            "Property marketing and promotion",
            "Open houses and property viewings",
            "Negotiation on behalf of sellers",
            "Auction management",
        ]
    }
];

const PropertyServices = () => {
    return (
        <div className="relative brand-bg-secondary">
            <Image src={bg1} className="absolute left-5 top-0 
             xl:block
             lg:hidden" />
            <Image src={bg2} className="absolute right-5 bottom-0 
             xl:block
             lg:hidden" />
            <div className="max-w-7xl m-auto py-12 px-10">
                <div className="flex flex-col gap-1 text-center mb-10">
                  <h4 className="uppercase tracking-[0.3em] text-white">
                    Property Services
                  </h4>
                  <h3 className="text-3xl brand-text-primary">
                    Property Services Designed to Maximise Your Returns and Opportunities
                  </h3>
                </div>

                <div className="flex flex-wrap gap-5 justify-between">
                    {propertyData.map((data, index) => (
                        <div 
                            key={index} 
                            className="w-full sm:w-[49%] p-6 flex flex-col gap-5 border border-[#D6E100] rounded-md shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <h1 className="text-2xl brand-text-primary">{data.title}</h1>
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

export default PropertyServices;
