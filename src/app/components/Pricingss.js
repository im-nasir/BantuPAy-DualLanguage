import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const plans = [
  { name: "GOLD", price: "3.00 USD", features: [true, true, true, true, true, true, true, true, true] },
  { name: "PREMIUM", price: "2.00 USD", features: [true, true, false, true, true, true, true, false, false] },
  { name: "DIASPORA", price: "0.00 USD", features: [true, true, false, true, true, false, true, true, false] },
  { name: "SILVER", price: "1.00 USD", features: [true, true, false, true, false, true, true, false, false] },
  { name: "DIASPORA+", price: "3.00 USD", features: [true, true, false, true, true, true, true, true, true] },
  { name: "BASIC", price: "0.00 USD", features: [true, true, false, true, false, true, true, false, false] },
];

const featuresList = [
  "CURRENT ACC",
  "SAVINGS ACC",
  "VIRTUAL VISA",
  "Withdraw from Agent",
  "Top up VISA",
  "Topup Mobile Money",
  "Marketplace",
  "VISA Payouts",
  "2nd Number + OTP",
];

export default function Pricing() {
  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-10 min-h-screen bg-gradient-to-b from-[#FFF5EB] to-[#EADBC8]">
      <h2 className="text-3xl sm:text-5xl font-extrabold text-[#562315] mb-8 text-center">
        Choose Your Plan
      </h2>

      {/* Mobile Scrollable Wrapper */}
      <div className="overflow-x-auto w-full">
        <div className="flex md:grid md:grid-cols-7 gap-6 w-full min-w-[700px] md:min-w-0">

          {/* Features Column */}
          <div className="bg-white shadow-lg rounded-xl p-4 sm:p-5 flex-1 min-w-[120px] sm:w-44 flex flex-col items-center text-center border border-gray-200">
            <div className="bg-[#9C6644] text-white py-3 rounded-t-lg w-full">
              <h3 className="text-md sm:text-lg font-semibold">Features</h3>
            </div>

            {featuresList.map((feature, index) => (
              <div key={index} className="flex items-center justify-center h-12 text-md sm:text-md font-semibold text-[#562315] border-b last:border-none">
                {feature}
              </div>
            ))}

            <div className="bg-[#9C6644] text-white py-3 mt-2 rounded-b-lg w-full">
              <h3 className="text-md sm:text-lg font-semibold">Pricing</h3>
            </div>
          </div>

          {/* Plan Cards */}
          {plans.map((plan, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-4 sm:p-5 flex-1 min-w-[120px] sm:w-44 flex flex-col border border-gray-200 transition-all hover:scale-105 hover:shadow-xl">
              <div className="bg-[#9C6644] text-white py-3 rounded-t-lg">
                <h3 className="text-md sm:text-lg font-semibold text-center">{plan.name}</h3>
              </div>

              {plan.features.map((included, featureIndex) => (
                <div key={featureIndex} className="flex items-center justify-center h-12 border-b last:border-none">
                  {included ? (
                    <FaCheckCircle className="text-green-500 w-5 h-5" />
                  ) : (
                    <FaTimesCircle className="text-red-500 w-5 h-5" />
                  )}
                </div>
              ))}

              <div className="bg-[#9C6644] text-white py-3 mt-2 rounded-b-lg text-md sm:text-lg font-bold text-center">
                {plan.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
