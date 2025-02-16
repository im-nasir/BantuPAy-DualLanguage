"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const Select = dynamic(() => import("react-select"), { ssr: false });

export default function PreSignUpForm() {
  const t = useTranslations("SignupPages");

  const accountOptions = [
    { value: "diaspora", label: t("account_options.diaspora") },
    { value: "business", label: t("account_options.business") },
    { value: "startup", label: t("account_options.startup") },
    { value: "premium", label: t("account_options.premium") },
    { value: "basic_student", label: t("account_options.basic_student") },
    { value: "agent", label: t("account_options.agent") },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    accountType: null,
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-[#F7D9C4] to-[#8B4513] px-6 py-10">
      {/* Left Side - Image */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/signup.png"
          alt="Signup Illustration"
          className="max-w-lg w-full drop-shadow-lg rounded-lg"
        />
      </motion.div>

      {/* Right Side - Form */}
      <motion.div
        className="md:w-1/2 bg-white p-8 shadow-2xl rounded-2xl max-w-lg border border-[#8B4513] relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Decorative Circle */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-[#8B4513] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

        <h2 className="text-4xl font-bold mb-4 text-[#8B4513] text-center">
          {t("pre_signup_title")}
        </h2>
        <p className="text-gray-600 mb-6 text-center">{t("pre_signup_description")}</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              placeholder={t("name_placeholder")}
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#8B4513] outline-none bg-[#F9F3ED] text-[#562315] shadow-sm"
              required
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              placeholder={t("email_placeholder")}
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#8B4513] outline-none bg-[#F9F3ED] text-[#562315] shadow-sm"
              required
            />
          </div>

          {/* Phone Input */}
          <div className="relative">
            <PhoneInput
              country={"us"}
              value={formData.phone}
              onChange={(phone) => handleChange("phone", phone)}
              inputProps={{
                required: true,
                className: "w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#8B4513] outline-none bg-[#F9F3ED] text-[#562315] shadow-sm",
              }}
              containerClass="w-full"
              inputClass="w-full !p-3 !border rounded-lg"
            />
          </div>

          {/* Select Dropdown (Hydration Issue Fix) */}
          {isMounted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Select
                options={accountOptions}
                placeholder={t("account_placeholder")}
                className="w-full"
                onChange={(selectedOption) =>
                  handleChange("accountType", selectedOption)
                }
                isSearchable={false}
                required
              />
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#8B4513] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#5A2D0C] transition-all duration-300 shadow-lg"
          >
            {t("signup_button")}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
