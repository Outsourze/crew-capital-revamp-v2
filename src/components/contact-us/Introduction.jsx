import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineAccessTime } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import airport from "@/assets/images/contact-us/airport.webp";

const contactInfo = [
  {
    icon: <FaLocationDot size={32} />,
    title: "Our Address",
    dscrpt: "118 Cahors Rd, Padstow NSW 2211 Australia",
  },
  {
    icon: <MdOutlineEmail size={32} />,
    title: "Email",
    dscrpt: "info@crewcapital.com.au",
  },
  {
    icon: <IoCallSharp size={32} />,
    title: "Call Us",
    dscrpt: "+1300 008 566",
  },
  {
    icon: <MdOutlineAccessTime size={32} />,
    title: "Opening Hour",
    dscrpt: "Sunday-Fri: 9 AM - 6 PM | Saturday: 9 AM - 4 PM",
  },
];

const Introduction = () => {
  return (
    <div className="w-full relative">
      
      {/* Background Image */}
      <div className="w-full h-[500px] relative">
        <Image
          src={airport}
          alt="Airport Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        {/* Green image tint */} <div className="absolute inset-0 bg-[#D6E100] mix-blend-color opacity-70" />
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto flex justify-between gap-8 px-5 -mt-32 relative z-10">
        {contactInfo.map((i, index) => (
          <div
            key={index}
            className="text-white flex flex-col items-center text-center gap-4
                       bg-white/5 backdrop-blur-md border border-white/10 
                       rounded-xl p-7 pt-10 w-full md:w-1/4"
          >
            <div className="brand-bg-primary p-3 rounded-lg">{i.icon}</div>

            <h3 className="text-xl font-semibold brand-text-primary">{i.title}</h3>
            <p className="text-white">{i.dscrpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
