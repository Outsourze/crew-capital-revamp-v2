import Image from "next/image";
import bgImg from "@/assets/images/sub-services/smsf/smsf.jpg";
import LottieAnimation from "@/components/LottieAnimation";
import growAnimation from "@/assets/animations/Revenue.json";
import moneyAnimation from "@/assets/animations/money.json";
import img1 from "@/assets/images/sub-services/smsf/handshake.jpg";
import img2 from "@/assets/images/sub-services/smsf/calcu.jpg";
import img3 from "@/assets/images/sub-services/smsf/piggybank.jpg";
import { FillBtnLink } from "@/components/ui/Button";


// 2. understanding of smsfs key feature
//2.1 Key Features
const keyFeature = [{
    title: "Control",
    dscrpt: "Members have full control over investments."
}, {
    title: "Flexibility",
    dscrpt: "Invest in residential, commercial & more."
}, {
    title: "Responsibility",
    dscrpt: "Trustees must comply with ATO rules."
}]

// 2.2. Legal and Regulatory Requirements
const LegalRegulatoryData = [
  { title: "Trust Deed:", descrpt: "Establish a trust deed outlining the rules of the fund." },
  { title: "Trustees:", descrpt: "Members must be individual trustees or directors of a corporate trustee." },
  { title: "ATO Registration:", descrpt: "Register the SMSF with the ATO." },
  { title: "Australian Business Number (ABN):", descrpt: "Obtain an ABN for the SMSF." },
  { title: "Tax File Number (TFN):", descrpt: "Obtain a TFN for the SMSF." },
  { title: "Audit:", descrpt: "Annual audit by an approved SMSF auditor." },
];

// 3. Setting Up an SMSF
// 3.1 Establish the Trust:
const establishTrustData = [{
    title: "Choose trustees",
    dscrpt: "Decide between individual trustees or corporate trustee.",
    img: img1
}, {
    title: "Create a trust deed",
    dscrpt: "Draft and execute a trust deed",
    img: img2
}, {
    title: "Sign a trustee declaration",
    dscrpt: "Complete a trustee declaration form within 21 days of becoming a trustee.",
    img: img3
}]

// 3.2 Register the SMSF:
const registerSmsfData = [{
    title: "Apply for an ABN and TFN:",
    dscrpt: "Register with the ATO to obtain an ABN and TFN."
}, {
    title: "Open a bank account:",
    dscrpt: "Set up a bank account in the name of SMSF for all contributions and income."
},]

// 3.3 Create an Investment Strategy:
const investmentStrategyData = [{
    title: "Define objectives:",
    dscrpt: "Establish clear investments objectives considering risk, liquidity, and diversification."
}, {
    title: "Compliance:",
    dscrpt: "Ensure the strategy complies with superannuation laws and the sole purpose test."
},]

// 4. Investing in a property with SMSF.
// 4.1 Types of property investments:
const investProperty = [{
    title: "Residential property:",
    dscrpt: "Can be rented out but not lived in by fund members or related parties."
}, {
    title: "Commercial property:",
    dscrpt: "Can be leased to fund members or related parties under strict conditions."
}]


// 4.2 Using Barrowing to Purchase Property:
const barrowPurchsePropertyData = [{
    title: "Limited Recourse Borrowing Arrangements (LRBA):",
    dscrpt: "SMSFs can barrow to purchase property through LRBAs, where the leader's recouse is limited to the asset purchased."
}]

// 4.3 Steps   to Purchase Property:
const stepToPurchasePropertyData = [{
    title: "Find a suitable property:",
    dscrpt: "Ensure it meets the SMSF's investment strategy."
}, {
    title: "Engage professionals:",
    dscrpt: "Consult with a financial advisor, accountant, and lawyer experienced in SMSF property transactions."
},{
    title: "Establish a Bare Trust:",
    dscrpt: "If using an LRBA, set up a seperate trust (bare trust) to hold the property."
},{
    title: "Arrange finance:",
    dscrpt: "Secure a loan from a lender that offers SMSF loans."
},{
    title: "Purchase the property:",
    dscrpt: "Complete the property transaction through the SMSF."
},{
    title: "Compliance:",
    dscrpt: "Ensure ongoing compliance with SMSF regulations and property management."
},]

