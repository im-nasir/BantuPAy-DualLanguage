"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ContactForm() {
  const [phone, setPhone] = useState("");

  return (
    <div className="bg-[#F7F0E7] min-h-screen flex flex-col items-center py-16 px-4">
      <h1 className="text-5xl font-bold text-gray-900 mb-2">Contact Us</h1>
      <p className="text-gray-500  mb-8 text-center max-w-lg">
        Feel free to reach out in case of any inquiries. We don’t take long to respond!
      </p>

      <div className="w-full max-w-5xl px-6">
        {/* First Name Input */}
        <input
          type="text"
          placeholder="First Name"
          className="w-full p-4 rounded-md mb-4 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#582D1D]"
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-md mb-4 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#582D1D]"
        />

        {/* Phone Number Input - Styled to Match Other Inputs */}
        <div className="relative w-full mb-4">
  <PhoneInput
    country={"uk"} // Default country
    value={phone}
    onChange={(value) => setPhone(value)}
    inputClass="!w-full !h-16 !p-5 !pl-20 !rounded-md !border !border-gray-300 !bg-white !text-gray-900 focus:!outline-none focus:!ring-2 focus:!ring-[#582D1D]"
    containerClass="w-full"
    buttonClass="!absolute !left-5 !top-1/2 !-translate-y-1/2"
  />
</div>


        {/* Message Input */}
        <textarea
          placeholder="Message"
          rows="5"
          className="w-full p-4 rounded-md border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#582D1D]"
        ></textarea>

        {/* Submit Button */}
        <button className="w-full p-4 rounded-md mt-6 bg-[#582D1D] text-white font-semibold hover:bg-[#402218] transition duration-300">
          Send Message
        </button>
      </div>
    </div>
  );
}
