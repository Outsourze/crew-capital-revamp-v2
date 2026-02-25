"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import chart from "@/assets/images/sub-services/letsbuildwealth/chart.jpg";

export default function Benefits() {
  const items = [
    "Secure your hard-earned cash in cash-flow positive properties",
    "Reduce your tax burden by up to 30%",
    "Build a passive income of $150k+ per year",
    "Set yourself up for life in 5–7 years",
    "Create life-changing wealth without unnecessary risks",
  ];

  return (
    <section className="relative w-full brand-bg-secondary py-28">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <h2 className="text-white text-5xl font-semibold leading-tight tracking-tight">
            Build Real Wealth  
            <span className="brand-text-primary">. Smarter. Faster.</span>
          </h2>

          <div className="space-y-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <IoMdCheckmarkCircleOutline className="brand-text-primary w-8 h-8 mt-1" />
                <p className="text-white/90 text-lg leading-relaxed font-light">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="
            rounded-2xl overflow-hidden border border-white/10 
            bg-[#1d2f52] shadow-xl
            transition hover:shadow-2xl
          ">
            <Image
              src={chart}
              alt="Investment discussion"
              width={760}
              height={480}
              className="object-cover transition duration-700 hover:scale-[1.02]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
