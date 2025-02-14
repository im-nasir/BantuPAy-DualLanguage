"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const Select = dynamic(() => import("react-select"), { ssr: false });

const accountOptions = [
  { value: "diaspora", label: "Diaspora" },
  { value: "business", label: "Business" },
  { value: "startup", label: "Startup" },
  { value: "premium", label: "Premium" },
  { value: "basic_student", label: "Basic/Student" },
  { value: "agent", label: "Agent" },
];

export default function PreSignUpForm() {
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
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#F5EDE1] px-6">
      {/* Left Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <img src="/signup.png" alt="Signup Image" className="max-w-xl w-full drop-shadow-xl rounded-lg" />
      </div>



      {/* Right Side - Form */}
      <div className="md:w-1/2 bg-white p-8 shadow-lg rounded-lg max-w-lg">
        <h2 className="text-3xl font-bold mb-4 text-black">Pre - SignUp Form</h2>
        <p className="text-gray-600 mb-6">
          Do You Want to Be The First One To Be Part Of The BantuPay Community For When We Launch ..? Then Leave Your Details Below!!!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-400"
            required
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-400"
            required
          />

          {/* Phone Input */}
          <PhoneInput
            country={"pk"}
            value={formData.phone}
            onChange={(phone) => handleChange("phone", phone)}
            inputProps={{
              required: true,
              className: "w-full p-3 border rounded-lg",
            }}
            containerClass="w-full"
            inputClass="w-full !p-3 !border rounded-lg"
          />

          {/* Select Dropdown - Fix Hydration Issue */}
          {isMounted && (
            <Select
              options={accountOptions}
              placeholder="Account Interested"
              className="w-full"
              onChange={(selectedOption) => handleChange("accountType", selectedOption)}
              isSearchable={false}
              required
            />
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#8B4513] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#5A2D0C] transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
