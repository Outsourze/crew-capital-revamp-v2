import React from "react";
import Lottie from "lottie-react";


const LottieAnimation = ({
  animation,
  width,
  height
}) => {
  return (
    <div style={{ width: width, height: height}}>
      <Lottie
        animationData={animation}
        loop={true}
        autoplay={true}
      />
    </div>
  );
};

export default LottieAnimation;