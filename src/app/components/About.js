'use client';

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function About() {
  const t = useTranslations("AboutPage");

  return (
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center bg-[#F7F0E7] px-6 py-10 md:py-16 w-full gap-12">
      {/* Left Side: Image */}
      <motion.div
        className="md:w-1/2 flex flex-col items-center text-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative group overflow-hidden rounded-lg ">
          <Image
            src="/About.png"
            alt="Bantu Pay"
            width={800}
            height={700}
            className="rounded-lg object-cover w-full max-w-md md:max-w-2xl transition-transform duration-500 group-hover:scale-105"
          />
          {/* Image Overlay Effect */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
        </div>
        <h2 className="font-bold text-xl text-[#562315] mt-4">
          {t("image_caption")}
        </h2>
      </motion.div>

      {/* Right Side: Text */}
      <motion.div
        className="md:w-1/2 flex flex-col justify-center text-center md:text-left px-4 md:px-8 bg-white shadow-xl rounded-lg p-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-[#562315] leading-tight">
          {t("title")}
        </h2>
        <p className="text-gray-700 text-lg sm:text-lg md:text-xl leading-relaxed mt-4">
          {t("description")}
        </p>

        {/* Decorative Divider */}
        <div className="w-24 h-1 bg-[#562315] mt-6 mx-auto md:mx-0 rounded-full"></div>

        {/* Key Points */}
        <ul className="list-disc list-inside text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed mt-4 space-y-2">
          <motion.li whileHover={{ scale: 1.05 }} className="hover:text-[#562315] transition-all">
            {t("point1")}
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} className="hover:text-[#562315] transition-all">
            {t("point2")}
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} className="hover:text-[#562315] transition-all">
            {t("point3")}
          </motion.li>
        </ul>

        {/* Solution Section with a Highlight */}
        <p className="text-[#562315] text-lg sm:text-xl md:text-2xl font-semibold mt-6 border-l-4 border-[#562315] pl-4">
          {t("solution")}
        </p>
        <p className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed mt-4">
          {t("paragraph1")}
        </p>
        <p className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed mt-4">
          {t("paragraph2")}
        </p>
      </motion.div>
    </div>
  );
}
