import { useTranslations } from "next-intl";
import { FaCheck } from "react-icons/fa";

export default function AccountPlans() {
  const t = useTranslations("PricingPage");

  const plans = [
    {
      title: t("PricingPage_Diaspora_Title"),
      features: [
        t("PricingPage_Diaspora_Feature1"),
        t("PricingPage_Diaspora_Feature2"),
        t("PricingPage_Diaspora_Feature3"),
        t("PricingPage_Diaspora_Feature4"),
        t("PricingPage_Diaspora_Feature5"),
        t("PricingPage_Diaspora_Feature6"),
        t("PricingPage_Diaspora_Feature7"),
      ],
      bgColor: "bg-[#5C2E00]",
      textColor: "text-[#F5E6DA]",
    },
    {
      title: t("PricingPage_BasicStudent_Title"),
      features: [
        t("PricingPage_BasicStudent_Feature1"),
        t("PricingPage_BasicStudent_Feature2"),
        t("PricingPage_BasicStudent_Feature3"),
        t("PricingPage_BasicStudent_Feature4"),
        t("PricingPage_BasicStudent_Feature5"),
      ],
      bgColor: "bg-[#A35630]",
      textColor: "text-[#FFF8F2]",
    },
    {
      title: t("PricingPage_Premium_Title"),
      features: [
        t("PricingPage_Premium_Feature1"),
        t("PricingPage_Premium_Feature2"),
        t("PricingPage_Premium_Feature3"),
        t("PricingPage_Premium_Feature4"),
        t("PricingPage_Premium_Feature5"),
        t("PricingPage_Premium_Feature6"),
      ],
      bgColor: "bg-[#42210B]",
      textColor: "text-[#FCEFE1]",
    },
    {
      title: t("PricingPage_TraderAgent_Title"),
      features: [
        t("PricingPage_TraderAgent_Feature1"),
        t("PricingPage_TraderAgent_Feature2"),
        t("PricingPage_TraderAgent_Feature3"),
        t("PricingPage_TraderAgent_Feature4"),
        t("PricingPage_TraderAgent_Feature5"),
      ],
      bgColor: "bg-[#7C3E1D]",
      textColor: "text-[#FFF6ED]",
    },
    {
      title: t("PricingPage_Startup_Title"),
      features: [
        t("PricingPage_Startup_Feature1"),
        t("PricingPage_Startup_Feature2"),
        t("PricingPage_Startup_Feature3"),
        t("PricingPage_Startup_Feature4"),
        t("PricingPage_Startup_Feature5"),
        t("PricingPage_Startup_Feature6"),
        t("PricingPage_Startup_Feature7"),
      ],
      bgColor: "bg-[#59351A]",
      textColor: "text-[#FFF2E2]",
    },
    {
      title: t("PricingPage_Business_Title"),
      features: [
        t("PricingPage_Business_Feature1"),
        t("PricingPage_Business_Feature2"),
        t("PricingPage_Business_Feature3"),
        t("PricingPage_Business_Feature4"),
        t("PricingPage_Business_Feature5"),
        t("PricingPage_Business_Feature6"),
        t("PricingPage_Business_Feature7"),
      ],
      bgColor: "bg-[#8B4513]",
      textColor: "text-[#FFEFE0]",
    },
  ];

  return (
    <div className="py-10 px-5 bg-[#FAF3E0]">
      {/* Header Section */}
      <div className="bg-[#3E1F00] text-[#F8E4C3] py-6 px-4 text-center rounded-lg">
        <h2 className="text-4xl font-extrabold">{t("PricingPage_Header_Title")}</h2>
        <p className="text-lg mt-2">
          Bantupay offers{" "}
          <strong className="text-[#F3B562]">{t('PricingPage_Header_Description1')}</strong> {t('PricingPage_Header_Description2')}{" "} < br />
          <strong className="text-[#F3B562]">{t('PricingPage_Header_Description3')}</strong>. {t('PricingPage_Header_Description4')}
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md overflow-hidden ${plan.bgColor} ${plan.textColor} min-h-[400px] flex flex-col`}
          >
            {/* Plan Header */}
            <div className="bg-white text-[#3E1F00] text-center font-bold py-3 px-4 text-lg uppercase">
              {plan.title}
            </div>
            {/* Plan Features */}
            <div className="p-6 flex-grow">
              <ul className="mt-4 space-y-2 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span>
                     <FaCheck className="text-white" /> 
                    </span>
                    
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
