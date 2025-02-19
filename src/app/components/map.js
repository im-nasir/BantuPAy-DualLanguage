import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Map() {
  const t = useTranslations("MapPages");
  return (
    <div className="flex flex-col items-center text-center pt-8 justify-center px-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#562315]">
        {t("title")}
      </h1>
      <p className="text-sm md:text-md lg:text-lg font-medium text-gray-500">
      {t("description")}
      </p>
      <p className="text-sm md:text-md lg:text-lg font-medium text-gray-500">
      {t("description2")}
      </p>
      
      <div className="w-full flex justify-center pt-4">
        <Image 
          src="/map.png" 
          alt="Bantu Pay"
          width={1200} 
          height={800}  
          priority = {true}
          className="w-full max-w-3xl md:max-w-5xl lg:max-w-7xl rounded-lg"
        />
      </div>
    </div>
  );
}
