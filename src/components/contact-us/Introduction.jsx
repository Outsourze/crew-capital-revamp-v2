import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
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
      <div
        className="w-full h-[500px] relative bg-cover bg-center"
        style={{ backgroundImage: `url(${airport.src})` }}
      >
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Cards container overlapping the background */}
      <div className="w-[90rem] mx-auto flex justify-between gap-8 px-5 -mt-32 relative z-10">
        {contactInfo.map((i, index) => (
          <div
            key={index}
            className="text-white flex flex-col justify-start items-center text-center gap-4 bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border border-white/10 rounded-xl p-7 pt-10 w-[23%]"
          >
            <div className="brand-bg-orange p-3 rounded-lg">{i.icon}</div>

            <h3 className="text-xl">{i.title}</h3>
            <p className="text-gray-400">{i.dscrpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
