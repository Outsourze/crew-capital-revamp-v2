import bgImg from "@/assets/images/sub-services/mining/mining2.jpg";
import Image from "next/image";
import { BsDownload } from "react-icons/bs";

const AboutMining2 = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl m-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Image Left */}
        <div className="w-full lg:w-[45%] relative rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/30 to-transparent rounded-2xl"></div>
          <Image src={bgImg} alt="property investment" className="rounded-2xl" />
        </div>

        {/* Text Right */}
        <div className="w-full lg:w-[55%] flex flex-col gap-7">
          {/* Section Indicator */}
          <p className="text-green-300 text-xl flex items-center gap-2">
            <span className="w-8 h-[3px] bg-green-300 rounded-full inline-block"></span>
            Simplifying Property Investment
          </p>

          {/* Main Title */}
          <h1 className="text-white text-4xl lg:text-5xl font-bold leading-snug">
            Invest Smarter, Save More, and Avoid the Hassle
          </h1>

          {/* Paragraphs */}
          <p className="text-white text-lg leading-relaxed">
            It simplifies the property investment process, offering clear steps to purchase your first, second, and third investment properties. Plus, it shows you how to save hundreds of thousands of dollars on taxes, so you keep more money in your pocket instead of handing it to the ATO.
          </p>

          <p className="text-white text-lg leading-relaxed">
            Working 12-hour shifts in a demanding job is exhausting, and the last thing you want to do at home is research investment properties. That’s why we created a free guide specifically for busy FIFO workers.
          </p>

          {/* Callout Box */}
          <div className="bg-white border-l-4 border-green-300 px-5 py-3 rounded-md text-dark-navy font-medium">
            Free Guide Available – Start Your Investment Journey Today!
          </div>

          {/* CTA Button */}
          <button className="mt-5 px-6 py-3 hover:opacity-80 transition-colors w-max text-green-300 border-green-300 border rounded-full flex items-center gap-3">
            <BsDownload size={20}/> Download Free Guide 
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMining2;
