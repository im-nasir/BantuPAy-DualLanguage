"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { useTranslations } from "next-intl";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const images = [
  "/carousel.png",
  "/carousel2.png",
  "/carousel3.png",
  "/carousel9.png",
  "/carousel5.png",
  "/carousel6.png",
  "/carousel7.png",
  "/carousel8.png",
];

export default function FullWidthCarousel() {
  const t = useTranslations("CarouselPages");

  return (
    <div className="w-full bg-gradient-to-b from-[#F7F0E7] to-[#EADBC8] py-10">
      {/* Header Section */}
      <div className="text-center pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#562315] drop-shadow-md">
          {t("title")}
        </h1>
        <p className="text-md md:text-lg font-medium text-gray-600 mt-2 max-w-3xl mx-auto">
          {t("description")}
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="bg-transparent"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center bg-transparent">
            <div className="relative transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-1">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-[90%] md:w-[85%] lg:w-[100%] xl:w-[100%] 
                rounded-xl shadow-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
