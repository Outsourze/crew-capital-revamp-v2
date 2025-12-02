import whychooseusHouse from "@/assets/images/home/whychooseusHouse.png";
import Image from "next/image";

const MiningBanner = () => {
    return (
        <div className="max-w-[90rem] m-auto w-full rounded-2xl absolute -bottom-36 left-1/2 transform -translate-x-1/2 bg-[#1c2e4e] overflow-hidden flex justify-between items-end">
            
            {/* Text content */}
            <div className="max-w-3xl p-10 py-14 ">
                <h2 className="text-4xl font-semibold text-white leading-snug drop-shadow-lg">
                    Fast-track your property investment journey.
                </h2>

                <p className="mt-4 text-lg text-green-300 leading-relaxed drop-shadow">
                    Clear steps to grow your portfolio — plus smart tax strategies to keep more money in your pocket.
                </p>
            </div>

            <div className="relative h-full">
                {/* Right-floating image */}
                <Image
                    src={whychooseusHouse}
                    alt="House"
                    className="w-[260px] lg:w-[320px]"
                />
            </div>
            
        </div>
    );
};

export default MiningBanner;
