import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdCall } from "react-icons/md";

const footerDetailBanner = [
  {
    title: "Address",
    info: "118 Cahors Rd, Padstow NSW 2211 Australia",
    icon: <FaLocationDot className="brand-text-primary" size={22} />,
  },
  {
    title: "Send Email",
    info: "info@crewcapital.com.au",
    icon: <MdEmail className="brand-text-primary" size={22} />,
  },
  {
    title: "Call Emergency",
    info: "+1300 008 566",
    icon: <MdCall className="brand-text-primary" size={22} />,
  },
];

const FooterBanner = () => {
  return (
    <div className="
      max-w-7xl w-full mx-auto
      brand-bg-primary
      px-6
      rounded-2xl
      flex flex-col gap-8
      md:flex-row md:items-center md:justify-between md:gap-4 md:py-8 
      max-md:py-5
    ">
      {footerDetailBanner.map((i, index) => (
        <div
          key={index}
          className="
            flex items-center gap-4
            w-full
            text-center
            md:w-[25%] md:flex-row max-md:text-left
          "
        >
          <div className="p-3 rounded-full brand-bg-primary border border-[#24282A]">
            <div className="brand-bg-secondary p-2 rounded-full">
              {i.icon}
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-xs md:text-sm opacity-70">
              {i.title}
            </p>
            <h3 className="text-sm md:text-base font-medium">
              {i.info}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterBanner;
