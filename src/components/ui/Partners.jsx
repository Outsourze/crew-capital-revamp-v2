import blue from "@/assets/images/about/blue.jpg";
import hall from "@/assets/images/about/hall.jpg";
import jewel from "@/assets/images/about/jewelfinance_logo.jpg";
import Image from "next/image";

const partners = [blue, hall, jewel];

const Partners = ( { styles }) => {
  return (
    <section className={`${styles} my-20`}>
      <div className="max-w-7xl mx-auto px-5 flex flex-wrap justify-center md:justify-between items-center gap-6">
        {partners.map((logo, index) => (
          <div
            key={index}
            className="
              w-32 sm:w-40 md:w-48 
              flex justify-center items-center
              transition-transform duration-300
              hover:scale-105 hover:shadow-xl
            "
          >
            <Image
              src={logo}
              alt={`Partner ${index + 1}`}
              className="rounded-2xl object-contain"
              width={192}
              height={96}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;