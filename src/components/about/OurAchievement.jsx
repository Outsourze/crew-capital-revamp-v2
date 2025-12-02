import LottieAnimation from "../LottieAnimation";
import commercialImg from "@/assets/images/about/comercial.png";
import Partners from "../ui/Partners";

const achievement = [{
    numbers: "25",
    text: "Clients Served"
}, {
    numbers: "32",
    text: "Projects Completed"
}, {
    numbers: "80",
    text: "Lives Impacted"
}]


const OurAchievement = () => {
    return (
        <div className="bg-[#fff8f2]">
            <div className="max-w-[90rem] m-auto w-full py-20 flex justify-between items-center">
                <div className="flex flex-col gap-1 w-[45%]">
                  <p className="brand-text-orange text-xl">Company Overview</p>
                  <h1 className="text-5xl font-semibold leading-tight">Empowering Professionals Across Industries</h1>
                </div>
                <div className="w-[45%] flex  items-end justify-end gap-5">
                    {achievement.map((item, index) => (
                      <div key={item.numbers} className="flex items-center gap-4">
                        <div className="text-center ">
                          <h3 className="text-4xl font-semibold">{item.numbers}</h3>
                          <p className="text-xl text-gray-500">{item.text}</p>
                        </div>
                        {/* Add middle dot except after last item */}
                        {index !== achievement.length - 1 && (
                          <span className="text-5xl text-gray-600">·</span>
                        )}
                      </div>
                    ))}
                </div>
            </div>
            <div
                style={{ backgroundImage: `url(${commercialImg.src})` }} 
                className="max-w-[90rem] brand-bg-orange w-full h-[500px] m-auto rounded-2xl justify-center items-center flex bg-cover bg-no-repeat bg-center">
                <LottieAnimation />
            </div>
            <Partners />
        </div>
    )
}

export default OurAchievement;