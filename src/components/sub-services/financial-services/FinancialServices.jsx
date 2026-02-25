import bg1 from "@/assets/images/bg-01.png";
import bg2 from "@/assets/images/bg-04.png";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const financialData = [
    {
        title: "Mortgage and Loan Advisory",
        benefits: [
            "Home loan pre-approval",
            "Refinancing options",
            "Investment property loans",
            "Commercial property finance",
            "Loan structuring and optimization",
        ]
    },
    {
        title: "Financial Planning",
        benefits: [
            "Retirement planning",
            "Superannuation advice",
            "Estate planning",
            "Taxation advice and planning",
            "Wealth creation strategies",
        ]
    },
    {
        title: "Investment Advisory",
        benefits: [
            "Property investment strategies",
            "Stock market investments",
            "Managed funds",
            "Diversification planning",
            "Risk assessment and management"
        ]
    },
    {
        title: "Insurance Services",
        benefits: [
            "Home and contents insurance",
            "Landlord insurance",
            "Life and income protection insurance",
            "Business insurance",
            "Risk management solutions",
        ]
    },
    {
        title: "Taxation Services",
        benefits: [
            "Tax return preparation and filing",
            "Capital gains tax planning",
            "Negative gearing advice",
            "Depreciation schedules",
            "Tax effective investment strategies",
        ]
    },
    {
        title: "Business Advisory",
        benefits: [
            "Business planning and advisory",
            "Financial forecasting and budgeting",
            "Cash flow management",
            "Business structuring",
            "Succession planning",
        ]
    },
    {
        title: "Debt Management",
        benefits: [
            "Debt consolidation",
            "Credit repair services",
            "Personal and business debt advisory",
            "Bankruptcy and insolvency advice",
        ]
    },
    {
        title: "Superannuation and Retirement Planning",
        benefits: [
            "Self-Managed Super Funds (SMSF) setup and management",
            "Retirement income planning",
            "Pension and annuity advice",
            "Government benefits advice",
        ]
    }, 
];

const FinancialServices = () => {
    return (
        <div className="relative ">
            <Image src={bg1} className="absolute left-5 top-5
                xl:block
                md:hidden
                max-md:hidden" />
            <Image src={bg2} className="absolute right-5 bottom-5
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
                  <h4 className="uppercase tracking-[0.3em]">
                      Financial Services
                  </h4>
                  <h3 className="brand-text-primary
                     md:text-3xl 
                    max-md:text-2xl">
                    Comprehensive Financial Solutions to Maximise Your Wealth and Opportunities
                  </h3>
                </div>

                <div className="flex flex-wrap gap-5 justify-between">
                    {financialData.map((data, index) => (
                        <div 
                            key={index} 
                            className={`w-full p-6 flex flex-col gap-5 rounded-md shadow-md hover:shadow-lg transition-transform duration-300
                                md:w-[48%]
                                max-md:w-full
                                ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border `}
                        >
                            <h1 className="text-2xl ">{data.title}</h1>
                            <div className="flex flex-col gap-3 mt-2">
                                {data.benefits.map((bene, i) => (
                                    <div key={i} className="flex gap-3 items-start">
                                        <FaCheck className="mt-1 flex-shrink-0" />
                                        <p className="leading-relaxed">{bene}</p>
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

export default FinancialServices;
