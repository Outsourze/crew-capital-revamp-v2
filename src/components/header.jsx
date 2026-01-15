"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SlMenu } from "react-icons/sl";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.15,
      ease: "easeIn",
    },
  },
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Event/Webinars", href: "/event" },
  { label: "Contact Us", href: "/contact-us" },
];

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  return (
    <div className="px-20 py-10 justify-between flex items-start absolute z-10 w-full">
      <div className="text-white">
        <h1>ICON</h1>
        <p className="capitalize">THE PREMIUM INDUSTRY SOLUTION</p>
      </div>

      <div className="relative">
        {/* Menu Button */}
        <button
          onClick={() => setIsNavOpen((prev) => !prev)}
          className="brand-bg-primary px-4 py-2 rounded-sm cursor-pointer"
          aria-expanded={isNavOpen}
        >
          <SlMenu size={24} />
        </button>

        {/* Dropdown */}
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute right-0 mt-4 w-[300px] flex flex-col gap-3 text-[#c9f0d5]"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  variants={itemVariants}
                  className="w-full text-right"
                >
                  <Link
                    href={item.href}
                    className="block text-lg px-3 py-1 hover:bg-[#24282A] hover:text-[#D6DD37]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