//5. Benefits and Risk of SMSF Property Investment
//5.1 Benefits:
const benefits = [{
    title: "Control:",
    dscrpt: "Direct control over property investment."
}, {
    title: "Compliance:",
    dscrpt: "Potential for capital growth and rental income."
}, {
    title: "Compliance:",
    dscrpt: "Concessional tax rates within the superannuation environment."
}]

//5.2 Risk
const risk = [{
    title: "Complexity:",
    dscrpt: "Requires understanding of SMSF regulations and property laws."
}, {
    title: "Costs:",
    dscrpt: "Initial setup, ongoing compliance, and barrowing cost can be high."
}, {
    title: "Liquidity:",
    dscrpt: "Property is less liquid and other investments, potentially complicating benefits payments."
}]

//6. Ongoing Management of SMSF property
//6.1 Property Management:
const propertyManagement = [{
    title: "Leasing and tenancy:",
    dscrpt: "Manage leases and tenant relationship."
}, {
    title: "Maintenance and Repairs:",
    dscrpt: "Ensure the property is well-maintained."
}, {
    title: "Compliance:",
    dscrpt: "Maintain compliance with SMSF regulations and ATO requirements."
}]

//6.2 reporting and administration
const reportingAdministration = [{
    title: "Report Keeping:",
    dscrpt: "Maintain detailed records of all transactions and decisions."
}, {
    title: "Annual Audit:",
    dscrpt: "Conduct an annual audit and lodge annual returns with the ATO."
}, {
    title: "Review Investment Strategy:",
    dscrpt: "Regularly review and adjust the investment strategy as needed"
}]

//7 exit strategy
// 7.1 selling the property
const sellingProperty = [{
    title: "Market Conditions:",
    dscrpt: "Consider the market conditions and timing of the sale."
}, {
    title: "Costs:",
    dscrpt: "Factors in costs such as capital gains atax (CGT) agent fees, and legal fees."
}, {
    title: "Distribution:",
    dscrpt: "Ensure proceeds are distributed according to the SMSF's Investment strategy and legal requirements."
}];

// 7.2 winding up the smsf
const windingSMSF = [{
    title: "Liquidate Assets:",
    dscrpt: "Sell all assets and settle liabilities."
}, {
    title: "Distribute Benefits:",
    dscrpt: "Distribute remaining benefits to members or roll over to another superannuation fund."
}, {
    title: "Deregister with the ATO:",
    dscrpt: "Deregister with SMSF with the ATO."
}]


