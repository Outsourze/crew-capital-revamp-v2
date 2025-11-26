import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "@/assets/images/home/home-owners.png";
import img2 from "@/assets/images/home/property.png";
import img3 from "@/assets/images/home/passive-income.png";
import img4 from "@/assets/images/home/reinvestor.png";
import img5 from "@/assets/images/home/financial-secure.png";
import Image from "next/image";
import { GrNext , GrPrevious } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import p1 from "@/assets/images/home/p1.png";
import p2 from "@/assets/images/home/p2.webp";
import p3 from "@/assets/images/home/p3.jpg";
import p4 from "@/assets/images/home/p4.jpg";

const WhoBenefits = () => {
  const items = [
    {
        title: "First Home Owners",
        img: img1,
        img2: p1,
        dscrpt: "“I’m eager to purchase my first property. It’ll mark my entry into the property market. I’m searching for a one-stop solution: education, mentorship, brokers, financial planners, real estate agents, and more."
    }, {
        title: "Property Investors",
        img: img2,
        img2: p2,
        dscrpt: "“I have property ownership and equity, yet I’m uncertain about leveraging it to expand my property portfolio.”"
    }, {
        title: "Passive Income & Income Replacers",
        img: img3,
        img2: p3,
        dscrpt: "“I aspire to create passive income to complement and eventually replace my current earnings. This way, I could attain the freedom to fully enjoy my life."
    }, {
        title: "Rentvestors",
        img: img4,
        img2: p4,
        dscrpt: "“Firstly, purchasing property where I currently reside is beyond my means. Secondly, I prefer not to relocate, yet I’m eager to own property. I’m seeking the right strategies to turn this aspiration into reality.”"
    }, {
        title: "Financially Secure Seekers",
        img: img5,
        img2: p1,
        dscrpt: "“I’ve always had the desire to construct a property portfolio and secure my financial future. However, I’m uncertain about the process; what if I make mistakes or incur losses? I require support.”"
    }
  ];

  return (
    <div className="max-w-7xl m-auto py-12">
      <h1 className="font-semibold text-white text-4xl text-center mb-14 leading-tight">
        WHO <span className="text-green-300">BENEFITS</span> FROM OUR <span className="text-green-300">EXPERT ADVICE</span> AND EXPERIENCE?
      </h1>

      <div className="relative group rounded-lg">
        {/* Custom navigation buttons */}
        <button className="swiper-button-prev absolute !-left-3 top-1/2 transform -translate-y-1/2 z-20 !w-14 !h-14 bg-white p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <GrPrevious />
        </button>
        <button className="swiper-button-next absolute !-right-3 top-1/2 transform -translate-y-1/2 z-20 !w-14 !h-14 bg-white p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <GrNext />
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={3}
          spaceBetween={0}
          loop={false}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="px-4 py-4 rounded-lg relative flex flex-col items-center">
                <div className="z-10 w-[96%] relative">
                    <Image src={item.img} className="rounded-2xl object-cover" />
                    <Image src={item.img2} alt="profile" className="absolute w-12 h-12 rounded-full right-5 z-10 -bottom-5 p-[2px] bg-white"/>
                </div>
                

                <div className="bg-white h-[350px] w-full rounded-2xl relative -top-24 -z-10 pt-30 px-8 flex flex-col items-start gap-2">
                    <div className="flex gap-3 items-center">
                        <div className="flex gap-[1.5px]">
                          {[...Array(5)].map((_, index) => (
                            <FaStar size={16} key={index} className="text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-sm text-red-600">5.0</p>
                        <p className="text-sm text-gray-500">(2)</p>
                    </div>
                    
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.dscrpt}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default WhoBenefits;
