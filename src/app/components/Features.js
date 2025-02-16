import { useTranslations } from "next-intl";
import Image from "next/image";

export default function FeaturesSection() {
  const t = useTranslations("FeaturesPage");

  return (
    <section className="bg-[#562315] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F7F0E7] mb-4">
          {t("title")}
        </h2>
        <p className="text-lg text-[#EDE0D4] mb-8">{t("subtitle")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="border border-[#F7F0E7] rounded-lg p-6 text-center bg-[#F7F0E7] shadow-lg transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <Image src="/smartphone.png" alt={t("feature1_title")} width={70} height={70} />
            </div>
            <h3 className="text-2xl font-semibold text-[#562315]">{t("feature1_title")}</h3>
            <p className="text-gray-700 text-sm mt-2">{t("feature1_description")}</p>
          </div>

          {/* Feature 2 */}
          <div className="border border-[#F7F0E7] rounded-lg p-6 text-center bg-[#F7F0E7] shadow-lg transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <Image src="/money-transfer-1.png" alt={t("feature2_title")} width={70} height={70} />
            </div>
            <h3 className="text-2xl font-semibold text-[#562315]">{t("feature2_title")}</h3>
            <p className="text-gray-700 text-sm mt-2">{t("feature2_description")}</p>
          </div>

          {/* Feature 3 */}
          <div className="border border-[#F7F0E7] rounded-lg p-6 text-center bg-[#F7F0E7] shadow-lg transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <Image src="/customer-service.png" alt={t("feature3_title")} width={70} height={70} />
            </div>
            <h3 className="text-2xl font-semibold text-[#562315]">{t("feature3_title")}</h3>
            <p className="text-gray-700 text-sm mt-2">{t("feature3_description")}</p>
          </div>

          {/* Feature 4 */}
          <div className="border border-[#F7F0E7] rounded-lg p-6 text-center bg-[#F7F0E7] shadow-lg transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <Image src="/smartphone-1.png" alt={t("feature4_title")} width={70} height={70} />
            </div>
            <h3 className="text-2xl font-semibold text-[#562315]">{t("feature4_title")}</h3>
            <p className="text-gray-700 text-sm mt-2">{t("feature4_description")}</p>
          </div>

          {/* Feature 5 */}
          <div className="border border-[#F7F0E7] rounded-lg p-6 text-center bg-[#F7F0E7] shadow-lg transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <Image src="/store.png" alt={t("feature5_title")} width={70} height={70} />
            </div>
            <h3 className="text-2xl font-semibold text-[#562315]">{t("feature5_title")}</h3>
            <p className="text-gray-700 text-sm mt-2">{t("feature5_description")}</p>
          </div>

          {/* Feature 6 */}
          <div className="border border-[#F7F0E7] rounded-lg p-6 text-center bg-[#F7F0E7] shadow-lg transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <Image src="/transaction.png" alt={t("feature6_title")} width={70} height={70} />
            </div>
            <h3 className="text-2xl font-semibold text-[#562315]">{t("feature6_title")}</h3>
            <p className="text-gray-700 text-sm mt-2">{t("feature6_description")}</p>
          </div>

          {/* Feature 7 */}
          <div className="border border-[#F7F0E7] rounded-lg p-6 text-center bg-[#F7F0E7] shadow-lg transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <Image src="/payment.png" alt={t("feature7_title")} width={70} height={70} />
            </div>
            <h3 className="text-2xl font-semibold text-[#562315]">{t("feature7_title")}</h3>
            <p className="text-gray-700 text-sm mt-2">{t("feature7_description")}</p>
          </div>

          {/* Feature 8 */}
          <div className="border border-[#F7F0E7] rounded-lg p-6 text-center bg-[#F7F0E7] shadow-lg transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <Image src="/payment-method.png" alt={t("feature8_title")} width={70} height={70} />
            </div>
            <h3 className="text-2xl font-semibold text-[#562315]">{t("feature8_title")}</h3>
            <p className="text-gray-700 text-sm mt-2">{t("feature8_description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
