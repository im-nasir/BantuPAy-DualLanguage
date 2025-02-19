import Image from "next/image";
import { useTranslations } from "next-intl";

const ImageText = () => {
    const t = useTranslations('IntroPage')
  return (
    <div className="relative z-10 flex flex-col md:flex-row items-center  justify-between bg-white p-8 md:p-12 rounded-lg mx-auto w-full max-w-screen-xl mt-16 md:mt-22">
      
      {/* Left Side: Text - Adjusted Size */}
      <div className="md:w-2/5 flex flex-col justify-center text-center md:text-left">
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-[#562315] mb-4 leading-relaxed">
          <span className="block text-center md:pl-10">Bantu Pay</span>
          <span className="block">{t('title')}</span>
          <span className="block text-center md:pr-10">{t('title2')}</span>
        </h2>
        <p className="text-gray-600 text-md text-center sm:text-lg md:text-xl">
        {t('description')}
        </p>
      </div>

      {/* Right Side: Image - Increased Size */}
      <div className="md:w-3/5 flex justify-center">
        <Image
          src="/Artboard.png"
          alt="Artboard"
          width={900} // Increased width
          height={700} // Increased height
          priority = {true}
          className="rounded-lg object-cover w-full h-auto max-w-2xl md:max-w-5xl"
        />
      </div>
    </div>
  );
};

export default ImageText;
