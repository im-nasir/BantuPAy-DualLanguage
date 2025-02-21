import { useTranslations } from "next-intl";
import Image from "next/image";

export default function FeaturesSection() {
  const t = useTranslations("FeaturesPage");

  const features = [
    { img: "/smartphone.png", title: "feature1_title", description: "feature1_description" },
    { img: "/money-transfer-1.png", title: "feature2_title", description: "feature2_description" },
    { img: "/customer-service.png", title: "feature3_title", description: "feature3_description" },
    { img: "/smartphone-1.png", title: "feature4_title", description: "feature4_description" },
    { img: "/store.png", title: "feature5_title", description: "feature5_description" },
    { img: "/transaction.png", title: "feature6_title", description: "feature6_description" },
    { img: "/payment.png", title: "feature7_title", description: "feature7_description" },
    { img: "/payment-method.png", title: "feature8_title", description: "feature8_description" },
  ];

  return (
    <section className="bg-[#562315] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#F7F0E7] mb-4">
          {t("title")}
        </h1>
        <p className="text-lg text-[#EDE0D4] mb-8">{t("subtitle")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-[#F7F0E7] rounded-lg p-6 text-center bg-[#F7F0E7] shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={feature.img}
                  alt={t(feature.title)}
                  width={70}
                  height={70}
                  priority={index === 0} // Prioritize only the first image
                  loading={index === 0 ? "eager" : "lazy"} // Lazy load non-critical images
                />
              </div>
              <h2 className="text-2xl font-semibold text-[#562315]">{t(feature.title)}</h2>
              <p className="text-gray-700 text-sm mt-2">{t(feature.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
