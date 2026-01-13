import aboutbanner from "@/assets/images/about/about-banner.jpg";
import Link from "next/link";

const BannerIntro = ({ bgImg, title }) => {
  let bgCover = bgImg ? bgImg.src : aboutbanner.src;
  return (
    <div className="m-auto w-full pb-10 ">
      <div
        style={{ backgroundImage: `url(${bgCover})` }}
        className="relative flex flex-col gap-5 w-full bg-no-repeat bg-cover bg-center justify-center items-center py-32"
      >
        <div className="absolute inset-0 bg-[#D6DD37] mix-blend-color opacity-70" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-5">
          <h1 className="text-4xl text-white font-semibold">{title}</h1>
          <div className="flex gap-2 items-center py-2 px-4 rounded-full text-white text-sm bg-white/10 backdrop-blur-md">
            <Link href={"/"}>Home</Link>
            <p>
              / <span className="brand-text-primary">{title}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerIntro;