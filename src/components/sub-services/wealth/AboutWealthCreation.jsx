import Image from "next/image";
import bgImg from "@/assets/images/sub-services/smsf/smsf.jpg";

export default function AboutWealthCreation() {

  const step1 = [
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
  ];

  const step2 = [...step1];
  const step3 = [...step1];
  const step4 = [...step1];
  const step5 = [...step1];

  const steps = [
    { id: 1, title: "Step 1: Education and Research", items: step1 },
    { id: 2, title: "Step 2: Strategy Planning", items: step2 },
    { id: 3, title: "Step 3: Financial Preparation", items: step3 },
    { id: 4, title: "Step 4: Property Selection", items: step4 },
    { id: 5, title: "Step 5: Acquisition & Management", items: step5 },
  ];

  return (
    <div className="bg-[#fff8f2] py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-40">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl font-extrabold text-black leading-tight">
            Creating Wealth Through Property
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed">
            Investment in Australia involves a series of strategic steps. Here's a
            comprehensive guide to help you get started and succeed in property
            investment:
          </p>
        </div>

        {/* ALL STEPS */}
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`relative flex flex-col lg:flex-row items-center gap-20 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >

            {/* BACKGROUND STEP NUMBER */}
            <div className="absolute -top-20 -left-5 lg:-left-20 text-[#E3572B]/10 text-[130px] font-extrabold pointer-events-none select-none">
              {String(step.id).padStart(2, "0")}
            </div>

            {/* CONTENT CARD */}
            <div className="flex-1">
              <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white/40">
                <h2 className="text-3xl font-bold text-[#E3572B] mb-8">
                  {step.title}
                </h2>

                <div className="space-y-6">
                  {step.items.map((item, i) => (
                    <div key={i} className="border-l-4 border-[#E3572B] pl-4">
                      <h3 className="text-xl font-semibold text-black">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{item.dscrpt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="flex-1 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-300">
                <Image
                  src={bgImg}
                  alt="Step Visual"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Glow effect */}
              <div className="absolute -z-10 inset-0 bg-[#E3572B]/20 blur-3xl rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
