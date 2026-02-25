import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineAccessTime } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import airport from "@/assets/images/contact-us/airport.webp";

const contactInfo = [
  {
    icon: <FaLocationDot size={36} />,
    title: "Our Address",
    dscrpt: "118 Cahors Rd, Padstow NSW 2211 Australia",
  },
  {
    icon: <MdOutlineEmail size={36} />,
    title: "Email",
    dscrpt: "info@crewcapital.com.au",
  },
  {
    icon: <IoCallSharp size={36} />,
    title: "Call Us",
    dscrpt: "+1300 008 566",
  },
  {
    icon: <MdOutlineAccessTime size={36} />,
    title: "Opening Hour",
    dscrpt: "Sun-Fri: 9 AM - 6 PM | Sat: 9 AM - 4 PM",
  },
];

const Introduction = () => {
  return (
    <div className="w-full relative brand-bg-secondary">
      {/* Background Image */}
      <div className="w-full h-[400px] md:h-[500px] relative">
        <Image
          src={airport}
          alt="Airport Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[#D6E100] mix-blend-color opacity-60" />
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-5 -mt-24 md:-mt-32 relative z-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4
                         bg-white/10 backdrop-blur-md border border-white/20 
                         rounded-xl p-6 md:p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="brand-bg-primary p-4 rounded-full mb-2">
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold brand-text-primary">
                {item.title}
              </h3>
              <p className="text-white text-sm md:text-base">{item.dscrpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
