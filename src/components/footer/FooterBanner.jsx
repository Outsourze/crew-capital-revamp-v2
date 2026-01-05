import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";

const footerDetailBanner = [{
    title: "Address",
    info: "118 Cahors Rd, Padstow NSW 2211 Australia",
    icon: <FaLocationDot className="brand-text-primary" size={22}/>
}, {
    title: "Send Email",
    info: "info@crewcapital.com.au",
    icon: <MdEmail className="brand-text-primary" size={22}/>
}, {
    title: "Call Emergency",
    info: "+1300 008 566",
    icon: <MdCall className="brand-text-primary" size={22}/>
}]


const FooterBanner = () => {
    return (
        <div className="max-w-7xl w-full m-auto brand-bg-primary py-10 rounded-2xl flex items-center justify-between px-8">
            {footerDetailBanner.map((i, index) => (
                <div key={index} className="flex items-center gap-5 w-[25%]">
                    <div className="p-3 rounded-full brand-bg-primary border border-[#24282A]">
                        <div className="brand-bg-secondary p-2 rounded-full">
                            {i.icon}
                        </div>
                    </div>
                    
                    <div className="flex flex-col">
                        <p className="text-sm">{i.title}</p>
                        <h3>{i.info}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FooterBanner;