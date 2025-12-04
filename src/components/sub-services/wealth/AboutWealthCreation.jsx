"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import bgImg from "@/assets/images/sub-services/smsf/smsf.jpg";
import IA from "@/assets/icons/wealth-creation/Research.svg";
import IB from "@/assets/icons/wealth-creation/Outbound Sales.svg";
import IC from "@/assets/icons/wealth-creation/UI_UX Developer.svg";
import ID from "@/assets/icons/wealth-creation/Sales_Business Development.svg";
import IE from "@/assets/icons/wealth-creation/Accounts Payable.svg";
import IF from "@/assets/icons/wealth-creation/Talent Acquisition.svg";
import IG from "@/assets/icons/wealth-creation/benefit-1.svg";
import IH from "@/assets/icons/wealth-creation/benefit-3.svg";
import II from "@/assets/icons/wealth-creation/Success.svg";
import IJ from "@/assets/icons/wealth-creation/Sales & Lead Generation.svg";

const steps = [
  {
    step: <IA className="text-white w-7 h-7"/>,
    title: "Education and Research",
    items: [
      {
        title: "Understand the Market:",
        dscrpt:
          "Study the Australian property market, focusing on trends, cycles, and economic indicators. Resources include books, online courses, seminars, and property investment blogs.",
      },
      {
        title: "Learn the Basics:",
        dscrpt:
          "Familiarize yourself with key concepts such as negative gearing, positive cash flow, capital gais tax, and property management.",
      },
      {
        title: "Networking:",
        dscrpt:
          "Join property investment groups and forums to learn from experienced investors and stay updated on market insights.",
      },
    ],
  },
  {
    step: <IB className="text-white w-7 h-7"/>,
    title: "Financial Preparation",
    items: [
      {
        title: "Assess Your Financial Situation:",
        dscrpt:
          "Evaluate your income, expenses, assets, and liabilities. Ensure you have a stable income and a good credit score.",
      },
      {
        title: "Set a Budget:",
        dscrpt:
          "Familiarize yourself with key concepts such as negative gearing, positive cash flow, capital gains tax, and property management.",
      },
      {
        title: "Networking:",
        dscrpt:
          "Join property investment groups and forums to learn from experienced investors and stay updated on market insights.",
      },
    ],
  },

  {
    step: <IC className="text-white w-7 h-7"/>,
    title: "Develop a Strategy",
    items: [
      {
        title: "Define Your Goals:",
        dscrpt:
          "Are you looking for long-term growth, rental income, or both? Your goals will influence your property selection.",
      },
      {
        title: "Choose an Investment Strategy:",
        dscrpt:
          "Decide between strategies such as buy and hold, flipping, or developing properties. Each has its own risk and return profile.",
      },
    ],
  },

  {
    step: <ID className="text-white w-7 h-7"/>,
    title: "Property Selection",
    items: [
      {
        title: "Research Locations:",
        dscrpt:
          "Look for areas with strong growth potential, good infrastructure, and high demand. Consider factors like employment opportunities, schools, and public transport.",
      },
      {
        title: "Property Type:",
        dscrpt:
          "Choose between residential (houses, apartments) and commercial properties. Residential properties are generally less risky and easier to finance.",
      },
      {
        title: "Due Diligence:",
        dscrpt:
          "Inspect properties thoroughly, checking for any structural issues, planning regulations, and zoning laws.",
      },
    ],
  },

  {
    step: <IE className="text-white w-7 h-7"/>,
    title: "Financing",
    items: [
      {
        title: "Loan Pre-Approval:",
        dscrpt:
          "Approach banks or mortgage brokers to get a pre-approved loan. This gives you a clear idea of your borrowing capacity.",
      },
      {
        title: "Compare Loan Options:",
        dscrpt:
          "Look for competitive interest rates, flexible terms, and low fees. Consider fixed vs. variable rates.",
      },
      {
        title: "Investment Loan:",
        dscrpt:
          "Choose an investment loan that suits your strategy, such as interest-only loans for cash flow-focused strategies.",
      },
    ],
  },
  {
    step: <IF className="text-white w-7 h-7"/>,
    title: "Acquisition",
    items: [
      {
        title: "Negotiate:",
        dscrpt:
          "Use your research to negotiate the best possible price. Engage a buyer’s agent if necessary.",
      },
      {
        title: "Legal Work:",
        dscrpt:
          "Hire a conveyancer or solicitor to handle the legal aspects of the purchase, including contracts and property title transfers.",
      },
      {
        title: "Settlement:",
        dscrpt:
          "Complete the purchase and ensure all legal and financial obligations are met.",
      },
    ],
  },

  {
    step: <IG className="text-white w-7 h-7"/>,
    title: "Property Management",
    items: [
      {
        title: "Rent Out the Property:",
        dscrpt:
          "Hire a property manager or manage it yourself. Ensure you set a competitive rent and find reliable tenants.",
      },
      {
        title: "Maintain the Property:",
        dscrpt:
          "Regular maintenance is crucial to retain property value and tenant satisfaction. Budget for ongoing repairs and upgrades.",
      },
      {
        title: "Monitor Performance:",
        dscrpt:
          "Keep track of your property’s financial performance, including rental income, expenses, and capital growth.",
      },
    ],
  },

  {
    step: <IH className="text-white w-7 h-7"/>,
    title: "Portfolio Growth",
    items: [
      {
        title: "Leverage Equity:",
        dscrpt:
          "As your property value increases, you can use the equity to finance additional property purchases.",
      },
      {
        title: "Diversify:",
        dscrpt:
          "Consider different locations and property types to spread risk.",
      },
      {
        title: "Review and Adjust:",
        dscrpt:
          "Regularly review your portfolio and investment strategy. Adjust based on market conditions and personal financial goals.",
      },
    ],
  },

  {
    step: <II className="text-white w-7 h-7"/>,
    title: "Tax Considerations",
    items: [
      {
        title: "Maximize Deductions:",
        dscrpt:
          "Claim all eligible tax deductions, including mortgage interest, maintenance costs, and depreciation.",
      },
      {
        title: "Capital Gains Tax:",
        dscrpt:
          "Understand the implications of capital gains tax when selling properties.",
      },
      {
        title: "Seek Professional Advice:",
        dscrpt:
          "Work with an accountant who specializes in property investment to optimize your tax position.",
      },
    ],
  },

  {
    step: <IJ className="text-white w-7 h-7"/>,
    title: "Long-Term Strategy",
    items: [
      {
        title: "Plan for the Future:",
        dscrpt:
          "Have a clear exit strategy, whether it’s selling properties, living off rental income, or passing the portfolio to heirs.",
      },
      {
        title: "Stay Educated:",
        dscrpt:
          "Continue learning and adapting to changes in the market, regulations, and economic conditions.",
      },
    ],
  },
];

