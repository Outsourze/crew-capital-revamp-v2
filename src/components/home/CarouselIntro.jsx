import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import bg1 from "@/assets/images/home/carousel-airline.png";
import bg2 from "@/assets/images/home/carousel-mining.png";
import { FaStar } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import p1 from "@/assets/images/home/p1.png";
import p2 from "@/assets/images/home/p2.webp";
import p3 from "@/assets/images/home/p3.jpg";
import p4 from "@/assets/images/home/p4.jpg";
import Image from "next/image";

export default function Carousel() {
  const images = [bg1.src, bg2.src]; // list of images
  const profile = [p1, p2, p3, p4]

  return (
    <div className="w-full mx-auto relative h-screen">
      {/* Static Text */}
      <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center text-white text-center px-5 z-10">
        <h1 className="text-7xl mb-4 w-[90%] font-semibold">TRANSFORMING</h1>
        <p className="mb-6">
          TRANSFORMING THE LIVES OF INDIVIDUALS, COUPLES AND FAMILIES IN THE AVIATION & MINING SECTOR
        </p>
        <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-md text-sm brand-text-blue uppercase">
          Get Started
        </button>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 text-white text-lg p-5 flex items-center gap-6 
        bg-gray-600/30 backdrop-blur-sm rounded-t-xl"
      >
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <FaStar className="text-green-300" />
            <h4 className="font-semibold">Trustpilot</h4>
          </div>
          <div className="flex gap-3 items-center">
          {/* //profile */}
            <div className="flex">
              {profile.map((i, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 rounded-full overflow-hidden bg-white p-[2px] ${index !== 0 ? '-ml-4' : ''}`}
                >
                  <Image className="rounded-full" alt="image" src={i} />
                </div>
              ))}
            </div>
            {/* //rating */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-[1.5px]">
                {[...Array(5)].map((_, index) => (
                  <FaStar size={12} key={index} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-white text-xs">450+ reviews</p>
            </div>
          </div>
        </div>
        

        {/* Vertical Divider */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <FaGoogle className="text-green-300" />
            <h4 className="font-semibold">Google</h4>
          </div>
          <div className="flex gap-3 items-center">
          {/* //profile */}
            <div className="flex">
              {profile.map((i, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 rounded-full overflow-hidden bg-white p-[2px] ${index !== 0 ? '-ml-4' : ''}`}
                >
                  <Image className="rounded-full" alt="image" src={i} />
                </div>
              ))}
            </div>
            {/* //rating */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-[1.5px]">
                {[...Array(4)].map((_, index) => (
                  <FaStar size={12} key={index} className="text-yellow-400" />
                ))}
                <FaRegStar size={12} className="text-yellow-400" />
              </div>
              <p className="text-white text-xs">450+ reviews</p>
            </div>
          </div>
        </div>
      </div>


      {/* Image Carousel */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        className="h-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              style={{ backgroundImage: `url(${img})` }}
              className="h-screen w-full bg-cover bg-top relative"
            >
              {/* Optional Overlay */}
              <div className="absolute inset-0 bg-[#4d5f8c]/30"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
