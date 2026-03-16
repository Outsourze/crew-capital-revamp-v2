import Image from "next/image";
import { useState } from "react";
import peter from "@/assets/images/about/peter.png";
import matt from "@/assets/images/about/matt.png";
import natalie from "@/assets/images/about/natalie.png";
import timm from "@/assets/images/about/timm.png";

const founderData = [
  {
    name: "Peter Thompson",
    occupation: "Managing Partner",
    descrpt:
      "Peter Thompson is an entrepreneur and property strategist who founded Crew Capital Management to help investors build wealth through coordinated property advisory, finance, and investment strategies. His work combines financial strategy, and long-term property investment, with a focus on helping clients build sustainable wealth over time.",
    img: peter,
  },
  {
    name: "Matt Cooper",
    occupation: "Managing Partner",
    descrpt:
      "Matt Cooper successfully transitioned from elite professional athlete to business professional, combining his sporting discipline and leadership with roles in property investment advisory, mortgage and financial services, and investor engagement through Crew Capital.",
    img: matt,
  },
  {
    name: "Tim Brasher",
    occupation: "Sales Director",
    descrpt:
      "Tim Brasher successfully transitioned from elite NRL fullback and international representative to business professional, contributing to Crew Capital’s property investment advisory platform through investor engagement, client relationships, and strategic property discussions.",
    img: timm,
  },
  {
    name: "Nathalie",
    occupation: "Admin & Marketing",
    descrpt:
      "Supporting Crew Capital's client operations and investor communication to deliver clear strategies.",
    img: natalie,
  },
];

const MeetOurteam = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="brand-bg-secondary lg:px-20 md:px-10 px-5 py-24">
      <div className="max-w-[90rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h4 className="uppercase tracking-[0.3em] text-white mb-3">Our Experts</h4>
          <h2 className="text-3xl md:text-4xl brand-text-primary font-semibold">
            Meet Our Real Estate Team
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {founderData.map((member, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden h-[420px] cursor-pointer"
              onClick={() => toggleDescription(index)}
            >
              {/* Image */}
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 w-full p-6 transition-all duration-500">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="brand-text-primary text-sm mb-3">{member.occupation}</p>

                {/* Description */}
                <p
                  className={`text-gray-300 text-sm leading-relaxed overflow-hidden transition-all duration-500
                  ${
                    activeIndex === index
                      ? "max-h-80 translate-y-0 opacity-100"
                      : "max-h-0 opacity-0 translate-y-3"
                  } group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0`}
                >
                  {member.descrpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurteam;