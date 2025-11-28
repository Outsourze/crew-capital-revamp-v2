import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import icon1 from "@/assets/images/p3.jpg";
import icon2 from "@/assets/images/p4.jpg";
import icon3 from "@/assets/images/p1.png";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";

const testimonialsData = [
  { name: "Melissa", occupation: "Qantas Flight Attendant", image: icon1, text: "Big Thank you to Peter, Matt & the team at Crew Capital, I'm on my second investment property in less than 2 years. All thanks to the team at Crew Capital." },
  { name: "Mick", occupation: "Drill & Blast Australia", image: icon2, text: "I was in a position to purchase two blocks of land and build two houses for my young children's future. Crew Capital took care of everything." },
  { name: "Fiona", occupation: "Sojitz Blue Coal", image: icon3, text: "My first investment property was made so easy. Peter & Matt found the right property, right price and took care of everything from finance approval to the legals." }
];

const Testimonials = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Update active slide
    useEffect(() => {
      if (!swiperRef.current) return;
      const swiper = swiperRef.current.swiper;

      const updateActiveIndex = () => setActiveIndex(swiper.realIndex);
      updateActiveIndex();
      swiper.on("slideChange", updateActiveIndex);
      return () => swiper.off("slideChange", updateActiveIndex);
    }, []);

    return (
        <div className="max-w-[90rem] w-full m-auto flex flex-col gap-10 py-10">
            <div className="flex flex-col gap-5">
                <p className="text-center brand-text-orange text-xl">Testimonials</p>
                <h1 className="text-5xl font-semibold text-center text-white">Latest Client Feedback</h1>
            </div>
            <div>
                <Swiper
                  ref={swiperRef}
                  modules={[Navigation]}
                  slidesPerView={2}
                  spaceBetween={0}
                  loop={true}
                >
                  {testimonialsData.map((item, index) => (
                    <SwiperSlide key={index} className="p-5">
                      <div className="relative shadow-lg rounded-3xl p-8 h-[320px] flex flex-col gap-5 bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border border-white/10">
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
                            <FaQuoteRight size={32} className="brand-text-orange"/>
                          </div>
                        </div>
                            
                        <p className="leading-relaxed mt-4 text-white">{item.text}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Bullet indicators */}
                <div className="flex gap-3 mt-6 justify-center">
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
    )
}

export default Testimonials;