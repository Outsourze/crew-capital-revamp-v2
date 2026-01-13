import bgImg from "@/assets/images/sub-services/airline/office-girl.jpg";
import { FillBtnLink } from "@/components/ui/Button";
import Image from "next/image";

const AboutAirline = () => {
  return (
    <div className="">
      <div className="max-w-7xl m-auto flex flex-col gap-16 py-24 px-10">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-[45%] flex flex-col gap-7 items-start">
            <div className="flex flex-col">
              <h4 className="uppercase tracking-[0.3em]">
                What We Do
              </h4>
              <h3 className="text-3xl brand-text-primary">
                Attention Airline Crew & Aviation Professionals
              </h3>
            </div>
            <p className="">
              Feeling drained by shift work and yearning for more freedom? Imagine having enough passive income (earning money while you sleep) to reduce work hours and focus on what you truly love.
            </p>

            {/* Callout */}
            <div className=" tracking-[0.3em] bg-green-100/50 border-l-4 border-[#E3572B] px-5 py-3 rounded-md text-dark-navy font-medium">
              We Understand Your Challenges
            </div>

            <FillBtnLink href={"/"}>
              Learn More
            </FillBtnLink>
          </div>

          {/* Image */}
          <div className="w-full lg:w-[45%] relative rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/40 to-transparent rounded-2xl"></div>
            <Image src={bgImg} alt="office girl" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAirline;
