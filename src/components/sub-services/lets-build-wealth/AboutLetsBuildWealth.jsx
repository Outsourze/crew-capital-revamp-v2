"use client";

import { motion } from "framer-motion";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const AboutLetsBuildWealth = () => {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left text block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6"
        >
          <h2 className="text-4xl brand-text-primary">
            Calling all Airline Crew & FIFO workers
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Imagine retiring wealthy in just 5-7 years, all while building a reliable passive income of <span className="font-semibold">$150k+</span> to enjoy a comfortable lifestyle.
          </p>
          <p className="text-gray-700 leading-relaxed">
            It’s entirely possible with our Airline Crew & FIFO/Mining professional property program.
          </p>
        </motion.div>

        {/* Right text block */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6 brand-bg-primary p-10 rounded-2xl shadow-xl"
        >
          <p className="text-lg leading-relaxed">
            Backed by <span className="font-semibold">25 years of property experience</span>, the Airline Crew/Staff & FIFO/Mining professional property program provides everything you need to:
          </p>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <div className="flex items-center gap-3">
                <RiArrowRightDoubleLine />
                <p>Build a passive income stream that grows over time</p>
            </div>
            <div className="flex items-center gap-3">
                <RiArrowRightDoubleLine />
                 <p>Retire early while maintaining a comfortable lifestyle</p>
            </div>
            <div className="flex items-center gap-3">
                <RiArrowRightDoubleLine />
                <p>Leverage expert property strategies tailored for professionals</p>
            </div>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutLetsBuildWealth;
