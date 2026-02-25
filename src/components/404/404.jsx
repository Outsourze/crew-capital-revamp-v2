"use client";

import dynamic from "next/dynamic";
import animation404 from "@/assets/animations/Error 404.json";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FillBtnLink } from "../ui/Button";
// Lazy-load Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 pb-20 bg-[#f9f9f9] px-4">
      
      {/* Lottie Animation */}
      <div className="w-full max-w-lg">
        <Lottie
          animationData={animation404}
          loop={true}
          className="w-full h-auto"
        />
      </div>

      {/* Optional 404 Text */}
      <h1 className="mt-6 text-4xl font-bold text-gray-800 text-center">
        OPPS! This Page is Not Found
      </h1>
      <p className="mt-2 text-gray-500 text-center mb-5">
        The page you are looking for does not exist.
      </p>

      <FillBtnLink href={"/"}>
        <FaRegArrowAltCircleLeft size={20}/>
        Go back home
      </FillBtnLink>
    </div>
  );
};

export default Error404;
