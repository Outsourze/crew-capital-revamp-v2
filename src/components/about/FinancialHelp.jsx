import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "@/assets/images/about/house.png";
import img2 from "@/assets/images/about/car.png";
import img3 from "@/assets/images/about/subdivision.webp";
import img4 from "@/assets/images/about/comercial.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { GrNext , GrPrevious } from "react-icons/gr";
import bg1 from "@/assets/images/bg-01.png";
import bg2 from "@/assets/images/bg-04.png";

const items = [
    {
        title: "Investment Loans",
        img: img1,
        dscrpt: "Reliable and instant with minimal documentation. Get money credited into your bank account in 24 hours. With our Car Loan,…"
    }, {
        title: "Car Loans",
        img: img2,
        dscrpt: "Reliable and instant with minimal documentation. Get money credited into your bank account in 24 hours. With our Car Loan,…"
    }, {
        title: "Home Loans",
        img: img3,
        dscrpt: "“Loan for the first-time borrowers. The loan amount starts from Rs 15000 and goes up to 2 Lakh. With our…"
    }, {
        title: "Rentvestors",
        img: img4,
        dscrpt: "“Firstly, purchasing property where I currently reside is beyond my means. Secondly, I prefer not to relocate, ...”"
    }, 
  ];

const FinancialHelp = () => {
    return (
        <div className="bg-[#fff8f2] py-20 relative">
            <Image src={bg1} className="absolute left-0 top-5"/>
            <Image src={bg2} className="absolute right-0 bottom-5"/>
            <div className="max-w-7xl w-full m-auto">
                <div className="flex flex-col justify-center gap-2 items-center">
                  <p className="text-center brand-text-orange text-xl ">Personalized Financial Guidance</p>
                  <h1 className="font-semibold text-4xl text-center mb-14 leading-tight w-[70%]">
                    Get The Financial Help You Need With The Service You Deserve.
                  </h1>
                </div>
                <div className="relative group rounded-lg">
                    {/* Custom navigation buttons */}
                    <button className="swiper-button-prev absolute !-left-8 top-1/2 transform -translate-y-1/2 z-20 !w-14 !h-14 bg-white !text-orange-500 p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <GrPrevious />
                    </button>
                    <button className="swiper-button-next absolute !-right-8 top-1/2 transform -translate-y-1/2 z-20 !w-14 !h-14 bg-white !text-orange-500 p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <GrNext />
                    </button>
                    <Swiper
                        modules={[Navigation]}
                          navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                          }}
                          slidesPerView={3}
                          spaceBetween={30}
                          loop={false}
                        >
                        {items.map((item, index) => (
                          <SwiperSlide key={index} className="py-3 !overflow-visible">
                          <div className="h-[450px] rounded-xl rounded-t-3xl bg-white shadow-lg flex flex-col gap-4 relative">
                                        
                            <div className="relative w-full h-[250px] rounded-t-xl overflow-hidden">
                              <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover"
                              />
                            </div>              
                            <div className="px-5 flex flex-col gap-3">
                                <h3 className="font-semibold text-lg">
                                  {item.title}
                                </h3>               
                        
                                <p className="text-sm text-gray-600">
                                  {item.dscrpt}
                                </p>    
                            </div>
                                        
                            <div className="px-5 flex items-center gap-3 absolute bottom-5 left-0 brand-text-orange cursor-pointer">
                                <p>Read More</p>
                                <FaArrowRightLong />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default FinancialHelp;