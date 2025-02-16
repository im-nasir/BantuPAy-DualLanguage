"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("ContactPages");
  const [phone, setPhone] = useState("");

  return (
    <div className="bg-gradient-to-b from-[#F7F0E7] to-[#EADBC8] min-h-screen flex flex-col items-center py-12 px-4">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#562315] drop-shadow-md">
        {t("title")}
      </h1>
      <p className="text-md md:text-lg text-gray-600 mt-2 text-center max-w-2xl">
        {t("description")}
      </p>

      {/* Form Container */}
      <div className="w-full max-w-lg md:max-w-2xl bg-white p-8 md:p-10 mt-8 rounded-xl shadow-lg">
        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">{t("name")}</label>
          <input
            type="text"
            placeholder={t("name")}
            className="w-full p-3 rounded-md border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#582D1D] transition-all duration-200 hover:shadow-md"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">{t("email")}</label>
          <input
            type="email"
            placeholder={t("email")}
            className="w-full p-3 rounded-md border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#582D1D] transition-all duration-200 hover:shadow-md"
          />
        </div>

        {/* Phone Number Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">{t("phone")}</label>
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={(value) => setPhone(value)}
            inputClass="!w-full !h-12 !p-3 !rounded-md !border !border-gray-300 !bg-white !text-gray-900 focus:!outline-none focus:!ring-2 focus:!ring-[#582D1D] transition-all duration-200 hover:!shadow-md"
            containerClass="w-full"
          />
        </div>

        {/* Message Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium">{t("message")}</label>
          <textarea
            placeholder={t("message")}
            rows="4"
            className="w-full p-3 rounded-md border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#582D1D] transition-all duration-200 hover:shadow-md"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className="w-full p-3 rounded-md bg-[#582D1D] text-white font-semibold text-lg shadow-md hover:bg-[#402218] hover:scale-105 transition-all duration-300">
          {t("buttonMsg")}
        </button>
      </div>
    </div>
  );
}
