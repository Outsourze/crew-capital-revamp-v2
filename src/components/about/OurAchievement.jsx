import LottieAnimation from "../LottieAnimation";
import commercialImg from "@/assets/images/about/comercial.png";
import Partners from "../ui/Partners";
import playBtn from "@/assets/animations/Play Button Pulse.json";

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
        <div className="
          lg:px-20
          md:px-10
          max-md:px-5">
            <div className="max-w-[90rem] m-auto w-full flex justify-between items-center
              md:flex-row md:py-20 
              max-md:flex-col max-md:gap-10 max-md:py-10">
                <div className="flex flex-col gap-1 
                  md:w-[45%]
                  max-md:w-full max-md:items-center max-md:text-center">
                    <h4 className="uppercase tracking-[0.3em]">
                      Company Overview
                    </h4>
                    <h3 className="text-3xl brand-text-primary">
                      Empowering Professionals Across Industries
                    </h3>
                </div>
                <div className="flex gap-5 
                  md:w-[45%]
                  max-md:w-full max-md:justify-center">
                    {achievement.map((item, index) => (
                      <div key={item.numbers} className="flex items-center md:gap-4 max-md:gap-2">
                        <div className="text-center ">
                          <h3 className="font-semibold
                            md:text-4xl 
                            max-md:text-3xl">{item.numbers}</h3>
                          <p className=" text-gray-500
                            md:text-xl
                            max-md:text-base">{item.text}</p>
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
                className="max-w-[90rem] brand-bg-primary w-full h-[500px] m-auto rounded-2xl justify-center items-center flex bg-cover bg-no-repeat bg-center">
                <LottieAnimation animation={playBtn} height={200} width={200}/>
            </div>
            <Partners />
        </div>
    )
}

export default OurAchievement;