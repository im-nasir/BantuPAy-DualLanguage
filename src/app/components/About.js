import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations('AboutPage');
  return (
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center bg-[#F7F0E7] px-6 py-10 md:py-16 w-full gap-12">
      {/* Left Side: Image */}
      <div className="md:w-1/2 flex flex-col items-center text-center">
        <Image
          src="/About.png" // Replace with actual image path
          alt="Bantu Pay"
          width={800}
          height={700}
          className="rounded-lg object-cover w-full max-w-md md:max-w-2xl"
        />
        <h2 className="font-bold text-xl text-[#562315] mt-4">
          {t('image_caption')}
        </h2>
      </div>

      {/* Right Side: Text */}
      <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left px-4 md:px-8">
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-[#562315] leading-tight">
          {t('title')}
        </h2>
        <p className="text-gray-600 text-lg sm:text-lg md:text-xl leading-relaxed mt-4">
          {t('description')}
        </p>

        {/* Key Points */}
        <ul className="list-disc list-inside text-gray-600 text-lg sm:text-xl md:text-2xl leading-relaxed mt-4 space-y-2">
          <li>{t('point1')}</li>
          <li>{t('point2')}</li>
          <li>{t('point3')}</li>
        </ul>

        <p className="text-[#562315] text-lg sm:text-xl md:text-2xl font-semibold mt-6">
          {t('solution')}
        </p>
        <p className="text-gray-600 text-lg sm:text-xl md:text-2xl leading-relaxed mt-4">
            {t('paragraph1')}       
        </p>
        <p className="text-gray-600 text-lg sm:text-xl md:text-2xl leading-relaxed mt-4">
            {t('paragraph2')}
        </p>
      </div>
    </div>
  );
}
