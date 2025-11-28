import React from "react";
import Lottie from "lottie-react";
import playBtn from "@/assets/animations/Play Button Pulse.json";

const LottieAnimation = () => {
  return (
    <div style={{ width: 200, height: 200 }}>
      <Lottie
        animationData={playBtn}
        loop={true}
        autoplay={true}
      />
    </div>
  );
};

export default LottieAnimation;