const AboutSmsf = () => {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">

        {/* ================= HERO SECTION ================= */}
        <div className="flex flex-col lg:flex-row items-center gap-14">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 flex flex-col gap-7 items-start">
          
            <div className="flex flex-col gap-1 mb-5">
              <h4 className="uppercase tracking-[0.3em]">
                  Your Guide to SMSFs
              </h4>
              <h3 className="text-3xl brand-text-primary">
                Everything You Need to Know
              </h3>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Learn how Self-Managed Superannuation Funds can help you build wealth 
              and take control of your property investment journey.
            </p>

            <div className="bg-green-100/50 border-l-4 border-[#E3572B] px-5 py-3 rounded-md text-dark-navy font-medium">
              We Understand Your Challenges
            </div>

            <FillBtnLink href={"/"}>
              Learn More
            </FillBtnLink>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 h-72 sm:h-96 lg:h-[450px] relative rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/40 to-transparent z-10"></div>
            <Image src={bgImg} alt="office girl" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* ================= SECTION 2 ================= */}
        <div className="flex flex-col gap-24">

          {/* --- 1. INTRODUCTION TO SMSFs (own row, image left) --- */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-14">
            {/* TEXT */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <h3 className="text-3xl brand-text-primary">
                1. Introduction to SMSFs
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A Self-Managed Superannuation Fund (SMSF) is a private super fund that you manage yourself.
                Regulated by the Australian Taxation Office (ATO), SMSFs offer greater control over investment
                decisions, including the ability to invest in property. Up to four members can join and build
                retirement wealth together.
              </p>
            </div>

            {/* IMAGE */}
            <div className="w-full lg:w-1/2 hidden sm:block rounded-2xl overflow-hidden">
              <LottieAnimation animation={moneyAnimation} height="100%" width="100%" />
            </div>
          </div>

          {/* --- 2. UNDERSTANDING SMSFs (row with animation on right) --- */}
          <div className="flex flex-col lg:flex-row items-center gap-14">
            
            {/* TEXT */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h3 className="text-3xl brand-text-primary">
                2. Understanding SMSFs
              </h3>
              
              <h3 className="text-dark-navy font-semibold text-xl">2.1 Key Features</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {keyFeature.map((i, index) => (
                    <div className="bg-white border-l-4 border-[#D6DD37] p-6 rounded-xl shadow-lg">
                      <h4 className="font-semibold text-dark-navy text-lg">{i.title}</h4>
                      <p className="text-gray-600 text-sm mt-2">{i.dscrpt}</p>
                    </div>
                ))}
              </div>
            </div>

            {/* LOTTIE ANIMATION */}
            <div className="w-full lg:w-1/2 hidden sm:block rounded-2xl overflow-hidden">
              <LottieAnimation animation={growAnimation} height="100%" width="100%" />
            </div>
          </div>

          {/* --- 2.2 LEGAL REQUIREMENTS --- */}
          <div>
            <h3 className="text-dark-navy font-semibold text-xl mb-6">2.2 Legal and Regulatory Requirements</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {LegalRegulatoryData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-green-200 p-6 rounded-xl shadow hover:shadow-lg transition"
                >
                  <h4 className="text-dark-navy font-semibold text-lg">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-2">{item.descrpt}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col gap-6">
            <h3 className="text-3xl brand-text-primary">
                3. Setting Up an SMSF
              </h3>
            <h3 className="text-dark-navy font-semibold text-xl">3.1 Establish the Trust:</h3>

            <div className="flex items-center justify-between gap-2">
            {establishTrustData.map((i, index) => (
                <div key={index} className="w-[32%] relative group">
                  <Image
                    src={i.img}
                    className="rounded-xl w-full h-[280px] object-cover transition-all"
                  />
            
                  <div className="
                    bg-white/90 backdrop-blur-sm shadow-xl border border-gray-200
                    flex flex-col gap-2 p-5 absolute w-[80%] h-[130px]
                    rounded-r-lg rounded-b-lg -bottom-10 left-0
                  ">
                    <h3 className="font-semibold text-gray-800">{i.title}</h3>
                    <div className="w-8 h-[2px] bg-green-500 rounded-full"></div>
                    <p className="text-sm text-gray-600">{i.dscrpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
              <h3 className="text-dark-navy font-semibold text-xl">3.2 Register the SMSF:</h3>
            
            <div className="flex justify-between gap-6">
                {registerSmsfData.map((i, index) => (
                    <div
                      key={index}
                      className="bg-white border border-green-200 p-6 rounded-xl shadow hover:shadow-lg transition w-1/2"
                    >
                      <h4 className="text-dark-navy font-semibold text-lg">{i.title}</h4>
                      <p className="text-gray-600 text-sm mt-2">{i.dscrpt}</p>
                    </div>
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
              <h3 className="text-dark-navy font-semibold text-xl">3.3 Create an Investment Strategy:</h3>
            
            <div className="flex justify-between gap-6">
                {investmentStrategyData.map((i, index) => (
                    <div
                      key={index}
                      className="bg-white border border-green-200 p-6 rounded-xl shadow hover:shadow-lg transition w-1/2"
                    >
                      <h4 className="text-dark-navy font-semibold text-lg">{i.title}</h4>
                      <p className="text-gray-600 text-sm mt-2">{i.dscrpt}</p>
                    </div>
                ))}
            </div>
          </div>
          <div className="w-full flex flex-col gap-6">
                <h2 className="text-3xl brand-text-primary">4. Investing in a property with SMSF.</h2>
                
                <h3 className="text-dark-navy font-semibold text-xl">4.1 Types of property investments:</h3>
                <div className="flex justify-between gap-6">
                {investProperty.map((i, index) => (
                    <div
                      key={index}
                      className="bg-white border border-green-200 p-6 rounded-xl shadow hover:shadow-lg transition w-1/2"
                    >
                      <h4 className="text-dark-navy font-semibold text-lg">{i.title}</h4>
                      <p className="text-gray-600 text-sm mt-2">{i.dscrpt}</p>
                    </div>
                ))}
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
                <h3 className="text-dark-navy font-semibold text-xl">4.2 Using Barrowing to Purchase Property:</h3>
                <div className="flex justify-between gap-6">
                {barrowPurchsePropertyData.map((i, index) => (
                    <div
                      key={index}
                      className="bg-white border border-green-200 p-6 rounded-xl shadow hover:shadow-lg transition w-1/2"
                    >
                      <h4 className="text-dark-navy font-semibold text-lg">{i.title}</h4>
                      <p className="text-gray-600 text-sm mt-2">{i.dscrpt}</p>
                    </div>
                ))}
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
                <h3 className="text-dark-navy font-semibold text-xl">4.3 Steps to Purchase Property:</h3>
                <div className="flex justify-between gap-6 flex-wrap">
                {stepToPurchasePropertyData.map((i, index) => (
                    <div
                      key={index}
                      className="bg-white border border-green-200 p-6 rounded-xl shadow hover:shadow-lg transition 
                        xl:w-[32%] lg:w-[48%] md:w-[48%] max-md:w-full"
                    >
                      <h4 className="text-dark-navy font-semibold text-lg">{i.title}</h4>
                      <p className="text-gray-600 text-sm mt-2">{i.dscrpt}</p>
                    </div>
                ))}
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <h2 className="text-3xl brand-text-primary">5. Benefits and Risk of SMSF Property Investment</h2>
            <h3 className="text-dark-navy font-semibold text-xl">5.1 Benefits:</h3>
            <div className="flex justify-between gap-6">
                {benefits.map((i, index) => (
                    <div
                      key={index}
                      className="bg-white border border-green-200 p-6 rounded-xl shadow hover:shadow-lg transition w-1/2"
                    >
                      <h4 className="text-dark-navy font-semibold text-lg">{i.title}</h4>
                      <p className="text-gray-600 text-sm mt-2">{i.dscrpt}</p>
                    </div>
                ))}
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <h3 className="text-dark-navy font-semibold text-xl">5.2 Risks:</h3>
            <div className="flex justify-between gap-6">
                {risk.map((i, index) => (
                    <div
                      key={index}
                      className="bg-white border border-green-200 p-6 rounded-xl shadow hover:shadow-lg transition w-1/2"
                    >
                      <h4 className="text-dark-navy font-semibold text-lg">{i.title}</h4>
                      <p className="text-gray-600 text-sm mt-2">{i.dscrpt}</p>
                    </div>
                ))}
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <h2 className="text-3xl brand-text-primary">6. Ongoing Management of SMSF property</h2>
            <h3 className="text-dark-navy font-semibold text-xl">6.1 Property Management:</h3>
            <div className="flex justify-between gap-6">
                {propertyManagement.map((i, index) => (
                    <div
                      key={index}
                      className="bg-white border border-green-200 p-6 rounded-xl shadow hover:shadow-lg transition w-1/2"
                    >
                      <h4 className="text-dark-navy font-semibold text-lg">{i.title}</h4>
                      <p className="text-gray-600 text-sm mt-2">{i.dscrpt}</p>
                    </div>
                ))}
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <h3 className="text-dark-navy font-semibold text-xl">6.2 Reporting and Administration:</h3>
            <div className="flex justify-between gap-6">
                {reportingAdministration.map((i, index) => (
                    <div
                      key={index}
                      className="bg-white border border-green-200 p-6 rounded-xl shadow hover:shadow-lg transition w-1/2"
                    >
                      <h4 className="text-dark-navy font-semibold text-lg">{i.title}</h4>
                      <p className="text-gray-600 text-sm mt-2">{i.dscrpt}</p>
                    </div>
                ))}
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <h2 className="text-3xl brand-text-primary">7. Exit Strategy</h2>
            <h3 className="text-dark-navy font-semibold text-xl">7.1 Selling the Property:</h3>
            <div className="flex justify-between gap-6">
                {sellingProperty.map((i, index) => (
                    <div
                      key={index}
                      className="bg-white border border-green-200 p-6 rounded-xl shadow hover:shadow-lg transition w-1/2"
                    >
                      <h4 className="text-dark-navy font-semibold text-lg">{i.title}</h4>
                      <p className="text-gray-600 text-sm mt-2">{i.dscrpt}</p>
                    </div>
                ))}
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <h3 className="text-dark-navy font-semibold text-xl">7.2 Winding Up the SMSF:</h3>
            <div className="flex justify-between gap-6">
                {windingSMSF.map((i, index) => (
                    <div
                      key={index}
                      className="bg-white border border-green-200 p-6 rounded-xl shadow hover:shadow-lg transition w-1/2"
                    >
                      <h4 className="text-dark-navy font-semibold text-lg">{i.title}</h4>
                      <p className="text-gray-600 text-sm mt-2">{i.dscrpt}</p>
                    </div>
                ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default AboutSmsf;
