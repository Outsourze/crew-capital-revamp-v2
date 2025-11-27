import home from "@/assets/images/home/real-estate-miniature-house-model-zcovmnik4h0l5s7k.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import icon1 from "@/assets/images/home/p3.jpg";
import icon2 from "@/assets/images/home/p4.jpg";
import icon3 from "@/assets/images/home/p1.png";
import { FaStar } from "react-icons/fa";
import bg1 from "@/assets/images/bg-01.png";

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
        <div className="w-[40%] relative rounded-r-[50%] overflow-hidden" style={{ height: rightHeight }}>
          <Image
            src={home}
            alt="home img"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Right Content */}
        <div ref={rightRef} className="w-[58%] flex flex-col gap-5 py-20 pr-10">
          <div className="pl-5 flex flex-col gap-1">
            <p className="brand-text-orange text-xl">Testimonials</p>
            <h1 className="text-5xl font-semibold">What Our Clients Say?</h1>
          </div>

          <div className="w-full py-10">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              slidesPerView={2}
              spaceBetween={0}
              loop={true}
            >
              {testimonialsData.map((item, index) => (
                <SwiperSlide key={index} className="p-5">
                  <div className="relative bg-white shadow-lg rounded-3xl p-8 border-t-[#E3572B] border-t-[3px] h-[320px] flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                      <Image src={item.image} alt="image profile" className="w-24 h-24 rounded-full"/>
                      <div className="flex items-start justify-between w-full">
                        <div>
                          <h3 className="text-2xl font-semibold">{item.name}</h3>
                          <p className="text-gray-500 text-sm mb-3">{item.occupation}</p>
                          <div className="flex gap-[1.5px]">
                            {[...Array(5)].map((_, index) => (
                              <FaStar size={14} key={index} className="text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <FaQuoteRight size={32} className="brand-text-orange"/>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mt-4">{item.text}</p>
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
                    activeIndex === index ? "bg-orange-400" : "bg-gray-300"
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