const AboutWealthCreation = () => {
  return (
    <div className="bg-white py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* ===================================================== */}
        {/* ====================== HERO ========================= */}
        {/* ===================================================== */}
        <div className="flex flex-col lg:flex-row items-center gap-14">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-7 max-w-2xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Creating Wealth Through Property
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed">
              Investment in Australia involves a series of strategic steps.
              Here's a comprehensive guide to help you get started and succeed in
              property investment:
            </p>
          </motion.div>
        </div>

        {/* ===================================================== */}
        {/* ===================== TIMELINE ====================== */}
        {/* ===================================================== */}
        <div className="relative">
          {/* TIMELINE LINE */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-orange-500/70 rounded-full hidden lg:block" />

          <div className="space-y-20">
            {steps.map((stepObj, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative max-md:p-0 md:p-0 lg:pl-20"
              >
                {/* STEP NUMBER CIRCLE */}
                
                <div className="absolute border-2 border-white left-1 top-0 w-14 h-14 rounded-full bg-[#E3572B] shadow-lg flex items-center justify-center text-white font-bold text-xl hidden lg:flex">
                  {stepObj.step}
                </div>
                

                {/* CONTENT */}
                <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl font-semibold text-[#E3572B] mb-6">
                    Step {index + 1}: {stepObj.title}
                  </h2>

                  <div className="space-y-6">
                    {stepObj.items.map((item, idx) => (
                      <div key={idx}>
                        <h3 className="font-semibold text-xl text-black mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.dscrpt}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWealthCreation;
