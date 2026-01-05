import money from "@/assets/images/sub-services/wealthcreation/money.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import icon1 from "@/assets/images/p3.jpg";
import icon2 from "@/assets/images/p4.jpg";
import icon3 from "@/assets/images/p1.png";
import { FaStar } from "react-icons/fa";
import bg1 from "@/assets/images/bg-01.png";
import { useMediaQuery } from "@/utility/useMediaQuery";

const testimonialsData = [
  { name: "No guesswork.",  image: icon1, text: "In 3 years, we helped John secure 4 properties, all covering their mortgages completely. He’s on track to have his principal residence fully paid off and be able to exit the workforce all before age 35 if he choses ." },
  { name: "No major risks.",  image: icon2, text: "Christian and Julie purchased their first home and 3 investment properties within 22 months of working with us. Their portfolio is now worth $2.43M and provides a true passive income, allowing them to expand their family and live comfortably." },
  { name: "No lifestyle change.", image: icon3, text: "Mitchell worked with us to acquire 3 properties with an overall portfolio worth $1.75M (and growing). Now he’s in a position to leave his job and pursue his passion for starting his own hire company." }
];

const WhatClientSay = () => {
  const swiperRef = useRef(null);
  const rightRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [rightHeight, setRightHeight] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  // Update active slide
  useEffect(() => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current.swiper;

    const updateActiveIndex = () => setActiveIndex(swiper.realIndex);
    updateActiveIndex();
    swiper.on("slideChange", updateActiveIndex);
    return () => swiper.off("slideChange", updateActiveIndex);
  }, []);

  // Measure right content height
  useEffect(() => {
    const updateHeight = () => {
      if (rightRef.current) setRightHeight(rightRef.current.offsetHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const goToSlide = (index) => swiperRef.current.swiper.slideToLoop(index);

  return (
    <div className="w-full bg-[#fff8f2] relative">
      <Image src={bg1} className="absolute right-0 bottom-0"/>
      <div className="flex items-start justify-between gap-10">
        {/* Left Image */}
        <div
          className="
            w-full sm:w-[40%] 
            relative 
            overflow-hidden 
            rounded-none sm:rounded-r-[50%]
            h-[250px] sm:h-auto
          "
          style={{ height: typeof window !== "undefined" && window.innerWidth >= 640 ? rightHeight : "250px" }}
        >
          <Image
            src={money}
            alt="money img"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Right Content */}
        <div ref={rightRef} className="w-[58%] flex flex-col gap-5 pr-5 py-14
          min-[1500px]:py-20 min-[1500px]:pr-10
         ">
          <div className="pl-5 flex flex-col gap-1">
            <p className="brand-text-primary text-xl">What to Expect?</p>
            <h1 className="text-5xl font-semibold">Our clients are a testament to what’s possible:</h1>
          </div>

          <div className="w-full 
            lg:py-10
            md:py-5">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              slidesPerView={isTablet || isMobile ? 1 : 2}
              spaceBetween={0}
              loop={true}
            >
              {testimonialsData.map((item, index) => (
                <SwiperSlide key={index} className="
                  xl:p-5
                  lg:p-3
                  md:p-5">
                  <div className="relative flex flex-col justify-between bg-white shadow-lg rounded-3xl border-t-[#E3572B] border-t-[3px] flex flex-col gap-5
                    xl:p-8
                    lg:h-[320px] lg:p-5
                    md:p-5">
                      <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-3 w-full">
                            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                              <FaQuoteRight className="text-[#E3572B]" />
                            </div>
                            <h3 className="text-2xl font-semibold uppercase">{item.name}</h3>
                          </div>
                        </div>
                    
                        <p className="text-gray-600 
                          lg:mt-4
                          xl:leading-relaxed
                          lg:leading-tight
                          md:leading-normal">{item.text}</p>
                      </div>
                    

                      <div className="h-[3px] w-20 bg-[#E3572B] rounded-full mt-4"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Bullet indicators */}
            <div className="flex gap-3 mt-6 pl-5">
              {testimonialsData.map((_, index) => (
                <div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`testimonial-bullet h-[3px] w-12 rounded-full cursor-pointer transition-colors duration-300 ${
                    activeIndex === index ? "bg-green-400" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatClientSay;
