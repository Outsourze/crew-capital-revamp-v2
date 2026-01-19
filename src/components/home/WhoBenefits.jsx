import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const WhoBenefits = () => {
  const items = [
    {
        title: "First Home Owners",
        dscrpt: "“I’m eager to purchase my first property. It’ll mark my entry into the property market. I’m searching for a one-stop solution: education, mentorship, brokers, financial planners, real estate agents, and more."
    }, {
        title: "Property Investors",
        dscrpt: "“I have property ownership and equity, yet I’m uncertain about leveraging it to expand my property portfolio.”"
    }, {
        title: "Passive Income & Income Replacers",
        dscrpt: "“I aspire to create passive income to complement and eventually replace my current earnings. This way, I could attain the freedom to fully enjoy my life."
    }, {
        title: "Rentvestors",
        dscrpt: "“Firstly, purchasing property where I currently reside is beyond my means. Secondly, I prefer not to relocate, yet I’m eager to own property. I’m seeking the right strategies to turn this aspiration into reality.”"
    }, {
        title: "Financially Secure Seekers",
        dscrpt: "“I’ve always had the desire to construct a property portfolio and secure my financial future. However, I’m uncertain about the process; what if I make mistakes or incur losses? I require support.”"
    }
  ];

  return (
    <section className="bg-white">
      <div className="py-20 relative 
        lg:px-20 md:px-10 max-md:px-8">
        {/* Heading */}
        <div className="mb-8 text-center flex flex-col gap-5">
          <h4 className="uppercase tracking-[0.3em]">
            Tailored Property Advice
          </h4>
          <h3 className="text-3xl brand-text-primary">
            Who Benefits From Our Expert Advice and Experience?
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
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-20"
            onSwiper={(swiper) => {
              // Tailwind classes for pagination bullets
              swiper.pagination.el.classList.add(
                "flex",
                "justify-center",
                "gap-3",
                "mt-6"
              );
              swiper.pagination.bullets.forEach((bullet) => {
                bullet.classList.add("!bg-black", "w-5", "h-5", "rounded-full");
              });
            }}
          >
            {items.map((ser, index) => (
              <SwiperSlide key={index}>
                <div className="h-full p-8 pb-14 transition">
                  <h4 className="mb-4 text-lg font-semibold tracking-wide text-center">
                    {ser.title}
                  </h4>
                  <p className="leading-relaxed text-gray-600 text-left">
                    {ser.dscrpt}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        
          {/* Custom arrows: center relative to slides, not pagination */}
          <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer">
            <SlArrowLeft size={24} />
          </button>
          <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer">
            <SlArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoBenefits;
