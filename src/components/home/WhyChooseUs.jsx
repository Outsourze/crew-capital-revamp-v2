import Success from "@/assets/icons/Success.svg";
import About from "@/assets/icons/Aboutus.svg";
import Meettheteam from "@/assets/icons/Meettheteam.svg";
import house from "@/assets/images/home/Residential-Homes.webp";
import Image from "next/image";
const whyUsData = [{
    title: "About Us",
    img: <Success className="w-16 h-16 brand-text-primary"/>,
    dscrpt: "Get to know who we are, what we do, and why we do it."
}, {
    title: "Success Stories",
    img: <About className="w-16 h-16 brand-text-primary"/>,
    dscrpt: "See real-life examples of property our research has identified, and people we’ve helped."
}, {
    title: "Meet the team",
    img: <Meettheteam className="w-16 h-16 brand-text-primary"/>,
    dscrpt: "Imagine a team of passionate people all committed to your success."
}]

const WhyUs = () => {
    return (
        <div className="max-w-7xl m-auto py-12 flex w-full justify-between gap-10
            xl:px-0 
            lg:px-20  
            md:px-10 md:flex-row
            max-md:px-8 max-md:flex-col">
            <div className="flex flex-col gap-5 
                md:w-1/2 max-md:w-full">
                <div className="flex flex-col">
                    <h4 className="uppercase tracking-[0.3em]">
                      Why Choose ?
                    </h4>
                    <h3 className="text-3xl brand-text-primary">
                      Crew Capital
                    </h3>
                </div>
                <p>Crew Capital was established to ensure that top-tier education, professional guidance, and career opportunities are accessible to individuals across aviation, mining, finance, and legal industries.</p>
                <Image
                  src={house}
                  alt="Residential Homes"
                  className="w-full rounded-3xl object-cover shadow-2xl transition-transform duration-500 hover:scale-105 hover:rotate-1"
                />

            </div>
            <div className="flex flex-col gap-3
                md:w-1/2 max-md:w-full">
                {whyUsData.map((i, index) => (
                    <div key={index} className="flex flex-col gap-3 p-5 rounded-xl bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border border-white/10
                        max-md:text-center max-md:items-center">
                        {i.img}
                        <h3 className="text-lg font-semibold">{i.title}</h3>
                        <p>{i.dscrpt}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyUs;