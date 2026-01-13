import Image from "next/image";
import houseImg from "@/assets/images/sub-services/mining/banner.png"; 
import { CiCircleCheck } from "react-icons/ci";

const ClientSuccessSection = () => {
  return (
    <section className="py-24 px-10 pt-10">
      <div className="max-w-[90rem] mx-auto flex justify-between gap-10 items-start">
        {/* LEFT SIDE */}
        <div className="flex flex-col py-12 w-1/2">
          
          <div className="flex flex-col gap-1 mb-10">
            <h4 className="uppercase tracking-[0.3em]">
              Real Success Stories
            </h4>
            <h3 className="text-3xl brand-text-primary">
              Our clients are a testament to what’s possible
            </h3>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg relative">
            <Image src={houseImg} alt="Client success house" className="rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16243E]/20 to-transparent" />
          </div>

          {/* Small Message */}
          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            And there are many more success stories like these…
            <br />Ready to make your hard-earned cash work as hard as you do?
            <br />
            Click the link below to get more information.
            <br /><br />
            <span className="font-semibold text-[#16243E] text-lg">— Peter & Matt</span>
          </p>
        </div>

                {/* RIGHT SIDE – Modern Bullet Points */}
        <div className="flex flex-col gap-8 justify-start brand-bg-navy px-7 rounded-2xl py-12 w-1/2">

          {/* Sub Indicator + Title */}
          <div className="flex flex-col gap-1 mb-10">
            <h4 className="uppercase tracking-[0.3em]">
              Why FIFO Workers Trust Us
            </h4>
            <h3 className="text-3xl brand-text-primary">
              Why Our System Works So Well
            </h3>
          </div>
          {/* Bullet Items */}
          <div className="flex flex-col gap-8">
            {[
              {
                title: "THIS ISN’T JUST RECYCLED INFORMATION",
                desc: "It’s crafted by experienced professionals who’ve helped hundreds of FIFO workers and high-income earners invest in property.",
              },
              {
                title: "WE BELIEVE IN TRANSPARENCY",
                desc: "We want to make property investing accessible and understandable for everyone.",
              },
              {
                title: "YOU WORK HARD AND DON’T HAVE TIME TO WASTE.",
                desc: "Our team gets straight to the point, simplifying property investment so you don’t have to figure it all out on your own.",
              },
              {
                title: "SAVE THOUSANDS OF HOURS OF RESEARCH",
                desc: "Avoid costly mistakes and build your property portfolio quicker without doing all the legwork yourself.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-3 p-5 rounded-xl bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border border-white/10">
                <div className="mt-1">
                  <CiCircleCheck className="text-3xl" />
                </div>
            
                <div>
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className=" mt-1 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessSection;
