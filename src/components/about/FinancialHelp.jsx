import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "@/assets/images/about/house.png";
import img2 from "@/assets/images/about/car.png";
import img3 from "@/assets/images/about/subdivision.webp";
import img4 from "@/assets/images/about/comercial.png";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

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
        <div className="py-20 relative px-10">
            <div className="w-full m-auto">
              <div className="mb-8 text-center flex flex-col gap-5">
                <h4 className="uppercase tracking-[0.3em]">
                  Personalized Financial Guidance
                </h4>
                <h3 className="text-3xl brand-text-primary">
                  Get The Financial Help You Need With The Service You Deserve.
                </h3>
              </div>
              <div className="relative px-10">
                {/* Swiper */}
                <Swiper
                  modules={[Navigation, Pagination]}
            spaceBetween={24}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} w-5 h-5 rounded-full !bg-black inline-block mx-1"></span>`;
              },
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-20"
                >
                  {items.map((ser, index) => (
                    <SwiperSlide key={index}>
                      <div className="h-full p-8 pb-14 transition">
                        <h4 className="mb-4 text-lg font-semibold tracking-wide text-center">
                          {ser.title}
                        </h4>
                        <p className="text-sm leading-relaxed text-gray-600 text-left">
                          {ser.dscrpt}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                {/* Custom arrows: center relative to slides, not pagination */}
                <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer">
                  <MdKeyboardArrowLeft size={52} />
                </button>
                <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer">
                  <MdKeyboardArrowRight size={52} />
                </button>
              </div>
            </div>
        </div>
    )
}

export default FinancialHelp;