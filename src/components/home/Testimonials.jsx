import home from "@/assets/images/home/real-estate-miniature-house-model-zcovmnik4h0l5s7k.jpg";
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
  { name: "Melissa", occupation: "Qantas Flight Attendant", image: icon1, text: "Big Thank you to Peter, Matt & the team at Crew Capital, I'm on my second investment property in less than 2 years. All thanks to the team at Crew Capital." },
  { name: "Mick", occupation: "Drill & Blast Australia", image: icon2, text: "I was in a position to purchase two blocks of land and build two houses for my young children's future. Crew Capital took care of everything." },
  { name: "Fiona", occupation: "Sojitz Blue Coal", image: icon3, text: "My first investment property was made so easy. Peter & Matt found the right property, right price and took care of everything from finance approval to the legals." }
];

const Testimonials = () => {
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
    <div className="w-full brand-bg-secondary relative">
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
            max-md:hidden
          "
          style={{ height: typeof window !== "undefined" && window.innerWidth >= 640 ? rightHeight : "250px" }}
        >
          <Image
            src={home}
            alt="home img"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Right Content */}
        <div ref={rightRef} className="flex flex-col gap-5 pr-5 py-14
          min-[1500px]:py-20 min-[1500px]:pr-10
          md:w-[58%]
          max-md:w-full max-md:px-5
         ">
          <div className="flex flex-col gap-1
            md:pl-5 
            max-md:p-0">
            <h4 className="uppercase tracking-[0.3em] text-white">
              Testimonials
            </h4>
            <h3 className="text-3xl brand-text-primary">
              What Our Clients Say?
            </h3>
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
                  md:p-5
                  max-md:p-0">
                  <div className="relative shadow-lg rounded-3xl border-t-[#D6E100] border-t-[3px] flex flex-col gap-5
                    xl:p-8
                    lg:h-[320px] lg:p-5
                    md:p-5
                    max-md:p-5">
                    <div className="flex items-center gap-3">
                      <Image src={item.image} alt="image profile" className="w-24 h-24 rounded-full"/>
                      <div className="flex items-start justify-between w-full">
                        <div>
                          <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
                          <p className="text-white text-sm mb-3">{item.occupation}</p>
                          <div className="flex gap-[1.5px]">
                            {[...Array(5)].map((_, index) => (
                              <FaStar size={14} key={index} className="text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <FaQuoteRight size={32} className="text-white"/>
                      </div>
                    </div>
                    
                    <p className="text-white
                      lg:mt-4
                      xl:leading-relaxed
                      lg:leading-tight
                      md:leading-normal">{item.text}</p>
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
                  className={`testimonial-bullet h-[3px] rounded-full cursor-pointer transition-colors duration-300
                    md:w-12 
                    max-md:w-10
                    max-sm:w-8 ${
                    activeIndex === index ? "brand-bg-primary" : "bg-gray-300"
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

export default Testimonials;
